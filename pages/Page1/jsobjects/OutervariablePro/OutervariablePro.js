export default {
	myVar1: [{name:"anna",age:19}],
	myVar2:["anan","bbb"],
	myFun1: () => 4,
	
myFuncStore:async ()=>{
// const anan1 = this.myVar1
	// console.log(anan1)
	//appsmith.geolocation.clearWatch()
	const ana = this.myVar2[0]
	console.log(ana)
	 appsmith.geolocation.getCurrentPosition().then(()=>{
   showAlert("anan")
	})
},
	myFun2: async () => {
		return Promise.any([
			Api1.run(()=>console.log("api1")), 
			Api2.run(()=>console.log("api2"))
		]).then((res) => {
			showAlert("winner") 
		});
	},
	myFun3: async () => {
		let functcall = [
			Api1.run(),
			Api2.run()
		]
		return Promise.race(functcall).then(()=>console.log("function ran")).catch((e)=>console.log(e.error.message))
	},

	myfunc4 : async (time, value, state)=>{

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				//debugger
				if (state === "fulfill") {
					console.log(value)
					return resolve(value);
				} else {
					console.log(value)
					return reject(new Error(value));
				}
			}, time);
		});	

	},
	myfunc5: ()=>{

let abab = [
		this.myfunc4(700, "three", "fulfill"),
	  this.myfunc4(500, "four", "reject")
		]
	return	Promise.race(abab).then(
			(value) => {
				console.log(value); 
			})
		.catch((error)=>console.log(error.message))
			},
myFun5 :  ()=>{
let var1 ={}
return appsmith.geolocation.getCurrentPosition((s)=>{
	var1 = s.coords
	console.log(var1)
})
	.catch((error)=>{console.log(error.message)})
},
myFun6 : async ()=>{

return appsmith.geolocation.watchPosition()
},
	
}