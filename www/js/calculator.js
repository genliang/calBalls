app.controller('Calculator',['$scope', function($scope){
	console.log('Start calculator algo!');
		$scope.startAlgo = function(num){
		console.log('start Algo...');
		console.log(num);
		var min = 1;
		var max = num - 2;
		var total = 0;
		var buf = [];
		for(var i = 0; i < 2; i++){
			//random twice, the remaining would be the last value
			buf[i] = Math.floor((Math.random() * max) + min);
			max = max - buf[i];
			total = total + buf[i];
			console.log(buf[i]);
			console.log('Total: ' + total);
		}
		console.log(total);
		buf[2] = num - total;
		console.log('Final buf: ' + buf);
		console.log('Done');

		
	};
}]);