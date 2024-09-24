import {useState} from 'react';
import "./bmiAppj.css";

export const bmi = () => {

    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [bmi,setBmi] = useState(null);
    const [bmistatus,setBmiStatus] = useState("");

    const calculateBmi =() =>{
        if(height && weight){
            const heightInM = height / 100;
            const bmiValue = weight/(heightInM * heightInM);
            setBmi(bmiValue.toFixed(2));
            if(bmiValue <18.5){
                setBmiStatus("UnderWeight");
            } else if (bmiValue >=18.5 && bmiValue<= 24.9){
                setBmiStatus("Normal Weight");
            }
            else if (bmiValue >=25 && bmiValue<= 29.9){
                setBmiStatus(" Over Weight");

            }
            else{
                setBmiStatus(" Obese");
            }

        } else{
            setBmi(null);
            setBmiStatus("");
        }
    }

  return (
    <div className='bmi-calculator'>
        <div className="box"></div>
            <div className="data">
                <h1>BMI Calculator</h1>
                <div className="input-container">
                    <label htmlFor='height'>Height (cm) :</label>
                    <input type="text" id='height' value={height} onChange={(e) =>setHeight(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor='weight'>Weight (kg) :</label>
                    <input type="text" id='weight' value={weight} onChange={(e) =>setWeight(e.target.value)} />
                </div>
                <button onClick={calculateBmi}>Calculate BMI</button>
                {bmi!==null &&(
                    <div className="result">
                    <p>Your BMI is : {bmi} </p>
                    <p>Status :{bmistatus} </p>
                </div>
                )}
            
            </div>

    </div>
  )
}
