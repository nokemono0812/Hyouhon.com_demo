version = "0.0";
window.onload = function(){
    document.getElementById("version").textContent = "ver." + version;
}


//データベース代わり
let dataList = [
    [
        "demo_images/demo_pic_1.webp",
        "アマトンテモルフォ",
        "Morpho amathonte ecuadorensis",
        "コロンビア",
        "John Hyouhonic",
        "120mm"
    ],
    [
        "demo_images/demo_pic_2.jpeg",
        "カナブン",
        "Rhomborrhina japonica",
        "千葉県茂原市",
        "標本 作太郎",
        "31mm"
    ],
    [
        "demo_images/demo_pic_3.jpg",
        "ヤマトタマムシ",
        "Chrysochroa fulgidissima",
        "東京都武蔵野市",
        "標本 花子",
        "39mm"
    ]
];


function dataSetter(){
    document.getElementById("objects").innerHTML = '<h2 id="default"> フィルター: 「すべて」</h2>';
    for(let i = 0; i < dataList.length; i ++){
        addDisplayPics(i);
    }
    document.getElementById("objects").innerHTML += '<p id="search_all">検索結果は以上です。</p>';
}
dataSetter();

function addDisplayPics(dataNum){
    const targetPic = dataList[dataNum];
    let newPic = document.createElement("span");
    newPic.classList.add("pics");
    newPic.setAttribute("id", "pic_" + dataNum);
    newPic.setAttribute("onclick", "picUp(this.id)");
    newPic.style.backgroundImage = "url(" + targetPic[0] + ")";
    newPic.innerHTML = '<div class="pic_data"><span style="width:calc(100% - 12px);"><br><span class="insect_name">' + targetPic[1] + '</span><br><span class="scientific_name">' + targetPic[2] + '</span></span></div>';
    document.getElementById("default").after(newPic);
}


document.forms["data_input"].elements["submit"].addEventListener("click", function(){
    const picData = document.forms["data_input"].elements["pic"];
    const submitErr = document.getElementById("submit_error");
    const file = picData.files[0];
    if (!file) {
        submitErr.textContent = "失敗: 画像が選択されていません。";
        return;
    }

    const reader = new FileReader()

    reader.onload = (e) => {
        dataList[dataList.length] = [];
        dataList[dataList.length-1][0] = e.target.result;
        dataList[dataList.length-1][1] = document.forms["data_input"].elements["insect_name"].value;
        dataList[dataList.length-1][2] = document.forms["data_input"].elements["scientific_name"].value;
        dataList[dataList.length-1][3] = document.forms["data_input"].elements["place"].value;
        dataList[dataList.length-1][4] = document.forms["data_input"].elements["owner"].value;
        dataList[dataList.length-1][5] = document.forms["data_input"].elements["size_body"].value;
        for(let i = 0; i < dataList[dataList.length-1].length; i ++){
            if(dataList[dataList.length-1][i] == ""){
                dataList[dataList.length-1][i] = "データがありません";
            }
        }

        dataSetter();

        inputFormClear();
        viewAddMenu();
    }
    reader.readAsDataURL(file);
});
document.forms["data_input"].elements["cancel"].addEventListener("click", function(){
    inputFormClear();
    viewAddMenu();
});
function inputFormClear(){
    for(let i = 0; i < document.forms["data_input"].length-2; i ++){
        document.forms["data_input"][i].value = "";
    }
    document.getElementById("submit_error").textContent = "";
}

function picUp(id){
    idNum = id.split("_")[1];
    document.getElementById("pic_up_img").src = dataList[idNum][0];
    document.getElementById("pic_up_insect_name").textContent = dataList[idNum][1];
    document.getElementById("pic_up_scientific_name").textContent = dataList[idNum][2];

    document.getElementById("pic_up_place").textContent = dataList[idNum][3];
    document.getElementById("pic_up_owner").textContent = dataList[idNum][4];
    document.getElementById("pic_up_size_body").textContent = dataList[idNum][5];

    viewPicUpWin();
}



document.getElementById("btn_addData").addEventListener("click", function(){
    viewAddMenu();
});

document.getElementById("btn_menu").addEventListener("click", function(){
    viewAppMenu();
});

document.getElementById("arrow_back").addEventListener("click", function(){
    viewPicUpWin();
});


let addMenuOpen = false;
function viewAddMenu(){
    const addMenu = document.getElementById("add_menu");
    if(!addMenuOpen){
        addMenuOpen = true;
        addMenu.classList.add("show");
        if(appMenuOpen){
            viewAppMenu();
        }
    }
    else{
        addMenuOpen = false;
        addMenu.classList.remove("show");
    }
}

let appMenuOpen = false;
function viewAppMenu(){
    const appMenu = document.getElementById("app_menu");
    if(!appMenuOpen){
        appMenuOpen = true;
        appMenu.classList.add("show");
        if(addMenuOpen){
            viewAddMenu();
        }
    }
    else{
        appMenuOpen = false;
        appMenu.classList.remove("show");
    }
}

let picUpWinOpen = false;
function viewPicUpWin(){
    const picUpWin = document.getElementById("pic_up_win");
    if(!picUpWinOpen){
        picUpWinOpen = true;
        picUpWin.classList.add("show");
    }
    else{
        picUpWinOpen = false;
        picUpWin.classList.remove("show");
    }
}