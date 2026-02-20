import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { BookOpen, Wallet, Brain, TrendingUp, Users, ChevronDown, ChevronUp } from 'lucide-react';
import * as D from './data';

// ───── helpers ─────
const COLORS = ['#1e40af','#dc2626','#f59e0b','#059669','#7c3aed','#db2777','#0891b2','#64748b','#ea580c','#4f46e5','#16a34a','#9333ea'];
const fmt = v => `${v}%`;
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="font-semibold text-slate-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.fill }}>
          {p.name}: <span className="font-bold">{p.value}%</span>
        </p>
      ))}
    </div>
  );
};

// ───── reusable components ─────
function StatCard({ value, label, accent = 'blue' }) {
  const map = { blue: 'border-blue-500 text-blue-700', red: 'border-red-500 text-red-600', green: 'border-emerald-500 text-emerald-700', amber: 'border-amber-500 text-amber-600' };
  return (
    <div className={`bg-white rounded-xl border-t-4 ${map[accent]} p-5 shadow-sm`}>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-slate-500 text-sm mt-1 leading-tight">{label}</div>
    </div>
  );
}

function ChartCard({ title, children, note }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-100">
      <h3 className="text-base font-semibold text-slate-800 mb-3">{title}</h3>
      <div className="w-full" style={{ minHeight: 280 }}>{children}</div>
      {note && <p className="text-xs text-slate-400 mt-2">{note}</p>}
    </div>
  );
}

