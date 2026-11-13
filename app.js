/* =========================================================
   One Гоги — настройки и данные. Правьте здесь.
   ========================================================= */
const CONFIG = {
  phone: '+73422141444',
  whatsapp: '79194401365',        // из профиля на Яндекс Картах (wa.me/89194401365)
  // 0 = воскресенье … 6 = суббота
  hours: [
    ['11:00', '23:00'], ['11:00', '23:00'], ['11:00', '23:00'], ['11:00', '23:00'],
    ['11:00', '23:00'], ['11:00', '23:00'], ['11:00', '23:00'],
  ],
};

/* Меню зала — по фото меню ресторана на Яндекс Картах.
   [название, цена, метка ('r' — рекомендуем, 'n' — новинка), примечание] */
const MENU = [
  { id: 'start', title: 'Закуски', img: 'board.jpg', cap: 'Закуски на компанию', items: [
    ['Тартар из телятины с кремом из желтка и зелёного лука', 790, 'r'],
    ['Паштет из куриной печени с брусникой', 450],
    ['Рулетики из баклажанов с баже', 580],
    ['Хрустящий баклажан с кремом из печёных перцев', 580, 'n'],
    ['Запечённые мозговые кости со сванской солью', 930],
  ]},
  { id: 'company', title: 'На компанию', img: 'board.jpg', cap: 'На компанию', items: [
    ['Сельдь с картофелем и маринованным луком', 690],
    ['Мясные деликатесы с грибной икрой', 1420],
    ['Свежие овощи и зелень', 750],
    ['Домашние соленья и маринады', 650],
    ['Кавказские сыры с орехами и мёдом', 1150],
  ]},
  { id: 'salads', title: 'Салаты', img: 'salad-radish.jpg', cap: 'Салаты', items: [
    ['Хрустящие баклажаны с бакинскими томатами', 760, 'r'],
    ['Свежие овощи с адыгейским сыром', 740],
    ['Салат с телятиной и соусом из тунца', 760],
    ['Салат с языком‑гриль и красной фасолью', 710, 'n'],
    ['Южный «Цезарь» с шашлыком из цыплёнка', 620],
    ['Красный салат с томатами, клубникой и страчателлой', 690, 'n'],
    ['Зелёный салат с креветками', 720],
  ]},
  { id: 'soups', title: 'Супы', img: 'meat-sauce.jpg', cap: 'Горячее', items: [
    ['Борщ со смальцем и хрустящим тостом', 630, 'r'],
    ['Харчо с гранатом и грецким орехом', 630],
    ['Домашняя лапша с шашлыком', 520],
    ['Тыквенный с хрустящими пирожками', 550],
    ['Уха с судаком и томатами', 620, 'n'],
    ['Окрошка с говядиной', 650, 'n', 'на квасе или мацони'],
  ]},
  { id: 'dough', title: 'Из теста', img: 'khachapuri.jpg', cap: 'Хачапури по‑аджарски', items: [
    ['Хачапури по‑аджарски', 590],
    ['Хачапури по‑мегрельски', 660],
    ['Хачапури по‑мегрельски с рубленой телятиной', 760],
    ['Посикунчики с мясом и сацебели', 480],
    ['Пирожки с капустой и сметаной', 420],
    ['Кутаб с бараниной', 310],
    ['Кутаб с сыром и зеленью', 300],
  ]},
  { id: 'khinkali', title: 'Хинкали', img: 'khinkali-herbs.jpg', cap: 'Хинкали', items: [
    ['Мини‑хинкали с щекой бычка в перечном соусе', 670],
    ['Хинкали с бараниной', 350, '', '3 шт'],
    ['Хинкали с телятиной и свининой', 330, '', '3 шт'],
    ['Хинкали с сыром и зеленью', 330, '', '3 шт'],
  ]},
  { id: 'mains', title: 'Основные', img: 'dish-art.jpg', cap: 'Горячее', items: [
    ['Судак в лаваше с травами и дзадзики', 890, 'n'],
    ['Щучьи котлеты в луковом соусе с зелёными овощами', 840],
    ['Креветки, томлённые в соусе чкмерули', 890],
    ['Телячьи щёчки с пюре и кремом из сулугуни', 1150],
    ['Долма из говядины с мацони', 720, 'r'],
    ['Паста с говяжьими щёчками в сливочно‑перечном соусе', 980],
    ['Чахохбили из цыплёнка с грецким орехом', 720],
    ['Котлеты из цыплёнка с пюре и грибным соусом', 760],
    ['Язык с мясным соусом и луковым вареньем', 950],
  ]},
  { id: 'grill', title: 'На углях', img: 'shashlyk.jpg', cap: 'Мясо на углях', items: [
    ['Скумбрия с мочёной брусникой', 1200, 'n', '300 г'],
    ['Сибас с травами и лимоном', 1350, 'n', 'за 100 г'],
    ['Креветки', 860, '', 'за 100 г'],
    ['Стриплойн', 820, '', 'за 100 г'],
    ['Свиная шея', 480, '', 'за 100 г'],
    ['Баранина', 1100, '', 'за 100 г'],
    ['Курица', 460, '', 'за 100 г'],
    ['Люля‑кебаб из свинины и телятины', 490, '', 'за 100 г'],
    ['Люля‑кебаб из баранины', 490, '', 'за 100 г'],
    ['Люля‑кебаб из курицы и свинины', 420, '', 'за 100 г'],
  ]},
  { id: 'sides', title: 'Гарниры и соусы', img: 'chicken.jpg', cap: 'На углях', items: [
    ['Батат фри', 420],
    ['Картофель фри', 350],
    ['Овощи гриль', 480],
    ['Кукуруза гриль', 420],
    ['Соусы: аджика, мацони, ткемали, гранатовый, сальса из перцев, сацебели, цахтон, грибной', 160],
  ]},
  { id: 'desserts', title: 'Десерты', img: 'tart.jpg', cap: 'Десерты', items: [
    ['«Алтай» с кедровым орехом и брусникой', 560, 'r', 'со сгущённым молоком или цветочным мёдом'],
    ['Абрикосы с орехами и кремом', 420],
    ['Орешки со сгущёнкой', 420],
    ['Сан‑Себастьян с соусом из пломбира', 420],
    ['Наполеон со свежими ягодами', 800, 'n'],
    ['Тёплый финиковый пирог', 590],
    ['Мороженое «Шоколадный трюфель» с вишней', 380],
    ['Тарт Nutella', 550, 'n'],
    ['Эклер Nutella', 330, 'n'],
  ]},
  { id: 'bar', title: 'Бар', img: 'spritz.jpg', cap: 'Бар', items: [
    ['Лимонад «Батуми Бриз»', 440, '', '350 мл · 990 ₽ за 1 л'],
    ['Лимонад «Детство в Кахетии»', 440, '', '350 мл · 990 ₽ за 1 л'],
    ['Лимонады «Цитрусовый», «Тасманский персик»', 440, '', '350 мл · 990 ₽ за 1 л'],
    ['Авторский чай «Горный Казбеги», «Солнечная Аджария» и др.', 520, '', '550 мл · 720 ₽ за 900 мл'],
    ['Чай классический', 480, '', '900 мл'],
    ['Морс', 160, '', '250 мл'],
    ['Минеральная вода Nabeghlavi', 390, '', '500 мл'],
    ['Пиво Zedazeni', 820, '', 'бутылка'],
    ['Chacha Askaneli Platinum', 420, '', '40 мл'],
    ['Chacha Askaneli Premium Rkatsiteli Qvevri', 440, '', '40 мл'],
    ['Коньяк Askaneli 8 y.o.', 540, '', '40 мл'],
    ['Настойки: гранат‑кардамон, кизил‑базилик, барбарис и др.', 210, '', '40 мл'],
  ]},
];

