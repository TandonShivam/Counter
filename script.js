const counterValue=document.querySelector('#counter')

const decreament=()=>{
value=parseInt(counterValue.innerText);
value=value-1;
counterValue.innerText=value;
}

const increament=()=>{
    value=parseInt(counterValue.innerText);
    value=value+1;
    counterValue.innerText=value;
}