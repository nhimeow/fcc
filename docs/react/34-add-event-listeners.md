---
sidebar_position: 34
---

# Add Event Listeners

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
    this.handleEnter = this.handleEnter.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! ',
    }))
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter()
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}
```

---

The `componentDidMount()` method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.

You've already been using some of these synthetic event handlers such as `onClick()`. React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.
