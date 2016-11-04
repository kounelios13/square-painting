/*function ChessBoard(table_id, cols, rows) {
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
/*		render();
	});
}*/
function changeCss(stylesheet,text){
	if(!text || !stylesheet)
		throw new TypeError("Invalid color or stylesheet");
	$(stylesheet).html(text);
}
class Painter {
	constructor(selector, cols, rows,style) {
		this.looper = null;
		if (!selector)
			throw new TypeError("Provide a valid table selector");
		this.cols = cols || 20;
		this.rows = rows || 20;
		this.selector = selector;
		this.style = style;
		let markup = "";
		for (let height = 0; height < this.rows; height++) {
			markup += "<tr>";
			for (let width = 0; width < this.cols; width++)
				markup += "<td></td>";
			markup += "</tr>";
		}
		$(function() {
			$(selector).html(markup);
			$(selector).on("click", "td", function() {
				$(this).toggleClass("tile-active");
			});
		});
	}
	changeTileColor(stylesheet,newColor){
		if(!newColor)
			return;
		var css = ".tile-active{\n\tbackground:"+newColor+";\n}";
		try{
			changeCss(stylesheet||this.style, css);	
		}
		catch(e){
			console.log("Suppressed error");
		}
	}
	createChessBoard() {
		var id = this.selector;
		$(function() {
			$(id + " tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
			$(id + " tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
		});
	}
	toggleBorder(){
		var bname = $(this.selector).css("border");
		$(this.selector).css("border",bname.indexOf("none")!= -1?"2px solid":"none");
	}
	clear(){
		$(this.selector+" .tile-active").removeClass("tile-active");
		/*let id = this.selector;
		$(id + " tr:nth-child(even) td:nth-child(even)").removeClass("black-tile");
			$(id + " tr:nth-child(odd) td:nth-child(odd)").removeClass("grey-tile");*/
	}
	loop(){
		this.looper = setInterval(function(){
			for(var i = 0,max=this.cols*this.rows;i<max;i++){
				if(Math.floor(Math.random() * 10) > 1)
					$(" tr td nth-child("+i+")").toggleClass("tile-active");
			}
		},1000);
	}
}
class ChessBoard extends Painter{
	constructor(selector,cols,rows,active_color,style){
		super(selector,cols,rows,style);
		this.activeColor = active_color || "dodgerblue";
		try{
			changeCss(style,".custom-tile{\n\tbackground:"+this.activeColor+";}");
		}
		catch(e){
			console.log("Suppressed error");
		}
	}
	createBoard(){
		let id = this.selector;
		/*$(id + " tr:nth-child(odd) td:nth-child(odd)").css("background","black");
		$(id + " tr:nth-child(even) td:nth-child(even)").css("background",this.activeColor);*/
		$(id+" tr:nth-child(odd) td:nth-child(odd)").addClass("black-tile");
		$(id+" tr:nth-child(even) td:nth-child(even)").addClass("custom-tile");
	}
	clearBoard(){
		let id = this.selector;
		$(id+" .black-tile").removeClass("black-tile");
		$(id+" .custom-tile").removeClass("custom-tile");
	}
}
