// rules
// jika ankot kosong, Penumpang naik duduk di kursi pertama
// Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// jika ada kursi kosong (karna penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
// nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun


var penumpang = [undefined, "rama", "jodi"];
// var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang){
	// jika angkot kosong
	if (penumpang.length == 0) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	}else{
		// telusuri seluruh penumpang dari awal
		for(var i = 0; i < penumpang.length; i++){
			// jika sudah ada nama yang sama
			if( i == penumpang.length - 1){
				// jika seluruh kursi terisi
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				return penumpang;
			
			// jika ada kursi yang kosong
			}else if( penumpang[i] == namaPenumpang){
				// tampilkan pesan kesalahan nya
				console.log(namaPenumpang + "sudah ada di dalam angkot");
				// kembalikan isi array
				return penumpang;

			}else if(penumpang[i] == undefined){
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}

}

var hapusPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong 
	if(penumpang.length == 0){
		// tampilkan pesan 
		console.log("angkot masih kosong");
		//kembalikan isi array dan keluar dari function
	}else{
		// telusuri penumpang
		for(var i = 0; i <penumpang.length; i++){
			// jika nama penumpang yang dicari sama dengan nama penumpang
			if(penumpang[i] == namaPenumpang){
				// berikan nilai undefine
				penumpang[i] = undefined;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			// jika nama penumpang tidak sesuai
			}else if(i == penumpang.length -1){
				// berikan pesan
				console.log(namaPenumpang + "tidak ada di dalam angkot");
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
	return penumpang;
}

console.log(penumpang);
