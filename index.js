const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
// const random = require("random");

const FILE_PATH = "./data.json";

const DATE = moment().subtract(6, 'd').format();

const data = {
  date: DATE,
};

jsonfile.writeFile(FILE_PATH, data);

simpleGit()
  .add([FILE_PATH])
  .commit(
    DATE,
    {
      "--date": DATE,
    }
  ).push();

// const createCommit = (numberOfCommit) => {
//   if (numberOfCommit === 0) return simpleGit().push();

//   const weeks = random.int(0, 54);
//   const days = random.int(0, 6);

//   const DATE = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(weeks, "w")
//     .add(days, "d")
//     .format();

//   const data = {
//     date: DATE,
//   };

//   jsonfile.writeFile(FILE_PATH, data, () => {
//     simpleGit()
//       .add([FILE_PATH])
//       .commit(
//         DATE,
//         {
//           "--date": DATE,
//         },
//         () => {
//           createCommit(numberOfCommit - 1);
//           simpleGit().push();
//         }
//       );
//   });
// };

// createCommit(500);
