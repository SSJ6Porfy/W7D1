import { connect } from "react-redux";
import TodoList from "./todo_list";
import allTodos from "../../reducers/selectors";
import { createTodo, removeTodo, fetchTodos } from "../../actions/todo_actions";


const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
