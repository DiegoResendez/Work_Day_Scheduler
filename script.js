


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

const eventID8AM = document.getElementById("eventID8AM");
const eventID9AM = document.getElementById("eventID9AM");
const eventID10AM = document.getElementById("eventID10AM");
const eventID11AM = document.getElementById("eventID11AM");
const eventID12PM = document.getElementById("eventID12PM");
const eventID1PM = document.getElementById("eventID1PM");
const eventID2PM = document.getElementById("eventID2PM");
const eventID3PM = document.getElementById("eventID3PM");
const eventID4PM = document.getElementById("eventID4PM");
const eventID5PM = document.getElementById("eventID5PM");
const eventID6PM = document.getElementById("eventID6PM");


button8AM.addEventListener("click", saveActivity);
// button9AM.addEventListener("click", saveActivity);
// button10AM.addEventListener("click", saveActivity);
// button11AM.addEventListener("click", saveActivity);
// button12PM.addEventListener("click", saveActivity);
// button1PM.addEventListener("click", saveActivity);
// button2PM.addEventListener("click", saveActivity);
// button3PM.addEventListener("click", saveActivity);
// button4PM.addEventListener("click", saveActivity);
// button5PM.addEventListener("click", saveActivity);
// button6PM.addEventListener("click", saveActivity);


let textInputs = [textInput6PM, textInput5PM, textInput4PM, textInput3PM, textInput2PM, textInput1PM, textInput12PM,
                    textInput11AM, textInput10AM, textInput9AM, textInput8AM]


let buttonElements = [button6PM, button5PM, button4PM, button3PM, button2PM, button1PM, button12PM,
                        button11AM, button10AM, button9AM, button8AM]

// let eventID = [eventID6PM, eventID5PM, eventID4PM, eventID3PM, eventID2PM, eventID1PM, eventID12PM,
//                         eventID11AM, eventID10AM, eventID9AM, eventID8AM]

// let hourNumber = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8]

// let eventID8AM =  8;
// let eventID9AM =  9;
// let eventID10AM = 10;
// let eventID11AM = 11;
// let eventID12PM = 12;
// let eventID1PM =  13;
// let eventID2PM =  14;
// let eventID3PM =  15;
// let eventID4PM =  16;
// let eventID5PM =  17;
// let eventID6PM =  18;


// let time = timeStamp;
// let textInput;

let hour = new Date();
document.getElementById("demo").innerHTML = hour.getHours();


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
        setHour();
        // setPastPresent();    
}

function setHour(){
    for(i = 0; i < hourNumber.length; i++){
    let v = eventID[i];
    let eventTime = eventID[i].value;
    // let hourNumber = hourNumber[i].value;
        console.log(eventTime);
        // console.log(hourNumber);
    }
}


// function setPastPresent(){
//  if(hour.value <= hourNumber){
//         let textInput.classList.add("past");
//      if(hour.value === hourNumber){
// ("#textInput8AM").classList.add(".future")
//   textInput.classList.add("present")
//      }   
//      else ()//do Nothing
//     });



// check localStorage get function for values.  for loop for data to repopulate calendar.


// function hourUpdater(){
    // get value of 
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