const card=document.querySelector(".card");
const mainname=document.querySelector("#person");
const istatus=document.querySelector("h5");
const tick=document.querySelector("#tick");
const addfriend=document.querySelector("#btn");
const online=document.querySelector("#online");
const img=document.querySelector("img");
const cele=document.querySelector("#celebration");
var iclick=0;
addfriend.addEventListener("click",function(){
    if(iclick==0){
    istatus.innerHTML="Friends";
    istatus.style="margin-right:8px;color:green;text-shadow:0px 0px black;"
    tick.style="visibility:visible";
    addfriend.innerHTML="UnFriend";
online.style="visibility:visible;"
addfriend.style="margin-top:10px;padding: 4px;margin-left:11%;width:80%;font-weight: 700;background-color: cadetblue; color:white; border-radius:10px"
img.style="border-radius:50%;object-fit:cover;object-position:center;height:80px;width:80px;margin-left:38%;transition:1s;";
cele.style="visibility:visible;transform:translateY(-170px);margin-left:0px"
card.style="overflow:hidden; box-sizing:border-box;paddng:0px ;background: rgb(234, 238, 232);"
mainname.style=" margin-left:-10px;";
    iclick=1;
}else{
    istatus.innerHTML="Not Friend";
    istatus.style="margin-left:-5px;color:black;text-shadow:0px 0px black;";
    tick.style="visibility:hidden";
    addfriend.innerHTML="Sent Request";
    online.style="visibility:hidden;"
    img.style="margin-left:-3pxobject-fit:cover;object-position:center;height: 15em;width: 16.5em;border-radius: 15PX;;box-shadow: 2px 2px 5px black; transition:1s;";
    addfriend.style="padding: 4px;margin-left:11%;width:80%;font-weight: 700;background-color: cadetblue; color:white; border-radius:10px"
    cele.style="visibility:hidden;"
    card.style="overflow:hidden; box-sizing:border-box;background: rgb(234, 238, 232);"
    iclick=0;
}
})

