class Vehicle {
    constructor(modelName, year, price, reviews){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = []
    }
    validate(){
        // console.log(this.modelName)
        // console.log(this.year)
        // console.log(this.price)
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
}




// let validVehicle = new Vehicle("Toyota Prius", 2005, 23000);
// let invalidVehicle = new Vehicle(5);

// //console.log(validVehicle)
// console.log(validVehicle.validate())
// console.log(invalidVehicle.validate())




module.exports = Vehicle
