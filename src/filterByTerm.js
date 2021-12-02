function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throw Error("Search term cannot be empty");
    if (!inputArr.length) throw Error("InputArr cannot be empty"); // new line
    const regex = new RegExp(searchTerm, "i");

    return inputArr.filter(arrayElement => arrayElement.url.match(regex));
}
  
module.exports = { filterByTerm };
