import React from "react";
import Button from "../button";
class Form extends React.Component {
  render() {
    return (
        <form>
            <div>
            <label>

            </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que estudar"
                />
            </div>
            <div>
                <label>
                    <input type="time">
                    
                    </input>
                </label>
            </div>
            <Button />
        </form>
    );
  }
}

export default Form;