import http from "k6/http";
import { check } from "k6";
import {  apiURL, token, unAlias } from "../../config.js";


function getHeaders(origin = "management") {
  if (origin == "management")
  return {
    "Authorization": token ? `Bearer ${token}` : "",
    "un-alias": unAlias,
    "Content-Type": "application/json"
  };
  else if (origin == "registration")
    return {
    "Content-Type": "application/json"
  };
}

export function query(endpoint) {
  const url = `${apiURL}${endpoint}`;
  const res = http.get(url, { headers: getHeaders() });
  check(res, { "status 200": (r) => r.status === 200 });
  return res;
}

export function command(endpoint, data = {},origin = "management", method = "POST") {
  const url = `${apiURL}${endpoint}`;
  const headers = getHeaders(origin);
  const payload = JSON.stringify(data);

  let res;

  switch (method.toUpperCase()) {
    case "POST":
      res = http.post(url, payload, { headers });
      break;
    case "PUT":
      res = http.put(url, payload, { headers });
      break;
    case "PATCH":
      res = http.patch(url, payload, { headers });
      break;
    case "DELETE":
      res = http.del(url, payload, { headers });
      break;
    default:
      throw new Error(`Método HTTP não suportado: ${method}`);
  }

  check(res, {
    [`${method} status 200`]: (r) => r.status === 200,
  });
  
  if (res.status !== 200) {
    console.error(`Erro: ${res.status} - ${res.body}`);
  }

  return res;
}