---
sidebar_position: 17
---

# Override Default Props

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0,
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Items quantity={10} />
  }
}
```

---

The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.
