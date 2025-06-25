// -----------------------------------------------------------------------------
const ll = require('./data/locations.js') // ll.lh is list of location hashes
let gam = 0    // game number
let loc = null // location hash (fields are "location" (array) and "roles" (str)
let num = 9    // number of players
let you = 1    // current player number, incremented on each GET request
let spy = -1   // one-based index of the mole, 1 to num inclusive
let lgt = -1   // last GET timestamp, cuz some dumb browsers do two at once
let lid = null // last user-agent string we saw

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

app.set('trust proxy', true)

app.use(express.static('pub'))

/* 
we're doing this seemingly fragile thing that's surprisingly robust so far
where we use nothing but the user-agent string to tell users apart. so if you're
playing this and two people have identical user-agent strings (and if they 
happen to click refresh one after the other) then the second one to refresh will 
get shown the previous person's role. we haven't seen this happen so far despite 
people playing with similar phones. 
it turned out we couldn't just go by GET requests because one person's iPhone
was doing a GET twice in a row for some reason.

oh and the actually fragile thing here is that 2 separate groups of people can't
play this at the same time. which isn't normally an issue but might be if, say, 
I told people about it on the internet.
*/

// Pick the role for player i from array ra, assuming they're not the mole
function pickrole(ra, i) {
  // if the roles are A, B, C and spy is #2 then 3rd player should get role B:
  if (i > spy) { i -= 1 } 
  return ra[Math.min(ra.length-1, i-1)] // repeat the last one when we run out
}

function sendrole(resp) {
  let x = { g: gam, i: you, n: num }
  if (you === spy) { 
    x.loc = "That's what you have to find out!"
    x.role = "mole" 
  } 
  else {
    x.loc = loc.location
    x.role = pickrole(loc.roles, you)
  }
  resp.send(JSON.stringify(x))
}

// respond to GET request for the role
app.get('/getrole', (req, resp) => {
  const cid = req.header('User-agent') // for debugging
  console.log(`${shag(cid)}`) 
  //[{JSON.stringify(req.ips)}]`)
  // same player hitting refresh twice (within 2 seconds)
  if (cid === lid && you > 1 && Date.now() < lgt + 2000) {
    you -= 1
    console.log(
      `DOH! player ${you+1} = player ${you}, will resend role ${you}`)
  }
  if (you > num || loc === null) {
    console.log("no game started, sending null so client will show the "
               +"how-many-players form")
    resp.send('null')
  } else {
    console.log(`That's player ${you} of ${num} (game ${gam}) = ${you===spy ? "mole" : "non-mole"}`)
    sendrole(resp)
  }
  you += 1  // get ready for next player who'll make this GET request
  lid = cid // last = current
  lgt = Date.now() // unixtime in milliseconds
})

// POST the number of players
app.post('/setnum', (req, resp) => {
  num = req.body.num
  gam += 1 // new game when someone sets the number of players
  you = 1 // ready (for) player 1
  spy = Math.floor(Math.random() * num)+1 // pick the mole for the new game!
  loc = ll.lh[Math.floor(Math.random() * ll.lh.length)] // random location
  console.log('-'.repeat(80))
  console.log(`NEW GAME ${gam} @ ${loc.location} of ${ll.lh.length} locations`)
})

var listener = app.listen(process.env.PORT, () => {
  console.log('Molecall app is listening on port ' + listener.address().port)
})


// -----------------------------------------------------------------------------
// testing/debugging stuff below
// -----------------------------------------------------------------------------

// shorten user-agent string; this is just for debugging/logging
function shag(s) {
  if (s === 'Mozilla/5.0 (X11; CrOS x86_64 11021.56.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.76 Safari/537.36') {
    return 'white chromebook'
  } else if (s === 'Mozilla/5.0 (Linux; Android 11; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.185 Mobile Safari/537.36') {
    return 'danny old phone'
  } else if (s === 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/70.0.3538.75 Mobile/15E148 Safari/605.1') {
    return 'faire old phone'
  } else if (s === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36') {
    return 'danny laptop chrome'
  } else if (s === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:63.0) Gecko/20100101 Firefox/63.0') {
    return 'danny old laptop firefox'
  } else if (s === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15') {
    return 'danny old laptop safari'
  } else if (s === 'Mozilla/5.0 (X11; CrOS aarch64 15117.111.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36') { 
    return 'camel chromebook'
  } else if (s === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36') {
    return 'danny laptop chrome'
  }
  const n = s.length
  return s
  //return s.substring(0,20) + ' ... ' + s.substring(n-20, n)
}

