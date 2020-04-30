const timeDisplayElem = document.getElementById("timeDisplay");
const saveButton = document.getElementById("save-btn");
const textInput = document.getElementById("textInput");
const timeStamp = document.getElementById("timeStamp");
const userInput = document.getElementById("eventID3");
let button8AM = document.getElementById("8AMsave-btn")

// let eventSpan11 = 6:00 PM;
// let eventSpan10 = 5:00 PM;
// let eventSpan9 = 4:00 PM;
// let eventSpan8 = 3:00 PM;
// let eventSpan7 = 2:00 PM;
// let eventSpan6 = 1:00 PM;
// let eventSpan5 = 12:00 PM;
// let eventSpan4 = 11:00 AM;
// let eventSpan3 = 10:00 AM;
// let eventSpan2 = 9:00 AM;
// let eventSpan1 = 8:00 AM;

let time = timeStamp;
let textInput;
button8AM.addEventListener("click", saveTextInput);
// document.getElementById('btn').addEventListener("click", saveToDo); 

saveButton.addEventListener("click", );


function setBackgroundColor(){

    
}console.log("save click")



let todos = [];

function saveToDo = (ev)=>{
    ev.preventDefault();
    let todo = {
        id: Date.now(),
        activity: document.getElementById("textInput").textContent
                } 
                    console.log(textContent)
    todos.push(todo);

    //for display purposes only
    console.warn('added', {todos});
    let pre = document.querySelector('#save-btn')
};

function saveTextInput(){

    function saveToDo(){

    }

    console.log("saveTextInput")

    //save to local storage
    localStorage.setItem("#textInput", JSON.stringify(todos));

}
    // document.addEventListener('DOMContentLoaded', ()=>{





// saveButton.addEventListener("click", saveTextInput)


// let date = new Date();
// document.write(date);


// function saveTextInput(){
//     console.log("save click");

//     //add textInput to local storage and persist

// }


    // should add the input box after each time if possible

//     .addEventListener("click", function(event) {
//         event.preventDefault();
      
//         console.log(event);
      
// }



