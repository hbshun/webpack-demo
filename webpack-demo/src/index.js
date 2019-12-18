
import pkg from '../package.json';
import './style/main.less';

import './R';

document.writeln('Hello, world');
document.writeln(pkg.version);

const obj = {};

document.writeln(obj?.str);
