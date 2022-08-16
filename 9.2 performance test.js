var iterations = 10000;
console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
   areThereDuplicates(arr)
};
console.timeEnd('Function #1')

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    areThereDuplicates3(arr)
};
console.timeEnd('Function #2')