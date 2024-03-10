const illnesses = {
    'Migraine': ['headache', 'nausea', 'sensitivity to light'],
    'Tension Headache': ['headache', 'neck pain'],
    'Flu': ['fever', 'cough', 'fatigue'],
    'Common Cold': ['fever', 'cough', 'sore throat'],
    'Bronchitis': ['cough', 'chest congestion', 'shortness of breath'],
    'Pneumonia': ['cough', 'fever', 'shortness of breath'],
    // Define more illnesses and their associated symptoms
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

    // Return the top three illnesses with the most matching symptoms
    return sortedIllnesses.slice(0, 3);
}

function get() {
    let symptoms = document.getElementById('symptoms').value;

    let detectedIllnesses = determineIllness(symptoms);

    if (detectedIllnesses.length > 0) {
        let message = "Detected illnesses based on symptoms: " + detectedIllnesses.join(', ');
        document.getElementById('results').innerText = message;
    } else {
        document.getElementById('results').innerText = "No illnesses detected based on symptoms.";
    }
}