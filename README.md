# download-wet-boew

This script is designed to operate in the NPM ecosystem and can be used to 
download the zip archive distribution of the Web Experience Toolkit hosted at 
https://wet-boew.github.io/v4.0-ci/docs/versions/dwnld-en.html. 

## Usage
The first argument is the distribution download URL and the second argument is 
the location to extract the package to.

Invoking the script with NodeJS:
```
node downloadWET https://github.com/wet-boew/wet-boew/releases/download/v4.0.31/wet-boew-dist-4.0.31.zip ./wet-boew
```

After installing the package through NPM you may also add a script to your 
`package.json` file:
```
node ./node_modules/fetch-wet-boew/downloadWET https://github.com/wet-boew/wet-boew/releases/download/v4.0.31/wet-boew-dist-4.0.31.zip ./wet-boew
```
