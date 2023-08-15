class Park {
    constructor(name, ticket_price, dinosaurs = []) {
        this.name = name
        this.ticket_price = ticket_price
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
}

module.exports = Park