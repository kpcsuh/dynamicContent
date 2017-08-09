function loadResponses() {
  if (dojo.byId("reportOptionForm")) {
    fnConvertJsonToForm("reportOptionForm:reportOptionsJsonFormData", "reportOptionForm");
  } else {
    fnConvertJsonToForm("reportOptionForm:reportOptionsJsonFormData", "reportOptionsForm");
  }
}



function afterReportOptionsLoad() {
  try {
    if(onReportOptionsLoad) {
      onReportOptionsLoad();
    }
  } catch(e) {
    console.log(e);
  }
}
var newStyle  = 0;
// If using old style report options simply pull in the JSON from the form.
// If using new style report options, clear the JSON value (-why?)
function fnConvertReportOptionsToJSON() {
  var formJson = dojo.formToJson(getReportOptionHtmlFormId());
  if (newStyle == 0) {
    document.getElementById("reportOptionForm:reportOptionsJsonFormData").value = formJson;
  } else {
    document.getElementById("reportOptionForm:reportOptionsJsonFormData").value = "";
  }

  console.log("Responses :" + formJson);
}

loadResponses();
afterReportOptionsLoad();
