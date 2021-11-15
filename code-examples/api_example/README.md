
# API EXAMPLE

This is an example API for sending data requests back to a user from the varieties dataset:
https://www.wineaustralia.com/getmedia/5c28183c-9340-4e31-9924-42d97cdc1fae/Australian-OIV-List-012017.pdf

## Get Running

Clone the repo, from the repo home directory run the following commands: 

`cd code-examples/api-example`

then 

`npm install`

this will then install the dependancies, to run the server:

`npm start`

this will then run at http://localhost:8080

## Using API

`/` - Entrypoint for api.

`/all` - Returns the entire dataset.

`/top` - Filters the dataset and only returns the top 10 varieties. 

`/:id` - Filters the dataset and only returns the item with that ID. Example `/1`



