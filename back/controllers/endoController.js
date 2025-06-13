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

Speak in a warm, positive,friendly and encouraging tone and talk directly to the patient using "you" instead of "the patient".
Avoid formal or clinical language unless necessary.

Patient info:
${JSON.stringify(patientContext, null, 2)}

Format your response clearly using markdown like so:

## Summary of Current Situation (Date of the entry)
Generate a concise summary based on the input

## Identified Patterns or Concerns
List any trends or issues noticed (e.g., inconsistent medication, elevated sugar levels, etc.)

## Recommendations
- Lifestyle & Physical Activity: advice here
- Diet & Blood Sugar: advice here
- Medication adherence relating to the symptoms listed: advice here
- Mood elevation/optimization: advice here

Keep the tone friendly, direct, and supportive.`;

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
