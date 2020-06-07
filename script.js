$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

let currentHour = moment().format('H');
let storageKey = "entryArray";
let entries = [];
let storageObj = localStorage.getItem(storageKey);
let entriesExist = false;


if(localStorage.getItem(storageKey))
{
    entriesExist = true;
    entries = JSON.parse(storageObj);
    //console.log(entries);
}
else{
    entries = [];
    for(let i = 9; i < 18; i++)
    {
        let newEntry = {hour: i, text: ""};
        entries.push(newEntry);
    }
}

renderEntries();

$('textarea').each(function(){
    //console.log("inside each");
    let textArea = $(this);
    console.log(textArea);
    if(parseInt(textArea.attr("data-hour")) < parseInt(currentHour)){
        textArea.attr("class", "past");
        //console.log(this);
    }
    else if(parseInt(textArea.attr("data-hour")) === parseInt(currentHour)){
        textArea.attr("class", "present");
    }
    else if(parseInt(textArea.attr("data-hour")) > parseInt(currentHour)){
        textArea.attr("class", "future");
    }
});

$('button').on('click', function(){
    let btnFor = $(this).attr("for"); // get the 'for' value (html has for in the btn and same ID in the text area)
    let textArea = $('#' + btnFor); // basically, we're generating a string for the ID, ex #hour9
    console.log(textArea);
    let hour = textArea.data("hour"); // set the hour to the value held in the selected buttons related text area's data-hour field
    let index = hour - 9; // creating an index hour value - 9. ex. hour 9 - 9 = index of 0 into the entries array
    
    entries[index].text = textArea.val(); // set the value of the entry index array to the text within the text area
    
    let json = JSON.stringify(entries); // stringify the entire entries array
    localStorage.setItem(storageKey, json);
});

function renderEntries() {
    if(entriesExist){
        console.log("entries exist");
        entries.forEach(function(entry, index) {
            $('#hour' + entry.hour).text(entry.text);
        });
    }
}