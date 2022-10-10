const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const errorHandler = require('./_helpers/error-handler')
const environment = require('./environment')
const PORT = process.env.PORT || 6001
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));
app.get('/', (req, res) => {
  console.log('Welcome to NODE API (Port: ' + PORT + ' , Environment: ' + environment.env + ')')
  res.send('Welcome to NODE API (Port: ' + PORT + ' , Environment: ' + environment.env + ')')
})


//Member
app.use('/member', require('./controllers/member.controller'))
app.use('/login', require('./controllers/login.controller'))
app.use('/customer', require('./controllers/customer.controller'))
app.use('/state', require('./controllers/state.controller'))
app.use('/city', require('./controllers/city.controller'))

// global error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} , Environment: ${environment.env}`)
})
