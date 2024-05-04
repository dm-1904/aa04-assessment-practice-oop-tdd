

class Review {

    constructor(vehicle, tester, starRating, text){
        this.vehicle = vehicle
        this.tester = tester
        this.starRating = starRating
        this.text = text

    }

    addReview(){
        this.vehicle.reviews.push(this)
        this.tester.reviews.push(this)


    }

    static filterByStars(star, ...args){
        return args.filter(el => el.starRating === star)
        // let ans = []
        // for(let i = 0; i < args.length; i++){
        //     let el = args[i]
        //     if(el.starRating === star){
        //         ans.push(el)

        //     }
        // }
        // return ans
    }

    
}


// let tester1 = new Tester("Bob Jones");
// let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
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





module.exports = Review
