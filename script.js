const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")
// const easterEgg = document.querySelector("#easter-egg")

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
  12: "https://www.youtube.com/watch?v=-yfCo4DUc_E",
  13: "https://www.youtube.com/watch?v=4WqPGAJcp5c",
  14: "https://twitter.com/AberavonRFC/status/1336747442579103748",
  15: "https://www.youtube.com/watch?v=fP0zzKtchFQ",
  16: "https://youtu.be/iCAZ7CeDZBg?t=160",
  17: "https://www.youtube.com/watch?v=tMpqX8UTcEs",
  18: "https://www.youtube.com/watch?v=CZ7U3Cu4Mr4",
  19: "https://www.youtube.com/watch?v=7aJopVMKpBw", 
  20: "https://www.youtube.com/watch?v=UoHiCJdJimI",
  21: "https://www.youtube.com/watch?v=quSXoj8Kob0",
  22: "https://www.youtube.com/watch?v=5G18t7P-Df0",
  23: "https://www.youtube.com/watch?v=ak6sdSAcNkw",
  24: "https://www.youtube.com/watch?v=sh-J4GSPgAM",
};

const openDoor = (event) => {
  // Check if door is allowed to be opened yet
  let currentTime = new Date();
  let today = currentTime.getDate();

   if (today < event.target.parentNode.id) {

    // Build "You're too early" modal
    const modal = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalContent = document.createElement("div");
    const closeBtn = document.createElement("span"); 
    const textBackground = document.createElement("div");

    modal.classList.add("modal");
    document.body.appendChild(modal);

    modalContainer.classList.add("modal-container");
    modal.appendChild(modalContainer);

    modalContent.classList.add("modal-content");
    modalContainer.appendChild(modalContent);

    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "&times;";
    modalContent.appendChild(closeBtn);

    textBackground.classList.add("text-background");
    textBackground.innerHTML = `<p>You're too early<img class="finger" src="./images/finger.png" alt="finger wagging"></p>`;
    modalContent.appendChild(textBackground);
    
    // Get random dog photo for modal
    let randomNumber = Math.floor(Math.random() * 6);
    modalContent.style.backgroundImage = `url("./images/early-${randomNumber}.jpg")`;

    // Modal events
    closeBtn.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", outsideClick);

    // Open modal
    function openModal() {
      modal.style.display = "block";
    }

    // Close modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Close modal for outside click
    function outsideClick(event) {
      if (event.target == modalContainer) {
        modal.style.display = "none";
      }
    }
    // Open modal
    openModal();
  // Check if today is Christmas day
  } else if (today === 25) {
    // Build Christmas day modal
      const modal = document.createElement("div");
      const modalContainer = document.createElement("div");
      const modalContent = document.createElement("div");
      const closeBtn = document.createElement("span"); 
      const textBackground = document.createElement("div");

      modal.classList.add("modal");
      document.body.appendChild(modal);

      modalContainer.classList.add("modal-container");
      modal.appendChild(modalContainer);

      modalContent.classList.add("xmas-modal-content");
      modalContainer.appendChild(modalContent);

      closeBtn.classList.add("closeBtn");
      closeBtn.innerHTML = "&times;";
      modalContent.appendChild(closeBtn);

      textBackground.classList.add("xmas-text-background");
      textBackground.innerHTML = "<p>Go to your computer's Desktop and click the file named M-25th.html</p>";
      modalContent.appendChild(textBackground);

      // Modal events
      closeBtn.addEventListener("click", closeModal);
      modalContainer.addEventListener("click", outsideClick);

      // Open modal
      function openModal() {
        modal.style.display = "block";
      }

      // Close modal
      function closeModal() {
        modal.style.display = "none";
      }

      // Close modal for outside click
      function outsideClick(event) {
        if (event.target == modalContainer) {
          modal.style.display = "none";
        }
      }
      // Open modal
      openModal();
    } else {
    // Open calendar door
      event.target.removeEventListener("click", openDoor);
      event.target.style.opacity = "0";
      event.target.style.backgroundColor = "#503E1F";
      setTimeout(() => {
        event.target.classList.remove("number");
        event.target.classList.add("play-btn");
        event.target.parentNode.style.backgroundImage = `url(./images/advent-m-${event.target.parentNode.id}.jpg)`;
        event.target.innerHTML = `<a href=${urlPaths[event.target.parentNode.id]} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
        event.target.style.opacity = "100";
        event.target.style.backgroundColor = '';
      }, 750);
    }
}

// Build calendar UI
const createCalendar = () => {
  for(let i = 1; i <= calendarDays; i++) {
    
    const calendarDoor = document.createElement("div");
    const calendarDoorContents = document.createElement("div");
    
    let dayNumber = i;
    
    calendarDoor.id = dayNumber;
    calendarDoor.classList.add("door")
    calendarDoor.style.gridArea = "door" + (dayNumber);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorContents.classList.add("number");
    calendarDoorContents.innerHTML = dayNumber;
    calendarDoor.appendChild(calendarDoorContents);
    
    calendarDoorContents.addEventListener("click", openDoor);
  }
  calendarButton.remove();
}

// function clickedEgg(event) {
//   event.target.removeEventListener("click", clickedEgg);
//   event.target.style.animation = "none";
}
calendarButton.addEventListener("click", createCalendar);
// easterEgg.addEventListener("click", clickedEgg);