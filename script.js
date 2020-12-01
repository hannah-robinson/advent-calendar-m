const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const openDoor = (imagePath, dayUrlPath, event) => {
  event.target.parentNode.style.backgroundImage = `url(${imagePath})`;
  event.target.style.opacity = "0";
  event.target.style.backgroundColor = "#503E1F";
  setTimeout(() => {
    event.target.classList.remove("number")
    event.target.classList.add("play-btn")
    event.target.innerHTML = `<a href=${dayUrlPath} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
    event.target.style.opacity = "100";
    event.target.style.backgroundColor = '';
    event.target.removeEventListener("click", openDoor);
  }, 2000);
  
  console.log(dayUrlPath);
  console.log(imagePath);
}

const createCalendar = () => {
  for(let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image")
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("number");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    dayNumber = i + 1;

    const urlPaths = {
      1: "https://www.youtube.com/watch?v=_CeY0VdhXK8",
      2: "https://www.nypl.org/blog/2019/12/19/listen-neil-gaiman-reads-christmas-carol",
    };

    let dayImagePath = `./images/advent-m-${dayNumber}.jpg`;
    let dayUrlPath = urlPaths[dayNumber];
    

    calendarDoorText.addEventListener("click", openDoor.bind(null, dayImagePath, dayUrlPath));
  }
}

calendarButton.addEventListener("click", createCalendar)