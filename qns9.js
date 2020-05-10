function pattern(){
    var txt="Javascript";
    var x;
    var out="";
    var final="";
    for(x of txt){
        out +=x;
        final +=out+"<br>";
    }
    document.getElementById("show").innerHTML=final;

}