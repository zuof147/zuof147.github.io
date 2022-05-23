// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//background image changing with keyup
function randomHero() {
    var heroPics = ['https://cdn.cnn.com/cnnnext/dam/assets/150306145642-beautiful-japan-kintetsu-beppu-ropeway-oita-super-169.jpg', 'https://c8.alamy.com/comp/MPK86B/beautiful-view-of-takeshita-street-on-a-nice-sunny-day-tokyo-japan-MPK86B.jpg', 'http://cdn.cnn.com/cnnnext/dam/assets/170814175458-china-beautiful-places--wuyuan---flickr---carlos-adampol-galindo.jpg', 'https://img.theculturetrip.com/wp-content/uploads/2017/12/25035487_10154901798570684_872700180_o.jpg', 'https://media.cntraveller.com/photos/611bed878cad268421c2d30c/16:9/w_2580,c_limit/16_most-instagrammable-places-in-paris-conde-nast-traveller-6nov17-mary-quincy.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Pudong%2C_Shangai.png/800px-Pudong%2C_Shangai.png', 'https://thumbs.dreamstime.com/b/sky-tree-branch-most-beautiful-view-seoul-tower-winter-korea-red-autumn-maple-leaves-namsan-mountain-south-127999578.jpg'];

    $('body').css({
        'background': 'url(' + heroPics[Math.floor(Math.random() * heroPics.length)] + ') no-repeat',
        'background-attachment': 'scroll',

        'background-size': 'cover'
    });
}

randomHero();

$('button').on('click', randomHero);