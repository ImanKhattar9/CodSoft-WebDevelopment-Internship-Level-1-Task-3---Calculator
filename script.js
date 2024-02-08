let input = document.getElementById('inputresult');
let button = document.querySelectorAll('button');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');
let string = "";
let arr = Array.from(button);
arr.forEach(button=> {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }
      else {
        string += e.target.innerHTML;
        input.value = string ;
      }
    })
})
toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}