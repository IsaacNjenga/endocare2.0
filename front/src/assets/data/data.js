import { FrownOutlined, SmileOutlined } from "@ant-design/icons";

export const endocrineIllnesses = [
  {
    name: "Adrenal Fatigue",
    sections: {
      "Definition & Overview": `
      <div style="position: relative; padding: 20px; border-radius: 10px; color: #fff; background-image: url('https://images.unsplash.com/photo-1715529282062-773305ae0178?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWRyZW5hbCUyMGZhdGlndWV8ZW58MHx8MHx8fDA%3D'); background-size: cover; background-position: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); font-family: 'Raleway', sans-serif;">
  <div style="background-color: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px; max-width: 800px; text-align: left;">
    <h1 style="font-size: 2em; margin-bottom: 10px; font-family: 'Roboto', sans-serif;"><strong>Understanding Adrenal Fatigue</strong></h1>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      Adrenal fatigue is a term used to describe a collection of nonspecific symptoms, such as chronic tiredness, sleep disturbances, and cravings for salt and sugar, believed to result from prolonged stress and the overworking of the adrenal glands.
    </p>
    
    <h2 style="font-size: 1.5em; margin-top: 20px; font-family: 'Roboto', sans-serif;"><strong>Role of the Adrenal Glands:</strong></h2>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      The adrenal glands are crucial for producing hormones such as cortisol and adrenaline, which help the body respond to stress.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      <strong>HPA Axis Involvement:</strong> Chronic stress can disrupt the hypothalamo-pituitary-adrenal (HPA) axis, leading to hormonal imbalance.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      <strong>Symptoms often include:</strong>
    </p>
    <ul style="font-size: 1.1em; line-height: 1.6; padding-left: 20px; margin-bottom: 20px;">
      <li>Persistent tiredness</li>
      <li>Difficulty sleeping</li>
      <li>Cravings for salty or sugary foods</li>
      <li>Body aches and pains</li>
      <li>Digestive problems</li>
    </ul>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      <strong>Controversy:</strong> Many experts consider adrenal fatigue a myth, suggesting symptoms may relate more to conditions like chronic fatigue syndrome or depression.
    </p>
    <p style="font-size: 1.1em; line-height: 1.6;">
      While adrenal fatigue is a widely discussed condition, its medical validity is still under debate.
    </p>
  </div>
</div>

 `,
      "Recommended Meal Plan": `
      <div style="position: relative; padding: 20px; border-radius: 10px; color: #fff; background-image: url('https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhbCUyMHBsYW58ZW58MHx8MHx8fDA%3D'); background-size: cover; background-position: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); font-family: 'Roboto', sans-serif;">
  <div style="background-color: rgba(0, 0, 0, 0.5); padding: 30px; border-radius: 10px;">
    <h2 style="font-size: 2.2em; margin-bottom: 20px; font-family: 'Raleway', sans-serif;">🍽️ Meal Plan</h2>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 30px;">
      A well-structured meal plan should focus on nutrient-dense foods to support energy ⚡ and hormone balance 🔄.
    </p>
    
    <hr style="border: 1px solid #fff; margin: 20px 0;" />

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
      <div>
        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif;">🌅 Breakfast (8:00 AM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🥚 Scrambled eggs with spinach & tomatoes</li>
          <li>🍞 Whole-grain toast</li>
          <li>🍋 Warm lemon water</li>
        </ul>

        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif; margin-top: 25px;">🍎 Morning Snack (9:00 AM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🥜 Handful of almonds or walnuts</li>
          <li>🍐 Apple or pear</li>
        </ul>

        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif; margin-top: 25px;">🥗 Lunch (11:00 AM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🍗 Grilled chicken salad with greens & veggies</li>
          <li>🫒 Olive oil & lemon dressing</li>
          <li>🍚 Side of quinoa</li>
        </ul>
      </div>

      <div>
        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif;">🕑 Afternoon Snack (2:00 PM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🥣 Greek yogurt with chia seeds</li>
          <li>🫐 Blueberries or strawberries</li>
        </ul>

        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif; margin-top: 25px;">🌇 Dinner (5:00 PM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🐟 Baked salmon</li>
          <li>🥦 Steamed broccoli</li>
          <li>🍚 Brown rice or quinoa</li>
        </ul>

        <h4 style="font-size: 1.4em; font-family: 'Raleway', sans-serif; margin-top: 25px;">🌙 Evening Snack (7:00 PM)</h4>
        <ul style="list-style: none; padding-left: 0; line-height: 1.6;">
          <li>🥕 Hummus with carrot/cucumber sticks</li>
          <li>🍵 Chamomile or peppermint tea</li>
        </ul>
      </div>
    </div>

    <p style="font-size: 1.1em; line-height: 1.6; margin-top: 30px;">
      💧 <strong>Hydration Tip:</strong> Drink at least 8 glasses of water daily. Herbal teas & broths count too!
    </p>
  </div>
</div>

`,
      "Workout & Lifestyle": `
      <div style="position: relative; padding: 20px; border-radius: 10px; color: #fff; background-image: url('https://plus.unsplash.com/premium_photo-1666736570001-090f71dbe53f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMG91dHxlbnwwfHwwfHx8MA%3D%3D'); background-size: cover; background-position: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); font-family: 'Raleway', sans-serif;">
  <div style="background-color: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px;">
    <h2 style="font-size: 2em; margin-bottom: 20px; font-family: 'Roboto', sans-serif;">Workout Advice for Adrenal Fatigue</h2>
    <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;">
      Gentle, restorative workouts are essential. Avoid high-intensity training to prevent further adrenal strain.
    </p>
    <h4 style="font-size: 1.5em; margin-top: 20px;">Recommended Activities</h4>
    <ul style="list-style-type: none; padding-left: 0; font-size: 1.1em; line-height: 1.6;">
      <li><strong>Walking:</strong> 3-5 times/week for 20–30 minutes</li>
      <li><strong>Yoga:</strong> 2-3 times/week (restorative or gentle flow)</li>
      <li><strong>Light Cycling:</strong> 1-2 times/week outdoors or on a stationary bike</li>
      <li><strong>Swimming:</strong> 1-2 times/week (light laps or water aerobics)</li>
      <li><strong>Stretching:</strong> 2-3 times/week to maintain flexibility</li>
    </ul>
    <p style="font-size: 1.1em; line-height: 1.6; margin-top: 20px;">
      <strong>Recovery is key:</strong> Ensure adequate rest and avoid overtraining.
    </p>
  </div>
</div>
`,
      "Extra Tips": `
      <div style="position: relative; padding: 20px; border-radius: 10px; color: #fff; background-image: url('https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VsbG5lc3N8ZW58MHx8MHx8fDA%3D'); background-size: cover; background-position: center; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); font-family: 'Raleway', sans-serif;">
      <div style="background-color: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px;">
        <h2 style="font-size: 2em; margin-bottom: 20px; font-family: 'Roboto', sans-serif;">Tips for Managing Adrenal Fatigue</h2>
        <ol style="font-size: 1.1em; line-height: 1.6; padding-left: 20px;">
          <li><strong>Prioritize Sleep:</strong> 7–9 hours of consistent, quality rest with a bedtime routine.</li>
          <li><strong>Manage Stress:</strong> Practice mindfulness, deep breathing, journaling.</li>
          <li><strong>Stay Hydrated:</strong> Limit caffeine/alcohol, drink plenty of water and herbal teas.</li>
          <li><strong>Balanced Nutrition:</strong> Emphasize whole foods and avoid processed sugar.</li>
          <li><strong>Meal Timing:</strong> Eat small, balanced meals/snacks regularly.</li>
          <li><strong>Limit Stimulants:</strong> Avoid caffeine and nicotine; choose decaf or herbal tea.</li>
          <li><strong>Gentle Movement:</strong> Walk, stretch, or swim without overexertion.</li>
          <li><strong>Seek Support:</strong> Work with a healthcare provider or join a support group.</li>
          <li><strong>Avoid Overcommitment:</strong> Learn to say no and make time for self-care.</li>
          <li><strong>Track Progress:</strong> Keep a symptom journal and celebrate small wins.</li>
        </ol>
        <p style="font-size: 1.1em; line-height: 1.6; margin-top: 20px;">
          These practices can foster a better recovery environment and promote long-term well-being.
        </p>
      </div>
    </div>
`,
    },
  },
  {
    name: "Cortisol",
    sections: {
      "Definition & Overview": `
   <div>
     <h2>Understanding Cortisol</h2>
     <Typography.Paragraph>
       Adrenal fatigue is a term used to describe a collection of nonspecific symptoms, such as chronic tiredness, sleep disturbances, and cravings for salt and sugar, believed to result from prolonged stress and the overworking of the adrenal glands.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Role of the Adrenal Glands:</strong> The adrenal glands are crucial for producing hormones such as cortisol and adrenaline, which help the body respond to stress.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>HPA Axis Involvement:</strong> Chronic stress can disrupt the hypothalamo-pituitary-adrenal (HPA) axis, leading to hormonal imbalance.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Symptoms often include:</strong>
     </Typography.Paragraph>
     <ul>
       <li>Persistent tiredness</li>
       <li>Difficulty sleeping</li>
       <li>Cravings for salty or sugary foods</li>
       <li>Body aches and pains</li>
       <li>Digestive problems</li>
     </ul>
     <Typography.Paragraph>
       <strong>Controversy:</strong> Many experts consider adrenal fatigue a myth, suggesting symptoms may relate more to conditions like chronic fatigue syndrome or depression.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Conclusion:</strong> While adrenal fatigue is a widely discussed condition, its medical validity is still under debate.
     </Typography.Paragraph>
   </div>
 `,
      MealPlan: `
 <div>
   <h2>Meal Plan for Adrenal Fatigue</h2>
   <Typography.Paragraph>
     A well-structured meal plan should focus on nutrient-dense foods to support energy and hormone balance.
   </Typography.Paragraph>
   <Divider />
   <Typography.Title level={4}>Breakfast (8:00 AM)</Typography.Title>
   <ul>
     <li>Scrambled eggs with spinach and tomatoes</li>
     <li>Whole-grain toast</li>
     <li>Warm lemon water</li>
   </ul>
   <Typography.Title level={4}>Morning Snack (9:00 AM)</Typography.Title>
   <ul>
     <li>Handful of almonds or walnuts</li>
     <li>Low-sugar fruit (apple or pear)</li>
   </ul>
   <Typography.Title level={4}>Lunch (11:00 AM)</Typography.Title>
   <ul>
     <li>Grilled chicken salad with leafy greens and colorful veggies</li>
     <li>Olive oil & lemon dressing</li>
     <li>Side of quinoa</li>
   </ul>
   <Typography.Title level={4}>Afternoon Snack (2:00 PM)</Typography.Title>
   <ul>
     <li>Greek yogurt with chia seeds</li>
     <li>Berries (blueberries or strawberries)</li>
   </ul>
   <Typography.Title level={4}>Dinner (5:00 PM)</Typography.Title>
   <ul>
     <li>Baked salmon</li>
     <li>Steamed broccoli</li>
     <li>Brown rice or quinoa</li>
   </ul>
   <Typography.Title level={4}>Evening Snack (7:00 PM)</Typography.Title>
   <ul>
     <li>Hummus with carrot/cucumber sticks</li>
     <li>Chamomile or peppermint tea</li>
   </ul>
   <Typography.Paragraph>
     <strong>Hydration:</strong> Drink at least 8 glasses of water daily; herbal teas and broths also help.
   </Typography.Paragraph>
 </div>
`,
      Workout: `
<div>
  <h2>Workout Advice for Adrenal Fatigue</h2>
  <Typography.Paragraph>
    Gentle, restorative workouts are essential. Avoid high-intensity training to prevent further adrenal strain.
  </Typography.Paragraph>
  <Typography.Title level={4}>Recommended Activities</Typography.Title>
  <ul>
    <li><strong>Walking:</strong> 3-5 times/week for 20–30 minutes</li>
    <li><strong>Yoga:</strong> 2-3 times/week (restorative or gentle flow)</li>
    <li><strong>Light Cycling:</strong> 1-2 times/week outdoors or on a stationary bike</li>
    <li><strong>Swimming:</strong> 1-2 times/week (light laps or water aerobics)</li>
    <li><strong>Stretching:</strong> 2-3 times/week to maintain flexibility</li>
  </ul>
  <Typography.Paragraph>
    <strong>Recovery is key:</strong> Ensure adequate rest and avoid overtraining.
  </Typography.Paragraph>
</div>
`,
      Tips: `
<div>
  <h2>Tips for Managing Adrenal Fatigue</h2>
  <ol>
    <li><strong>Prioritize Sleep:</strong> 7–9 hours of consistent, quality rest with a bedtime routine.</li>
    <li><strong>Manage Stress:</strong> Practice mindfulness, deep breathing, journaling.</li>
    <li><strong>Stay Hydrated:</strong> Limit caffeine/alcohol, drink plenty of water and herbal teas.</li>
    <li><strong>Balanced Nutrition:</strong> Emphasize whole foods and avoid processed sugar.</li>
    <li><strong>Meal Timing:</strong> Eat small, balanced meals/snacks regularly.</li>
    <li><strong>Limit Stimulants:</strong> Avoid caffeine and nicotine; choose decaf or herbal tea.</li>
    <li><strong>Gentle Movement:</strong> Walk, stretch, or swim without overexertion.</li>
    <li><strong>Seek Support:</strong> Work with a healthcare provider or join a support group.</li>
    <li><strong>Avoid Overcommitment:</strong> Learn to say no and make time for self-care.</li>
    <li><strong>Track Progress:</strong> Keep a symptom journal and celebrate small wins.</li>
  </ol>
  <Typography.Paragraph>
    These practices can foster a better recovery environment and promote long-term well-being.
  </Typography.Paragraph>
</div>
`,
    },
  },
  {
    name: "PCOS",
    sections: {
      Overview: `
   <div>
     <h2>Understanding Adrenal Fatigue</h2>
     <Typography.Paragraph>
       Adrenal fatigue is a term used to describe a collection of nonspecific symptoms, such as chronic tiredness, sleep disturbances, and cravings for salt and sugar, believed to result from prolonged stress and the overworking of the adrenal glands.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Role of the Adrenal Glands:</strong> The adrenal glands are crucial for producing hormones such as cortisol and adrenaline, which help the body respond to stress.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>HPA Axis Involvement:</strong> Chronic stress can disrupt the hypothalamo-pituitary-adrenal (HPA) axis, leading to hormonal imbalance.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Symptoms often include:</strong>
     </Typography.Paragraph>
     <ul>
       <li>Persistent tiredness</li>
       <li>Difficulty sleeping</li>
       <li>Cravings for salty or sugary foods</li>
       <li>Body aches and pains</li>
       <li>Digestive problems</li>
     </ul>
     <Typography.Paragraph>
       <strong>Controversy:</strong> Many experts consider adrenal fatigue a myth, suggesting symptoms may relate more to conditions like chronic fatigue syndrome or depression.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Conclusion:</strong> While adrenal fatigue is a widely discussed condition, its medical validity is still under debate.
     </Typography.Paragraph>
   </div>
 `,
      MealPlan: `
 <div>
   <h2>Meal Plan for Adrenal Fatigue</h2>
   <Typography.Paragraph>
     A well-structured meal plan should focus on nutrient-dense foods to support energy and hormone balance.
   </Typography.Paragraph>
   <Divider />
   <Typography.Title level={4}>Breakfast (8:00 AM)</Typography.Title>
   <ul>
     <li>Scrambled eggs with spinach and tomatoes</li>
     <li>Whole-grain toast</li>
     <li>Warm lemon water</li>
   </ul>
   <Typography.Title level={4}>Morning Snack (9:00 AM)</Typography.Title>
   <ul>
     <li>Handful of almonds or walnuts</li>
     <li>Low-sugar fruit (apple or pear)</li>
   </ul>
   <Typography.Title level={4}>Lunch (11:00 AM)</Typography.Title>
   <ul>
     <li>Grilled chicken salad with leafy greens and colorful veggies</li>
     <li>Olive oil & lemon dressing</li>
     <li>Side of quinoa</li>
   </ul>
   <Typography.Title level={4}>Afternoon Snack (2:00 PM)</Typography.Title>
   <ul>
     <li>Greek yogurt with chia seeds</li>
     <li>Berries (blueberries or strawberries)</li>
   </ul>
   <Typography.Title level={4}>Dinner (5:00 PM)</Typography.Title>
   <ul>
     <li>Baked salmon</li>
     <li>Steamed broccoli</li>
     <li>Brown rice or quinoa</li>
   </ul>
   <Typography.Title level={4}>Evening Snack (7:00 PM)</Typography.Title>
   <ul>
     <li>Hummus with carrot/cucumber sticks</li>
     <li>Chamomile or peppermint tea</li>
   </ul>
   <Typography.Paragraph>
     <strong>Hydration:</strong> Drink at least 8 glasses of water daily; herbal teas and broths also help.
   </Typography.Paragraph>
 </div>
`,
      Workout: `
<div>
  <h2>Workout Advice for Adrenal Fatigue</h2>
  <Typography.Paragraph>
    Gentle, restorative workouts are essential. Avoid high-intensity training to prevent further adrenal strain.
  </Typography.Paragraph>
  <Typography.Title level={4}>Recommended Activities</Typography.Title>
  <ul>
    <li><strong>Walking:</strong> 3-5 times/week for 20–30 minutes</li>
    <li><strong>Yoga:</strong> 2-3 times/week (restorative or gentle flow)</li>
    <li><strong>Light Cycling:</strong> 1-2 times/week outdoors or on a stationary bike</li>
    <li><strong>Swimming:</strong> 1-2 times/week (light laps or water aerobics)</li>
    <li><strong>Stretching:</strong> 2-3 times/week to maintain flexibility</li>
  </ul>
  <Typography.Paragraph>
    <strong>Recovery is key:</strong> Ensure adequate rest and avoid overtraining.
  </Typography.Paragraph>
</div>
`,
      Tips: `
<div>
  <h2>Tips for Managing Adrenal Fatigue</h2>
  <ol>
    <li><strong>Prioritize Sleep:</strong> 7–9 hours of consistent, quality rest with a bedtime routine.</li>
    <li><strong>Manage Stress:</strong> Practice mindfulness, deep breathing, journaling.</li>
    <li><strong>Stay Hydrated:</strong> Limit caffeine/alcohol, drink plenty of water and herbal teas.</li>
    <li><strong>Balanced Nutrition:</strong> Emphasize whole foods and avoid processed sugar.</li>
    <li><strong>Meal Timing:</strong> Eat small, balanced meals/snacks regularly.</li>
    <li><strong>Limit Stimulants:</strong> Avoid caffeine and nicotine; choose decaf or herbal tea.</li>
    <li><strong>Gentle Movement:</strong> Walk, stretch, or swim without overexertion.</li>
    <li><strong>Seek Support:</strong> Work with a healthcare provider or join a support group.</li>
    <li><strong>Avoid Overcommitment:</strong> Learn to say no and make time for self-care.</li>
    <li><strong>Track Progress:</strong> Keep a symptom journal and celebrate small wins.</li>
  </ol>
  <Typography.Paragraph>
    These practices can foster a better recovery environment and promote long-term well-being.
  </Typography.Paragraph>
</div>
`,
    },
  },
  {
    name: "Type 1 Diabetes",
    sections: {
      Overview: `
   <div>
     <h2>Understanding Adrenal Fatigue</h2>
     <Typography.Paragraph>
       Adrenal fatigue is a term used to describe a collection of nonspecific symptoms, such as chronic tiredness, sleep disturbances, and cravings for salt and sugar, believed to result from prolonged stress and the overworking of the adrenal glands.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Role of the Adrenal Glands:</strong> The adrenal glands are crucial for producing hormones such as cortisol and adrenaline, which help the body respond to stress.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>HPA Axis Involvement:</strong> Chronic stress can disrupt the hypothalamo-pituitary-adrenal (HPA) axis, leading to hormonal imbalance.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Symptoms often include:</strong>
     </Typography.Paragraph>
     <ul>
       <li>Persistent tiredness</li>
       <li>Difficulty sleeping</li>
       <li>Cravings for salty or sugary foods</li>
       <li>Body aches and pains</li>
       <li>Digestive problems</li>
     </ul>
     <Typography.Paragraph>
       <strong>Controversy:</strong> Many experts consider adrenal fatigue a myth, suggesting symptoms may relate more to conditions like chronic fatigue syndrome or depression.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Conclusion:</strong> While adrenal fatigue is a widely discussed condition, its medical validity is still under debate.
     </Typography.Paragraph>
   </div>
 `,
      MealPlan: `
 <div>
   <h2>Meal Plan for Adrenal Fatigue</h2>
   <Typography.Paragraph>
     A well-structured meal plan should focus on nutrient-dense foods to support energy and hormone balance.
   </Typography.Paragraph>
   <Divider />
   <Typography.Title level={4}>Breakfast (8:00 AM)</Typography.Title>
   <ul>
     <li>Scrambled eggs with spinach and tomatoes</li>
     <li>Whole-grain toast</li>
     <li>Warm lemon water</li>
   </ul>
   <Typography.Title level={4}>Morning Snack (9:00 AM)</Typography.Title>
   <ul>
     <li>Handful of almonds or walnuts</li>
     <li>Low-sugar fruit (apple or pear)</li>
   </ul>
   <Typography.Title level={4}>Lunch (11:00 AM)</Typography.Title>
   <ul>
     <li>Grilled chicken salad with leafy greens and colorful veggies</li>
     <li>Olive oil & lemon dressing</li>
     <li>Side of quinoa</li>
   </ul>
   <Typography.Title level={4}>Afternoon Snack (2:00 PM)</Typography.Title>
   <ul>
     <li>Greek yogurt with chia seeds</li>
     <li>Berries (blueberries or strawberries)</li>
   </ul>
   <Typography.Title level={4}>Dinner (5:00 PM)</Typography.Title>
   <ul>
     <li>Baked salmon</li>
     <li>Steamed broccoli</li>
     <li>Brown rice or quinoa</li>
   </ul>
   <Typography.Title level={4}>Evening Snack (7:00 PM)</Typography.Title>
   <ul>
     <li>Hummus with carrot/cucumber sticks</li>
     <li>Chamomile or peppermint tea</li>
   </ul>
   <Typography.Paragraph>
     <strong>Hydration:</strong> Drink at least 8 glasses of water daily; herbal teas and broths also help.
   </Typography.Paragraph>
 </div>
`,
      Workout: `
<div>
  <h2>Workout Advice for Adrenal Fatigue</h2>
  <Typography.Paragraph>
    Gentle, restorative workouts are essential. Avoid high-intensity training to prevent further adrenal strain.
  </Typography.Paragraph>
  <Typography.Title level={4}>Recommended Activities</Typography.Title>
  <ul>
    <li><strong>Walking:</strong> 3-5 times/week for 20–30 minutes</li>
    <li><strong>Yoga:</strong> 2-3 times/week (restorative or gentle flow)</li>
    <li><strong>Light Cycling:</strong> 1-2 times/week outdoors or on a stationary bike</li>
    <li><strong>Swimming:</strong> 1-2 times/week (light laps or water aerobics)</li>
    <li><strong>Stretching:</strong> 2-3 times/week to maintain flexibility</li>
  </ul>
  <Typography.Paragraph>
    <strong>Recovery is key:</strong> Ensure adequate rest and avoid overtraining.
  </Typography.Paragraph>
</div>
`,
      Tips: `
<div>
  <h2>Tips for Managing Adrenal Fatigue</h2>
  <ol>
    <li><strong>Prioritize Sleep:</strong> 7–9 hours of consistent, quality rest with a bedtime routine.</li>
    <li><strong>Manage Stress:</strong> Practice mindfulness, deep breathing, journaling.</li>
    <li><strong>Stay Hydrated:</strong> Limit caffeine/alcohol, drink plenty of water and herbal teas.</li>
    <li><strong>Balanced Nutrition:</strong> Emphasize whole foods and avoid processed sugar.</li>
    <li><strong>Meal Timing:</strong> Eat small, balanced meals/snacks regularly.</li>
    <li><strong>Limit Stimulants:</strong> Avoid caffeine and nicotine; choose decaf or herbal tea.</li>
    <li><strong>Gentle Movement:</strong> Walk, stretch, or swim without overexertion.</li>
    <li><strong>Seek Support:</strong> Work with a healthcare provider or join a support group.</li>
    <li><strong>Avoid Overcommitment:</strong> Learn to say no and make time for self-care.</li>
    <li><strong>Track Progress:</strong> Keep a symptom journal and celebrate small wins.</li>
  </ol>
  <Typography.Paragraph>
    These practices can foster a better recovery environment and promote long-term well-being.
  </Typography.Paragraph>
</div>
`,
    },
  },
  {
    name: "Type 2 Diabetes",
    sections: {
      Overview: `
   <div>
     <h2>Understanding Adrenal Fatigue</h2>
     <Typography.Paragraph>
       Adrenal fatigue is a term used to describe a collection of nonspecific symptoms, such as chronic tiredness, sleep disturbances, and cravings for salt and sugar, believed to result from prolonged stress and the overworking of the adrenal glands.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Role of the Adrenal Glands:</strong> The adrenal glands are crucial for producing hormones such as cortisol and adrenaline, which help the body respond to stress.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>HPA Axis Involvement:</strong> Chronic stress can disrupt the hypothalamo-pituitary-adrenal (HPA) axis, leading to hormonal imbalance.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Symptoms often include:</strong>
     </Typography.Paragraph>
     <ul>
       <li>Persistent tiredness</li>
       <li>Difficulty sleeping</li>
       <li>Cravings for salty or sugary foods</li>
       <li>Body aches and pains</li>
       <li>Digestive problems</li>
     </ul>
     <Typography.Paragraph>
       <strong>Controversy:</strong> Many experts consider adrenal fatigue a myth, suggesting symptoms may relate more to conditions like chronic fatigue syndrome or depression.
     </Typography.Paragraph>
     <Typography.Paragraph>
       <strong>Conclusion:</strong> While adrenal fatigue is a widely discussed condition, its medical validity is still under debate.
     </Typography.Paragraph>
   </div>
 `,
      MealPlan: `
 <div>
   <h2>Meal Plan for Adrenal Fatigue</h2>
   <Typography.Paragraph>
     A well-structured meal plan should focus on nutrient-dense foods to support energy and hormone balance.
   </Typography.Paragraph>
   <Divider />
   <Typography.Title level={4}>Breakfast (8:00 AM)</Typography.Title>
   <ul>
     <li>Scrambled eggs with spinach and tomatoes</li>
     <li>Whole-grain toast</li>
     <li>Warm lemon water</li>
   </ul>
   <Typography.Title level={4}>Morning Snack (9:00 AM)</Typography.Title>
   <ul>
     <li>Handful of almonds or walnuts</li>
     <li>Low-sugar fruit (apple or pear)</li>
   </ul>
   <Typography.Title level={4}>Lunch (11:00 AM)</Typography.Title>
   <ul>
     <li>Grilled chicken salad with leafy greens and colorful veggies</li>
     <li>Olive oil & lemon dressing</li>
     <li>Side of quinoa</li>
   </ul>
   <Typography.Title level={4}>Afternoon Snack (2:00 PM)</Typography.Title>
   <ul>
     <li>Greek yogurt with chia seeds</li>
     <li>Berries (blueberries or strawberries)</li>
   </ul>
   <Typography.Title level={4}>Dinner (5:00 PM)</Typography.Title>
   <ul>
     <li>Baked salmon</li>
     <li>Steamed broccoli</li>
     <li>Brown rice or quinoa</li>
   </ul>
   <Typography.Title level={4}>Evening Snack (7:00 PM)</Typography.Title>
   <ul>
     <li>Hummus with carrot/cucumber sticks</li>
     <li>Chamomile or peppermint tea</li>
   </ul>
   <Typography.Paragraph>
     <strong>Hydration:</strong> Drink at least 8 glasses of water daily; herbal teas and broths also help.
   </Typography.Paragraph>
 </div>
`,
      Workout: `
<div>
  <h2>Workout Advice for Adrenal Fatigue</h2>
  <Typography.Paragraph>
    Gentle, restorative workouts are essential. Avoid high-intensity training to prevent further adrenal strain.
  </Typography.Paragraph>
  <Typography.Title level={4}>Recommended Activities</Typography.Title>
  <ul>
    <li><strong>Walking:</strong> 3-5 times/week for 20–30 minutes</li>
    <li><strong>Yoga:</strong> 2-3 times/week (restorative or gentle flow)</li>
    <li><strong>Light Cycling:</strong> 1-2 times/week outdoors or on a stationary bike</li>
    <li><strong>Swimming:</strong> 1-2 times/week (light laps or water aerobics)</li>
    <li><strong>Stretching:</strong> 2-3 times/week to maintain flexibility</li>
  </ul>
  <Typography.Paragraph>
    <strong>Recovery is key:</strong> Ensure adequate rest and avoid overtraining.
  </Typography.Paragraph>
</div>
`,
      Tips: `
<div>
  <h2>Tips for Managing Adrenal Fatigue</h2>
  <ol>
    <li><strong>Prioritize Sleep:</strong> 7–9 hours of consistent, quality rest with a bedtime routine.</li>
    <li><strong>Manage Stress:</strong> Practice mindfulness, deep breathing, journaling.</li>
    <li><strong>Stay Hydrated:</strong> Limit caffeine/alcohol, drink plenty of water and herbal teas.</li>
    <li><strong>Balanced Nutrition:</strong> Emphasize whole foods and avoid processed sugar.</li>
    <li><strong>Meal Timing:</strong> Eat small, balanced meals/snacks regularly.</li>
    <li><strong>Limit Stimulants:</strong> Avoid caffeine and nicotine; choose decaf or herbal tea.</li>
    <li><strong>Gentle Movement:</strong> Walk, stretch, or swim without overexertion.</li>
    <li><strong>Seek Support:</strong> Work with a healthcare provider or join a support group.</li>
    <li><strong>Avoid Overcommitment:</strong> Learn to say no and make time for self-care.</li>
    <li><strong>Track Progress:</strong> Keep a symptom journal and celebrate small wins.</li>
  </ol>
  <Typography.Paragraph>
    These practices can foster a better recovery environment and promote long-term well-being.
  </Typography.Paragraph>
</div>
`,
    },
  },
];

