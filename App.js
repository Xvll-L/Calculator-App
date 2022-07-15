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
        
       let  values =  e.currentTarget.value
        
        calulator(values)
       
        
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
let secondValue
let numberValues = " "
function calulator(values){

    
    //object to store first and second inputs
    let cal = {
        value1:1,
        value2:1
    }
   
    //disable button when it overflow
   if (DisplayBottom.textContent.length === 10)
    {
        for(let i = 0; i < buttons.length;i++){
            buttons[i].setAttribute('disabled', true)
        }
        DisplayTop.textContent = "Buttons disabled"
    }

    let  firstValues = numberValues.slice(1, numberValues.length)
    let toint = parseInt(firstValues)
    console.log(toint)
    cal.value1 = toint
    
    
    numberValues = numberValues + values + ""  
    secondValue = (DisplayTop.textContent)
    test2 = parseInt(secondValue)
    cal.value2 = test2
    console.log(cal) 

    

    
    
    DisplayBottom.textContent = numberValues
    //DisplayBottom.textContent = DisplayBottom.textContent + values + "";
    if (values === "clear"){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = "0"
        numberValues= " "
        cal.value2 = " "
    }
    

   if(values === "+"  ){
    DisplayTop.textContent = `${toint} + `
    DisplayBottom.textContent = "0"
    numberValues = " "  
       
           
            if(add(cal.value1,cal.value2) >=0 || add(cal.value1,cal.value2) <= 0){
                DisplayTop.textContent = `${add(cal.value1,cal.value2)} + `
            }
    
    } else if (values === "-" ) {
        DisplayTop.textContent = `${toint} - `
        DisplayBottom.textContent = "0"
        numberValues = " "  
        
        if(subtract(cal.value1,cal.value2) >= 0 || subtract(cal.value1,cal.value2) <= 0){
            DisplayTop.textContent = `${subtract(cal.value1,cal.value2)} - `
        }
    } else if (values === "*"){
        DisplayTop.textContent = `${toint} * `
        DisplayBottom.textContent = "0"
        numberValues = " "  
        if(multiply(cal.value1,cal.value2) >= 0 || multiply(cal.value1,cal.value2) <= 0){
            DisplayTop.textContent = `${multiply(cal.value1,cal.value2)} * `
        }
    } else if(values === "/"){
        DisplayTop.textContent = `${toint} / `
        DisplayBottom.textContent = "0"
        numberValues = " "  
        if(divide(cal.value1,cal.value2) >= 0 || multdivideply(cal.value1,cal.value2) <= 0){
            DisplayTop.textContent = `${divide(cal.value1,cal.value2)} / `
        }
    }
       
   
}

function add(value1,value2){
    return value1+value2
}

function subtract(value1,value2){
    return value2-value1
}

function multiply(value1,value2){
    return value2 * value1
}

function divide(value1,value2){
    return value2 / value1
}
