template = """idx = 0
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
}"""

from pathlib import Path
lagus = [f'"{i.name}"' for i in Path("media").iterdir()]
with open("script.js", "w+", encoding="utf8") as f:
    f.write(f"lagus= [{','.join(lagus)}]\r\n")
    f.write(template)