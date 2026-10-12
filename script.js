(() => {
'use strict';
/* ===== CONFIG: change the brand here (or in Settings) ===== */
const BRAND = 'Construction Hub', KEY = 'construction_hub_demo_v1';

/* ===== Translations: key|Indonesia|English ===== */
const RAW = `
dashboard|Dasbor|Dashboard
projects|Proyek|Projects
drawings|Gambar Kerja|Drawings
progress|Progres Lapangan|Site Progress
defects|Laporan Kerusakan|Defect Reports
building|Informasi Bangunan|Building Information
reports|Laporan|Reports
settings|Pengaturan|Settings
allProj|Semua proyek|All projects
search|Cari|Search
all|Semua|All
empty|Tidak ada data yang cocok.|No matching data.
close|Tutup|Close
detail|Detail|Details
status|Status|Status
req|Wajib diisi|Required
saved|Laporan berhasil disimpan (demo, hanya di browser ini).|Report saved (demo, this browser only).
uploadProg|Unggah Progres|Upload Progress
reportDef|Laporkan Kerusakan|Report Defect
activeProj|Proyek aktif|Active projects
overall|Progres keseluruhan|Overall progress
openDef|Kerusakan terbuka|Open defects
critDef|Kerusakan kritis|Critical defects
pendInsp|Inspeksi tertunda|Pending inspections
planVsAct|Progres rencana vs aktual|Planned vs actual progress
planned|Rencana|Planned
actual|Aktual|Actual
wkA|M|W
recentRep|Laporan progres terbaru|Recent progress reports
openSum|Ringkasan kerusakan terbuka|Open defect summary
recentAct|Aktivitas lapangan terbaru|Recent site activity
code|Kode|Code
name|Nama proyek|Project name
location|Lokasi|Location
contractor|Kontraktor|Contractor
floors|Lantai|Floors
prog|Progres|Progress
active|Aktif|Active
done|Selesai|Completed
owner|Pemilik|Owner
area|Luas|Area
year|Tahun|Year
project|Proyek|Project
floor|Lantai|Floor
zone|Zona|Zone
disc|Disiplin|Discipline
number|No. gambar|Drawing no.
rev|Revisi|Revision
issued|Tanggal terbit|Issue date
current|Berlaku|Current
archived|Arsip|Archived
arch|Arsitektur|Architecture
struct|Struktur|Structure
mep|MEP|MEP
revHist|Riwayat revisi|Revision history
viewer|Penampil gambar|Drawing viewer
pickFile|Pilih berkas PDF atau gambar|Choose a PDF or image file
localNote|Berkas hanya pratinjau lokal sementara di perangkat ini. Tidak diunggah ke server dan tidak dibagikan ke pengguna lain.|Files are temporary local previews on this device only. They are not uploaded to a server or shared with other users.
unsupported|Format ini (DWG/RVT/IFC/lainnya) tidak dapat ditampilkan langsung di browser. Ekspor ke PDF atau gambar terlebih dahulu.|This format (DWG/RVT/IFC/other) cannot be displayed natively in a browser. Please export to PDF or an image first.
noFile|Belum ada berkas dipilih.|No file selected.
zoomIn|Perbesar|Zoom in
zoomOut|Perkecil|Zoom out
pdfNote|Gunakan toolbar PDF browser untuk zoom.|Use the browser PDF toolbar to zoom.
openTab|Buka di tab baru|Open in new tab
date|Tanggal|Date
workCat|Kategori pekerjaan|Work category
desc|Deskripsi|Description
qty|Volume selesai|Completed quantity
unit|Satuan|Unit
pct|Progres (%)|Progress (%)
workers|Tenaga kerja (orang)|Workforce (people)
equip|Peralatan|Equipment
weather|Cuaca|Weather
obst|Kendala|Obstacles
next|Kegiatan berikutnya|Next activity
photos|Foto (opsional)|Photos (optional)
repType|Jenis laporan|Report type
daily|Harian|Daily
weekly|Mingguan|Weekly
submit|Simpan laporan|Save report
wc_str|Struktur|Structure
wc_arc|Arsitektur|Architecture
wc_mep|MEP|MEP
wc_fin|Finishing|Finishing
wc_site|Pekerjaan tapak|Site works
sunny|Cerah|Sunny
cloudy|Berawan|Cloudy
rain|Hujan|Rain
newRep|Laporan progres baru|New progress report
repList|Daftar laporan|Report list
photoNote|Pratinjau foto bersifat lokal; foto tidak diunggah ke server.|Photo previews are local; photos are not uploaded to a server.
defId|ID kerusakan|Defect ID
category|Kategori|Category
severity|Tingkat keparahan|Severity
discDate|Tanggal ditemukan|Discovery date
resp|Pihak bertanggung jawab|Responsible party
due|Tenggat|Due date
low|Rendah|Low
medium|Sedang|Medium
high|Tinggi|High
critical|Kritis|Critical
c_crack|Retak|Cracks
c_leak|Kebocoran|Leaks
c_concrete|Kerusakan beton|Concrete damage
c_corr|Korosi|Corrosion
c_fin|Cacat finishing|Finishing defects
c_door|Pintu/jendela|Doors/windows
c_elec|Listrik|Electrical
c_plumb|Plumbing|Plumbing
c_other|Lainnya|Other
s_reported|Dilaporkan|Reported
s_review|Ditinjau|Under Review
s_assigned|Ditugaskan|Assigned
s_repair|Dalam perbaikan|In Repair
s_verify|Menunggu verifikasi|Awaiting Verification
s_resolved|Selesai ditangani|Resolved
sevNote|Tingkat keparahan adalah klasifikasi inspeksi awal, bukan sertifikasi keselamatan struktur.|Severity is a preliminary inspection classification, not a structural safety certification.
newDef|Laporan kerusakan baru|New defect report
workflow|Alur kerja|Workflow
editSt|Ubah status (demo)|Edit status (demo)
before|Foto sebelum|Before photo
after|Foto sesudah|After photo
dupId|ID kerusakan sudah dipakai.|Defect ID already in use.
t_gen|Umum|General
t_arch|Spesifikasi arsitektur|Architecture specs
t_mep|Sistem MEP|MEP systems
t_mat|Material|Materials
t_war|Garansi & dokumen|Warranties & documents
t_maint|Riwayat pemeliharaan|Maintenance history
address|Alamat|Address
func|Fungsi|Function
sys|Sistem struktur|Structural system
demoInfo|Data bangunan contoh; ganti dengan data proyek Anda.|Sample building data; replace with your project data.
item|Pekerjaan|Item
by|Oleh|By
sumProg|Ringkasan progres|Progress summary
sumDef|Ringkasan kerusakan|Defect summary
maintHist|Riwayat pemeliharaan|Maintenance history
exportProg|Ekspor CSV progres|Export progress CSV
exportDef|Ekspor CSV kerusakan|Export defects CSV
exportMaint|Ekspor CSV pemeliharaan|Export maintenance CSV
dateFrom|Dari tanggal|From date
rows|baris|rows
exported|CSV diekspor sesuai filter.|CSV exported using current filters.
brandName|Nama merek|Brand name
saveBrand|Simpan nama merek|Save brand name
clearData|Hapus data demo browser ini|Clear demo data in this browser
storeWarn|Data demo disimpan hanya di browser ini (localStorage). Tidak ada server, dan data tidak dibagikan.|Demo data is stored in this browser only (localStorage). There is no server and data is not shared.
cleared|Data demo dihapus.|Demo data cleared.
total|Total|Total
`;
const T = { id: {}, en: {} };
RAW.trim().split('\n').forEach(l => { const [k, a, b] = l.split('|'); T.id[k] = a; T.en[k] = b; });

/* ===== Helpers ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let L = 'id', brand = BRAND, proj = 'all', page = 'dashboard', F = {}, sel = {}, tab = 'gen', zoom = 1, vw = null, urls = [];
const t = k => (T[L] && T[L][k]) || k;
const today = () => new Date().toISOString().slice(0, 10);

/* ===== Demo data ===== */
const E = {
  projects: [
    { id: 'p1', code: 'PRJ-001', name: 'Menara Arunika', loc: 'Semarang', con: 'PT Karya Bangun Persada', fl: 12, pr: 64, st: 'active', own: 'PT Arunika Properti', ar: '18.400 m²', yr: 2027, fn: 'Perkantoran' },
    { id: 'p2', code: 'PRJ-002', name: 'Gudang Logistik Kendal', loc: 'Kendal', con: 'PT Mitra Konstruksi Jaya', fl: 2, pr: 82, st: 'active', own: 'PT Nusa Logistik', ar: '9.600 m²', yr: 2026, fn: 'Pergudangan' },
    { id: 'p3', code: 'PRJ-003', name: 'Rusun Pandanaran', loc: 'Semarang', con: 'PT Graha Nusa', fl: 8, pr: 35, st: 'active', own: 'Pemerintah Daerah', ar: '12.300 m²', yr: 2027, fn: 'Hunian' },
    { id: 'p4', code: 'PRJ-004', name: 'Ruko Simpang Lima', loc: 'Semarang', con: 'CV Cipta Mandiri', fl: 3, pr: 100, st: 'done', own: 'CV Lima Sejahtera', ar: '1.500 m²', yr: 2025, fn: 'Komersial' }
  ],
  drawings: [
    { no: 'ARS-101', pid: 'p1', fl: '1', d: 'arch', rev: 'C', date: '2026-08-14', cur: 1, h: ['A|2026-03-02', 'B|2026-05-20', 'C|2026-08-14'] },
    { no: 'STR-201', pid: 'p1', fl: '2', d: 'struct', rev: 'B', date: '2026-06-10', cur: 1, h: ['A|2026-02-11', 'B|2026-06-10'] },
    { no: 'STR-200', pid: 'p1', fl: '2', d: 'struct', rev: 'A', date: '2026-02-11', cur: 0, h: ['A|2026-02-11'] },
    { no: 'MEP-301', pid: 'p2', fl: '1', d: 'mep', rev: 'A', date: '2026-04-22', cur: 1, h: ['A|2026-04-22'] },
    { no: 'ARS-110', pid: 'p3', fl: '3', d: 'arch', rev: 'B', date: '2026-07-30', cur: 1, h: ['A|2026-05-05', 'B|2026-07-30'] },
    { no: 'MEP-320', pid: 'p3', fl: '1', d: 'mep', rev: 'A', date: '2026-09-02', cur: 1, h: ['A|2026-09-02'] }
  ],
  rep: [
    { id: 'PR-001', pid: 'p1', date: '2026-10-09', fl: '8', zone: 'A', cat: 'wc_str', desc: 'Pengecoran pelat lantai 8', qty: 120, unit: 'm3', pct: 64, wk: 48, eq: 'Concrete pump', wx: 'sunny', ob: '-', nx: 'Bekisting kolom lantai 9', type: 'daily', ph: 3 },
    { id: 'PR-002', pid: 'p2', date: '2026-10-08', fl: '1', zone: 'B', cat: 'wc_fin', desc: 'Pemasangan cat dinding gudang', qty: 850, unit: 'm2', pct: 82, wk: 22, eq: 'Scaffolding', wx: 'cloudy', ob: 'Pasokan cat terlambat', nx: 'Epoxy lantai', type: 'daily', ph: 2 },
    { id: 'PR-003', pid: 'p3', date: '2026-10-05', fl: '3', zone: 'C', cat: 'wc_arc', desc: 'Pasangan bata minggu ke-5', qty: 640, unit: 'm2', pct: 35, wk: 36, eq: 'Hoist', wx: 'rain', ob: 'Hujan 2 hari', nx: 'Plesteran lantai 3', type: 'weekly', ph: 4 },
    { id: 'PR-004', pid: 'p1', date: '2026-10-02', fl: '7', zone: 'B', cat: 'wc_mep', desc: 'Instalasi pipa air bersih', qty: 300, unit: 'm', pct: 62, wk: 18, eq: 'Alat bor', wx: 'sunny', ob: '-', nx: 'Uji tekanan pipa', type: 'weekly', ph: 1 }
  ],
  def: [
    { id: 'DF-001', pid: 'p1', fl: '3', zone: 'A', loc: 'Dinding koridor', cat: 'c_crack', desc: 'Retak rambut memanjang pada dinding bata', sev: 'medium', date: '2026-10-01', resp: 'PT Karya Bangun Persada', due: '2026-10-20', st: 'review' },
    { id: 'DF-002', pid: 'p1', fl: '5', zone: 'B', loc: 'Balkon timur', cat: 'c_leak', desc: 'Rembesan air pada sambungan pelat balkon', sev: 'high', date: '2026-10-03', resp: 'PT Karya Bangun Persada', due: '2026-10-18', st: 'repair' },
    { id: 'DF-003', pid: 'p3', fl: '2', zone: 'C', loc: 'Kolom K12', cat: 'c_concrete', desc: 'Keropos beton dan tulangan terlihat', sev: 'critical', date: '2026-10-06', resp: 'PT Graha Nusa', due: '2026-10-15', st: 'assigned' },
    { id: 'DF-004', pid: 'p2', fl: '1', zone: 'A', loc: 'Pintu roller gudang', cat: 'c_door', desc: 'Pintu roller sulit bergerak', sev: 'low', date: '2026-09-28', resp: 'PT Mitra Konstruksi Jaya', due: '2026-10-12', st: 'verify' },
    { id: 'DF-005', pid: 'p3', fl: '1', zone: 'A', loc: 'Panel listrik lobi', cat: 'c_elec', desc: 'Label panel tidak sesuai gambar', sev: 'low', date: '2026-09-20', resp: 'PT Graha Nusa', due: '2026-09-30', st: 'resolved' }
  ],
  maint: [
    { pid: 'p4', date: '2026-09-15', item: 'Servis AC split lantai 1-3', by: 'CV Dingin Servis' },
    { pid: 'p4', date: '2026-07-02', item: 'Pengecatan ulang fasad', by: 'CV Cipta Mandiri' },
    { pid: 'p2', date: '2026-08-21', item: 'Pemeriksaan sistem hidran', by: 'PT Safe Fire' }
  ]
};
const WF = ['reported', 'review', 'assigned', 'repair', 'verify', 'resolved'];
const SEV = ['low', 'medium', 'high', 'critical'];
const CATS = ['c_crack', 'c_leak', 'c_concrete', 'c_corr', 'c_fin', 'c_door', 'c_elec', 'c_plumb', 'c_other'];
const WC = ['wc_str', 'wc_arc', 'wc_mep', 'wc_fin', 'wc_site'];

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (!d) return;
    if (d.L === 'id' || d.L === 'en') L = d.L;
    if (d.brand) brand = d.brand;
    if (Array.isArray(d.rep)) E.rep = d.rep;
    if (Array.isArray(d.def)) E.def = d.def;
  } catch (e) { /* storage unavailable */ }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ L, brand, rep: E.rep, def: E.def })); } catch (e) { /* ignore */ }
}