export const bloodTypes = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

export const onGoingValues = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

export const endocrineDiseases = [
  { value: "Type 1 Diabetes", label: "Type 1 Diabetes" },
  { value: "Type 2 Diabetes", label: "Type 2 Diabetes" },
];

export const familyTree = [
  { value: "Grandfather", label: "Grandfather" },
  { value: "Grandmother", label: "Grandmother" },
  { value: "Father", label: "Father" },
  { value: "Mother", label: "Mother" },
];

export const dietDescriptions = [
  { value: "Unhealthy", label: "Unhealthy" },
  { value: "Poor", label: "Poor" },
  { value: "Inadequate", label: "Inadequate" },
  { value: "Imbalanced", label: "Imbalanced" },
  { value: "Suboptimal", label: "Suboptimal" },
  { value: "Moderate", label: "Moderate" },
  { value: "Acceptable", label: "Acceptable" },
  { value: "Balanced", label: "Balanced" },
  { value: "Nutrient-rich", label: "Nutrient-rich" },
  { value: "Wholesome", label: "Wholesome" },
  { value: "Healthy", label: "Healthy" },
  { value: "Optimal", label: "Optimal" },
  { value: "Exceptional", label: "Exceptional" },
  { value: "Superb", label: "Superb" },
  { value: "Exemplary", label: "Exemplary" },
];

