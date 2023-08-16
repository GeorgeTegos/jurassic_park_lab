const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function(){

  let park
  let dinosaur4
  let dinosaur5
  beforeEach(function () {
    dinosaur4 = new Dinosaur("KoopaTroopa", "Omnivore", 1001)
    dinosaur5 = new Dinosaur("Yoshi", "Omnivore", 700)
    park = new Park ("Pawel's Love House",100)
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual("Pawel's Love House",actual)
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(100, actual) 
  });
    

  it('should have a collection of dinosaurs', function() {
    park.dinosaurs.push(dinosaur4)
    assert.strictEqual(1, park.dinosaurs.length)
  });


  it('should be able to add a dinosaur to its collection', function() {
    const actual= park.addDinosaur(dinosaur4)
    assert.deepStrictEqual(1, park.dinosaurs.length)
  });
  
  it('should be able to remove a dinosaur from its collection', function() {
    const actual= park.removeDinosaur(dinosaur4)
    assert.strictEqual(0, park.dinosaurs.length)
    });
  

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.mostAttractive()
    assert.strictEqual(dinosaur4, actual)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.findSpecie("Yoshi")
    assert.strictEqual("Yoshi",actual[0].species)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual,1701)

  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
