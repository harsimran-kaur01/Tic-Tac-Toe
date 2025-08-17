let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnX=true;
const winpattern=[
    [0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]
]
function disableAll() {
  boxes.forEach(box => box.disabled = true);
}
function clear(){
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";   
    })
     msgcon=document.querySelector(".msgcontainer");
        msgcon.style.display='none';
gameover=false;
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                msgcon=document.querySelector(".msgcontainer");
                const msg = document.querySelector("#msg");
                msg.innerText=`Winner ${pos1}!!!`;
                msgcon.style.display='block';
                disableAll();
                gameover=true;
                return;
            }
        }
    }
}
let a=0;
let gameover=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX==true){
            box.innerText='X';
            turnX=false;
        }
        else{
            box.innerText='O';
            turnX=true;
        }
        box.disabled=true;
        a++;
        checkwinner();        
        if(a>=9&&gameover==false){
            disableAll();
            msgcon=document.querySelector(".msgcontainer");
            const msg = document.querySelector("#msg");
            msg.innerText=`TIE!!!`;
            msgcon.style.display='block';
            gameover=true

        }
    })
})
reset.addEventListener("click", clear);
document.querySelector("#newbtn").addEventListener("click", clear);
