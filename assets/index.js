function ChessBoard(table_id,cols,rows){

	var self = this;
	self.createChess = function(){
		$(table_id+" tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(table_id+" tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	};
}