  document.write('<link rel=stylesheet href=\"news.css\" TYPE=\"text/css\" media=\"screen\">');
function toggleProcedure(currProcedure)
{
	
		thisProcedure = document.getElementById("procedure"+currProcedure).style;
		thisExpander = document.getElementById("expander"+currProcedure);
		if (thisProcedure.display == "block") {
			thisProcedure.display = "none";
			thisExpander.src = "images/readmore.gif";
		}
		else {
			thisProcedure.display = "block";
			thisExpander.src = "images/hide.gif";
		}
	
	return false
}

function toggleProcedureOpen(currProcedure)
{
		thisProcedure = document.getElementById("procedure"+currProcedure).style;
		thisExpander = document.getElementById("expander"+currProcedure);
		if (thisProcedure.display == "block" | thisProcedure.display == "") {
			thisProcedure.display = "none";
			thisExpander.src = "images/readmore.gif";
		}
		else {
			thisProcedure.display = "block";
			thisExpander.src = "images/hide.gif";
		}
	
	return false
}
// JavaScript Document