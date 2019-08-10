import axios from "axios";

const url = "http://localhost:3000";

class dbService {
  static async getUser(id) {
    try {
      let { data } = await axios.get(`${url}/users/${id}`);
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async getEncountersFromDb(accountName, success, dateStart, dateEnd) {
    if (success == "") success = null;
    if (dateEnd == "") dateEnd = null;
    if (dateStart == "") dateStart = null;

    try {
      let { data } = await axios.get(`${url}/encounters/${accountName}`, {
        params: {
          success: success,
          dateStart: dateStart,
          dateEnd: dateEnd
        }
      });
      return data;
    } catch (err) {
      throw err;
    }
  }

  static async getDpsReportData(data) {
    try {
      let response = [];
      data.forEach(async element => {
        let encounter = await fetch(
          `https://dps.report/getJson?permalink=${element.permalink}`
        );
        let encounterJson = await encounter.json();
        response.push(encounterJson);
      });
      return response;
    } catch (err) {
      throw err;
    }
  }

  static async getFilteredDpsReportData(data) {
    try {
      let response = [];
      data.forEach(async element => {
        let encounter = await fetch(
          `https://dps.report/getJson?permalink=${element.permalink}`
        );
        let encounterJson = await encounter.json();
        response.push(encounterJson);
      });
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export default dbService;
