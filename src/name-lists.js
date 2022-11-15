const { nameLists } = require("./names");
const { getUniqueNameFromListF } = require("./utils");

const basePath = process.cwd();

const {
    namePrefix,
} = require(`${basePath}/src/config.js`);

const getNameF = (listsOfNames, prefix) => (_dna, _edition) => {
    const getUniqueNameFromList = getUniqueNameFromListF(_dna, _edition)

    const postFix = listsOfNames.map(getUniqueNameFromList).join(' ')

    if (prefix && prefix !== '') {
       return `${prefix} ${postFix}`
    }
  
    return postFix
}

const getName = getNameF(nameLists, namePrefix)

module.exports = {
    getName,
  };