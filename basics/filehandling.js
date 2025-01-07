import { readFile } from "fs";

readFile("file.txt","utf-8",(err, data) => {
    console.log(data);
}
)

