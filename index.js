import shuffle from "./utils/shuffle.js";
import * as fsp from "fs/promises";
import generateFixtures from "./utils/generateFixtures.js";
import outputFixtures from "./utils/outputFixtures.js";

let opponents = await fsp.readFile("./data/opponents.json", "utf-8");
opponents = JSON.parse(opponents);

// shuffle the opponents
opponents = shuffle(opponents["players"]);



// generate the rounds of matches
let allFixtures = generateFixtures(0,opponents);

// fixture lists
outputFixtures(allFixtures);

// ------------------------------------------
