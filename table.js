function gen()
{
	var str = '<table>';
    for(i=1; i<=5 ; i++){
    str = str + '<tr><td>Apple' + i + '</td></tr>';
     }
     str = str + '</table>';
	 document.getElementById('s1').innerHTML = str;
}

function gen2(){
	
	var v1=document.getElementById('t1').value;
	var v2=document.getElementById('t2').value;
	var str = '<table class="table table-striped"> <tbody>';
    for(i=parseInt(v1);i<=parseInt(v2);i++)
	{
       str = str + '<tr><td>' + (i*1) + '</td><td>'+(i*2)+'</td><td>'+(i*3)+'</td></tr>'
     }
    str = str + '</tbody> </table>';
    document.getElementById('s1').innerHTML = str;
}