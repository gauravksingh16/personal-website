function clickEffect(e){
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        var d=document.createElement("div");
        d.className="clickEffect";
        d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
        document.body.appendChild(d);
        d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
    }
}

document.addEventListener('click',clickEffect);