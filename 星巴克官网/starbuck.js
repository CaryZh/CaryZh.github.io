var rightbutton = document.querySelector(".rightbutton");
var pic = document.querySelector(".scorllwrapper");
var leftbutton = document.querySelector(".leftbutton");
// console.log(button);
console.log(pic);
console.log(leftbutton);

rightbutton.onclick = function () {
    console.log(this);
    console.log(pic);
    rightbutton.style.display = "none"
    leftbutton.style.display = "block"
    pic.style.transform = "translateX(0rem)";



}
leftbutton.onclick = function () {
    // console.log(leftbutton);
    pic.style.transform = "translateX(30rem)";
    rightbutton.style.display = "block"
    leftbutton.style.display = "none"

}

// 左边
var leftlist = document.querySelector(".listlogo");
var beforelist = document.querySelector(".beforeit");
console.log(leftlist);
console.log(beforelist);
var afterlist = document.querySelector(".afterit");
var leftclose = document.querySelector(".uplist")
console.log(leftclose);
console.log(afterlist);

leftlist.onclick=function(){
    afterlist.style.display="block";
    beforelist.style.display="none";
}
leftclose.onclick=function(){
    afterlist.style.display="none";
    beforelist.style.display="block";
    rightlist.style.display="block";


}
// 下面
var downbtn = document.querySelectorAll(".procket")[4];
var rightlist = document.querySelector(".rightBox");
console.log(downbtn);
downbtn.onclick=function () {
    console.log(123);
    afterlist.style.display="block";
    rightlist.style.display="none";
}
