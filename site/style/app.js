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
			var len = 0;
			for (var i = 0; i < temp.length ; i++) {
				if(temp[i] != "" && temp[i] != " "){
					len+=1;
				}
			}
			console.log(temp);
			console.log(len);
			if(len == 0){
				$scope.message = "Please enter data first";
			}
			else if(len <= 3){
				$scope.message = "Enjoy!";
			}
			else if(len > 3){
				$scope.message = "Too much!";
			}


		}
	}


	
})();