var fs = require('fs'),
    ignoreResponses;

readModuleFile('../ignore.txt', function (err, words) {
  ignoreResponses = err ? [] : words.split('\n');
});

module.exports = function (robot) {
  robot.respond(/(.*)/i, function (msg) {
    var response = ignoreResponses[Math.floor(Math.random() * ignoreResponses.length)];
    msg.reply(response);
  });
};

function readModuleFile(path, callback) {
  try {
    var filename = require.resolve(path);
    fs.readFile(filename, 'utf8', callback);
  } catch (e) {
    callback(e);
  }
}