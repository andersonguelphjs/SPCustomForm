# SPCustomForm

Overview

SPCustomForm is a preliminary attempt at an MVC framewok for boring SharePoint forms, written as a jQuery plug-in.

As plug-in parameters, you can supply and thus interchange the html, css and js to an existing sharepoint list.

SPCustomForm will handle CRUD operations and attachments

SPCustomForm supports most field types including user, multi-user, lookup and multilookup


How to:
1. Unzip in SharePoint.
2. Copy contents of putOnWebPartPage.js (template) to js file using required variables and the folder url of step 1 where necessary.
4. Create a web part page with content editor web part and add your js file
5. Copy contents of redirect file (template) to new js file, add location of your web part page, on NewForm, EditForm and DispForm