const illnesses = {
    'Migraine': ['headache', 'nausea', 'sensitivity to light'],
    'Tension Headache': ['headache', 'neck pain'],
    'Flu': ['fever', 'cough', 'fatigue'],
    'Common Cold': ['fever', 'cold', 'sore throat'],
    'Bronchitis': ['cough', 'chest congestion', 'shortness of breath'],
    'Pneumonia': ['cough', 'fever', 'shortness of breath'],
    // 
    'Asthma' : [],
    'Food Poisioning' : [],
    'Stomach Flu' : [],
    'Lupus' : [], 
    'Strep Throat' : [],
    'Kideny Stone' : [],
    'Allergies' : [],
    'Dry Eye' : [],
    'Pink Eye' : [],
    'Ear Infection' : [],
    'Urinary Tract Infection' : [], 
    'Allergic Reaction' : [], 
    'Heart Attack' : [],
    'Concusion' : [],
    'Tumors' : [],
    'Diabetes' : [],
    'Carpal Tunuel Syndorome' : [],
    'Sleep Apnea' : [],
    'Acid Reflux' : [],
    'Stroke' : [], 
    'Vertigo' : [],
    'Thyroid' : [],
    'Epilepsy' : []
    
    // Define more illnesses and their associated symptoms
 };

 
 const description = {
    'Migraine': ['A migraine is a type of headache. It may occur with symptoms such as nausea, vomiting, or sensitivity to light and sound. In most people, a throbbing pain is felt only on one side of the head.'],
    'Tension Headache': ['Tension headaches are the most common type, often without nausea, vomiting, or light sensitivity. They affect both sides of the head, starting slowly, and are described as a tight band around the head.'],
    'Flu': ['Influenza (Flu) is a contagious respiratory illness caused by influenza viruses, affecting the nose, throat, and lungs. It ranges from mild to severe, potentially fatal. Annual flu vaccination is the best prevention method.'],
    'Common Cold': ['Typical cold symptoms include a stuffy or runny nose, sneezing, coughing, and a sore throat, with occasional mild fever, weakness, headache, and joint pain. While colds can be mistaken for the flu, flu symptoms are typically more severe.'],
    'Bronchitis': ['Bronchitis occurs when the lungs airways (bronchial tubes) become inflamed, leading to coughing, often with mucus. It can be acute (short-term) or chronic (long-term), with acute cases often caused by infections and possibly contagious.'],
    'Pneumonia': ['Pneumonia is an infection that affects one or both lungs. It causes the air sacs, or alveoli, of the lungs to fill up with fluid or pus. Bacteria, viruses, or fungi may cause pneumonia.'],

    //Illness with corresponding description
 }
 
 const tips = {
    'Migraine': ['Ice your head'],
    'Tension Headache': ['Put your hand on your knees'],
    'Flu': ['Sleep'],
    'Common Cold': ['cough drops'],
    'Bronchitis': ['antibiotichs'],
    'Pneumonia': ['seek professional help'],
    //
 };
 
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
    if (event.key === 'Enter') {
        let symptoms = document.getElementById('symptoms').value;
        let detectedIllnesses = determineIllness(symptoms);
        //prints illness with corresponding desription
        if (detectedIllnesses.length > 0) {
            let message = "Detected illnesses based on symptoms:\n";
            detectedIllnesses.forEach(illness => {
                message += `${illness}: ${description[illness]} :${tips[illness]}\n`;
            });
            document.getElementById('results').innerText = message;
        } else {
            document.getElementById('results').innerText = "No illnesses detected based on symptoms.";
        }
    }
 }
 
 