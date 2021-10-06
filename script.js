var gokuAnime=document.getElementById("goku");
var goku = ['url(img/dbz1.png)','url(img/dbz2.png)','url(img/dbz3.png)','url(img/dbz4.png)','url(img/dbz5.png)','url(img/dbz6.png)','url(img/dbz7.png)','url(img/kamehameha.png)'];
var vegeta = ['url(img/vegeta1.png)','url(img/vegeta2.png)','url(img/vegeta3.png)','url(img/vegeta4.png)'];
let i=0;
function myFun()
{
    let x=setInterval(Kamehameha,150);
    function Kamehameha()
    {
            i++;
            if(i==12)
                document.getElementById("kamehameha").style.backgroundImage = "none";
            if(i ===8){
                document.getElementById("kamehameha").style.backgroundImage = "none";
            }
            if(i<7)
            gokuAnime.style.backgroundImage = goku[i];
            if(i===7)
            {
                document.getElementById("kamehameha").style.backgroundImage = goku[7];
            }
            if(i>8){
                document.getElementById("vegeta").style.backgroundImage = vegeta[i-8];
                if(i==12)
                {
                    document.getElementById("vegeta").style.top="58vh";
                    document.getElementById("vegeta").style.left="85vw";
                    
                } 
            }
           
    }
}