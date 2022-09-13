
function funcion(){
	let elemento = document.getElementById("drag");
	elemento.style.setProperty('background-color','rgba(0,0,0,0.08)');
}

function func(){
	let elemento = document.getElementById("drag");
	elemento.style.setProperty('background-color' , 'rgba(0,0,0,0)');
}

function dropfiles(ev){
	ev.preventDefault();
	
	
	if(ev.dataTransfer.items){
		for(var i = 0; i < ev.dataTransfer.items.length; i++){
			if(ev.dataTransfer.items[i].kind === 'file'){
				var file = ev.dataTransfer.items[i].getAsFile();
				var sizebyte = file.size;
				var sizekb = parseInt(sizebyte / 1024);
				var btn = document.createElement("TR");
				btn.innerHTML = "<tr><td>" + file.name + "</td><td>" + sizekb + 'kilobytes' + "</td><td>" + file.type + "</td></tr>";
   	            document.getElementById("tabla").appendChild(btn); 
			}
		}
	}	else{
			for(var i = 0; ev.dataTransfer.files.length; i++){
				
			}
	}
	borrar(ev);
	
}

function dragfiles(ev){
	ev.preventDefault();
}

function borrar(ev){
	if(ev.dataTransfer.items){
		ev.dataTransfer.items.clear();
	} else{
		ev.dataTransfer.clearData();
	}
}

