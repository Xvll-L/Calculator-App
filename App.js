// what will be displayed to the user 

const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

const operates = document.querySelectorAll(".operates-btns")


let currentNum = "";
//global variables
const cal = {
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
        cal.firstValues = numbers
         console.log(cal)
         
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


const equalsBtn = document.querySelector(".btn-equal")

 equalsBtn.addEventListener("click", function(){
    
 })



function operate(){
    
    if (cal.operator =! null){
        cal.secondValue = cal.firstValues
        
        currentNum = 0
        
       
    }
    
   
    
}

function Calculator(){

    if (cal.operator === "+"){
        cal.results = cal.firstValues + cal.secondValue
    }

}

function clear(values){
    
    if(values === "clear" ){
        cal.firstValues = null
        cal.secondValue = null
        cal.results = null
        cal.operator = null
        cal.lastOperator = null
        DisplayTop.textContent = "0"
        DisplayBottom.textContent =""
    } 
    return 0
}

function display(){
    if (cal.results != null){
        DisplayTop.textContent = cal.results
    } else{
        DisplayTop.textContent = cal.secondValue
    }
    

    DisplayBottom.textContent = cal.firstValues
    console.log(cal.results) 
}

