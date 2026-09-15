A group of Navigation Pills laid out in a row or a column — use it for the portfolio's language switcher and for any small link cluster.

```jsx
<NavigationPillList direction="row" link5={false} link6={false} link7={false} />
```

- `direction`: `"row"` (377px wide, wraps) or `"column"` (115px wide, stretch pills).
- `link1`…`link7` are booleans that show/hide each slot; row exposes 7, column 6.
- `icon1`…`icon4` swap the nested pill instance for arbitrary content.
- The list hard-codes which member is `active` (row: first; column: second), matching the source variants.
