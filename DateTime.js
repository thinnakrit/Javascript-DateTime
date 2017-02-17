export function convertTimestamp(timestamp){
	var d = new Date(timestamp*1000);
	return d;
}

export function converDate(date, lang, mode){
	let list = [];
	if(lang === null){
		if(mode === 'number'){
			list = ['1','2','3','4','5','6','7'];
		}
	}
	return list[Number(date.getDay()) - 1];
}

export function converMonth(date, lang, mode){
	let list = [];
	if(lang === 'eng'){
		if(mode === 'short'){
			list = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		}else
		if(mode === 'full'){
			list = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		}
	}else
	if(lang === 'th'){
		if(mode === 'short'){
			list = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
		}else
		if(mode === 'full'){
			list = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
		}
	}else
	if(lang === null){
		if(mode === 'number'){
			list = ['1','2','3','4','5','6','7','8','9','10','11','12'];
		}
	}
	return list[Number(date.getMonth()) + 1];
}

export function convertYear(date, mode){
	if(mode === 'th'){
		return Number(date.getFullYear()) + 543;
	}else
	if(mode === 'eng'){
		return Number(date.getFullYear());
	}
}

export function convertTime(date){
	return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

export function dateNow(){
	return Date.now();
}

export function countdown(startTime){
	return setTimeout(function(){ return new Date() }, 1000);
}
