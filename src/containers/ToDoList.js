import { Checkbox } from "@blueprintjs/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import markToDo from "../redux/actions/mark-to-do-action";
import deleteToDo from "../redux/actions/delete-to-do-action";
const ToDoList = (props) => {
  return (
    <div>
      {props.toDoList.map((toDo) => (
        <div className="to-do-list-item">
          <Checkbox
            checked={toDo.isDone}
            label={toDo.item}
            onChange={() => props.markToDo(toDo)}
          />
          <Checkbox
            className="remove-to-do"
            defaultIndeterminate={true}
            onChange={() => {
              props.deleteToDo(toDo);
            }}
          />
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    toDoList: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ markToDo, deleteToDo }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
