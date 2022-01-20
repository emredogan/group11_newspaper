export function RestAPI() {
    // REST API CALL POST
  const postData = {
    title: "mir3_rest",
    description: "secret_rest",
  };

  try {
    // const response = await fetch("https://parseapi.back4app.com/users/, if you want to post a user use this one.
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Task/",

      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
          "X-Parse-REST-API-Key": "Fsl5RGfjEbhMPls5RMprv43ojWEboqwT2I4xmapo",
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      const message = "Error with Status Code: " + response.status;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }

  // REST API CALL GET
  const rawResponse = await fetch(
    "https://parseapi.back4app.com/classes/Task",
    {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "oHPQf2X0grpeXteCxywdMAvZ6BaV3lj1o3SUJ4pJ",
        "X-Parse-REST-API-Key": "Fsl5RGfjEbhMPls5RMprv43ojWEboqwT2I4xmapo",
      },
    }
  );
  const content = await rawResponse.json();
  console.log("GET", content);
}

export default RestAPI; 
