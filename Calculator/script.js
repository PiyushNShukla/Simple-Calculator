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
            let x=document.getElementById("message")
            x.innerHTML=""
            x.style.color="white";
            try{
            string=eval(string);
            if(string==Infinity){
                string="";
                throw "Error:Division By 0";
            }
            input.value=string;
        }
            catch(err)
            {
                x.innerHTML=err+"!"
            }
            
        }
        else{
            string+=e.target.textContent;
            input.value=string;
        }
    })
})


