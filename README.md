# Class-Based Components Practice Project

This project acts as a practical deep-dive into **React Class-based Components**. While modern React development focuses on Functional Components and Hooks, understanding Class Components is crucial for maintaining legacy codebases and for implementing specific features like Error Boundaries.

## 🌟 Project Overview

A simple "User Finder" application that allows searching through a list of users. The app simulates real-world patterns like data fetching, filtering, contexts, and error handling, but implemented entirely using the Class-based approach.

## 🎓 Key Learnings & Concepts

### 1. Class Component Fundamentals

- **Syntax**: Defining components using `class MyComponent extends Component`.
- **State**: Managing state objects using `this.state` and updating them via `this.setState()`.
- **The `this` Keyword**: Understanding strict binding rules (e.g., `.bind(this)`) for event handlers to ensure access to the component instance.

### 2. Lifecycle Methods vs. Hooks

We explored how traditional lifecycle methods map to modern Hooks:

- **`componentDidMount()`** $\rightarrow$ `useEffect(..., [])` (Initial Setup / HTTP Requests).
- **`componentDidUpdate()`** $\rightarrow$ `useEffect(..., [deps])` (Reacting to prop/state changes).
- **`componentWillUnmount()`** $\rightarrow$ `useEffect` Cleanup Function (Cleanup timers/listeners).

### 3. Context API in Classes

- Using **`static contextType`** to consume a single Context in a clean, readable way (similar to `useContext`).
- Accessing context data via `this.context` inside lifecycle methods (impossible with `Context.Consumer`).

### 4. 🛡️ Error Boundaries

We implemented a robust **Error Boundary** component.

- **Purpose**: To catch JavaScript errors anywhere in the child component tree, log them, and display a fallback UI instead of crashing the entire app.
- **Mechanism**: Using the **`componentDidCatch()`** lifecycle method.
- **Constraint**: This is one of the few features that **strictly requires** a Class Component (it has no Hooks equivalent yet).

### 5. Architectural Shifts

- **Imperative vs. Declarative**: Understanding the mental shift from Hooks (Synchronizing state) back to Lifecycle methods (Checking for changes manually with `prevProps !== this.props`).

## 🛠️ Tech Stack

- React (JS)
- CSS Modules for styling
