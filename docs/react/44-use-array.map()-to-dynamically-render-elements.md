---
sidebar_position: 44
---

# Use Array.map() to Dynamically Render Elements

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5,
}

class MyToDoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      toDoList: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',')
    this.setState({
      toDoList: itemsArray,
    })
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    })
  }
  render() {
    const items = this.state.toDoList.map((i) => <li>{i}</li>)
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    )
  }
}
```

---

Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using `Array.map()` in React illustrates this concept.

For example, you create a simple "To Do List" app. As the programmer, you have no way of knowing how many items a user might have on their list. You need to set up your component to dynamically render the correct number of list elements long before someone using the program decides that today is laundry day.