/* ===== Data selectors (respect project selector) ===== */
const byP = a => proj === 'all' ? a : a.filter(x => x.pid === proj);
const PS = () => proj === 'all' ? E.projects : E.projects.filter(p => p.id === proj);
const pn = id => (E.projects.find(p => p.id === id) || {}).name || '-';
const bd = (k, cls = '') => `<span class="bdg ${cls}">${esc(t(k))}</span>`;
const stCls = s => s === 'resolved' || s === 'done' ? 'ok' : '';
const opts = (arr, cur, lab = t) => arr.map(v => `<option value="${v}"${v === cur ? ' selected' : ''}>${esc(lab(v))}</option>`).join('');
const popts = () => E.projects.map(p => `<option value="${p.id}"${p.id === proj ? ' selected' : ''}>${esc(p.name)}</option>`).join('');
const tw = (heads, rows) => `<div class="tw"><table><thead><tr>${heads.map(h => `<th scope="col">${esc(t(h))}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
const none = () => `<p class="empty">${t('empty')}</p>`;

function fld(n, k, type = 'text', x = {}) {
  const id = 'f_' + n, r = x.req ? ' required' : '';
  let c;
  if (type === 'select') c = `<select id="${id}" name="${n}"${r}>${x.o}</select>`;
  else if (type === 'textarea') c = `<textarea id="${id}" name="${n}" rows="3"${r}></textarea>`;
  else c = `<input id="${id}" name="${n}" type="${type}"${r} ${x.a || ''} ${x.v != null ? `value="${esc(x.v)}"` : ''}>`;
  return `<div class="fg${x.w ? ' w' : ''}"><label for="${id}">${t(k)}${x.req ? ' *' : ''}</label>${c}</div>`;
}
const photoFld = (n, k) => `<div class="fg w"><label for="f_${n}">${t(k)}</label><input id="f_${n}" name="${n}" type="file" accept="image/*" multiple data-pv="pv_${n}"><div class="thumbs" id="pv_${n}"></div></div>`;
const flt = (sels = []) => `<div class="bar"><input type="search" data-f="q" value="${esc(F.q || '')}" placeholder="${t('search')}…" aria-label="${t('search')}">${sels.map(([n, k, o]) => `<select data-f="${n}" aria-label="${t(k)}"><option value="">${t(k)}: ${t('all')}</option>${o.map(v => `<option value="${v}"${F[n] === v ? ' selected' : ''}>${esc(t(v))}</option>`).join('')}</select>`).join('')}</div>`;
const incl = (o, q) => JSON.stringify(Object.values(o)).toLowerCase().includes((q || '').toLowerCase());

