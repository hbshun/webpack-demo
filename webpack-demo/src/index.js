
import pkg from '../package.json';

import './style/main.css';

document.writeln('Hello, world');
document.writeln(pkg.version);

const obj = {};

document.writeln(obj?.str);
