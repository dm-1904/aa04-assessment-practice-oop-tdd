const Review = require('./review')
const Tester = require('./tester')

class Vehicle {
    constructor(modelName, year, price, reviews){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = []

    }
    validate(){
        if((typeof this.modelName === 'string') && ((this.year > 1950) && (this.year < 2100)) && (typeof this.price === 'number')) {
            return true
        }
        return false
    }
    update(str, num1, num2){
        this.modelName = str
        if((num1 < 1950) || (num1 > 2100)){
            throw new RangeError("Year must be between 1950 and 2100")
        } else {
        this.year = num1
        }
        if(num2 < 1){
            throw new RangeError("Price must be greater than 0")
        } else {
        this.price = num2
        }
    }
    getDetails(){
        return `The ${this.year} ${this.modelName} costs $${this.price} and has 0 reviews.`
    }

    findReviewByTester(testerName){
        let arr = this.reviews
        for(let i = 0; i < arr.length; i++){
            let el = arr[i]
            if(el.tester.name === testerName) return el
        }
    }
}



// let tester1 = new Tester("Bob Jones");
//  let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
// let review1 = new Review(vehicle1, tester1, 1, "Great car, excellent gas mileage!");

// let tester2 = new Tester("Desiree Smith");
// let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
// let review2 = new Review(vehicle2, tester2, 3, "Lots of rust, but still reliable.");

// let review3 = new Review(vehicle1, tester2, 5, "Good ride, but wish it charged faster.");
// let review4 = new Review(vehicle2, tester1, 5, "Best car I've ever driven!");

// review1.addReview();
// review2.addReview();
// review3.addReview();
// review4.addReview();

// let filtered1 = vehicle1.findReviewByTester("Bob Jones");
//expect(filtered1).to.deep.equal(review1);




module.exports = Vehicle
