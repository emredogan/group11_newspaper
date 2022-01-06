import React, { Component } from "react";
import cookie from "react-cookies";

import { googleTranslate } from "./utils/googleTranslate";

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

export const googleTranslate = require("google-translate")(apiKey);

function Translation(){
  state = {
    languageCodes: [],
    language: cookie.load("language") ? cookie.load("language") : "en",
    question: cookie.load("question")
      ? cookie.load("question")
      : "What language do you prefer to read with?"
  };

  componentDidMount() ,
    // load all of the language options from Google Translate to your app state

    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      this.setState({ languageCodes });
    };
  }

  render() ;
    const { languageCodes, language, question } = this.state;

    return (
      <div style={this.divStyle}>
        <p>{question}</p>

        {/* iterate through language options to create a select box */}
        <select
          className="select-language"
          value={language}
          onChange={e => this.changeHandler(e.target.value)}
        >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  


  // just some inline css to center our demo
  divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100wh"
  };

