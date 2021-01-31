lagus= ["01. BEYOND THE STARLIGHT (M@STER VERSION).mp3","01. DOKIDOKI リズム.mp3","01. EVERMORE (M@STER VERSION).mp3","01. Jet to the Future (M@STER VERSION).mp3","01. Kawaii make MY day! (M@STER VERSION).mp3","01. Snow Wings (M@STER VERSION).mp3","01. Stage Bye Stage.mp3","01. Starry-Go-Round (M@STER VERSION).mp3","01. Sweet Witches_ Night ～6人目はだぁれ～ (M@STER VERSION).mp3","01. Take me☆Take you.mp3","01. TRUE COLORS (M@STER VERSION).mp3","01. Trust me.mp3","01. Twin☆くるっ★テール (M@STER VERSION).mp3","01. With Love (M@STER VERSION).mp3","01. オウムアムアに幸運を.mp3","01. ハイファイ☆デイズ (M@STER VERSION).mp3","01. 不埒なCANVAS.mp3","01. 銀のイルカと熱い風.mp3","01.Gaze and Gaze(M@STER VERSION).mp3","01.Go Just Go!(M@STER VERSION).mp3","01.Never ends.mp3","01.O-Ku-Ri-Mo-No Sunday!（M@STER VERSION).mp3","01.OTAHEN アンセム.mp3","01.Secret Daybreak(M@STER VERSION).mp3","01.Sunshine See May(M@STER VERSION).mp3","01.ほほえみDiary(M@STER VERSION).mp3","01.オレンジタイム(M@STER VERSION).mp3","01.ギュっとMilky Way(M@STER VERSION).mp3","01.クレイジークレイジー(M@STER VERSION).mp3","01.リトルリドル(M@STER VERSION).mp3","01.夢をのぞいたら.mp3","01.幸せの法則 ～ルール～(M@STER VERSION).mp3","01.無重力シャトル(M@STER VERSION).mp3","02. GOIN_!!!.mp3","02. キミのそばでずっと.mp3","02. サニードロップ.mp3","02. 反逆的同一性 -Rebellion Identity-.mp3","02.Brand new!.mp3","02.Go Just Go!(M@STER VERSION) 夢見りあむソロ・リミックス.mp3","02.Sun！High！Gold！.mp3","03. さよならアンドロメダ.mp3","03. 夏恋 -NATSU KOI-.mp3","03.Go Just Go!(M@STER VERSION) 大槻唯ソロ・リミックス.mp3","04. 君の知らない物語.mp3","05. comic cosmic (M@STER VERSION).mp3","07.美に入り彩を穿つ(GAME VERSION).mp3"]
idx = 0
controls = null;
source = null;
title = null;

function next(){
    idx = (idx+1) % lagus.length;
    _play(lagus[idx]);
}

function prev(){
    idx = (idx-1+lagus.length) % lagus.length;
    _play(lagus[idx]);
}

function _play(name){
    text = "media/" + name;
    source.src = text;
    isPaused = controls.paused;
    controls.load();
    if (!isPaused){
        controls.play();
    }
    updateTitle();
}

function updateTitle(){
    title.innerHTML = lagus[idx];
}

function init(){
    controls = document.getElementById("controls");
    controls.addEventListener("ended", function(){
        next(); 
        controls.play();
    });
    source = document.getElementById("source");
    title = document.getElementById("title");
    if (controls.volume = 1){
        controls.volume = 0.5;
    }
    updateTitle();
}