---
sidebar_position: 37
---

# Add Inline Styles in React

```jsx
const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple',
}

class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>
  }
}
```

---

You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the `style` attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with `fontSize` instead of `font-size`. Hyphenated words like `font-size` are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.

All property value length units (like `height`, `width`, and `fontSize`) are assumed to be in `px` unless otherwise specified. If you want to use `em`, for example, you wrap the value and the units in quotes, like `{fontSize: "4em"}`. Other than the length values that default to px, all other property values should be wrapped in quotes.
