// 1. 翻译字典
const i18n = {
    "zh": {
        "nav_home": "首页", "nav_projects": "项目展示集", "nav_bg": "个人背景", "nav_about": "关于我", "nav_contact": "联系我",
        "hero_sub": ["机器人工程师.", "机械工程 @PolyU.", "2026 NTU 交换生."],
        "view_works": "浏览项目", "lab_title": "3D 交互实验室", "works_title": "工程项目集",
        "p1_title": "PolyU Robocon 运动控制架构", "p1_desc": "主导运动控制架构设计。实现多传感器融合定位，提升机械臂响应速度。",
        "p2_title": "模块化智能节水阀门", "p2_desc": "基于嵌入式开发。设计了集流量监测与自动控制于一体的硬件系统。",
        "bg_title": "学术历程", "skills_title": "核心技能", "mission_title": "使命",
        "contact_title": "即刻联络", "msg": "点击开启 3D 实验室"
    },
    "zht": {
        "nav_home": "首頁", "nav_projects": "項目展示集", "nav_bg": "個人背景", "nav_about": "關於我", "nav_contact": "聯繫我",
        "hero_sub": ["機器人工程師.", "機械工程 @PolyU.", "2026 NTU 交換生."],
        "view_works": "瀏覽項目", "lab_title": "3D 交互實驗室", "works_title": "工程項目集",
        "p1_title": "PolyU Robocon 運動控制架構", "p1_desc": "主導運動控制架構設計。實現多傳感器融合定位，提升機械臂響應速度。",
        "p2_title": "模組化智能節水閥門", "p2_desc": "基於嵌入式開發。設計了集流量監測與自動控制於一體的硬件系統。",
        "bg_title": "學術歷程", "skills_title": "核心技能", "mission_title": "使命",
        "contact_title": "即刻聯絡", "msg": "點擊開啟 3D 實驗室"
    },
    "en": {
        "nav_home": "HOME", "nav_projects": "PROJECTS", "nav_bg": "BACKGROUND", "nav_about": "ABOUT", "nav_contact": "CONTACT",
        "hero_sub": ["ROBOTICS ENGINEER.", "MECHANICAL STUDENT @PolyU.", "NTU EXCHANGE 2026."],
        "view_works": "VIEW WORKS", "lab_title": "3D INTERACTIVE LAB", "works_title": "ENGINEERING WORKS",
        "p1_title": "PolyU Robocon: Control System", "p1_desc": "Led movement control architecture. Achieved multi-sensor fusion positioning and IK optimization.",
        "p2_title": "Modular Smart Valve", "p2_desc": "Embedded hardware design integrating flow monitoring and automated control logic.",
        "bg_title": "ACADEMIC JOURNEY", "skills_title": "CORE SKILLS", "mission_title": "MISSION",
        "contact_title": "GET IN TOUCH", "msg": "Click to enter 3D Lab"
    }
};

// 2. 语言切换逻辑
function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    // 重启打字机
    if(document.getElementById('typewriter')) startTypewriter(lang);
}

// 3. 打字机
let typeInterval;
function startTypewriter(lang) {
    clearInterval(typeInterval);
    const typeEl = document.getElementById('typewriter');
    const texts = i18n[lang]["hero_sub"];
    let i = 0, j = 0, deleting = false;
    function type() {
        let current = texts[i];
        typeEl.innerHTML = current.substring(0, j) + '_';
        if(!deleting && j < current.length) j++;
        else if(deleting && j > 0) j--;
        else { deleting = !deleting; if(!deleting) i = (i+1)%texts.length; }
    }
    typeInterval = setInterval(type, 150);
}

window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
    }
    setLanguage(savedLang);
};
