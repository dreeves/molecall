// -----------------------------------------------------------------------------
const npform    = document.getElementById('npform')
const dashboard = document.getElementById('dashboard')

// grab our role from the server
const req = new XMLHttpRequest()
req.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const role = JSON.parse(this.responseText)
    if (role !== null) {
      dashboard.innerHTML = `
        <strong>player</strong>: ${role.i} of ${role.n} (game ${role.g})<br>
        <strong>location</strong>: ${role.loc}<br>
        <strong>role</strong>: ${role.role}
      `
    }
    dashboard.style.display = 'block'  // unhide dashboard after fetching role
  }
}
req.open('GET', '/getrole', true) // 3rd param says whether to do it async
req.send()

npform.onsubmit = function(e) {
  e.preventDefault() // stop form submission from refreshing the page
  const n = parseFloat(npform.elements['players'].value)
  if (!Number.isInteger(n) || n < 2 || n > 12) {
    alert("Need 2-12 players! (Really at least 3 to be at all interesting but "
         +"if you wanna try with 2, knock yourself out)")
    return
  }
  const req = new XMLHttpRequest()
  req.open('POST', '/setnum', true)
  req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
  req.send(`{"num": ${n}}`)
  location.reload()
}
