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
	constructor(selector, cols, rows) {
		if (!selector)
			throw new TypeError("Provide a valid table selector");
		this.cols = cols || 20;
		this.rows = rows || 20;
		let markup = "";
		for (let height = 0; height < this.rows; height++) {
			markup += "<tr>";
			for (let width = 0; width < this.cols; width++)
				markup += "<td></td>";
			markup += "</tr>";
		}

		$(function() {
			$(selector).html(markup);
			$(selector).on("click", "td", function(){
				$(this).toggleClass("black-tile");
			});
		});
	}
}
var chess = new Painter("#table", 30, 30);