'use strict';

const bankOne = {
    name: 'bankOne',
    cash: 1500,
    persent: 5,
    capitalization: 5,
    bankTransfer: 2,
    timer: 0
}

const bankTwo = {
    name: 'bankTwo',
    cash: 1500,
    persent: 3,
    capitalization: 5,
    bankTransfer: 2,
    timer: 0
}

const bankThree = {
    name: 'bankThree',
    cash: 1500,
    persent: 3,
    capitalization: 5,
    bankTransfer: 2,
    timer: 0
}

function calculateCapitalizationInterval() {
    const calculate = Math.floor(Math.random() * (11 - 5) + 5);
    return calculate;
}

function calculatePercent() {
    const percent = Math.floor(Math.random() * (16 - 1) + 1);
    return percent;
}

function bank(bank) {
    const addPersent = (bank.cash * (bank.persent < 10 ? `0.0${bank.persent}` : `0.${bank.persent}`));
    const cashWithPercent = bank.cash + addPersent;
    bank.cash = Math.round(cashWithPercent);
    checkOfert(bank);
    bank.capitalization = parseInt(calculateCapitalizationInterval());
    bank.persent = parseInt(calculatePercent());
    bank.bankTransfer = calculatePercent();
}

function sendMoney(sendBank, takeBank) {
    const send = sendBank.cash * 0.25;
    const bankTake = parseInt(send - (send * (sendBank.bankTransfer > 10 ? `0.${sendBank.bankTransfer}` : `0.0${sendBank.bankTransfer}`)));
    sendBank.cash = sendBank.cash - bankTake;
    takeBank.cash = takeBank.cash + bankTake;
}

function checkOfert(bank) {
    if (bank.name === 'bankOne' && bank.persent < bankTwo.persent && bank.bankTransfer <= bankTwo.persent && Math.abs(bank.bankTransfer - bankTwo.persent) > bank.persent) {
        sendMoney(bank, bankTwo);
    } else if (bank.name === 'bankOne' && bank.persent < bankThree.persent && bank.bankTransfer <= bankThree.persent && Math.abs(bank.bankTransfer - bankThree.persent) > bank.persent) {
        sendMoney(bank, bankThree);
    } else if (bank.name === 'bankTwo' && bank.persent < bankOne.persent && bank.bankTransfer <= bankOne.persent && Math.abs(bank.bankTransfer - bankOne.persent) > bank.persent) {
        sendMoney(bank, bankOne);
    } else if (bank.name === 'bankTwo' && bank.persent < bankThree.persent && bank.bankTransfer <= bankThree.persent && Math.abs(bank.bankTransfer - bankThree.persent) > bank.persent) {
        sendMoney(bank, bankThree);
    } else if (bank.name === 'bankThree' && bank.persent < bankOne.persent && bank.bankTransfer <= bankOne.persent && Math.abs(bank.bankTransfer - bankOne.persent) > bank.persent) {
        sendMoney(bank, bankOne);
    } else if (bank.name === 'bankThree' && bank.persent < bankTwo.persent && bank.bankTransfer <= bankTwo.persent && Math.abs(bank.bankTransfer - bankTwo.persent) > bank.persent) {
        sendMoney(bank, bankTwo);
    }
}

setInterval(() => {
    bankOne.timer++
    bankTwo.timer++
    bankThree.timer++
    if (bankOne.timer === bankOne.capitalization) {
        bank(bankOne);
        bankOne.timer = 0
    }
    if (bankTwo.timer === bankTwo.capitalization) {
        bank(bankTwo);
        bankTwo.timer = 0
    }
    if (bankOne.timer === bankOne.capitalization) {
        bank(bankOne);
        bankOne.timer = 0
    }
    if (bankThree.timer === bankThree.capitalization) {
        bank(bankThree);
        bankThree.timer = 0
    }
}, 1000);

setInterval(() => {
    console.log('bankOne', bankOne.cash);
    console.log('bankTwo', bankTwo.cash);
    console.log('bankThree', bankThree.cash);

    const sumAllBankCash = bankOne.cash + bankTwo.cash + bankThree.cash;
    console.log('All bank money', sumAllBankCash );
}, 100000);





