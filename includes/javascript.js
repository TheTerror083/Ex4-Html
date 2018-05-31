function validateName() {
	var Input = document.getElementById('nameInp').value;
	if(Input.includes(' ')){
		alert("I AM GROOT!!!!(your name cannot contain spaces).");
		return false;
	}
	if(Input.includes('a') && Input.includes('d')){
		return true;
	}
	else{
		alert("I AM GROOT!!!!(your name must contain a and d).");
		return false;
	}
}


window.onload=function(){
	document.getElementById('myForm').onsubmit=validateName;
}