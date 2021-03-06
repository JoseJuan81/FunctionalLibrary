import getPropertysValue from './getPropertysValue';
import curry from './curry';

const getProp = curry(getPropertysValue);

/**
 *	equality
 *	@param {string, number} prop1 - propiedad a usar para comparar
 *	@param {string, number} val2 - valor a comprar cuando se usa un item del tipo objeto
 *	@param {object, string, number} item - cuando es un objeto se usa con val2, cuando es string o number se usa solo (val2 === null)
 *	@return { boolean }
 */
export default (prop1, val2, item) => {
	const findPropIn = typeof prop1 === 'string' ? getProp(prop1) : prop1;
	const val = val2 || getProp;
	if (typeof item === 'object' && typeof val !== 'function') {
		return findPropIn(item) === val;
	}
	if (typeof item === 'object' && typeof val === 'function') {
		return findPropIn(item) === val(item);
	}
	return item === prop1;
}
