import { Button, InputGroup } from "@blueprintjs/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo } from "../redux/actions/add-to-do-action";
import { useState } from "react";

const AddToDo = (props) => {
  const [addToDo, setAddToDo] = useState("");
  return (
    <div className="add-to-do-container">
      <InputGroup
        asyncControl={true}
        onChange={(e) => setAddToDo(e.target.value)}
        placeholder="Add to do..."
        value={addToDo}
        className="add-to-do"
        onKeyDown={(e) => {
          if (e.key === "Enter") props.addToDo(addToDo);
        }}
      />
      <Button onClick={() => props.addToDo(addToDo)}>Add</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addToDo: addToDo }, dispatch);
};
export default connect(null, mapDispatchToProps)(AddToDo);
