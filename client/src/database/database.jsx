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

// Création d'une class en plus pour harmoniser les données, car les calls api peuvent retourner .todayScore ou .score, selon les utilisateurs
// => On veut tout au même format
class Info {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore
      ? data.todayScore * 100
      : data.score * 100;
    this.keyData = data.keyData;
  }
}

class User {
  constructor(userId) {
    this.userId = userId;
  }

  // Fait les différents call API séparemment du constructor dans une fonction async
  async init() {
    this.info = new Info(await apiCall(this.userId, "", isMocked));
    this.activity = await apiCall(this.userId, "activity", isMocked);
    this.averageSession = await apiCall(
      this.userId,
      "average-sessions",
      isMocked
    );
    this.perf = await apiCall(this.userId, "performance", isMocked);
    return this;
  }
}

export default User;
