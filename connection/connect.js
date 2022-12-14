const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(
    "mongodb+srv://DhamaniSaranya:Dhamani1997@cluster0.howsj.mongodb.net/iinstaclone?retryWrites=true&w=majority", () => {
       console.log("mongoose connected")
    });
}

module.exports = main;