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

window.addEventListener('load', function() {  window.scroll(0, 0) })

window.addEventListener("load", function() {
    const form = document.getElementById('newsletterform');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank You for Subscribing!");
      })
    });
  });