### The Project

The project was built using Postgresql for the database and heroku as the host.

### API 
* GET /forms/html/{shopify_store_doman}/{form_id} - returns HTML content of form ready for ajax injection to dom
* GET /forms/{shopify_store_doman}/{form_id} - returns JSON content of form ready for parsing
* PUT /forms/{shopify_store_doman}/{form_id} - requires the following parameters to update a form
  * title (string)
  * content (html)
* POST /forms/ - creates new data which requires the following parameters 
  * store (string)
  * title (string)
  * content (html)
* DELETE /forms/{shopify_store_doman}/{} - deletes form data 
