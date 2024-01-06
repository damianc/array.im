(function () {
 function alter(arr, processor) {
  const copy = [...arr];
	 processor(copy);
	 return copy;
 }
 
 const methods = [
  'push', 'pop',
  'unshift', 'shift',
  'splice', 'sort', 'reverse'
 ].reduce((api, method) => ({
		...api,
		[method](...args) {
		 return alter(
		  this,
		  arr => arr[method](...args)
		 )
		}
	}), {});

 Object.defineProperty(Array.prototype, 'im', {
	 get() {
		 return new Proxy(methods, {
		 	get: (api, method, ...rest) => {
		 		if (method in api) {
		 			return api[method].bind(this);
		 		}
		 		return Reflect.get(
		 			api, method, ...rest
		 		);
		 	}
		 });
	 }
 });
})()
