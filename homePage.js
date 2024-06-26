let detailsArr=[
    {
        videoImage:"./img/silence 2.webp",
        name:"silence 2",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"./img/BhagyaLakshmi.jpg",
        name:"Bhagya Lakshmi",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"./img/kb.webp",
        name:"Kundali Bhagya",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"./img/Forensic.jpg",
        name:"Forensic",
        text1:"WATCH",
        text2:"BUY NOW"
    }
];
let btnNext=document.querySelector("#next");
let btnPrev=document.querySelector("#prev");

let currentBox=0;
let showImg=document.querySelector("#Image");
let Name=document.querySelector("#sliderTop>h1");
let toWatch=document.querySelector("#slider>button:nth-child(3)>h4");
let toBuy=document.querySelector("#slider>button:nth-child(4)>h4");

btnNext.addEventListener("click",function(){
    goNext(detailsArr);
});

btnPrev.addEventListener("click",function(){
    goPrev(detailsArr);
});


function goNext(detailsArr)
{
    currentBox++;
    if(currentBox===detailsArr.length)
    {
        currentBox=0;
    }
    showImg.src = detailsArr[currentBox]["videoImage"];
    Name.innerText = detailsArr[currentBox]["name"];
    toWatch.innerText = detailsArr[currentBox]["text1"];
    toBuy.innerText = detailsArr[currentBox]["text2"];
}

function goPrev(detailsArr)
{
    currentBox--;
    if(currentBox===-1)
    {
        currentBox=detailsArr.length-1;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    Name.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
    toBuy.innerText=detailsArr[currentBox]["text2"];
}

var myIndex = currentBox;
// carousel();

function carousel() {
  var i;
  for (i = 0; i < detailsArr.length; i++) {
    showImg.src=detailsArr[i]["videoImage"];
    Name.innerText=detailsArr[i]["name"];

    showImg.style.display = "none"; 
    Name.style.display="none"; 
  }

  showImg.src=detailsArr[myIndex]["videoImage"];
  showImg.style.display = "block";
  Name.innerText=detailsArr[i]["name"];
  Name.style.display = "block";
  myIndex++;
  if (myIndex > detailsArr.length-1) {myIndex = 0}    
    
  setTimeout(carousel,2000); // Change image every 2 seconds
}

// Body Part

// let vidCont=document.querySelector("#videoContainer");
// let vidCard=document.querySelector(".videoCard");

// let btnNxt=document.querySelector(".nxtBtn");
// btnNxt.addEventListener("click",nextOne);

// function nextOne()
// {
//     vidCont.append(vidCard[0]);
// }

const productContainers = [...document.querySelectorAll('.videoContainer')];
const nxtBtn = [...document.querySelectorAll('.nxtBtn')];
const preBtn = [...document.querySelectorAll('.preBtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let loginValue=JSON.parse(localStorage.getItem("loginContent")) || [];
let bttn=document.querySelectorAll(".videoContainer button");

for(let i=0;i<bttn.length;i++)
{
    bttn[i].addEventListener("click",checkToOpen)
}

function checkToOpen()
{
    if(loginValue.length>0)
    {
        location.href="https://www.youtube.com/watch?v=YVvAI08Gmpc&list=PLU2X-6cCyi6Q_lNyfJywvmW1fq74STg5c&index=7&t=850s";
    }
    else
    {
        alert("Please login to access the contents!");
    }
}

if(loginValue.length>0)
{
    let changeLogin=document.querySelector("#lastTab h3");
    changeLogin.innerHTML="LOGOUT";
    
}
document.querySelector("#lastTab").addEventListener("click",loginChanges);
function loginChanges()
{
    if(loginValue.length>0)
    {
    localStorage.removeItem("loginContent");
    location.href="index.html";
    }
    else
    {
        location.href="logIn.html";
    }
}


