function toDate (str, delim) {
  var arr = str.split(delim)
  //app.alert(''+arr[0]+arr[1]+arr[2]);
  return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4]);
};

function checkDate()
{
     str = '2018/04/16 11:37' //←ここに閲覧可能期限を指定
     regex1 = /[\/\:\s]/;

	dObj = new Date();
	y = dObj.getFullYear();
	m = dObj.getMonth() + 1;
	d = dObj.getDate();
	//app.alert(y+"年"+m+"月"+d+"日");
     lDate = toDate(str, regex1);
     //app.alert(lDate.toString());
     //lDate.setDate(lDate.getDate() + 1);
     
     if (dObj > lDate)
	{
		app.alert("閲覧期間(" + str + ")以降閲覧できません。PDFを閉じます。");
		this.closeDoc(false);
	}else{
		app.alert(str + "まで、閲覧可能です。");
	}
}

checkDate();
