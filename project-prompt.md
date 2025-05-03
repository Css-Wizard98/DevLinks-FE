# 🧠 Project Context for AI Assistants

## 📁 Folder Structure & Indexing
- Thoroughly index the entire project directory on initialization.
- Understand and remember the folder structure, including:
  - Components
  - Pages or Routes
  - Assets (icons/images)
  - Utility/helper files
  - Context or state management (if present)
- Identify reusable components and group them meaningfully.
- Ensure each folder has an `index.ts` where re-exports make sense for clean imports.

---

## 🎨 UI & Styling
- Follow **Airbnb's UI principles**: clean, modern, readable, with good white space and consistent font sizing.
- Tailwind CSS is used for styling—stick to utility-first design with consistent spacing and sizing.
- Lucide React is the icon library—use it whenever icons are required.
- A global `:root` or Tailwind config defines the project's color palette—**always use these tokens** instead of hardcoded colors.

---

## 💡 Component Philosophy
- Every new component should follow **DRY** and **SOLID** principles.
  - **Single Responsibility**: Each component does one thing.
  - **Open/Closed**: Components should be extensible but closed for direct modification.
  - **Reusability**: Always extract logic and UI patterns that repeat.
- Use a consistent pattern for component folders:
