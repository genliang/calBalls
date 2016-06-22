app.controller('Display', ['$scope', 'Storage', '$state', '$location', function($scope, Storage, $state, $location){
	console.log('Display controller started');
	$scope.items = Storage.getItems();
	console.log($scope.items);

	$scope.$on('$stateChangeSuccess', function(event, toState){
		if($location.path() == '/main'){
			Storage.clearItems();
			$scope.items.length = 0;
		}
	});

}]);