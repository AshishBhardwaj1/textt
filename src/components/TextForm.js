import React , {useState} from "react";
export default function TextForm(props){
    const mystyle ={
color :'red',
backgroundColor : 'blue'

    }
    const handleupclick = ()=>{
       // console.log("it was clci");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowclick = ()=>{
        // console.log("it was clci");
         let newText = text.toLowerCase();
         setText(newText)
     }
    const handleonChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const [text ,setText] = useState('');
    return(
        <>
      <div className="container" style ={mystyle}> 
    <textarea name="" placeholder ="enter text here" id="mybox" onChange = {handleonChange} value ={text}cols="30" rows="10"> t</textarea>
     <button className="btn" onClick= {handleupclick}>convert to uppercase</button>
     <button className="btn" onClick= {handlelowclick}>convert to lowercase</button>
      </div>
<div className="container">
    <h1>Your text sumarry</h1>
    <p> {text.split(' ').length}words and {text.length} charactres</p>
    <p></p>
</div>
</>
    )
}