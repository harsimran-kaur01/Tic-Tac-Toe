let  boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turn0=true;
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
   }); 
});
boxes.forEach((box)=>{
    let c=0
    if (boxes.disabled=true){
        c=c+1
    }
    if(c==9){
        checkWinner()
        if (a==0){
            console.log("tie hogya")
        }
    }
})
const resetGame=()=>{
     msgcontainer.classList.add("hide");
    turn0=true;
    enabledboxes();
   
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    b=winner;
    msg.innerText='congratulations '+b;
    msgcontainer.classList.remove("hide");
    disabledboxes();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
      let val1=boxes[pattern[0]].innerText;
      let val2=boxes[pattern[1]].innerText;
      let val3=boxes[pattern[2]].innerText;
      if(val1 !="" && val2!=""&& val3!=""){
        if(val1==val2&& val2==val3){
            showwinner(val1);
            a=a+1
        }
      }
      };

};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);