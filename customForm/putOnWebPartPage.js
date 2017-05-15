<link rel="stylesheet" type="text/css" href="/Style Library/js/customForm/spBootstrap.css">
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
﻿<div id='spBootstrap'></div><!--use this id if you want to use bootstrap styling-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="/Style Library/js/customForm/ribbonRichText.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script id="getCustomForm" src="/Style Library/js/customForm/SPCustomForm.js"></script>
<script src="/_layouts/15/sp.js"></script>
<script src="/_layouts/15/sp.runtime.js"></script>
<script src="/_layouts/15/sp.core.js"></script>
<script src="/_layouts/15/clienttemplates.js"></script>
<script src="/_layouts/15/clientforms.js"></script>
<script src="/_layouts/15/clientpeoplepicker.js"></script>
<script src="/_layouts/15/autofill.js"></script>
<script>
//Put this code with your own params on a web part page in a content editor
//Then call the page with query string parameters ID and listGuid
//e.g./SitePages/getCustomForm.aspx?&ID=1&listGuid=BD81C2B1-0178-4A7A-A54E-1275EB443AD3

$("#spBootstrap").formify({
scriptFolder :"/Style Library/js/customForm/",//(required) folder of module
listGuid : getQueryStringParam("listGuid"), //(required) list GUID by query string or literal e.g. "BD81C2B1-0178-4A7A-A54E-1275EB443AD3"
isEditForm : true, //Edit Form or Display Form; if not included will be false
itemId : getQueryStringParam("ID"), //if not included it is a New Form, can give literal as well
htmlUrl : "/Style Library/js/customForm/example.html" //if not supplied, will use a 2 column bootstrap table
//cssUrl : "/Style Library/js/customForm/example.css",//style your form
//jsUrl : "/Style Library/js/customForm/example.js"//add extra functionality
//hiddenFields : ["ParentID"], //not yet implemented
})

</script>
