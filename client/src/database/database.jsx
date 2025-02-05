import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./mock.js";

const jsonOrThrowIfError = async (response) => {
  if (!response.data) throw new Error(await response.message);
  return response.data.data;
};

function contain(url, elm) {
  return url.indexOf(elm) > -1;
}

function elementWithRightId(id, array) {
  return array.filter((elm) =>
    elm.userId ? elm.userId == id : elm.id == id
  )[0];
}

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
        console.log(error);
      }
    } else {
      return jsonOrThrowIfError(await axios.get(`${this.baseUrl}${url}`));
    }
  }
}

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

class Database {
  constructor() {
    this.api = new Api({ baseUrl: "http://localhost:3000", isMock: false });
  }

  user = (uid) => new ApiEntity({ key: "user", api: this.api, uid: uid });
}

export default new Database();
