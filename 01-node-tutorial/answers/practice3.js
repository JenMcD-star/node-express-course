const fs = require("fs").promises;
const os = require("os");

const makeFile = async () => {
  try {
    fs.writeFile(
      "../content/practice2.txt",
      `This is the first line.\r\n`)
      for (i = 1; i < 11; i++){
        fs.writeFile(
          "../content/practice2.txt",
          `this is line ${i}${os.EOL}`,
          {flag: 'a'}
        )
      };
  } catch (err) {
    console.log(err);
  }
};
makeFile();
