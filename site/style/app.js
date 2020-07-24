(function() {
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ["$scope"];
	function LunchCheckController($scope){
		$scope.item = "";
		$scope.message = "";
		$scope.Express = function(){
			var temp = $scope.item.split(',');
			if(temp[0] == ""){
				$scope.message = "Please enter data first";
			}
			else if(temp.length <= 3){
				$scope.message = "Enjoy!";
			}
			else if(temp.length > 3){
				$scope.message = "Too much!";
			}


		}
	}


	
})();