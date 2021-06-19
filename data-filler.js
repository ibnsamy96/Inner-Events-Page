```
to generate random events and post them paste this code in the index.js file

import { getEventsArray } from "./data-filler.js";
const eventsArray = getEventsArray(12);
eventsArray.forEach(function (item, i) {
    postEvent(item);
    console.log("item");
});
  
```;

const getRandomNumber = (finalNumber) => {
  return Math.random() * finalNumber;
};

const arabicAlphabet = "دجحخهعغفقثصضطكمنتالبيسسشظزوةىلارؤءئ";

const getArabicWords = (wordsNumber) => {
  const alphabetsArray = arabicAlphabet.split("");
  const alphabetsCounter = alphabetsArray.length;

  let sentence = "";

  for (let wordIndex = 0; wordIndex < wordsNumber; wordIndex++) {
    let word = "";
    const wordAlphabetsNumber = getRandomNumber(6);
    for (
      let wordAlphabet = 0;
      wordAlphabet < wordAlphabetsNumber;
      wordAlphabet++
    ) {
      word =
        word + alphabetsArray[Math.floor(getRandomNumber(alphabetsCounter))];
    }
    sentence = sentence + word + " ";
  }

  return sentence.trim();
};

function getTag(tagType) {
  const tags = {
    type: ["internal", "external"],
    location: ["online", "offline"],
    owner: ["gam3a", "tarbya", "tebb", "tegara", "handasa", "asnan"],
  };

  const neededTag = tags[tagType];
  const randomIndex = Math.floor(getRandomNumber(neededTag.length));

  return neededTag[randomIndex];
}

function getAttendeeImage() {
  const mainLocation = "./assets/images/";
  const images = ["gary.jfif", "leanne.png", "kevin.jfif", "karl.png"];
  const randomIndex = Math.floor(getRandomNumber(images.length));

  return mainLocation + images[randomIndex];
}

function getAttendees() {
  const attendeesNumber = Math.floor(getRandomNumber(25));
  const info = [];
  for (let i = 0; i < attendeesNumber; i++) {
    info.push({ name: getArabicWords(3), image: getAttendeeImage() });
  }

  return { number: attendeesNumber, info };
}

const createEvent = () => {
  return {
    clicks: Math.floor(getRandomNumber(10)),
    title: getArabicWords(Math.ceil(getRandomNumber(5))),
    description: getArabicWords(Math.ceil(getRandomNumber(20))),
    startDate: new Date().getTime(),
    endDate: new Date().getTime(),
    attendees: getAttendees(),
    tags: {
      type: getTag("type"),
      location: getTag("location"),
      owner: getTag("owner"),
    },
  };
};

export const getEventsArray = (arrayLength) => {
  const events = [];
  for (let i = 0; i < arrayLength; i++) {
    events.push(createEvent());
  }

  return events;
};
