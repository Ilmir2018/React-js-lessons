import double_f from './slave';
import {triple_f, draw_html} from './slave';
import './styles/style.css'

const n = 10;
console.log(n + ' * 2 = ', double_f(n));
console.log(n + ' * 2 = ', triple_f(n));
draw_html();