const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Config EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, "public")));

// Route '/profile' render  profile page by using EJS template
app.get("/profile", (req, res) => {
  res.render("profile", {
    fullname: "Nguyen Quang Tuan",
    job: "Software Engineer",
    email: "quangtuanitmo18@gmail",
    phone: "+7 953 362 67 95",
    socials: {
      github: "https://github.com/quangtuanitmo18",
    },
  });
});

app.get("/", (req, res) => {
  res.redirect("/profile");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
