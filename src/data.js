// =====================================================
// RAPORT 1: Edukacja (N=1200, VIII 2025, SW Research)
// RAPORT 2: Finanse  (N=1006, XII 2025, SW Research)
// Zleceniodawca: Smartney Grupa Oney
// =====================================================

export const meta = {
  edukacja: { n: 1200, date: 'sierpień 2025', nRodzice: 440 },
  finanse:  { n: 1006, date: 'grudzień 2025' },
};

// -- Edukacja --

export const ograniczeniaFinansowe = [
  { name: 'Tak, bardzo',         value: 31.6, color: '#dc2626' },
  { name: 'Tak, w pewnym stopniu', value: 49.3, color: '#f97316' },
  { name: 'Poradzę sobie mimo ograniczeń', value: 12.7, color: '#3b82f6' },
  { name: 'Brak ograniczeń',     value: 6.4,  color: '#22c55e' },
];

export const ograniczeniaWiek = [
  { grupa: 'do 24 lat', value: 89.6 },
  { grupa: '25–34 lata', value: 86.8 },
  { grupa: '35–49 lat', value: 82.5 },
  { grupa: '50+ lat',   value: 75.4 },
];

export const sprawczosc = [
  { name: 'Biorę życie w swoje ręce', value: 43.1, color: '#22c55e' },
  { name: 'Staram się, ale ograniczenia', value: 40.3, color: '#eab308' },
  { name: 'Raczej czekam',      value: 9.0,  color: '#f97316' },
  { name: 'Trudno powiedzieć',  value: 7.7,  color: '#94a3b8' },
];

export const wydatkiEdukacja = [
  { name: 'Nie wydaję',       value: 6.6 },
  { name: 'Do 200 zł',        value: 13.6 },
  { name: '201–500 zł',       value: 46.8 },
  { name: '501–1000 zł',      value: 23.4 },
  { name: 'Powyżej 1000 zł',  value: 4.5 },
  { name: 'Nie wiem',          value: 5.0 },
];

export const zajeciaDodatkowe = [
  { name: 'Zajęcia sportowe',   value: 49.9 },
  { name: 'Języki obce',        value: 48.2 },
  { name: 'Talenty (artyst.)',   value: 41.4 },
  { name: 'Korepetycje',        value: 38.4 },
  { name: 'Psycholog/pedagog',  value: 10.9 },
];

export const zrodlaFinansowania = [
  { name: 'Oszczędzam wcześniej',     value: 54.5 },
  { name: 'Rezygnuję z wydatków',     value: 38.0 },
  { name: 'Odkładam na później',       value: 27.5 },
  { name: 'Pożyczki / kredyty',       value: 27.4 },
  { name: 'Dorabiam',                 value: 21.5 },
  { name: 'Bezpłatne zasoby',         value: 20.5 },
  { name: 'Programy wsparcia',        value: 8.2 },
];

export const rezygnacjaPotrzeb = [
  { name: 'Regularnie', value: 19.5 },
  { name: 'Czasami',    value: 48.4 },
  { name: 'Rzadko',     value: 23.9 },
  { name: 'Nigdy',      value: 8.2 },
];

export const zCzegoRezygnuja = [
  { name: 'Zakupy dla przyjemności',    value: 44.1 },
  { name: 'Jedzenie poza domem',        value: 41.6 },
  { name: 'Wydarzenia kulturalne',      value: 38.1 },
  { name: 'Hobby, pasje',               value: 30.9 },
  { name: 'Wakacje, urlopy',            value: 28.0 },
  { name: 'Własna edukacja',            value: 23.8 },
  { name: 'Żywność, odzież',            value: 14.6 },
  { name: 'Opieka medyczna',            value: 14.6 },
];

export const darmoweNarzedziaEdu = [
  { name: 'Darmowe aplikacje/platformy', value: 40.7 },
  { name: 'Biblioteki',                  value: 39.3 },
  { name: 'Rodzeństwo / dziadkowie',     value: 29.5 },
  { name: 'AI (ChatGPT itp.)',           value: 25.7 },
  { name: 'Koła zainteresowań',          value: 23.4 },
  { name: 'Kursy wideo, podcasty',       value: 22.5 },
  { name: 'Mentoring',                   value: 9.3 },
];

export const aiEdukacja = {
  dorosli: [
    { name: 'Często',        value: 15.8 },
    { name: 'Czasami',       value: 39.6 },
    { name: 'Nie, ale zamierzam', value: 18.6 },
    { name: 'Nie i nie planuję',  value: 26.1 },
  ],
  dzieci: [
    { name: 'Często',        value: 14.5 },
    { name: 'Czasami',       value: 44.8 },
    { name: 'Nie, ale zamierza',  value: 20.0 },
    { name: 'Nie i nie planuje',  value: 13.2 },
  ],
};

// -- Finanse --

export const planRoczny = [
  { name: 'Tak, zawsze',   value: 29.6, color: '#22c55e' },
  { name: 'Tak, czasami',  value: 42.7, color: '#3b82f6' },
  { name: 'Nie, nigdy',    value: 27.6, color: '#dc2626' },
];

export const planMiesieczny = [
  { name: 'Tak, zawsze',   value: 31.4, color: '#22c55e' },
  { name: 'Tak, czasami',  value: 52.0, color: '#3b82f6' },
  { name: 'Nie, nigdy',    value: 16.6, color: '#dc2626' },
];