export const alcoholUseDescriptions = [
  { value: "Excessive", label: "Excessive" },
  { value: "Heavy", label: "Heavy" },
  { value: "Moderate", label: "Moderate" },
  { value: "Occasional", label: "Occasional" },
  { value: "Responsible", label: "Responsible" },
  { value: "Controlled", label: "Controlled" },
  { value: "Minimal", label: "Minimal" },
  { value: "Abstinent", label: "Abstinent" },
];

export const exerciseFrequencyDescriptions = [
  { value: "Sedentary", label: "Sedentary" },
  { value: "Rare", label: "Rare" },
  { value: "Infrequent", label: "Infrequent" },
  { value: "Occasional", label: "Occasional" },
  { value: "Sometimes", label: "Sometimes" },
  { value: "Regular", label: "Regular" },
  { value: "Frequent", label: "Frequent" },
  { value: "Consistent", label: "Consistent" },
  { value: "Active", label: "Active" },
  { value: "Very Active", label: "Very Active" },
];

export const smokingDescriptions = [
  { value: "Heavy Smoker", label: "Heavy Smoker" },
  { value: "Regular Smoker", label: "Regular Smoker" },
  { value: "Occasional Smoker", label: "Occasional Smoker" },
  { value: "Social Smoker", label: "Social Smoker" },
  { value: "Light Smoker", label: "Light Smoker" },
  { value: "Former Smoker", label: "Former Smoker" },
  { value: "Non-Smoker", label: "Non-Smoker" },
  { value: "Abstinent", label: "Abstinent" },
];