/* Винная карта: [тип, название, страна, бокал 125 мл, бутылка 750 мл] */
const WINE = [
  ['red', 'Mukuzani', 'Грузия', 670, 3900],
  ['red', 'Kindzmarauli', 'Грузия', 0, 3900],
  ['red', 'Khvanchkara', 'Грузия', 0, 6700],
  ['red', 'Otskhanuri Sapere', 'Грузия', 0, 6500],
  ['red', 'Vismino Ojaleshi Cabernet Franc', 'Грузия', 0, 7200],
  ['red', 'Pirosmani', 'Грузия', 0, 3600],
  ['red', 'Tsveta Armenii Pomegranate Wine', 'Армения', 570, 3400],
  ['red', 'Los Pasos Malbec', 'Аргентина', 720, 4400],
  ['red', 'Le Grand Noir Pinot Noir', 'Франция', 0, 5200],
  ['white', 'Tsinandali', 'Грузия', 520, 3400],
  ['white', 'Ijevan Quince', 'Грузия', 570, 3100],
  ['white', 'Dugladze Krakhuna', 'Грузия', 0, 4900],
  ['white', 'Alexandrov Wine Collection Goruli Mtsvane', 'Грузия', 0, 5200],
  ['white', 'Vismino Kisi Riesling', 'Грузия', 0, 5700],
  ['white', 'Vismino Tvishi', 'Грузия', 0, 5900],
  ['white', 'Vysokij Bereg Riesling', 'Россия', 520, 3900],
  ['white', 'Sikory Estate Chardonnay', 'Россия', 0, 5900],
  ['white', 'Pavao Vinho Verde', 'Португалия', 0, 4200],
  ['white', 'Arco Bay Sauvignon Blanc Marlborough', 'Новая Зеландия', 820, 5700],
  ['white', 'Franz Haas Pinot Grigio', 'Италия', 0, 6700],
  ['white', 'Fiano Dal Vulcano Enoitalia', 'Италия', 0, 5200],
  ['white', 'Rocca di Frassinello Vermentino', 'Италия', 0, 6900],
  ['rose', 'Rkatsiteli Kvevri', 'Грузия', 0, 4900],
  ['rose', 'Pirosmani Rosé', 'Грузия', 490, 2900],
  ['spark', 'Askaneli Brut', 'Грузия', 720, 4200],
  ['spark', 'Montefiore Prosecco', 'Италия', 820, 4700],
  ['spark', 'Balaklava Brut Reserve Crimea Zolotaya Balka', 'Россия', 650, 3700],
  ['spark', 'H Barcelona', 'Испания', 0, 4200],
];
const WINE_TYPES = [['red', 'Красное'], ['white', 'Белое'], ['rose', 'Розе'], ['spark', 'Игристое']];

