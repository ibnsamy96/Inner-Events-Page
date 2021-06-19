const mainURL =
  "https://ma3an-apps-default-rtdb.firebaseio.com/internal-events/";

const endPoints = {
  events: "events.json",
};

//-- main async functions
const getData = async (url = mainURL) => {
  const headers = {
    pragma: "no-cache",
    "cache-control": "no-cache",
  };
  const response = await fetch(`${url}`, {
    method: "GET",
    headers,
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const postData = async (url = mainURL, { data }) => {
  const response = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

//-- helpful functions
function getDesiredEndpointUrl(endpoint) {
  return mainURL + endPoints[endpoint];
}

//-- features functions
export const getEvents = async () => {
  const eventsEndpointUrl = getDesiredEndpointUrl("events");
  // let userToken = restoreUserToken();
  let eventsJson = await getData(eventsEndpointUrl); // {event1Id:{event1Value},event2Id:{event2Value} ...}
  let eventsJsonIds = Object.keys(eventsJson); // ids of all events
  let eventsArrayOfObjects = eventsJsonIds.map((eventId) => {
    // returned value -> {event1Id,event1Value}
    return {
      eventId,
      ...eventsJson[eventId],
    };
  });
  // .reverse(); // we reverse it to get the latest at the first in the dashboard
  return eventsArrayOfObjects; // eventData -> [{event2Id,event2Value}, {event1Id,event1Value} ...]
};

export const postEvent = async (eventInfoJson) => {
  const eventsEndpointUrl = getDesiredEndpointUrl("events");
  // const userToken = restoreUserToken();
  await postData(eventsEndpointUrl, {
    data: eventInfoJson,
  });
};
