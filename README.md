# TaskTrackerBot

TaskTrackerBot is a simple and efficient task management Telegram bot built with Node.js and the Telegraf library. It allows users to add, view, complete, and delete tasks directly within Telegram.

---

## Features

- 📝 **Add Tasks:** Quickly add new tasks to your list.
- 📋 **View Tasks:** Check your current task list, including completed and pending tasks.
- ✔️ **Complete Tasks:** Mark tasks as done with a simple command.
- 🗑 **Delete Tasks:** Remove tasks you no longer need.

---

## Commands

| Command                | Description                                 |
| ---------------------- | ------------------------------------------- |
| `/start`               | Start the bot and view the welcome message. |
| `/addtask [task]`      | Add a new task to your list.                |
| `/viewtasks`           | View all your current tasks.                |
| `/donetask [number]`   | Mark a specific task as completed.          |
| `/deletetask [number]` | Delete a specific task from your list.      |

---

## Getting Started

### Prerequisites

1. Install **Node.js** (version 14 or higher).
2. Create a Telegram bot using [BotFather](https://t.me/botfather) and obtain your bot token.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/task-tracker-bot.git
   cd task-tracker-bot

   ```

2. Install dependencies:

```
npm install
```

3. Create a .env file and add your bot token:

```
BOT_TOKEN=your-telegram-bot-token
```

4. Start the bot:

```
node bot.js
```

# Usage

1. Open Telegram and start a chat with your bot.
2. Use the commands to manage your tasks:

- /addtask Complete the project
- /viewtasks
- /donetask 1
- /deletetask 1

Project Structure

```
task-tracker-bot/
├── .env # Environment variables
├── package.json # Dependencies and scripts
├── taskTrackerBot.js # Main bot logic
└── README.md # Project documentation

```

# Future Enhancements

- Persistent storage using a database like MongoDB.
- Deadline reminders for tasks.
- Categorization of tasks.
