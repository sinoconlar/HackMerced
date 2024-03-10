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
 
 
 function get() {
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
 