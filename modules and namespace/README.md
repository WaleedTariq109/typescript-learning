## Modules and Namespace

This is the Refactored version of [Darg and Drop](https://github.com/WaleedTariq109/typescript-project/tree/main/project-manager) Project

In this Project I used ESModule without webpack or any other bundler

## Example

``` javascript
// Must Add '.js' extension in imports because we don't use webpack or any other bundler

import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
```
