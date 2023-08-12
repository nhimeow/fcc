---
sidebar_position: 46
---

# Use Array.filter() to Dynamically Filter an Array

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true,
        },
        {
          username: 'Alan',
          online: false,
        },
        {
          username: 'Mary',
          online: true,
        },
        {
          username: 'Jim',
          online: false,
        },
        {
          username: 'Sara',
          online: true,
        },
        {
          username: 'Laura',
          online: true,
        },
      ],
    }
  }
  render() {
    const usersOnline = this.state.users.filter((user) => user.online === true)
    const renderOnline = usersOnline.map((user) => (
      <li key={user.username}>{user.username}</li>
    ))
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    )
  }
}
```

---

The `map` array method is a powerful tool that you will use often when working with React. Another method related to `map` is `filter`, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property `online` which can be set to `true` or `false`, you can filter only those users that are online by writing:

```jsx
let onlineUsers = users.filter((user) => user.online)
```
