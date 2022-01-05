import Parse from "parse";

const fetch = require("node-fetch");

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