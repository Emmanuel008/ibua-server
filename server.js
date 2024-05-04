const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));


app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

//router
const FAQsRouter = require("./routes/FAQsRouter");
const imageRouter = require("./routes/imageRouter");
const testimonyRouter = require("./routes/testimonyRouter");
const updateRouter = require("./routes/updateRouter");
const userRoute = require("./routes/userRoute");

app.use("/faqs", FAQsRouter);
app.use("/images", imageRouter);
app.use("/testimonies", testimonyRouter);
app.use("/updates", updateRouter);
app.use("/users", userRoute);

app.use("/uploads", express.static("./uploads"));

const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})