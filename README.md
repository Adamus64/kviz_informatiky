# 💻 Kvíz Informatiky

Interaktivní webový kvíz zaměřený na prověření znalostí ze světa informačních technologií – od hardwaru a sítí přes kyberbezpečnost až po základy programování a historii výpočetní techniky.

Projekt vznikl pro procvičení moderních webových technologií (HTML5, CSS3, JavaScript ES6+).

---

## 🚀 Klíčové funkce

- **50 tematických otázek**: Otázky pokrývají hardware, software, počítačové sítě, bezpečnost (phishing, firewall), programovací koncepty i historii IT.
- **Interaktivní vyhodnocování v reálném čase**: Po každé odpovědi se ihned aktualizuje skóre správných (✅) a špatných (❌) odpovědí.
- **Ochrana proti ztrátě postupu**: Implementována bezpečnostní pojistka (`beforeunload`), která uživatele varuje, pokud by chtěl během rozpracovaného testu stránku omylem obnovit (F5) nebo zavřít.
- **Responzivní a čistý design**: Tmavý vizuální styl (Dark theme), sticky footer držící se na dně okna a flexibilní rozložení vhodné pro různé velikosti obrazovek.
- **Modulární architektura**: Otázky a odpovědi jsou oddělené do samostatného ES modulu (`otazky.js`), což usnadňuje jejich úpravu či doplňování bez zásahu do herní logiky.

---

## 🛠️ Použité technologie

- **HTML5** – sémantická struktura stránky
- **CSS3** – Flexbox, CSS proměnné, responzivita, dark mode estetika
- **JavaScript (ES6+)** – moduly (`import` / `export`), DOM manipulace, event listenery, událost `beforeunload`

---

## 📂 Struktura projektu

```text
├── index.html       # Hlavní stránka kvízu (úvodní menu, herní plocha, skóre)
├── about.html       # Stránka „O projektu“ a autorovi
├── script.js        # Herní logika kvízu, přepínání otázek, vyhodnocování odpovědí
├── otazky.js        # Databáze 50 otázek, možností a správných odpovědí (ES modul)
├── style.css        # Vzhled, stylování a rozložení prvků
└── img/             # Ikony a grafické podklady
```

---

## 💻 Jak projekt spustit lokálně

Jelikož projekt využívá moderní JavaScriptové moduly (`type="module"`), je potřeba jej spouštět přes lokální webový server (prohlížeče z bezpečnostních důvodů blokují importy přes protokol `file://`):

### Možnost 1: VS Code / Antigravity (Live Server)
1. Otevřete složku s projektem v editoru.
2. Nainstalujte si rozšíření **Live Server**.
3. Klikněte pravým tlačítkem na `index.html` a zvolte **Open with Live Server** (nebo klikněte na „Go Live“ v pravém dolním rohu).

### Možnost 2: Přes terminál
Pokud máte nainstalovaný Node.js nebo Python:
```bash
# Pomocí npx
npx serve .

# Nebo pomocí Pythonu
python -m http.server 8000
```
Poté otevřete v prohlížeči adresu `http://localhost:8000` (nebo port vypsaný v terminálu).

---

## 👤 O autorovi

- **Jméno:** Adam „Adamus“ Fiala
- **Studium:** Univerzita Palackého v Olomouci (Bakalářský obor Informační technologie)
- **Zaměření:** Tvorba moderních webových aplikací a IT

---

## 📜 Poděkování a licence

- Ikony vytvořeny autorem [Magnific - Flaticon](https://www.flaticon.com/free-icons/computer).
