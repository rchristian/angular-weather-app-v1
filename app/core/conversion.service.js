(function() {
	'use strict';

	angular
		.module('app.core')
		.service('conversionService', conversionService);

	function conversionService () {
		var service = this;

		service.tempUnits = {
			farhenheit: 'farhenheit',
			celsius: 'celsius'
		}

		service.selectedUnit = 'farhenheit';

		service.convertTemperature = function(temp, wSpeed, tempUnit) {
			if(service.selectedUnit === tempUnit) {
				return temp;
			} else if (service.selectedUnit === service.tempUnits.farhenheit) {
				return Math.round(temp * 1.8 + 32);
			} else if (service.selectedUnit === service.tempUnits.celsius) {
				return Math.round((temp - 32) * 5 / 9);
			} else {
				throw Error("Invalid unit");
			}
		}
	}
})();


/*
myApp.factory('myFactory', ['$rootScope', function ($rootScope) {
    $rootScope.$emit("myEvent", myEventParams);
}]);



use $broadcast from the $rootScope
listen using $on from the local $scope that needs to know about the event


http://plnkr.co/edit/PgPBf5UjYOBBYxThNa7j?p=preview

http://stackoverflow.com/questions/19446755/on-and-broadcast-in-angular

http://stackoverflow.com/questions/25274563/angularjs-communication-between-directives
*/