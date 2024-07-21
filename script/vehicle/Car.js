import Vehicle from "./Vehicle.js"

class Car extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.type = 'car'
        this.priceOption ={
            daily : '50',
            monthly : '500',
            yearly : '5000'
        }
    }
}export default Car