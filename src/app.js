const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); // handel bars ( templet engine - view ingine)
const PORT = process.env.PORT || 8888;

//! PUBLIC STATIC PATH
    const staticpath = path.join(__dirname, "../public");
    const template_views = path.join(__dirname, "../templates/views");
    const partials_path = path.join(__dirname, "../templates/partials");

//! VIEW ALL PAGES IN  handel bars ( templet engine - view ingine)
    app.set('view engine', 'hbs');
    app.set("views", template_views);
    hbs.registerPartials(partials_path)

    app.use(express.static(staticpath)); //! catch the publick folder on templates pages



//! ROUTING
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/about", (req, res) => {
        res.render("about");
    });
    app.get("/weather", (req, res) => {
        res.render("weather");
    });
    app.get("*", (req, res) => { 
        res.render("404", {
            erroemsg:"Opps! Page Not Found" 
        });
    });

    app.listen(PORT, () => {
        console.log(`my server ${PORT} is start`);
    });
