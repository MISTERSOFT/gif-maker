const path = require('path');

function tempFolderPath() {
  const appRootDir = path.dirname(require.main.filename);
  return path.resolve(appRootDir, 'server/temp');
}

module.exports.tempFolderPath = tempFolderPath;
