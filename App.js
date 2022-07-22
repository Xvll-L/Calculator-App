// what will be displayed to the user
const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

const operates = document.querySelectorAll(".operates-btns")



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
       
      conVal = DisplayBottom.textContent += values + ""
        
       cal.firstValues = parseInt(conVal)
        operate()
        
    })


} 

 operates.forEach(btns => {
        btns.addEventListener("click",function(e){
            //this will store the last value before operator object chnage
            cal.lastOperator = cal.operator

            opes = e.currentTarget.value
            clear(opes)
            
            cal.operator = opes
           
            cal.secondValue = parseInt(DisplayTop.textContent)
            if(opes === "+"){
                DisplayTop.textContent = `${cal.firstValues} ${opes}`
                DisplayBottom.textContent = ""
                add()
                
            } else if(opes === "-"){
                DisplayTop.textContent = `${cal.firstValues} ${opes}`
                DisplayBottom.textContent = ""
              
            }

            
           
console.log(cal) 
        })
 });


console.log(cal)

function operate(){
    
    
 
    
}

function add(){
    if(cal.firstValues >= 0 || cal.firstValues <= 0  && cal.firstValues  >= 0  || cal.secondValue <= 0 &&  cal.operator === "+"){
      DisplayTop.textContent =(cal.firstValues + cal.secondValue)
    }

}


function multiply(value1,value2){
    return value2 * value1
}

function divide(value1,value2){
    return value2 / value1
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