/* «Собери застолье»: позиции из меню зала */
const SUPRA = [
  { id: 'bread', title: 'Хачапури', items: [
    ['adj', 'Хачапури по‑аджарски', 590, 'шт'],
    ['meg', 'Хачапури по‑мегрельски', 660, 'шт'],
    ['megv', 'Хачапури по‑мегрельски с рубленой телятиной', 760, 'шт'],
    ['kut', 'Кутаб с бараниной', 310, 'шт'],
    ['kuts', 'Кутаб с сыром и зеленью', 300, 'шт'],
    ['pos', 'Посикунчики с мясом и сацебели', 480, 'порция'],
  ]},
  { id: 'khinkali', title: 'Хинкали', items: [
    ['hvs', 'Хинкали с телятиной и свининой', 330, '3 шт'],
    ['hb', 'Хинкали с бараниной', 350, '3 шт'],
    ['hs', 'Хинкали с сыром и зеленью', 330, '3 шт'],
    ['hm', 'Мини‑хинкали с щекой бычка в перечном соусе', 670, 'порция'],
  ]},
  { id: 'grill', title: 'Шашлык', items: [
    ['shp', 'Свиная шея на углях', 480, '100 г'],
    ['shb', 'Баранина на углях', 1100, '100 г'],
    ['shc', 'Курица на углях', 460, '100 г'],
    ['shs', 'Стриплойн на углях', 820, '100 г'],
    ['lvs', 'Люля‑кебаб из свинины и телятины', 490, '100 г'],
    ['lb', 'Люля‑кебаб из баранины', 490, '100 г'],
    ['sauce', 'Соус (аджика, ткемали, сацебели…)', 160, 'шт'],
  ]},
  { id: 'table', title: 'На стол', items: [
    ['deli', 'Мясные деликатесы с грибной икрой', 1420, 'блюдо'],
    ['cheese', 'Кавказские сыры с орехами и мёдом', 1150, 'блюдо'],
    ['veg', 'Свежие овощи и зелень', 750, 'блюдо'],
    ['pickle', 'Домашние соленья и маринады', 650, 'блюдо'],
    ['eggpl', 'Хрустящие баклажаны с бакинскими томатами', 760, 'порция'],
  ]},
  { id: 'wine', title: 'Вино', items: [
    ['muk', 'Mukuzani, красное, Грузия', 3900, '750 мл'],
    ['kin', 'Kindzmarauli, красное, Грузия', 3900, '750 мл'],
    ['khv', 'Khvanchkara, красное, Грузия', 6700, '750 мл'],
    ['tsi', 'Tsinandali, белое, Грузия', 3400, '750 мл'],
    ['kve', 'Rkatsiteli Kvevri, Грузия', 4900, '750 мл'],
    ['ask', 'Askaneli Brut, игристое, Грузия', 4200, '750 мл'],
    ['cha', 'Chacha Askaneli Platinum', 420, '40 мл'],
  ]},
  { id: 'drinks', title: 'Лимонады', items: [
    ['lbat', 'Лимонад «Батуми Бриз»', 990, '1 л'],
    ['lkah', 'Лимонад «Детство в Кахетии»', 990, '1 л'],
    ['tea', 'Чай «Горный Казбеги»', 720, '900 мл'],
  ]},
  { id: 'sweet', title: 'Десерты', items: [
    ['alt', '«Алтай» с кедровым орехом и брусникой', 560, 'порция'],
    ['nuts', 'Орешки со сгущёнкой', 420, 'порция'],
    ['date', 'Тёплый финиковый пирог', 590, 'порция'],
  ]},
];

/* ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rub = n => n.toLocaleString('ru-RU') + ' ₽';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- Часы и статус «открыто» (пермское время, UTC+5) ---------- */
function renderHours() {
  const names = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const order = [1, 2, 3, 4, 5, 6, 0];
  const rows = [];
  order.forEach(d => {
    const h = CONFIG.hours[d];
    const key = h ? h.join('–') : 'выходной';
    const last = rows[rows.length - 1];
    if (last && last.key === key) last.to = d; else rows.push({ from: d, to: d, key });
  });
  $('#hoursList').innerHTML = rows.length === 1
    ? `Ежедневно: ${rows[0].key}`
    : rows.map(r => `${names[r.from]}${r.from !== r.to ? '–' + names[r.to] : ''}: ${r.key}`).join('<br>');

  const perm = new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);
  const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const now = perm.getHours() * 60 + perm.getMinutes();
  const today = CONFIG.hours[perm.getDay()];
  const yest = CONFIG.hours[(perm.getDay() + 6) % 7];
  let open = false, small = '';
  if (yest && toMin(yest[1]) <= toMin(yest[0]) && now < toMin(yest[1])) { open = true; small = `до ${yest[1]}`; }
  else if (today) {
    const o = toMin(today[0]); let c = toMin(today[1]); if (c <= o) c += 1440;
    if (now >= o && now < c) { open = true; small = `сегодня до ${today[1]}`; }
    else if (now < o) small = `откроемся сегодня в ${today[0]}`;
  }
  if (!open && !small) {
    for (let i = 1; i <= 7; i++) {
      const h = CONFIG.hours[(perm.getDay() + i) % 7];
      if (h) { small = `откроемся ${i === 1 ? 'завтра' : names[(perm.getDay() + i) % 7]} в ${h[0]}`; break; }
    }
  }
  ['#openNow', '#openNow2'].forEach(sel => {
    const el = $(sel); el.textContent = open ? 'Открыто сейчас' : 'Сейчас закрыто'; el.classList.toggle('is-open', open);
  });
  $('#openNowText').textContent = small;
}

