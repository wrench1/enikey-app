let tg = window.Telegram.WebApp;
tg.expand();

// ТВОИ ДАННЫЕ (СОХРАНЕНЫ И ДОПОЛНЕНЫ)
const data = {
    bios: {
        title: "Вход в BIOS / Boot Menu",
        content: `<table class="info-table">
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
        content: `<table class="info-table">
                <tr><td>1 кор.</td><td>ОК (Тест пройден)</td></tr>
                <tr><td>2 кор.</td><td>Ошибка RAM (Память)</td></tr>
                <tr><td>5 кор.</td><td>Ошибка CPU (Процессор)</td></tr>
                <tr><td>8 кор.</td><td>Ошибка видеокарты</td></tr>
            </table>`
    },
    bsod: {
        title: "Коды BSOD",
        content: `<table class="info-table">
                <tr><td>0x0000007B</td><td>Inaccessible Boot Device</td></tr>
                <tr><td>0x000000D1</td><td>Driver IRQL Not Less Or Equal</td></tr>
                <tr><td>0x00000050</td><td>Page Fault In Nonpaged Area</td></tr>
            </table>`
    },
    smart: {
        title: "S.M.A.R.T. Статус",
        content: `<p><b>05 Reallocated:</b> Битые сектора. Диск под замену.</p><p><b>C5 Pending:</b> Нестабильные сектора.</p>`
    },
    network: {
        title: "Сеть и IP",
        content: `<p><b>Сброс:</b> <code>netsh int ip reset</code></p><p><b>DNS:</b> <code>ipconfig /flushdns</code></p>`
    },
    remote: {
        title: "Удаленный доступ",
        content: `<p>RustDesk, AeroAdmin, Chrome Desktop.</p>`
    },
    commands: {
        title: "CMD команды",
        content: `<p><b>sfc /scannow</b> - Проверка системы</p><p><b>chkdsk</b> - Лечение диска</p>`
    },
    "win-keys": {
        title: "Горячие клавиши Win",
        content: `<p><b>Win+X:</b> Админ-меню</p><p><b>Win+V:</b> Буфер обмена</p>`
    },
    hardware: {
        title: "Распиновка",
        content: `<p>PW_SW - Включение. RES_SW - Ресет.</p>`
    },
    printers: {
        title: "Принтеры",
        content: `<p>Очистка очереди: stop spooler -> delete files -> start spooler.</p>`
    },
    soft: {
        title: "Must-have Soft",
        content: `<p>Ninite, Ventoy, Snappy Driver Installer.</p>`
    },
    passwords: {
        title: "Дефолтные логины",
        content: `<p>admin/admin, admin/1234, admin/(empty)</p>`
    }
};

// ЛОГИКА ПОИСКА
function filterButtons() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('.grid-item');

    buttons.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        btn.style.display = text.includes(query) ? "flex" : "none";
    });
}

// ЛОГИКА ОКНА
function openSection(id) {
    const section = data[id];
    if (section) {
        document.getElementById('modal-title').innerHTML = section.title;
        document.getElementById('modal-body').innerHTML = section.content;
        document.getElementById('modal').style.display = "block";
        
        tg.BackButton.show(); // Показываем нативную кнопку назад
        tg.HapticFeedback.impactOccurred('light');
    }
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
    tg.BackButton.hide(); // Прячем её при закрытии
}

// Слушаем кнопку "Назад" самого Телеграма
tg.onEvent('backButtonClicked', function() {
    closeModal();
});

tg.ready();
