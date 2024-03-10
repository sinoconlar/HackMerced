const illnesses = {
    'Migraine': ['headache', 'nausea', 'sensitivity to light'],
    'Tension Headache': ['headache', 'neck pain'],
    'Flu': ['fever', 'cough', 'fatigue'],
    'Common Cold': ['fever', 'cold', 'sore throat'],
    'Bronchitis': ['cough', 'chest congestion', 'shortness of breath'],
    'Pneumonia': ['cough', 'fever', 'shortness of breath'],
    // 
    'Asthma': ['shortness of breath', 'wheezing', 'coughing'],
    'Food Poisoning': ['nausea', 'vomiting', 'diarrhea'],
    'Stomach Flu': ['nausea', 'vomiting', 'diarrhea'],
    'Lupus': ['fatigue', 'joint pain', 'skin rash'],
    'Strep Throat': ['sore throat', 'difficulty swallowing', 'swollen lymph nodes'],
    'Kidney Stone': ['severe pain in the side and back', 'painful urination', 'blood in urine'],
    'Allergies': ['sneezing', 'runny or stuffy nose', 'itchy', 'watery eyes'],
    'Dry Eye': ['redness', 'irritation', 'feeling of dryness'],
    'Pink Eye': ['redness', 'itchiness', 'discharge'],
    'Ear Infection': ['ear pain', 'fluid drainage', 'hearing loss'],
    'Urinary Tract Infection': ['frequent urination', 'burning sensation while urinating', 'bloody urine'],
    'Allergic Reaction': ['hives', 'swelling', 'difficulty breathing'],
    'Heart Attack': ['chest pain or discomfort', 'shortness of breath', 'nausea'],
    'Concussion': ['headache', 'confusion', 'nausea', 'vomiting'],
    'Tumors': ['lump', 'unexplained weight loss', 'changes in bowel or bladder habits'],
    'Diabetes': ['increased thirst', 'frequent urination', 'fatigue'],
    'Carpal Tunnel Syndrome': ['numbness in hands', 'tingling in hands', 'weakness in the hand', 'pain in the wrist or hand'],
    'Sleep Apnea': ['loud snoring', 'breathing cessation', 'tired', 'fatigue', 'weakness'],
    'Acid Reflux': ['heartburn', 'regurgitation', 'difficulty swallowing'],
    'Stroke': ['numbness', 'weakness', 'confusion', 'trouble speaking'],
    'Vertigo': ['dizziness', 'nausea', 'sensation of spinning'],
    'Thyroid': ['fatigue', 'weight gain or loss', 'sensitivity to cold or heat'],
    'Epilepsy': ['seizures', 'temporary confusion', 'uncontrollable jerking movements'],
    'Arthritis': ['joint pain', 'stiffness', 'swelling'],
    'Chicken Pox': ['rash', 'fever', 'fatigue', 'red spots'],
    'E. Coli': ['diarrhea', 'abdominal cramps', 'nausea', 'vomiting'],
    'Whooping Cough': ['severe coughing', 'coughing', 'whooping', 'vomiting', 'dryness in throat'],
    'Rabies': ['fever', 'headache', 'excessive salivation'],
    'Bone Fracture': ['swelling', 'pain', 'deformity', 'aches'],
    'Gum Disease': ['bleeding gums', 'swollen gums', 'bad breath'],
    'COVID-19': ['fever', 'cough', 'shortness of breath', 'loss of taste'],
    'Measles': ['rash', 'high fever', 'cough'],
    'Malaria': ['fever', 'chills', 'sweating'],
    'Tuberculosis': ['cough', 'weight loss', 'fatigue'],
    'Gingivitis': ['bleeding gums', 'swollen gums', 'bad breath'],
    'Muscle Spasm': ['stiffness', 'pain', 'ontractions', 'muscle aches', 'aches']
    }



    // Define more illnesses and their associated symptoms
    const description = {
    'Migraine': ['A migraine is a type of headache. It may occur with symptoms such as nausea, vomiting, or sensitivity to light and sound. In most people, a throbbing pain is felt only on one side of the head.'],
    'Tension Headache': ['Tension headaches are the most common type, often without nausea, vomiting, or light sensitivity. They affect both sides of the head, starting slowly, and are described as a tight band around the head.'],
    'Flu': ['Influenza (Flu) is a contagious respiratory illness caused by influenza viruses, affecting the nose, throat, and lungs. It ranges from mild to severe, potentially fatal. Annual flu vaccination is the best prevention method.'],
    'Common Cold': ['Typical cold symptoms include a stuffy or runny nose, sneezing, coughing, and a sore throat, with occasional mild fever, weakness, headache, and joint pain. While colds can be mistaken for the flu, flu symptoms are typically more severe.'],
    'Bronchitis': ['Bronchitis occurs when the lungs airways (bronchial tubes) become inflamed, leading to coughing, often with mucus. It can be acute (short-term) or chronic (long-term), with acute cases often caused by infections and possibly contagious.'],
    'Pneumonia': ['Pneumonia is an infection that affects one or both lungs. It causes the air sacs, or alveoli, of the lungs to fill up with fluid or pus. Bacteria, viruses, or fungi may cause pneumonia.'],
    //Illness with corresponding description
 }

    // Preventive mesures and what do about illness 
    const prevent = {
        'Migraine': ['Maintain a good sleep and exercise sechdule, mange your stress.'],
        'Tension Headache': ['Have good posture and use heat or cold packs for relief.'],
        'Flu': ['Get the flu shot! Wash your hands before eating.'],
        'Common Cold': ['Disinfect and hand wash your hands, avoid touching the face.'],
        'Bronchitis': ['Avoid smoking, vaping, and second hand smoke, as it cause buildup of bacteria in lungs.'],
        'Pneumonia': ['Wash your hands and avoid smoking.'],
        'Asthma': ["Identify the triggers for attacks and keep asthma medication or a inhaler ready."],
        'Food Poisoning': ['Prevent cross contamination in the kitchen and cook food throughly.'],
        'Stomach Flu': ['Prepare food safely and avoid food made by somone showing symptoms of sickness.'],
        'Lupus': ["Seek medical attention immeadately as there is no cure."],
        'Strep Throat': ['Drink plenty of water and perhaps gargle warm saltwater.'],
        'Kidney Stone': ['Reduce sodium intake and drink plenty of water.'],
        'Allergies': ['Avoid triggers such as pollen, dust, or pet hair. Stay indoors.'],
        'Dry Eye': ['Use lubricating eye drops and avoid smoke and wind exposure.'],
        'Pink Eye': ['Avoid sharing towels or pillows and touching the eyes with unwashed hands.'],
        'Urinary Tract Infection': ['Stay hydrated and empty your bladder regularly, and practice good bathroom hygiene.'],
        'Ear Infection': ['Avoid inserting foreign objects into the ear and keep it dry.'],
        'Allergic Reaction': ['Avoid known allergens and carry an epinephrine injector or epipen.'],
        'Heart Attack': ['Eat less fatty foods and get good exercise.'],
        'Concussion': ['Wear appropriate protective gear during sports or recreational activities and seek immediate medical attention for head injuries.'],
        'Tumors': ['Eats nutriet rich food and avoid drinking and smoking.'],
        'Diabetes': ['Eat abalanced diet low in sugar and carbohydrates and exercise regularly.'],
        'Carpal Tunnel Syndrome': ['Take breaks between task using hands and practice wrist exercises.'],
        'Sleep Apnea': ['Avoid alchol before sleeping and maintain an appropriate body weight.'],
        'Acid Reflux': ['Avoid foods that are oily and spicy and as well as laying down after meals.'],
        'Stroke': ['Keep low cholestrol levels and maintain helthy blood pressure.'],
        'Vertigo': ['Avoid sudden movements with the head and lay to to avoid unessecary movement.'],
        'Thyroid': ['Eat a balanced diet with iodine-rich foods and take medication.'],
        'Epilepsy' : ['Avoid flashy light and get plenty of sleep. Consult with a doctor about taking medication.'],
        'Arthritis': ['Maintain a healthy weight', 'Stay physically active with low-impact exercises', 'Use assistive devices as needed'],
        'Chicken Pox': ['Get the vacine and practice good hand hygiene.'],
        'E. Coli': ['Avoid cross contamination in the kitchen and cook food throughly.'],
        'Whooping Cough': ['Cover mouth and nose when coughing or sneezing, avoid close contact with infected individuals as it is contagious.'],
        'Rabies': ['Get vaccinated and avoid contact with wild animals. Get immeadiate medical attention if bitten by an animal.'],
        'Bone Fracture': ['Eat a calcium-rich diet and regular exercise to maintain stong bones.'],
        'Gum Disease': ['Brush teeth twice a day and floss daily. Visiting the dentist regularly cleanings.'],
        'COVID-19': ['Practice social distancing and wear face masks. Get vaccinated against COVID-19.'],
        'Measles': ['Get vaccinated against measles.'],
        'Malaria': ['Do not travel to high-risk areas and use insect repellent to prevent mosquito bites.'],
        'Tuberculosis': ['Get vaccinated against tuberculosis, seek immeadiate medical attention if experiencing symptoms.'],
        'Gingivitis': ['Brush teeth twice a day, floss, and use mouthwash.'],
        'Muscle Spasm': ['Keep good posture, stretch daily, and stay hydrated.'],
        
    }

 
 
 function determineIllness(symptoms) {
    symptoms = symptoms.toLowerCase();
    let illnessMatches = {};
   
    // Iterate over each illness and count the number of matching symptoms
    for (let illness in illnesses) {
        let symptomMatches = 0;
        illnesses[illness].forEach(symptom => {
            if (symptoms.includes(symptom)) {
                symptomMatches++;
            }
        });
       
        illnessMatches[illness] = symptomMatches;
    }
 
 
    // Sort the illnesses based on the number of matching symptoms (descending order)
    let sortedIllnesses = Object.keys(illnessMatches).sort((a, b) => illnessMatches[b] - illnessMatches[a]);
     if (illnessMatches[sortedIllnesses[1]] === 0) {
        return sortedIllnesses.slice(0, 1);
    }
 
 
    if (illnessMatches[sortedIllnesses[2]] === 0) {
        return sortedIllnesses.slice(0, 2);
    }
 
 
    // Return the top three illnesses with the most matching symptoms
    return sortedIllnesses.slice(0, 3);
 
 
   
   
 }
 
 
 function get(event) {
    if{event.key == 'Enter'} {
        let symptoms = document.getElementById('symptoms').value;
    
    
        let detectedIllnesses = determineIllness(symptoms);
    
    
        if (detectedIllnesses.length > 0) {
            let message = "Detected illnesses based on symptoms:\n";
            detectedIllnesses.forEach(illness => {
                message += `${illness}: ${description[illness]}\n`;
            });
            document.getElementById('results').innerText = message;
        } else {
            document.getElementById('results').innerText = "No illnesses detected based on symptoms.";
        }
    }
 }
 