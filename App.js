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
       
      currentNum = currentNum + values + ""
      console.log(currentNum)
        
    
       
        
    })


} 

 operates.forEach(btns => {
        btns.addEventListener("click",function(e){
            
            //this will store the last value before operator object chnage
            cal.lastOperator = cal.operator

            opes = e.currentTarget.value
            clear(opes)
             operate()
            cal.operator = opes
           
            cal.secondValue = cal.results
          

        })
 });


console.log(cal)

function operate(){
    
  if ()
    
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
    DisplayTop.textContent = cal.results
    console.log(cal.results) 
}
