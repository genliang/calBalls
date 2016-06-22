app.controller('Calculator', ['$scope', '$state', 'Storage', function($scope, $state, Storage){
	console.log('Start calculator algo!');
	//$scope.s = [1, 2, 4, 5, 3];
	var numP = 0;
	var buf = [];
	var finalTen = [];
	$scope.s = [1, 2, 3];
	$scope.startAlgo = function(num){
		numP = num;
		algoS(num);
		
		
	};

	var algoS = function(num){
		console.log('start Algo...');
		console.log(num);
		
		for(var j = 0; j < 10; j++){
			var min = 1;
			var max = num - 2;
			var total = 0;

			for(var i = 0; i < 2; i++){
				//random twice, the remaining would be the last value
				buf[i] = Math.floor((Math.random() * max) + min);
				max = max - buf[i];
				total = total + buf[i];
				console.log(buf[i]);
				//console.log('Total: ' + total);
		    }
		    //console.log(total);
		    buf[2] = num - total;
		    console.log('The 3 values are: ' + buf);
		    finalTen.push(buf);
		    buf = [];
		    console.log(finalTen[j]);
		}
		  
	    for(var a = 0; a < num; a++){
	    	console.log(finalTen[a]);
	    }
	    console.log('Done');
	    Storage.sendItems(finalTen);
	    console.log('Items send!');
	    finalTen.length = 0;
	    $state.go('showCombination');

		
	};

}]);