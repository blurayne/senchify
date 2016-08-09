import fs from 'fs';
import parser from 'esprima';
import glob from "glob";

glob.sync('./spec/resources/*.js').forEach((filePath) => {

    process.stdout.write('-› ' + filePath + '...');
    var code = fs.readFileSync(filePath, 'utf8');
    var ast = parser.parse(code);
    var pretty = JSON.stringify(ast, null, 4);
    fs.writeFileSync(
        filePath + '.ast',
        pretty,
        'utf8',
        (err) => {
            if (err) {
                process.stderr.write(err + "\n");
                process.exit(1);
            }
        }
    );
    process.stderr.write('done\n');
});

