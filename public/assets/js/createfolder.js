function createFolder(pname){
	var name = document.getElementById('newfoldername').value;
	$.ajax({
		url:'/createfolder',
        type:'POST',
        data:{name:name,parent:pname},
        success: function(result){
        	console.log("folder creation request sent successfully!");
        	location.reload();
        }
	});
	//console.log(name);
	//console.log(pname);
}