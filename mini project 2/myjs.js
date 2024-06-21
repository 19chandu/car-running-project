var y;
var m=0;
function start()
{
 y=setInterval(anim,100);
 
  function anim()
  {
      
      console.log(m);
        if(m==1250)
        {
            clearInterval(x);           
            m=0;
        }
        
        else
        {
            m=m+5;
            document.getElementById("img").style.visibility="visible";
            var target=document.getElementById("img");
            target.style.marginLeft=m+'px';
        }
   }

}

function stop()
{
    clearInterval(y)
}