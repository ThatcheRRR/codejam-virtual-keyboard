const keys = [
    [
        ['Backquote', 'ё', 'Ё', '`', '~'],
        ['Digit1', '1', '!', '1', '!'],
        ['Digit2', '2', '\'', '2', '@'],
        ['Digit3', '3', '№', '3', '#'],
        ['Digit4', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%'],
        ['Digit6', '6', ':', '6', '^'],
        ['Digit7', '7', '?', '7', '&'],
        ['Digit8', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'],
        ['Minus', '-', '_', '-', '_'],
        ['Equal', '=', '+', '=', '+'],
        ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['KeyQ', 'й', 'Й', 'q', 'Q'],
        ['KeyW', 'ц', 'Ц', 'w', 'W'],
        ['KeyE', 'у', 'У', 'e', 'E'],
        ['KeyR', 'к', 'К', 'r', 'R'],
        ['KeyT', 'е', 'Е', 't', 'T'],
        ['KeyY', 'н', 'Н', 'y', 'Y'],
        ['KeyU', 'г', 'Г', 'u', 'U'],
        ['KeyI', 'ш', 'Ш', 'i', 'I'],
        ['KeyO', 'щ', 'Щ', 'o', 'O'],
        ['KeyP', 'з', 'З', 'p', 'P'],
        ['BracketLeft', 'х', 'Х', '[', '{'],
        ['BracketRight', 'ъ', 'Ъ', ']', '}'],
        ['Backslash', '\\', '/', '\\', '|'],
        ['Delete', 'Del', 'Del', 'Del', 'Del'],
    ],
    [
        ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['KeyA', 'ф', 'Ф', 'a', 'A'],
        ['KeyS', 'ы', 'Ы', 's', 'S'],
        ['KeyD', 'в', 'В', 'd', 'D'],
        ['KeyF', 'а', 'А', 'f', 'F'],
        ['KeyG', 'п', 'П', 'g', 'G'],
        ['KeyH', 'р', 'Р', 'h', 'H'],
        ['KeyJ', 'о', 'О', 'j', 'J'],
        ['KeyK', 'л', 'Л', 'k', 'K'],
        ['KeyL', 'д', 'Д', 'l', 'L'],
        ['Semicolon', 'ж', 'Ж', ';', ':'],
        ['Quote', 'э', 'Э', '\'', '\''],
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['KeyZ', 'я', 'Я', 'z', 'Z'],
        ['KeyX', 'ч', 'Ч', 'x', 'X'],
        ['KeyC', 'с', 'С', 'c', 'C'],
        ['KeyV', 'м', 'М', 'v', 'V'],
        ['KeyB', 'и', 'И', 'b', 'B'],
        ['KeyN', 'т', 'Т', 'n', 'N'],
        ['KeyM', 'ь', 'Ь', 'm', 'M'],
        ['Comma', 'б', 'Б', '.', '<'],
        ['Period', 'ю', 'Ю', ',', '>'],
        ['Slash', '.', ',', '/', '?'],
        ['ArrowUp', '▲', '▲', '▲', '▲'],
        ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['Space', ' ', ' ', ' ', ' '],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ArrowLeft', '◄', '◄', '◄', '◄'],
        ['ArrowDown', '▼', '▼', '▼', '▼'],
        ['ArrowRight', '►', '►', '►', '►'],
        ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
];
  
const container = document.createElement('div'),
      textarea = document.createElement('textarea'),
      keyboard = document.createElement('div');

let lang = 'rus',
    capsLock = false,
    repeatShift = 0;
  
container.className = 'container';
keyboard.className = 'keyboard';

container.append(textarea);
container.append(keyboard);
  
for (let i = 0; i < keys.length; i++) {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    for (let j = 0; j < keys[i].length; j++) {
        const key = document.createElement('div');
        key.classList.add('keyboard__key');
        key.classList.add(keys[i][j][0]);
        if (i === 0 && j >= 1 && j < keys[i].length) {
            key.insertAdjacentHTML('afterBegin',
            `<div class = "rus">
                <div class = "lowerCase noCapslock">${keys[i][j][1]}</div>
                <div class = "upperCase hidden noCapslock">${keys[i][j][2]}</div>
            </div>
            <div class = "eng hidden">
                <div class = "lowerCase hidden noCapslock">${keys[i][j][3]}</div>
                <div class = "upperCase hidden noCapslock">${keys[i][j][4]}</div>
            </div>`);
            row.append(key);
            continue;
        }
        if (i === 0 && j === 0 || key.classList.contains('Comma') || key.classList.contains('Period')|| key.classList.contains('Semicolon') || key.classList.contains('BracketLeft') || key.classList.contains('BracketRight'))  {
            key.insertAdjacentHTML('afterBegin',
            `<div class = "rus">
                <div class = "lowerCase ">${keys[i][j][1]}</div>
                <div class = "upperCase hidden">${keys[i][j][2]}</div>
            </div>
            <div class = "eng hidden">
                <div class = "lowerCase hidden noCapslock">${keys[i][j][3]}</div>
                <div class = "upperCase hidden noCapslock">${keys[i][j][4]}</div>
            </div>`);
            row.append(key);
            continue;
        }
        if (key.classList.contains('Backslash') || key.classList.contains('Slash')) {
            key.insertAdjacentHTML('afterBegin',
            `<div class = "rus">
                <div class = "lowerCase noCapslock">${keys[i][j][1]}</div>
                <div class = "upperCase hidden noCapslock">${keys[i][j][2]}</div>
            </div>
            <div class = "eng hidden">
                <div class = "lowerCase hidden noCapslock">${keys[i][j][3]}</div>
                <div class = "upperCase hidden noCapslock">${keys[i][j][4]}</div>
            </div>`);
            row.append(key);
            continue;
        }
        key.insertAdjacentHTML('afterBegin',
        `<div class = "rus">
            <div class = "lowerCase ">${keys[i][j][1]}</div>
            <div class = "upperCase hidden">${keys[i][j][2]}</div>
        </div>
        <div class = "eng hidden">
            <div class = "lowerCase hidden">${keys[i][j][3]}</div>
            <div class = "upperCase hidden">${keys[i][j][4]}</div>
        </div>`);
        row.append(key);
    }
    keyboard.append(row);
}
  
const addActiveKey = (elem) => {
    if (elem === undefined) return;
    elem.classList.add('active-key');
};
  
const removeActiveKey = (elem) => {
    if (elem === undefined) return;
    elem.classList.remove('active-key');
};
  
const changeCase = () => {
    let language = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < language.length; i++) {
        if (language[i].querySelectorAll('div')[0].classList.contains('noCapslock') || language[i].querySelectorAll('div')[1].classList.contains('noCapslock')) continue;
        language[i].querySelectorAll('div')[0].classList.toggle('hidden');
        language[i].querySelectorAll('div')[1].classList.toggle('hidden');
    }
};

const shiftActive = () => {
    let language = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < language.length; i++) {
        language[i].querySelectorAll('div')[0].classList.toggle('hidden');
        language[i].querySelectorAll('div')[1].classList.toggle('hidden');
    }
};
  
const changeLang = () => {
    let previousLang = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < previousLang.length; i++) {
        previousLang[i].classList.toggle('hidden');
        previousLang[i].querySelector('div').classList.toggle('hidden');
    }
    if (lang === 'rus') {
        lang = 'eng';
        sessionStorage.setItem('lang', lang);
    } else {
        lang = 'rus';
        sessionStorage.setItem('lang', lang);
    }
    let nextLang = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < nextLang.length; i++) {
        nextLang[i].classList.toggle('hidden');
        nextLang[i].querySelector('div').classList.toggle('hidden');
    }
};
  
