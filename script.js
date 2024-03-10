// Illnesses and their associated symptoms
const illnesses = {
    'Migraine': ['headache', 'nausea', 'sensitivity to light'],
    'Tension Headache': ['headache', 'neck pain'],
    'Flu': ['fever', 'cough', 'fatigue'],
    'Common Cold': ['fever', 'cold', 'sore throat'],
    'Bronchitis': ['cough', 'chest congestion', 'shortness of breath'],
    'Pneumonia': ['cough', 'fever', 'shortness of breath'],
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

// Add descriptions for each illness
 const description = {
    'Migraine': ['A migraine is a type of headache. It may occur with symptoms such as nausea, vomiting, or sensitivity to light and sound. In most people, a throbbing pain is felt only on one side of the head.'],
    'Tension Headache': ['Tension headaches are the most common type, often without nausea, vomiting, or light sensitivity. They affect both sides of the head, starting slowly, and are described as a tight band around the head.'],
    'Flu': ['Influenza (Flu) is a contagious respiratory illness caused by influenza viruses, affecting the nose, throat, and lungs. It ranges from mild to severe, potentially fatal. Annual flu vaccination is the best prevention method.'],
    'Common Cold': ['Typical cold symptoms include a stuffy or runny nose, sneezing, coughing, and a sore throat, with occasional mild fever, weakness, headache, and joint pain. While colds can be mistaken for the flu, flu symptoms are typically more severe.'],
    'Bronchitis': ['Bronchitis occurs when the lungs airways (bronchial tubes) become inflamed, leading to coughing, often with mucus. It can be acute (short-term) or chronic (long-term), with acute cases often caused by infections and possibly contagious.'],
    'Pneumonia': ['Pneumonia is an infection that affects one or both lungs. It causes the air sacs, or alveoli, of the lungs to fill up with fluid or pus. Bacteria, viruses, or fungi may cause pneumonia.'],
    'Asthma': ['Asthma is a chronic lung disease characterized by inflammation and muscle tightening around the airways, making breathing difficult. Symptoms include coughing, wheezing, shortness of breath, and chest tightness.'],
    'Food Poisoning': ['Food poisoning, a type of foodborne illness, results from consuming contaminated food or drink, leading to symptoms such as upset stomach, diarrhea, and vomiting.'],
    'Stomach Flu': ['Viral gastroenteritis is an intestinal infection causing watery diarrhea, abdominal pain or cramping, nausea or vomiting, and sometimes fever.'],
    'Lupus': ['Lupus is an autoimmune disease where the immune system attacks its own tissues, causing inflammation and potentially permanent damage to various organs and tissues, including the skin, joints, heart, lungs, kidneys, blood cells, and brain.'],
    'Strep Throat': ['Strep throat is a bacterial infection causing a sore throat, difficulty swallowing, and swollen lymph nodes. It is typically treated with antibiotics.'],
    'Kidney Stone': ['Kidney stones are hard deposits of minerals and salts that form inside the kidneys. They can cause severe pain in the side and back, painful urination, and blood in the urine.'],
    'Allergies': ['Allergies occur when the immune system reacts to a substance (allergen) that is normally harmless. Symptoms may include sneezing, runny or stuffy nose, and itchy, watery eyes.'],
    'Dry Eye': ['Dry eye occurs when the eyes do not produce enough tears or the tears evaporate too quickly. Symptoms may include redness, irritation, and a feeling of dryness in the eyes.'],
    'Pink Eye': ['Pink eye, or conjunctivitis, is an inflammation of the conjunctiva (the thin, transparent layer covering the inner surface of the eyelid and the white part of the eyeball). Symptoms include redness, itchiness, and discharge from the eyes.'],
    'Ear Infection': ['An ear infection is an inflammation of the middle ear, usually caused by bacteria or viruses. Symptoms may include ear pain, fluid drainage from the ear, and temporary hearing loss.'],
    'Urinary Tract Infection': ['A urinary tract infection (UTI) is an infection in any part of the urinary system, including the kidneys, bladder, and urethra. Symptoms may include frequent urination, burning sensation while urinating, and bloody urine.'],
    'Allergic Reaction': ['An allergic reaction occurs when the immune system overreacts to an allergen, triggering symptoms such as hives, swelling, and difficulty breathing. Severe allergic reactions, known as anaphylaxis, can be life-threatening.'],
    'Heart Attack': ['A heart attack, also known as a myocardial infarction, occurs when blood flow to the heart muscle is blocked, leading to damage or death of the heart tissue. Symptoms may include chest pain or discomfort, shortness of breath, and nausea.'],
    'Concussion': ['A concussion is a type of traumatic brain injury caused by a blow to the head or body. Symptoms may include headache, confusion, nausea, and vomiting.'],
    'Tumors': ['Tumors are abnormal growths of tissue that can be either benign (non-cancerous) or malignant (cancerous). Symptoms may vary depending on the location and size of the tumor.'],
    'Diabetes': ['Diabetes is a chronic condition characterized by high blood sugar levels. Symptoms may include increased thirst, frequent urination, and fatigue.'],
    'Carpal Tunnel Syndrome': ['Carpal tunnel syndrome is a condition that causes numbness, tingling, weakness, and pain in the hand and arm. It occurs when the median nerve, which runs from the forearm into the palm of the hand, becomes compressed at the wrist.'],
    'Sleep Apnea': ['Sleep apnea is a sleep disorder characterized by pauses in breathing or shallow breaths during sleep. Symptoms may include loud snoring, breathing cessation, and excessive daytime sleepiness.'],
    'Acid Reflux': ['Acid reflux, also known as gastroesophageal reflux disease (GERD), is a condition where stomach acid flows back into the esophagus, causing heartburn, regurgitation, and difficulty swallowing.'],
    'Stroke': ['A stroke occurs when blood flow to the brain is interrupted or reduced, depriving brain tissue of oxygen and nutrients. Symptoms may include numbness, weakness, confusion, and trouble speaking.'],
    'Vertigo': ['Vertigo is a sensation of spinning or dizziness that can occur due to problems with the inner ear or the brain. Other symptoms may include nausea and a feeling of imbalance.'],
    'Thyroid': ['Thyroid disorders occur when the thyroid gland produces too much or too little thyroid hormone. Symptoms may include fatigue, weight gain or loss, and sensitivity to cold or heat.'],
    'Epilepsy': ['Epilepsy is a neurological disorder characterized by recurrent seizures, which can vary from brief episodes of blank staring to severe convulsions. Other symptoms may include temporary confusion and uncontrollable jerking movements.'],
    'Arthritis': ['Arthritis is a term used to describe inflammation of the joints. Symptoms may include joint pain, stiffness, and swelling.'],
    'Chicken Pox': ['Chickenpox is a highly contagious viral infection characterized by an itchy rash, fever, and fatigue. It is caused by the varicella-zoster virus.'],
    'E. Coli': ['Escherichia coli (E. coli) is a type of bacteria that can cause food poisoning and other infections. Symptoms may include diarrhea, abdominal cramps, nausea, and vomiting.'],
    'Whooping Cough': ['Whooping cough, or pertussis, is a highly contagious respiratory infection caused by the bacterium Bordetella pertussis. Symptoms may include severe coughing, whooping sounds, and vomiting.'],
    'Rabies': ['Rabies is a viral infection that affects the nervous system and is usually transmitted through the bite of an infected animal. Symptoms may include fever, headache, and excessive salivation.'],
    'Bone Fracture': ['A bone fracture is a break or crack in a bone. Symptoms may include swelling, pain, deformity, and difficulty moving the injured limb.'],
    'Gum Disease': ['Gum disease, also known as periodontal disease, is an infection of the tissues that surround and support the teeth. Symptoms may include bleeding gums, swollen gums, and bad breath.'],
    'COVID-19': ['COVID-19 is a respiratory illness caused by the novel coronavirus SARS-CoV-2. Symptoms may include fever, cough, shortness of breath, and loss of taste or smell.'],
    'Measles': ['Measles is a highly contagious viral infection characterized by a rash, high fever, and cough. It is caused by the measles virus.'],
    'Malaria': ['Malaria is a mosquito-borne infectious disease caused by parasites of the Plasmodium genus. Symptoms may include fever, chills, sweats, and fatigue.'],
    'Tuberculosis': ['Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can also affect other parts of the body. Symptoms may include cough, weight loss, and fatigue.'],
    'Gingivitis': ['Gingivitis is a common form of gum disease characterized by inflammation of the gums. Symptoms may include bleeding gums, swollen gums, and bad breath.'],
    'Muscle Spasm': ['A muscle spasm is a sudden, involuntary contraction of one or more muscles. Symptoms may include stiffness, pain, and muscle aches.']
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
    if (event.key === 'Enter') {
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