(function () {
    angular.module('primeiraApp').component('field', {
        bindings:{
            id:'@',
            label:'@',
            grid:'@',
            placeHolder:'@',
            type:'@',
            model:'='
        },
        controller:[
            'gridSystem',
            function (gridSystem) {
                this.gridClass = gridSystem.toCssClasses(this.grid);
            }
        ],
        template : `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeHolder }}"  type="{{ $ctrl.type }}" ng-model="$ctrl.model"/>
                </div>
            </div>
        `
    })
})()