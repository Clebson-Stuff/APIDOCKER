import DevController from './controller';
import TemplateRoutes from '../routes';
export default class DevRoutes extends TemplateRoutes {
  
  super(){
    this.UserCtlr = new DevController();
  }

}