function val(f) {
  $$('[aria-invalid]', f).forEach(e => e.removeAttribute('aria-invalid'));
  const bad = $$('[required]', f).filter(e => !String(e.value).trim());
  bad.forEach(e => e.setAttribute('aria-invalid', 'true'));
  const m = $('.msg', f);
  if (bad.length) {
    m.className = 'msg err';
    m.textContent = t('req') + ': ' + bad.map(e => e.labels[0].textContent.replace(' *', '')).join(', ');
    bad[0].focus();
    return false;
  }
  m.className = 'msg'; m.textContent = '';
  return true;
}
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ===== Pages ===== */
const pages = {};
const lists = {};

/* Dashboard */
pages.dashboard = () => {
  const ps = PS(), act = ps.filter(p => p.st === 'active');
  const ov = act.length ? Math.round(act.reduce((a, p) => a + p.pr, 0) / act.length) : 0;
  const od = byP(E.def).filter(d => d.st !== 'resolved');
  const pl = [12, 25, 38, 50, 62, 74], ac = [10, 21, 33, 43, 53, ov];
  const m = (k, v, w) => `<div class="card metric${w ? ' warn' : ''}"><small>${t(k)}</small><b>${v}</b></div>`;
  const rp = byP(E.rep).sort((a, b) => b.date.localeCompare(a.date));
  return `<div class="grid g5">${m('activeProj', act.length)}${m('overall', ov + '%')}${m('openDef', od.length)}${m('critDef', od.filter(d => d.sev === 'critical').length, 1)}${m('pendInsp', od.filter(d => d.st === 'verify').length)}</div>
  <div class="grid g2" style="margin-top:16px">
  <section class="panel"><h2>${t('planVsAct')}</h2><div class="chart" role="img" aria-label="${t('planVsAct')}">${pl.map((v, i) => `<div class="bc"><div class="b p" style="height:${v}%" title="${t('planned')} ${v}%"></div><div class="b a" style="height:${ac[i]}%" title="${t('actual')} ${ac[i]}%"></div><small>${t('wkA')}${i + 1}</small></div>`).join('')}</div>
  <div class="lg"><span><i style="background:#9CA3AF"></i>${t('planned')}: ${pl[5]}%</span><span><i style="background:#FF7629"></i>${t('actual')}: ${ov}%</span></div></section>
  <section class="panel"><h2>${t('recentAct')}</h2>${rp.length ? `<ul class="li">${rp.slice(0, 4).map(r => `<li><b>${esc(r.desc)}</b><br><small>${esc(pn(r.pid))} · ${t('floor')} ${esc(r.fl)} · ${esc(r.date)}</small></li>`).join('')}</ul>` : none()}</section>
  <section class="panel"><h2>${t('recentRep')}</h2>${rp.length ? tw(['date', 'project', 'workCat', 'pct'], rp.slice(0, 4).map(r => `<tr><td>${esc(r.date)}</td><td>${esc(pn(r.pid))}</td><td>${t(r.cat)}</td><td>${r.pct}%</td></tr>`)) : none()}</section>
  <section class="panel"><h2>${t('openSum')}</h2>${od.length ? `<ul class="li">${od.map(d => `<li>${bd(d.sev, 'sv-' + d.sev)} <b>${esc(d.id)}</b> ${esc(d.loc)}<br><small>${esc(pn(d.pid))} · ${t('s_' + d.st)}</small></li>`).join('')}</ul>` : none()}</section></div>`;
};

