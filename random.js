	$(document).ready(function() {

			// list one content
			var one = [
				'adapting',
				'anxiety',
				'appearance',
				'appreciation',
				'balance',
				'being yourself',
				'expectations'
			];

			// list two content
			var two = [
				'impulse',
				'loss',
				'marriage',
				'mindset',
				'motivation',
				'overthinking',
				'parenting'
			];

			// list three content
			var three = [
				'real friends',
				'regret',
				'self confidence',
				'singing',
				'societal bubbles',
				'stereotypes',
				'temper',
				'time'
			];

			var topicone = one.length
			var x = Mat.floor(topicone*Math.random())
			document.getElementById('topic-one').src=one[x];

			var topictwo = two.length
			var x = Mat.floor(topictwo*Math.random())
			document.getElementById('topic-two').src=two[x];

			var topicthree = three.length
			var x = Mat.floor(topicthree*Math.random())
			document.getElementById('topic-three').src=three[x];


			function select_random(x){
				y = x[Math.floor(Math.random()*x.length)];
				return y;
			}

			function generate(){

				// Select a random item from each list
				var selected_one = select_random(one);
				var selected_two = select_random(two);
				var selected_three = select_random(three);

				// Take the selected (random) item from list and make it visible
				$('.list-one').html(selected_one);
				$('.list-two').html(selected_two);
				$('.list-three').html(selected_three);

			}
			generate();
		});