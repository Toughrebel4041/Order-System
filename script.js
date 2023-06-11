/*
Assesment II - Perancangan Web - 14 April 2023
Raihan Sultan Pasha Basuki
2210130006
Ilmu Komputer
Edit Terakhir: 21.43
*/

pembeli.addEventListener('change', function(){
    let pembeli= document.getElementById("pembeli");
    {
    if (pembeli.value == "dinkes")
    {
        console.log("dinkes");
        document.getElementById("Alamat").value = "Jl. Margonda Kantor Walikota";
        document.getElementById("Nama").value = "Bu Ratna";
        document.getElementById("Telp").value = "081991992993";
    } else if (pembeli.value == "esq")
    {
        console.log("esq");
        document.getElementById("Alamat").value = "Menara 165";
        document.getElementById("Nama").value = "Bu Desy";
        document.getElementById("Telp").value = "081572727841";
    } else if (pembeli.value == "cianju")
    {
        console.log("cianju");
        document.getElementById("Alamat").value = "Ruko Cianjur Indah";
        document.getElementById("Nama").value = "Pak Hadi";
        document.getElementById("Telp").value = "082391736312";
    }
    }
});

pesanan.addEventListener('change', function(){
    let pesanan= document.getElementById("pesanan");
    {
        var jumlah = document.getElementById("jumlah").value;
        var subtotal = harga * jumlah;
        var pajak = 0.1 * subtotal;
    if (pesanan.value == "snack")
    {
        console.log("snack");
        var harga = 15000
        document.getElementById("subtotal").value = "Rp. " + harga * jumlah;
        document.getElementById("pajak").value = "Rp. " + 0.1 * (harga * jumlah)
        document.getElementById("total").value = "Rp. " + ((harga * jumlah) + (0.1 * (harga * jumlah)))
    } else if (pesanan.value == "nasi")
    {
        console.log("nasi");
        var harga = 30000
        document.getElementById("subtotal").value = "Rp. " + harga * jumlah;
        document.getElementById("pajak").value = "Rp. " + 0.1 * (harga * jumlah)
        document.getElementById("total").value = "Rp. " + ((harga * jumlah) + (0.1 * (harga * jumlah)))
    } else if (pesanan.value == "prasmanan")
    {
        console.log("prasmanan");
        var harga = 40000
        document.getElementById("subtotal").value = "Rp. " + harga * jumlah;
        document.getElementById("pajak").value = "Rp. " + 0.1 * (harga * jumlah)
        document.getElementById("total").value = "Rp. " + ((harga * jumlah) + (0.1 * (harga * jumlah)))
    }
    }
});


function proses(){
alert("Terima kasih sudah membuat pesanan, pesanan Anda akan segera diproses")
document.getElementById("id").value = null;
document.getElementById("pembeli").value = "default";
document.getElementById("Nama").value = null;
document.getElementById("Alamat").value = null;
document.getElementById("Telp").value = null;
document.getElementById("jumlah").value = null;
document.getElementById("pesanan").value = "default";
document.getElementById("subtotal").value = null;
document.getElementById("pajak").value = null;
document.getElementById("total").value = null;
}