/* Projects */
lists.projects = () => {
  const r = PS().filter(p => (!F.s || p.st === F.s) && incl([p.code, p.name, p.loc, p.con], F.q));
  return r.length ? `<div class="cards">${r.map(p => `<button type="button" class="card pc" data-pid="${p.id}"><small>${p.code}</small><h3>${esc(p.name)}</h3><p>${esc(p.loc)} · ${esc(p.con)}</p><p>${p.fl} ${t('floors')}</p><div class="pb" role="img" aria-label="${p.pr}%"><i style="width:${p.pr}%"></i></div><span>${p.pr}% ${bd(p.st, stCls(p.st))}</span></button>`).join('')}</div>` : none();
};
pages.projects = () => {
  const p = E.projects.find(x => x.id === sel.p);
  const dt = p ? `<section class="panel"><h2>${esc(p.name)} <button type="button" class="btn ghost" data-act="unsel">${t('close')}</button></h2><dl><dt>${t('code')}</dt><dd>${p.code}</dd><dt>${t('location')}</dt><dd>${esc(p.loc)}</dd><dt>${t('contractor')}</dt><dd>${esc(p.con)}</dd><dt>${t('floors')}</dt><dd>${p.fl}</dd><dt>${t('prog')}</dt><dd>${p.pr}%</dd><dt>${t('status')}</dt><dd>${t(p.st)}</dd><dt>${t('drawings')}</dt><dd>${E.drawings.filter(d => d.pid === p.id).length}</dd><dt>${t('progress')}</dt><dd>${E.rep.filter(d => d.pid === p.id).length}</dd><dt>${t('defects')}</dt><dd>${E.def.filter(d => d.pid === p.id).length}</dd></dl></section>` : '';
  return dt + flt([['s', 'status', ['active', 'done']]]) + `<div id="res">${lists.projects()}</div>`;
};

