import { command } from "../utils/requestHelper.js";
import { validateReportResponse } from "../utils/responseValidator.js";

export const options = {
  vus: 1,
  iterations: 1
};

export default function () {
  const data = {
    EventIds: ["id"],
    CreationDate: true ,
    PaymentDate: true,
    DateStart: true,
    DateEnd: true
  };
  const reportExcel = command("Reports/management/eventConsumerPayments/excel", data, "management");
  validateReportResponse(reportExcel);
}