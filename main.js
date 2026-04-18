// 动力学粒子背景
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let dots = [];
    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        dots = Array.from({length: 40}, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4
        }));
    }
    function animate() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(41, 151, 255, 0.15)";
        dots.forEach(d => {
            d.x += d.vx; d.y += d.vy;
            if(d.x < 0 || d.x > canvas.width) d.vx *= -1;
            if(d.y < 0 || d.y > canvas.height) d.vy *= -1;
            dots.forEach(d2 => {
                let dist = Math.hypot(d.x - d2.x, d.y - d2.y);
                if(dist < 180) {
                    ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d2.x, d2.y); ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animate);
    }
    window.addEventListener('resize', init);
    init(); animate();
}

// 打字机效果 (仅首页)
const typeEl = document.getElementById('typewriter');
if (typeEl) {
    const texts = ["ROBOTICS ENGINEER.", "MECHANICAL STUDENT @PolyU.", "NTU EXCHANGE 2026."];
    let i = 0, j = 0, deleting = false;
    function type() {
        let current = texts[i];
        typeEl.innerHTML = current.substring(0, j) + '<span style="color:#2997ff">_</span>';
        if(!deleting && j < current.length) j++;
        else if(deleting && j > 0) j--;
        else { deleting = !deleting; if(!deleting) i = (i+1)%texts.length; }
        setTimeout(type, deleting ? 50 : 150);
    }
    type();
}