export const mealType = [
  { value: "Breakfast", label: "Breakfast" },
  { value: "Brunch", label: "Brunch" },
  { value: "Lunch", label: "Lunch" },
  { value: "Afternoon Snack", label: "Afternoon Snack" },
  { value: "Evening Snack", label: "Evening Snack" },
  { value: "Dinner", label: "Dinner" },
  { value: "Late-Night Snack", label: "Late-Night Snack" },
];

export const mealExperience = [
  { value: "Stuffed - Excessively full", label: "Stuffed - Excessively full" },
  { value: "Satiated - Fully satisfied", label: "Satiated - Fully satisfied" },
  { value: "Full - Feeling complete", label: "Full - Feeling complete" },
  {
    value: "Unsatisfied - Feeling Incomplete",
    label: "Unsatisfied - Feeling Incomplete",
  },
  { value: "Leftover - Not finished", label: "Leftover - Not finished" },
  { value: "Uneaten - Not touched", label: "Uneaten - Not touched" },
];

export const moodAfter = [
  { value: "Happy", label: "Happy" },
  { value: "Content", label: "Content" },
  { value: "Refreshed", label: "Refreshed" },
  { value: "Stressed", label: "Stressed" },
  { value: "Overwhelmed", label: "Overwhelmed" },
  { value: "Indifferent", label: "Indifferent" },
  { value: "Energetic", label: "Energetic" },
  { value: "Lethargic", label: "Lethargic/Sluggish" },
  { value: "Anxious", label: "Anxious" },
];

