const getDeeper = (...args) => {
	const propFlow = args.split('.');
	return function inner(item) {
		let newItem = { ...item };
		propFlow.forEach((el) => {
			newItem = (newItem || {})[el];
		});
		return newItem;
	};
}
module.exports.getDeeper = getDeeper;