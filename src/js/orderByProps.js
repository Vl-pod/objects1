export default function orderByProps(obj, sortType) {
	const sortedProps = [];
	const unSortedProps = [];
  
	for (const key in obj) {
	  if (Object.prototype.hasOwnProperty.call(obj, key)) {
		const value = obj[key];
		const entry = { key, value };
  
		if (sortType.includes(key)) {
		  sortedProps.push(entry);
		} else {
		  unSortedProps.push(entry);
		}
	  }
	}
  
	sortedProps.sort((a, b) => sortType.indexOf(a.key) - sortType.indexOf(b.key));
	unSortedProps.sort((a, b) => (a.key < b.key ? -1 : 1));
  
	const resultArray = sortedProps.concat(unSortedProps);
  
	return resultArray;
  }