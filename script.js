function CheckBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = weight / (height * height);
    document.getElementById("bmiResult").innerHTML = "Your BMI is: " + BMI.toFixed(2);
    switch (true) {
        case BMI < 18.5:
            document.getElementById("bmidescription").innerHTML = "UnderWeight";
            break;
        case BMI >= 18.5 && BMI < 25:
            document.getElementById("bmidescription").innerHTML = "Normal";
            break;
        case BMI >= 25 && BMI < 30:
            document.getElementById("bmidescription").innerHTML = "OverWeight";
            break;
        case BMI >= 30:
            document.getElementById("bmidescription").innerHTML = "Obese";
            break;
        default:
            result = 'Invalid BMI';

    }
}
