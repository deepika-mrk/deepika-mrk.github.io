function f1()
{
var a1=document.getElementById('v1').value;	
document.getElementById('s1').textContent='Result is ' + a1;
}

function f2()
{
	var x= 'Rose';
	x = x + 'Jasmine';
	x = x + 'Lily';
	x = x + 'Sunflower';
	document.getElementById('s1').textContent ='List Of flowers ' + x;
}

function f3()
{
	var a = 1;
	a= a+3;
	a = a+1;
	a++;
	a = a+2;
	a = a + ' is my lucky number ';
	document.getElementById('s1').textContent='Result is ' + a;
	
}

function f4()
{
	var a = 0;
	var t = 'Deepika';
	var c = document.getElementById('v1').value;
	var d = document.getElementById('v2').value;
	for(a=1; a<=d; a++)
	{
		t = t + '<br>' + a +' ' + 'x' + c +'=' +(a*c);
		
	}
	
	document.getElementById('s1').innerHTML='Result is ' + t;
	console.log(t);
	
}