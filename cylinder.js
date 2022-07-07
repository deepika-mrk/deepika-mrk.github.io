function area()
{
	var c1 = document.getElementById('val1').value;
	var c2 = document.getElementById('val2').value;
	
	var volume = 3.14 * c1 * c1 * c2 ;
	document.getElementById('val3').value= volume;
	
	var area = 2 * 3.14 * c1 * c2 + parseInt(volume) ;
	document.getElementById('val4').value= volume;
	
	var base = 3.14 * c1 * c1;
	document.getElementById('val5').value= base;
}