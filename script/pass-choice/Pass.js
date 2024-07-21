class Pass{
    constructor(vehicle){
        this.id = `pass-${(new Date()).getTime()}`
        this.vehicle = vehicle
    }

    print(e){
        let ticket = `
            <h2>Pass</h2>
            <div>
                <label>Name</label>
                <label>${this.vehicle.owner.userName}</label>
            </div>
            <div>
                <label for="">VehicleId</label>
                <label for="">${this.vehicle.vehicleId}</label>
            </div>
                <label>Expiry</label>
                <label for="">${this.expiry}</label>
            </div>
            <img src="http://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${this.expiry}" alt="QR Code" />
        `
        document.querySelector('.ticket').innerHTML = ticket   
    }
}
export default Pass
