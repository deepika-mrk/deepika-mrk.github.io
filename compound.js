function f1()
{
var v1=document.getElementById('c1').value;
var v2=document.getElementById('c2').value;
var v3=document.getElementById('c3').value;
var ans= parseInt(v1) * (1 + parseInt(v2)/100)* parseInt(v3);
document.getElementById('c4').value=ans;
}