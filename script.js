
	$(document).ready(function(){
		function validate(){
			if($('input').val().match(/[0-9,\,]/)){
					var arrayToSort = $('input').val().split(',').map(function(i){
						return parseInt(i, 10);
					});
				return array = arrayToSort;
				}
				else {
					alert('Enter only digits and comas');
				}
		}
		function sort(array){
			for(var j = 0; j < array.length-1; j++){
				for (var i = 0; i < array.length-1; i++){
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
			$('input').val('');	
		};
	
		$('#sort').on('click', function(ev){
			validate();
			drawArray(array);
			sort(array);
		});
		$('#refresh').on('click', function(ev){
			return array = refresh();	
		});
	// var array = refresh();
	});
