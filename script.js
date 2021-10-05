var gokuAnime=document.getElementById("goku");
var goku = ['url(img/dbz1.png)','url(img/dbz2.png)','url(img/dbz3.png)','url(img/dbz4.png)','url(img/dbz5.png)','url(img/dbz6.png)','url(img/dbz7.png)','url(img/kamehameha.png)'];
let i=0;
function myFun()
{
    let x=setInterval(Kamehameha,150);
    function Kamehameha()
    {
            i++;
            if(i ===8){
                i=0;
                document.getElementById("kamehameha").style.backgroundImage = "none";
            }
            if(i<7)
            gokuAnime.style.backgroundImage = goku[i];
            if(i===7)
            {
                // document.getElementById("kamehameha").style.left=200+"px";
                document.getElementById("kamehameha").style.backgroundImage = goku[7];
            }
    }
}