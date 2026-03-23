# OverlayLab

A headless, composable popup system built with React and Next.js for creating accessible overlays such as modals, drawers, and responsive sidebars.

This project explores how to design a scalable overlay architecture using a stack-based state modal, compound components, and custom hooks for behavior and accessibility.

## Features

- Stack-based popup management (supports multiple overlays)
- Headless architecture (fully customizable UI)
- Compound component API
- Portal-based rendering
- Overlay interactions (outside click, escape key)
- Scroll locking
- Focus trapping and keyboard navigation
- Multiple variants (modal, drawer, sidebar)

---

## Demo Overview

The system is demonstrated through a transfer flow:

- Open modal from trigger
- Fill transfer form
- Confirm transfer (nested popup)
- View success and receipt states

It also includes a responsive sidebar built using the same popup architecture.

---

## Why This Exists

Traditional modal implementations often rely on simple boolean state and tightly coupled UI, which makes them difficult to scale as applications grow.

These approaches typically lack support for:

- Multiple simultaneous overlays
- Consistent accessibility behavior
- Reusable and Composable structure

OverlayLab was built to address these limitations by introducing a stack-based architecture that enables predictable and scalable overlay management.

---

## Architecture

OverlayLab is built around a global stack and isolated popup instances.

- A global provider manages active popups
- Each popup creates its own context boundary
- Overlays are rendered using portals

For a detailed breakdown, see:

→ [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md)

---

## Usage

```tsx
<Popup>
  <Popup.Trigger>Open</Popup.Trigger>

  <Popup.Content variant='modal'>
    <Popup.Header>
      <Popup.Title>Title</Popup.Title>
      <Popup.Close />
    </Popup.Header>

    <Popup.Body>Content</Popup.Body>
  </Popup.Content>
</Popup>
```

## Variants

The system supports multiple overlay patterns:

- Modal (centered dialog)
- Drawer (left / right)
- Sidebar (responsive for smaller screens)

Each variant shares the same underlying logic but differs in layout and animation.

## Behavior

OverlayLab includes built-in behavior for consistent UX:

- Clicking outside the popup closes it
- Pressing Escape closes the topmost popup
- Background scrolling is disabled when a popup is open
- Only the topmost popup is interactive

## Accessibility

Accessibility is handled through custom hooks:

- Focus is trapped within the popup
- Tab and Shift+Tab cycle through elements
- ARIA roles and attributes are applied to dialogs
- Keyboard interactions are fully supported

## Key Concepts

- Stack-based state for managing multiple popups
- Compound components for clean API design
- Context isolation per popup instance
- Headless architecture for flexibility
- Custom hooks for behavior (overlay, focus, scroll lock)

## Built With

- React
- Next.js (App Router)
- TypeScript
- SCSS

## License

MIT
