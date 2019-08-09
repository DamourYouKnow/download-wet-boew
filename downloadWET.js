const fs = require('fs');
const path = require('path');
const request = require('request');
const AdmZip = require('adm-zip');
const rimraf = require('rimraf');

const url = process.argv[2];
const pathArg = process.argv[3];

if (url === undefined) {
    console.error('URL not specified.');
    process.exit(1);
}
if (pathArg === undefined) {
    console.error('Download path not specified.');
    process.exit(1);
}

console.log(`Requesting zip file from ${url}...`);
const reqOptions = {'url': url, 'encoding': null, 'timeout': 20000};
request(reqOptions, function(err, resp, body) {
    if (err) throw err;
    console.log('File downloaded');

    if (fs.existsSync(path.join(pathArg, 'wet-boew'))) {
        console.log('Deleting old entry...');
        rimraf.sync(path.join(pathArg, 'wet-boew'));
        console.log('Deleted');
    }

    const zip = new AdmZip(body);
    console.log(`Extracting zip to ${pathArg}...`);

    const entries = zip.getEntries();
    if (entries[0].isDirectory) {
        const rootDir = entries[0].entryName;
        zip.extractEntryTo(rootDir, pathArg);
        fs.renameSync(
            path.join(pathArg, rootDir), path.join(pathArg, 'wet-boew'));
    } 
    else {
        zip.extractAllTo(path.join(pathArg, 'wet-boew'));
    }
    console.log('Success!');
});
