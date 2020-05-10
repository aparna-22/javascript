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
function sum_of_squares(){
    var a=0;
    for (var i = 0; i < array.length; i++) 
    {
      a+=array[i]*array[i];

    }
    alert('sum of squares is '+a) ;





}