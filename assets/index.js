var m;
function ChessBoard(table_id,cols,rows){
	var self = this;
	self.cols = cols || 20;
	self.rows = rows || 20;
	var init=function(){
		var markup = "";
		//$(table_id).html("<tr>");
		for(var height = 0;height<self.rows;height++){
			markup+="<tr>";
			for(var width = 0;width<self.cols;width++)
				markup+="<td>1</td>";
			markup+="</tr>"
		}
		
		$(function(){
			$(table_id).html(markup);
		
			$("#table").on("click","td",function(){
				$(this).toggleClass("black-tile");
			});
		});
		return markup;
	};
	self.createChess = function(){
		$(table_id+" tr:nth-child(even) td:nth-child(even)").addClass("black-tile");
		$(table_id+" tr:nth-child(odd) td:nth-child(odd)").addClass("grey-tile");
	};
	m = init();
}
var chess = new ChessBoard("#table",10,10);
chess.createChess();