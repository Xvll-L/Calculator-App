// what will be displayed to the user
const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

const operates = document.querySelectorAll(".operates-btns")



//global variables
const cal = {
    firstValues: 0,
    secondValue: 0,
    results: null,
    operator: null
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
            opes = e.currentTarget.value
            clear(opes)
           
console.log(cal) 
        })
 });




function operate(){
     DisplayTop.textContent = cal.firstValues
 
    
}

function add(value1,value2){
    return value1+value2
}


function multiply(value1,value2){
    return value2 * value1
}

function divide(value1,value2){
    return value2 / value1
}

function clear(values){
    
    if(values === "clear" ){
        cal.firstValues = 0
        cal.secondValue = 0,
        cal.results = null,
        cal.operator = null
    } 
    return 0
}
