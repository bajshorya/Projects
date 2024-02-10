document.addEventListener('DOMContentLoaded',function(){
    const input=document.querySelector(".input-numbers");
    const buttons=document.querySelectorAll(".btn");
    const result = document.querySelector('.result p');

    let currentNumber='';
    let previousNumber='';
    let currentOperator='';

    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
            const value=button.textContent;

            if(!isNaN(value) || value==='.'){
                currentNumber+=value;
                input.value=currentNumber;
            }else if(value==='+' || value==='-'){
                currentOperator=value;
                previousNumber=currentNumber;
                currentNumber='';
            }else if(value==='='){
                const num1=parseFloat(previousNumber);
                const num2=parseFloat(currentNumber);

                if(currentOperator==='+'){
                    result.textContent=num1+num2;
                }else if (currentOperator === '-') {
                    result.textContent = num1 - num2;
                } else if (currentOperator === '*') {
                    result.textContent = num1 * num2;
                } else if (currentOperator === '/') {
                    result.textContent = num1 / num2;
                }
                currentNumber = '';
                previousNumber = '';
                currentOperator = '';

            }
        });
    });
});
