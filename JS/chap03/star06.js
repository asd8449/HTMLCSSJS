const star = '*'
var str = '';
for(var i = 0;i < 5;i++){
    for(var j = 0;j < i;j++){
        str+= ' ';
    }
    for(var j = i * 2;j < 5 * 2 - 1;j++){
        str += '*';
    }
    str += '\n';
}
alert(str);