# Quizzler 🧠

Quizzler is a modern, fast, and interactive quiz application built with **Next.js 16** and **React 19**. It challenges users with computer science questions dynamically fetched from the Open Trivia Database API, featuring a sleek user interface and a real-time countdown timer.

![Quizzler Preview](public/home.avif)

## ✨ Features

- **Dynamic Questions**: Fetches 10 fresh computer science questions per session from the Open Trivia Database.
- **Timed Challenges**: Each question comes with a 30-second timer to keep the game exciting.
- **Interactive UI**: Responsive and visually appealing design with smooth transitions and hover effects.
- **Real-time Scoring**: Automatically calculates and displays your final score at the end of the quiz.
- **Mobile Responsive**: Optimized for all screen sizes, from mobile phones to large desktop monitors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/quizzler.git
   cd quizzler
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser to start playing!

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: 
  - `he`: For decoding HTML entities in API responses.
  - `clsx` & `tailwind-merge`: For dynamic class management.

## 📁 Project Structure

```text
src/
├── app/               # Next.js App Router pages (Home, Quiz, Results)
├── components/        # Reusable React components
├── utils/             # Utility functions (e.g., tailwind-merge)
└── public/            # Static assets and background images
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🆘 Support

If you have any questions or find a bug, please open an issue in the repository.

---

Built with ❤️ by [Your Name/Organization]
