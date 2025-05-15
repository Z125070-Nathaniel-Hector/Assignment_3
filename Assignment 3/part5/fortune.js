"use strict";

const fortunes = [
      {
        type: "Great Fortune (大吉)",
        message: "Amazing things are coming your way! Stay positive and keep going."
      },
      {
        type: "Middle Fortune (中吉)",
        message: "A good day lies ahead. Trust yourself and take a small risk."
      },
      {
        type: "Small Fortune (小吉)",
        message: "Every small win counts. Celebrate the little victories today!"
      },
      {
        type: "Bad Luck (凶)",
        message: "Tough times don’t last, but tough people do. Keep your head up!"
      }
    ];

    function generateFortune() {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const selectedFortune = fortunes[randomIndex];

      document.getElementById('fortuneText').innerText = selectedFortune.type;
      document.getElementById('fortuneMessage').innerText = selectedFortune.message;
    }