/*  Destroy any DijitWidgets are alive!!*/

function cleanDijitWidgets() {
  if (dijit.byId('myform')) {
    dijit.byId('myform').destroyRecursive();
  }
}

cleanDijitWidgets();

dojo.parser.parse('container');
autoAdvance = 'yes';
onFormLoad();


fnConvertJsonToForm('manualEntry:itemResponses', 'myform');
console.log("autoAdvance :" + autoAdvance)
function saveToJson() {
  document.getElementById('formDiv').innerHTML = dojo.formToJson('myform');
}


function disableItemEntries(disable) {
  var widgets = dojo.query('[widgetId][class~=dijitTextBox]', dijit.byId('irTab').domNode).map(dijit.byNode);
  for (i = 0; i < widgets.length; i++) {
    widgets[i].set('disabled', disable);
  }

  (dojo.byId('showItemText')).disabled = disable;

}

function validateItem() {

}
