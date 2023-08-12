---
sidebar_position: 9
---

# Create a Component with Composition

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  )
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    )
  }
}
```

---

Now we will look at how we can compose multiple React components together. Imagine you are building an app and have created three components: a `Navbar`, `Dashboard`, and `Footer`.

To compose these components together, you could create an `App` parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the `render` method you could write:

```jsx
return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the `App` component and the `Navbar`, `Dashboard`, and `Footer`.
