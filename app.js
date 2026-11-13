// Paste your Formspree form URL between the quotes below (see launch guide).
var FORM_ENDPOINT="https://formspree.io/f/mvkagjeg";
var mb=document.getElementById("mb"),nl=document.getElementById("nl");
mb.onclick=function(){var o=nl.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
nl.onclick=function(){nl.classList.remove("open");mb.setAttribute("aria-expanded",false)};
var f=document.getElementById("f");
if(f){f.onsubmit=function(e){e.preventDefault();var ok=true,st=document.getElementById("ok");
function show(t){st.textContent=t;st.style.display="block"}
f.querySelectorAll("[required]").forEach(function(i){var m=i.parentNode.querySelector(".err"),bad=!i.value.trim()||(i.type==="email"&&!/^\S+@\S+\.\S+$/.test(i.value));
m.textContent=bad?"Please enter a valid "+i.previousElementSibling.textContent.toLowerCase()+".":"";if(bad)ok=false});
if(!ok){st.style.display="none";return}
if(document.getElementById("hp").value)return;
if(!FORM_ENDPOINT){show("Sorry, this form isn\u2019t switched on yet. Please call 07933 225525.");return}
var g=function(i){return document.getElementById(i).value};
var d={name:g("name"),business:g("biz"),email:g("em"),phone:g("ph"),type:g("ty"),challenge:g("ch"),message:g("ms")};
fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(d)})
.then(function(r){if(!r.ok)throw 0;f.reset();show("Thank you. We\u2019ll be in touch shortly.")})
.catch(function(){show("Sorry, something went wrong. Please call 07933 225525.")})}}
try{var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)})}catch(err){document.querySelectorAll(".rv").forEach(function(el){el.classList.add("in")})}
