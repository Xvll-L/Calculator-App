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
       ///console.log(values)
    
    })
} 
//DisplayBottom.textContent = 
 

/*buttons.addEventListener("click", 
function(){

})*/


// get user inputs 
// trim user input after they press add, divide subtract or multiply
// store the trimmed data as value 2
//???
//Concatenating numbers
let oldValue =  " "
let numberValues = " "
function calulator(values){
    console.log(typeof values)
    let cal = {
        
    }

    // disable button when it overflow
   /* if (DisplayBottom.textContent.length === 10)
    {
        for(let i = 0; i < buttons.length;i++){
            buttons[i].setAttribute('disabled', true)
        }
    }*/

    

    numberValues = numberValues + values + " "  
    ///console.log(cal) 
    DisplayBottom.textContent = numberValues
    //DisplayBottom.textContent = DisplayBottom.textContent + values + "";
    if (values === "clear"){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = " "
        numberValues= " "
    }

   /* if(values === "+" ){
        
        let  addvalues = numberValues.slice(0, numberValues.length)
        DisplayBottom.textContent = " "
        numberValues = " "
        ///console.log(addvalues)
        ///console.log(oldValue)
        oldValue =  addvalues
        
    }*/

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
