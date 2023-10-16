let box = document.querySelectorAll(".box");
let arr= Array.from(box).fill(null);
let winBox = Array.from(box);
let turn = "X";
let resetBtn = document.getElementById("reset");
let sb = document.querySelector(".scoreBoard");
let clickAble = document.querySelector(".container");

// win set function
const winSet =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// main Function
box.forEach((e)=>{
    e.addEventListener("click" , (e)=>{
        const id = e.target.id;
        if(arr[id] == null){
            arr[id] = turn;
            e.target.innerText = turn;
            win(); // check win status
            turnOver(); // turn over the x and 0 function
            draw();//
        }
    } );
})

// turnOver Function
function turnOver() {
    turn = turn === "X" ? "O" : "X";
}


// win function
function win() {
    winSet.forEach((element)=>{
        if(( arr[element[0]] === arr[element[1]]) && 
            (arr[element[1]] === arr[element[2]]) && 
            (arr[element[0]] !== null)){
                for(let i=0; i<3; i++){
                winBox[element[i]].style.backgroundColor = "rgb(0, 139, 35)"; 
            }
            sb.innerText = `'${arr[element[0]]}' Win `;
            clickAble.style.pointerEvents = "none";
        }
    })
} 

// draw function
function draw(){
    if(arr.indexOf(null) == -1){
        sb.innerText = "Match Draw";
        clickAble.style.pointerEvents = "none";
    }
}


//reset function
resetBtn.addEventListener('click' , () =>{
    arr.fill(null);
    box.forEach((box) => {
        box.innerText = "";
    });

    clickAble.style.pointerEvents = "auto";
    sb.innerText = "";
   winBox.forEach((ele)=>{
        ele.style.backgroundColor ="";
   });

   turn = "X";


})