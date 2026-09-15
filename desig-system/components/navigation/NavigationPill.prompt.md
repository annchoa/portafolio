One navigation link rendered as a small rounded pill — the only interactive control the portfolio file defines.

```jsx
<NavigationPill label="EN" state="active" />
```

- `state`: `"default"` (transparent, dark ink), `"active"` (brand-tertiary fill), `"hover"` (neutral hover fill).
- 8px radius, 8px padding all round, Inter 16/1, width fits content.
- Colors come from the Figma variable collection (`--background-brand-tertiary`, `--text-default-default`), so it responds to `[data-theme="dark"]`. In the portfolio page itself the pills are recolored inline to brand pink (`--pink-500`) over a `--surface-chip` backing — pass `style` to do that.