/* Drawings */
lists.drawings = () => {
  const r = byP(E.drawings).filter(d => (!F.s || (F.s === 'current') === !!d.cur) && (!F.d || d.d === F.d) && incl([d.no, d.d, t(d.d), pn(d.pid)], F.q));
  return r.length ? tw(['number', 'project', 'floor', 'disc', 'rev', 'issued', 'status'], r.map(d => `<tr><td><button type="button" class="lnk" data-dno="${d.no}">${d.no}</button></td><td>${esc(pn(d.pid))}</td><td>${d.fl}</td><td>${t(d.d)}</td><td>${d.rev}</td><td>${d.date}</td><td>${bd(d.cur ? 'current' : 'archived', d.cur ? 'ok' : '')}</td></tr>`)) : none();
};
const viewer = () => {
  if (!vw) return `<p class="empty">${t('noFile')}</p>`;
  if (vw.k === 'pdf') return `<iframe src="${vw.u}" title="${esc(vw.n)}"></iframe>`;
  if (vw.k === 'img') return `<img src="${vw.u}" alt="${esc(vw.n)}" style="transform:scale(${zoom})">`;
  return `<p class="empty">⚠ ${esc(vw.n)}<br>${t('unsupported')}</p>`;
};
pages.drawings = () => {
  const d = E.drawings.find(x => x.no === sel.d);
  const meta = d ? `<div class="panel"><h2>${d.no}</h2><dl><dt>${t('project')}</dt><dd>${esc(pn(d.pid))}</dd><dt>${t('floor')}</dt><dd>${d.fl}</dd><dt>${t('disc')}</dt><dd>${t(d.d)}</dd><dt>${t('rev')}</dt><dd>${d.rev}</dd><dt>${t('issued')}</dt><dd>${d.date}</dd></dl><h3 style="margin-top:12px">${t('revHist')}</h3><ul class="li">${d.h.map(h => { const [a, b] = h.split('|'); return `<li>${t('rev')} ${a} — ${b}</li>`; }).join('')}</ul></div>` : '';
  return `${flt([['s', 'status', ['current', 'archived']], ['d', 'disc', ['arch', 'struct', 'mep']]])}<div id="res">${lists.drawings()}</div>${meta}
  <section class="panel"><h2>${t('viewer')}</h2><div class="note">${t('localNote')}</div>
  <div class="bar"><input type="file" id="dfile" accept=".pdf,.png,.jpg,.jpeg,.webp,.gif,.dwg,.rvt,.ifc,application/pdf,image/*" aria-label="${t('pickFile')}">
  <button type="button" class="btn ghost" data-zoom="1.25">＋ ${t('zoomIn')}</button><button type="button" class="btn ghost" data-zoom="0.8">－ ${t('zoomOut')}</button><button type="button" class="btn ghost" data-zoom="0">100%</button></div>
  <p class="mut" id="vnote">${vw && vw.k === 'pdf' ? t('pdfNote') + ` <a href="${vw.u}" target="_blank" rel="noopener">${t('openTab')}</a>` : ''}</p>
  <div class="view" id="vbox">${viewer()}</div></section>`;
};

/* Progress */
lists.progress = () => {
  const r = byP(E.rep).filter(x => (!F.c || x.cat === F.c) && (!F.y || x.type === F.y) && incl([x.desc, x.zone, x.id, pn(x.pid)], F.q)).sort((a, b) => b.date.localeCompare(a.date));
  if (!r.length) return none();
  return `<section class="panel"><h2>${t('prog')} (%)</h2><div class="chart" role="img" aria-label="${t('prog')}">${r.slice(0, 8).map(x => `<div class="bc"><div class="b a" style="height:${x.pct}%;max-width:36px" title="${x.pct}%"></div><small>${x.pct}%</small></div>`).join('')}</div></section>` +
    tw(['date', 'project', 'repType', 'workCat', 'desc', 'qty', 'pct', 'workers', 'weather'], r.map(x => `<tr><td>${esc(x.date)}</td><td>${esc(pn(x.pid))}</td><td>${t(x.type)}</td><td>${t(x.cat)}</td><td>${esc(x.desc)}</td><td>${esc(x.qty)} ${esc(x.unit)}</td><td>${x.pct}%</td><td>${esc(x.wk)}</td><td>${t(x.wx)}</td></tr>`));
};
pages.progress = () => `<section class="panel"><h2>${t('newRep')}</h2><form class="form" data-form="rep" novalidate>
  ${fld('type', 'repType', 'select', { o: opts(['daily', 'weekly']) })}${fld('pid', 'project', 'select', { req: 1, o: opts(E.projects.map(p => p.id), proj === 'all' ? 'p1' : proj, pn) })}${fld('date', 'date', 'date', { req: 1, v: today() })}
  ${fld('fl', 'floor', 'text', { req: 1 })}${fld('zone', 'zone')}${fld('cat', 'workCat', 'select', { o: opts(WC) })}
  ${fld('desc', 'desc', 'textarea', { req: 1, w: 1 })}
  ${fld('qty', 'qty', 'number', { a: 'min="0" step="any"' })}${fld('unit', 'unit', 'select', { o: opts(['m2', 'm3', 'm', 'kg', 'unit'], '', v => v) })}${fld('pct', 'pct', 'number', { req: 1, a: 'min="0" max="100" step="1"' })}
  ${fld('wk', 'workers', 'number', { a: 'min="0"' })}${fld('eq', 'equip')}${fld('wx', 'weather', 'select', { o: opts(['sunny', 'cloudy', 'rain']) })}
  ${fld('ob', 'obst', 'text', { w: 1 })}${fld('nx', 'next', 'text', { w: 1 })}${photoFld('ph', 'photos')}
  <p class="mut fg w">${t('photoNote')}</p><div class="msg" role="alert"></div><div class="fg w"><button class="btn" type="submit">${t('submit')}</button></div></form></section>
  <h2>${t('repList')}</h2>${flt([['c', 'workCat', WC], ['y', 'repType', ['daily', 'weekly']]])}<div id="res">${lists.progress()}</div>`;

