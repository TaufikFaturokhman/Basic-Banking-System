class BankAccount {
    constructor(initialBalance) {
      this.balance = initialBalance || 0;
    }
  
    deposit(amount) {
      setTimeout(() => {
        if (amount > 0) {
          this.balance += amount;
          console.log(`Deposit ${amount} berhasil.`);
          updateSaldo(this.balance);
        } else {
          console.log('Jumlah deposit harus lebih dari 0.');
        }
      }, 1000);
    }
  
    withdraw(amount) {
      setTimeout(() => {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`Penarikan ${amount} berhasil.`);
          updateSaldo(this.balance);
        } else {
          console.log('Jumlah penarikan tidak valid atau saldo tidak mencukupi.');
        }
      }, 1000);
    }
  }
  
const bankAccount = new BankAccount(10000);

const updateSaldo = (saldo) => {
    document.getElementById('saldo').textContent = saldo;
};

const tambahSaldo = () => {
    let input = prompt('Masukan Jumlah Saldo Yang Ingin DiTambahkan');
    bankAccount.deposit(parseInt(input));
};

const kurangSaldo = () => {
    let input = prompt('Masukan Jumlah Saldo Yang Ingin DiTarik');
    bankAccount.withdraw(parseInt(input));
};
  