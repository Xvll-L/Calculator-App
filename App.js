// what will be displayed to the user
const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")



// This will loop all the buttions but not the operate
for(let i = 0; i < buttons.length;i++){

    buttons[i].addEventListener("click", 
    function(e){ 
       let  values =  e.currentTarget.value
        calulator(values)
       
        
    })

} 

const operates = document.querySelectorAll(".operates-btns")

operates.forEach(btns => {
   btns.addEventListener("click",function(e){
    opes = e.currentTarget.value
    clear(opes)
    calulator(undefined, opes)
   })
});

// get user inputs 
// trim user input after they press add, divide subtract or multiply
// store the trimmed data as value 2
//???
//Concatenating numbers
let secondValue
let numberValues = " ";
function calulator(values){

    //object to store first and second inputs
    let cal = {
        value1: 1,
        value2: 1
    }
   
    //disable button when it overflow
  /* if (DisplayBottom.textContent.length === 10)
    {
        for(let i = 0; i < buttons.length;i++){
            buttons[i].setAttribute('disabled', true)
        }
        DisplayTop.textContent = "Buttons disabled"
    }*/

    
    let toint = parseInt(values)
    if(Number.isInteger(toint)){
    
        cal.value1 = parseInt(DisplayBottom.textContent += toint + "")
        
        
        
    //cal.value1[numberValues] 
       
        
    }
    
     console.log(cal)
    
    
 
    secondValue = DisplayTop.textContent
    test2 = parseInt(secondValue)
    cal.value2[test2]
  

    

    
    
    
    //DisplayBottom.textContent = DisplayBottom.textContent + values + "";
    if (values === "clear"){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = ""
        
        cal.value1[0]
        cal.value2[0]
    }
<<<<<<< HEAD
    
    

   
    

   if(values === "+" ){
    DisplayTop.textContent = `${toint} + `
    DisplayBottom.textContent = "0"
>>>>>>> parent of 351cf81 (bug - operators and button event need separation)
    numberValues = " "  
       
        
   
}
function operate(value1, value2, operates){
    
    if (value1 =! null){
        
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

function clear(values){
    
    if(values === "clear" ){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = ""
    } 
    return 0
}