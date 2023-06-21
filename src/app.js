const express = require("express");
const app = express();
const path = require("path")
require("./db/dbconnection")
const hbs = require("hbs")
const UserMessage = require("./models/userMessage")
const PORT = process.env.PORT || 8000;

const staticPath=path.join(__dirname,"../public")
const templatesPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")




app.use("/css", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(staticPath))
app.set("view engine", "hbs")
app.set("views",templatesPath)
hbs.registerPartials(partialPath)
app.use(express.urlencoded({extended:false}))



// console.log(process.env.SECRET_KEY);

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/contact",async(req,res)=>{
    try {
        console.log(req.body)
        const userData=new UserMessage(req.body)
        await userData.save()
        res.status(201).render('index')
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(PORT, () => {
    console.log(`app is live in port at http://localhost:${PORT}`);
})


