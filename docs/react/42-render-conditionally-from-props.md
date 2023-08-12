---
sidebar_position: 42
---

# Render Conditionally from Props

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1, // change code here
    })
  }
  render() {
    const expression = Math.random() >= 0.5
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>

        <Results fiftyFifty={expression} />

        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    )
  }
}
```

---

So far, you've seen how to use `if/else`, `&&,` and the ternary operator (`condition ? expressionIfTrue : expressionIfFalse`) to make conditional decisions about what to render and when. However, there's one important topic left to discuss that lets you combine any or all of these concepts with another powerful React feature: props. Using props to conditionally render code is very common with React developers — that is, they use the value of a given prop to automatically make decisions about what to render.

In this challenge, you'll set up a child component to make rendering decisions based on props. You'll also use the ternary operator, but you can see how several of the other concepts that were covered in the last few challenges might be just as useful in this context.
