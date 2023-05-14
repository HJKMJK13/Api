// window.navigator.geolocation.getCurrentPosition(async success=>{
//     const lat=success.coords.latitude
//     const long=success.coords.longitude
//     const tbodyElement=document.querySelector(".tbody")
//     console.log(long)
//     let response = await fetch(`http://api.aladhan.com/v1/timings/calendar?latitude=${lat}&longitude=${long}&method=3&school=1&month=${new Date().getMonth()}&year=${new Date().getFullYear()}`)

//     response=await response.json()
//     console.log(response);

//     for(let data in response.data.timings){
//        const newTrElement=document.createElement("tr")
//        const newNameElement=document.createElement("tr")
//        const newTimeElement=document.createElement("tr")

//        newNameElement.textContent=data
//        newTimeElement.textContent=response.data.timings[data]

//        newTrElement.appenChild(newNameElement)
//        newTrElement.appenChild(newTimeElement)
//        tbodyElement.appenChild(newTrElement)

//     }
// })

window.navigator.geolocation.getCurrentPosition(async success=>{
    const lat=success.coords.latitude
    const long=success.coords.longitude
    const tbodyElement=document.querySelector(".tbody")
    const cityElement=document.querySelector(".city")
    console.log(lat);

    let response=await fetch(`http://api.aladhan.com/v1/timings/calendar?latitude=${lat}&longitude=${long}&method=3&school=1&month=${new Date().getMonth()}&year=${new Date().getFullYear()}`)
    response=await response.json()
    console.log(response);
    let times=["Dhurh","Fajr","Asr","Isha","Maghirib"]
    cityElement.textContent=`${response.data.meta.timezone}`

    for(let data in response.data.timings){


        if(times.indexOf(data)!==-1){
            const newTrElement=document.createElement("tr")
            const newNameElement=document.createElement("td")
            const newTimeElement=document.createElement("td")
    
            newNameElement.textContent=data
            newTimeElement.textContent=response.data.timings[data]
            console.log(data,response.data.timings[data])
    
            newTrElement.appendChild(newNameElement)
            newTrElement.appendChild(newTimeElement)
            tbodyElement.appendChild(newTrElement)
        }
    }
})

