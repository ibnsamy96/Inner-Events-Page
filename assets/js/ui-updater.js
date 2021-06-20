const contentContainer = document.querySelector("#contentContainer");

function getMonthName(monthNum) {
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  return months[monthNum];
}

function getTagName(tagType, tagCode) {
  const tags = {
    type: {
      internal: "داخلي",
      external: "خارجي",
    },
    location: {
      online: "أونلاين",
      offline: "ع_الأرض",
    },
    owner: {
      tegara: "تجارة",
      asnan: "أسنان",
      handasa: "هندسة",
      tebb: "طب",
      tarbya: "تربية",
      gam3a: "الجامعة",
    },
  };

  return tags[tagType][tagCode];
}

const createEventCard = (eventData) => {
  const cardCode = `

<div class="meeting-card row my-1 py-4_5">
          <div
            class="
              col-auto
              mobile-hidden
              text-center
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <div class="calender-tag">
              <div class="month py-2"><span>${getMonthName(
                new Date(eventData.startDate).getMonth()
              )}</span></div>
              <div class="day py-2_5 px-4_5"><span>${
                new Date(eventData.startDate).getMonth() + 1
              }</span></div>
            </div>
          </div>
          <div class="col">
            <div class="p">
              <span class="event-tag type">#${getTagName(
                "type",
                eventData.tags.type
              )}</span>
              <span class="event-tag location">#${getTagName(
                "location",
                eventData.tags.location
              )}</span>
              <span class="event-tag owner">#${getTagName(
                "owner",
                eventData.tags.owner
              )}</span>
            </div>
            <!-- TODO check name direction based on title language -->
            <h2 class="mt-2 mb-1">${eventData.title}</h2>
            <p>من الساعة ${new Date(
              eventData.startDate
            ).getHours()} حتى ${new Date(eventData.endDate).getHours()}</p>
          </div>
          <div class="col-auto d-none">&gt</div>
          <div
            class="
              col-md-auto
              tablet-hidden
              d-flex
              justify-content-end
              align-items-center
            "
          >
            <div class="guests-box">
              <img
                src="./assets/images/gary.jfif"
                alt="img1"
                class="guest-circle main-guest"
              />
              <!-- <img src="./assets/images/leanne.png" alt="img2" class="guest-circle guest-img second-guest"> -->
              <div
                class="
                  guest-circle
                  second-guest
                  guests-number
                  d-flex
                  align-items-center
                  justify-content-end
                "
              >
                <span class="">8+</span>
              </div>
            </div>
          </div>
        </div>

`;

  return cardCode;
};

const appendEventCard = (cardCode) => {
  contentContainer.innerHTML += cardCode;
};

const addRetrievedEvents = (eventsArray) => {
  console.log(eventsArray);
  eventsArray.forEach((eventData) => {
    const cardCode = createEventCard(eventData);
    appendEventCard(cardCode);
  });
};

const showNoEventsText = () => {
  contentContainer.classList.add("text-center");
  contentContainer.innerText =
    "لا يوجد لقاءات قريبة، تابع جروبنا و تلك الصفحة ❤";
};

export const updateUI = (content) => {
  if (!content || content.length === 0) {
    showNoEventsText();
  } else {
    addRetrievedEvents(content);
  }
};
