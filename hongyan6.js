function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
  //sayInfo.call2(user,100)
  //name:zzx
  //age:100
  call2=function(a,b){
    this.name=a.name;
    var age=b;
    sayInfo(age);
}
call2(user,100);