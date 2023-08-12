---
sidebar_position: 3
---

# Add Comments in JSX

```jsx
{/*<h1>London University of Science</h1>*/}
```

```jsx
{/*
<h1>Rome University of Science</h1>
<p>Falculty of Mathematics, Mechanics and Informatics</p>
*/}
```

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* comments here */}
  </div>
)
```

---
JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax `{/* */}` to wrap around the comment text.
