function peri()
{
	var r1 = document.getElementById('val1').value;
	const pie = 3.14;
	var cir = 2 * pie * parseInt(r1);
    document.getElementById('val2').value = cir;
    var ar = pie * r1 * r1;
	document.getElementById('val3').value = ar;
	
}