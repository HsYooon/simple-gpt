import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-b5JAEhnrXbyCjozsu6QuOI5H",
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const context = req.body;
  var query = req.body.query;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: query }],
  });
  console.log("response : " + response.data.choices[0].message.content);
  res.status(200).json({ answer: response.data.choices[0].message.content });
}
