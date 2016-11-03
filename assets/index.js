function ChessBoard(table_id, cols, rows) {
	var self = this;
	self.cols = cols || 20;
	self.rows = rows || 20;
	var render = ()=> {
		var markup = "";
		//$(table_id).html("<tr>");
		for (var height = 0; height < self.rows; height++) {
			markup += "<tr>";
			for (var width = 0; width < self.cols; width++)
				markup += "<td></td>";
			markup += "</tr>"
		}
		$(table_id).html(markup);
		$("#table").on("click", "td", function() {
			$(this).toggleClass("black-tile");
		});	
		return markup;
	};
	self.createChess = ()=> {
		$(table_id + " tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(table_id + " tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	};
	self.clear =() =>{
		$(".black-tile").removeClass("black-tile");
	};
	$(function(){
		/*
		* Render on when dom is ready
		*/
		render();
	});
}
var chess = new ChessBoard("#table", 30, 30);
