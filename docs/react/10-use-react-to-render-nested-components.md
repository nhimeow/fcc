---
sidebar_position: 10
---

# Use React to Render Nested Components

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  )
}

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  )
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    )
  }
}
```

---

The last challenge showed a simple way to compose two components, but there are many different ways you can compose components with React.

Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.
