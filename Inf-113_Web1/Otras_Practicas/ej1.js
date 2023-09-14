//How to insert function in javascrip?
class Barang {
        constructor(Nama, Harga, Merk) {
            this.Nama = Nama;
            this.Harga = Harga;
            this.Merk = Merk;
    
        }
    }
    
    class Kategori extends Barang {
        constructor(Nama, Harga, Merk, Kategori, Jenis) {
        super(Nama, Harga, Merk);
        this.Kategori = Kategori;
        this.Jenis = Jenis;
        }
    
        Ongkir(berat) {
            var berat = berat;
            var biaya = function (){
                return berat * 8000
            }
        
            this.totalBiaya = function () {
                return biaya()
            }
        }
    
    } 

var test = new Kategori();

console.log(test.Ongkir()); 

