function answer_question() {
    showConfirmPopup("Är du redo att skicka in dina svar?");
  }
  
  function showConfirmPopup(message) {
    document.getElementById("popup-confirm-text").textContent = message;
    document.getElementById("popup-confirm").style.display = "flex";
  }
  
  function handlePopupAnswer(isYes) {
    document.getElementById("popup-confirm").style.display = "none";
  
    if (isYes) {
      const requiredGroups = ["eat", "live", "task", "know"];
      let allAnswered = true;
  
      for (let group of requiredGroups) {
        const selected = document.querySelector(`input[name="${group}"]:checked`);
        if (!selected) {
          allAnswered = false;
          break;
        }
      }
  
      if (!allAnswered) {
        showAlertPopup("Ops! Du har några frågor kvar att svara på, gå tillbaka och testa dem också!");
        return;
      }
  
      const correctAnswers = {
        eat: "meat",
        live: "sahara",
        task: "försvara",
        know: "man"
      };
  
      let wrongCount = 0;
  
      for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected.value !== correctAnswers[question]) {
          wrongCount++;
        }
      }
  
      if (wrongCount === 0) {
        answer_done_question(); 
      } else {
        showAlertPopup("Oj, du hade " + wrongCount + " av 4 fel men det är okej, prova gärna igen och bli en djurexpert!");
      }
    }
  }
  
  function answer_done_question() {
    showDonePopup("Wow, grattis! Du klarade quizet och har låst upp ett nytt spännande djur! ");
  }
  
  function showDonePopup(message) {
    document.getElementById("popup-done-text").textContent = message;
    document.getElementById("popup-done").style.display = "flex";
  }
  
  function handlePopupDoneAnswer(choice) {
    document.getElementById("popup-done").style.display = "none";
  
    if (choice === "afrika") {
      window.location.href = "afrika.html";
    } else if (choice === "nästa") {
      window.location.href = "non_implemented.html"; 
    } else if (choice === "stanna") {
      
    }
  }
  
  function showAlertPopup(message) {
    document.getElementById("popup-alert-text").textContent = message;
    document.getElementById("popup-alert").style.display = "flex";
  }
  
  function closeAlertPopup() {
    document.getElementById("popup-alert").style.display = "none";
  }
  