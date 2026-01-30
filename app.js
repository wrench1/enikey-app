let tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

const data = {
    bios: {
        title: "Вход в BIOS / Boot Menu",
        content: `
            <table class="info-table">
                <tr><td>ASUS</td><td>F2 / Del (Boot: F8)</td></tr>
                <tr><td>HP</td><td>F10 / Esc (Boot: F9)</td></tr>
                <tr><td>Lenovo</td><td>F2 / Fn+F2 (Novo button)</td></tr>
                <tr><td>Dell</td><td>F2 (Boot: F12)</td></tr>
                <tr><td>Acer</td><td>F2 / Del (Boot: F12)</td></tr>
                <tr><td>MSI</td><td>Del (Boot: F11)</td></tr>
            </table>`
    },
    beeps: {
        title: "Сигналы AMI BIOS",
        content: `
            <table class="info-table">
                <tr><td>1 кор.</td><td>ОК (Тест пройден)</td></tr>
                <tr><td>2 кор.</td><td>Ошибка RAM (Память)</td></tr>
                <tr><td>5 кор.</td><td>Ошибка CPU (Процессор)</td></tr>
                <tr><td>8 кор.</td><td>Ошибка видеокарты</td></tr>
                <tr><td>1 дл + 3 кор.</td><td>Ошибка видеопамяти</td></tr>
            </table>`
    },
    bsod: {
        title: "Коды BSOD",
        content: `
            <table class="info-table">
                <tr><td>0x0000007B</td><td>Inaccessible Boot Device (SATA/IDE mode)</td></tr>
                <tr><td>0x000000D1</td><td>Driver IRQL Not Less Or Equal</td></tr>
                <tr><td>0x00000050</td><td>Page Fault In Nonpaged Area (RAM)</td></tr>
                <tr><td>CRITICAL_PROCESS_DIED</td><td>Системный процесс остановлен</td></tr>
            </table>`
    },
    smart: {
        title: "S.M.A.R.T. Статус",
        content: `
            <p><b>05 Reallocated Sectors:</b> Переназначенные сектора. Если растет - диск умирает.</p>
            <p><b>C5 Current Pending:</b> Кандидаты на замену. Нужен прогон Victoria/MHDD.</p>
            <p><b>09 Power-On Hours:</b> Общее время наработки.</p>`
    },
    network: {
        title: "Сеть и IP",
        content: `
            <p><b>Сброс сети:</b> <br><code>netsh int ip reset</code></p>
            <p><b>Очистка кэша DNS:</b> <br><code>ipconfig /flushdns</code></p>
            <p><b>Админки:</b> 192.168.0.1, 1.1, 31.1 (Xiaomi), 88.1 (Mikrotik)</p>`
    },
    remote: {
        title: "Удаленный доступ",
        content: `
            <ul>
                <li><b>RustDesk:</b> Лучшая бесплатная замена AnyDesk.</li>
                <li><b>AeroAdmin:</b> Один файл, без установки.</li>
                <li><b>Chrome Remote Desktop:</b> Если есть Google аккаунт.</li>
            </ul>`
    },
    commands: {
        title: "CMD команды",
        content: `
            <p><b>sfc /scannow</b> - Проверка файлов ОС</p>
            <p><b>chkdsk C: /f /r</b> - Лечение диска</p>
            <p><b>mrt</b> - Встроенный антивирус MS</p>
            <p><b>control</b> - Классическая панель управления</p>`
    },
    "win-keys": {
        title: "Горячие клавиши Win",
        content: `
            <p><b>Win + X:</b> Меню админа (Диспетчер устройств и т.д.)</p>
            <p><b>Win + V:</b> Журнал буфера обмена</p>
            <p><b>Win + Shift + S:</b> Скриншот области</p>
            <p><b>Ctrl + Shift + Esc:</b> Диспетчер задач</p>`
    },
    hardware: {
        title: "Распиновка и Железо",
        content: `
            <p><b>Front Panel:</b> <br>PW_SW (Вкл), RES_SW (Ресет), HD_LED, PW_LED.</p>
            <p><b>Термопаста:</b> Слой должен быть тонким, как лист бумаги.</p>
            <p><b>SATA:</b> 7 pin - данные, 15 pin - питание.</p>`
    },
    printers: {
        title: "Принтеры (Fix)",
        content: `
            <p><b>Очистка очереди:</b> <br>1. Стоп служба 'Диспетчер печати'<br>2. Удалить файлы из <code>C:\\Windows\\System32\\spool\\PRINTERS</code><br>3. Старт службы.</p>`
    },
    soft: {
        title: "Must-have Soft",
        content: `
            <p><b>Ninite.com:</b> Установка всего софта одной галкой.</p>
            <p><b>Ventoy:</b> Мультизагрузочная флешка (просто кидай ISO).</p>
            <p><b>Snappy Driver Installer:</b> Драйверы офлайн.</p>`
    },
    passwords: {
        title: "Дефолтные логины",
        content: `
            <p><b>Admin / admin</b> (TP-Link, D-Link)</p>
            <p><b>Admin / 1234</b> (Zyxel, Keenetic)</p>
            <p><b>Admin / (пусто)</b> (Tenda, старые D-Link)</p>`
    }
};

function openSection(id) {
    const section = data[id];
    if (section) {
        document.getElementById('modal-title').innerHTML = section.title;
        document.getElementById('modal-body').innerHTML = section.content;
        document.getElementById('modal').style.display = "block";
        tg.HapticFeedback.impactOccurred('medium'); // Вибрация при нажатии
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) closeModal();
}

tg.ready();
