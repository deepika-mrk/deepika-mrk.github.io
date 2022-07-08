function simpleint(){
	var txt1 = document.getElementById('txt1').value;
	var txt2 = document.getElementById('txt2').value;
	var txt3 = document.getElementById('txt3').value;
	var ans = txt1*txt2*txt3/100;
	document.getElementById('txt4').value = ans;
	
	if(ans == 0){
		document.getElementById('txt4').value = 'Enter all the values';
	}
	
}