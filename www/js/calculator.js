app.controller('Calculator', ['$scope', '$state', 'Storage', function($scope, $state, Storage){
	console.log('Start calculator algo!');
	//$scope.s = [1, 2, 4, 5, 3];
	var numP = 0;
	var buf = [];
	$scope.s = [1, 2, 3];
	$scope.startAlgo = function(num){
		numP = num;
		algoS(num);
		
		
	};

	var algoS = function(num){
		console.log('start Algo...');
		console.log(num);
		var min = 1;
		var max = num - 2;
		var total = 0;

		
		//$scope.finalTen = [];
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
	    Storage.sendItems(buf);
	    console.log('Items send!');
	    $state.go('showCombination');
	    //$scope.finalTen.push(buf);
		//console.log($scope.finalTen);
		//$scope.s[3] = 22;
		
	};
	console.log('Exit loop');
}]);