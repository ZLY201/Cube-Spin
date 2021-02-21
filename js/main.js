window.onload = function() {
    var container = document.getElementById("container");
    container.onmousedown = function(event) {
        event = event || window.event;
        var width = event.clientX - container.offsetLeft;
        var height = event.clientY - container.offsetTop;
        container.onmousemove = function(event) {
            event = event || window.event;
            var x = event.clientX;
            var y = event.clientY;
            container.style.left = (x - width) + "px"
            container.style.top = (y - height) + "px";
        }
        container.onmouseup = function() {
            container.onmousemove = null;
            container.onmouseup = null;
        }
        return false;
    }
}