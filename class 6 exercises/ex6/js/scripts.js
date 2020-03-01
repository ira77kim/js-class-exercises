

//6. create a table and paint alternative colors:
/*
<table>
<tr>
  <td>Cell 1:1</td>
  <td>Cell 2:1</td>
  <td>Cell 3:1</td>
  <td>Cell 4:1</td>
  <td>Cell 5:1</td>
</tr>
<tr>
  <td>Cell 1:2</td>
  <td>Cell 2:2</td>
  <td>Cell 3:2</td>
  <td>Cell 4:2</td>
  <td>Cell 5:2</td>
</tr>
<tr>
  <td>Cell 1:3</td>
  <td>Cell 2:3</td>
  <td>Cell 3:3</td>
  <td>Cell 4:3</td>
  <td>Cell 5:3</td>
</tr>
<tr>
  <td>Cell 1:4</td>
  <td>Cell 2:4</td>
  <td>Cell 3:4</td>
  <td>Cell 4:4</td>
  <td>Cell 5:4</td>
</tr>
<tr>
  <td>Cell 1:5</td>
  <td>Cell 2:5</td>
  <td>Cell 3:5</td>
  <td>Cell 4:5</td>
  <td>Cell 5:5</td>
</tr>
</table>
*/
let r = document.getElementsByTagName('tr');

console.log(r);
//r.style.backgroundColor="Yellow";
console.log(r[0].cells[2]);

for(let i=0;i<r.length;i++){

  if(i%2==0){
    r[i].style.backgroundColor="yellow";
  }
  else{
    r[i].style.backgroundColor="pink";
  }
}