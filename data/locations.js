// We assign the roles in order and then just keep repeating the last one
// if we run out.

/* BEGIN TEMPLATE FOR NEW LOCATIONS:
{ // ------------------------------------------------------------------------
"location": "SOMEPLACE",
"roles": [
  "ALICE",
  "BOB",
  "CAROL",
]},
END TEMPLATE */

exports.lh = [ // a list of hashes

{ // ------------------------------------------------------------------------
"location": "Mars",
"roles": [
  "Dust",
  "Rock",
  "Red sand",
  "Martian",
]},
  
{ // ------------------------------------------------------------------------
"location": "Cave",
"roles": [
  "Bear",
  "Rock",
]},
  
{ // ------------------------------------------------------------------------
"location": "Flower",
"roles": [
  "Stem",
  "Leaf",
  "Petal",
]},

{ // ------------------------------------------------------------------------
"location": "The Burrow (the Weasleys' house in Harry Potter)",
"roles": [
  "Ron",
  "Fred",
  "George",
  "Ginny",
  "Percy",
  "Bill",
  "Charlie",
  "Mrs. Weasley (Molly)",
  "Mr. Weasley (Arthur)",
  "Guest",
]},

{ // ------------------------------------------------------------------------
"location": "The Little Red Riding Hood Fairy Tale",
"roles": [
  "Little Red Riding Hood herself",
  "The Wolf",
  "The Grandma",
  "A tree along the path to Grandma's house",
]},

{ // ------------------------------------------------------------------------
"location": "The earth",
"roles": [
  "The inner core aka the very center of the earth",
  "The outer core aka the layer that's almost the center of the earth",
  "The mantle",
  "The crust",
  "An animal",
]},

{ // ------------------------------------------------------------------------
"location": "Rubik's cube",
"roles": [
  "A white square",
  "A yellow square",
  "A green square",
  "A blue square",
  "A red square",
  "An orange square",
  "A person trying to solve it",
]},

{ // ------------------------------------------------------------------------
"location": "Computer keyboard",
"roles": [
  "Spacebar",
  "The A key",
  "The B key",
  "The C key",
  "The backspace key",
  "The escape key",
  "A function key",
]},

{ // ------------------------------------------------------------------------
"location": "Chessboard",
"roles": [
  "Queen",
  "King",
  "Bishop",
  "Knight",
  "Rook",
  "Pawn",
]},

{ // ------------------------------------------------------------------------
"location": "An actual beehive",
"roles": [
  "Queen bee",
  "Worker bee",
  "Larva",
  "A cell of honeycomb full of honey",
  "A silly bear trying to get the honey",
  "The (human) beekeeper",
  "Drone",
]},

{ // ------------------------------------------------------------------------
"location": "The Beeminder forum",
"roles": [
  "narthur",
  "dreev",
  "bee",
  "mary",
  "alys",
  "shanaqui",
  "A brand new newbee",
]},

{ // ------------------------------------------------------------------------
"location": "#supsup (Beeminder's private chat for support workerbees)",
"roles": [
  "shanaqui (Support Czar)",
  "A user we're complaining about who's oblivious to the existence of #supsup",
  "Brand new clueless support workerbee",
]},

{ // ------------------------------------------------------------------------
"location": "Hogwarts (school in the Harry Potter books)",
"roles":[
  "Professor Snape (\"evil\" potionsmaster)",
  "Headmaster Dumbledore (super powerful Gandolf-type wizard with gray beard)",
  "Harry (protagonist)",
  "Hermione (supernerd witch with near-eidetic memory)",
  "Squib (a witch or wizard who doesn't actually have magic powers)",
  "Student",
]},
  
{ // ------------------------------------------------------------------------
"location": "Millennium Falcon (Star Wars spaceship)",
"roles":[
  "Jedi",
  "Droid",
  "Han Solo",
  "Wookie",
]},

{ // ------------------------------------------------------------------------
"location": "Death Star (bad guy spaceship from Star Wars)",
"roles":[
  "Dark Vader",
  "Emperor",
  "Janitor",
  "Pilot",
  "Engineer",
  "Stormtrooper",
]},
  
{ // ------------------------------------------------------------------------
"location": "221b Baker Street (Sherlock Holmes's apartment)",
"roles":[
  "Sherlock Holmes",
  "John Watson",
  "Professor Moriarty",
  "Mrs. Hudson (housekeeper)",
  "Inspector Lestrad (police)",
  "Crime victim",
]},
  
{ // ------------------------------------------------------------------------
"location": "James Bond movie",
"roles":[
  "James Bond (who is *a* spy but not *the* spy)",
  "M (MI6 boss)",
  "Q (person who makes James Bond's gadgets)",
  "Moneypenny (secretary)",
  "Villain",
  "Impossibly Attractive Woman",
]},
  
{ // ------------------------------------------------------------------------
"location": "Desert",
"roles":[
  "Oasis owner",
  "Camel driver",
  "Camel",
  "Beduin (person who lives in the desert)",
  "Tourist",
  "Corpse",
]},
  
{ // ------------------------------------------------------------------------
"location": "Medieval village (from like 1000 years ago, before much science)",
"roles": [
  "Lord",
  "Lady",
  "Knight",
  "Peasant",
]},

{ // ------------------------------------------------------------------------
"location": "The Soulestead (Bethany's parents' house)",
"roles": [
  "Bob",
  "Judy",
  "Neighbor",
]},
  
{ // ------------------------------------------------------------------------
"location": "Skate race",
"roles": [
  "Announcer",
  "Skater",
]},
  
{ // ------------------------------------------------------------------------
"location": "CaMelot (Faire and Cantor's cousins' house in California)",
"roles": [
  "Melanie (mom)",
  "Cameron (dad)",
  "Reagan (big sister)",
  "Ryan (middle child)",
  "Eric (youngest child)",
  "Houseguest",
]},

{ // ------------------------------------------------------------------------
"location": "A chicken (as in the animal)",
"roles": [
  "A foot",
  "The heart",
  "The brain",
  "A feather",
]},

{ // ------------------------------------------------------------------------
"location": "The Pony Palace (Erica and Stephen's house)",
"roles": [
  "Erica",
  "Stephen",
  "Iggy (the dog)",
  "Houseguest",
]},

{ // ------------------------------------------------------------------------
"location": "Climbatron (Faire and Cantor and cousins' tree house tree club)",
"roles": [
  "Faire",
  "Cantor",
  "Reagan",
  "Ryan",
  "Eric",
  "The trunk of the tree",
  "A tree branch",
 ]},
  
{ // ------------------------------------------------------------------------
"location": "A-WOL Dance (Faire's aerial silks gym)",
"roles": [
  "Paulina (a teacher)",
  "Racheal (a teacher)",
  "Olivia (a teacher)",
  "Ari (a teacher)",
  "Ashley (a teacher)",
  "Silk (two long pieces of silky fabric)",
  "Trapeze (a metal bar attatched to two ropes)",
  "Lyra (a metal cirle)",
  "A student",
  ]},
  
/*
{ // ------------------------------------------------------------------------
"location": "Kung-fu",
"roles": [
  "Pendecker Kyle (a teacher)",
  "Bob (a specific kicking bag)",
  "Kid Kick (a kicking bag)",
  "Guru Danielle (a teacher)",
  "Mas [insert your name here] (a student)",
  ]},
*/

{ // ------------------------------------------------------------------------
"location": "Salad",
"roles": [
  "Bowl",
  "Big Fork Server",
  "Big Spoon Server",
  "Tomato",
  "Nuts",
  "A piece of lettuce",
  ]},

{ // ------------------------------------------------------------------------
"location": "A chimney around Christmastime",
"roles": [
  "Santa",
  "Bricks",
  "Fire",
  "Ash",
  "Smoke",
  ]},

{ // ------------------------------------------------------------------------
"location": "Candyland",
"roles": [
  "Candy cane",
  "Chocolate monster",
  "Gingerbread man",
  "Lollipop",
  "Gumdrop",
  "Ice cream cone",
  ]},
  
{ // ------------------------------------------------------------------------
"location": "School Backpack",
"roles": [
  "Homework",
  "Pencil Case",
  "Book",
  "Notebook",
  "A piece of paper",
  ]},
  
{ // ------------------------------------------------------------------------
"location": "Piano",
"roles": [
  "D flat",
  "Middle c",
  "Highest note",
  "Lowest note",  
  "Highest E", 
  "Highest G flat",
  "A speck of dust",
  ]},

{ // ------------------------------------------------------------------------
"location": "Keeper of the Lost Cities universe (Faire's favorite book series that's kind of like Harry Potter but with elves)",
"roles": [
  "Sophie Foster (The main character, raised by humans, who is a telepath, enhancer, teleporter, inflictor, and polyglot)",
  "Dex (The main character's best friend, a technopath)",
  "Keefe (The main character's friend, an empath)",
  "Fitz (The main character's friend, a telepath)",
  "A gnome",
]},
  
{ // ------------------------------------------------------------------------
"location": "Sailboat",
"roles": [
  "The sail of the boat",
  "The person sailing the boat",
  "A person on board",
  "A wooden board",
]},

{ // ------------------------------------------------------------------------
"location": "Hundred Acre Wood (Winnie the Pooh world)",
"roles": [
  "Pooh",
  "Eeyore",
  "Tigger",
  "Piglet",
  "Kanga",
  "Roo",
  "Owl",
  "Heffalump",
  "A tree",
]},

{ // ------------------------------------------------------------------------
"location": "Wonderland (not to be confused with Through the Looking Glass)",
"roles": [
  "Alice",
  "The white rabbit",
  "The Dormouse",
  "The Mad Hatter",
  "The March Hare",
  "The Cheshire Cat",
  "A bottle labeled 'drink me'",
  "A bird in the caucus race",
  "An anthropomorphic playing card",
]},

{ // ------------------------------------------------------------------------
"location": "Through the Looking Glass (not to be confused with Wonderland)",
"roles": [
  "Alice",
  "The Red Queen",
  "Tweedledee",
  "Tweedledum",
  "Humpty Dumpty",
  "An anthropomorphic chess piece",
  "A talking flower",
]},

{ // ------------------------------------------------------------------------
"location": "Pirate ship",
"roles": [
  "Captain",
  "Parrot",
  "Pirate",
]},

{ // ------------------------------------------------------------------------
"location": "The internet",
"roles": [
  "Web browser",
  "Web server",
  "A one (as in the number 1, a binary digit)",
  "A zero (as in the number 0, a binary digit)",
  "Google",
  "Yahoo",
  "Microsoft",
  "Virus",
  "Website user",
]},

{ // ------------------------------------------------------------------------
"location": "Timberline Lodge (ski resort at Mt Hood in Oregon)",
"roles": [
  "A skier",
  "A snowboarder",
  "A snowflake",
]},

{ // ------------------------------------------------------------------------
"location": "Beesnest (the Soule-Reeveses' house)",
"roles": [
  "Bee",
  "Danny",
  "Faire",
  "Cantor",
  "A Beeminder fan",
]},

{ // ------------------------------------------------------------------------
"location": "The Moon",
"roles": [
  "Neil Armstrong (mission commander)",
  "Buzz Aldrin (pilot)",
  "Michael Collins (pilot of the command module who stayed in lunar orbit)",
  "A moon rock",
]},

{ // ------------------------------------------------------------------------
"location": "The Sun",
"roles": [
  "A solar flare",
  "Hydrogen",
  "Helium",
  "A photon (a particle of light)",
]},

/*
{ // ------------------------------------------------------------------------
"location": "The Oasis (virtual reality world from Ready Player One",
"roles": [
  "Wade Watts, the protagonist",
  "James Halliday, the billionaire creator of the Oasis",
  "An NPC (non-player character, like a bot or other avatar controlled by AI rather than a human)",
]},
*/

{ // ------------------------------------------------------------------------
"location": "Hill Valley (the fictional town in Back To The Future)",
"roles": [
  "Marty McFly (the protagonist, played by Michael J Fox)",
  "Doc Brown (inventor of the time machine)",
  "An extra (someone in the movie who's just in the background with no speaking role)",
]},

{ // ------------------------------------------------------------------------
"location": "The Starship Enterprise (from the Star Trek universe)",
"roles": [
  "Captain Kirk",
  "Spock (the half-vulcan with pointy ears who's very logical)",
  "Dr McCoy (the ship's doctor, who Kirk calls \"Bones\" for some reason)",
  "Sulu (helmsman, which I think is kind of like a pilot)",
  "Redshirt (a character who's not very important and is probably going to get killed by aliens or something)",
]},

{ // ------------------------------------------------------------------------
"location": "Oaks Park skating rink (where we do indoor inline speedskating)",
"roles": [
  "Coach Derek",
  "Dominique (fastest indoor skater in Portland, also Coach Derek's son)",
  "Cantor",
  "A new slow skater",
]},

{ // ------------------------------------------------------------------------
"location": "Shower",
"roles": [
  "The human taking the shower",
  "Soap",
  "Shampoo",
  "Conditioner",
  "A drop of water",
]},

{ // ------------------------------------------------------------------------
"location": "Cruise Ship",
"roles": [
  "Captain",
  "Cook",
  "Passenger",
]},

{ // ------------------------------------------------------------------------
"location": "Downtown Portland",
"roles": [
  "Hipster",
  "Clown",
  "The unipiper (famous Portland person who rides around on a unicycle playing the bagpipes)",
  "Computer programmer",
  "Person wearing lumberjack shirt with many tattoos",
]},

{ // ------------------------------------------------------------------------
"location": "Heaven",
"roles": [
  "God",
  "Jesus",
  "St Peter (the one at the gate who decides if you get in)",
  "Angel",
  "Human soul",
]},

{ // ------------------------------------------------------------------------
"location": "Kitchen",
"roles": [
  "Cook",
  "Sink",
  "Spoon",
]},

{ // ------------------------------------------------------------------------
"location": "Beach",
"roles": [
  "Sandcastle builder",
  "Ice cream cone vendor",
  "Wave",
  "Grain of sand",
]},

{ // ------------------------------------------------------------------------
"location": "Casino (place where you can gamble money)",
"roles": [
  "Casino owner",
  "Hustler (someone who pretends to suck so they can lure people into playing against them and then win money)",
  "Bartender",
  "Bouncer (person who kicks people out if they're too drunk or whatever)",
  "Gambler",
]},

  
{ // ------------------------------------------------------------------------
"location": "Circus tent",
"roles": [
  "Clown",
  "Lion tamer",
  "Trapeze artist",
  "Aerial silks performer",
]},
  
{ // ------------------------------------------------------------------------
"location": "Bank",
"roles": [
  "Teller (person who works behind the counter",
  "Robber",
  "Customer",
]},

{ // ------------------------------------------------------------------------
"location": "Hotel",
"roles": [
  "Concierge (hotel employee who helps you call a taxi or get tickets to shows and stuff)",
  "Guest",
]},
  
{ // ------------------------------------------------------------------------
"location": "Grocery store / supermarket",
"roles": [
  "Checkout clerk",
  "Stalk of broccoli",
  "Shopper",
]},

{ // ------------------------------------------------------------------------
"location": "Hospital",
"roles": [
  "Doctor",
  "Nurse",
  "Patient",
]},

{ // ------------------------------------------------------------------------
"location": "University",
"roles": [
  "Professor",
  "Student",
]},

{ // ------------------------------------------------------------------------
"location": "Airplane",
"roles": [
  "Pilot",
  "Co-pilot",
  "Flight attendent",
  "Another flight attendent",
]},

{ // ------------------------------------------------------------------------
"location": "Train",
"roles": [
  "Engineer (the one who drives the train)",
  "Conductor (the one who makes sure everyone gets on board)",
  "Passenger",
]},

{ // ------------------------------------------------------------------------
"location": "Submarine",
"roles": [
  "Captain",
  "First Mate (like the assistant to the Captain, second-in-command, Vice Captain)",
  "Passenger (even though I don't think submarines generally have passengers)",
]},

{ // ------------------------------------------------------------------------
"location": "Cathedral (like a huge fancy church)",
"roles": [
  "Tourist",
]},

{ // ------------------------------------------------------------------------
"location": "Movie studio",
"roles": [
  "Director",
  "Actor",
  "Extra",
]},

{ // ------------------------------------------------------------------------
"location": "Space station",
"roles": [
  "Astronaut",
  "Alien",
]},

{ // ------------------------------------------------------------------------
"location": "Polar station (like at the north or south pole)",
"roles": [
  "Scientist",
]},

{ // ------------------------------------------------------------------------
"location": "Half Dome at Yosemite National Park",
"roles": [
  "Hiker",
]},

{ // ------------------------------------------------------------------------
"location": "The Grand Canyon",
"roles": [
  "Hiker",
  "Rafter",
  "Hiker",
]},

{ // ------------------------------------------------------------------------
"location": "Crusader Army",
"roles": [
  "Knight",
  "Soldier",
]},

{ // ------------------------------------------------------------------------
"location": "Molehill (mound of dirt from a mole digging a tunnel)",
"roles": [
  "The literal animal, mole (not the mole in the game)",
  "Clump of dirt",
]},

/* 
Getting rid of this one because we might be at, say, the Beesnest and then there
are kind of two correct answers -- "the room you are in" and "the Beesnest".
"location": "The room you are in",
"roles":[
  "You are you",
]},  
*/

] // this marks the end of the list of locations
