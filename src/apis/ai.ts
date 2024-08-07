import Groq from "groq-sdk";


const groq = new Groq({ apiKey: "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" });
export async function aiTalk() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "hello",
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
    console.log(chunk.choices[0]?.delta?.content || "");
    
  }

  return {
    
  };
}


