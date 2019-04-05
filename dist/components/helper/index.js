const isbn13=(str)=>{
	var sum,num,result;
		str = str.replace(/[^0-9X]/gi, '');

		if(str.length != 13) return false;

		if(str){
			sum = 0;
			for(let i =0; i < 12; i++){
			num = parseInt(str[i]);
			(i % 2 == 1) ? (sum += 3 * num) : sum += num;
			}
		}
		result = (10 - (sum % 10)) % 10;
		return result == str[str.length-1];
 }

const isbn10=(str)=>{
	var sum,num,result,long;
		str = str.replace(/[^0-9X]/gi, '');

		if(str.length != 10) return false;

		if(str){
			long = 10;
			sum = 0;
			for(let i = 0; i < 9; i++){
			num = parseInt(str[i]);
			sum += long*num;
			long --;
			}
			result = 11 - (sum % 11);
			if(result == 10) result = "X";
		}
		return result == str[str.length-1].toUpperCase()
  	}

const isIsbn=(str)=>{
	if(str === undefined) return true
	if(isbn10(str) || isbn13(str)){
		return true
	}else{
		return false
	}
}
export {isIsbn};