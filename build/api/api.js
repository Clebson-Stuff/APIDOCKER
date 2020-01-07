"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require("morgan");
var auth_1 = require("../auth");
var routes_1 = require("./routes/routes");
var bodyParser = require('body-parser');
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
        this.auth = auth_1.default();
        this.middleware();
        this.router(this.express, this.auth);
    }
    Api.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(this.auth.initialize());
    };
    Api.prototype.router = function (app, auth) {
        new routes_1.default(app, auth);
    };
    return Api;
}());
exports.default = new Api().express;
