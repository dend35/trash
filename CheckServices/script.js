var serviceList = []
serviceList.push("https://api.bpcontacts.com")
serviceList.push("https://admin.bpcontacts.com")
serviceList.push("https://vk.com")


async function request(url) {
    var obj = {
        url: url
    }
    try{
        obj.status = await (await fetch(url)).status
    }catch{
        obj.status = 400
    }
    finally{
        return obj
    }
   
}

function updateInfo(obj){
    var div = document.createElement("div")
    div.id = obj.url;
    div.style.width = 100;
    div.style.height = 70;
    div.style.display = "block";
    div.style.background = obj.status == 200 ? "green" : "red"
    div.append(obj.url)
    document.body.appendChild(div);
}

async function checkServices(){
    for (let i = 0; i < serviceList.length; i++) {
        var result = await request(serviceList[i])
        updateInfo(result)
    }
}
    