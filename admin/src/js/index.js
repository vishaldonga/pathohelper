const fileTypes = ['pdf', 'docx', 'jpg', 'jpeg', 'png'];
function readURL(input) {
    if (input.files && input.files[0]) {
        const extension = input.files[0].name.split('.').pop().toLowerCase(),
            isSuccess = fileTypes.indexOf(extension) > -1;

        if (isSuccess) {
            const reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
        }
        else {
        	$(input).closest('.uploadDoc').find(".docErr").fadeIn();
            setTimeout(function() {
				   	$('.docErr').fadeOut('slow');
					}, 9000);
        }
    }
}
$(document).ready(function(){
   
   $(document).on('change','.up', function(){
   	const id = $(this).attr('id');
	   let profilePicValue = $(this).val();
	   const fileNameStart = profilePicValue.lastIndexOf('\\');
	   profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0,20);
	   if (profilePicValue != '') {
          $(this).closest('.fileUpload').find('.upl').html(profilePicValue);
	   }
   });

   $(".btn-new").on('click',function(){
        $("#uploader").append('<div class="row uploadDoc"><div class="col-sm-6"><div class="docErr">Please upload valid file</div><!--error--><div class="fileUpload btn btn-orange"> <i class="fa fa-upload"></i><span class="upl" id="upload">Upload document</span><input type="file" class="upload up" id="up" onchange="readURL(this);" /></div></div><div class="col-sm-6"><input type="text" class="form-control" name="title" placeholder="Title"></div><div class="col-sm-1"><a class="btn-check"><i class="fa fa-times"></i></a></div></div>');
   });
    
   $(".btn-next").on("click", function() {
     if($(".uploadDoc").length>1){
        $(this).closest(".uploadDoc").remove();
      }else{
        alert("You have to upload at least one document.");
      } 
   });
});