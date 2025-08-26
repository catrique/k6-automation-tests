import { SharedArray } from "k6/data";

const K6_ENVIRONMENT = (__ENV.K6_ENVIRONMENT || "homolog").replace(/\.json$/i, "");

const envConfig = new SharedArray("envConfig", function () {
  const filePath = `./environments/${K6_ENVIRONMENT}.json`;
  try {
    const data = open(filePath);
    const parsed = JSON.parse(data);
    return [parsed];
  } catch (error) {
    throw new Error(
      `Failed to load environment config from ${filePath}: ${error.message}`
    );
  }
});

const config = envConfig[0];

export const apiURL = config.ApiURL;
export const identityUrl = config.identityUrl;
export const clientId = config.clientId;
export const token = config.token;
export const unAlias = config.unAlias;
export const notificationApiUrl = config.notificationApiUrl;
export const email = config.email;
export const password = config.password;

export const currentEnvironment = K6_ENVIRONMENT;
