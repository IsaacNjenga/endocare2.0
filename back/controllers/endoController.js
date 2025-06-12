import { CohereClient } from "cohere-ai";
import dotenv from "dotenv";
dotenv.config();

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

const EndoAI = async (req, res) => {
  const { patientContext } = req.body;
  if (!patientContext)
    return res.status(404).json({ error: "No context specified for the AI" });
  try {
    const prompt = `You are a friendly and knowledgeable medical assistant speaking directly to a patient with chronic conditions.
Based on their medical history and daily logs, offer helpful and personalized advice to improve their health.

Speak in a warm, encouraging tone and talk directly to the patient using "you" instead of "the patient".
Avoid formal or clinical language unless necessary.

Patient info:
${JSON.stringify(patientContext, null, 2)}

Provide your suggestions clearly under these sections:
 - Summary of Your Current Situation
 - Things to Watch Out For
 - What You Can Do To Improve (Lifestyle, Diet, Medication)`;

    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      max_token: 300,
      temperature: 0.8,
    });

    res
      .status(200)
      .json({ success: true, reply: response.generations[0].text.trim() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { EndoAI };
