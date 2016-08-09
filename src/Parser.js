import fs from 'fs';
import parser from 'esprima';
import t from 'esprima-ast-utils';
import o from "object-path";

var $g = o.get;


export default class Parser {

    constructor() {
        this.dependencies = [];
        this.ast = {};
    }

    parse(filename) {
        let code = fs.readFileSync(filename, 'utf8');
        this.ast = parser.parse(code);
        this.findDependencies();
    }

    findDependencies() {
        t.traverse(this.ast, (node, parent, property, index, depth) => {
            if (
                // ($g(parent, 'type') === "ObjectExpression" && $g(parent, 'properties.type') === 'Property' && $g(parent, 'properties.key.name') === 'extend')
                ($g(node, 'type') === 'Property'  && $g(node, 'key.type') === 'Identifier' && $g(node, 'key.name') === 'requires')
            ) {
                // console.log(JSON.stringify(parent, null, 4));
                if ($g(node, 'value.type') !== 'ArrayExpression') {
                    // process.stderr.write();
                    throw new Error('Expected type array for requires-property!\n');
                } else {
                    this.dependencies = node.value.elements.map((element) => element.value);
                }
                return false;
            }
        });
    }

}


