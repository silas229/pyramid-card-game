$( document ).ready(function() {
	// function turn() {
	// 	if(turn == "A") turn = "B";
	// 	if(turn == "B") turn = "A";
	// 	$(".turn").html(turn+" is turn!");
	// };
	init();
	function init() {
		var turn = "AB".charAt(Math.floor(Math.random() * 2));
		$.fn.turn = function() {
			if(turn == "A") {turn = "B";}
			else {turn = "A";}
			this.html(turn+" is turn!");
		};
		$(".turn").html(turn+" is turn!");
		var scores = [1,3,5,7];
		$("select").barrating("show", {
			theme: "cards",
			allowEmpty: false,
			deselectable: false,
			onSelect: function(value, text, event) {{
				$(".br-theme-cards .br-widget a.br-selected").css("visibility","hidden").animate({width:"0px"},800);
				scores[value.charCodeAt(0) - 65] = Math.abs([1,3,5,7][value.charCodeAt(0) - 65] - parseInt(value.charAt(1)));
				window.console.log(scores);
				// if (scores.some(el => el == 0)) {
				$(".turn").turn();
				if (JSON.stringify(scores) == JSON.stringify([0,0,0,0])) {
					$("#winner").html(turn);
					$(".restart-wrapper").css("display","flex");
				}
			}},
		});
	}

	$("#restart").click(function() {
		$("select").barrating("destroy").val("");
		init();
		$(".restart-wrapper").hide();
	});

});
