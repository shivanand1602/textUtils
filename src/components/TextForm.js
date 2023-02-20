import React,{useState} from 'react'

export default function TextForm(props) {
 
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase!","success");
  }

  const handleLoClick=(event)=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase!","success");
  }
  const capitalFirstLetter = ()=>{
    let words = text.split(" ").map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      });
      let newText = words.join(" ");
      setText(newText);
      props.showAlert("First Letter is Capitalized","success");
    }
    const handleClear=()=>{
        let newText='';
        setText(newText);
        props.showAlert("cleared Text","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces is removed!","success");
    }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">  
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalFirstLetter}>Capitalize First Letter</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> and {text.length} <b>characters</b></p>
        <p>{0.08* text.split(" ").filter((element)=>{return element.length!==0}).length} <b>minutes read</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
 