/* Defects */
lists.defects = () => {
  const r = byP(E.def).filter(d => (!F.v || d.sev === F.v) && (!F.s || d.st === F.s) && incl([d.id, d.loc, d.desc, d.resp, pn(d.pid)], F.q));
  return r.length ? tw(['defId', 'project', 'location', 'category', 'severity', 'status', 'due'], r.map(d => `<tr><td><button type="button" class="lnk" data-defid="${d.id}">${esc(d.id)}</button></td><td>${esc(pn(d.pid))}</td><td>${esc(d.loc)}</td><td>${t(d.cat)}</td><td>${bd(d.sev, 'sv-' + d.sev)}</td><td>${bd('s_' + d.st, stCls(d.st))}</td><td>${esc(d.due)}</td></tr>`)) : none();
};
pages.defects = () => {
  const d = E.def.find(x => x.id === sel.f);
  const flow = `<ol class="mut" style="display:flex;flex-wrap:wrap;gap:6px 14px;padding-left:18px">${WF.map(s => `<li${d && d.st === s ? ' style="color:#202329;font-weight:700"' : ''}>${t('s_' + s)}</li>`).join('')}</ol>`;
  const det = d ? `<section class="panel"><h2>${esc(d.id)} — ${esc(d.loc)} <button type="button" class="btn ghost" data-act="unself">${t('close')}</button></h2>
  <dl><dt>${t('project')}</dt><dd>${esc(pn(d.pid))}</dd><dt>${t('floor')} / ${t('zone')}</dt><dd>${esc(d.fl)} / ${esc(d.zone)}</dd><dt>${t('category')}</dt><dd>${t(d.cat)}</dd><dt>${t('severity')}</dt><dd>${bd(d.sev, 'sv-' + d.sev)}</dd><dt>${t('desc')}</dt><dd>${esc(d.desc)}</dd><dt>${t('discDate')}</dt><dd>${esc(d.date)}</dd><dt>${t('resp')}</dt><dd>${esc(d.resp)}</dd><dt>${t('due')}</dt><dd>${esc(d.due)}</dd></dl>
  <h3 style="margin:14px 0 6px">${t('workflow')}</h3>${flow}
  <div class="fg" style="max-width:320px"><label for="stSel">${t('editSt')}</label><select id="stSel" data-st="${esc(d.id)}">${opts(WF, d.st, s => t('s_' + s))}</select></div>
  <div class="form" style="margin-top:12px">${photoFld('bf', 'before')}${photoFld('af', 'after')}</div><p class="mut">${t('photoNote')}</p></section>` : '';
  return `<section class="panel"><h2>${t('newDef')}</h2><div class="note">${t('sevNote')}</div><form class="form" data-form="def" novalidate>
  ${fld('id', 'defId', 'text', { req: 1, v: 'DF-' + String(E.def.length + 1).padStart(3, '0') })}${fld('pid', 'project', 'select', { req: 1, o: opts(E.projects.map(p => p.id), proj === 'all' ? 'p1' : proj, pn) })}${fld('fl', 'floor', 'text', { req: 1 })}
  ${fld('zone', 'zone')}${fld('loc', 'location', 'text', { req: 1 })}${fld('cat', 'category', 'select', { o: opts(CATS) })}
  ${fld('desc', 'desc', 'textarea', { req: 1, w: 1 })}${fld('sev', 'severity', 'select', { o: opts(SEV, 'medium') })}${fld('date', 'discDate', 'date', { req: 1, v: today() })}
  ${fld('resp', 'resp')}${fld('due', 'due', 'date')}${photoFld('ph', 'photos')}
  <div class="msg" role="alert"></div><div class="fg w"><button class="btn" type="submit">${t('submit')}</button></div></form></section>
  ${flt([['v', 'severity', SEV], ['s', 'status', WF.map(s => 's_' + s)]]).replace(/value="s_/g, 'value="')}<div id="res">${lists.defects()}</div>${det}`;
};

/* Building */
const maintRows = () => byP(E.maint).filter(m => !F.from || m.date >= F.from);
pages.building = () => {
  const p = proj === 'all' ? E.projects[0] : E.projects.find(x => x.id === proj);
  const dl = rows => `<dl>${rows.map(([a, b]) => `<dt>${t(a)}</dt><dd>${esc(b)}</dd>`).join('')}</dl>`;
  const C = {
    gen: dl([['name', p.name], ['address', p.loc + ', Jawa Tengah'], ['func', p.fn], ['floors', p.fl], ['area', p.ar], ['year', p.yr], ['owner', p.own], ['contractor', p.con], ['sys', 'Beton bertulang / Reinforced concrete']]),
    arch: dl([['floors', 'Granit 60×60 / Granite tiles'], ['wc_arc', 'Bata ringan + plester aci / AAC brick'], ['wc_fin', 'Cat emulsi eksterior / Exterior emulsion paint']]),
    mep: dl([['mep', 'Listrik 380V, HVAC VRF, hidran, STP'], ['wc_mep', 'Pipa PPR & PVC / PPR & PVC pipes']]),
    mat: dl([['wc_str', 'Beton K-350, baja tulangan BjTS 420'], ['wc_fin', 'Kaca tempered 10 mm, aluminium powder coating']]),
    war: dl([['wc_str', 'Garansi struktur 10 tahun / 10-yr structural'], ['wc_mep', 'Garansi MEP 2 tahun / 2-yr MEP'], ['drawings', 'As-built: ARS-101 Rev C, STR-201 Rev B'], ['reports', 'Manual: O&M HVAC, Panel, Hidran']]),
    maint: maintRows().length ? tw(['date', 'project', 'item', 'by'], maintRows().map(m => `<tr><td>${m.date}</td><td>${esc(pn(m.pid))}</td><td>${esc(m.item)}</td><td>${esc(m.by)}</td></tr>`)) : none()
  };
  return `<p class="mut">${t('demoInfo')}</p><div class="tabs" role="tablist">${['gen', 'arch', 'mep', 'mat', 'war', 'maint'].map(k => `<button type="button" role="tab" data-tab="${k}" aria-selected="${tab === k}">${t('t_' + k)}</button>`).join('')}</div><section class="panel" role="tabpanel">${C[tab]}</section>`;
};

