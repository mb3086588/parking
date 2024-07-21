class User{
    constructor(userName, userContact){
        this.id = 'user-' + (new Date()).getTime()
        this.userName = userName
        this.userContact = userContact
    }
}export default User