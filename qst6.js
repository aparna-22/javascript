function truncate(){
    var str=document.getElementById("string").value;
    var lim=document.getElementById("limit").value;
    var strnew;
    strnew=str.slice(0,lim);
    console.log(strnew);
    document.getElementById("Result").innerHTML="Truncated string i    "+strnew;

}