// what will be displayed to the user
const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

//disbale dot
const dot = document.querySelector(".btn-dot").disable = true
let test2 = []
for(let i = 0; i < buttons.length;i++){

    buttons[i].addEventListener("click", 
    function(e){ 
        
        values =  e.target.value
        
        calulator(values)
       
    
    })
} 
//DisplayBottom.textContent = 
 

/*buttons.addEventListener("click", 
function(){

})*/



function calulator(values){
    
    if values ===

}

function add(value,value2){
    return value + value2
}

function divide(value,value2){
    return value / value2
}

function subtract(value,value2){
    return value - value2
}

function multiply(value,value2){
    return value * value2
}
