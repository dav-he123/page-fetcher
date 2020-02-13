const argv = process.argv.slice(2); //real input
const fs = require("fs");
const request = require("request");

request(argv[0], (error, response, body) => {
  console.log("err", error);
  // console.log(response.statusCode());
  console.log("res", response.body);

  const writeFile = function() {
    fs.writeFile(argv[1], response.body, error => {
      console.log("file", error);
      if (!error) {
        fs.stat(argv[1], function(_, stats) {
          console.log(`Download and saved ${stats.size} bytes to ${argv[1]}`);
        });
      } else {
        console.log("Invalid data path");
      }
    });
  };
  writeFile();
});
