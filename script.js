// Your Script here.
function rot13(str) {
	string ans="";
	for (let index = 0; index < str.length; index++) {
		string ch=str.charAt(index);
		string add=ch+13;
		if(add>='a' && add<='z'){
			var no=add-'a';
			add='A'+no;
		}
		ans+=add;
		
	}
	return ans;
	
}