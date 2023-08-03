export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {

		const var1 = "test"
		Api1.run(()=>{
			storeValue('Api1data',Api1.data.users[0].name)
			storeValue('var1',var1)
			console.log(appsmith.store.Api1data)
		}).then(()=>{setTimeout(()=>{console.log('inside settimeout')},2000)}).catch((e)=>{console.log(e.message)})
	},
	myFun2: async () => {

		const var1 = "test"
		Api1.run(()=>{
			storeValue('Api1data',Api1.data.users[0].name)
			storeValue('var1',var1)
			console.log(appsmith.store.Api1data)
		}).then(()=>{setTimeout(()=>{console.log('inside settimeout')},2000)}).catch((e)=>{console.log(e.message)})
	},
	myFun3: async () => {

		const var1 = "test"
		failingapi.run(()=>{
			storeValue('Api1data',Api1.data.users[0].name)
			storeValue('var1',var1)
			console.log(appsmith.store.Api1data)
		}).then(()=>{setTimeout(()=>{console.log('inside settimeout')},2000)}).catch((e)=>{console.log(e.message)})
	},
	myFun4: async () => {
		let var1 = ["test1","test2"]
		return	Api1.run().then(()=>{
			const ab = Api1.data.users[0].name
			var1.push(ab)
			console.log(var1)
			storeValue('var1',var1)
			return var1
		})
	},

	myFun5: async () => {
		let var1 = ["test1"]
		return Api1.run(()=>{
			const Names = Api1.data.users
			Names.forEach(name=> var1.push(name.name))
			console.log(var1)
			return var1
		},(e)=>{console.log(e.message)},{})	
	},

	myFun6: async () => {
		let var1 = ["test1"]
		failingapi.run(()=>{
			// const Names = failingapi.data.users
			// Names.forEach(name=> var1.push(name.name))
			// console.log(var1)
		},(e)=>{console.log(e)},{})	
	},
	
	myFun7: async () => {
   let var1 = [{name:"test1",email:19}]
	 return failingapi.run().then(()=>{
		 console.log("hi")
		  const values = Api1.data.users
			values.forEach(value=>{
				var1.push({name:value.name,email:value.email})
				
			})
		 return var1	 
	 })
		.catch((e=>showAlert(e.message)))
	},

	myFun8: async () => {
   let var1 = [{name:"test1",email:19}]
	 return failingapi.run().then(()=>{
		  const values = failingapi.data.users
			values.forEach(value=>{
				var1.push({name:value.name,email:value.email})
			})
		 return var1	 
	 })
		.catch((e=>showAlert(e.message)))
	},

myFun9: async()=>{
	Api1.run(() => {
			Api1.run(() => {
				failingapi.run(() => {
					showAlert('done') 
				},()=>{showAlert("saa")})
			})      
		})
},
	
	myFun10: async () => {
		Api1.run(() => {
			Api1.run(() => {
				Api1.run(() => {
					showAlert('done') 
				})
			})      
		})},
myfunc11:()=>{
	let var1 = 'testing'
	Api1.run().then(()=> showAlert(var1))
}
}