export const medicationType = [
  { value: "Analgesics", label: "Analgesics (Pain Relievers)" },
  { value: "Antibiotics", label: "Antibiotics (Infection Fighters)" },
  { value: "Antihistamines", label: "Antihistamines (Allergy Relief)" },
  { value: "Antidepressants", label: "Antidepressants (Mood Stabilizers)" },
  { value: "Anti Inflammatories", label: "Anti-Inflammatory Drugs" },
  { value: "Antipsychotics", label: "Antipsychotics" },
  { value: "Antivirals", label: "Antivirals" },
  { value: "Muscle Relaxants", label: "Muscle Relaxants" },
  { value: "Sedatives", label: "Sedatives" },
];

export const exerciseType = [
  { value: "Cardio", label: "Cardiovascular Exercises" },
  { value: "Strength Training", label: "Strength Training" },
  { value: "Flexibility Exercises", label: "Flexibility Exercises" },
  { value: "Aerobics", label: "Aerobics" },
  { value: "Yoga", label: "Yoga" },
  {
    value: "High-Intensity Interval Training",
    label: "High-Intensity Interval Training (HIIT)",
  },
  { value: "sports", label: "Sports" },
];

export const exerciseExperiences = [
  { value: "Intense", label: "Intense" },
  { value: "Challenging", label: "Challenging" },
  { value: "Energizing", label: "Energizing" },
  { value: "Rewarding", label: "Rewarding" },
  { value: "Effective", label: "Effective" },
  { value: "Fun", label: "Fun" },
  { value: "Dynamic", label: "Dynamic" },
  { value: "Moderate", label: "Moderate" },
  { value: "Balanced", label: "Balanced" },
  { value: "Invigorating", label: "Invigorating" },
];

