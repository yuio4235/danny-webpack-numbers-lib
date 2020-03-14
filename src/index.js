const _ = require('lodash');
const Ref = require('./ref.json');

export function numsToWord(num) {
    return _.reduce(Ref, (accnum, ref) => {
        return ref.num === num ? ref.word: accnum;
    }, ' ');
}

export function wordsToNum(word) {
    return _.reduce(Ref, (accnum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accnum;
    }, -1);
}