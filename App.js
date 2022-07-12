// what will be displayed to the user
const DisplayTop = document.querySelector(".topValue-display")
const DisplayBottom = document.querySelector(".bottomValue-display")

const buttons = document.querySelectorAll(".buttons")

//disbale dot
const dot = document.querySelector(".btn-dot").disable = true
test2 = []
for(let i = 0; i < buttons.length;i++){
    //disbale dot
    const dot = document.querySelector(".btn-dot").disable = true
    buttons[i].addEventListener("click", 
    function(e){ 
        //disbale dot
        const dot = document.querySelector(".btn-dot").disable = true
        test =  e.target.value
        
        test2.push(test)
       
       
    
    })
} 
//DisplayBottom.textContent = 
test2.array.forEach(element => {
    
    console.log(element)
});
 

/*buttons.addEventListener("click", 
function(){

})*/



function calulator(values){

}

function add(value1,value2){
    return value1 + value2
}