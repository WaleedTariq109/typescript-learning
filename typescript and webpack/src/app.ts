// Must Add '.js' extension in imports because we don't use webpack or any other bundler

import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