/* ---------- Меню с вкладками ---------- */
function renderMenu() {
  const tabs = $('#menuTabs');
  tabs.innerHTML = MENU.map((c, i) => `<button role="tab" type="button" aria-selected="${i === 0}" data-id="${c.id}">${esc(c.title)}</button>`).join('');
  const show = id => {
    const cat = MENU.find(c => c.id === id);
    $$('button', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.id === id));
    const list = $('#menuList');
    list.innerHTML = cat.items.map(([name, price, flag, note]) => `
      <div class="mi">
        <div class="mi__name">${esc(name)}${flag === 'r' ? ' <span class="mark mark--rec" title="Рекомендуем">♦</span>' : ''}${flag === 'n' ? ' <span class="mark mark--new">new</span>' : ''}${note ? `<small>${esc(note)}</small>` : ''}</div>
        <span class="mi__dots" aria-hidden="true"></span>
        <div class="mi__price">${rub(price)}</div>
      </div>`).join('');
    list.classList.remove('is-in'); void list.offsetWidth; list.classList.add('is-in');
    const img = $('#menuVisual');
    if (!img.src.endsWith(cat.img)) { img.src = 'img/' + cat.img; }
    img.alt = cat.cap; $('#menuVisualCap').textContent = cat.cap;
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(b.dataset.id); });
  tabs.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const bs = $$('button', tabs); let i = bs.indexOf(document.activeElement);
    i = (i + (e.key === 'ArrowRight' ? 1 : -1) + bs.length) % bs.length; bs[i].focus(); show(bs[i].dataset.id);
  });
  show(MENU[0].id);
}

/* ---------- Вино ---------- */
function renderWine() {
  const tabs = $('#wineTabs'), geo = $('#wineGeo');
  let type = 'red';
  tabs.innerHTML = WINE_TYPES.map(([id, t]) => `<button role="tab" type="button" data-id="${id}" aria-selected="${id === type}">${t}</button>`).join('');
  const draw = () => {
    $$('button', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.id === type));
    const rows = WINE.filter(w => w[0] === type && (!geo.checked || w[2] === 'Грузия'));
    $('#wineList').innerHTML = `<div class="wl__head"><span></span><span>бокал<br>125 мл</span><span>бутылка<br>750 мл</span></div>` + rows.map(([, n, c, g, b]) => `
      <div class="wl">
        <div class="wl__name">${esc(n)}<small class="${c === 'Грузия' ? 'is-ge' : ''}">${esc(c)}</small></div>
        <span class="wl__g">${g ? rub(g) : '—'}</span>
        <span class="wl__b">${rub(b)}</span>
      </div>`).join('');
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { type = b.dataset.id; draw(); } });
  geo.addEventListener('change', draw);
  draw();
}

/* ---------- Собери застолье ---------- */
const supra = { guests: 4, qty: {} };
const SUPRA_ITEMS = Object.fromEntries(SUPRA.flatMap(g => g.items.map(([id, name, price, unit]) => [id, { id, name, price, unit }])));

function supraTotal() {
  return Object.entries(supra.qty).reduce((s, [id, q]) => s + SUPRA_ITEMS[id].price * q, 0);
}
function supraLines() {
  return Object.entries(supra.qty).filter(([, q]) => q > 0).map(([id, q]) => {
    const it = SUPRA_ITEMS[id];
    return { ...it, q, sum: it.price * q };
  });
}

