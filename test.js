const fs = require('fs');
const html5Lint = require('html5-lint');
let files = [
	'index.html', 
	'public/user1.html', 
	'public/user2.html', 
	'public/user3.html', 
	'public/user4.html', 
	'public/user5.html',
	'public/users.html'
];

for (let i = 0; i < files.length; i++) {
	fs.readFile(files[i], 'utf8', function( err, html ) {
		if (err) {
			throw err;
		}
		html5Lint(html, function(err, results) {
			results.messages.forEach(function(msg) {
				var type = msg.type, // error or warning 
				message = msg.message;
				console.log("HTML5 Lint [%s]: %s", type, message);
			});
		});
		console.log('file ' + files[i] + ' checked!');
	});
}
