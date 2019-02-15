let ary=[{c:2},{a:1,b:2},{a:1,b:3},{a:1,b:4},{a:1,b:2},{a:1,b:4},5,5,6,8,6]
console.log([...new Set(ary.map(item=>JSON.stringify(item)))].map(item=>JSON.parse(item)));





