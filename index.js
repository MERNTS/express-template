const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const articleRouter = require("./routes/aritcle.route");
const mainRouter = require('./routes/main');
const apiRouter = require('./routes/api');

const errorHandler = require('./middlewares/error-handler');

// 1. app
const app = express();
app.use(cors())
app.use(express.static('public'));

// 2. routes
app.use('/', mainRouter)
// app.use('/api', apiRouter)
//register the enpoints
app.use("/api", articleRouter);

// 3. middlewares
app.use((req, res, next) => {
    console.log(`请求日志：${req.method} ${req.url} ${new Date()}`);
    next(); // 放行
}) //可以发现：任何请求进来都会先打印请求日志，然后才会执行具体的业务处理函数

// 4. template engine
app.set('views', './views');    // 指定模板存放目录
app.set('view engine', 'hbs');  // 指定模板引擎为 Handlebars

//5. body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_YY)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
