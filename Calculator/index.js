const display = document.querySelector('input')
const numbtn = document.querySelectorAll('.num')
const opbtn = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const result = document.querySelector('.result')





numbtn.forEach(btn=>btn.addEventListener(
"click",function(){
    const y = btn.textContent

    display.value = display.value + y
   
    
}
))

opbtn.forEach(btn=>btn.addEventListener(
"click",function(){
    const y = btn.textContent
   
    display.value = display.value + y
   
    
}
))

clear.addEventListener("click",()=>{
    
    display.value = ''

})

result.addEventListener("click",()=>{
    display.value = eval(display.value)
})