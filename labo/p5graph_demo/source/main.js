let version = "0.0";

let data = [];

let scaleTxt = document.getElementById("scale_text");
window.onload = function(){
    scaleTxt.textContent = coordinateScale;
    document.getElementById("csv_input").value = "";
    document.getElementById("version").textContent = version;
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

const sampleData = "-1.744278375,-0.04395653805,A1\n-1.9965687,0.3233690364,A2\n-1.352142459,0.1571108812,A3\n-1.671920037,0.2255159126,A4\n-0.8990420188,-3.070282323,A5\n1.629678612,0.0037098905,A6\n-1.136380284,-0.9609093374,A7\n-1.350730471,-0.8003646054,A8\n-1.924455707,1.766761647,A9\n-1.745748124,2.394782616,A10\n-2.276814218,0.541594002,A11\n-1.584506269,-3.321057812,A12\n-1.841969093,-3.708367038,A13\n1.978931787,-0.5054486155,A14\n1.792176563,0.1452842673,A15\n1.85855972,0.2995854184,A16\n1.941124253,-0.8888924733,A17\n2.068645593,0.07803696887,A18\n2.332240204,-0.2989079674,B1\n2.400802707,-0.3194159128,B2\n1.979096938,-0.3050331279,B3\n2.399725305,-0.3903925858,B4\n1.644443395,0.1731942853,B5\n2.582466322,-0.09797096191,B6\n3.03914745,-0.4788497626,B7\n2.718197826,0.8940515704,B8\n2.012154088,-0.2413076062,B9\n0.008725394598,0.9974681058,B10\n-0.2164772151,-0.2647517089,B11\n-0.1457168797,0.01937967158,B12\n-2.31882727,-1.329839787,B13\n-2.289037879,4.051194166,B14\n-2.379853618,0.7167898785,B15\n-0.2926661346,1.537400483,B16\n-0.3006348521,1.39354131,B17\n-0.4549627917,1.076833422,B18\n-1.435834897,0.1273092595,B19\n-1.505471973,-0.4953088195,B20\n2.105546332,0.8983979715,B21\n1.908261301,0.6553430351,B22\n-2.789958584,-0.7376200129,B23\n-2.745925937,-0.2179768037,B24"
function inputSample(){
    document.getElementById("csv_input").value = sampleData;
}