const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

var nikita_time=new Image();



nikita_time.src='./nikita_time.jpg'


nikita_time.onload = function() {
   ctx.drawImage(nikita_time,0,0,100,100) 
}

