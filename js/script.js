$(document).ready(function() {
	$('#Button1').click(function(event) {
		$('#bottom_1').click();
	});
	$('#Button2').click(function(event) {
		$('#bottom_2').click();
		$('#chu').on();
	});
	$('#Button3').click(function(event) {
		$('#bottom_3').click();
	});
	$('#Button4').click(function(event) {
		$('#bottom_4').click();
	});
	$('#Button5').click(function(event) {
		$('#bottom_5').click();
	});	
});

function timeElapse(date){
			var current = Date();
			var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

			var days = Math.floor(seconds / (60 * 60 * 24));


			seconds = seconds % (3600 * 24);
			var hours = Math.floor(seconds / (60*60));

			if (hours < 10) {
				hours = "0" + hours;
			}

			seconds = seconds % 3600;
			var minutes = Math.floor(seconds / 60);
			if (minutes < 10) {
				minutes = "0" + minutes;
			}

			seconds = seconds % 60;
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
		    var years = Math.floor(days/365);
		    var months = Math.floor(years*12);



			document.getElementById("years").innerHTML =years;
        	document.getElementById("months").innerHTML =months;
    		document.getElementById("days").innerHTML =days;
    		document.getElementById("hours").innerHTML =hours;
    		document.getElementById("minutes").innerHTML =minutes;
    		document.getElementById("seconds").innerHTML=seconds;

}
	
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '(>ᴗ<)' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

(function($) {
	$.fn.typewriter1 = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 3 ? '' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);



function createElement() {
	
}

