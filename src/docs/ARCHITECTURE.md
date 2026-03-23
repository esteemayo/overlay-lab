# Architecture

## Overview

OverlayLab is a headless popup system designed to support scalable and accessible overlay patterns.

It is built around a stack-based state model that allows multiple popups to coexist while maintaining predictable behavior and interaction.

---

## Core Structure

The system is composed of two main layers:

1. Global stack management
2. Popup instance boundaries

---

### 1. Global Stack (PopupProvider)

The `PopupProvider` maintains a centralized stack of active popups.

```ts
type PopupStackItem = {
  id: string;
};
```

#### Responsibilities

- Track all open popups
- Maintain correct stacking order
- Ensure only the topmost popup is interactive
- Porvide open and close operations

### 2. Popup Instance (Context Boundary)

Each `<Popup>` creates an isolated context that connects its internal components.

#### Responsibilities

- Scope state to a single popup
- Allow Trigger and Content to communicate
- Avoid prop drilling
- Prevent conflicts between multiple popups

### 3. Stack Behavior

The system uses a Last-In-First-Out (LIFO) stack model:

- Opening a popup pushes it onto the stack
- Closing a popup removes it from the stack
- The most recently opened popup is always active

This ensures predictable interaction when multiple overlays are present.

### 4. Rendering with Portals

Popups are rendered outside the normal DOM hierarchy using a portal.

#### Benefits

- Avoid z-index conflicts
- Prevent layout issues
- Allow overlays to exist independently of page structure

### 5. Overlay Handling

Overlay behavior is implemented using a custom hook:

```ts
useOverlay(containerRef, {
  isOpen,
  onClose,
});
```

#### Responsibilities

- Detect clicks outside the popup content
- Close popup on overlay interaction
- Handle Escape key events
- Lock background scrolling

### 6. Focus Management

Focus is managed using a focus trap:

```ts
useFocusTrap(containerRef, isOpen);
```

#### Responsibilities

- Move focus into the popup when opened
- Keep focus within the popup
- Cycle focus using Tab and Shift+Tab
- Prevent interaction with background elements

### 7. Variants

The system supports different overlay types:

- Modal (centered)
- Drawer (left / right)
- Sidebar (responsive)

Variants share the same logic but differ in presentation and animation.

### 8. State Model

Instead of using boolean flags, the system relies on a stack-based model.

#### Advantages

- Supports multiple popups
- Prevents conflicting states
- Enables layered interactions

### 9. Design Principles

#### Headless Archictecture

The system separates behavior from UI, allowing full control over styling.

#### Compound Components

The API is built using compound components

```tsx
<Popup>
  <Popup.Trigger />
  <Popup.Content />
</Popup>
```

This enablesa clean and declarative usage pattern.

#### Context Isolation

Each popup instance operates independently, ensuring predictable behavior.

#### Accessibility

Accessibility is built into the system:

- Focus trapping
- Keyboard navigation
- ARIA dialog semantics
- Controlled interaction flow

## Summary

OverlayLab provides a structured approach to building overlay systems by combining:

- Stack-based state management
- Context-driven composition
- Portal-based rendering
- Built-in accessibility and behavior

It is designed to scale beyond simple modals into a complete overlay architecture.
