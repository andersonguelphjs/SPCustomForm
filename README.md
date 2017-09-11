# SPCustomForm

Overview

SPCustomForm is an MVC framewok for boring SharePoint forms, written as a jQuery plug-in.

SPCustomForm allows you to skin your form with your html, css and js to an existing sharepoint list.

SPCustomForm will create a 2-column Bootstrap form if you don't provide html.

SPCustomForm will handle CRUD operations and attachments

SPCustomForm supports all OOTB field types including user, multi-user, multilookup

SPCustomForm can print the form to PDF

SPCustomForm can toggle between Display and Edit


How to:
1. Unzip in SharePoint.
2. Copy contents of putOnWebPartPage.js (template) to js file using required variables and the folder url of step 1 where necessary.
4. Create a web part page with content editor web part and add your js file
5. Copy contents of redirect file (template) to new js file, add location of your web part page, on NewForm, EditForm and DispForm