function initSupra() {
  const tabs = $('#supraTabs'), box = $('#supraItems');
  let group = SUPRA[0].id;
  // мини-итог для телефона: виден, пока выбираешь блюда, а сам стол ещё ниже
  const mini = $('#supraMini'), pick = $('.supra__pick'), table = $('#table');
  let pickVisible = false, tableVisible = false;
  const syncMini = () => { mini.hidden = !(mini.dataset.has && pickVisible && !tableVisible); };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(en => {
      if (en.target === pick) pickVisible = en.isIntersecting; else tableVisible = en.isIntersecting;
      syncMini();
    })).observe(pick);
    new IntersectionObserver(es => { tableVisible = es[0].isIntersecting; syncMini(); }, { threshold: .25 }).observe(table);
  }
  mini.addEventListener('click', () => table.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  tabs.innerHTML = SUPRA.map(g => `<button type="button" role="tab" data-id="${g.id}" aria-selected="${g.id === group}">${esc(g.title)}<i data-count="${g.id}"></i></button>`).join('');

  const drawItems = () => {
    $$('button', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.id === group));
    const g = SUPRA.find(x => x.id === group);
    box.innerHTML = g.items.map(([id, name, price, unit]) => {
      const q = supra.qty[id] || 0;
      return `<div class="dish${q ? ' is-on' : ''}" data-id="${id}">
        <div class="dish__info"><b>${esc(name)}</b><span>${rub(price)} · ${esc(unit)}</span></div>
        <div class="stepper stepper--sm">
          <button type="button" data-d="-1" aria-label="Убрать: ${esc(name)}"${q ? '' : ' disabled'}>−</button>
          <output>${q}</output>
          <button type="button" data-d="1" aria-label="Добавить: ${esc(name)}">+</button>
        </div>
      </div>`;
    }).join('');
  };

  const drawTable = () => {
    const lines = supraLines();
    const list = $('#tableList');
    list.innerHTML = lines.length
      ? lines.map(l => `<div class="plate"><span class="plate__q">${l.q}×</span><span class="plate__n">${esc(l.name)} <small>${esc(l.unit)}</small></span><span class="plate__s">${rub(l.sum)}</span></div>`).join('')
      : '<p class="table__empty">Стол пока пуст. Добавьте хачапури, хинкали, шашлык — или начните с готового набора.</p>';
    const total = supraTotal();
    $('#sumTotal').textContent = rub(total);
    $('#sumPer').textContent = rub(Math.round(total / supra.guests));
    $('#guestsVal').textContent = supra.guests;
    SUPRA.forEach(g => {
      const n = g.items.reduce((s, [id]) => s + (supra.qty[id] || 0), 0);
      const el = $(`[data-count="${g.id}"]`, tabs); el.textContent = n || ''; el.hidden = !n;
    });
    $('#miniSum').textContent = rub(total);
    mini.dataset.has = lines.length ? '1' : '';
    syncMini();
    const attach = $('#attachWrap');
    attach.hidden = !lines.length; $('#attachSum').textContent = rub(total);
    if (lines.length) $('#bookForm').guests.value = supra.guests;
  };

  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { group = b.dataset.id; drawItems(); } });
  box.addEventListener('click', e => {
    const b = e.target.closest('button[data-d]'); if (!b) return;
    const id = b.closest('.dish').dataset.id;
    supra.qty[id] = Math.max(0, Math.min(99, (supra.qty[id] || 0) + Number(b.dataset.d)));
    if (!supra.qty[id]) delete supra.qty[id];
    drawItems(); drawTable();
    const nb = $(`.dish[data-id="${id}"] button[data-d="${b.dataset.d}"]`, box);
    if (nb && !nb.disabled) nb.focus();
  });
  $('#guests').addEventListener('click', e => {
    const b = e.target.closest('button[data-d]'); if (!b) return;
    supra.guests = Math.max(1, Math.min(30, supra.guests + Number(b.dataset.d)));
    drawTable();
  });
  $('#supraClear').addEventListener('click', () => { supra.qty = {}; drawItems(); drawTable(); });
  $('#supraPreset').addEventListener('click', () => {
    const g = supra.guests, c = n => Math.max(1, Math.ceil(n));
    supra.qty = {
      adj: c(g / 4), meg: c(g / 4),
      hvs: c(g / 2), hb: c(g / 3), hs: c(g / 4),
      shp: c(g), lvs: c(g / 2), sauce: c(g / 3),
      veg: c(g / 5), cheese: c(g / 6),
      muk: c(g / 4), lbat: c(g / 4),
    };
    drawItems(); drawTable();
  });
  drawItems(); drawTable();
}

