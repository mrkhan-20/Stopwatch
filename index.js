let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let lap=document.getElementById("lap");
let ul=document.getElementById("ul");


let spanstart=document.getElementById("spanstart");
let spanlap=document.getElementById("spanlap");
let spanstop=document.getElementById("spanstop");
let spanreset=document.getElementById("spanreset");

let min=document.getElementById("min");
let sec=document.getElementById("sec");
let milisec=document.getElementById("milisec");
let secid,miliid,minid;
let seccount=0,miliseccount=0,mincount=0,lapcount=0,startcount=0;

start.addEventListener("click" ,()=>{
    spanlap.setAttribute("style","");
    spanreset.setAttribute("style","display:none");
    miliid=setInterval(function(){
        miliseccount+=1;
        if(miliseccount==100){
            miliseccount=0;
            seccount++;
            if(seccount==60){
                seccount=0;
                mincount++;
            }
        }
        let m = mincount < 10 ? "0" + mincount : mincount;
        let s = seccount < 10 ? "0" + seccount : seccount;
        let ms = miliseccount < 10 ? "0" + miliseccount : miliseccount;
        min.innerHTML=m+" : ";
        sec.innerHTML=s+" : ";
        milisec.innerHTML=ms;
    },10);
    spanstart.setAttribute("style","display:none");
    spanstop.setAttribute("style","");
    
})

stop.addEventListener("click",function(){
    clearInterval(secid);
    clearInterval(miliid);
    clearInterval(minid);
    spanstart.setAttribute("style","");
    spanstop.setAttribute("style","display:none");
    spanlap.setAttribute("style","display:none");
    spanreset.setAttribute("style","");
})

reset.addEventListener("click", ()=>{
    spanreset.setAttribute("style","display:none");
    spanlap.setAttribute("style","");
    min.innerText="00 : ";
    sec.innerText="00 : ";
    milisec.innerText="00";
    seccount=0,miliseccount=0,mincount=0,lapcount=0,startcount=0;
    let child=ul.lastElementChild;
    while(child){
        ul.removeChild(child);
        child=ul.lastElementChild;
    }
    
});

lap.addEventListener("click", ()=>{
    if(mincount==0 && seccount==0 && miliseccount==0){
        alert("Please start timer first");
    }
    else{
        lapcount++;
        ul.appendChild(document.createElement("hr"));
        let li=document.createElement("li");
        li.setAttribute("class","li");
        let span1=document.createElement("span");
        let span2=document.createElement("span");
        span1.innerText="Lap "+lapcount;
        span2.innerText=`${mincount} : ${seccount} : ${miliseccount}`;
        li.appendChild(span1);
        li.appendChild(span2);
        ul.appendChild(li);
        ul.appendChild(document.createElement("hr"));
    }
});