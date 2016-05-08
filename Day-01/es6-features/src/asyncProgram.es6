function addSync(x,y){
	console.log(`     [Service Provider] processing ${x} and ${y}`);
	var result = x + y;
	console.log(`     [Service Provider] returning result`);
	return result;
}

export function addSyncClient(x,y){
	console.log(`[Service Consumer] triggering addSync for ${x} and ${y}`);
	var result = addSync(x,y);
	console.log(`[Service Consumer] result = ${result}`);
}

function addAsync(x,y, onResult){
	console.log(`     [Service Provider] processing ${x} and ${y}`);
	setTimeout(function(){
		var result = x + y;
		console.log(`     [Service Provider] returning result`);
		if (typeof onResult === 'function')
			onResult(result);
	},3000);
}

export function addAsyncClient(x,y){
	console.log(`[Service Consumer] triggering addAsync for ${x} and ${y}`);
	addAsync(x,y, function(result){
		console.log(`[Service Consumer] result = ${result}`);
	});
}

export var addAsyncEvents= (function(){
	let callbacks = [];
	function addResultCallback(onResult){
		callbacks.push(onResult);
	}
	function add(x,y){
		console.log(`     [Service Provider] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`     [Service Provider] returning result`);
			callbacks.forEach(cb => cb(result));
		},3000);		
	}
	return {
		onResult : addResultCallback,
		add : add
	};
})();

export function addAsyncPromise(x,y){
	console.log(`     [Service Provider] processing ${x} and ${y}`);

	var promise = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			var result = x + y;
			console.log(`     [Service Provider] returning result`);
			resolveFn(result);
		},3000);		
	});
	return promise;
}
