import { check } from "k6";

export function validateStandardResponse(response) {
  const body = response.json();

  console.log(`errorCode: ${body.errorCode}, errorName: ${body.errorName}`);

  return check(response, {
    "status 200": (r) => r.status === 200,
    "tem resultData": (r) => body.resultData !== undefined,
    "sem erro": (r) => body.errorCode === 0,
    "errorName é None": (r) => body.errorName === "None",
  });
}

export function extractResultData(response) {
  return response.json().resultData;
}

/**
 * Valida a resposta do endpoint de relatórios com cheques minimalistas:
 * Status 200, existência de 'data' como array e 'base64Excel' não nulo/vazio no primeiro item.
 * @param {Object} response - O objeto de resposta do K6.
 * @returns {boolean} True se a resposta do relatório for válida conforme os critérios especificados.
 */
export function validateReportResponse(response) {
  const body = response.json();
  return check(response, {
    "relatorio: status 200": (r) => r.status === 200,
    // "relatorio: tem propriedade 'data' e é um array": (r) =>
    //   Array.isArray(body.data),
    "relatorio: 'data' não está vazio": (r) =>
      body.data && body.data.length > 0,
    "relatorio: Base64 não é vazio ou nulo": (
      r
    ) => {
      if (body.data && body.data.length > 0) {
        const base64Content = body.data[0].base64Excel || body.data[0].base64;
        return typeof base64Content === "string" && base64Content.length > 0;
      }
      return false;
    },
  });
}
