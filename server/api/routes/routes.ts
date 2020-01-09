import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';
import DevRoutes from '../../modules/User/Dev/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

    private router: UserRoutes;
    private routerDev: DevRoutes; 
    private tokenRoute;
    private auth;

    constructor(app: Application, auth: any){
        this.router = new UserRoutes();
        this.routerDev = new DevRoutes;
        this.tokenRoute = new TokenRoutes();
        this.auth = auth;
        this.getRoutes(app);
        this.getRoutesDev(app);
    }

    getRoutes(app: Application): void {
        app.route('/api/devs/me');
        app.route('/api/users/all').all(this.auth.authenticate()).get(this.router.index).checkout   ;
        app.route('/api/users/create').all(this.auth.authenticate()).post(this.router.create);
        app.route('/api/users/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/users/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/users/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    }

    // Rotas do modulo do desenvolvedor - Developer - DEV
    getRoutesDev(app: Application):void{
        app.route('/api/devs/me');
        app.route('/api/devs/all').all(this.auth.authenticate()).get(this.routerDev.index);
        app.route('/api/devs/create').all(this.auth.authenticate()).post(this.routerDev.create);
        app.route('/api/devs/:id').all(this.auth.authenticate()).get(this.routerDev.findOne);
        app.route('/api/devs/:id/update').all(this.auth.authenticate()).put(this.routerDev.update);
        app.route('/api/devs/:id/destroy').all(this.auth.authenticate()).delete(this.routerDev.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    }

    //Rotas do modulo professor - Teacher - TCH
    getRoutesTeacher(app: Application):void{
        app.route('/api/tch/all').all(this.auth.authenticate()).get(this.router.index);
        app.route('/api/tch/create').all(this.auth.authenticate()).post(this.router.create);
        app.route('/api/tch/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/tch/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/tch/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    }

    //Rotas do modulo do aluno - Student - ST
    getRoutesStudent(app:Application):void{
        app.route('/api/st/all').all(this.auth.authenticate()).get(this.router.index);
        app.route('/api/st/create').all(this.auth.authenticate()).post(this.router.create);
        app.route('/api/st/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/st/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/st/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);        
    }
}

export default Routes;