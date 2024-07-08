


// Get the input element
var weight = document.getElementById('weight');
var height = document.getElementById('height');
var age = document.getElementById('age');

var CalculateButton=document.getElementById('CalculateButton');
// Get the output element


// Attach an event listener to the input element
weight.addEventListener('input',CheckInput);
height.addEventListener('input',CheckInput);
age.addEventListener('input',CheckInput);

function CheckInput() {
  // Update the output element with the input value
 
  if(weight.value !== '' && height.value !== '' && age.value !== ''){
      CalculateButton.disabled=false;
  }else{
      CalculateButton.disabled=true;
  }
  
}












function calculateCaloricIntake() {
  // Get input values
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var age = document.getElementById("age").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var activityLevel = document.querySelector('input[name="activityLevel"]:checked').value;
  var goal = document.querySelector('input[name="goal"]:checked').value;

  // Perform caloric intake calculation (example formula)
  var caloricIntake = 0;
  if (gender === "male") {
    caloricIntake = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else if (gender === "female") {
    caloricIntake = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // Adjust caloric intake based on activity level
  switch (activityLevel) {
    case "sedentary":
      caloricIntake *= 1.2;
      break;
    case "Light":
      caloricIntake *= 1.375;
      break;
    case "Moderate":
      caloricIntake *= 1.55;
      break;
    case "Active":
      caloricIntake *= 1.725;
      break;
    case "Intense":
      caloricIntake *= 1.9;
      break;
  }

  // Adjust caloric intake based on the selected goal
  switch (goal) {
    case "maintain":
      // No adjustment needed
      break;
    case "normalGain":
      caloricIntake += 300;
      break;
    case "fastGain":
      caloricIntake += 500;
      break;
    case "normalLoss":
      caloricIntake -= 300;
      break;
    case "fastLoss":
      caloricIntake -= 500;
      break;
  }

  // Calculate macronutrient values
  var protein = 0;
  var fat = 0;
  var carbs = 0;

  if (goal === "maintain") {
    protein = 2 * weight;
    fat = 0.7 * weight;
    carbs = (caloricIntake - (protein * 4) - (fat * 9)) / 4;
  } else if (goal === "normalGain" || goal === "fastGain") {
    protein = 1.6 * weight;
    fat = 0.7 * weight;
    carbs = (caloricIntake - (protein * 4) - (fat * 9)) / 4;
  } else if (goal === "normalLoss" || goal === "fastLoss") {
    protein = 2.5 * weight;
    fat = 0.7 * weight;
    carbs = (caloricIntake - (protein * 4) - (fat * 9)) / 4;
  }

  // Perform BMI calculation
  var bmi = weight * 10000 / (height * height);

  // Determine BMI category
  var bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Overweight";
  } else if (bmi >= 30 && bmi < 40) {
    bmiCategory = "Obesity";
  } else {
    bmiCategory = "Severe obesity";
  }

  // Display the results
  document.getElementById("caloricIntakeResult").innerHTML = caloricIntake.toFixed(2);
  document.getElementById("bmiResult").innerHTML = bmiCategory;
  document.getElementById("proteinResult").innerHTML = protein.toFixed(2) + "g";
  document.getElementById("fatResult").innerHTML = fat.toFixed(2) + "g";
  document.getElementById("carbsResult").innerHTML = carbs.toFixed(2) + "g";
}

function calculateBodyFat() {
  // Get input values
  var waist = document.getElementById("waist").value;
  var neck = document.getElementById("neck").value;
  var hips = 80;
  var height = document.getElementById("heightBodyFat").value;
  var genderBodyFat = document.querySelector('input[name="genderBodyFat"]:checked').value;
  

  // Perform body fat calculation (example formula)
  var bodyFat = 0;
  if (genderBodyFat === "male") {
    bodyFat = (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450;
  } else if (genderBodyFat === "female") {
    bodyFat = (495 / (1.29579 - 0.35004 * Math.log10(waist + hips - neck) + 0.22100 * Math.log10(height))) - 450;
  }

  // Display the result
  document.getElementById("bodyFatResult").innerHTML = bodyFat.toFixed(2);
}

function switchCalculator() {
  var calculatorType = document.querySelector('input[name="calculatorType"]:checked').value;

  if (calculatorType === "caloricIntake") {

    document.getElementById("caloricIntakeForm").style.display = "block";
    document.getElementById("bodyFatForm").style.display = "none";
    document.getElementById("rightCaloricIntake").style.display = "flex";   
    document.getElementById("rightBodyFat").style.display = "none";
    
  } else if (calculatorType === "bodyFat") {

    document.getElementById("caloricIntakeForm").style.display = "none";
    document.getElementById("bodyFatForm").style.display = "block";
    document.getElementById("rightBodyFat").style.display = "flex";
    document.getElementById("rightCaloricIntake").style.display = "none";    
  }
}



function resetForm() {
  // Reset caloric intake form fields
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";

  document.getElementById("male").checked = true;
  document.getElementById("Sedentary").checked = true;
  document.getElementById("maintain").checked = true;


  // Reset body fat form fields
  document.getElementById("waist").value = "";
  document.getElementById("neck").value = "";
  document.getElementById("hips").value = "";
  document.getElementById("heightBodyFat").value = "";

  document.getElementById("maleBodyFat").checked = true;

  // Clear result displays
  document.getElementById("caloricIntakeResult").innerHTML = "";
  document.getElementById("bmiResult").innerHTML = "";
  document.getElementById("proteinResult").innerHTML = "";
  document.getElementById("fatResult").innerHTML = "";
  document.getElementById("carbsResult").innerHTML = "";

  document.getElementById("bodyFatResult").innerHTML = "";
}
