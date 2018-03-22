function loadJSON(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true)//true represents the asynchronus operation;
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var right=document.querySelector(".content");
function career(car){
  console.log(car.info);
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  h2.style.fontFamily="SkyFall Done";
  right.appendChild(h2);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info
  p.style.fontFamily="007 GoldenEye";
  right.appendChild(p);
}
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="Educational Qualification";
  h3.style.fontFamily="SkyFall Done"
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul=document.createElement("ul");
   ul.style.fontFamily="007 GoldenEye";
  right.appendChild(ul);
  for(var i=edu.length-1;i>=0;i--)
  {
    //console.log(edu[i].degree);
    var li=document.createElement("li");
    li.textContent=edu[i].degree;
    ul.appendChild(li);
    var p =document.createElement("p");
    p.textContent=edu[i].school;
    ul.appendChild(p);
     var ul1=document.createElement("ul");
     ul.appendChild(ul1);
     console.log(edu[i].data.length);
     for(var j=0;j<edu[i].data.length;j++)
     {
       var li1=document.createElement("li");
       ul1.appendChild(li1);
       li1.textContent=edu[i].data[j];
     }
  }
}
function skills(skill){
  var h3=document.createElement("h3");
  h3.style.fontFamily="SkyFall Done";
  right.appendChild(h3);
  h3.textContent="skills";
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var table=document.createElement("table");
  table.border="1";
  right.appendChild(table);
 let row="";
  for(var i=0;i<skill.length;i++)
  {
   row+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].info+"</td></tr>";
  }
  table.innerHTML=row;
}