/* Reports */
const rpF = () => byP(E.rep).filter(r => !F.from || r.date >= F.from);
const rdF = () => byP(E.def).filter(d => (!F.from || d.date >= F.from) && (!F.v || d.sev === F.v) && (!F.s || d.st === F.s));
lists.reports = () => {
  const rp = rpF(), rd = rdF(), mt = maintRows();
  return `<div class="grid g2"><section class="panel"><h2>${t('sumProg')}</h2><p>${t('total')}: <b>${rp.length}</b> ${t('rows')}</p>${rp.length ? tw(['date', 'project', 'pct'], rp.map(r => `<tr><td>${r.date}</td><td>${esc(pn(r.pid))}</td><td>${r.pct}%</td></tr>`)) : none()}</section>
  <section class="panel"><h2>${t('sumDef')}</h2><p>${t('total')}: <b>${rd.length}</b> ${t('rows')} · ${SEV.map(s => `${t(s)}: ${rd.filter(d => d.sev === s).length}`).join(' · ')}</p>${rd.length ? tw(['defId', 'severity', 'status'], rd.map(d => `<tr><td>${esc(d.id)}</td><td>${bd(d.sev, 'sv-' + d.sev)}</td><td>${t('s_' + d.st)}</td></tr>`)) : none()}</section></div>
  <section class="panel"><h2>${t('maintHist')}</h2>${mt.length ? tw(['date', 'project', 'item', 'by'], mt.map(m => `<tr><td>${m.date}</td><td>${esc(pn(m.pid))}</td><td>${esc(m.item)}</td><td>${esc(m.by)}</td></tr>`)) : none()}</section>`;
};
pages.reports = () => `<div class="bar"><div class="fg"><label for="rf">${t('dateFrom')}</label><input id="rf" type="date" data-f="from" value="${esc(F.from || '')}"></div>
  <div class="fg"><label for="rv">${t('severity')}</label><select id="rv" data-f="v"><option value="">${t('all')}</option>${opts(SEV, F.v)}</select></div>
  <div class="fg"><label for="rs">${t('status')}</label><select id="rs" data-f="s"><option value="">${t('all')}</option>${opts(WF, F.s, s => t('s_' + s))}</select></div></div>
  <div class="bar"><button type="button" class="btn" data-exp="prog">${t('exportProg')}</button><button type="button" class="btn" data-exp="def">${t('exportDef')}</button><button type="button" class="btn ghost" data-exp="maint">${t('exportMaint')}</button></div>
  <div id="res">${lists.reports()}</div>`;

/* Settings */
pages.settings = () => `<section class="panel"><div class="note">${t('storeWarn')}</div><form class="form" data-form="brand" novalidate>${fld('brand', 'brandName', 'text', { req: 1, v: brand })}<div class="msg" role="alert"></div><div class="fg"><button class="btn" type="submit">${t('saveBrand')}</button></div></form>
  <p style="margin-top:16px"><button type="button" class="btn ghost" data-act="clear">${t('clearData')}</button></p></section>`;

