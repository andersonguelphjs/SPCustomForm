<link rel="stylesheet" title='bootstrap' type="text/css" href="/sites/it/Style Library/js/customForm/css/spBootstrap.css">
<!--link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css"-->
<div id='spBootstrap'></div><!--use this id if you want to use bootstrap styling-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<!--script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script-->
<script src="/sites/it/Style Library/js/customForm/js/ribbonRichText.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script id="getCustomForm" src="/sites/it/Style Library/js/customForm/js/SPCustomForm.js"></script>
<script src="/sites/it/Style Library/js/customForm/js/jspdf.debug.js"></script>
<script src="/sites/it/Style Library/js/customForm/js/jspdf.plugin.autotable.min.js"></script>
<script src="/_layouts/15/sp.js"></script>
<script src="/_layouts/15/sp.runtime.js"></script>
<script src="/_layouts/15/sp.core.js"></script>
<script src="/_layouts/15/clienttemplates.js"></script>
<script src="/_layouts/15/clientforms.js"></script>
<script src="/_layouts/15/clientpeoplepicker.js"></script>
<script src="/_layouts/15/autofill.js"></script>
<script src="/_layouts/15/datepicker.js"></script>
<script>
//e.g./sites/it/SP/SitePages/getCustomForm.aspx?&ID=1&listGuid=BD81C2B1-0178-4A7A-A54E-42B697C51F88
///sites/it/SP/SitePages/getCustomForm.aspx?&ID=14&listGuid=3EEA7575-EF94-44D6-B566-1275EB443AD3
function getQueryStringParam(paramName) {
  //handle a url like such as : Form.aspx?&ID=1&listGuid=BD81C2B1-0178-4A7A-A54E-42B697C51F88
  var urlParams = [],
    match,
    pl = /\+/g, //
    search = /([^&=]+)=?([^&]*)/g,
    decode = function(s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2]);
  }

  return urlParams[paramName];

}
//we make a page for each type of form
$("#spBootstrap").formify({
scriptFolder :"/sites/it/Style Library/js/customForm/",//(required) folder of module
listGuid : "E9545C83-A13C-4966-9EA9-BF2CBB8EDC8F",//getQueryStringParam("listGuid"), //(required) list GUID by query string or literal e.g. "3EEA7575-EF94-44D6-B566-1275EB443AD3"
isEditForm : true, //Edit Form or Display Form; if not included will be false
itemId : 3,
//displayArray:["email"], //make read only while not in array are editable//use internal names
//hiddenFields:["Mail2013","Attachments"],//use internal names
adminId: 2,
listTitle:"My Custom Form"
//removeBoostrapCSS:true//,//getQueryStringParam("ID"), //if not included it is a New Form, can give literal as well
//htmlUrl : "/sites/it/Style Library/js/customForm/example.html" //if not supplied, will use a 2 column bootstrap table; if supplied supply everything
//cssUrl : "/sites/it/Style Library/js/customForm/example.css",//style your form
//jsUrl : "/sites/it/Style Library/js/customForm/example.js"//add extra functionality
})
/*
var modalUrl = settings.scriptFolder + "modal.html"; //change if you want
link
remove bootstrap styling
*/
</script>
