---
sidebar_position: 13
---

# Write a React Component from Scratch

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='challenge-node'>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
```

---

Now that you've learned the basics of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 `class` which extends `React.Component`. It has a render method that returns HTML (from JSX) or `null`. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.
