# FlashLearn

FlashLearn is an educational web application designed to facilitate interactive learning through flashcards. The application provides users with the opportunity to enhance their knowledge of JavaScript or Java programming languages through engaging quizzes and scoring mechanisms.

## Features

- **Authentication and Authorization**: FlashLearn ensures secure access to its features by implementing authentication and authorization checks. Users are required to log in, and the system verifies their credentials before granting access. The "dog" username serves as an unauthorized user entry, simplifying the authentication process for testing purposes.

- **Flashcard Learning**: Users can choose to focus on learning either JavaScript or Java. Each learning session presents random questions from the selected collection, with detailed answers available on the flip side of the flashcards. This interactive learning approach promotes active engagement and knowledge retention.

- **Scoring System**: FlashLearn tracks users' progress through a comprehensive scoring system. A scoreboard displays the current total score from all collections, as well as the user's personal best score. Users can increment their score by selecting the correct answer button and reset it by choosing the incorrect answer button, fostering a sense of accomplishment and motivation.

- **Collection Management**: FlashLearn offers users the flexibility to switch between different collections of flashcards. This feature allows users to tailor their learning experience to their preferences and requirements, ensuring a personalized and adaptable learning journey.

## Technology Stack

FlashLearn utilizes the following technology stack:

- **Backend**:
  - **Node.js**: Powers the server-side logic and API endpoints.
  - **Express**: Handles routing, middleware, and HTTP requests/responses.
  - **Cookie-parser**: Middleware for parsing cookie headers.
  - **UUID**: Generates unique session identifiers.

- **Frontend**:
  - **React**: Library for building dynamic user interfaces.
  - **React DOM**: Renders React components in the browser.
  - **Vite**: Development server and build tool for rapid frontend development.

## Usage

To get started with FlashLearn, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using npm: `npm install`.
3. Run the server: `npm start`.
4. For development:
   - Run the client development server: `npm run dev:client`.
   - Run the server in development mode: `npm run dev:server`.
   - Lint code: `npm run lint`.
   - Preview build: `npm run preview`.
   - Build for production: `npm run build`.

## Acknowledgments

FlashLearn owes its success to the guidance and expertise of Professor Ritter Brett, whose valuable insights and teaching methods have greatly contributed to the project's development.

