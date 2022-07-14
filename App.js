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
        
        values =  e.currentTarget.value
        
        calulator(values)
       ///console.log(values)
    
    })
} 
//DisplayBottom.textContent = 
 

/*buttons.addEventListener("click", 
function(){

})*/

function add(value){
  
    test = parseInt(secondValue)
    console.log(secondValue)
       return value + secondValue 
   
    
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


// get user inputs 
// trim user input after they press add, divide subtract or multiply
// store the trimmed data as value 2
//???
//Concatenating numbers
let secondValue
let numberValues = " "
function calulator(values){
    //console.log( secondValue)
    let cal = {
        
    }

    // disable button when it overflow
   /* if (DisplayBottom.textContent.length === 10)
    {
        for(let i = 0; i < buttons.length;i++){
            buttons[i].setAttribute('disabled', true)
        }
    }*/

    
    
    numberValues = numberValues + values + ""  
    secondValue = (DisplayTop.textContent)
    cal.value2 = secondValue
    console.log(cal) 
    
    DisplayBottom.textContent = numberValues
    //DisplayBottom.textContent = DisplayBottom.textContent + values + "";
    if (values === "clear"){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = "0"
        numberValues= " "
    }

   if(values === "+" ){
        
        let  addvalues = numberValues.slice(1, numberValues.length)
        let toint = parseInt(addvalues)
        add(toint)
        cal.value1 = toint
        
        cal.value2
        //console.log(addvalues)
        DisplayTop.textContent = toint
        DisplayBottom.textContent = "0"
        numberValues = " "
    }

}

