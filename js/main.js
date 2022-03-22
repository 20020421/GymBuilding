
function addClassActive(element) {
    element.classList.add("active");
}
const tabContents = document.getElementsByClassName("nav-link");
const tables = document.getElementsByClassName("tab-hide");
function addActiveClass(element) {
    
    var n;
    for (var i = 0; i < tabContents.length; ++i) {
        tabContents[i].classList.remove("active");
        tables[i].classList.remove("active")
        if (element === tabContents[i]) {
            n = i;
        }

    }

    element.classList.add("active");
    tables[n].classList.add("active");
}


function bmiCalc() {
    var weight = document.getElementsByClassName('weight')[0].value;
    var height = document.getElementsByClassName('height')[0].value;
    var age = document.getElementsByClassName('age')[0].value;
    var gender = document.getElementsByClassName('gender')[0].value;
    // console.log(weight, height, age, gender);
    var bmi = weight / Math.pow(height/100, 2);
    var status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <=24.9) {
        status = "Normal weight";
    } else if (bmi >= 25.0 && bmi <=29.9) {
        status = "Pre-obesity";
    } else if (bmi >= 30.0 && bmi <=34.9) {
        status = "Obesity class I";
    } else if (bmi >= 35.0 && bmi <=39.9) {
        status = "Obesity class II";
    } else if (bmi >= 40.0) {
        status = "Obesity class III";
    }

    console.log(Math.round(bmi * 10) / 10  + " " + status);
}