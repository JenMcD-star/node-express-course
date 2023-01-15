const sentence = require("./practice2");
const os = require("./08-os-module");
const fs = require("./11-fs-async");

fs.writeFile(
  "../content/practicetext.txt",
  `${sentence} -${os.username}`,
  { flag: "a" },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);

