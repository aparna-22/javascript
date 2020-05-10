var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 //alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";

   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

   function test_prime()
{

    var i,flag=0,number;
    number = array[0];

    for(i=2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = 1;
            break;
        }
    }
    if(flag == 0)
    {
        alert(number+"-The number is Prime");
    }
    else
    {
      alert(number+"-The number is not Prime");
    }
}





