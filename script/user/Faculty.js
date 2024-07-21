import User from "./User.js"
class Faculty extends User{
    constructor(userName, userContact){
        super(userName, userContact)
        this.role = "faculty"
    }
}export default Faculty