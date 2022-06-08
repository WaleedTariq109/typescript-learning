import _ from 'lodash';
import { Product } from './product';

declare const GLOBAL: string;
const product = new Product('Book', 12.99);

console.log(_.shuffle([0, 1, 2, 3]));
console.log(GLOBAL);

console.log(product.getInfo());
