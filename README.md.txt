
SPCustomForm

Overview

SPCustomForm is a preliminary attempt at an MVC framewok for boring SharePoint forms.

You can supply and thus interchange the html, css and js to an existing sharepoint list.

SPCustomForm will handle CRUD operations as attachments

SPCustomForm is a content editor enable js file, written in as a jQuery plug-in

SPCustomForm supports most field types including user, multi-user, lookup and multilookup


How to:
1. Put the folder contents in an accessible location in SharePoint, such as within the Style Library.
2. Create an empty JavaScript file on the server in an accessible location in SharePoint
3. Add the script template to the JavaScript file using required variables and the folder url of step 1 where necessary. see putOnWebPartPage.js
4. Create a web part page that has access to the files of step 1 and step 2
5. Add a content editor to the web part page, and link to the JavaScript file
6. Test by reloading or linking to the web part page with GUID (and ID) parameters e.g. /yourpage.aspx?&ID=1&listGuid=BD81C2B1-0178-4A7A-A54E-42B697C51F88
