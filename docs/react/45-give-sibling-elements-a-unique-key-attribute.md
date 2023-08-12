---
sidebar_position: 45
---

# Give Sibling Elements a Unique Key Attribute

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
]

function Frameworks() {
  // Using the array index as the key (should be avoided):
  const renderFrameworks = frontEndFrameworks.map((item, index) => (
    <li key={index}>{item}</li>
  ))

  // const renderFrameworks = frontEndFrameworks.map((item) =>
  //   <li key={item}>{item}</li>
  // );

  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  )
}
```

---

The last challenge showed how the `map` method is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a `key` attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.

Note: Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.
