
document.getElementById("drag").addEventListener("click", (e) => {
	document.getElementById("files").click();
});

var filesvar = document.getElementById("files");
filesvar.addEventListener("change", (e) =>{
	var fileList = files.files;
    alert(fileList[0].name);
	
		for(var i = 0; i < fileList.length; i++){
			
				
				var sizebyte = fileList[i].size;
				var sizekb = parseInt(sizebyte / 1024);
				var btn = document.createElement("TR");
				btn.innerHTML = "<tr><td>" + fileList[i].name + "</td><td>" + sizekb + 'kilobytes' + "</td><td>" + fileList[i].type + "</td></tr>";
   	            document.getElementById("tabla").appendChild(btn); 
			
		}
		
}, false);

