setInterval(timer,1000);
function timer(){
  var t = document.getElementById("t").innerHTML;
  var ti = parseInt(t) - 1;
 if(ti>0){  document.getElementById('t').innerHTML=ti;
         }
  else{
    score();
  }
  
}
function score(){
  document.getElementById('q').innerHTML="Your Score ";
  var s = document.getElementById('sco').innerHTML;
  document.getElementById('input').value= s;
}

function question(){
  var a=Math.round(Math.random()*100);
  var b= Math.round(Math.random()*100);
  var c=Math.round(Math.random()*10);
  var q;
  if(c < 3){
    q = String(a) + "+" + String(b);
  }
  else if((c>3) && (c<5)){
     q = String(a) + "-" +String(b);
  }
  else if((c>5) && (c<7)){
     q = String(a) + "*" + String(b);
  }
  else{
    
    var d= Math.round(Math.random()*10);
     q = String(d*a) + "/" + String(a);
  }
  
  document.getElementById('q').innerHTML=q;
  
  
}
setInterval(check,300);
function check(){
  var q = document.getElementById('q').innerHTML;
  var ans = document.getElementById('input').value;
  if(eval(q)==parseInt(ans)){
    var sc = document.getElementById('sco').innerHTML;
    var nsc = parseInt(sc) + 1;
    document.getElementById('sco').innerHTML=nsc;
    question();
    document.getElementById('input').value=" ";
  }
}



























