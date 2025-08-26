import { command } from "../utils/requestHelper.js";
import { validateReportResponse } from "../utils/responseValidator.js";

export const options = {
  vus: 1,
  iterations: 1
};

export default function () {
  const data = {
    EventId: "id",
    IncludeWithoutDepartment: true,
  };
  const reportExcel = command("Reports/management/companyActivities/excel", data, "management");
  validateReportResponse(reportExcel);
}