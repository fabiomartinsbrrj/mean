(function () {
    angular.module('primeiraApp').component('authField', {
        bindings:{
            id:'@',
            label:'@',
            grid:'@',
            icon:'@',
            type:'@',
            model:'=',
            placeholder:'@',
            hide:'<'
        },
        controller:[
            function () {
                this.$onInit =  () => this.iconClass = `glyphicon glyphicon-${this.icon} form-control-feedback`;
            }
        ],
        template : `
            <div class="form-group has-feedback">
                <input id="{{ $ctrl.id }}" type="{{ $ctrl.type }}" ng-model="$ctrl.model" class="form-control" 
                    placeholder="{{ $ctrl.placeholder }}" ng-hide="$ctrl.hide">
                <span class="{{ $ctrl.iconClass }}"></span>
            </div>
        `
    })
})()