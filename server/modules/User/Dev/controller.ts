import Dev from './service';
import UserController from '../controller';

export default class DevController extends UserController{
    super(){
        this.UserService = new Dev();
    }
}