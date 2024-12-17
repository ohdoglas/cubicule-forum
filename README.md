# Cubicle Platform

## Overview
Cubicle is an innovative platform integrating a virtual social environment with a forum and marketplace for NFTs. It caters to technology enthusiasts, software developers, and digital art collectors, offering a unique mix of learning, networking, and trading features. This project is built using modern web development technologies to ensure scalability, interactivity, and seamless user experience.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Branches Workflow](#branches-workflow)
- [Project Progress](#project-progress)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Next Steps](#next-steps)
- [Installation and Setup](#installation-and-setup)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Core Functionalities
- **Personalized Cubicles:** Users can create and customize their own virtual cubicles to showcase their NFTs and digital achievements.
- **NFT Marketplace:** Trade, buy, and sell unique NFTs, including rare items and collectibles.
- **Gamified Coin Clicker:** Generate virtual currency by interacting with the platform, enabling purchases of exclusive items.
- **Forum and Community Discussions:** Engage in thematic discussions about technology, programming, and art.
- **Accessibility and Privacy Features:** Compliant with accessibility standards and equipped with clear privacy and cookie policies.
- **Interactive Features:** Minigames, chat functionality, and collaborative tools.

---

## Technologies

### Backend
- **Programming Language:** TypeScript
- **Framework:** Node.js with Express
- **Database:** Prisma ORM and PostgreSQL
- **Authentication:** JWT for token-based authentication
- **Email Services:** Nodemailer for email confirmations and notifications
- **Containerization:** Docker for service orchestration

### Frontend
- **Framework:** React.js
- **Styling:** CSS
- **TypeScript:** For type safety and code maintainability
- **Routing:** React Router DOM
- **API Communication:** Axios

---

## Branches Workflow

- **`main`**: Contains stable, production-ready code.
- **`features`**: Backend feature development branch.
- **`features-front`**: Frontend feature development branch.
- **`dev`**: Consolidation branch for tested and completed features.

---

## Project Progress

### Backend Progress
#### Completed
- Initial repository and folder configuration.
- Installed and configured dependencies.
- Database setup with Prisma schema and migrations.
- Models and tables:
  - User
  - InitialSetup
  - Wallet
  - UserProfile
  - Permissions, Roles, UserRoles
  - LoginAttempt
- Utility Functions:
  - Email, username, and password validation.
  - Password hashing and comparison.
  - JWT generation.
  - Email confirmation and token generation.
- Middleware, controllers, and routes:
  - User registration and login.
  - InitialSetup.
- Seed scripts for populating initial data.

#### Next Steps
- Frontend-backend connection.
- Login attempt tracking.
- OAuth integration for registration and login.
- Advanced user functionalities:
  - Two-factor authentication.
  - Profile editing.
  - Account recovery options.
- Admin functionalities:
  - Moderator creation.
  - User banning and management.

### Frontend Progress
#### Completed
- Initial configuration and dependency setup.
- Static pages:
  - Homepage, About, Features, Pricing, Help Center.
  - Privacy Policy, Accessibility, and Cookie Policy.
- Functional pages:
  - Email confirmation, registration, and login.
  - InitialSetup for admin users.
- Header and footer templates.

#### Next Steps
- Dynamic user pages:
  - Dashboard and profile management.
  - "My Cubicle" and "My NFTs" sections.
- Marketplace pages:
  - NFT browsing, cart, and payment integration.
- Gamification:
  - Coin generator interface.
- Design and conceptualization of cubicle features and marketplace items.

---

## Installation and Setup

### Backend
1. Clone the repository: `git clone https://github.com/ohdoglas/cubicule-forum.git`
2. Navigate to the backend directory.
3. Install dependencies: `npm install`
4. Set up `.env` file with the required variables.
5. Run Docker services: `docker-compose up`
6. Start the development server: `npm run dev`

### Frontend
1. Navigate to the frontend directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

---

## Contributing
Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) and ensure all tests pass before submitting a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

