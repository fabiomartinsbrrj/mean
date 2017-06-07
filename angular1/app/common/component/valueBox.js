
//contentHeader -> <content-header esse é o padrão no html
angular.module('primeiraApp').component('valueBox', {
  bindings: {
    grid: '@',
    colorClass: '@',
    value: '@',
    text: '@',
    iconClass: '@'
  },
  controller: [
      'gridSystem',
        function (gridSystem) {
            var vm = this;
            this.$onInit = function() {
                this.gridClasses = gridSystem.toCssClasses(vm.grid);
                console.log(' szsss '+vm.gridClasses);
            }
        }
  ],
    template : `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="small-box {{ $ctrl.colorClass }}">
                    <div class="inner">
                        <h3>{{ $ctrl.value }}</h3>
                        <p>{{ $ctrl.text }}</p>
                    </div>
                    <div class="icon">
                        <i class="{{ $ctrl.iconClass }}"></i>
                    </div>
                </div>
            </div>
    `
});
//$ctrl sempre vai existir no component