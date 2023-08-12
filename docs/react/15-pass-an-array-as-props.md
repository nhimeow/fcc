---
sidebar_position: 15
---

# Pass an Array as Props

```jsx
const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
}

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['Walk', 'Cook', 'Bake']} />
        <h2>Tomorrow</h2>
        <List tasks={['Study', 'Code', 'Eat']} />
      </div>
    )
  }
}
```

---

The last challenge demonstrated how to pass information from a parent component to a child component as `props` or properties. This challenge looks at how arrays can be passed as `props`. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

````jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>```
````

The child component then has access to the array property `colors`. Array methods such as `join()` can be used when accessing the property.

```js
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```

This will join all `colors` array items into a comma separated string and produce: `<p>green, blue, red</p>`. Later, we will learn about other common methods to render arrays of data in React.