/* ---------- Бронь через WhatsApp ---------- */
function initBooking() {
  const f = $('#bookForm'), err = $('#formErr');
  const d = new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);
  const iso = x => `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
  f.date.min = iso(d); f.date.value = iso(d);
  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!f.name.value.trim() || f.phone.value.replace(/\D/g, '').length < 10) {
      err.textContent = 'Укажите имя и телефон, чтобы мы могли подтвердить бронь.'; return;
    }
    err.textContent = '';
    const [y, m, day] = f.date.value.split('-');
    let text = `Здравствуйте! Хочу забронировать стол в One Гоги.\n` +
      `Имя: ${f.name.value.trim()}\nТелефон: ${f.phone.value.trim()}\n` +
      `Дата: ${day}.${m}.${y}, ${f.time.value}\nГостей: ${f.guests.value}`;
    if (f.comment.value.trim()) text += `\nПожелания: ${f.comment.value.trim()}`;
    const lines = supraLines();
    if (lines.length && !$('#attachWrap').hidden && f.attach.checked) {
      text += `\n\nХотим застолье:\n` + lines.map(l => `• ${l.name} (${l.unit}) × ${l.q}`).join('\n') +
        `\nОриентировочно: ${rub(supraTotal())}`;
    }
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
  $('#supraBook').addEventListener('click', () => { setTimeout(() => f.name.focus({ preventScroll: true }), 600); });
}

/* ---------- Шапка и бургер ---------- */
function initHeader() {
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-solid', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('#burger'), nav = $('#nav');
  const set = open => {
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };
  burger.addEventListener('click', () => set(burger.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
}

/* ---------- Лайтбокс ---------- */
function initLightbox() {
  const lb = $('#lightbox'), img = $('img', lb), cap = $('.lightbox__cap', lb);
  const pics = $$('#gallery img, .intro__pic img, .events__pic img');
  let i = 0;
  const show = n => {
    i = (n + pics.length) % pics.length;
    img.src = pics[i].src; img.alt = pics[i].alt; cap.textContent = pics[i].alt;
  };
  pics.forEach((p, n) => { p.tabIndex = 0; p.addEventListener('click', () => { show(n); lb.hidden = false; $('.lightbox__close', lb).focus(); });
    p.addEventListener('keydown', e => { if (e.key === 'Enter') { show(n); lb.hidden = false; } }); });
  lb.addEventListener('click', e => {
    if (e.target.closest('.lightbox__prev')) show(i - 1);
    else if (e.target.closest('.lightbox__next')) show(i + 1);
    else if (e.target !== img) lb.hidden = true;
  });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lb.hidden = true;
    if (e.key === 'ArrowRight') show(i + 1);
    if (e.key === 'ArrowLeft') show(i - 1);
  });
}

/* ---------- Появление при скролле ---------- */
function initReveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = $$('.intro__grid > *, .supra__head, .supra__grid > *, .menu__head, .menu__body, .wine__grid > *, .hall__head, .g, .events__grid > *, .reviews blockquote, .book__grid > *, .contacts__grid > *');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
}

renderHours();
renderMenu();
renderWine();
initSupra();
initBooking();
initHeader();
initLightbox();
initReveal();
