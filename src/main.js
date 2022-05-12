const keys = {
  Backquote: {
    en: { key: '`', shiftKey: '~', capsKey: '`' },
    by: { key: 'ё', shiftKey: 'Ё', capsKey: 'Ё' },
    row: 0,
    pos: 0,
  },
  Digit1: {
    en: { key: '1', shiftKey: '!', capsKey: '1' },
    by: { key: '1', shiftKey: '!', capsKey: '1' },
    row: 0,
    pos: 1,
  },
  Digit2: {
    en: { key: '2', shiftKey: '@', capsKey: '2' },
    by: { key: '2', shiftKey: '"', capsKey: '2' },
    row: 0,
    pos: 2,
  },
  Digit3: {
    en: { key: '3', shiftKey: '#', capsKey: '3' },
    by: { key: '3', shiftKey: '№', capsKey: '3' },
    row: 0,
    pos: 3,
  },
  Digit4: {
    en: { key: '4', shiftKey: '$', capsKey: '4' },
    by: { key: '4', shiftKey: ';', capsKey: '4' },
    row: 0,
    pos: 4,
  },
  Digit5: {
    en: { key: '5', shiftKey: '%', capsKey: '5' },
    by: { key: '5', shiftKey: '%', capsKey: '5' },
    row: 0,
    pos: 5,
  },
  Digit6: {
    en: { key: '6', shiftKey: '^', capsKey: '6' },
    by: { key: '6', shiftKey: ':', capsKey: '6' },
    row: 0,
    pos: 6,
  },
  Digit7: {
    en: { key: '7', shiftKey: '&', capsKey: '7' },
    by: { key: '7', shiftKey: '?', capsKey: '7' },
    row: 0,
    pos: 7,
  },
  Digit8: {
    en: { key: '8', shiftKey: '*', capsKey: '8' },
    by: { key: '8', shiftKey: '*', capsKey: '8' },
    row: 0,
    pos: 8,
  },
  Digit9: {
    en: { key: '9', shiftKey: '(', capsKey: '9' },
    by: { key: '9', shiftKey: '(', capsKey: '9' },
    row: 0,
    pos: 9,
  },
  Digit0: {
    en: { key: '0', shiftKey: ')', capsKey: '0' },
    by: { key: '0', shiftKey: ')', capsKey: '0' },
    row: 0,
    pos: 10,
  },
  Minus: {
    en: { key: '-', shiftKey: '_', capsKey: '-' },
    by: { key: '-', shiftKey: '_', capsKey: '-' },
    row: 0,
    pos: 11,
  },
  Equal: {
    en: { key: '=', shiftKey: '+', capsKey: '=' },
    by: { key: '=', shiftKey: '+', capsKey: '=' },
    row: 0,
    pos: 12,
  },
  Backspace: { row: 0, pos: 13 },

  Tab: { row: 1, pos: 0 },
  KeyQ: {
    en: { key: 'q', shiftKey: 'Q', capsKey: 'Q' },
    by: { key: 'й', shiftKey: 'Й', capsKey: 'Й' },
    row: 1,
    pos: 1,
  },
  KeyW: {
    en: { key: 'w', shiftKey: 'W', capsKey: 'W' },
    by: { key: 'ц', shiftKey: 'Ц', capsKey: 'Ц' },
    row: 1,
    pos: 2,
  },
  KeyE: {
    en: { key: 'e', shiftKey: 'E', capsKey: 'E' },
    by: { key: 'у', shiftKey: 'У', capsKey: 'У' },
    row: 1,
    pos: 3,
  },
  KeyR: {
    en: { key: 'r', shiftKey: 'R', capsKey: 'R' },
    by: { key: 'к', shiftKey: 'К', capsKey: 'К' },
    row: 1,
    pos: 4,
  },
  KeyT: {
    en: { key: 't', shiftKey: 'T', capsKey: 'T' },
    by: { key: 'е', shiftKey: 'Е', capsKey: 'Е' },
    row: 1,
    pos: 5,
  },
  KeyY: {
    en: { key: 'y', shiftKey: 'Y', capsKey: 'Y' },
    by: { key: 'н', shiftKey: 'Н', capsKey: 'Н' },
    row: 1,
    pos: 6,
  },
  KeyU: {
    en: { key: 'u', shiftKey: 'U', capsKey: 'U' },
    by: { key: 'г', shiftKey: 'Г', capsKey: 'Г' },
    row: 1,
    pos: 7,
  },
  KeyI: {
    en: { key: 'i', shiftKey: 'I', capsKey: 'I' },
    by: { key: 'ш', shiftKey: 'Ш', capsKey: 'Ш' },
    row: 1,
    pos: 8,
  },
  KeyO: {
    en: { key: 'o', shiftKey: 'O', capsKey: 'O' },
    by: { key: 'ў', shiftKey: 'Ў', capsKey: 'Ў' },
    row: 1,
    pos: 9,
  },
  KeyP: {
    en: { key: 'p', shiftKey: 'P', capsKey: 'P' },
    by: { key: 'з', shiftKey: 'З', capsKey: 'З' },
    row: 1,
    pos: 10,
  },
  BracketLeft: {
    en: { key: '[', shiftKey: '{', capsKey: '[' },
    by: { key: 'х', shiftKey: 'Х', capsKey: 'Х' },
    row: 1,
    pos: 11,
  },
  BracketRight: {
    en: { key: ']', shiftKey: '}', capsKey: ']' },
    by: { key: "'", shiftKey: "'", capsKey: "'" },
    row: 1,
    pos: 12,
  },
  Backslash: {
    en: { key: '\\', shiftKey: '|', capsKey: '\\' },
    by: { key: '\\', shiftKey: '/', capsKey: '\\' },
    row: 1,
    pos: 13,
  },
  Delete: { row: 1, pos: 14 },

  CapsLock: { row: 2, pos: 0 },
  KeyA: {
    en: { key: 'a', shiftKey: 'A', capsKey: 'A' },
    by: { key: 'ф', shiftKey: 'Ф', capsKey: 'Ф' },
    row: 2,
    pos: 1,
  },
  KeyS: {
    en: { key: 's', shiftKey: 'S', capsKey: 'S' },
    by: { key: 'ы', shiftKey: 'Ы', capsKey: 'Ы' },
    row: 2,
    pos: 2,
  },
  KeyD: {
    en: { key: 'd', shiftKey: 'D', capsKey: 'D' },
    by: { key: 'в', shiftKey: 'В', capsKey: 'В' },
    row: 2,
    pos: 3,
  },
  KeyF: {
    en: { key: 'f', shiftKey: 'F', capsKey: 'F' },
    by: { key: 'а', shiftKey: 'А', capsKey: 'А' },
    row: 2,
    pos: 4,
  },
  KeyG: {
    en: { key: 'g', shiftKey: 'G', capsKey: 'G' },
    by: { key: 'п', shiftKey: 'П', capsKey: 'П' },
    row: 2,
    pos: 5,
  },
  KeyH: {
    en: { key: 'h', shiftKey: 'H', capsKey: 'H' },
    by: { key: 'р', shiftKey: 'Р', capsKey: 'Р' },
    row: 2,
    pos: 6,
  },
  KeyJ: {
    en: { key: 'j', shiftKey: 'J', capsKey: 'J' },
    by: { key: 'о', shiftKey: 'О', capsKey: 'О' },
    row: 2,
    pos: 7,
  },
  KeyK: {
    en: { key: 'k', shiftKey: 'K', capsKey: 'K' },
    by: { key: 'л', shiftKey: 'Л', capsKey: 'Л' },
    row: 2,
    pos: 8,
  },
  KeyL: {
    en: { key: 'l', shiftKey: 'L', capsKey: 'L' },
    by: { key: 'д', shiftKey: 'Д', capsKey: 'Д' },
    row: 2,
    pos: 9,
  },
  Semicolon: {
    en: { key: ';', shiftKey: ':', capsKey: ';' },
    by: { key: 'ж', shiftKey: 'Ж', capsKey: 'Ж' },
    row: 2,
    pos: 10,
  },
  Quote: {
    en: { key: "'", shiftKey: '"', capsKey: "'" },
    by: { key: 'э', shiftKey: 'Э', capsKey: 'Э' },
    row: 2,
    pos: 11,
  },
  Enter: {
    row: 2,
    pos: 12,
  },

  ShiftLeft: { row: 3, pos: 0 },
  KeyZ: {
    en: { key: 'z', shiftKey: 'Z', capsKey: 'Z' },
    by: { key: 'я', shiftKey: 'Я', capsKey: 'Я' },
    row: 3,
    pos: 1,
  },
  KeyX: {
    en: { key: 'x', shiftKey: 'X', capsKey: 'X' },
    by: { key: 'ч', shiftKey: 'Ч', capsKey: 'Ч' },
    row: 3,
    pos: 2,
  },
  KeyC: {
    en: { key: 'c', shiftKey: 'C', capsKey: 'C' },
    by: { key: 'с', shiftKey: 'С', capsKey: 'С' },
    row: 3,
    pos: 3,
  },
  KeyV: {
    en: { key: 'v', shiftKey: 'V', capsKey: 'V' },
    by: { key: 'м', shiftKey: 'М', capsKey: 'М' },
    row: 3,
    pos: 4,
  },
  KeyB: {
    en: { key: 'b', shiftKey: 'B', capsKey: 'B' },
    by: { key: 'і', shiftKey: 'І', capsKey: 'І' },
    row: 3,
    pos: 5,
  },
  KeyN: {
    en: { key: 'n', shiftKey: 'N', capsKey: 'N' },
    by: { key: 'т', shiftKey: 'Т', capsKey: 'Т' },
    row: 3,
    pos: 6,
  },
  KeyM: {
    en: { key: 'm', shiftKey: 'M', capsKey: 'M' },
    by: { key: 'ь', shiftKey: 'Ь', capsKey: 'Ь' },
    row: 3,
    pos: 7,
  },
  Comma: {
    en: { key: ',', shiftKey: '<', capsKey: ',' },
    by: { key: 'б', shiftKey: 'Б', capsKey: 'Б' },
    row: 3,
    pos: 8,
  },
  Period: {
    en: { key: '.', shiftKey: '>', capsKey: '.' },
    by: { key: 'ю', shiftKey: 'Ю', capsKey: 'Ю' },
    row: 3,
    pos: 9,
  },
  Slash: {
    en: { key: '/', shiftKey: '?', capsKey: '/' },
    by: { key: '.', shiftKey: ',', capsKey: '.' },
    row: 3,
    pos: 10,
  },
  ArrowUp: { row: 3, pos: 11 },
  ShiftRight: { row: 3, pos: 12 },
  ControlLeft: { row: 4, pos: 0 },
  MetaLeft: { row: 4, pos: 1 },
  AltLeft: { row: 4, pos: 2 },
  Space: { row: 4, pos: 3 },
  AltRight: { row: 4, pos: 4 },
  ArrowLeft: { row: 4, pos: 5 },
  ArrowDown: { row: 4, pos: 6 },
  ArrowRight: { row: 4, pos: 7 },
  ControlRight: { row: 4, pos: 8 },
};

