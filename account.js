
const list = [
    { credit: 1234, debit: null, accountNumber: 20055 },
    { credit: null, debit: 1230, accountNumber: 45503 },
    { credit: null, debit: null, accountNumber: 45652 },
    { credit: null, debit: 2034, accountNumber: 20053 },
    { credit: 3224, debit: null, accountNumber: 63223 }
];

function sortByCredit(list){
    return list.sort((a, b) => (a.credit < b.credit) ? 1 : -1);
}

function sortByDebit(list){
    return list.sort((a, b) => (a.debit < b.debit) ? 1 : -1);
}

function sortUndefiedAccounts(list){
    return list.sort((a, b) => (a.accountNumber < b.accountNumber) ? 1 : -1);
}

function sortingAccountsList(list){
    return sortByCredit(sortByDebit(sortUndefiedAccounts(list)));
}

console.log(sortingAccountsList(list));