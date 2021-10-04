function myFun()
{
    let v=null;
    const t = document.getElementById("tom");
    const j = document.getElementById("jerry");
    let x=0,x1=30;
    clearInterval(v);
    v=setInterval(animate,5);

    function animate()
    {
        if(x==750)
        {
            clearInterval(v);
        }
        else
        {
            x++;
            x1++;
            t.style.right=x+"px";
            j.style.right=x1+"px";
        }
    }
}