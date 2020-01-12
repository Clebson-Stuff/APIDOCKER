import Teacher from './service';
import UserController from '../controller';

export default class TeacherController extends UserController{
    super(){
        this.UserService = new Teacher();
    }
}