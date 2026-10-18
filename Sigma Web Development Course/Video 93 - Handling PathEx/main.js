import fs from "fs/promises"
import path from "path"
import fsn from "fs"

const basePath = "/home/shehroz/Documents/Shehroz/Code_Playground/Sigma Web Development Course/Video 93 - Handling PathEx"
let files = await fs.readdir(basePath)

for (const element of files) {

    let ext = element.split(".")[element.split(".").length - 1]

    if (element.split(".").length > 1 && ext != "js", ext != "json") {

        if (fsn.existsSync(path.join(basePath, ext))) {
            fs.rename(path.join(basePath, element), path.join(basePath, ext, element))
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(basePath, element), path.join(basePath, ext, element))
        }

    }
    console.log(element);

}