(function () {
    
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ]);

    function BillingCycleController($http, msgs) {
        const vm = this;

        vm.create = function () {
            const url = "http://localhost:3003/api/billingCycles";

            $http.post(url, vm.billingCycle)
                .then(function (response) {
                    vm.billingCycle = {};
                    console.log('passou aqui')
                    msgs.addSuccess('Operação realizada com sucesso!');
                })
                .catch(function (response) {
                    console.log('passou aqui tb')
                    console.log(response.data)
                    msgs.addError(response.data.errors)
                });

        }
    }

})()