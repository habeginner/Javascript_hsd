var memberArray = ['egoing', 'graphittie', 'leeahce'];

console. group('array loop');

var i  = 0;
while(i < memberArray.length) {
   console.log(i, memberArray[i]);
   i = i + 1;
}

console.groupEnd('array loop');

var memberObject = {
   manager:'egoing',
   developer:'graphittie',
   designer:'leeahce'
}

console.group('object loop');
for( var name in memberObject) {
   console.log(name, memberObject[name]);
}
console.groupEnd('object loop');