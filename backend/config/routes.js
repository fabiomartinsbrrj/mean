const express = require('express');
const auth = require('./auth');

module.exports = function (server) {
    /*
    *   rotas abertas
    */
    const openAPI = express.Router();
    server.use('/oapi', openAPI);

    const AuthService = require('../api/user/authService')
    openAPI.post('/login', AuthService.login);
    openAPI.post('/signup', AuthService.signup);
    openAPI.post('/validateToken', AuthService.validateToken);
    
    openAPI.route('/teste').get(function (req, res, next) {
       res.send('funcionou'); 
    });

    /**
     * Rotas protegidas
     */
    const protectedAPI = express.Router();
    server.use('/api', protectedAPI);//context http://localhost:3003/api/

    protectedAPI.use(auth);

    //routes of API
    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(protectedAPI, '/billingCycles');//usando a api do node-restful

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    protectedAPI.route('/billingSummary').get(billingSummaryService.getSummary);//usando a api do express

};