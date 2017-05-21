const express = require('express');

module.exports = function (server) {
    //API Routes

    const router = express.Router();
    server.use('/api', router);//context http://localhost:3003/api/

    router.route('/teste').get(function (req, res, next) {
       res.send('funcionou'); 
    });

    //routes of API
    const billingCycleService = require('../api/billingCycle/billingCycleService');
    billingCycleService.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)

};