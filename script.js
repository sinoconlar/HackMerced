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