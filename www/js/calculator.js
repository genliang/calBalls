app.controller('Calculator', ['$scope', '$state', function($scope, $state){
	console.log('Start calculator algo!');
	//$scope.s = [1, 2, 4, 5, 3];
	var numP = 0;
	this.buf = [];
	$scope.s = [1, 2, 3];
	$scope.startAlgo = function(num){
		numP = num;
		algoS(num);
		if (this.buf[0]> 0){
		  $state.go('showCombination');
		}
		else{
			console.log('noooo');
		}
		
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
			this.buf[i] = Math.floor((Math.random() * max) + min);
			max = max - this.buf[i];
			total = total + this.buf[i];
			console.log(this.buf[i]);
			console.log('Total: ' + total);
		  }
	    console.log(total);
	    this.buf[2] = num - total;
	    console.log('Final buf: ' + this.buf);
	    console.log('Done');
	    //$scope.finalTen.push(buf);
		//console.log($scope.finalTen);
		//$scope.s[3] = 22;
		
	};
	console.log('Exit loop');
}]);