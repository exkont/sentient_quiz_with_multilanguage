DISCORD: ilyakudyavykh

X.com: https://x.com/IKucheriavykh

Sentient Protocol Quiz & Learning Platform
An interactive educational platform for exploring the Sentient Protocol—a revolutionary blockchain system that integrates artificial intelligence and decentralized technologies.

🚀 About the Project
The Sentient Protocol Quiz is a modern web application built with Next.js that offers users a comprehensive way to learn about the architecture and principles of the Sentient Protocol through interactive quizzes, educational materials, and resources.

✨ Core Features
📘 Learning (Learn)
Architecture: Understanding the core components of the Sentient Protocol

AI Pipeline: Grasping data processing and training workflows

Governance: Exploring the system's governance structure

Ownership: Comprehending tokenization and ownership models

DeFi: Investigating decentralized finance components

Smart Contracts: Studying the implementation of smart contracts

🎯 Interactive Quizzes (Quiz)
Dynamic questions on the Sentient Protocol's architecture

Multiple-choice format with instant feedback

Progress tracking and results analysis

Adaptive quizzes available in multiple languages

📚 Resources
Official Sentient Protocol documentation

Technical guides and API references

Categorized materials by topic

Direct links to docs.sentient.xyz

🌍 Multilingual Support
Available in 5 languages: English, Russian, Ukrainian, Chinese, Turkish

Automatic language preference saving

Localized content across all sections

🛠️ Technology Stack
Frontend: Next.js 15, React 19, TypeScript

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React

Bundler: Turbopack

Linting: ESLint

🏗️ Application Architecture
Component Structure
Navigation: Navigation menu with language switcher

AnimatedBackground: Animated background with particles

StartScreen: Quiz start screen

QuestionCard: Card displaying a question and answer options

ResultScreen: Quiz results screen

LanguageSelector: Interface for selecting the language

Hooks & Logic
useQuiz: Core quiz management logic

Localization and language management

API integration for answer validation

API Endpoints
/api/questions: Fetch questions in the selected language

/api/check-answer: Validate answers

🎨 Design Highlights
Modern UI/UX: Minimalistic design with smooth animations

Responsiveness: Full mobile device support

Animations: Interactive elements powered by Framer Motion

Mascot: Charming character Dobby enhancing user experience

Color Scheme: Sentient Protocol branding with orange accents

📱 Main Pages
Home (/) - Overview of features and call to action

Learn (/learn) - Educational materials by topic

Quiz (/quiz) - Interactive quizzes with questions

Resources (/resources) - Links to documentation and materials

🚀 Project Setup
Prerequisites
Node.js 18+

npm or yarn

Installation & Running
bash
Copy
Edit
# Clone the repository
git clone https://github.com/yourusername/sentient_faq_quiz.git
cd sentient_faq_quiz

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production version
npm start
🧠 Data Structure
Question Types
typescript
Copy
Edit
type Question = {
  question: string;
  options: string[];
  answer: string;
}
Quiz State
typescript
Copy
Edit
type QuizState = {
  currentQuestion: number;
  score: number;
  answers: string[];
  isComplete: boolean;
  isStarted: boolean;
}
🌟 Key Features
Interactivity: Smooth transitions between screens and animations

Personalization: Saving language preferences

Educational Value: Structured approach to learning complex concepts

Accessibility: Support for multiple languages for a global audience

Performance: Optimized build with Next.js and Turbopack

🔗 Links
Sentient Protocol Documentation: https://docs.sentient.xyz/

Architecture: https://docs.sentient.xyz/architecture

AI Pipeline: https://docs.sentient.xyz/ai_pipeline

Governance: https://docs.sentient.xyz/blockchain/governance

👨‍💻 Author
Ilya Kucheryavykh

Discord: ilyakudyavykh

X.com: @IKucheriavykh