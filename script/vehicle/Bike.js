import Vehicle from "./Vehicle.js"

class Bike extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.type = 'bike'
        this.priceOption ={
            daily : '10',
            monthly : '100',
            yearly : '1000'
        }
    }
}export default Bike