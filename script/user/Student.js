import User from "./User.js"
class Student extends User{
    constructor(userName, userContact){
        super(userName, userContact)
        this.role = "student"
    }
}export default Student