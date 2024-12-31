# Live-n-Talk

**Live-n-Talk** is a real-time messaging web application that enables users to engage in one-on-one and group chats with instant message delivery, media sharing, and more. Built with modern web technologies, it ensures a smooth, secure, and responsive user experience.

## Features

- **Real-Time Messaging**: Chat instantly with friends and groups using WebSockets.
- **User Authentication**: Secure login and account management with JWT-based sessions.
- **Group Chat**: Create and manage group chats with multiple participants.
- **Media Sharing**: Share images, videos, and files within conversations.
- **User Presence**: Track when users are online, offline, or away.
- **Message Notifications**: Receive real-time alerts for new messages.
- **Message History**: Access your full conversation history.
- **End-to-End Encryption**: Secure messaging with encryption to protect user data.
- **Responsive Design**: Optimized for mobile and desktop devices.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (React.js or vanilla JS)
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: WebSockets
- **Database**: MongoDB (for storing user data and chat history)
- **Authentication**: JSON Web Tokens (JWT)
- **File Storage**: Cloud-based storage (e.g., AWS S3)
- **Security**: HTTPS, End-to-End Encryption (E2EE), 2FA

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm or yarn (Node package manager)
- MongoDB (local or remote instance)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DevBhatia22/Live-n-Talk.git
```

### 2. Install dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd Live-n-Talk
npm install
# Or if using yarn
yarn install
```

### 3. Set up the database

Ensure you have a running MongoDB instance, either locally or via a service like MongoDB Atlas. Update the database connection string in the `.env` file.

### 4. Set up environment variables

Create a `.env` file in the root of the project and add the following environment variables:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=your_preferred_port
```

### 5. Run the application

Start the backend server:

```bash
npm start
```

This will start the backend on the default port (usually `3000`). The frontend can be served using a separate React server or directly within this project if integrated.

### 6. Frontend (Optional)

If using a separate frontend, navigate to the frontend directory and run:

```bash
cd frontend
npm start
# Or if using yarn
yarn start
```

The frontend will be accessible via `http://localhost:3000`.

## Usage

- **Create an account**: Sign up with an email address and password.
- **Log in**: Use your credentials to log into the platform.
- **Start a conversation**: Click on a user from the user list or create a new group to start chatting.
- **Send media**: Attach images or videos in your messages by clicking on the file input button.
- **Real-time updates**: Watch your messages be delivered and read instantly.

## Security Considerations

- All messages are encrypted using End-to-End Encryption (E2EE).
- User passwords are securely hashed using bcrypt.
- JWT tokens are used for secure user authentication and session management.

## Future Enhancements

- **Group Video Chat**: Allow users to join video calls within group chats.
- **Voice Messaging**: Add voice message support for a richer communication experience.
- **File Sharing & Preview**: Enhance file-sharing features, with better previews and file management.
- **Push Notifications**: Integrate push notifications for mobile devices.
- **User Mentions**: Implement @mentions in group chats for better user interaction.

## Acknowledgments

- **WebSocket**: For real-time communication.
- **JWT**: For secure authentication.
- **MongoDB**: For storing chat history and user data.