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
            <img src="http://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Mon%20Jan%2013%202025%2000:42:10%20GMT+0530%20(India%20Standard%20Time)=${this.expiry}" alt="QR Code" />
        `
        document.querySelector('.ticket').innerHTML = ticket   
    }
}
export default Pass
