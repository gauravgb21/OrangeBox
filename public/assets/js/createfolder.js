function createFolder(pname){
	var name = document.getElementById('newfoldername').value;
	$.ajax({
		url:'/createfolder',
        type:'POST',
        data:{name:name,parent:pname},
        success: function(result){
        	$("body").html(result);
        	console.log("folder creation request sent successfully!");
        	// console.log(result);
        	// location.reload();
        }
	});
	//console.log(name);
	//console.log(pname);
}