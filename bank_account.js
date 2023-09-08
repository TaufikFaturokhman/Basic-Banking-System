let saldo = 10000;

document.getElementById('saldo').textContent = saldo;

const updateSaldo = (saldo) => {
    document.getElementById('saldo').textContent = saldo;
}

const tambahSaldo =() => {
    let input = prompt("Masukan Jumlah Saldo Yang Ingin DiTambahkan");
    saldo = saldo + parseInt(input);
    updateSaldo(saldo)
}

const kurangSaldo =() => {
    let input = prompt("Masukan Jumlah Saldo Yang Ingin DiTarik");
    if(saldo < input){
        window.alert('Saldo Anda Kurang')
    }else {
    saldo = saldo - parseInt(input);
    updateSaldo(saldo)
    }
}