if (sessionStorage.lang == 'eng') {
    changeLang();
}

textarea.addEventListener('keydown', (event) => {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    let elem = keyboard.getElementsByClassName(event.code)[0];
    if (event.altKey && event.ctrlKey) {
        addActiveKey(elem);
        changeLang();
    }
    switch (event.code) {
        case 'Tab':
            event.preventDefault();
            addActiveKey(elem);
            textarea.value += '\t';
        break;
        case 'Enter':
            event.preventDefault();
            addActiveKey(elem);
            textarea.value += '\n';
        break;
        case 'CapsLock':
            if (capsLock) {
                removeActiveKey(elem);
                capsLock = false;
            } else {
                addActiveKey(elem);
                capsLock = true;
            }
                event.preventDefault();
                changeCase();
        break;
        case 'Backspace':
            textarea.value = textarea.value.substr(0, textarea.value.length - 1);
            addActiveKey(elem);
        break;
        case 'Delete':
            event.preventDefault();
            addActiveKey(elem);
        break;
        case 'AltLeft':
        case 'AltRight':
            event.preventDefault();
            addActiveKey(elem);
        break;
        case 'ControlLeft':
        case 'ControlRight':
            event.preventDefault();
            addActiveKey(elem);
        break;
        case 'ShiftLeft':
        case 'ShiftRight':
            event.preventDefault();
            addActiveKey(elem);
            if (event.shiftKey && repeatShift === 0) {
                shiftActive();
                repeatShift++
            }
        break;
        default:
            if (elem === undefined) break;
            addActiveKey(elem);
            textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
});

document.addEventListener('keyup', function(event) {
    let elem = keyboard.getElementsByClassName(event.code)[0];
    switch (event.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
            event.preventDefault();
            removeActiveKey(elem);
            shiftActive();
            repeatShift = 0;
        break;
        case 'CapsLock':
        break;
        default:
            removeActiveKey(elem);
        break;
    }
});

keyboard.addEventListener('mousedown', function(event) {
    if (event.target.tagName === 'DIV') {
        let elem = event.target.closest('.keyboard__key');
        switch (elem.classList[1]) {
            case 'Tab':
                event.preventDefault();
                addActiveKey(elem);
                textarea.value += '\t';
            break;
            case 'Enter':
                event.preventDefault();
                addActiveKey(elem);
                textarea.value += '\n';
            break;
            case 'Backspace':
                textarea.value = textarea.value.substr(0, textarea.value.length - 1);
                addActiveKey(elem);
            break;
            case 'CapsLock':
                event.preventDefault();
                if (capsLock) {
                    removeActiveKey(event.target.closest('.keyboard__key'));
                    capsLock = false;
                } else {
                    addActiveKey(event.target.closest('.keyboard__key'));
                    capsLock = true;
                }
                changeCase();
            break;
            case 'Delete':
                event.preventDefault();
                addActiveKey(elem);
            break;
            case 'AltLeft':
            case 'AltRight':
                event.preventDefault();
                addActiveKey(elem);
            break;
            case 'ControlLeft':
            case 'ControlRight':
                event.preventDefault();
                addActiveKey(elem);
            break;
            case 'ShiftLeft':
            case 'ShiftRight':
                event.preventDefault();
                addActiveKey(elem);
                shiftActive();
            break;
            default:
                addActiveKey(elem);
                textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
            break;
        }
    } else {
        event.preventDefault();
    }
});
  
keyboard.addEventListener('mouseup', function(event) {
    let elem = event.target.closest('.keyboard__key');
    switch (elem.classList[1]) {
        case 'ShiftLeft':
        case 'ShiftRight':
            event.preventDefault();
            removeActiveKey(elem);
            shiftActive();
        break;
        case 'CapsLock':
            event.preventDefault();
            if (capsLock !== true) {
                removeActiveKey(event.target.closest('.keyboard__key'));
            } else {
                addActiveKey(event.target.closest('.keyboard__key'));
            }
        break;
        default:
            removeActiveKey(elem);
        break;
    }
});

document.body.append(container)