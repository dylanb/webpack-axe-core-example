var axe = require("./node_modules/axe-core/axe.js");

document.write("It works.");

axe.a11yCheck(document, function (results) {
	console.log(results.violations);
});
