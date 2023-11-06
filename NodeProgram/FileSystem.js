const fs = require('fs')
const path = require('path')

if (process.argv.length !== 4) {
    console.error('Invalid Input: Please Enter Two Arguements')
    process.exit(1)
}

const srcPath = process.argv[2]
const dstPath = process.argv[3]


fs.readdir(srcPath, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extension (e.g., .txt)
    const fileExtensionToCount = '.txt'
    const matchingFiles = files.filter((file) =>
        file.endsWith(fileExtensionToCount)
    )

    for(let i = 0; i<files.length; i++){
        fs.copyFile(srcPath + '\\' + files[i], dstPath, (erro) => {
            if (erro){
                console.log("Error Found: ", erro)
            }
        })
    }
});