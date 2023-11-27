function calculate(){
    var bmi;
    var result = document.getElementById('result');

    var weight = parseInt(document.getElementById('weight').value);
    document.querySelector('[weight-val]').textContent =  `${weight} kg`
    console.log(weight)
    var height = parseInt(document.getElementById('height').value);
    document.querySelector('[height-val]').textContent = `${height} cm`;

    bmi = (weight/ Math.pow((height/100),2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "Underweight"
        result.style.color = "#ffc44d"
    }
    else if (bmi >- 18.5 && bmi <= 24.9){
        category = "Normal Weight";
        result.style.color = "#0be881"
    }
    else if(bmi >= 25 && bmi <= 29.9){
        category = "Overweight"
    }
    else{
        category = "Obese"
        result.style.color = "#ff5e57";
    }
    document.getElementById('category').textContent = category;
}