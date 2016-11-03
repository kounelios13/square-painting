function ChessBoard(table_id, cols, rows) {
	var self = this;
	self.cols = cols || 20;
	self.rows = rows || 20;
	var render = () => {
		var markup = "";
		//$(table_id).html("<tr>");
		for (var height = 0; height < self.rows; height++) {
			markup += "<tr>";
			for (var width = 0; width < self.cols; width++)
				markup += "<td></td>";
			markup += "</tr>"
		}
		$(table_id).html(markup);
		$(table_id).on("click", "td", function() {
			$(this).toggleClass("black-tile");
		});
		return markup;
	};
	self.createChess = () => {
		$(table_id + " tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(table_id + " tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	};
	self.clear = () => {
		$(".black-tile").removeClass("black-tile");
	};
	$(function() {
		/*
		 * Render on when dom is ready
		 */
		render();
	});
}

class Painter {

	constructor(table_id, cols, rows) {
		if (!table_id)
			throw new TypeError("Provide a valid table selector");
		this.cols = cols || 20;
		this.rows = rows || 20;
		$(function() {
			console.log("doc reaady");
			var markup = "";
			//$(table_id).html("<tr>");
			for (var height = 0; height < self.rows; height++) {
				markup += "<tr>";
				for (var width = 0; width < self.cols; width++)
					markup += "<td></td>";
				markup += "</tr>"
			}
			$("#table").append(markup);
			$("#table").on("click", "td", function() {
				$(this).toggleClass("black-tile");
			});
		});
	}

}
var chess = new Painter("#table", 30, 30);