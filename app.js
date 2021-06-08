require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3001;
console.log('process.env.PORT', process.env.PORT);
//API security
// app.use(helmet());
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
// app.use(express.static(__dirname+"uploads/"));

//handle CORS error
app.use(cors());

//MongoDB Connection Setup
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true,
});

if (process.env.NODE_ENV !== 'dev') {
	const mDb = mongoose.connection;
	mDb.on('open', () => {
		console.log('MongoDB is conneted');
	});

	mDb.on('error', (error) => {
		console.log(error);
	});

	//Logger
	app.use(morgan('tiny'));
}

// Set body bodyParser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load routers
const userRouter = require('./src/routers/user.router');
const studentRouter = require('./src/routers/student.router');
const taskRouter = require('./src/routers/task.router');
const tokensRouter = require('./src/routers/tokens.router');
const leadsRouter = require('./src/routers/lead.router');
const leadsTask = require('./src/routers/leadTask.router');
//Use Routers

app.use('/v1/user', userRouter);
app.use('/v1/students', studentRouter);
app.use('/v1/tokens', tokensRouter);
app.use('/v1/tasks', taskRouter);
app.use('/v1/leads', leadsRouter);
app.use('/v1/leadTask', leadsTask);

//Error handler
const handleError = require('./src/utils/errorHandler');
app.use((req, res, next) => {
	const error = new Error('Resources not found!');
	error.status = 404;
	next(error);
});
var Storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, callback) {
		callback(null, Date.now() + file.originalname);
	},
});
var upload = multer({
	storage: Storage,
});
app.post('/upload', upload.single('file'), (req, res) => {
	res.send();

	// res.sendFile('upload-file', { title: 'Upload File', success: success });
});
// app.use((error, req, res, next) => {
//   handleError(error, res);
// });
app.get('/upload', function (req, res, next) {
	res.sendFile('upload-file.html', { root: __dirname });
});

app.listen(port, () => {
	console.log(`API is ready on http://localhost:${port}`);
});
