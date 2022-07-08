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

function checkNumVars(obj){
	reset();
	var numVars = $(obj).val();

	switch(numVars){
		case "2":
			//hide irrelevant boxes
			$(".e1").hide();
			$(".row.three").hide();
			$(".row.two").hide();
			$(".col.three").hide();
			$(".col.two").hide();
			
			//hide/change irrelevant labels
			$(".elabel").hide();
			$(".label.three").hide();
			$(".label.two").hide();
			$(".label.zero").text("0");
			$(".label.one").text("1");
			$("#ab1").val("A");
			$("#cd1").val("B");

			//change minterm labels
			$("#mt4 > small").text("1");
			$("#mt1 > small").text("2");
			$("#mt5 > small").text("3");

			//change minterm ids
			//move current mt into data-oldmt
			$("#mt1").attr("data-oldmt","1").attr("id","mt2");
			$("#mt4").attr("data-oldmt","4").attr("id","mt1");
			$("#mt5").attr("data-oldmt","5").attr("id","mt3");
			break;
		case "3":
			$(".e1").hide();
			$(".row.three").hide();
			$('.row.two').hide();

			$(".elabel").hide();
			$(".label.left.three").hide();
			$(".label.left.two").hide();
			$(".label.left.zero").text("0");
			$(".label.left.one").text("1");
			$("#cd1").val("C");

			$("#mt4 > small").text("1");
			$("#mt12 > small").text("3");
			$("#mt8 > small").text("2");
			$("#mt1 > small").text("4");
			$("#mt5 > small").text("5");
			$("#mt13 > small").text("7");
			$("#mt9 > small").text("6");

			$("#mt4").attr("data-oldmt","4").attr("id","mt1n");
			$("#mt12").attr("data-oldmt","12").attr("id","mt3");
			$("#mt8").attr("data-oldmt","8").attr("id","mt2");
			$("#mt1").attr("data-oldmt","1").attr("id","mt4");
			$("#mt1n").attr("id","mt1");
			$("#mt13").attr("data-oldmt","13").attr("id","mt7");
			$("#mt9").attr("data-oldmt","9").attr("id","mt6");
			break;
		case "4":
			$(".e1").hide();
			$(".elabel").hide();
			break;
		default:
			reset();
			break;
	}
}

function reset(){
	//show all labels
	$(".e1").show();
	$(".row").show();
	$(".col").show();
	$(".elabel").show();
	$(".label").show();
	$(".label.zero").text("00");
	$(".label.one").text("01");

	//variable labels
	$("#ab1").val("AB");
	$("#ab2").val("AB");
	$("#cd1").val("CD");
	$("#cd2").val("CD");

	//fix minterms
	$(".col").each(function(i, elem){
		var oldmt = $(elem).attr("data-oldmt");
		if(oldmt){
			$(elem).attr("id","mt"+oldmt);
			$(elem).removeAttr("data-oldmt");
			$(elem).children("small").text(oldmt);
		}
	});
}
