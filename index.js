const express = require("express");
const urlRoute = require("./routes/url")
const {connectToMongodb } = require("./connect")
const URL = require("./models/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user")
const cookieparser = require("cookie-parser");
const { restictToLoggedInUserOnly , checkAuth } = require("./middlewares/auth");
require("dotenv").config();



const app = express();


const PORT = process.env.PORT || 8001;

connectToMongodb();

app.set("view engine" , "ejs");

app.set("views" , path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cookieparser())
app.use(express.static(path.resolve("./public")))

app.use("/url", restictToLoggedInUserOnly , urlRoute);
app.use("/" , checkAuth, staticRoute);
app.use("/user" , userRoute);

app.get("/url/:shortId" , async(req , res)=> {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId
    }, {$push : { visitHistory : {timestamp : Date.now(),

    }
}
}
);
res.redirect(entry.redirectUrl)

})

app.listen(PORT , ()=> console.log(`server started on PORT ${PORT}`))