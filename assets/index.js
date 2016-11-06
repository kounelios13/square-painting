function changeCss(stylesheet, text) {
	if (!text || !stylesheet)
		throw new TypeError("Invalid color or stylesheet");
	$(stylesheet).html(text);
}
class Painter {
	constructor(selector, cols, rows, style) {
		this.looper = null;
		if (!selector)
			throw new TypeError("Provide a valid table selector");
		this.cols = cols || 20;
		this.rows = rows || 20;
		this.selector = selector;
		this.style = style;
		this.jSelector = $(this.selector);
		let markup = "";
		for (let height = 0; height < this.rows; height++) {
			markup += "<tr>";
			for (let width = 0; width < this.cols; width++)
				markup += "<td data-col=" + width + " data-row=" + height + "></td>";
			markup += "</tr>";
		}
		this.jSelector.html(markup);
		this.jSelector.on("click", "td", function() {
			$(this).toggleClass("tile-active");
		});
		return this;
	}
	setStyleSheet(stylesheet) {
		this.style = stylesheet;
	}
	changeTileColor(stylesheet, newColor) {
		if (!newColor)
			return;
		var css = ".tile-active{\n\tbackground:" + newColor + ";\n}";
		try {
			changeCss((stylesheet || this.style), css);
		} catch (e) {
			console.log("Suppressed error");
		} finally {
			return this;
		}
	}

	createChessBoard() {
		var id = this.selector;
		$(id + " tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(id + " tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	}
	toggleBorder() {
		var bname = this.jSelector.css("border");
		this.jSelector.css("border", bname.indexOf("none") != -1 ? "2px solid" : "none");
	}
	clearBoard() {
		$(this.selector + " .tile-active").removeClass("tile-active");
	}
	createRandowDraw() {
		var t = this;
		t.clearBoard();
		$(this.selector + " td").each(function(i, mat) {
			//i ->index
			//mat -->current cell (td) of table
			let num = Math.floor(Math.random(2) * 2);
			if (num && num <= 1) {
				$(mat).addClass("tile-active");
			}
		});
	}
	loop(time) {
		let t = this;
		this.looper = setInterval(function() {
			t.createRandowDraw();
		}, time || 1000);
	}
	exit_loop() {
		clearInterval(this.looper);
	}
}
class ChessBoard extends Painter {
	constructor(selector, cols, rows, style, active_color) {
		super(selector, cols, rows, style);
		this.activeColor = active_color || "dodgerblue";
		try {
			changeCss(style, ".custom-tile{\n\tbackground:" + this.activeColor + ";}");
		} catch (e) {
			console.log(e);
		}
	}
	createBoard() {
		let id = this.selector;
		/*$(id + " tr:nth-child(odd) td:nth-child(odd)").css("background","black");
		$(id + " tr:nth-child(even) td:nth-child(even)").css("background",this.activeColor);*/
		$(id + " tr:nth-child(odd) td:nth-child(odd)").addClass("black-tile");
		$(id + " tr:nth-child(even) td:nth-child(even)").addClass("custom-tile");
	}
	clearBoard() {
		let id = this.selector;
		$(id + " .black-tile").removeClass("black-tile");
		$(id + " .custom-tile").removeClass("custom-tile");
	}
	updateColor(color) {
		this.activeColor = color;
		changeCss(this.style, ".custom-tile{\n\tbackground:" + this.activeColor + ";}");
	}
}

let chess; /*= new Painter("#table",30,30,"#fly");*/
$(document).ready(function() {
	chess = new Painter("#table", 30, 30, "#fly", "ligtblue");
});