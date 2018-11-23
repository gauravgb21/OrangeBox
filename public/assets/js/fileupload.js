$(document).ready(function(){
    $("#file").on("change",function(event){
        selectedFile=event.target.files[0];
    });
});

function uploadFile(){
//create root reference
var filename = selectedFile.name;
var storageRef=firebase.storage().ref('/profileImages/'+ filename);
console.log("storage ref is");
console.log(storageRef);
var uploadTask= storageRef.put(selectedFile);
 
 // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
  console.log("there is an error!");
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  var downloadURL = uploadTask.snapshot.downloadURL;
   
   //change dp

    $.ajax({
      url: '/fileupload',
      type: 'POST',
      data: {url:downloadURL,name:filename},
      success: function(result){
        console.log("request sent to server");
      }
    });
});

}