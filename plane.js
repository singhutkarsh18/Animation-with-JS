let j=0;
let x=document.getElementById("plane");
var cl=document.getElementsByClassName("cloud");

function animate()
{        for (const cloud of cl) {
    cloud.style.top=Math.random()*200+"px";
    cloud.style.left=Math.random()*800+"px";
    
}

    let id=setInterval(aeroplane,1);
    function aeroplane()
    {
        for (const cloud of cl) {
           
            cloud.style.left=cloud.offsetLeft+1+"px";
            if(cloud.offsetLeft>2500){
                cloud.style.left="0px"
            }
        }

        j++;
        if(j==2500)
            j=0;
        else
        {
            x.style.left=j+"px";
        }
    }
}