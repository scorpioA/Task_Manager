import React, { useState } from "react";
import "../styles/BodyStyles.css";

function Body() {
  const [text, setText] = useState("");
  const [input, setInput] = useState([]);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleInput = () => {
    setInput([...input, text]);
    setText("");
  };

  const handleDelete = (event, index) => {
    setInput((x) => {
      return x.filter((value, index1) => index1 !== index);
    });
  };
  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <span> Add your Tasks📝 {"   "}</span>
          <br />
          <input
            type="text"
            className="input-field"
            name="textInput"
            value={text}
            placeholder="Type..."
            onChange={(event) => {
              handleText(event);
            }}
          />
          <button
            className="add-button"
            onClick={() => {
              handleInput();
            }}
          >
            Add
          </button>
        </div>
        <div className="flexbox-item flexbox-item-2">
          <div>
            <table className="table">
              <thead className="table th">
                <tr>
                  <th>🗒️Tasks List: </th>
                  <th>Delete❌</th>
                </tr>
              </thead>
              <tbody>
                {input.map((item, index) => (
                  <tr key={index}>
                    <td className="table td">{item} </td>
                    <td className="table td">
                      <button
                        className="delete-button"
                        onClick={(event) => {
                          handleDelete(event, index);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
