function openFolder(id){
	$.ajax({
		url:'/openfolder',
		type:'POST',
		data:{id:id},
		success:function(data){
			console.log("open folder request sent!");
		}
	});
}