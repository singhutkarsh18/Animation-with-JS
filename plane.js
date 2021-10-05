let j=0;
let x=document.getElementById("plane");
function animate()
{
    let id=setInterval(aeroplane,1);
    function aeroplane()
    {
        j++;
        if(j==2500)
            clearInterval(id);
        else
        {
            x.style.left=j+"px";
        }
    }
}