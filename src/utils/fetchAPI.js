import { BASE_URL, AUTH_TOKEN } from "./Constants";

export const fetchAPI = async (url, params = "") => {
  // if (!FETCH_URL_MAP[url]) throw new Error('Unknown API url');
  // const { serverUrl, apiUrl } = FETCH_URL_MAP[url];

  // let response;

  // switch (method) {
  //   case 'GET': {
  //     response = await fetch(`${isServer ? serverUrl : apiUrl}${params.length ? `?${params}` : ''}`, {
  //       method,
  //       headers: { 'Content-Type': 'application/json', ...headers },
  //     });
  //     break;
  //   }
  //   case 'POST': {
  //     response = await fetch(`${isServer ? serverUrl : apiUrl}${params.length ? `?${params}` : ''}`, {
  //       method,
  //       headers: { 'Content-Type': 'application/json', ...headers },
  //       body: JSON.stringify({ ...body }),
  //     });
  //     break;
  //   }
  //   case 'DELETE': {
  //     response = await fetch(`${isServer ? serverUrl : apiUrl}${params.length ? `?${params}` : ''}`, {
  //       method,
  //       headers: { 'Content-Type': 'application/json', ...headers },
  //     });
  //     break;
  //   }
  //   default:
  //     throw new Error('Unknown http request method');
  // }

  // const json = await response.json();
  // const error = json.error ? json.error : Array.isArray(json.errors) && !json.errors.length ? null : json.errors;

  // if (error) {
  //   console.error(error);
  //   throw new Error(`Failed to fetch API: ${url}`);
  // }

  // return json;

  try {
    const data = await fetch(BASE_URL + url, {
      headers: {
        Authorization: "bearer " + AUTH_TOKEN,
      },
      params,
    });

    const responseJson = await data.json();
    // console.log(responseJson, '[[[[')
    return responseJson;
  } catch (err) {
    console.log(err);
    return err;
  }
};
