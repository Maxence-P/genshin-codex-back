require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes");

const PORT = process.env.PORT;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", mainRouter);

app.use('/public', express.static('public/assets'));

app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`);
});