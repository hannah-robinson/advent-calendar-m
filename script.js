const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const openDoor = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`;
  event.target.style.opacity = "0";
  event.target.style.backgroundColor = "#503E1F";
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
    let dayImagePath = `./images/advent-m-${dayNumber}.jpg`;

    calendarDoorText.addEventListener("click", openDoor.bind(null, dayImagePath));
  }
}

calendarButton.addEventListener("click", createCalendar)