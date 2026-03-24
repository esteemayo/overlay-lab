# OverlayLab

Headless popup system built with React and Next.js, featuring stack-based state management, compound components, and built-in accessibility.

![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![SCSS](https://img.shields.io/badge/SCSS-BEM-pink)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌐 Live Demo

👉 [View OverlayLab in action](https://overlaylab.vercel.com)

---

## 📸 Preview

![OverlayLab Preview](./public/preview.png)

---

## 🎥 Demo

![Demo](./public/demo.gif)

---

## ✨ What This Project Shows

- Building a scalable overlay system (not just a modal)
- Managing multiple popups using a stack
- Designing compound component APIs
- Implementing accessibility (focus trap, keyboard navigation)
- Creating reusable UI architecture

---

## 🧠 Key Highlights

- Designed a stack-based state system instead of boolean flags
- Built reusable popup architecture using compound components
- Implemented focus trapping and keyboard navigation from scratch
- Supported multiple overlay types (modal, drawer, sidebar)

---

## ✨ Features

- Stack-based popup management (supports multiple overlays)
- Headless architecture (fully customizable UI)
- Compound component API
- Portal-based rendering
- Overlay interactions (outside click, escape key)
- Scroll locking
- Focus trapping and keyboard navigation
- Multiple variants (modal, drawer, sidebar)

---

## 🚀 Demo Overview

The system is demonstrated through a transfer flow:

- Open modal from trigger
- Fill transfer form
- Confirm transfer (nested popup)
- View success and receipt states

It also includes a responsive sidebar built using the same popup architecture.

---

## 🧠 Why This Exists

Traditional modal implementations often rely on simple boolean state and tightly coupled UI, which makes them difficult to scale as applications grow.

These approaches typically lack support for:

- Multiple simultaneous overlays
- Consistent accessibility behavior
- Reusable and Composable structure

OverlayLab was built to address these limitations by introducing a stack-based architecture that enables predictable and scalable overlay management.

---

## 🏗 Architecture

OverlayLab is built around a global stack and isolated popup instances.

- A global provider manages active popups
- Each popup creates its own context boundary
- Overlays are rendered using portals

For a detailed breakdown, see:

→ [`ARCHITECTURE.md`](./src/docs/ARCHITECTURE.md)

---

## 🧩 Usage

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

---

## 🧱 Variants

The system supports multiple overlay patterns:

- Modal (centered dialog)
- Drawer (left / right)
- Sidebar (responsive for smaller screens)

Each variant shares the same underlying logic but differs in layout and animation.

---

## ⚙️ Behavior

OverlayLab includes built-in behavior for consistent UX:

- Clicking outside the popup closes it
- Pressing Escape closes the topmost popup
- Background scrolling is disabled when a popup is open
- Only the topmost popup is interactive

---

## ♿ Accessibility

Accessibility is handled through custom hooks:

- Focus is trapped within the popup
- Tab and Shift+Tab cycle through elements
- ARIA roles and attributes are applied to dialogs
- Keyboard interactions are fully supported

---

## 🛠 Key Concepts

- Stack-based state for managing multiple popups
- Compound components for clean API design
- Context isolation per popup instance
- Headless architecture for flexibility
- Custom hooks for behavior (overlay, focus, scroll lock)

---

## 🛠 Built With

- React
- Next.js (App Router)
- TypeScript
- SCSS

---

## 📄 License

MIT
