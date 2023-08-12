---
sidebar_position: 19
---

# Access Props Using this.props

```jsx
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Welcome name='Jessica' />
      </div>
    )
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
      </div>
    )
  }
}
```

---

The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.

Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called `data`, you write `{this.props.data}` in JSX.
