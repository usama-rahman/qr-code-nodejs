import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// var qr = require("qr-image");

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    const imagePath = `qr-image-${crypto.randomUUID()}.png`;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(imagePath));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error.isTtyError);
    } else {
      console.log("Something went wrong");
    }
  });
