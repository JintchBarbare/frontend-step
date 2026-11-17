// 1.1 Account Class (Encapsulation) & 1.3 Base transfer method
class Account {
    #balance;
    #accountNumber;

    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Amount must be positive");
            return false;
        }
        this.#balance += amount;
        return true;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Amount must be positive");
            return false;
        }
        if (amount > this.#balance) {
            console.log("Insufficient funds");
            return false;
        }
        this.#balance -= amount;
        return true;
    }

    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    // 1.3 Polymorphism - Base transfer method
    transfer(toAccount, amount) {
        if (this.withdraw(amount)) {
            toAccount.deposit(amount);
            return true;
        }
        return false;
    }
}

// 1.2 Inheritance & 1.3 Polymorphism - SavingsAccount
class SavingsAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.getBalance() * this.interestRate;
        this.deposit(interest);
    }

    // Charges 2% fee on transfer
    transfer(toAccount, amount) {
        const fee = amount * 0.02;
        const amountReceived = amount - fee;

        if (this.withdraw(amount)) {
            toAccount.deposit(amountReceived);
            return true;
        }
        return false;
    }
}

// 1.2 Inheritance & 1.3 Polymorphism - CheckingAccount
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, monthlyFee = 10) {
        super(accountNumber, initialBalance);
        this.monthlyFee = monthlyFee;
    }

    deductMonthlyFee() {
        this.withdraw(this.monthlyFee);
    }

    // Charges $1 fee on transfer
    transfer(toAccount, amount) {
        const fee = 1;
        const amountReceived = amount - fee;

        if (amountReceived <= 0) {
            console.log("Transfer amount must be greater than $1 fee");
            return false;
        }

        if (this.withdraw(amount)) {
            toAccount.deposit(amountReceived);
            return true;
        }
        return false;
    }
}

// 1.4 Bank Class
class Bank {
    constructor() {
        this.accounts = [];
    }

    addAccount(account) {
        this.accounts.push(account);
    }

    processMonthly() {
        this.accounts.forEach(account => {
            if (account instanceof SavingsAccount) {
                account.addInterest();
            } else if (account instanceof CheckingAccount) {
                account.deductMonthlyFee();
            }
        });
    }

    getTotalBalance() {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
    }
}


// 1.1 Test
const acc = new Account('123', 1000);
acc.deposit(500);
acc.withdraw(200);
console.log("1.1 Balance:", acc.getBalance()); // 1300

// 1.2 Test
const savings = new SavingsAccount('456', 5000, 0.03);
savings.addInterest(); // 5000 + 150 = 5150
console.log("1.2 Savings after interest:", savings.getBalance()); // 5150

const checking = new CheckingAccount('789', 2000, 15);

// 1.3 Test
savings.transfer(checking, 1000); // savings: 4150, checking: 2000 + 980 = 2980
checking.transfer(savings, 100);  // checking: 2880, savings: 4150 + 99 = 4249
console.log("1.3 Savings after transfers:", savings.getBalance());   // 4249
console.log("1.3 Checking after transfers:", checking.getBalance()); // 2880

// 1.4 Test
const bank = new Bank();
bank.addAccount(savings);
bank.addAccount(checking);
bank.processMonthly(); // savings +3% (4376.47), checking -15 (2865)
console.log("1.4 Total Bank Balance:", bank.getTotalBalance()); // 7241.47