/* Page load */
$(document).ready(function(){
	bindValues();
	checkMintermToggle($(".mintermToggle")[0]);
});

function bindValues(){
	$(".value").click(this,function(e){
		if(this.innerHTML == 0)
			this.innerHTML = "1";
		else if(this.innerHTML == 1)
			this.innerHTML = "d";
		else if(this.innerHTML == "d")
			this.innerHTML = "0";

	});
}

function addToImplicant(color,topLeft,bottomRight){
	var topLeftMinterm = $("#mt"+topLeft);
	var bottomRightMinterm = $("#mt"+bottomRight);

	var topLeftCoord = topLeftMinterm.offset();
	var bottomRightCoord = bottomRightMinterm.offset();
	bottomRightCoord.top += bottomRightMinterm.height();
	bottomRightCoord.left += bottomRightMinterm.width();

	var topCoord = topLeftCoord.top + 2;
	var leftCoord = topLeftCoord.left + 2;
	
	//var height = topLeftCoord.top-bottomRightCoord.top;
	var height = bottomRightCoord.top - topLeftCoord.top - 4;
	var width = bottomRightCoord.left-topLeftCoord.left - 4;

	var implicant = $(document.createElement('span'));
	implicant.addClass("implicant").addClass(color);
	implicant.css("height",height)
		.css("width",width)
		.css("top",topCoord)
		.css("left",leftCoord)
		.css("border-color",color);
	topLeftMinterm.append(implicant);
}

function removeImplicant(color){
	$("."+color).remove();
}

function draw(){
	color = $("input[name=color]").val();
	start = $("input[name=start]").val();
	end = $("input[name=end]").val();

	addToImplicant(color,start,end);
}

function checkMintermToggle(checkbox){
	isChecked = checkbox.checked;
	if(isChecked)
		$(".minterm").css("visibility","");
	else
		$(".minterm").css("visibility","hidden");
}

function clearImplicants(){
	$(".implicant").remove();
}


