import"./vanilla-tilt-ba71c6c6.js";let i=new Date("April 20, 2024 9:00:00").getTime();setInterval(m,1e3);function m(){let e=new Date().getTime(),t=i-e;if(t>0){let n=Math.floor(t/864e5);n<10&&(n="0"+n);let o=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));o<10&&(o="0"+o);let c=Math.floor(t%(1e3*60*60)/(1e3*60));c<10&&(c="0"+c);let s=Math.floor(t%(1e3*60)/1e3);s<10&&(s="0"+s);let l=`${n} : ${o} : ${c} : ${s}`;document.querySelector(".countdown").innerText=l}}document.getElementById("myForm").addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.target),n={};t.forEach((c,s)=>{n[s]=c}),(await fetch("http://127.0.0.1:5000/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).ok?(document.getElementById("successButton").click(),console.log("Form data sent to webhook successfully.")):console.error("Failed to send form data to webhook.")});const r=document.getElementById("blur-div-1"),d=document.getElementById("Welcome");document.addEventListener("mousemove",e=>{const t=d.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;r.style.transform=`translate(${n}px, ${o}px)`});const a=document.getElementById("blur-div-2"),u=document.getElementById("myForm");document.addEventListener("mousemove",e=>{const t=u.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;a.style.transform=`translate(${n}px, ${o}px)`});const f=document.getElementById("blur-div-3"),y=document.getElementById("map");document.addEventListener("mousemove",e=>{const t=y.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;f.style.transform=`translate(${n}px, ${o}px)`});