import StudentController from './controller';
import TemplateRoutes from '../routes';
export default class StudentRoutes extends TemplateRoutes {
  
  super(){
    this.UserCtlr = new StudentController();
  }

}
