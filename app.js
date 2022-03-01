/* Page load */
$(document).ready(function(){
	bindValues();
});

function bindValues(){
	$(".value").click(this,function(e){
		console.log(this.innerHTML);
		if(this.innerHTML == 0)
			this.innerHTML = "1";
		else if(this.innerHTML == 1)
			this.innerHTML = "d";
		else if(this.innerHTML == "d")
			this.innerHTML = "0";

	});
}

function addToImplicant(color,obj){
	var p = obj.offset();
	var implicant = $(document.createElement('span'));
	implicant.addClass("implicant").addClass("color");
	implicant.css("height","42px")
		.css("width","40px")
		.css("top",p.top+2)
		.css("left",p.left+2)
		.css("border-color",color);
	console.log(implicant);
	obj.append(implicant);
	//obj.css("border-radius","5px")
		//.css("border","3px solid "+color);
}
