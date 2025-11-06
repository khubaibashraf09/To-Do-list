## To-Do List App

A simple, modern, and responsive To-Do List web app built with HTML, CSS, and vanilla JavaScript. It supports adding, editing, completing, and deleting tasks with persistent storage using `localStorage`. Includes a Light/Dark theme toggle and smooth UI interactions.

### ✨ Features
- **Add tasks**: Quickly add new tasks using the input and Add button or press Enter.
- **Edit tasks**: Update existing tasks inline via a prompt.
- **Complete/Uncomplete**: Mark tasks as done and toggle back if needed.
- **Delete tasks**: Remove tasks with a confirmation to prevent mistakes.
- **Persistent storage**: Tasks and theme are saved in `localStorage` and restored on reload.
- **Theme toggle**: Switch between Light and Dark modes with one click.
- **Responsive UI**: Looks great on mobile and desktop.

###  Screens
- Main view with task list
- Theme toggle (Light/Dark)

> Tip: You can customize colors in `style.css` using the CSS variables defined for both themes.

###  Project Structure
```
To-Do List/
├─ index.html    # App markup
├─ style.css     # Styling and theming (Light/Dark)
├─ script.js     # App logic and localStorage
└─ Readme.md     # Project documentation
```

###  Getting Started
1. Download or clone this repository.
2. Open `index.html` directly in your browser (double-click or drag-drop into a tab).
   - No build step, server, or dependencies required.

###  How It Works
- On load, tasks are read from `localStorage` and rendered.
- Adding a task pushes a `{ text, completed }` object into the in-memory array and saves it.
- Edit, complete, and delete actions update the array and re-render the list.
- Theme preference is stored in `localStorage` (`light` or `dark`).

###  Key Files
- `index.html`: Base structure and buttons (`Add`, theme toggle, task list container).
- `script.js`: Core logic — add, edit, complete, delete, render, and theme persistence.
- `style.css`: Modern glassmorphism style, responsive layout, and theme variables.

### ⌨ Shortcuts
- Press **Enter** in the input field to add a task.

###  Customization
- Edit theme colors via CSS custom properties:
  - Dark theme variables under `:root`
  - Light theme overrides under `.light`
- Button styles for `edit`, `delete`, and `complete` can be adjusted in their respective classes.

###  Browser Support
Works on all modern browsers that support `localStorage` and basic ES6 JavaScript.

###  Potential Improvements (Ideas)
- Inline editing UI (instead of prompt)
- Task filtering (All / Active / Completed)
- Reorder tasks via drag-and-drop
- Due dates and reminders
- Import/Export tasks (JSON)

###  Troubleshooting
- **Tasks not saving**: Ensure your browser allows `localStorage` (no private mode restrictions).
- **Styles look off**: Hard refresh the page (Ctrl/Cmd + Shift + R) to clear cached CSS.

###  License
No license specified. Add one if you plan to distribute or open-source.

---
Built with ❤️ using HTML, CSS, and JavaScript.


