app.controller('Display', ['$scope', 'Storage', function($scope, Storage){
	console.log('Display controller started');
	$scope.items = Storage.getItems();
	console.log($scope.items);
}]);