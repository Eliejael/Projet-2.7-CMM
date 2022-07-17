function dynamic1(){
    setInterval("ColorRef()",5000);
};

function ColorRef(){
    let Elt=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let Hexa=["#"];
    let Hexa1;
    let Foot=document.querySelector("#f1");

    Hexa.push((Elt[Math.floor((Math.random()*16))]));

    for(let i=1;i<6;i++){
       let Hexa1= Hexa.push((Elt[Math.floor((Math.random()*16))]));
    };
    
    Foot.style.background=Hexa.join("");

    dynamic1();
};
ColorRef();

function dynamic2(){
   setTimeout(`myTime()`,1000)
};

function myTime(){
    let Erea2=document.querySelector("#p2");
    let OurDate = new Date();
    let Forma2 = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    let Local2 = ("0" +OurDate.getHours()).slice(-2) + ":" + ("0" + OurDate.getMinutes()).slice(-2) + ":" + ("0" + OurDate.getSeconds()).slice(-2);
    Erea2.innerHTML=Local2;
    
    let Erea1=document.querySelector("#p1");
    let Forma1 = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',   
    };
    let Local1 =OurDate.toLocaleString('fr-FR',Forma1) ;
    Erea1.innerHTML=Local1;
    
    dynamic2()
};
myTime();
