/*
 * @Author: coder-jason
 * @Date: 2022-04-20 12:19:54
 * @LastEditTime: 2022-04-20 12:25:45
 */
var oImg = document.getElementsByTagName("img")
var len = oImg.length;
console.log(len)
var deg = 360 / len;
var oWrap = document.getElementById("imgwrap");
window.onload = function () {
      Array.prototype.forEach.call(oImg, function (ele, index, self) {
            ele.style.transform = "rotateY(" + deg * index + "deg) translateZ(350px)";
            ele.style.transition = "1s " + (len - index) * 0.1 + "s";
      });
}
var newX, newY, lastX, lastY, minusX, minusY, rotX = -20, rotY = 0;
document.onmousedown = function (e) {
      lastX = e.clientX;
      lastY = e.clientY;
      this.onmousemove = function (e) {
            newX = e.clientX;
            newY = e.clientY;
            minusX = newX - lastX;
            minusY = newY - lastY;
            rotX -= minusY * 0.2;
            rotY += minusX * 0.1;
            oWrap.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
            lastX = newX;
            lastY = newY;
      }
      this.onmouseup = function (e) {
            this.onmousemove = null;
      }
}
