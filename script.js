const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const urlPaths = {
  1: "https://www.youtube.com/watch?v=_CeY0VdhXK8",
  2: "https://www.nypl.org/blog/2019/12/19/listen-neil-gaiman-reads-christmas-carol",
  3: "https://www.youtube.com/watch?v=Iqqa3v4vW6w",
  4: "https://www.youtube.com/watch?v=-cK-8jnub5Q",
  5: "https://www.youtube.com/watch?v=BFPf7wrLWxg",
  6: "https://www.youtube.com/watch?v=imLja6Emezo", 
  7: "https://www.youtube.com/watch?v=pL71KhNmnls",
  8: "https://www.youtube.com/watch?v=Biu8Ycz3X0M",
  9: "https://www.youtube.com/watch?v=gFCpf9n_LYg",
  10: "https://www.youtube.com/watch?v=HPi6kYCCVOk",
  11: "https://www.youtube.com/watch?v=jofNR_WkoCE",
};

const openDoor = (event) => {
  // Check if door is allowed to be opened yet
  let currentTime = new Date();
  let today = currentTime.getDate();
  if (today < event.target.parentNode.id) {
    console.log("You're too early")
    console.log(event.target.parentNode.id)
  // Open door
  } else {
      event.target.removeEventListener("click", openDoor);
      event.target.style.opacity = "0";
      event.target.style.backgroundColor = "#503E1F";
      setTimeout(() => {
        event.target.classList.remove("number")
        event.target.classList.add("play-btn")
        event.target.parentNode.style.backgroundImage = `url(./images/advent-m-${event.target.parentNode.id}.jpg)`;
        event.target.innerHTML = `<a href=${urlPaths[event.target.parentNode.id]} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
        event.target.style.opacity = "100";
        event.target.style.backgroundColor = '';
      }, 750);
    }
}

const createCalendar = () => {
  for(let i = 1; i <= calendarDays; i++) {
    
    const calendarDoor = document.createElement("div");
    const calendarDoorContents = document.createElement("div");
    
    let dayNumber = i;
    
    // Build calendar UI
    calendarDoor.id = dayNumber;
    calendarDoor.classList.add("door")
    calendarDoor.style.gridArea = "door" + (dayNumber);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorContents.classList.add("number");
    calendarDoorContents.innerHTML = dayNumber;
    calendarDoor.appendChild(calendarDoorContents);
    
    calendarDoorContents.addEventListener("click", openDoor);
  }
}
calendarButton.addEventListener("click", createCalendar)