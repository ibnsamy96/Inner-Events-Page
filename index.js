import { getEvents, postEvent } from "./assets/js/database-communication.js";

const setBodyPaddingTop = () => {
  console.log("DOMContentLoaded");

  const documentHeader = document.querySelector("header");

  const headerMainHeight = parseFloat(getComputedStyle(documentHeader).height);

  console.log(headerMainHeight);

  document.body.style.paddingTop = `${headerMainHeight}px`;

  console.log(document.body.style.paddingTop);

  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener("load", setBodyPaddingTop);

const ma3anEvents = {
  clicks: 2,
  title: "لقاء الكالتشر تووك",
  description: "لقاء كبير يجمعنا",
  startDate: 123456,
  endDate: 123456,
  attendees: [
    {
      number: 2,
      info: [
        { name: "", image: "https://sdsd.com" },
        { name: "", image: "https://sdsd.com" },
      ],
    },
  ],
  tags: { type: "internal", location: "online", owner: "gam3a" },
};
