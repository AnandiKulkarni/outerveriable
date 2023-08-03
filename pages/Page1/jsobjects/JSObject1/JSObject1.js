export default {
	myvar1:{"name":"anan","age":19},
	myVar2: [	{
		"Repo":"CE",
		"Workflowname":"test-build-docker-image",
		"Totalcount":0,
		"Success":0,
		"Failed":0,},

					 {"Repo":"EE",
						"Workflowname":"test-build-docker-image",
						"Totalcount":0,
						"Success":0,
						"Failed":0,},

					 {"Repo":"EE",
						"Workflowname":"sync-community-repo",
						"Totalcount":0,
						"Success":0,
						"Failed":0,}		],
	myFun1: async() => {
	try{
     await failingapi.run()
		if(appsmith.user.email =''){showAlert("test")}
  }catch(error){
      showAlert(error.message)
  }
	},
	myFun2:  () => {

		const a = this.myVar2[0].Repo

		if (this.myVar2[0].Repo ==="CE")
		{
			//showAlert("Inscide").then(()=>{showAlert(a)})
			//setTimeout(()=>{showAlert(a)},2000)
			setInterval(()=>{
				Api1.run(()=>showAlert(a)).then(()=>console.log("progress"))
			},2000)
		}else
		{
			showAlert("its not CE")
		}
	},
Myfunc3:()=>{
	const var2 = "switch"
	Switch1.isDisabled? this.myFun2():showAlert(var2+' widget is eanbled'),console.log('disabled')
	return this.myvar1
}	,
	
Myfunc4:()=>{

	Outervariable2.myFunc9()
	setTimeout(()=>{console.log("aaa")},2000)
}	,

Myfunc5:()=>{
const a = this.myVar2[0].Repo
setInterval(()=>{Api1.run().then(()=>showAlert(a),2000)})
},

Myfunc6:()=>{
	const country = "peru"
	setInterval(()=>{Api3.run({country:"peru"}).then((s)=>{showAlert(country)})},2000)
	//return Api3.run({country:"peru"})
},

myfunc7 :async ()=>{
	try {
 setInterval(()=>{showAlert('hii')})
} catch(e) {
  showAlert(e.message)
}
}	,

	myFun11: async () => {
		
	//await appsmith.geolocation.clearWatch()
		
		appsmith.geolocation.getCurrentPosition().then(s=>showAlert("hi")).catch(error=>showAlert("error.message"))
	// appsmith.geolocation.watchPosition((s)=>{
			// showAlert('hi')
		// })//.catch((error)=>{console.log(error.message)})

		//return Api2.data.users

		// storeValue('aba','abab1',true)
		// console.log(appsmith.store.aba)
	//	return Api3.run()
	},
	
}