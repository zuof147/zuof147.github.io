//set the date
const newDate = new Date();
 const currentDate = {
  year: newDate.getFullYear(),
  month: newDate.getMonth() + 1,
  date: newDate.getDate(),
};
const yearContainer = document.querySelector("#year");
const monthContainer = document.querySelector("#month");
const dateContainer = document.querySelector("#date");

yearContainer.innerHTML =  currentDate.year + "/";
monthContainer.innerHTML =  currentDate.month +"/";
dateContainer.innerHTML =  currentDate.date;

//change the background color by hours in a day
 var now = new Date();
    var hours = now.getHours();
    var ft = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    if (5 <= hours && hours < 8) {//Morning
        document.write('<body style="background: #F3904F;');
        var type = "Morning";
    }
    if (8 <= hours && hours < 17) {//Day
        var type = "Daytime";
    }
    if (17 <= hours && hours < 19) {//Evening
        document.write('<body style="background: #355C7D; background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);\n color: white">');
        var type = "Evening";
    }
    if (19 <= hours && hours < 5) {//Night
        document.write('<body style="background: #0f2027; background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); color : white">');
        var type = "Nighttime";
    }
    document.getElementById("time").innerHTML = `The time is ${ft}`;

//change the bg color by hours
function updateBackground() {
    var 
      hr = (new Date()).getHours(),
      body = document.body,
      bstyle = body.style,    
      hello = document.querySelector(".hello");    
    if (hr < 10) {
      bstyle.backgroundColor = "#FAF0D7";
      bstyle.color = "black";
      hello.innerText = "It's morning. You can have a cup of coffee.";
    } else if (hr < 20) {
      bstyle.backgroundColor = "#F4BFBF";
      bstyle.color = "black";
      hello.innerText ="It's noon. You can have some afternoon tea.";
    } else {
      bstyle.backgroundColor = "#8CC0DE";
      bstyle.color = "black";
      hello.innerText = "It's night. Better finish your work and go to bed early.";
    } 
  }
  
  setInterval(updateBackground, 1000 * 60);
  updateBackground();

  // change the text with days in a week
  window.onload=function(){
    var d = new Date().getDay();
    var titles = ['Today is Monday!!', 'How is your day? Today is Tuedday!!', 'Almost half of the week has passed! Today is Wednesday!!', 'Today is Tuesday!!', 'The weekend is getting closer! Today is Friday!!', 'Enjoy it! Today is Saturday.', 'Enjoy it! Today is a beautiful Sunday.'];
    document.getElementById("title").innerHTML = titles[d-1];}

//change the text with seconds
var myDate = new Date();   if ( 
    myDate.getSeconds() < 5 )  { 
      document.getElementById('greeting').innerHTML ="Hi! 5 seconds have passed."; } 
    else if ( myDate.getSeconds() >= 5 && myDate.getSeconds() <= 10 ) 
        {     document.getElementById('greeting').innerHTML ="Hi! 10 seconds have passed"; } 
    else if ( myDate.getSeconds() > 10 && myDate.getSeconds() <= 15 )
         {     document.getElementById('greeting').innerHTML= "Hi! 15 seconds have passed"; } 
         else if ( myDate.getSeconds() > 15 && myDate.getSeconds() <= 20 )
         {     document.getElementById('greeting').innerHTML= "Hi! 20 seconds have passed"; } 
         else if ( myDate.getSeconds() > 20 && myDate.getSeconds() <= 25 )
         {     document.getElementById('greeting').innerHTML= "Hi! 25 seconds have passed"; } 
         else if ( myDate.getSeconds() > 25 && myDate.getSeconds() <= 30 )
         {     document.getElementById('greeting').innerHTML= "Hi! 30 seconds have passed"; } 
         else if ( myDate.getSeconds() > 30 && myDate.getSeconds() <= 35 )
         {     document.getElementById('greeting').innerHTML= "Hi! 35 seconds have passed"; } 
         else if ( myDate.getSeconds() > 35 && myDate.getSeconds() <= 40 )
         {     document.getElementById('greeting').innerHTML= "Hi! 40 seconds have passed"; } 
         else if ( myDate.getSeconds() > 40 && myDate.getSeconds() <= 45 )
         {     document.getElementById('greeting').innerHTML= "Hi! 45 seconds have passed"; } 
         else if ( myDate.getSeconds() > 45 && myDate.getSeconds() <= 50 )
         {     document.getElementById('greeting').innerHTML= "Hi! 50 seconds have passed"; } 
         else if ( myDate.getSeconds() > 50 && myDate.getSeconds() <= 55 )
         {     document.getElementById('greeting').innerHTML= "Hi! 55 seconds have passed"; } 
         else if ( myDate.getSeconds() > 55 && myDate.getSeconds() <= 60 )
         {     document.getElementById('greeting').innerHTML= "Hi! one minite has passed"; } 
     else 
         {     document.getElementById('greeting').innerHTML="I'm not sure what time it is!"; }