import Parse from "parse"

export async function translateWordRequest(from) {
    let result = await Parse.Cloud.run("google_translate", {
        from: from,
      });
    return result

}
