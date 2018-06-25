function hackEPBM(jumlah_dosen, kesan){
	mi = kesan
	ma = kesan + 1
	for(i=1;i<=10;i++){
		choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
		formattedNumber = ("8" + i).slice(-2)
		if(i==10){
			formattedNumber = ("90")
		}
		target = "#JawabanMK_4"+formattedNumber+choose
		$(target).prop("checked", true)
	}
	// isi form dosen
	for(i=1;i<=jumlah_dosen;i++){
		k=550
		for(j=1;j<=10;j++){
			choose = Math.floor(Math.random() * (ma - mi + 1)) + mi
			target = "#JawabanDosen_"+i+j+(k+j)+choose
			$(target).prop("checked", true)
			$("#Pernyataan").prop("checked", true)
		}
	}
}

/*kesan:
1 Sangat Tidak Setuju atau Tidak Setuju
2 Tidak Setuju atau Setuju
3 Setuju atau Sangat Setuju
*/
//hackEPBM(jumlah_dosen,kesan)