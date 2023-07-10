import { Crud } from '../../db'
import User from '../../models/user.model'

class Users extends Crud {
    constructor(){
        super(User)
    }
}

export default new Users()