export const glowneWydatki2026 = [
  { name: 'Stałe wydatki (czynsz, żywność)',  value: 51.5 },
  { name: 'Podróże',                          value: 34.3 },
  { name: 'Zdrowie',                          value: 30.5 },
  { name: 'Remont',                           value: 28.6 },
  { name: 'Rodzina',                          value: 27.0 },
  { name: 'Finanse (oszczędz., inwestycje)',   value: 25.6 },
  { name: 'Rozrywka',                         value: 18.4 },
  { name: 'Minimalizm / porządki',            value: 17.9 },
  { name: 'RTV / AGD',                        value: 16.4 },
  { name: 'Samochód',                         value: 15.5 },
  { name: 'Dzieci i kształcenie',             value: 15.4 },
  { name: 'Edukacja',                         value: 10.5 },
];

export const strukturaBudzetu = {
  biezace: [
    { name: '20–39%', value: 40.5 },
    { name: '40–59%', value: 32.0 },
    { name: '60–79%', value: 16.5 },
    { name: '80–100%', value: 2.3 },
  ],
  zobowiazania: [
    { name: '0% (brak)', value: 34.6 },
    { name: '1–19%',     value: 34.6 },
    { name: '20–39%',    value: 14.9 },
    { name: '40–59%',    value: 4.1 },
    { name: '60%+',      value: 0.7 },
  ],
  oszczednosci: [
    { name: '0%',      value: 9.8 },
    { name: '1–19%',   value: 48.7 },
    { name: '20–39%',  value: 34.8 },
    { name: '40%+',    value: 6.7 },
  ],
};

export const wiedzaFinansowa = [
  { name: 'Duża wiedza',          value: 19.8, color: '#22c55e' },
  { name: 'Sporo słyszałem',      value: 42.4, color: '#3b82f6' },
  { name: 'Poruszam się ostrożnie', value: 30.2, color: '#f97316' },
  { name: 'Mała / brak wiedzy',   value: 7.6,  color: '#dc2626' },
];

export const zasada503020 = [
  { name: 'Nie znam',            value: 44.8, color: '#dc2626' },
  { name: 'Znam, nie stosuję',   value: 38.9, color: '#f97316' },
  { name: 'Stosuję',             value: 16.3, color: '#22c55e' },
];

export const konsultacjeFinansowe = [
  { name: 'Małżonek / partner',   value: 47.1 },
  { name: 'Sam/sama',             value: 27.2 },
  { name: 'Rodzice',              value: 13.4 },
  { name: 'Internet (YT, podcasty)', value: 11.4 },
  { name: 'Znajomi',              value: 11.2 },
  { name: 'Dzieci',               value: 10.6 },
  { name: 'ChatGPT',              value: 8.4 },
  { name: 'Doradcy finansowi',    value: 8.0 },
];

export const narzedziaBudzetu = [
  { name: 'Zeszyt i długopis',  value: 66.4 },
  { name: 'Excel / planery',    value: 27.2 },
  { name: 'Aplikacje budżetowe', value: 16.4 },
  { name: 'ChatGPT',            value: 13.6 },
];

export const aiFinanse = [
  { name: 'Regularnie',              value: 4.6,  color: '#22c55e' },
  { name: 'Sporadycznie',            value: 18.0, color: '#3b82f6' },
  { name: 'AI do innych celów',      value: 42.1, color: '#f97316' },
  { name: 'Nie korzystam z AI',      value: 35.3, color: '#dc2626' },
];

export const zdolnoscKredytowa = [
  { name: 'Wiem dokładnie',    value: 50.2, color: '#22c55e' },
  { name: 'W przybliżeniu',    value: 44.8, color: '#3b82f6' },
  { name: 'Nie wiem',          value: 5.0,  color: '#dc2626' },
];

export const czynnikZdolnosci = [
  { name: 'Wysokość dochodów',    value: 79.0 },
  { name: 'Historia spłat',       value: 68.4 },
  { name: 'Forma zatrudnienia',   value: 60.6 },
  { name: 'Liczba zobowiązań',    value: 60.5 },
  { name: 'Wiek',                 value: 54.9 },
  { name: 'Koszty utrzymania',    value: 48.4 },
  { name: 'Obroty na koncie',     value: 37.9 },
  { name: 'Sytuacja życiowa',     value: 34.9 },
];

export const scoringWiedza = [
  { name: 'Wiem dokładnie',   value: 23.4, color: '#22c55e' },
  { name: 'W przybliżeniu',   value: 41.4, color: '#3b82f6' },
  { name: 'Nie wiem',         value: 35.2, color: '#dc2626' },
];

export const konsolidacjaWiedza = [
  { name: 'Wiem i korzystałem / planuję', value: 21.7, color: '#22c55e' },
  { name: 'Wiem, ale nie korzystam',      value: 58.0, color: '#3b82f6' },
  { name: 'Nie wiem co to',               value: 20.3, color: '#dc2626' },
];

export const konsolidacjaMotywacje = [
  { name: 'Jedna niższa rata',       value: 32.6 },
  { name: 'Jeden przelew',           value: 29.4 },
  { name: 'Lepsze oprocentowanie',   value: 26.1 },
  { name: 'Wydłużony okres spłaty',  value: 24.8 },
  { name: 'Uporządkowanie finansów', value: 24.8 },
  { name: 'Dodatkowa gotówka',       value: 22.9 },
  { name: 'Jeden termin płatności',  value: 21.6 },
];
