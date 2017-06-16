(function () {

    angular.module('primeiraApp').constant('consts', {
        appName: 'MEAN',
        version: '1.0',
        owner: 'Fabio Martins',
        year: '2017',
        site: '',
        apiUrl: 'http://localhost:3003/api',
        oapiUrl: 'http://localhost:3003/oapi',
        userKey: '_primeira_app_user'
    }).run(['$rootScope', 'consts', function ($rootScope, consts) {
        $rootScope.consts = consts
    }])

})();