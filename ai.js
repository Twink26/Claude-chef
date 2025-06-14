import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. The recipe can include additional ingredients. Format your response in markdown.
`;

const client = new InferenceClient({
  token: import.meta.env.VITE_HUGGINGFACE_API_KEY, // ✅ For Vite
});

export async function getrecipefromai(ingredientsArr) {
  const prompt = `
${SYSTEM_PROMPT}
User ingredients: ${ingredientsArr.join(", ")}
`;

  try {
    const response = await client.textGeneration({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      inputs: prompt,
      parameters: {
        max_new_tokens: 400,
        temperature: 0.7,
        return_full_text: false,
      },
    });

    console.log("AI Response:", response.generated_text);
    return response.generated_text;
  } catch (err) {
    console.error("API Error:", err.message);
    return "❌ Could not fetch recipe.";
  }
}
