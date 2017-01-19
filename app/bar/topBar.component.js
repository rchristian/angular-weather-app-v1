(function() {
	'use strict';

	angular
		.module('app.topBar')
		.component('topBar', {
			bindings: {},
			templateUrl: 'bar/topBar.html',
			controller: TopBarController
		});

	TopBarController.$inject = ['conversionService'];

	function TopBarController(conversionService) {
		var ctrl = this;

		ctrl.celsClass = 'unselected';
		ctrl.changeTempUnit = changeTempUnit;
		ctrl.fahrClass = 'selected';

		function changeTempUnit() {
			if (ctrl.fahrClass === "selected") {
				ctrl.fahrClass = 'unselected'; //F unselected
				ctrl.celsClass = 'selected'; //C selected
				conversionService.selectedUnit = conversionService.tempUnits.celsius;
			} else if (ctrl.celsClass === 'selected') {
				ctrl.celsClass = 'unselected'; //C unselected
				ctrl.fahrClass = 'selected'; //F selected
				conversionService.selectedUnit = conversionService.tempUnits.farhenheit;
			}
		}
	}
})();