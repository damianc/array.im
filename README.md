# array.im

Set of methods that originally mutate an array, but when called from the `im` namespace, don't do that.

| Method | Description |
|--|--|
| `im.push(...items)` | returns given array with passed items added at the end |
| `im.pop()` | returns given array without its last item |
| `im.unshift(...items)` | returns given array with passed items added at the beginning |
| `im.shift()` | returns given array without its first item |
| `im.splice(index, removeCount, ...items)` | returns given array with passed items and/or without specific ones |
| `im.sort(comparer?)` | returns given array with items sorted |
| `im.reverse()` | returns given array with items reversed |

```
const arr = [4,3,2,1];

const ra = arr.im.reverse();
console.log(ra);
// [1,2,3,4]

const ea = ra.im.push(5,6);
console.log(ea);
// [1,2,3,4,5,6]

console.log(arr);
// [4,3,2,1]
```
