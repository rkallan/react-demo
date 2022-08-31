const jsonServer = require("json-server");
const https = require("https");
const path = require("path");
const fs = require("fs");
const pause = require("connect-pause");

const keyFilePath = path.join(__dirname, "../.cert/key.pem");
const certFilePath = path.join(__dirname, "../.cert/cert.pem");
const customRoutesFilePath = path.join(__dirname, "routes.json");
const dbFilePath = path.join(__dirname, "db.json");

const server = jsonServer.create();
const router = jsonServer.router(dbFilePath);
const middlewares = jsonServer.defaults();

const arguments = process.argv.reduce((data, currentItem) => {
    const tempData = data;
    if (currentItem.startsWith("--")) {
        const [key, value] = currentItem.slice(2).split("=");
        tempData[key] = value;
    }
    return tempData;
}, {});
const port = arguments.port || 4000;

server.use(jsonServer.bodyParser);

server.use(middlewares);

// custom routes
const customRoutes = JSON.parse(fs.readFileSync(customRoutesFilePath));
server.use(jsonServer.rewriter(customRoutes));

// custom behaviour for login
server.get("/user", (req, res, next) => {
    const users = router.db.get("users").valueOf();
    const { email, password } = req.body;
    const user = users.find((item) => item.email === email && item.password === password);
    delete user.password;

    if (user) {
        res.jsonp(user);
    }

    if (!user) {
        res.sendStatus(401);
    }
});

server.use((req, res, next) => {
    next();
});

server.use(pause(2000));
server.use(router);

const key = fs.readFileSync(keyFilePath);
const cert = fs.readFileSync(certFilePath);
https
    .createServer(
        {
            key,
            cert,
        },
        server
    )
    .listen(port, () => {
        console.info("JSON Server is started");
        console.info(`Go to https://localhost:${port}/`);
    });
