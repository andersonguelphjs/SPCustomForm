<style>
body{
  display:none !important;
}
</style>
<script>
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

var url = document.URL;
var id;
var newUrl = "/sites/it/SP/SitePages/customFormTestEdit.aspx?";
console.log("url "+url);
if (url.indexOf("NewForm.aspx")!==-1){
  newUrl += "&isEdit=true";
  console.log("new "+newUrl);
}
else if (url.indexOf("EditForm.aspx")!==-1){
  id = getQueryStringParam("ID");
  newUrl += "&isEdit=true&itemID="+id;
  console.log("edit "+newUrl);
}
else if (url.indexOf("DispForm.aspx"!==-1)){
  id = getQueryStringParam("ID");
  newUrl += "&itemID="+id;
}
window.location=newUrl;
console.log(_spPageContextInfo);

</script>
