/**
 *	returnUniqueArraysItems
 *	@param  { array } arrs - arreglos con elementos diversos
 *	@return { array } arreglo con elementos únicos
 */
export const returnUniqueArraysItems = (...arrs) => {
	const res = [].concat(...arrs);
	const unique = new Set();
	res.forEach(item => {
		unique.add(JSON.stringify(item))
	})
	const uniqueParsed = [];
	unique.forEach(item => uniqueParsed.push(JSON.parse(item)))
	return [].concat(uniqueParsed);
}
