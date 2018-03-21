let input; 

function buttonClick(){
 input = document.getElementById("item").value;

let list = document.getElementById("todo");
let li = document.createElement('li');
 li.appendChild(document.createTextNode(input));
 list.appendChild(li);

}
