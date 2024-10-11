
 const api = "https://habous-prayer-times-api.onrender.com/api/v1/prayer-times?cityId=58"

 //Hijri date
 async function hijriData(){
    try{
        const response = await fetch(api)
        const data = await response.json();

    const today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const todayString = today.toLocaleDateString('en-GB', options);

// Filter for today's data
const todayData = data.data.timings.find(timing => timing.date.readable === todayString);


if (todayData) {
console.log("Today's Prayer Timings:");
console.log(todayData);
let content = '';
     

content += todayData.date.hijri.day +" " +todayData.date.hijri.month +" "+todayData.date.hijri.year;
// insert content into h3#hijri
document.querySelector("#hijri").innerHTML = content; 


} else {
console.log("للاسف, لم نتمكن من الحصول على تاريخ اليوم");
}      
    }catch(e){
        console.log("Error:" ,e.message)
    }
}  
hijriData() 
//Date
async function toDayDate(){
const today = new Date();
const currentDateString = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

let content = '';
content += currentDateString;

// Insert into h3
document.querySelector("#toDayDate").innerHTML = content; 
}
toDayDate()

//Prayer times
 async function getData(){
        try{
            const response = await fetch(api)
            const data = await response.json();  
            
// Get today's date
const today = new Date();
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const todayString = today.toLocaleDateString('en-GB', options);
console.log(todayString)

// Filter for today's data
const todayData = data.data.timings.find(timing => timing.date.readable === todayString);


if (todayData) {
  console.log("Today's Prayer Timings:");
  console.log(todayData);
  let content = '';
         

content += '<tr>';
content += `<td >${todayData.date.hijri.day} / ${todayData.date.hijri.month} / ${todayData.date.hijri.year}</td>`;
content += `<td>${todayData.date.readable}</td>`;
content += `<td style="background-color:#ccccff ;">${todayData.prayers.fajr}</td>`;
content += `<td style="background-color: #ffffcc;">${todayData.prayers.sunrise}</td>`;
content += `<td style="background-color:#ffccff ;">${todayData.prayers.dhuhr}</td>`;
content += `<td style="background-color:#ccffff ;">${todayData.prayers.asr}</td>`;
content += `<td style="background-color: #ffc0cb;">${todayData.prayers.maghrib}</td>`;
content += `<td style="background-color:#d3d3d3 ;">${todayData.prayers.ishaa}</td>`;
content += '</tr>';

     // Insert into the table
document.querySelector("table tbody").innerHTML = content; 
} else {
  console.log("للاسف, لم نتمكن من الحصول على مواقيت الصلاة. ");
}      

        }catch(e){
            console.log("Error:" ,e.message)
        }
    }  
getData() 

