const NOT_A_DATABASE = {
  skiskyting: {
    type: "Gjett utfallet",
    title: "Skiskyting",
    subtitle: "Jaktstart menn V-cup 12,5 km",
    channel: "NRK 1",

    closesIn: "1t 23m",
    closeDatestring: "Lørdag 14. mars kl 13.45",

    intro: "For hver riktige gjetning får du <b>10 poeng</b> til deg og dine deltakende lag. Resultatene vises når sendingen er ferdig.",
    parts: [
      {
        title: "Spørsmål 1",
        question: "Hvor mange blink treffer Johannes T. Bø i første skyting?",
        inputType: "ShotsMissed",
        gameProperties: {
          min: 0,
          max: 5
        }
      },
      {
        title: "Spørsmål 2",
        question: "Hvor mange strafferunder får Martin Fourcade totalt i etappen?",
        inputType: "PenaltyRounds",
        gameProperties: {
          min: 0,
          max: 6
        }
      },
      {
        title: "Spørsmål 3",
        question: "Hvem kommer først i mål?",
        inputType: "MultipleChoice",
        gameProperties: {
          alternatives: [
            { text: "Norge",      img: "media/game-graphics/norge.png"      },
            { text: "Russland",   img: "media/game-graphics/russland.png"   },
            { text: "Frankrike",  img: "media/game-graphics/frankrike.png"  },
            { text: "Tyskland",   img: "media/game-graphics/tyskland.png"   },
            { text: "Sverige",    img: "media/game-graphics/sverige.png"    },
            { text: "Andre",      img: "media/game-graphics/andre.png"      }
          ]
        }
      }
    ],
    teams: [
      { id: "0dbe68", name: "MixMaster" },
      { id: "c0s7q9", name: "FabFive" }
    ]
  }
}

function get (key, part) {
  if (part === undefined) {
    return NOT_A_DATABASE[key];
  } else {
    return NOT_A_DATABASE[key].parts[part];
  }
}

export default { get };
