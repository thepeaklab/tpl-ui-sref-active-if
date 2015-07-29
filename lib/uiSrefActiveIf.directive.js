(function() {
    'use strict';

    /* jshint latedef: nofunc */
    /**
    * @author Christian Elies
    * @ngdoc directive
    * @name tpl.uiSrefActiveIf.directive:uiSrefActiveIf
    * @restrict A
    * @element ANY
    * @description
    * Directive
    */
    angular
        .module('tpl.uiSrefActiveIf')
        .directive('uiSrefActiveIf', uiSrefActiveIf);

    /* @ngInject */
    function uiSrefActiveIf() {
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            restrict: 'A',
            scope: {
            	optionsObj: '=uiSrefActiveIf'
            }
        };
        return directive;
    }

    /* @ngInject */
    function Controller($scope, $element, $state) {
    	var vm = this;

    	vm.update = update;

    	activate();

    	function activate() {
	    	$scope.$on('$stateChangeSuccess', function() {
	    		update();
	    	});
	    }

    	function update() {
    		if ($state.current.name.indexOf(vm.optionsObj.stateName) !== -1) {
    			$element.addClass(vm.optionsObj.className);
    		} else {
    			$element.removeClass(vm.optionsObj.className);
    		}
    	}
    }
})();
