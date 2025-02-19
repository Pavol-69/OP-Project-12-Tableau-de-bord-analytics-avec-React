import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mock.js";

// Définit si on se base sur les données mockées importée ci dessus, ou si on fait des calls api
const isMocked = false;

// Fonction exécutant tous les calls api, ou renvoie vers la fonction apiCallMocked si isMocked = true
async function apiCall(id, url, withMockData) {
  if (withMockData) {
    return apiCallMocked(id, url);
  } else {
    const response = await fetch(`http://localhost:3000/user/${id}/${url}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    if (!response.ok)
      throw new Error("Erreur lors de la récupération des infos");
    const parseRes = await response.json();
    return parseRes.data;
  }
}

// Simule les calls api avec les données mockées
function apiCallMocked(id, url) {
  switch (url) {
    case "activity":
      return elementWithRightId(id, USER_ACTIVITY);
    case "average-sessions":
      return elementWithRightId(id, USER_AVERAGE_SESSIONS);
    case "performance":
      return elementWithRightId(id, USER_PERFORMANCE);
    default:
      return elementWithRightId(id, USER_MAIN_DATA);
  }
}

function elementWithRightId(id, array) {
  return array.filter((elm) =>
    elm.userId ? elm.userId == id : elm.id == id
  )[0];
}

// object database qui va réaliser tous nos call api selon ce qu'on lui demande
const database = {
  user: (id) => ({
    info: async () => {
      return await apiCall(id, "", isMocked);
    },
    activity: async () => {
      return await apiCall(id, "activity", isMocked);
    },
    averageSession: async () => {
      return await apiCall(id, "average-sessions", isMocked);
    },
    performance: async () => {
      return await apiCall(id, "performance", isMocked);
    },
  }),
};

export default database;
