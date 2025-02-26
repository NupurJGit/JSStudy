let frm = document.querySelector("form")
//this usecase will give empty value because it will give the value from the form before the button click
//so the height & weight values must be read inside the form submit event below
// let height = parseInt(document.querySelector("#height").value)

frm.addEventListener('submit', function(e){
    e.preventDefault()
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector("#results")
    
    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please provide valid height ${height}`;
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please provide valid weight ${weight}`;
    }else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the results

        
            if( bmi < 18.6){
                result.innerHTML=`Your BMI is <span>${bmi}</span>. You are under weight`;
            } 
            
            else if( bmi >= 18.6 && bmi < 24.9){
                result.innerHTML=`Your BMI is <span>${bmi}</span>. You are in normal range`;
            }
            
            else if (bmi >= 24.9){
                result.innerHTML=`Your BMI is <span>${bmi}</span>. You are over weight`;
            }      
    }
    
})

