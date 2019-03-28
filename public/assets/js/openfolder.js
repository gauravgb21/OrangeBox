function openFolder(id){
	$.ajax({
		url:'/openfolder',
		type:'post',
		data:{id:id},
		success:function(data){
			if (data) {
				$("body").html(data);
				// console.log(data);
			}
			console.log("folder id",id);
			console.log("open folder request sent!");
		}
	});
}