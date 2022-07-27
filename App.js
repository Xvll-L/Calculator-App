// what will be displayed to the user 

const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

const operates = document.querySelectorAll(".operates-btns")


let currentNum = "";
//global variables
const cal = {
    numbers : null,
    firstValues: null,
    secondValue: null,
    results: null,
    operator: null,
    lastOperator: null
}


// This will loop all the buttions but not the operate
for(let i = 0; i < buttons.length;i++){

    buttons[i].addEventListener("click", 
    function(e){ 
        
       let  values =  e.currentTarget.value
       
        currentNum = currentNum = currentNum + values + ""
        let numbers = Number(currentNum) 
        cal.numbers = numbers
        console.log(cal)
        if(cal.operator === "+" || cal.operator === "-" || cal.operator === "/" || cal.operator === "*") {
    
            if (cal.lastOperator != null ){
                cal.firstValues = cal.results
            }
            
        cal.secondValue = cal.numbers
        
        } else {
            cal.firstValues = cal.numbers
        }
       
    Calculator()
    display()
      
    })


} 

 operates.forEach(btns => {
        btns.addEventListener("click",function(e){
           
            //this will store the last value before operator object chnage
            cal.lastOperator = cal.operator
           
            opes = e.currentTarget.value
            clear(opes)
            
            cal.operator = opes
            
           console.log(cal.operator)

           // cal.secondValue = cal.results
  operate()        
  display()
  
  
        })
 });

// event to show results the = button is clicked
const equalsBtn = document.querySelector(".btn-equal")

 equalsBtn.addEventListener("click", function(){
    if (cal.results === null){
        console.log( "true")  } else {
            DisplayTop.textContent = cal.results
        DisplayBottom.textContent= ""
       
        
        }

 })


// if the user press one of the operator. The current set of number will be stored in the secont value
function operate(){

  currentNum = 0
 

 
    
    Calculator()
    
}
// if the past operator has value. store the resluts in secont value
function Calculator(){




    if( cal.secondValue != null){

   
        
       
        
        if (cal.operator === "+"){
            cal.results = cal.firstValues + cal.secondValue
        } else if (cal.operator === "-"){
            cal.results = cal.firstValues - cal.secondValue
        } else if (cal.operator === "/"){
            cal.results = cal.firstValues / cal.secondValue
        } else if (cal.operator === "*"){
            cal.results = cal.firstValues * cal.secondValue
        } else {
            return
        }
    }


}
// clearl all resluts
function clear(values){
    
    if(values === "clear" ){
        cal.numbers = null
        cal.firstValues = null
        cal.secondValue = null
        cal.results = null
        cal.operator = null
        cal.lastOperator = null
        DisplayTop.textContent = "0"
        DisplayBottom.textContent =""
        currentNum = 0
    } 
   
}
// this will display the results
function display(){
   
        


     
    

    DisplayBottom.textContent = `${cal.firstValues} `
    console.log(cal.results) 

    
        DisplayTop.textContent = cal.results
        

     
        DisplayTop.textContent = `${cal.secondValue} ${cal.operator}`
    

       
     
}

