import Vehicle from "./Vehicle.js"

class Cycle extends Vehicle{
    constructor(vehicleId, owner){
        super(vehicleId, owner)
        this.type = "cycle"
        this.priceOption ={
            daily : '5',
            monthly : '50',
            yearly : '100'
        }
    }
}export default Cycle