function toggleMode(){
    document.body.classList.toggle("dark");
}

function checkSymptom(){

    let symptom = document.getElementById("symptom").value.toLowerCase();
    let result = document.getElementById("result");

    if(symptom.includes("fever")){

        result.innerHTML =
        "🤒 Possible Fever<br><br>" +
        "• Drink water<br>" +
        "• Take rest<br>" +
        "• Consider Paracetamol<br>" +
        "• Consult doctor if needed.";

    }
    else if(symptom.includes("cold")){

        result.innerHTML =
        "🤧 Common Cold<br><br>" +
        "• Warm fluids<br>" +
        "• Rest well<br>" +
        "• Monitor symptoms<br>" +
        "• Consult doctor if worse.";

    }
    else if(symptom.includes("headache")){

        result.innerHTML =
        "🤕 Headache<br><br>" +
        "• Stay hydrated<br>" +
        "• Rest<br>" +
        "• Reduce screen time<br>" +
        "• Consult doctor if severe.";

    }
    else{

        result.innerHTML =
        "⚠ Symptom not found.<br>Please consult a doctor.";
    }
}