import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: "sk-b861cbcef8d19fc425616d26310a127e", // Assuming the API key is stored in an environment variable named Api_Secret
  baseURL: "https://api.atomecho.cn/v1",
});

export async function aiAPI() {
  try {
    const completion = await client.chat.completions.create({
      model: "Atom-7B-Chat",
      messages: [{ role: "user", content: "请介绍一下Llama社区" }],
      temperature: 0.3,
    });

    console.log(completion.choices[0].message);
  } catch (error) {
    console.error("Error:", error);
  }
}
