const timeH = document.querySelector("h1");
let timeSecond = 5;

//this function returns the initial value of time second
const resetTimer = function() {
    return timeSecond = 5;

}


const button = document.getElementById("button")

function displayTime(second) {
    //  const min = Math.floor(second / 60);
      const sec = Math.floor(second % 60);
      console.log({sec});
      timeH.innerText= /*`${min<10 ? "0": " "}${min}:*/`${sec<10?"0":" "}${sec}`
  }
  
  //displayTime(second)

  function endTime() {
    timeH.innerText = "TIME OUT"
}

const countDown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1) {
        endTime();
        clearInterval(countDown);
    }
    
    },1000)
//this function starts the countdown
const timeStart = function () {


//displayTime(timeSecond);
countDown();

//endTime();




}
button.addEventListener("click", timeStart)
button.addEventListener("click", resetTimer)
//button.addEventListener("click", timeStart)*/