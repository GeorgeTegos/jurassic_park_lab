class Park {
    constructor(name, ticketPrice, dinosaurs = []) {
        this.name = name
        this.ticketPrice = ticketPrice
        this.dinosaurs = dinosaurs
    }
    addDinosaur(dinosaur) {
        this.dinosaurs.push(dinosaur)
    }
    removeDinosaur(dinosaur) {
        const dinosaurLocation = this.dinosaurs.indexOf(dinosaur)
        this.dinosaurs.splice(this.dinosaurs[dinosaurLocation], 1)
    }
    mostAttractive() {
        let highestViews = 0
        let dinosaurToReturn 
        for (let i = 0; i < this.dinosaurs.length; i++) {
            if (highestViews < this.dinosaurs[i].guestsAttractedPerDay) {
                highestViews = this.dinosaurs[i].guestsAttractedPerDay
                dinosaurToReturn = this.dinosaurs[i]
            }
        }
        return dinosaurToReturn
    }

    findSpecie(specieToFind){
        let arrayToReturn =[]
        for (let i = 0; i < this.dinosaurs.length; i++){
            if (specieToFind === this.dinosaurs[i].species){
                arrayToReturn.push(this.dinosaurs[i])
            }
        }
        return arrayToReturn
    }

    visitorsPerDay(){
        let total = 0
        for (let dinosaur of this.dinosaurs){
            total += dinosaur.guestsAttractedPerDay
        }
        return total
    }   



}

module.exports = Park