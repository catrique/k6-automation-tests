import { command } from "../utils/requestHelper.js";
import { eventConsumersIds } from "./EventConsumersIds.js";
import { validateReportResponse } from "../utils/responseValidator.js";

export const options = {
  vus: 1,
  iterations: 1
};

export default function () {
  const data = {
    EventId: "id",
    EventConsumersIds: eventConsumersIds,
  };
  const reportPdf = command("Reports/management/eventConsumers/pdf", data, "management");
  validateReportResponse(reportPdf);
}