const star = '*'
var str = '';
for(var i = 0;i < 5;i++){
    for(var j = 0;j < i;j++){
        str+= ' ';
    }
    for(var j = i;j < 5;j++){
        str += '*';
    }
    str += '\n';
}
alert(str);