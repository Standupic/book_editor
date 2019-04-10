import {isIsbn} from '../helper';

export const required = value => (value ? undefined : 'Required');
const maxLength = max => value => value && value.length > max ? `Should be less than ${max} character` : undefined;
// export function maxLength(max){
// 	return function(value){
// 		return value && value.length > max ? 'Should be less than 30 character' : undefined;
// 	}
// }
export const maxLength30 = maxLength(30);
export const maxLength20 = maxLength(20);
export const pages = value => value && isNaN(Number(value)) ?
 'Must be a number' : (value >= 10000 || value < 0) ? "shouldn't be more than 10000 or 0" : undefined;

const dateRelease = date => value => value && value < 1800 ? "Shouldn't be earlier than 1800" : undefined;
export const release = dateRelease(1800);

const date = str => value => value && Date.parse(value) < Date.parse(str) ? `shouldn't be earlier than ${str}` : undefined;

export const dateValidate = date("01.01.1800")

export const ISBN = value => isIsbn(value) ? undefined : "It is not valide isbn";