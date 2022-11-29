const fs = require("fs");

const lorem = fs.readFileSync("./lorem.txt", {encoding: "utf8"})

throw new Error(lorem);