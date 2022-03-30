let srcval=async()=>{
    try{
        let value=document.getElementById("src").value;
        let res=await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&limit=5&apiKey=faf6856ebd72424da06c7611025d1da6`)
        let data=await res.json()
        console.log(data.results)
        return data.results
    }

    catch(err){
        console.log(err)
    }
    // appendSrcdata(data.results)


}

let appendSrcdata=(data)=>{
    document.getElementById("showsrc").innerHTML="";
    data.map((ele)=>{
        if(ele.city==undefined||ele.state==undefined||ele.country==undefined)
        {
            return false
        }
        let box1=document.createElement("div")
        box1.style.cursor="pointer"
        let p1=document.createElement("p")
        p1.innerText=`${ele.city}  ${ele.state}  ${ele.country}`
        box1.append(p1)
        document.getElementById("showsrc").append(box1)

        box1.addEventListener("click",()=>{
        document.getElementById("src").value=ele.city
        })
    })
}


let main=async()=>{

    let srcdata =await srcval()
    if(srcdata==undefined)
    {
        return false
    }

    appendSrcdata(srcdata)
}

let jai=()=>{
    let x="hello";
    return x
}

export{srcval,appendSrcdata,main,jai}