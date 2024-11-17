const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// In-memory task storage
const tasks = {};

// Start command
bot.start((ctx) => {
    ctx.reply(`👋 Hello, ${ctx.from.first_name}! Welcome to TaskTrackerBot. Here's what I can do:
  
📋 Commands:
- /addtask [task] - Add a new task
- /viewtasks - View all your tasks
- /donetask [task_number] - Mark a task as completed
- /deletetask [task_number] - Delete a task`);
});

// Add a task
bot.command('addtask', (ctx) => {
    const chatId = ctx.chat.id;
    const task = ctx.message.text.split(' ').slice(1).join(' ').trim();

    if (!task) {
        ctx.reply('⚠️ Please provide a task description.');
        return;
    }

    if (!tasks[chatId]) tasks[chatId] = [];
    tasks[chatId].push({ text: task, completed: false });

    ctx.reply(`✅ Task added: "${task}"`);
});

// View tasks
bot.command('viewtasks', (ctx) => {
    const chatId = ctx.chat.id;

    if (!tasks[chatId] || tasks[chatId].length === 0) {
        ctx.reply(`📂 You have no tasks.`);
        return;
    }

    const taskList = tasks[chatId]
        .map((task, index) => `${index + 1}. ${task.completed ? '✔️' : '❌'} ${task.text}`)
        .join('\n');
    ctx.reply(`📋 Your tasks:\n\n${taskList}`);
});

// Mark a task as completed
bot.command('donetask', (ctx) => {
    const chatId = ctx.chat.id;
    const taskIndex = parseInt(ctx.message.text.split(' ')[1], 10) - 1;

    if (!tasks[chatId] || !tasks[chatId][taskIndex]) {
        ctx.reply(`⚠️ Task not found.`);
        return;
    }

    tasks[chatId][taskIndex].completed = true;
    ctx.reply(`✔️ Task ${taskIndex + 1} marked as completed.`);
});

// Delete a task
bot.command('deletetask', (ctx) => {
    const chatId = ctx.chat.id;
    const taskIndex = parseInt(ctx.message.text.split(' ')[1], 10) - 1;

    if (!tasks[chatId] || !tasks[chatId][taskIndex]) {
        ctx.reply(`⚠️ Task not found.`);
        return;
    }

    const deletedTask = tasks[chatId].splice(taskIndex, 1);
    ctx.reply(`🗑 Task deleted: "${deletedTask[0].text}"`);
});

// Launch the bot
bot.launch().then(() => {
    console.log('TaskTrackerBot is running...');
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
