const Dinosaur = require("./models/dinosaur.js")
const Park = require("./models/park.js")

const dinosaur1 = new Dinosaur("Trex", "Carnivore", 1000)
const dinosaur2 = new Dinosaur("Triceratops", "herbivore", 500)
const dinosaur3 = new Dinosaur("Velociraptor", "Carnivore", 800)
console.log(dinosaur1)

const park = new Park ("Paul's Love House",69)
console.log(park)
