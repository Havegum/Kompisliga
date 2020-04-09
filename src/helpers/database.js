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
        inputType: "ShotMisses",
        min: 0,
        max: 5
      },
      {
        title: "Spørsmål 2",
        question: "Hvor mange strafferunder får Martin Fourcade totalt i etappen?",
        inputType: "PenaltyRounds",
        min: 0,
        max: 6
      },
      {
        title: "Spørsmål 3",
        question: "Hvem kommer først i mål?",
        inputType: "MultipleChoice",
        alternatives: [
          { text: "Norge",      img: "media/norge.jpg"      },
          { text: "Russland",   img: "media/russland.jpg"   },
          { text: "Frankerike", img: "media/frankerike.jpg" },
          { text: "Tyskland",   img: "media/tyskland.jpg"   },
          { text: "Sverige",    img: "media/sverige.jpg"    },
          { text: "Andre",      img: "media/andre.jpg"      }
        ]
      }
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
