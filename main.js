const textArr = ["ROBOTICS ENGINEER.", "MECHANICAL STUDENT @ PolyU.", "CODE ENTHUSIAST."];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    const target = document.getElementById("typewriter");
    if (!target) return;

    if (i < textArr.length) {
        if (!isDeleting && j <= textArr[i].length) {
            current = textArr[i].substring(0, j++);
        }
        if (isDeleting && j <= textArr[i].length) {
            current = textArr[i].substring(0, j--);
        }
        if (j == textArr[i].length) {
            isDeleting = true;
        }
        if (isDeleting && j === 0) {
            current = "";
            isDeleting = false;
            i++;
            if (i == textArr.length) i = 0;
        }
        target.innerHTML = current + '<span style="color:#2997ff;">|</span>';
    }
    setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", type);