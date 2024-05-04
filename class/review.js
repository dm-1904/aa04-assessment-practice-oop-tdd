const Tester = require('./tester')
const Vehicle = require('./vehicle')

class Review {
    constructor(vehicle, tester, starRating, text){
        this.vehicle = vehicle
        this.tester = tester
        this.starRating = starRating
        this.text = text
       // console.log(this.vehicle)
    }

    addReview(){
        this.vehicle.reviews.push(this)
        this.tester.reviews.push(this)
    }
}






//it('can add new review to tester and vehicle', function () {
    // let tester1 = new Tester("Bob Jones");
    // let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
    // let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");
    // review1.addReview()
    // console.log(vehicle1.reviews)
//     let tester2 = new Tester("Desiree Smith");
//     let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
//     let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

//     let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
//     let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

//     review1.addReview();
//     review2.addReview();
//     review3.addReview();
//     review4.addReview();

//     expect(vehicle1.reviews).to.have.length(2);
//     expect(vehicle1.reviews).to.include(review1, review3);

//     expect(tester1.reviews).to.have.length(2);
//     expect(tester1.reviews).to.include(review1, review4);
// });


module.exports = Review
