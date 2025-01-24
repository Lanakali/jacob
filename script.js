
  const card = document.getElementById("flip-card");
  const nextButtons = document.querySelectorAll(".next-button");
  const eventSection = document.querySelector(".event-section");
  const mainSection = document.querySelector(".main");
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  let currentStep = 0;
  let eventSectionEnabled = true; // Toggle this to enable/disable the event section

  window.onload = function() {
    var audio = document.getElementById('background-audio');
    audio.play(); // Play the audio once the page is loaded
  };





  // Flip the card when Next button is clicked
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentStep++;
      card.className = `card step-${currentStep}`;

      if (currentStep === 4) {
        setTimeout(() => {
          eventSection.style.display = "none";
          mainSection.style.display = "block";
          document.getElementById("tab-overview").classList.remove("active-tab");
          document.getElementById("overview").classList.remove("active");
          document.getElementById("tab-her").classList.add("active-tab");
          document.getElementById("HER").classList.add("active");
          
          currentStep = 0; // Reset steps for the next visit
          card.className = "card";
        }, 1000); // Delay to show the last flip before returning
      }
    });
  });

  // Function to handle tab switching
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove 'active' class from all content sections and 'active-tab' from tabs
      tabContents.forEach((content) => content.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active-tab"));

      if (tab.id === "tab-events") {
        if (eventSectionEnabled) {
          eventSection.style.display = "flex";
          mainSection.style.display = "none";
        } else {
          // Show a message when event section is disabled
          alert("There are no events at the moment.");
          document.getElementById("tab-events").classList.remove("active-tab");
          

          document.getElementById("tab-her").classList.add("active-tab");
          document.getElementById("HER").classList.add("active");
          
        }
      } else {
        eventSection.style.display = "none";
        mainSection.style.display = "block";
        tabContents[index].classList.add("active");
      }

      tab.classList.add("active-tab");
    });
  });

  // Initialize default view based on event_section state
  if (eventSectionEnabled) {
    eventSection.style.display = "flex";
    mainSection.style.display = "none";
  } else {
    document.getElementById("tab-overview").classList.remove("active-tab");
    document.getElementById("overview").classList.remove("active");
    document.getElementById("tab-her").classList.add("active-tab");
    document.getElementById("HER").classList.add("active");
  }
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  
  // Handle the "Yes 💕" button click
  yesButton.addEventListener("click", () => {
      // Example: Show a message when "Yes" is clicked
      const message = document.createElement("p");
      message.textContent = "You made my day! 💖";
      message.style.fontSize = "20px";
      message.style.color = "#ff304f";
      message.style.textAlign = "center";
      message.style.marginTop = "20px";
      eventSection.appendChild(message);
  
      // Trigger the card flip animation (optional)
      card.classList.add("happy-flip");  // Add a specific class for animation
  
      // Optionally, disable buttons after the response
      yesButton.disabled = true;
      noButton.disabled = true;
  });
  
  // Handle the "No 😢" button click
  noButton.addEventListener("click", () => {
      // Example: Show a different message when "No" is clicked
      const message = document.createElement("p");
      message.textContent = "I'm sorry... 😢,but you cant say no";
      message.style.fontSize = "20px";
      message.style.color = "#ff304f";
      message.style.textAlign = "center";
      message.style.marginTop = "20px";
      eventSection.appendChild(message);
  
      // Optional: Trigger the card flip to go to the back
      card.classList.add("sad-flip");  // Add a class for a different animation
  });
  