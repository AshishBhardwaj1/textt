import React , {useState} from "react";
export default function TextForm(props){
    const handleupclick = ()=>{
       // console.log("it was clci");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleonChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const [text ,setText] = useState('enter text here');
    return(
        <>
      <div className="container"> 
    <textarea name="" id="mybox" onChange = {handleonChange} value ={text}cols="30" rows="10"> t</textarea>
     <button className="btn" onClick= {handleupclick}>convert to uppercase</button>
      </div>
<div className="container">
    <h1>Your text sumarry</h1>
    <p> {text.split(' ').length}words and {text.length} charactres</p>
</div>
</>
    )
}