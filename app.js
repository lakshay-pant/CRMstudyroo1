require('dotenv').config();
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });

//API security

// app.use(express.static(__dirname+"uploads/"));
const port = process.env.PORT || 3001;
app.options('*', cors());
//handle CORS error
app.use(cors());
app.disable('etag');

//MongoDB Connection Setup
const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		//res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
		res.sendFile(path.resolve(__dirname + 'client', 'build', 'index.html'));
	});
}

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true,
	autoIndex: true,
});

if (process.env.NODE_ENV !== 'development') {
	const mDb = mongoose.connection;
	mDb.on('open', () => {
		console.log('MongoDB is conneted');
	});

	mDb.on('error', (error) => {
		console.log(error);
		console.log('errors');
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
const leadTaskUserRouter = require('./src/routers/leadTaskUser.router');
const leadTaskRouter = require('./src/routers/leadTask.router');
const courseRouter = require('./src/routers/courses.router');

//Use Routers

app.use('/v1/user', userRouter);
app.use('/v1/students', studentRouter);
app.use('/v1/tokens', tokensRouter);
app.use('/v1/tasks', taskRouter);
app.use('/v1/leads', leadsRouter);
app.use('/v1/leadTaskUser', leadTaskUserRouter);
app.use('/v1/leadTask', leadTaskRouter);
app.use('/v1/course', courseRouter);

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

//Error handler
const handleError = require('./src/utils/errorHandler');
app.use((req, res, next) => {
	const error = new Error('Resources not found!');
	error.status = 404;
	next(error);
});

app.listen(port, () => {
	console.log(`API is ready on http://localhost:${port}`);
});
