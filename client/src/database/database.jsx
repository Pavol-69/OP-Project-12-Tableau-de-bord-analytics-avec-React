import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mock.js";

// Gère la réponse de l'API
const jsonOrThrowIfError = async (response) => {
  const parseRes = await response.json();
  if (!parseRes.data) throw new Error(parseRes);
  return parseRes.data;
};

function contain(url, elm) {
  return url.indexOf(elm) > -1;
}

function elementWithRightId(id, array) {
  return array.filter((elm) =>
    elm.userId ? elm.userId == id : elm.id == id
  )[0];
}

// Va faire les calls API selon les données d'entrée
// Va aussi simuler l'API où cas il n'y a pas de serveur, et que nos données sont mockées
class Api {
  constructor({ baseUrl, isMock }) {
    this.baseUrl = baseUrl;
    this.isMock = isMock;
  }
  async get({ url }) {
    if (this.isMock) {
      try {
        const id = url.split("/").filter((elm) => !isNaN(elm) && elm > 0)[0];
        if (contain(url, "activity")) {
          return elementWithRightId(id, USER_ACTIVITY);
        } else if (contain(url, "average-sessions")) {
          return elementWithRightId(id, USER_AVERAGE_SESSIONS);
        } else if (contain(url, "performance")) {
          return elementWithRightId(id, USER_PERFORMANCE);
        } else {
          return elementWithRightId(id, USER_MAIN_DATA);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      return jsonOrThrowIfError(
        await fetch(`${this.baseUrl}${url}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        })
      );
    }
  }
}

// Crée les url adaptés à l'API pour les différents calls
class ApiEntity {
  constructor({ key, api, uid }) {
    this.key = key;
    this.api = api;
    this.uid = uid;
  }
  async info() {
    return await this.api.get({
      url: `/${this.key}/${this.uid}`,
    });
  }
  async activity() {
    return await this.api.get({
      url: `/${this.key}/${this.uid}/activity`,
    });
  }
  async averageSession() {
    return await this.api.get({
      url: `/${this.key}/${this.uid}/average-sessions`,
    });
  }
  async performance() {
    return await this.api.get({
      url: `/${this.key}/${this.uid}/performance`,
    });
  }
}

// Class permettant de faire nos appels API
// => Possibilité de switcher sur les données mockées
class Database {
  constructor() {
    this.api = new Api({ baseUrl: "http://localhost:3000", isMock: false });
  }

  user = (uid) => new ApiEntity({ key: "user", api: this.api, uid: uid });
}

export default new Database();
