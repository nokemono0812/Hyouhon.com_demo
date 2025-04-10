let data = [];

let scaleTxt = document.getElementById("scale_text");
window.onload = function(){
    scaleTxt.textContent = coordinateScale;
}

function submit(){
    let get = document.getElementById("csv_input").value;
    if(get != ""){
        data = [];
    }
    let newData = get.split("\n");
    for(let i = 0; i < newData.length; i ++){
        data[data.length] = newData[i].split(",");
    }
}

let viewDataLabel = true;
function viewLabel(){
    const changeLabelBtn = document.getElementById("btn_change_label");
    if(viewDataLabel){
        viewDataLabel = false;
        changeLabelBtn.value = "データラベル表示";
    }
    else{
        viewDataLabel = true;
        changeLabelBtn.value = "データラベル非表示";
    }
}