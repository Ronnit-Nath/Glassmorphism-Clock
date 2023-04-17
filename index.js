const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";

const DATE = moment().subtract(9n, "d").format();

const data = {
  date: DATE,
};
console.log(DATE);
jsonfile.writeFile(FILE_PATH, data, () => {
  simpleGit().add([FILE_PATH]).commit("updated", { "--date": DATE }).push();
});
