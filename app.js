// ----------------Project section ------------------------


var arr = [
    {
        ProjectImage:"IMG//bubble game .png",
        link:"https://neerajsharma05.github.io/Bubble-Game-/",
        name:"BUBBLE GAME",
        year:2025
    },
    {
        ProjectImage:"IMG/calculater.png",
        link:"https://neerajsharma05.github.io/Calculater/",
        name:"Calculater",
        year:2023
    },
    {
        ProjectImage:"IMG/EVENTIFY.jpg",
        link:"https://neerajsharma05.github.io/Eventify/",
        name:"EVENTIFY",
        year:2024
    },
    {
        ProjectImage:"IMG/bmi-calculater.png",
        link:"https://neerajsharma05.github.io/BMI-Calculater/",
        name:"BMI Calculater",
        year:2025
    },
   
    {
        ProjectImage:"IMG/TEMPRATURE.png",
        link:"https://neerajsharma05.github.io/Temperature-convert-/",
        name:"Temperature Converter",
        year:2025
    },
    
];

var projects = document.querySelector('#second');

var cltr = "";
arr.forEach(function(elm,idx){
    cltr += `<div class="elem" id="${idx}">
                <img id ="${idx}" src="${elm.ProjectImage}" alt="">
                <a href="${elm.link}">
                     <h1 class="h1title">${elm.name} </h1>
                </a>
                 <h5>${elm.year}</h5>
            </div>`
            
})




projects.addEventListener('click',(dets)=>{
    window.open(`${arr[dets.target.id].link}`, '_self');


    console.log(dets.target.id); // dekh lena kaun sa id aa raha hai

})
 

// ---------------- Menu Section ------------------------
/*-------------------Contact form----------------------------- */




const Menu = document.querySelector('#menu-btn');
const MenuConent =  document.querySelector('#menuContent');
const Contactme = document.querySelector('#contact-cantainer');
const contactbtn = document.querySelector('#contact');
const downloadCv = document.querySelector('#cvdbtn');
const closeC = document.querySelector('#closeC');

let flag = 0

downloadCv .addEventListener('click',()=>{
    window.open('./IMG/Neeraj_CV.pdf')
})


Menu.addEventListener("click",()=>{
    MenuConent.style.display = 'contents'
    Menu.style.display = 'none'
    flag =1 ;
})

if(flag == 1){
    closeC.style.display = 'flex'
}

contactbtn.addEventListener('click',()=>{
    Contactme.style.opacity = '1'
})




// ---------------- Smooth scorling ------------------------


projects.innerHTML = cltr;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
  
// Custome mouse 

const cursor = document.querySelector('.corsor')
function mousemoveCircle(Xscale ,Yscale){
    window.addEventListener('mousemove',(dets)=>{
        cursor.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${Xscale} , ${Yscale})`
    }) 
}

// mousechapta

function cirlechaptakro(){
     // define default scale value
    var Xscale = 1;
    var Yscale = 1;

    var Xprev = 0;
    var Yprev = 0;

    window.addEventListener('mousemove',function(dets){
        

        var xdiffe = gsap.utils.clamp(.8,1.24 ,dets.clientX-Xprev)
        var ydiffe = gsap.utils.clamp(.8, 1.2 ,dets.clientY-Yprev)

        Xprev = dets.clientX;
        Yprev = dets.clientY;

        mousemoveCircle(Xscale ,Yscale);
        // console.log(xdiffe , ydiffe); 

    })

}

// animation 

function firstpageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav',{
        y:'-10',
        opacity : 0,
        duration : 1.5,
        delay:-1,
        ease:Expo.easeInOut
    })

    tl.to('.boundingElem',{
        y:0,
        duration :2,
        ease :Expo.easeInOut,
        stagger:.2,
        delay:-1

    })

    tl.from('#hero-fotter',{
        y:'10',
        opacity : 0,
        duration : 1.5,
        delay:-1.3,
        ease:Expo.easeInOut
    })


    tl.from('.h1title',{
        y:'10',
        opacity : 0,
        duration : 1.5,
        delay:-1.3,
        ease:Expo.easeInOut
    })


}




// image Hovering
// tino element ko select kro , uske baasd tino par ek mousemove lagao
//  , jab mouse move ho tab ye  pata kro ki mouse kaha hai
// jiska matlab hai ki mouse ki x and y position pta kro ,
// jab mouse ka postion badle tab us image ko show karo , 
// mousemove karte wqkt image ko rotate kro and jaise jaise mouse tez chale waise waise rotation bhi tej kro 

var elem = document.querySelectorAll('.elem')
.forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener('mousemove',function(dets){
        var ytop = dets.clientY - elem.getBoundingClientRect().top
        
        cursor.style.width = '70px'
        cursor.style.height = '70px'
        cursor.innerHTML = 'View'
        cursor.style.mixBlendMode;
        document.querySelector('#main').style.mixBlendMode = 'screen';
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;


        
        gsap.to(elem.querySelector('img'),{
            opacity:1,
            ease: Power3,
            top : ytop,
            left :dets.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrot*.8)
        })
    })
    elem.addEventListener('mouseleave',()=>{
        cursor.style.width = '15px'
        cursor.style.height = '15px'
        document.querySelector('#main').style.mixBlendMode = 'difference';

        cursor.innerHTML = ''

        gsap.to(elem.querySelector('img'),{
            opacity :0,
            ease: Power3,
            duration: 0.5,
        })
    })
    // clicking

    elem.addEventListener('click',(dets)=>{
        // window.open('https://neerajsharma05.github.io/Bubble-Game-/', '_self');
        console.log(dets.target);

    })
})


mousemoveCircle();
cirlechaptakro();             
firstpageAnim();



