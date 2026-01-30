const data = {
    bios: {
        title: "Вход в BIOS / Boot Menu",
        content: `
            <table class="info-table">
                <tr><td>ASUS</td><td>F2 / Del (Boot: F8)</td></tr>
                <tr><td>HP</td><td>F10 / Esc (Boot: F9)</td></tr>
                <tr><td>Lenovo</td><td>F2 / Fn+F2 (Boot: F12)</td></tr>
                <tr><td>Dell</td><td>F2 (Boot: F12)</td></tr>
                <tr><td>Acer</td><td>F2 / Del (Boot: F12)</td></tr>
                <tr><td>MSI</td><td>Del (Boot: F11)</td></tr>
            </table>`
    },
    beeps: {
        title: "Сигналы AMI BIOS",
        content: `
            <table class="info-table">
                <tr><td>1 кор.</td><td>ОК (Систем. тест пройден)</td></tr>
                <tr><td>2 кор.</td><td>Ошибка памяти (RAM)</td></tr>
                <tr><td>3 кор.</td><td>Ошибка первых 64КБ RAM</td></tr>
                <tr><td>5 кор.</td><td>Ошибка процессора (CPU)</td></tr>
                <tr><td>8 кор.</td><td>Ошибка видеокарты</td></tr>
            </table>`
    },
    network: {
        title: "Сети и IP",
        content: `
            <p><b>Очистка DNS:</b> ipconfig /flushdns</p>
            <p><b>Сброс стека:</b> netsh int ip reset</p>
            <p><b>Дефолтные IP роутеров:</b><br>192.168.0.1 / 192.168.1.1 / 192.168.31.1 (Xiaomi)</p>`
    },
    commands: {
        title: "Полезные команды",
        content: `
            <p><b>sfc /scannow</b> — Проверка системных файлов</p>
            <p><b>chkdsk C: /f</b> — Проверка диска на ошибки</p>
            <p><b>mrt</b> — Удаление вредоносных программ Windows</p>
            <p><b>gpupdate /force</b> — Обновление политик</p>`
    }
};

function openSection(id) {
    const section = data[id];
    if (section) {
        document.getElementById('modal-title').innerHTML = section.title;
        document.getElementById('modal-body').innerHTML = section.content;
        document.getElementById('modal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) closeModal();
}