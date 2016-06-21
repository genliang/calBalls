app.controller('Calculator',['$scope', function($scope){
	console.log('Start calculator algo!');
		$scope.startAlgo = function(num){
		console.log('start Algo...');
		console.log(num);
		var total;
		var buf = [];
		while(total !== num){
			for(var i = 0; i < 3; i++){
				buf[i] = Math.floor((Math.random() * 10) + 1);
				total = total + buf[i];
			}

		}

		
	};
}]);