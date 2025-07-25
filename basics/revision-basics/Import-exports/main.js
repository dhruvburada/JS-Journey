// import { add } from "./utility.js"; //name of the exact method you are exporting
// import { sub } from "./utility.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));

//import all the functions from the utility

// import * as util from "./utility.js";

// console.log(util.add(2, 2));
// console.log(util.sub(2, 2));

// rename the imports

import { add as addition } from "./utility.js";
import anynamehere from "./utility.js";

console.log(addition(1, 3));

console.log(anynamehere());
