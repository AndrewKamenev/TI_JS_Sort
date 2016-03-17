
	$(document).ready(function(){
		function sort(array){
			for(var j = 0; j < array.length+1; j++){
				for (var i = 0; i < array.length+1; i++) {
					if(array[i] > array[i + 1]){
						var temp = array[i]; 
						array[i] = array[i + 1];
						$('.ar-digit').eq(i).html(array[i + 1]);
						// $('.ar-digit').eq(i).css('backgroundColor','red');
						array[i + 1] = temp;
						$('.ar-digit').eq(i+1).html(temp);
					};	
				};
				// $('.ar-digit').eq(array.length-1-j).css('backgroundColor','gray');
			};
			// drawArray(array);
			return array;
		};
		function drawArray(array){
			for(var i = 0; i < array.length; i++){
				$('#forArray').append('<div class="ar-digit">'+array[i]+'</div>');
			};
		};
		function refresh(){
			$('#forArray').html('');
			var arrayToSort = prompt('Enter digits to sort. Separate them by coma').split(',').map(function(i){
				return parseInt(i, 10);
			});	
			drawArray(arrayToSort);
			console.log(arrayToSort);
			return arrayToSort;
		};
	
		$('#sort').on('click', function(ev){
			sort(array);
		});
		$('#refresh').on('click', function(ev){
			return array = refresh();	
		});
	var array = refresh();
	});
