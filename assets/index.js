function ChessBoard(table_id,cols,rows){
	var self = this;
	self.cols = cols || 20;
	self.rows = rows || 20;
	self.createChess = function(){
		$(table_id+" tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(table_id+" tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	};
}
var chess = new ChessBoard("#table",10,10);
chess.createChess();