import React,{useState}from 'react'


export default function Textform(props) {
    const UpperCase = ()=>{
        //console.log("UpperCase was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success");
    }

    const LowerCase = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case!","success");
    }

     // Copy text
     const CopyText = ()=>{
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy the Complete text!","success");
     }

     // remove extra spaces
     const removespace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove the Complete spaces!","success");
     }

    const ClearText = ()=>{
      let newText = ' ';
      setText(newText);
      props.showAlert("Clear Complete Text!","success");
    }
 
    const Upper =(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here 2');
    // text = "new text";//wrong way to change the state
   // setText("new text")  //correct way
  return ( 
    <> 
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">

    <textarea className="form-control" value={text} onChange={Upper} style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color: props.mode==='dark'?'white':'#042743'
    }} id="myBox" rows="8"></textarea>

</div>
 <button className="btn btn-primary mx-2" onClick={UpperCase}>Convert to uppercase </button>
  <button className="btn btn-primary mx-2" onClick={LowerCase}>Convert to Lowercase </button>
  <button className="btn btn-primary mx-2" onClick={ClearText}>Clear </button>
  <button className="btn btn-primary mx-2" onClick={CopyText}>Copy</button>
  <button className="btn btn-primary mx-2" onClick={removespace}>Remove Space</button>
    </div>

    <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Hii this is my first text</h2>
      <p>{text.split(" ").length}words and {text.length}character's</p>
      {/*ek word ko read karne mai 0.008 time lagta hai*/}
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview it Here"}</p>
      </div>
    </>
  ) 
} 
