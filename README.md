## About The Project

This application provides search results from the leading search engines: Google, Bing and Yahoo.
The ranked results are displayed next to each other to see what is return from each search engine using the same query.
The app is minimally stylized and can be modified to fit your needs.
For the app to function properly you must get an API key from Serpwow.

### Inspiration

Inspiration for the project sprang from individuals that claim search engine results are biased and not objective so the purpose of the app is to confirm or deny their suspicions. The name reverse bias is a playon of an electronic principle.

### Built With

* React
* Redux
* Javascript
* Bootstrap

### Dependencies

* Get a free API Key at https://serpwow.com/

### Getting Started

1. Clone repo to your local environment
```
git clone git@github.com:fkmccallion/reverse-bias.git
```
2. Install npm dependencies
```
npm install
```
3. Create .env file in root directory and add Serpwow Key
```
REACT_APP_SERPWOW_KEY=<key>
```
4. Comment out dummy objects in queries.js action and uncomment fetch requests
5. You are ready to start searching
