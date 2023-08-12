---
sidebar_position: 2
---

# Create a Complex JSX Element

```jsx
const JSX = (
  <div>
    <h1>Heading.</h1>
    <p>Paragraph</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>
)
```

---

The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

One important thing to know about nested JSX is that it must return a single element.

This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:

**Valid JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Invalid JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```