/* ===== Export CSV ===== */
const csv = rows => rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
function exportCsv(kind) {
  let rows;
  if (kind === 'prog') rows = [['ID', t('project'), t('date'), t('repType'), t('floor'), t('zone'), t('workCat'), t('desc'), t('qty'), t('unit'), t('pct'), t('workers'), t('weather')], ...rpF().map(r => [r.id, pn(r.pid), r.date, t(r.type), r.fl, r.zone, t(r.cat), r.desc, r.qty, r.unit, r.pct, r.wk, t(r.wx)])];
  else if (kind === 'def') rows = [[t('defId'), t('project'), t('floor'), t('zone'), t('location'), t('category'), t('desc'), t('severity'), t('status'), t('discDate'), t('resp'), t('due')], ...rdF().map(d => [d.id, pn(d.pid), d.fl, d.zone, d.loc, t(d.cat), d.desc, t(d.sev), t('s_' + d.st), d.date, d.resp, d.due])];
  else rows = [[t('date'), t('project'), t('item'), t('by')], ...maintRows().map(m => [m.date, pn(m.pid), m.item, m.by])];
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['\ufeff' + csv(rows)], { type: 'text/csv;charset=utf-8' }));
  a.download = `${kind}-${today()}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast(t('exported') + ' (' + (rows.length - 1) + ' ' + t('rows') + ')');
}

/* ===== Shell rendering ===== */
const ICON = { dashboard: '◧', projects: '▤', drawings: '✎', progress: '⇪', defects: '⚠', building: '⌂', reports: '≣', settings: '⚙' };
function draw() {
  document.documentElement.lang = L;
  document.title = brand + ' — ' + t(page);
  $('#brand').textContent = brand;
  $('#title').textContent = t(page);
  $('#nav').innerHTML = Object.keys(ICON).map(k => `<button type="button" data-go="${k}"${k === page ? ' aria-current="page"' : ''}><span aria-hidden="true">${ICON[k]}</span>${t(k)}</button>`).join('');
  $('#projSel').innerHTML = `<option value="all">${t('allProj')}</option>` + popts();
  $('#projSel').value = proj;
  $('#projSel').setAttribute('aria-label', t('project'));
  $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === L)));
  $('#fab1').textContent = '⇪ ' + t('uploadProg');
  $('#fab2').textContent = '⚠ ' + t('reportDef');
  $('#app').innerHTML = pages[page]();
}
function go(p) {
  if (!pages[p]) return;
  page = p; F = {}; sel = {};
  closeNav(); draw(); window.scrollTo(0, 0); $('#app').focus({ preventScroll: true });
}
const closeNav = () => { $('#side').classList.remove('open'); $('#ovl').classList.remove('open'); };
const part = () => { const r = $('#res'); if (r && lists[page]) r.innerHTML = lists[page](); };

/* ===== Events ===== */
document.addEventListener('click', e => {
  const q = s => e.target.closest(s);
  let el;
  if ((el = q('[data-go]'))) return go(el.dataset.go);
  if ((el = q('[data-lang]'))) { L = el.dataset.lang; save(); return draw(); }
  if ((el = q('[data-pid]'))) { sel.p = el.dataset.pid; draw(); return window.scrollTo(0, 0); }
  if ((el = q('[data-dno]'))) { sel.d = el.dataset.dno; return draw(); }
  if ((el = q('[data-defid]'))) { sel.f = el.dataset.defid; draw(); return $('#stSel') && $('#stSel').scrollIntoView({ block: 'center' }); }
  if ((el = q('[data-tab]'))) { tab = el.dataset.tab; return draw(); }
  if ((el = q('[data-exp]'))) return exportCsv(el.dataset.exp);
  if ((el = q('[data-zoom]'))) {
    const z = parseFloat(el.dataset.zoom); zoom = z === 0 ? 1 : Math.min(4, Math.max(0.4, zoom * z));
    const im = $('#vbox img'); if (im) im.style.transform = `scale(${zoom})`; return;
  }
  if ((el = q('[data-act]'))) {
    const a = el.dataset.act;
    if (a === 'unsel') { sel.p = null; draw(); }
    if (a === 'unself') { sel.f = null; draw(); }
    if (a === 'clear') { try { localStorage.removeItem(KEY); } catch (x) { /* ignore */ } location.reload(); }
  }
  if (q('#menu')) { $('#side').classList.add('open'); $('#ovl').classList.add('open'); }
  if (q('#ovl')) closeNav();
});

document.addEventListener('input', e => {
  const el = e.target.closest('[data-f]');
  if (el) { F[el.dataset.f] = el.value; part(); }
});

document.addEventListener('change', e => {
  const el = e.target;
  if (el.id === 'projSel') { proj = el.value; return draw(); }
  if (el.matches('[data-f]')) { F[el.dataset.f] = el.value; part(); }
  if (el.dataset.st) {
    const d = E.def.find(x => x.id === el.dataset.st);
    if (d) { d.st = el.value; save(); draw(); toast(t('s_' + d.st)); }
  }
  if (el.dataset.pv) {
    const box = document.getElementById(el.dataset.pv);
    box.innerHTML = '';
    [...el.files].forEach(f => {
      if (!f.type.startsWith('image/')) return;
      const u = URL.createObjectURL(f); urls.push(u);
      const im = new Image(); im.src = u; im.alt = f.name; box.appendChild(im);
    });
  }
  if (el.id === 'dfile' && el.files[0]) {
    const f = el.files[0], ext = f.name.split('.').pop().toLowerCase();
    if (vw && vw.u) URL.revokeObjectURL(vw.u);
    zoom = 1;
    const isPdf = ext === 'pdf' || f.type === 'application/pdf', isImg = f.type.startsWith('image/');
    vw = { n: f.name, k: isPdf ? 'pdf' : isImg ? 'img' : 'x', u: isPdf || isImg ? URL.createObjectURL(f) : '' };
    $('#vbox').innerHTML = viewer();
    $('#vnote').innerHTML = isPdf ? t('pdfNote') + ` <a href="${vw.u}" target="_blank" rel="noopener">${t('openTab')}</a>` : '';
  }
});

document.addEventListener('submit', e => {
  const f = e.target.closest('form[data-form]');
  if (!f) return;
  e.preventDefault();
  if (!val(f)) return;
  const v = Object.fromEntries([...new FormData(f)].filter(([, x]) => typeof x === 'string'));
  const m = $('.msg', f), n = (f.querySelector('input[type=file]') || { files: [] }).files.length;
  const ok = () => { m.className = 'msg good'; m.textContent = t('saved'); toast(t('saved')); };
  if (f.dataset.form === 'rep') {
    E.rep.unshift({ id: 'PR-' + String(E.rep.length + 1).padStart(3, '0'), pid: v.pid, date: v.date, fl: v.fl, zone: v.zone, cat: v.cat, desc: v.desc, qty: v.qty, unit: v.unit, pct: Math.min(100, Math.max(0, +v.pct || 0)), wk: v.wk, eq: v.eq, wx: v.wx, ob: v.ob, nx: v.nx, type: v.type, ph: n });
  } else if (f.dataset.form === 'def') {
    if (E.def.some(d => d.id.toLowerCase() === v.id.trim().toLowerCase())) {
      m.className = 'msg err'; m.textContent = t('dupId'); return;
    }
    E.def.unshift({ id: v.id.trim(), pid: v.pid, fl: v.fl, zone: v.zone, loc: v.loc, cat: v.cat, desc: v.desc, sev: v.sev, date: v.date, resp: v.resp, due: v.due || '-', st: 'reported', ph: n });
  } else if (f.dataset.form === 'brand') {
    brand = v.brand.trim(); save(); draw(); return toast(t('saved'));
  }
  save();
  if (f.dataset.form === 'def') { sel.f = E.def[0].id; return (draw(), toast(t('saved'))); }
  part(); f.reset(); $$('.thumbs', f).forEach(b => (b.innerHTML = '')); ok();
});

/* ===== Init ===== */
load();
draw();
})();
