class request{
    private andress: String;
    private port: String;

    constructor(){
        this.andress = 'localhost';
        this.port = '8080'
    }

    public getRequest():String{
        return this.andress+"/"+this.port;
    }
}