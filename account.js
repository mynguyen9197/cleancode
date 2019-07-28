
const list = [
    { credit: 1234, debit: null, accountNumber: 20055 },
    { credit: null, debit: 2034, accountNumber: 20053 },
    { credit: null, debit: null, accountNumber: 45652 },
    { credit: 3224, debit: null, accountNumber: 63223 },
    { credit: null, debit: 1230, accountNumber: 45503 }
];

function getCreditAccounts(arr){
    var creditArray = arr.filter(x => x.credit !=null)
    return creditArray.sort((a, b) => (a.credit < b.credit) ? 1 : -1);
}

function getDebitAccounts(arr){
    var debitArray = arr.filter(x => x.debit !=null)
    return debitArray.sort((a, b) => (a.debit < b.debit) ? 1 : -1);
}

function getUndefinedAccounts(arr){
    var justAccountNumberArray = arr.filter(x => x.credit == null && x.debit == null)
    return justAccountNumberArray.sort((a, b) => (a.accountNumber < b.accountNumber) ? 1 : -1);
}

function sorting(arr){
    var creditAccounts = getCreditAccounts(list);
    var debitAccounts = getDebitAccounts(list);
    var undefinedAccouns = getUndefinedAccounts(list);
    return creditAccounts.concat(debitAccounts, undefinedAccouns);
}
console.log(sorting(list));