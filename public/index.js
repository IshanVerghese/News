const companies = ["MHI","Spirit","Huntsman","Mitie",
"Owens Corning","Olympus", "Kennametal","US Steel","Nissan","Honda","Driv","Honeywell","Schneider","Yokogawa","Otis","Kone","Carrier","ABB","Aptiv","SPX", "Konica"];

const gecomp = ["GE Aviation", "GE Digital", "GE Healthcare", "GE Power", "GE Renewables", "Wabtec", "Baker Hughes", "Cytiva"];

getGCNews();
function getGCNews(){
for(let i=0; i<companies.length; i++){
  
   var content = { company : companies[i] };
   let options = {method: 'POST', 
                  headers: {'Content-Type': 'application/json'}, 
                  body: JSON.stringify(content)};
   fetch('/gccomp', options)
   .then( response => {
      return response.json();
   })
   .then((user) => {
            for(let j =0; j < user.news.length; j++){  
         var newsContent =  document.createElement('p');
         newsContent.innerText = user.news[j];
         document.getElementById(companies[i]).appendChild(newsContent);   
         
   }}); 
 
};
}
getGENews();
function getGENews(){
for(let i=0; i<gecomp.length; i++){
   var content = { company : gecomp[i] };
   let options = {method: 'POST', 
                  headers: {'Content-Type': 'application/json'}, 
                  body: JSON.stringify(content)};
   fetch('/gecomp', options)
   .then( response => {
      return response.json();
   })
   .then((user) => {
      for(let j =0; j < user.news.length; j++){
         var newsContent =  document.createElement('p');  
         newsContent.innerText = user.news[j];
         document.getElementById(gecomp[i]).appendChild(newsContent);   
         
   }}); 
 
};
}


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("all");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
};

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
document.addEventListener("DOMContentLoaded", function() {
// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterSelection("all");
})