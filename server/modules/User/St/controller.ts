import Student from './service';
import UserController from '../controller';

export default class StudentController extends UserController{
    super(){
        this.UserService = new Student();
    }
}