document.addEventListener("DOMContentLoaded", function () {
  const firstLineBox = document.querySelector(".first_line .box p");
  const secondLineBox = document.querySelector(".second_line .box p");
  const loadingImageFirstLine = document.querySelector(".first_line .loading-image");
  const loadingImageSecondLine = document.querySelector(".second_line .loading-image");
  const firstLineContainer = document.querySelector(".first_line");
  const secondLineContainer = document.querySelector(".second_line");
  const thirdLineContainer = document.querySelector(".third_line");
  const thirdLineContainerBtn = document.querySelector(".btn_wrapper");
  const thirdLineContainerBtnTwo = document.querySelector(".noPartitaIVAButton");

  function showChatMessage(element, text, loadingImage, delay) {
    loadingImage.style.display = "inline";
    setTimeout(function () {
      loadingImage.style.display = "none";
      element.innerHTML = text; // Use innerHTML to insert HTML content
    }, delay);
  }

  setTimeout(() => {
    firstLineContainer.style.opacity = 1;
    showChatMessage(
      firstLineBox,
      "Scopri la FIBRA ULTRA VELOCE di WindTre Business: tutto quello di cui il tuo ufficio ha bisogno 💪",
      loadingImageFirstLine,
      1000
    );
  }, 1000);

  setTimeout(function () {
    secondLineContainer.style.opacity = 1;
    showChatMessage(
      secondLineBox,
      "Hai partita IVA?",
      loadingImageSecondLine,
      2000
    );
  }, 4000);

  setTimeout(function () {
    thirdLineContainer.style.opacity = 1;
    const buttons = document.querySelectorAll(".third_line .btn_wrapper button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        thirdLineContainerBtn.classList.add("justify-content-end");
        thirdLineContainerBtnTwo.classList.add("d-none");
        setTimeout(function () {
          // Show the first message after button click
          const newMessageContainer1 = createMessageContainer();
          const newBox1 = newMessageContainer1.querySelector(".box p");
          const newLoadingImage1 = newMessageContainer1.querySelector(".loading-image");

          showChatMessage(
            newBox1,
            "Con SUPER OFFICE ONE hai internet e chiamate illimitate con 👇 ▪️ Servizio secure Web per navigare in sicurezza ✔️ Modem Wifi 6 incluso ✔️ Attivazione inclusa",
            newLoadingImage1,
            0
          );
        }, 2000);

        setTimeout(function () {
          // Show the second message after the first
          const newMessageContainer2 = createMessageContainer();
          const newBox2 = newMessageContainer2.querySelector(".box p");
          const newLoadingImage2 = newMessageContainer2.querySelector(".loading-image");

          showChatMessage(
            newBox2,
            "⏰ Ora in promozione a partire da 20,99 €/mese per i primi due mesi 👉 dal 3°mese 28,99€/mese",
            newLoadingImage2,
            0
          );
        }, 4000);

        setTimeout(function () {
          // Show the third message after the second
          const newMessageContainer3 = createMessageContainer();
          const newBox3 = newMessageContainer3.querySelector(".box p");
          const newLoadingImage3 = newMessageContainer3.querySelector(".loading-image");

          showChatMessage(
            newBox3,
            "Verifica subito la copertura nella tua zona con l'aiuto di un operatore 👇",
            newLoadingImage3,
            0
          );

          // Show buttons after the third message
          setTimeout(function () {
            const newButtonsContainer = document.createElement("div");

            newButtonsContainer.classList.add(
              "d-flex",
              "align-items-center",
              "gap-4",
              "button-container"
            );

            newButtonsContainer.innerHTML = `
              <div class="btn_wrapper gap-4">
                <button id="verificaButton">📶 Verifica Copertura</button>
                <button class="verificaBtnOne">🚀 Attiva ora</button>
                <button class="verificaBtnTwo">☎️ Chiamata gratuita</button>
              </div>
            `;
            thirdLineContainer.appendChild(newButtonsContainer);

            // Add event listener for the "Verifica Copertura" button
            const verificaButton = document.getElementById("verificaButton");
            const verificaBtttonOne = document.querySelector(".verificaBtnOne");
            const verificaBtttonTwo = document.querySelector(".verificaBtnTwo");
            verificaButton.addEventListener("click", function () {
              newButtonsContainer.classList.add("justify-content-end");
              verificaBtttonOne.classList.add("d-none");
              verificaBtttonTwo.classList.add("d-none");

              // Show the first message after button click
              setTimeout(function () {
                const newMessageContainer4 = createMessageContainer();
                const newBox4 = newMessageContainer4.querySelector(".box p");
                const newLoadingImage4 = newMessageContainer4.querySelector(".loading-image");
                showChatMessage(
                  newBox4,
                  "Perfetto! Verificherai la copertura nella tua zona con l'aiuto di un operatore",
                  newLoadingImage4,
                  0
                );
              }, 2000);

              // Show the second message after the first
              setTimeout(function () {
                const newMessageContainer5 = createMessageContainer();
                const newBox5 = newMessageContainer5.querySelector(".box p");
                const newLoadingImage5 = newMessageContainer5.querySelector(".loading-image");
                showChatMessage(
                  newBox5,
                  "👍 La chiamata è gratuita e senza impegno",
                  newLoadingImage5,
                  0
                );
              }, 4000);

              // Show the second message after the first
              setTimeout(function () {
                const newMessageContainer6 = createMessageContainer();
                const newBox6 = newMessageContainer6.querySelector(" p");
                const newLoadingImage6 = newMessageContainer6.querySelector(".loading-image");

                // Create and append an input field
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.placeholder = "hola";
                newBox6.appendChild(inputField);

                // Hide loading image and show input field after a delay
                setTimeout(function () {
                  newLoadingImage6.style.display = "none";
                  inputField.style.display = "inline";
                }, 1000);
              }, 6000);
            });
          }, 2000);
        }, 6000);
      });
    });
  }, 8000);

  function createMessageContainer() {
    const newMessageContainer = document.createElement("div");
    newMessageContainer.classList.add(
      "d-flex",
      "gap-4",
      "align-items-end",
      "message-container",
      "mb-1"
    );
    newMessageContainer.innerHTML = `
      <img class="logo" src="./assets/logo.webp" alt="">
      <div class="box">
          <p></p>
          <img class="loading-image w-25" src="https://miro.medium.com/v2/resize:fit:1400/1*aQRi1EVQY1hbhQHpKj2umw.gif" alt="Loading">
      </div>
    `;
    thirdLineContainer.appendChild(newMessageContainer);
    return newMessageContainer;
  }
});