export const severityTypes = [
  { value: "Mild", label: "Mild" },
  { value: "Manageable", label: "Manageable" },
  { value: "Moderate", label: "Moderate" },
  { value: "Severe", label: "Severe" },
  { value: "Intense", label: "Intense" },
  { value: "Persistent", label: "Persistent" },
  { value: "Unbearable", label: "Unbearable" },
];

export const moodsOptions = [
  {
    label: (
      <span style={{ fontSize: "1.4rem", color: "green" }}>
        <SmileOutlined />
      </span>
    ),
    title: (
      <span style={{ fontSize: "1.4rem", color: "green" }}>
        <SmileOutlined />
      </span>
    ),
    options: [
      { value: "Happy", label: "Happy" },
      { value: "Excited", label: "Excited" },
      { value: "Optimistic", label: "Optimistic" },
      { value: "Relaxed", label: "Relaxed" },
      { value: "Hopeful", label: "Hopeful" },
      { value: "Motivated", label: "Motivated" },
    ],
  },
  {
    label: (
      <span style={{ fontSize: "1.4rem", color: "red" }}>
        <FrownOutlined />
      </span>
    ),
    title: (
      <span style={{ fontSize: "1.4rem", color: "red" }}>
        <FrownOutlined />
      </span>
    ),
    options: [
      { value: "Sad", label: "Sad" },
      { value: "Angry", label: "Angry" },
      { value: "Anxious", label: "Anxious" },
      { value: "Frustrated", label: "Frustrated" },
      { value: "Bored", label: "Bored" },
      { value: "Lonely", label: "Lonely" },
      { value: "Disappointed", label: "Disappointed" },
      { value: "Stressed", label: "Stressed" },
      { value: "Fatigued", label: "Fatigued" },
    ],
  },
];