function HBar({ data, color = '#1e40af', height }) {
  const h = height || Math.max(280, data.length * 42);
  return (
    <ResponsiveContainer width="100%" height={h}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 'auto']} tickFormatter={fmt} tick={{ fontSize: 12 }} />
        <YAxis type="category" dataKey="name" width={180} tick={{ fontSize: 11 }} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} barSize={20} name="Odsetek" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function DonutChart({ data, height = 280 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={95} paddingAngle={2} label={({ name, value }) => `${value}%`} labelLine={false}>
          {data.map((d, i) => <Cell key={i} fill={d.color || COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip formatter={v => `${v}%`} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ───── section components ─────
function NavTabs({ active, onChange }) {
  const tabs = [
    { id: 'edukacja', label: 'Edukacja', icon: BookOpen },
    { id: 'finanse', label: 'Zarządzanie finansami', icon: Wallet },
    { id: 'wiedza', label: 'Wiedza finansowa', icon: Brain },
    { id: 'kredyty', label: 'Kredyty i scoring', icon: TrendingUp },
    { id: 'ai', label: 'AI i technologia', icon: Users },
  ];
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map(t => {
        const Icon = t.icon;
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'bg-blue-700 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
            <Icon size={16} />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function SectionEdukacja() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="80,9%" label="Polaków odczuwa bariery finansowe" accent="red" />
        <StatCard value="91,8%" label="rodziców rezygnuje z potrzeb dla edukacji dzieci" accent="red" />
        <StatCard value="83,4%" label="deklaruje aktywne działanie mimo ograniczeń" accent="green" />
        <StatCard value="46,8%" label="wydaje 201–500 zł/mies. na edukację pozaszkolną" accent="blue" />
      </div>

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Czy pieniądze ograniczają plany życiowe?" note="N=1200">
          <DonutChart data={D.ograniczeniaFinansowe} />
        </ChartCard>
        <ChartCard title={'Zaradność: \u201eBiorę życie w swoje ręce\u201d?'} note="N=1200">
          <DonutChart data={D.sprawczosc} />
        </ChartCard>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Ograniczenia finansowe wg wieku" note="% odczuwających bariery">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={D.ograniczeniaWiek} margin={{ left: 0, right: 20, top: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grupa" tick={{ fontSize: 12 }} />
              <YAxis domain={[60, 100]} tickFormatter={fmt} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" name="% z barierami" radius={[4,4,0,0]} barSize={40}>
                {D.ograniczeniaWiek.map((_, i) => <Cell key={i} fill={['#dc2626','#f97316','#eab308','#22c55e'][i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Wydatki miesięczne na edukację pozaszkolną" note="N=440 (rodzice dzieci 7-18 lat)">
          <DonutChart data={D.wydatkiEdukacja.map((d, i) => ({ ...d, color: COLORS[i] }))} />
        </ChartCard>
      </div>

      {/* Row 3 */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Na jakie zajęcia dodatkowe wydają pieniądze?" note="N=440">
          <HBar data={D.zajeciaDodatkowe} color="#2563eb" />
        </ChartCard>
        <ChartCard title="Źródła finansowania edukacji" note="N=1200, wielokrotny wybór">
          <HBar data={D.zrodlaFinansowania} color="#0891b2" />
        </ChartCard>
      </div>

      {/* Row 4 */}
      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Czy rezygnujesz z potrzeb dla edukacji dzieci?" note="N=440">
          <DonutChart data={D.rezygnacjaPotrzeb.map((d, i) => ({ ...d, color: ['#dc2626','#f97316','#eab308','#22c55e'][i] }))} />
        </ChartCard>
        <ChartCard title="Z czego rodzice rezygnują najczęściej?" note="N=400, wielokrotny wybór">
          <HBar data={D.zCzegoRezygnuja} color="#dc2626" />
        </ChartCard>
      </div>

      {/* Collapsible */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
          <span className="font-semibold text-slate-800">Darmowe narzędzia edukacyjne (N=440)</span>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {open && (
          <div className="px-5 pb-5">
            <HBar data={D.darmoweNarzedziaEdu} color="#7c3aed" />
          </div>
        )}
      </div>
    </div>
  );
}

function SectionFinanse() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="72,3%" label="planuje budżet roczny (zawsze lub czasami)" accent="green" />
        <StatCard value="83,4%" label="planuje budżet miesięczny" accent="green" />
        <StatCard value="18,8%" label="bieżące wydatki pochłaniają 60%+ budżetu" accent="red" />
        <StatCard value="34,6%" label="nie ma żadnych zobowiązań kredytowych" accent="blue" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Plan roczny" note="N=1006">
          <DonutChart data={D.planRoczny} />
        </ChartCard>
        <ChartCard title="Plan miesięczny" note="N=1006">
          <DonutChart data={D.planMiesieczny} />
        </ChartCard>
      </div>

      <ChartCard title="Główne wydatki Polaków w 2026 roku" note="N=1006, wielokrotny wybór">
        <HBar data={D.glowneWydatki2026} color="#1e40af" height={460} />
      </ChartCard>

      <div className="grid md:grid-cols-3 gap-6">
        <ChartCard title="Bieżące wydatki (% budżetu)">
          <HBar data={D.strukturaBudzetu.biezace} color="#f59e0b" />
        </ChartCard>
        <ChartCard title="Spłata zobowiązań (% budżetu)">
          <HBar data={D.strukturaBudzetu.zobowiazania} color="#dc2626" />
        </ChartCard>
        <ChartCard title="Oszczędności (% budżetu)">
          <HBar data={D.strukturaBudzetu.oszczednosci} color="#059669" />
        </ChartCard>
      </div>

      <ChartCard title="Z kim Polacy konsultują decyzje finansowe?" note="N=1006, wielokrotny wybór">
        <HBar data={D.konsultacjeFinansowe} color="#6366f1" />
      </ChartCard>
    </div>
  );
}

function SectionWiedza() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="80,2%" label="nie czuje się kompetentnych finansowo" accent="red" />
        <StatCard value="44,8%" label="nie zna zasady 50/30/20" accent="amber" />
        <StatCard value="16,3%" label="stosuje zasadę 50/30/20" accent="green" />
        <StatCard value="66,4%" label="planuje budżet w zeszycie" accent="amber" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Samoocena wiedzy finansowej" note="N=1006">
          <DonutChart data={D.wiedzaFinansowa} />
        </ChartCard>
        <ChartCard title="Znajomość zasady 50/30/20" note="N=1006">
          <DonutChart data={D.zasada503020} />
        </ChartCard>
      </div>

      <ChartCard title="Narzędzia planowania budżetu domowego" note="N=1006">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={D.narzedziaBudzetu} margin={{ left: 10, right: 30, top: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={fmt} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="% respondentów" radius={[4,4,0,0]} barSize={50}>
              {D.narzedziaBudzetu.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function SectionKredyty() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="50,2%" label="dokładnie wie, czym jest zdolność kredytowa" accent="green" />
        <StatCard value="35,2%" label="nie wie, czym jest scoring kredytowy" accent="red" />
        <StatCard value="27,2%" label="kiedykolwiek konsolidowało kredyty" accent="blue" />
        <StatCard value="20,3%" label="nie wie, czym jest konsolidacja" accent="amber" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Wiedza o zdolności kredytowej" note="N=1006">
          <DonutChart data={D.zdolnoscKredytowa} />
        </ChartCard>
        <ChartCard title="Wiedza o scoringu kredytowym" note="N=1006">
          <DonutChart data={D.scoringWiedza} />
        </ChartCard>
      </div>

      <ChartCard title="Co wpływa na zdolność kredytową? (wg respondentów)" note="N=1006, wielokrotny wybór">
        <HBar data={D.czynnikZdolnosci} color="#4f46e5" />
      </ChartCard>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Wiedza o konsolidacji kredytów" note="N=1006">
          <DonutChart data={D.konsolidacjaWiedza} />
        </ChartCard>
        <ChartCard title="Co skłania do konsolidacji?" note="Wśród osób, które konsolidowały">
          <HBar data={D.konsolidacjaMotywacje} color="#0d9488" />
        </ChartCard>
      </div>
    </div>
  );
}

function SectionAI() {
  const aiComparison = [
    { name: 'Często', dzieci: 14.5, dorosliEdu: 15.8, dorosliFinanse: 4.6 },
    { name: 'Czasami', dzieci: 44.8, dorosliEdu: 39.6, dorosliFinanse: 18.0 },
    { name: 'Nie, ale zamierza', dzieci: 20.0, dorosliEdu: 18.6, dorosliFinanse: null },
    { name: 'Nie i nie planuje', dzieci: 13.2, dorosliEdu: 26.1, dorosliFinanse: 35.3 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="59,3%" label="dzieci korzysta z AI w nauce" accent="green" />
        <StatCard value="55,3%" label="dorosłych korzysta z AI w edukacji" accent="blue" />
        <StatCard value="4,6%" label="regularnie używa AI do planowania budżetu" accent="red" />
        <StatCard value="60,6%" label="wie, że AI może pomóc w planowaniu finansów" accent="amber" />
      </div>

      <ChartCard title="Korzystanie z AI: dzieci vs. dorośli (edukacja) vs. dorośli (finanse)" note="Porównanie trzech grup">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={aiComparison} margin={{ left: 10, right: 20, top: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={fmt} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="dzieci" name="Dzieci (edukacja)" fill="#3b82f6" radius={[4,4,0,0]} barSize={22} />
            <Bar dataKey="dorosliEdu" name="Dorośli (edukacja)" fill="#f59e0b" radius={[4,4,0,0]} barSize={22} />
            <Bar dataKey="dorosliFinanse" name="Dorośli (finanse)" fill="#dc2626" radius={[4,4,0,0]} barSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="AI w planowaniu budżetu domowego" note="N=1006">
          <DonutChart data={D.aiFinanse} />
        </ChartCard>
        <ChartCard title="Darmowe narzędzia edukacyjne (w tym AI)" note="N=440">
          <HBar data={D.darmoweNarzedziaEdu} color="#7c3aed" />
        </ChartCard>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-2">Kluczowy wniosek</h3>
        <p className="text-blue-700 text-sm leading-relaxed">
          Istnieje wyraźna <strong>przepaść adopcji AI</strong> między edukacją (59,3% dzieci, 55,3% dorosłych) a finansami (22,6% łącznie).
          Mimo że 60,6% Polaków wie o możliwościach AI w planowaniu finansów, dominują tradycyjne narzędzia (66,4% – zeszyt i długopis).
          Paradoksalnie, 8,4% konsultuje decyzje finansowe z ChatGPT — więcej niż z doradcami finansowymi (8,0%).
        </p>
      </div>
    </div>
  );
}

// ───── main App ─────
export default function App() {
  const [tab, setTab] = useState('edukacja');

  const sections = {
    edukacja: SectionEdukacja,
    finanse: SectionFinanse,
    wiedza: SectionWiedza,
    kredyty: SectionKredyty,
    ai: SectionAI,
  };
  const ActiveSection = sections[tab];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-2.5 rounded-lg mt-0.5">
              <TrendingUp size={28} className="text-blue-300" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Polacy i Finanse</h1>
              <p className="text-blue-200 mt-1 text-sm sm:text-base">Dashboard interaktywny na podstawie badań „DA SIĘ! Polacy w akcji” — Smartney Grupa Oney / SW Research</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-xs text-blue-300/80">
            <span>Raport 1: Edukacja · N=1200 · VIII 2025</span>
            <span>Raport 2: Finanse · N=1006 · XII 2025</span>
            <span>Metodologia: CAWI</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <NavTabs active={tab} onChange={setTab} />
        <ActiveSection />
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs text-slate-400">
          Dane: SW Research na zlecenie Smartney Grupa Oney · Cykl „DA SIĘ! Polacy w akcji” · 2025/2026
        </div>
      </footer>
    </div>
  );
}
