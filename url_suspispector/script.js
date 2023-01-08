let url;
let url_array;
const punycode_regex = /xn--.+/;
const dns_regex = /[A-Za-z0-9-\.]/;

url = document.location.hostname;
url_array = [...url];
if (punycode_regex.test(url) === true){
	warn();
}else{
	for (var i = url_array.length; i > 0 ; i--){
		if (dns_regex.test(url_array[i]) === false){
			warn();
			break;
		}
	}
}

function warn() {
	alert("URLに、一般的にURLで使用される文字:\n- 半角英数字(A-Z,a-z,0-9)\n- 半角ハイフン(\" - \")\n- ドット(\" . \")\nではない文字が含まれています。\nそうでないように見える場合は偽サイトの場合があります。注意してください。\n(拡張機能 URL Suspispector より)");
}
