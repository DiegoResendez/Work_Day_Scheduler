


const timeDisplayElem = document.getElementById("timeDisplay");
const textInput = document.getElementById("textInput");
const timeStamp = document.getElementById("timeStamp");
const userInput = document.getElementById("eventID3");

const button8AM = document.getElementById("8AMsave-btn");
const button9AM = document.getElementById("9AMsave-btn");
const button10AM = document.getElementById("10AMsave-btn");
const button11AM = document.getElementById("11AMsave-btn");
const button12PM = document.getElementById("12PMsave-btn");
const button1PM = document.getElementById("1PMsave-btn");
const button2PM = document.getElementById("2PMsave-btn");
const button3PM = document.getElementById("3PMsave-btn");
const button4PM = document.getElementById("4PMsave-btn");
const button5PM = document.getElementById("5PMsave-btn");
const button6PM = document.getElementById("6PMsave-btn");

const textInput8AM = document.getElementById("textInput8AM");
const textInput9AM = document.getElementById("textInput9AM");
const textInput10AM = document.getElementById("textInput10AM");
const textInput11AM = document.getElementById("textInput11AM");
const textInput12PM = document.getElementById("textInput12PM");
const textInput1PM = document.getElementById("textInput1PM");
const textInput2PM = document.getElementById("textInput2PM");
const textInput3PM = document.getElementById("textInput3PM");
const textInput4PM = document.getElementById("textInput4PM");
const textInput5PM = document.getElementById("textInput5PM");
const textInput6PM = document.getElementById("textInput6PM");

button8AM.addEventListener("click", saveActivity);
button9AM.addEventListener("click", saveActivity);
button10AM.addEventListener("click", saveActivity);
button11AM.addEventListener("click", saveActivity);
button12PM.addEventListener("click", saveActivity);
button1PM.addEventListener("click", saveActivity);
button2PM.addEventListener("click", saveActivity);
button3PM.addEventListener("click", saveActivity);
button4PM.addEventListener("click", saveActivity);
button5PM.addEventListener("click", saveActivity);
button6PM.addEventListener("click", saveActivity);

// let eventSpan11 = button6PMElement;
// let eventSpan10 = button5PMElement;
// let eventSpan9 = button4PMElement;
// let eventSpan8 = button3PMElement;
// let eventSpan7 = button2PMElement;
// let eventSpan6 = button1PMElement;
// let eventSpan5 = button12PMElement;
// let eventSpan4 = button11AMElement;
// let eventSpan3 = button10AMElement;
// let eventSpan2 = button9AMElement;
// let eventSpan1 = button8AMElement;

// let eventSpanForLoop = [eventSpan1, eventSpan2, eventSpan3, eventSpan4, eventSpan5, eventSpan6, eventSpan7, 
//                         eventSpan8, eventSpan9, eventSpan10,eventSpan11]

let textInputs = [textInput6PM, textInput5PM, textInput4PM, textInput3PM, textInput2PM, textInput1PM, textInput12PM,
                    textInput11AM, textInput10AM, textInput9AM, textInput8AM]


let buttonElements = [button6PM, button5PM, button4PM, button3PM, button2PM, button1PM, button12PM,
                        button11AM, button10AM, button9AM, button8AM]
// let time = timeStamp;
// let textInput;



// console.log($(this).siblings());
// jquery selector this .parent
// save to localStorage
// this.siblings jquery selector
function saveActivity(){
    event.preventDefault();
    let calendar = {};
    
    for(i = 0; i < buttonElements.length; i++){
            let buttonValue = buttonElements[i].value;
            let userInput = textInputs[i].value;   
            calendar[buttonValue] = userInput
        }
        localStorage.setItem("calendarTimes", JSON.stringify(calendar));
}




// check localStorage get function for values.  for loop for data to repopulate calendar.


// function hourUpdater(){
    // get value of 
// }

// function setPastPresentFuture(){
if(time <=
// }




// function setThingToDo() {    
    // }
    
    // function setButtonElement(){
    //     for(i = 0; i< buttonElements.length; i++){
    //             let buttonElements;
    //         let userInput = [i];

    //         console.log(userInput);
    //     }
    // }
        //     for(i = 0; i < eventSpanForLoop.length; i++){
        // let activity = [i];
        // console.log(i);


// document.getElementById('8AMsave-btn').addEventListener("click", saveActivity); 


// let todos = [];

// function saveToDo = (ev)=>{
//     ev.preventDefault();
//     let todo = {
//         id: Date.now(),
//         activity: document.getElementById("textInput").textContent
//     } 
//     console.log(textContent)
//     todos.push(todo);
    
//     //for display purposes only
//     console.warn('added', {todos});
//     let pre = document.querySelector('#save-btn')
// };

// function saveTextInput(){
    
//     function saveToDo(){
        
//     }
    
//     console.log("saveTextInput")
    
    //save to local storage
//     localStorage.setItem("#textInput", JSON.stringify(todos));
    
// }
// document.addEventListener('DOMContentLoaded', ()=>{
    
    
    
    // function setBackgroundColor(){
    // }console.log("save click")


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
      
// 