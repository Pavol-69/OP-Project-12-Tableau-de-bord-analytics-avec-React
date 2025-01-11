import axios from "axios";

const jsonOrThrowIfError = async (response) => {
  if (!response.data) throw new Error(await response.message);
  return response.data;
};

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }
  async get({ url }) {
    return jsonOrThrowIfError(await axios.get(`${this.baseUrl}${url}`));
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
    this.api = new Api({ baseUrl: "http://localhost:3000" });
  }

  user = (uid) => new ApiEntity({ key: "user", api: this.api, uid: uid });
}

export default new Database();
