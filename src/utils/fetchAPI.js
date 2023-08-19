import { BASE_URL, AUTH_TOKEN } from "./Constants";

export const fetchAPI = async (url, params = "") => {
  try {
    const data = await fetch(BASE_URL + url, {
      headers: {
        Authorization: "bearer " + AUTH_TOKEN,
      },
      params,
    });

    const responseJson = await data.json();
    return responseJson;
  } catch (err) {
    console.log(err);
    return err;
  }
};
