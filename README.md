# 🗂 Portfolio — Setup Guide

## File Structure
```
portfolio/
├── index.html      ← The entire website (never edit this)
├── data.js         ← YOUR SINGLE SOURCE OF TRUTH (edit only this)
├── README.md       ← This file
└── assets/         ← Create this folder for your files
    ├── photo.jpg           ← Your profile photo
    ├── resume.pdf          ← Your resume
    └── diagrams/
        ├── flow1.png       ← Your exported diagrams
        └── wireframe.png
```

---

## ✏️ How to Customize — Edit `data.js` Only

### 1. Your basic info
```js
personal: {
  name:       "Rahul Sharma",
  initials:   "RS",
  title:      "Senior Business & Data Analyst",
  location:   "Gurugram, India",
  photo:      "assets/photo.jpg",   // ← add your photo path
  resumeLink: "assets/resume.pdf",  // ← add your resume path
}
```

### 2. Add your photo
- Place `photo.jpg` in the `assets/` folder
- Set `photo: "assets/photo.jpg"` in `personal`

### 3. Add/edit experience
```js
experience: [
  {
    company:   "Google",
    role:      "Senior Data Analyst",
    startDate: "2022-03",   // YYYY-MM format
    endDate:   null,        // null = "Present"
    desc:      "Led analytics for...",
    wins:      ["↑ 40% Growth", "10 Dashboards"],
  },
  // add more objects...
]
```
> **Years of experience auto-calculates** from your earliest startDate to today.

### 4. Add/edit projects
```js
projects: [
  {
    category: "Growth Analytics",
    title:    "My Project Name",
    desc:     "What I built and the impact...",
    tags:     ["Python", "SQL"],
    impact:   "₹X impact",
    emoji:    "📊",
    gradient: "rgba(14,124,123,.12),rgba(10,37,64,.05)",
    link:     "https://github.com/you/project",
    featured: true,   // ← makes it a wide card (use for 1 project only)
  },
]
```
> **Project count auto-calculates** from the length of this array.

### 5. Add your diagrams
```js
diagrams: [
  {
    type:       "process",          // process | product | framework | data
    typeLabel:  "Process Flow · draw.io",
    title:      "My Diagram Title",
    desc:       "What this diagram shows...",
    emoji:      "🔄",
    image:      "assets/diagrams/my-flow.png",  // ← exported PNG
    figmaLink:  "https://figma.com/file/...",   // ← or leave ""
    drawioLink: "",
  },
]
```

### 6. Enable the contact form (free)
1. Go to [formspree.io](https://formspree.io) → create free account
2. Create a new form → copy the form ID (looks like `xabcdefg`)
3. In `data.js`: `formspreeId: "xabcdefg"`

---

## 🚀 Hosting on GitHub Pages (free)

1. Create a new GitHub repo (e.g. `yourusername.github.io`)
2. Upload all files in this folder to the repo root
3. Go to **Settings → Pages → Source: main branch / root**
4. Your portfolio is live at `https://yourusername.github.io`

---

## 🎨 Change the color theme
In `index.html`, find the `:root` block at the top and change:
```css
--teal:  #0e7c7b;   /* main accent color */
--navy:  #0a2540;   /* dark backgrounds */
--paper: #fafaf8;   /* page background */
```

---

## 📊 Auto-calculated values
| Value | How it's calculated |
|---|---|
| Years of experience | `today - earliest startDate` in your experience array |
| Project count | `projects.length` |
| Metrics strip | First two boxes auto-filled; rest from `metrics` array |
| Filter buttons | Auto-generated from unique `type` values in `diagrams` |
| Footer year | `new Date().getFullYear()` |
| Marquee items | Doubled automatically for seamless loop |
