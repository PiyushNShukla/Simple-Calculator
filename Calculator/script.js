let input=document.getElementById('input-box');
let button=document.querySelectorAll('button');
let arr=Array.from(button)
let string=""
function disable(){
    document.onkeydown=function (e){
        return false;
    }
}
input.addEventListener('click',disable);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.textContent=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.textContent=='DEL'){
            let len=string.length;
            string=string.substring(0,len-1);
            input.value=string;
        }
        else if(e.target.textContent=='='){
            string=eval(string);
            input.value=string;
        }
        else{
            string+=e.target.textContent;
            input.value=string;
        }
    })
})


