const Tester = require('./tester')
const Vehicle = require('./vehicle')

class Review {
    constructor(vehicle, tester, starRating, text){
        this.vehicle = vehicle
        this.tester = tester
        this.starRating = starRating
        this.text = text 
    }
}









module.exports = Review
