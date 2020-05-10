

function findLarge()
{
    var num1;
    var num2;
    num1= document.getElementById("number1").value;
    num2= document.getElementById("number2").value;

    if(num1>num2)
    {
        alert(num1+"-is Larger");
    }
    else if(num2>num1)
    {
        alert(num2+"-is Larger");
    }
    else if(num2>num1 && num2>num1)
    {
        alert(num2+"is Larger");
    }

 }






