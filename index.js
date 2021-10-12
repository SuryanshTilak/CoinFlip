var toss=Math.ceil(Math.random()*2);

var coin=document.querySelector("h1");

var image=document.querySelector("img");

if(toss===1)
{
  image.setAttribute("src","images/head.png");
  coin.innerHTML="Head";
}
else{
  image.setAttribute("src","images/tails.png");
  coin.innerHTML="Tails";
}
