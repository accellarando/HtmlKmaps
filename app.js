/* Page load */
$(document).ready(function(){
	bindValues();
	addToImplicant("blue",$("#testCell"));
});

function bindValues(){
	$(".value").click(this,function(e){
		console.log(this.innerHTML);
		if(this.innerHTML == 0)
			this.innerHTML = "1";
		else
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