export const diaryValues = [
  {
    entryDate: "2025-05-29",
    mealLogs: [
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
    ],
    medicationsLogs: [
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
    ],
    bloodSugarLogs: [
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures:
          "Took a long looooooooooooooong long long long long long long long long long long long long long long walk longer than long long long",
      },
    ],
    moodLogs: [
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
    ],
  },
  {
    entryDate: "2025-05-30",
    mealLogs: [
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
    ],
    medicationsLogs: [
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
    ],
    bloodSugarLogs: [
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures:
          "Took a long looooooooooooooong long long long long long long long long long long long long long long walk longer than long long long",
      },
    ],
    moodLogs: [
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
    ],
  },
  {
    entryDate: "2025-05-27",
    mealLogs: [
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
    ],
    medicationsLogs: [
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
    ],
    bloodSugarLogs: [
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures:
          "Took a long looooooooooooooong long long long long long long long long long long long long long long walk longer than long long long",
      },
    ],
    moodLogs: [
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
    ],
  },
  {
    entryDate: "2025-05-28",
    mealLogs: [
      {
        meal: "Milk",
        mealType: "Breakfast",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "11:20",
        moodAfter: "Overwhelmed",
        cravingLevel: 5,
      },
    ],
    medicationsLogs: [
      {
        medicationName: "panadol",
        medicationType: "Antihistamines",
        dosage: "500mg",
        timeOfMedication: "11:21",
        route: "Topical (Skin)",
        purpose: "Pain Relief",
        sideEffects: "None",
        compliance: "yes",
      },
    ],
    bloodSugarLogs: [
      {
        context: "before Meal",
        timeOfTest: "11:21",
        sugarLevel: "35",
        unit: "mmol/L",
        activityBefore: "light",
        symptoms: "headache",
        notes: "gsgg",
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 14:00",
        moodAfter: "Content",
        activityExperience: "Challenging",
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures:
          "Took a long looooooooooooooong long long long long long long long long long long long long long long walk longer than long long long",
      },
    ],
    moodLogs: [
      {
        overallMood: "Excited",
        intensityLevel: 4,
        trigger: ["qr", "qqr"],
        timeOfMood: "11:22",
        notes: "qqe",
        reliefMeasures: "walk",
      },
    ],
  },
];

