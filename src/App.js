import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "./App.css";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function App() {
  const [text, setText] = useState(" my component");
  const [count, setCount] = useState(0);
  const [addText, setAddText] = useState(false);

  // Updates the count whenever the new text is added
  const handleAddClick = () => {
    setText("");
    setCount(count + 1);
    setAddText(true);
  };

  // Updates the count whenever text is updated
  const handleUpdateClick = () => {
    setCount(count + 1);
    setAddText(true);
  };

  //  Sends a post request to add the new text to the server database
  const postData = () => {
    axios.post(`https://65d7731727d9a3bc1d7b105a.mockapi.io/data`, {
      text,
    });
    setAddText(false);
  };
  
  return (
    <div className="container">
      <div className="upper-part">
        <ResizableBox width={300} height={300}>
          <div className="component">{text}</div>
        </ResizableBox>
        <ResizableBox width={200} height={300}>
          <div className="component">{text}</div>
        </ResizableBox>
      </div>
      <div>
        <ResizableBox width={600} height={200}>
          <div className="component">{text}</div>
        </ResizableBox>
      </div>
      <div className="lower-part">
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleUpdateClick}>Update</button>
        <p>Count: {count}</p>
      </div>
      {addText ? (
        <>
          <input
            placeholder="add text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
          ></input>
          <Button onClick={postData} type="submit">
            Submit
          </Button>
        </>
      ) : null}
    </div>
  );
}
