import { Button, Icon, InputGroup } from "@blueprintjs/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectFilter from "../redux/actions/select-filter-action";
import searchToDo from "../redux/actions/search-to-do";
import { useState } from "react";
const ToDoActions = (props) => {
  const [searchToDo, setSearchToDo] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="to-do-actions">
      <div className="search-to-do">
        <Icon
          icon="search"
          className="search-icon"
          onClick={() => setSearchToDo(!searchToDo)}
        />
        {searchToDo && (
          <InputGroup
            asyncControl={true}
            leftIcon="search"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search to do..."
            onKeyDown={(e) => {
              if (e.key === "Enter") props.searchToDo(searchText);
            }}
          />
        )}
        <span className="middle-line">
          {props.noOfLeftToDos + " items left"}
        </span>
      </div>
      <div className="filter-to-do">
        <Button onClick={() => props.selectFilter("all")}>All</Button>
        <Button onClick={() => props.selectFilter("active")}>Active</Button>
        <Button onClick={() => props.selectFilter("completed")}>
          Completed
        </Button>
      </div>
    </div>
  );
};
const mapstateToProps = (state) => {
  return {
    noOfLeftToDos: state.list.filter((todo) => !todo.isDone).length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectFilter,
      searchToDo,
    },
    dispatch
  );
};
export default connect(mapstateToProps, mapDispatchToProps)(ToDoActions);