export const data = [
  {
    _id: {
      $oid: "6839a690f6127b3d3d59cb31",
    },
    mealLogs: [
      {
        meal: "Chicken Salad",
        mealType: "Lunch",
        mealExperience: "Satiated - Fully satisfied",
        timeOfMeal: "13:00",
        moodAfter: "Energetic",
        cravingLevel: 7,
        _id: {
          $oid: "6839a690f6127b3d3d59cb32",
        },
      },
      {
        meal: "Rice and beans",
        mealType: "Dinner",
        mealExperience: "Full - Feeling complete",
        timeOfMeal: "17:00",
        moodAfter: "Lethargic",
        cravingLevel: 5,
        _id: {
          $oid: "6839a690f6127b3d3d59cb33",
        },
      },
    ],
    bloodSugarLogs: [
      {
        context: "After Meal",
        timeOfTest: "15:36",
        sugarLevel: "70",
        unit: "mg/dL",
        activityBefore: "none",
        symptoms: "Sweating",
        notes: "None",
        _id: {
          $oid: "6839a690f6127b3d3d59cb34",
        },
      },
    ],
    physicalActivityLogs: [
      {
        activity: "Strength Training",
        activityType: "Strength Training",
        durationOfActivity: "07:00 - 09:00",
        moodAfter: "Refreshed",
        activityExperience: "Rewarding",
        _id: {
          $oid: "6839a690f6127b3d3d59cb35",
        },
      },
    ],
    symptomsLogs: [
      {
        symptoms: ["Dizziness"],
        severity: "Manageable",
        reliefMeasures: "Took a walk",
        _id: {
          $oid: "6839a690f6127b3d3d59cb36",
        },
      },
    ],
    moodLogs: [
      {
        overallMood: "Optimistic",
        intensityLevel: 8,
        trigger: ["Good food"],
        timeOfMood: "15:37",
        notes: "None",
        reliefMeasures: "Took a walk",
        _id: {
          $oid: "6839a690f6127b3d3d59cb37",
        },
      },
    ],
    entryDate: "2025-05-30",
    createdBy: {
      $oid: "682c876f1581fd8adf71588e",
    },
    medicationLogs: [],
    createdAt: {
      $date: "2025-05-30T12:37:36.543Z",
    },
    updatedAt: {
      $date: "2025-05-30T12:37:36.543Z",
    },
    __v: 0,
  },
];
