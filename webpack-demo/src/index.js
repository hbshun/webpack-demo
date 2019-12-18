
import pkg from '../package.json';
import './style/main.less';

import './R';

// 此部分不支持热更新、会刷新浏览器
document.writeln('Hello, world');
document.writeln(pkg.version);
document.writeln(pkg?.description);