class Keyboard {
  constructor(keysArr) {
    this.keys = keysArr;
    this.specials = [
      'Backspace',
      'Tab',
      'CapsLock',
      'Enter',
      'ShiftLeft',
      'ShiftRight',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'ControlRight',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];
    this.state = {
      isCapsOn: false,
      isShiftPressed: false,
      lang: 'en',
      caseUp: false,
    };
    this.pressed = new Set();
    this.cursorPosition = 0;
    this.textarea = null;
  }

  init() {
    this.state.lang = localStorage.getItem('lang') || 'en';
    const body = document.querySelector('body');
    body.innerHTML = `
          <div class="container">
              <h1 class="h1">RSS Virtual Keyboard</h1>
              <textarea name="textarea" class="textarea" id="textarea" cols="30" rows="7"></textarea>
              <div class="keyboard">
                  <div class="row" data-row="0"></div>
                  <div class="row" data-row="1"></div>
                  <div class="row" data-row="2"></div>
                  <div class="row" data-row="3"></div>
                  <div class="row" data-row="4"></div>
              </div>
              <div class="toolbar">
                <button class="key button button_layout"></button>
                <h2 class="h2">©</h2>
                <h2 class="h2">2022</h2>
                <h2 class="h2">For Windows</h2>
                <h2 class="h2">To switch language press Left Ctrl and Left Alt</h2>
                <a href="https://github.com/zmitserfurmanau" target="_blank" rel="noopener">
                  <img src="../assets/svg/github.svg" alt="github" class="social-logo" width="32" height="32">
                </a>
                <button class="key button button_clear"></button>
              </div>
          </div>
      `;
    const keyboardContainer = document.querySelector('.keyboard');
    /* eslint-disable-next-line */
    for (const [key, value] of Object.entries(this.keys)) {
      const keyContainer = document.createElement('div');
      const params = this.getKeyParams(key);
      const {
        keyMain, keySecond, keyMainBy, keySecondBy, classes,
      } = params;
      keyContainer.classList.add(...classes);
      keyContainer.dataset.name = key;
      keyContainer.innerHTML = `
          <span class="key__second${
  this.state.lang === 'by' ? ' key_invisible' : ''
}">${keySecond}</span>
          <span class="key__main${
  this.state.lang === 'by' ? ' key_invisible' : ''
}">${keyMain}</span>
          <span class="key__by-second${
  this.state.lang === 'en' ? ' key_invisible' : ''
}">${keySecondBy}</span>
          <span class="key__by-main${
  this.state.lang === 'en' ? ' key_invisible' : ''
}">${keyMainBy}</span>
        `;
      keyContainer.addEventListener('mousedown', () => this.keyPressHandler(key));
      keyContainer.addEventListener('mouseup', () => this.keyUnPressHandler(key));
      keyboardContainer
        .querySelector(`[data-row="${value.row}"]`)
        .appendChild(keyContainer);
    }

    this.textarea = document.querySelector('.textarea');
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.keyPressHandler(e.code);
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.keyUnPressHandler(e.code);
    });
    this.textarea.focus();

    const clearButton = document.querySelector('.button_clear');
    clearButton.textContent = 'CLEAR';
    clearButton.addEventListener('click', () => {
      this.textarea.focus();
      this.textarea.value = '';
    });

    const layoutButton = document.querySelector('.button_layout');
    layoutButton.textContent = this.state.lang.toUpperCase();
    layoutButton.addEventListener('click', () => {
      this.textarea.focus();
      this.switchLayout();
    });
  }

  getKeyParams(key) {
    const params = {};
    const specialsLabels = {
      Backspace: 'Backspace \u27f5',
      Tab: 'Tab \u21b9',
      CapsLock: 'Caps Lock',
      Enter: 'ENTER \u21B5',
      ShiftLeft: 'Shift \u21E7',
      ShiftRight: 'Shift \u21E7',
      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      AltRight: 'Alt',
      Space: ' ',
      ControlRight: 'Ctrl',
      ArrowUp: '\u2191',
      ArrowDown: '\u2193',
      ArrowLeft: '\u2190',
      ArrowRight: '\u2192',
      Delete: 'DEL',
    };
    if (this.keys[key].en && this.keys[key].by) {
      params.keyMain = this.keys[key].en.key.toUpperCase();
      params.keySecond = params.keyMain === this.keys[key].en.shiftKey
        ? ''
        : this.keys[key].en.shiftKey;
      params.keyMainBy = keys[key].by.key.toUpperCase();
      params.keySecondBy = params.keyMainBy === this.keys[key].by.shiftKey
        ? ''
        : this.keys[key].by.shiftKey;
    } else {
      params.keyMain = specialsLabels[key];
      params.keySecond = '';
      params.keyMainBy = specialsLabels[key];
      params.keySecondBy = '';
    }
    params.classes = ['key'];
    if (key === 'Backspace') params.classes.push('key_backspace');
    if (key === 'Tab') params.classes.push('key_tab');
    if (key === 'Del') params.classes.push('key_del');
    if (key === 'CapsLock') params.classes.push('key_caps');
    if (key === 'Enter') params.classes.push('key_enter');
    if (key === 'ShiftLeft' || key === 'ShiftRight') { params.classes.push('key_shift'); }
    if (key === 'ControlRight' || key === 'ControlLeft') { params.classes.push('key_ctrl'); }
    if (key === 'Space') params.classes.push('key_space');

    return params;
  }

  keyPressHandler(key) {
    this.pressed.add(key);
    if (
      this.pressed.size === 2
      && this.pressed.has('ControlLeft')
      && this.pressed.has('AltLeft')
    ) { this.switchLayout(); }
    const currentKey = document.querySelector(`[data-name="${key}"]`);
    if (!currentKey) return;
    currentKey.classList.add('key_pressed');

    this.textarea.focus();

    const startPos = this.textarea.selectionStart;
    const endPos = this.textarea.selectionEnd;
    this.cursorPosition = endPos;
    this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
    if (key === 'CapsLock') {
      this.state.isCapsOn = !this.state.isCapsOn;
      currentKey.classList.toggle('caps_on');
      return;
    }
    if (key === 'ShiftRight' || key === 'ShiftLeft') {
      this.state.isShiftPressed = true;
    }
    if (key === 'Backspace') {
      this.textarea.value = this.textarea.value.substring(
        0,
        startPos
            - (endPos === this.textarea.value.length || startPos === endPos
              ? 1
              : 0),
      ) + this.textarea.value.substring(endPos, this.textarea.value.length);
      this.cursorPosition = startPos - (startPos === endPos ? 1 : 0);
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    }
    if (key === 'ArrowLeft') {
      this.cursorPosition -= this.cursorPosition > 0 ? 1 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    }
    if (key === 'ArrowRight') {
      this.cursorPosition
        += this.cursorPosition < this.textarea.value.length ? 1 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    }
    if (key === 'ArrowUp') {
      this.cursorPosition = this.cursorPosition - 42 > 0 ? this.cursorPosition - 42 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    }
    if (key === 'ArrowDown') {
      this.cursorPosition = this.cursorPosition + 42 < this.textarea.value.length
        ? this.cursorPosition + 42
        : this.textarea.value.length;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    }
    if (key === 'Delete') {
      this.textarea.value = this.textarea.value.substring(0, startPos)
        + this.textarea.value.substring(
          endPos + (startPos === endPos ? 1 : 0),
          this.textarea.value.length,
        );
      this.textarea.setSelectionRange(startPos, startPos);
      return;
    }

    const content = this.getContent(key);
    if (content === '') return;

    if (this.textarea.selectionStart || this.textarea.selectionStart === '0') {
      this.textarea.value = this.textarea.value.substring(0, startPos)
        + content
        + this.textarea.value.substring(endPos, this.textarea.value.length);
      this.cursorPosition = startPos + content.length;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
    } else this.textarea.value += content;
  }

  keyUnPressHandler(key) {
    this.pressed.delete(key);
    const currentKey = document.querySelector(`[data-name="${key}"]`);
    if (!currentKey) return;
    currentKey.classList.remove('key_pressed');
    if (key === 'ShiftRight' || key === 'ShiftLeft') {
      this.state.isShiftPressed = false;
    }
    this.textarea.focus();
  }

  switchLayout() {
    this.state.lang = this.state.lang === 'en' ? 'by' : 'en';
    const keysArr = [...document.querySelectorAll('.key')];
    keysArr.forEach((key) => [...key.querySelectorAll('span')].forEach((span) => span.classList.toggle('key_invisible')));
    localStorage.setItem('lang', this.state.lang);
    document.querySelector('.button_layout').textContent = this.state.lang.toUpperCase();
  }

  getContent(key) {
    if (key === 'Space') return ' ';
    if (key === 'Tab') return '    ';
    if (key === 'Enter') return '\n';
    if (!this.keys[key][this.state.lang]) return '';
    if (this.state.isCapsOn && this.state.isShiftPressed) {
      return this.keys[key][this.state.lang].shiftKey.toLowerCase();
    }
    if (this.state.isCapsOn) return this.keys[key][this.state.lang].capsKey;
    if (this.state.isShiftPressed) { return this.keys[key][this.state.lang].shiftKey; }
    return this.keys[key][this.state.lang].key;
  }
}

const keyboard = new Keyboard(keys);
keyboard.init();
