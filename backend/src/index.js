const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./config/database')
const Todo = require('./models/todo')
const app = express()
const port = 8080
const cors = require('cors')

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Sync Sequelize models with the database
sequelize
	.sync({ force: true }) // Note: 'force: true' drops existing tables and recreates them; use with caution in a production environment
	.then(() => {
		console.log('Database and tables synchronized')
	})
	.catch(error => {
		console.error('Error syncing database:', error)
	})

// Routes
app.get('/todos', async (req, res) => {
	try {
		const todos = await Todo.findAll()
		res.json(todos)
	} catch (error) {
		console.error('Error fetching todos', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
})

app.get('/todos/:id', async (req, res) => {
	const todoId = parseInt(req.params.id)
	try {
		const todo = await Todo.findByPk(todoId)
		if (todo) {
			res.json(todo)
		} else {
			res.status(404).json({ message: 'Todo not found' })
		}
	} catch (error) {
		console.error('Error fetching todo', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
})

app.post('/todos', async (req, res) => {
	const newTodo = req.body
	try {
		const todo = await Todo.create(newTodo)
		res.status(201).json(todo)
	} catch (error) {
		console.error('Error creating todo', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
})

app.put('/todos/:id', async (req, res) => {
	const todoId = parseInt(req.params.id)
	const updatedTodo = req.body
	try {
		const [updatedRowCount, updatedTodos] = await Todo.update(updatedTodo, {
			where: { id: todoId },
			returning: true,
		})

		if (updatedRowCount === 1) {
			res.json(updatedTodos[0])
		} else {
			res.status(404).json({ message: 'Todo not found' })
		}
	} catch (error) {
		console.error('Error updating todo', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
})

app.delete('/todos/:id', async (req, res) => {
	const todoId = parseInt(req.params.id)
	try {
		const deletedRowCount = await Todo.destroy({
			where: { id: todoId },
		})

		if (deletedRowCount) {
			res.json({ message: 'Todo deleted successfully' })
		} else {
			res.status(404).json({ message: 'Todo not found' })
		}
	} catch (error) {
		console.error('Error deleting todo', error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
