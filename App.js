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
    calulator(undefined, opes)
   })
});

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
let numberValues;
function calulator(values){

    //object to store first and second inputs
    let cal = {
        value1: 1,
        value2: 1
    }
   
    //disable button when it overflow
   if (DisplayBottom.textContent.length === 10)
    {
        for(let i = 0; i < buttons.length;i++){
            buttons[i].setAttribute('disabled', true)
        }
        DisplayTop.textContent = "Buttons disabled"
    }

    
    let toint = parseInt(values)
    if(Number.isInteger(toint)){
        
        DisplayBottom.textContent += toint + ""
        cal.value1[toint] 
       
    }
    
    
    
    
 
    secondValue = DisplayTop.textContent
    test2 = parseInt(secondValue)
    cal.value2[test2]
  

    

    
    
    
    //DisplayBottom.textContent = DisplayBottom.textContent + values + "";
    if (values === "clear"){
        DisplayTop.textContent = " "
        DisplayBottom.textContent = "0"
        numberValues= " "
        cal.value1[0]
        cal.value2[0]
    }
    

   
    
    numberValues = " "  
       
        
   
}
function operate(value1, value2, operates){
    
    
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
