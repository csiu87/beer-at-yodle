$(document).ready(function(){ 
    var beer_countdown = {};

	var countdown = function() {
		var now = Date.today();
		if(!beer_countdown.good_until || beer_countdown.good_until < now) {

			var next_friday = Date.today().next().friday().set({hour:17});
			var next_saturday = Date.today().next().saturday();
			if(Date.today().is().friday()) {
				next_friday = Date.today().set({hour:17});
			}
			if(next_friday.clearTime().compareTo(Date.parse('2013-05-31')) == 0) {
				next_friday = next_friday.set({hour: 15, minute: 30});
			}
			else {
				next_friday = next_friday.set({hour:17});
			}

			beer_countdown.beer_friday = next_friday;
			beer_countdown.good_until = next_saturday;
		}
		return beer_countdown.beer_friday;
	};

	var timer = function(div) {
		var format = function(first, second) {
			var days, diff, fmt, formatted, hours, minutes, seconds;
			fmt = function(num) {
				if (num < 10) {
					return "0" + num;
				} else {
					return num;
				}
			};
			diff = (second - first) / 1000;
			seconds = fmt(Math.floor(diff % 60));
			diff = diff / 60;
			minutes = fmt(Math.floor(diff % 60));
			diff = diff / 60;
			hours = fmt(Math.floor(diff % 24));
			diff = diff / 24;
			days = Math.floor(diff);
			formatted = "";
			if (days > 0) formatted = days + 'd ';
			formatted = formatted + hours + ':' + minutes + ':' + seconds;
			return formatted;
		}
		var timeLeft = function() {
			var event, now, source;
			now = +(new Date());
			source = countdown();
			event = +source;
			if (event > now) {
				return "T-" + format(now, event);
			} else {
				return "T+" + format(event, now);
			}
		}
		var update = function() {
			$(div).html(timeLeft());
		};
		setInterval(update, 1000);
	};

	timer($("#timer"));

});