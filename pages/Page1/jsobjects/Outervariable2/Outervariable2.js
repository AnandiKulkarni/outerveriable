export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let var1 = []
		setInterval(()=>{ Api1.run().then(()=>{
			storeValue('aa',Api1.data.users[0].name)
			var1 = Api1.data.users
			showAlert(var1[0].name)
			console.log(var1)
		})},3000)
	},
	myFun2: async () => {
   let var1 = 'testing'
	 let var2='name'
		setTimeout(()=>{showAlert(var1).then(()=>{
			storeValue("aa",Api1.data.users[0].name)
			showAlert(var2)
			console.log(appsmith.store.aa)
		})},2000)
	},

	///wrong with this? - console log is not printing
	myFun3: async () => {
		showAlert("hi").then(()=>{
			Api1.run().then(()=>{
				storeValue("var1",Api1.data.users[0].name)		
			})
			console.log(appsmith.store.var1)
		})
	},

	myFunc4: async()=>{
		//Api1.run().then(()=>{ storeValue('bb',Api1.data.users[0].email)})
		showAlert("testing").then(()=>{ Api1.run().then(()=>{ storeValue('oo',Api1.data.users[0].name)})}).then(()=>{showAlert(appsmith.store.oo)})	
	},
	myFunc5: async ()=>{

		setInterval(()=>{showAlert("west")},2000,"test")
	},
	myFunc6: async ()=>{
    let var1 = 'test'
		this.myFunc5()
		setTimeout(()=>{showAlert("east").then(()=>{showAlert(var1)})},2000)
	},

	myFunc7: async ()=>{

		let var1 = "Nested"
		function nested (test2){
			showAlert(test2)
		}
		showAlert("outside").then(()=>{nested(var1)})
	},
///enter a valid URL is not caught Same in release
	myFunc8: async ()=>{
		showAlert("navigating").then(()=>{navigateTo("")}).catch((e)=>{console.log(e.message)})
	}	,

		myFunc9: async ()=>{
			setInterval(()=>{
				setTimeout(()=>{console.log("console for settimeout")},6000)
				console.log("inetrval started")},2000)
	}	,
myfunc10:async()=>{
	
 Api1.run().then(()=>{Api2.run()})
},
myfunc(){
	console.log('df')
},
	myfunc23(){
	console.log('sdfsdf')
},
	myfunc24(){
	  return Query1.data
},

}