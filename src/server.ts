// Path
import path from 'path';
// Express
import express from 'express';
const app = express();
// Sessions
import session from 'express-session';


app.use(session({
    secret: "rwbhebfirw78ugsdfghucvbrtmk,mplmkjbhygvcdazxcfmoijnqwsxdrtgbhjmklpojhgfdszxcvbnmkjfvb",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use("/public", express.static(path.join(__dirname, "public")));


app.listen(80, () => {
    console.log("Server Running");
  });