import User from "./user/User.js"
import Student from "./user/Student.js"
import Faculty from "./user/Faculty.js"
import Vehicle from "./vehicle/Vehicle.js"
import Cycle from "./vehicle/Cycle.js"
import Bike from "./vehicle/Bike.js"
import Car from "./vehicle/Car.js"
import Daily from "./pass-choice/Daily.js"
import Monthly from "./pass-choice/Monthly.js"
import Yearly from "./pass-choice/Yearly.js"

document.addEventListener("DOMContentLoaded", () => {
    const userName = document.getElementById("userName")
    const userContact = document.getElementById("userContact")
    const role = document.getElementById("role")
    const saveUserBtn = document.getElementById("saveUser")
    saveUserBtn.addEventListener("click", (e) =>{
        e.preventDefault()
        const user = role === "student" ? new Student(userName.value, userContact.value) : new Faculty(userName.value, userContact.value)
        
        alert(`Congratulations ${user.userName} || you are registered.`)
        document.querySelector(".user").style.display = "none"
        
        const vehicleId = document.getElementById("vehicleId")
        const vehicleType = document.getElementById("vehicleType")
        const vehicleSaveBtn = document.getElementById("saveVehicle")
        vehicleSaveBtn.addEventListener("click", e =>{
            e.preventDefault()
            let vehicle = null
            switch(vehicleType.value){
                case 'cycle':
                    vehicle = new Cycle(vehicleId.value, user)
                break;
                case 'bike':
                    vehicle = new Bike(vehicleId.value, user)
                break;
                case 'car':
                    vehicle = new Car(vehicleId.value, user)
                break
            }
            alert(`Congratulations, your vehicle is save with the id ${vehicle.vehicleId}`)
            document.querySelector(".vehicle").style.display = "none"

            const passchoiceForm = document.querySelector('.pass-choice')

            const dailyPass = new Daily(vehicle)
            const dailyPassBtn = document.createElement('INPUT')
            dailyPassBtn.setAttribute('type', 'button')
            dailyPassBtn.setAttribute('value',`Daily : ${dailyPass.price}`)
            passchoiceForm.appendChild(dailyPassBtn)
            dailyPassBtn.addEventListener('click', () =>{
                dailyPass.print()
            })
        
            const monthlyPass = new Monthly(vehicle)
            const monthlyPassBtn = document.createElement('INPUT')
            monthlyPassBtn.setAttribute('type', 'button')
            monthlyPassBtn.setAttribute('value', `Monthly : ${monthlyPass.price}`)
            passchoiceForm.appendChild(monthlyPassBtn)
            monthlyPassBtn.addEventListener('click', () =>{
                monthlyPass.print()
            })
        
            const yearlyPass = new Yearly(vehicle)
            const yearlyPassBtn = document.createElement('INPUT')
            yearlyPassBtn.setAttribute('type', 'button')
            yearlyPassBtn.setAttribute('value', `Yearly : ${yearlyPass.price}`)
            passchoiceForm.appendChild(yearlyPassBtn)
            yearlyPassBtn.addEventListener('click', () =>{
                yearlyPass.print()
            })
        })   
        
    
    })

})