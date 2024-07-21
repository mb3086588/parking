import Pass from "./Pass.js";

class Yearly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = vehicle.type === 'bike' ? 1000 : (vehicle.type === 'cycle' ? 100 : 5000)
        let timeStamp = new Date()
        timeStamp.setFullYear(timeStamp.getFullYear() + 1)
        this.expiry = timeStamp
    }
}
export default Yearly