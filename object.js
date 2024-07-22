var memberArray = ['egoing', 'graphittie', 'leeahce'];
console.log("memberArray[2]" ,memberArray[2]);

var memberObject = {
   manager:'egoing',
   developer:'graphittie',
   designer:'leeahce'
}
memberObject.designer = 'huuu';
console.log("memberObject.designer:" ,memberObject.designer);
console.log("memberObject['designer']" ,memberObject['designer']);
delete memberObject.manager
console. log('after delete memberObject.manager', memberObject.manager);