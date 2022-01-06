import Parse from "parse";

const fetch = require("node-fetch");

Parse.Cloud.define("getEnvironmentVariable", (request) => {
  const REACT_APP_PARSE_API_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_API_JAVASCRIPT_KEY;
  const REACT_APP_PARSE_API_APPLICATION_KEY = process.env.REACT_APP_PARSE_API_APPLICATION_KEY;
  const REACT_APP_PARSE_API_MASTER_KEY = process.env.REACT_APP_PARSE_API_MASTER_KEY;


  return [`JAVASCRIPT_KEY = ${JAVASCRIPT_KEY}`, `APPLICATION_KEY = ${APPLICATION_KEY}`, `MASTER_KEY = ${MASTER_KEY}`]
});

Parse.Cloud.define("google_translate", async (request) => {
  let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`;
  url += `&format=text&source=da&target=en&q=${encodeURIComponent(
    request.params.word_to_translate
  )}`;

  response = await fetch(url);
  result = await response.json();
  const translated_string = result.data.translations[0].translatedText;
  return translated_string;
});