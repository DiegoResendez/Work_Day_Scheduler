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
    let btnFor = $(this).attr("for");
    let textArea = $('#' + btnFor); 
    console.log(textArea);
    let hour = textArea.data("hour"); 
    let index = hour - 9; 
    
    entries[index].text = textArea.val(); 
    
    let json = JSON.stringify(entries); 
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