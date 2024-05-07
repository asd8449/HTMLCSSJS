const star = '*'
var str = '';
for(var i = 0;i < 5;i++){
    for(var j = i;j < 5;j++){
        str+= ' ';
    }
    for(var j = 0;j <= i * 2;j++){
        str += '*';
    }
    str += '\n';
}
alert(str);