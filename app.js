var monetApp = angular.module('monetApp', []);

monetApp.controller('monetCtrl', function ($scope) {
	$scope.brut_annuel = 0;
	$scope.brut_mensuel = 0;
	$scope.net_annuel = 0;
	$scope.net_mensuel = 0;

	$scope.factor = 0.75;
	$scope.riche =0;

	var decile = [ 1257, 1419, 1565, 1717, 1893, 2113, 2425, 2955, 3940];

	$scope.computeFrom = function(from) {
		switch(from)
		{
			case 'ba': 
				$scope.brut_mensuel = $scope.brut_annuel/12;
				$scope.net_annuel = $scope.brut_annuel*$scope.factor;
				$scope.net_mensuel = $scope.net_annuel/12;
				break;
			case 'bm':
				$scope.brut_annuel = $scope.brut_mensuel*12;
				$scope.net_annuel = $scope.brut_annuel*$scope.factor;
				$scope.net_mensuel = $scope.net_annuel/12;
				break;
			case 'na':
				$scope.net_mensuel = $scope.net_annuel/12;
				$scope.brut_mensuel = $scope.net_mensuel/$scope.factor;
				$scope.brut_annuel = $scope.brut_mensuel*12;
				break;
			case 'nm':
				$scope.net_annuel = $scope.net_mensuel*12;
				$scope.brut_mensuel = $scope.net_mensuel/$scope.factor;
				$scope.brut_annuel = $scope.brut_mensuel*12;
				break;
		}
		var i=0;
		while(decile[i] < $scope.net_mensuel)
			i++;
		$scope.riche = i*10;
	};


});
