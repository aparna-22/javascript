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
 function test_frequent(){

    var mf = 1;
var m = 0;
var item;

for (var i = 0; i < array.length; i++) {
  for (var j = i; j < array.length; j++) {
    if (array[i] == array[j]) m++;
    if (mf < m) {
      mf = m;
      item = array[i];
    }
  }

  m = 0;
}

alert(item + " ( " + mf + " times ) ");

 }