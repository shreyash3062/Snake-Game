# 🐍 Snake Game

A classic Snake game built with plain **HTML, CSS, and JavaScript** — no frameworks, no libraries. Eat food to grow, avoid the walls, and try to beat your high score (saved locally in your browser).

## 🎮 Demo

https://shreyash3062.github.io/Snake-Game/

## ✨ Features

- Grid-based board that automatically sizes itself to fit the screen
- Arrow-key controls (Up / Down / Left / Right)
- Score tracking, with high score saved in `localStorage` across sessions
- In-game timer (minutes-seconds)
- Start and Game Over modals
- Restart without reloading the page

## 🛠️ Built With

- HTML5
- CSS3 (CSS variables / custom properties, Flexbox, CSS Grid)
- Vanilla JavaScript (DOM manipulation, `setInterval`, `localStorage`)

## 📂 Project Structure

```
Snake-Game/
├── index.html      # Page structure and modals
├── style.css       # Styling, layout, and theming
├── script.js       # Game logic
└── README.md
```

## 🚀 Getting Started

### Run it locally

1. Clone the repository
   ```bash
   git clone https://github.com/shreyash3062/Snake-Game.git
   ```
2. Open the project folder
   ```bash
   cd Snake-Game
   ```
3. Open `index.html` in your browser — or, if you're using VS Code, right-click `index.html` and select **Open with Live Server** for auto-reload while editing.

## 🕹️ How to Play

1. Click **Start Game**.
2. Use the **Arrow Keys** to steer the snake toward the red food block.
3. Each food block eaten grows the snake and adds to your score.
4. Hitting the wall ends the game — click **Restart Game** to try again.

## 📌 Possible Future Improvements

- Self-collision detection (game over when snake hits itself)
- Pause/resume functionality
- Difficulty levels with adjustable speed
- Mobile/touch swipe controls

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
