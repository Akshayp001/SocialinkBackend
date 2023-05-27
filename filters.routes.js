const express = require("express");
const Posts = require("./posts.models");
const Users = require("./user.models");

const app = express();


app.get("/fdposts/:dept", async (req, res) => {
    const dept = req.params.dept;
  
    try {
      const users = await Users.find({ dept: dept }, "uid");
  
      const userIds = users.map(user => user.uid);
  
      const posts = await Posts.find({ userId: { $in: userIds } });
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

app.get("/fyposts/:year", async (req, res) => {
    const year = req.params.year;
  
    try {
      const users = await Users.find({ year: year }, "uid");
  
      const userIds = users.map(user => user.uid);
  
      const posts = await Posts.find({ userId: { $in: userIds } });
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

  app.get("/fdyposts/:dept/:year", async (req, res) => {
    const dept = req.params.dept;
    const year = parseInt(req.params.year);
  
    try {
      const users = await Users.find({ dept: dept, year: year }, "uid");
  
      const userIds = users.map(user => user.uid);
  
      const posts = await Posts.find({ userId: { $in: userIds } });
  
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

module.exports = app;