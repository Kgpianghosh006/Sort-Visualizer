# 📊 Sort Visualizer


### [Live Demo 🚀](https://sort-visualizer-green.vercel.app/)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

An interactive web application built with **React** to visualize the sorting process of various algorithms. Designed with a sleek **Neumorphic UI**, this tool helps users understand how data structures move and change in real-time.

---

## 🎨 Preview & Design
The application utilizes a **Neumorphic (Soft UI)** design language, emphasizing depth through subtle shadows and a clean, monochromatic color palette. 

- **Primary Color:** `#ECF0F3` (Background)
- **Accent Color:** `#5FB8FD` (Interactive elements)
- **State Colors:** 🟡 Comparing | 🔴 Swapping | 🟢 Sorted

---

## 🧠 Supported Algorithms

| Algorithm | Time Complexity (Best) | Time Complexity (Worst) | Space Complexity |
| :--- | :---: | :---: | :---: |
| **Quick Sort** | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ |
| **Heap Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ |
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(1)$ |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(1)$ |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(1)$ |

---

## 🚀 Technical Implementation

### Unified Animation Engine
Instead of triggering state updates directly within the algorithm loops (which leads to "race conditions"), I implemented a **Command Pattern**:

1. **Generation:** Algorithms act as "Pure Functions," returning an array of specific actions (e.g., `["compare", i, j]`).
2. **Synchronization:** A custom `runUnifiedAnimation` handler iterates through these commands using a **Timeout Queue**.
3. **Visualization:** The DOM is updated via refs and class manipulation to ensure 60fps performance without unnecessary React re-renders.

### Key Features
- **Dynamic Speed**: Real-time adjustment of visualization speed.
- **Manual Input**: Custom array support via comma-separated integers.
- **Interruptible State**: A robust **Reset** functionality that clears all background timeouts instantly.

---

## 🛠️ Installation & Setup

1. **Clone the project**
   ```bash
   git clone [https://github.com/your-username/sort-visualizer.git](https://github.com/your-username/sort-visualizer.git)
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
