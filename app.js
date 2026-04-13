// ── Brand data ──────────────────────────────────────────
const brandData = {
  'kraft-heinz': {
    name:'Kraft Heinz', initials:'KH', color:'#1B4FCC', am:'Jordan Mills',
    totalSpend:'$306K', avgCpum:'$1.92',
    chart: {
      labels: ['Mar 15','Mar 22','Mar 29','Apr 5','Apr 12','Apr 19','Apr 26'],
      campaigns: [
        { name:'Spring Condiments Promo', color:'#1B4FCC', cpum:[2.41,2.28,2.15,2.04,1.92,null,null] }
      ],
      kpis: [{ label:'Avg CPUM', value:'$1.92', color:'var(--green)' }, { label:'Avg CPID', value:'$0.38', color:'var(--green)' }, { label:'Incr. Lift', value:'+18%', color:'var(--green)' }]
    },
    campaigns:[
      { id:'IPN-4802', name:'Spring Condiments Promo', status:'live', health:'Healthy', healthClass:'healthy',
        startDate:'Mar 15', endDate:'Apr 28, 2026', daysLeft:'17 days left',
        budget:'$450K', spent:'$306K', pacing:68, cpum:'$1.92', lift:'+18%' },
      { id:'IPN-4910', name:'Heinz Ketchup Summer Refresh', status:'draft', health:'Draft', healthClass:'setup',
        startDate:'Jun 10', endDate:'Aug 1, 2026', daysLeft:null,
        budget:'$310K', spent:'—', pacing:0, cpum:'—', lift:'—' },
      { id:'IPN-4621', name:'Mac & Cheese Back-to-School', status:'ended', health:'Ended', healthClass:'setup',
        startDate:'Jan 15', endDate:'Feb 28, 2026', daysLeft:null,
        budget:'$280K', spent:'$280K', pacing:100, cpum:'$2.18', lift:'+14%' }
    ]
  },
  'pepsico': {
    name:'PepsiCo', initials:'PC', color:'#004B93', am:'Jordan Mills',
    totalSpend:'$748K', avgCpum:'$2.14',
    chart: {
      labels: ['Apr 1','Apr 5','Apr 8','Apr 11','Apr 14','Apr 17','Apr 20'],
      campaigns: [
        { name:'Summer Refresh Campaign', color:'#004B93', cpum:[2.48,2.36,2.24,2.14,null,null,null] }
      ],
      kpis: [{ label:'Avg CPUM', value:'$2.14', color:'var(--amber)' }, { label:'Avg CPID', value:'$0.44', color:'var(--amber)' }, { label:'Incr. Lift', value:'+22%', color:'var(--green)' }]
    },
    campaigns:[
      { id:'IPN-4788', name:'Summer Refresh Campaign', status:'live', health:'Attention', healthClass:'attention',
        startDate:'Apr 1', endDate:'May 15, 2026', daysLeft:'34 days left',
        budget:'$890K', spent:'$748K', pacing:84, cpum:'$2.14', lift:'+22%' },
      { id:'IPN-4955', name:"Lay's Game Day Promo", status:'draft', health:'Draft', healthClass:'setup',
        startDate:'Aug 15', endDate:'Sep 30, 2026', daysLeft:null,
        budget:'$400K', spent:'—', pacing:0, cpum:'—', lift:'—' }
    ]
  },
  'general-mills': {
    name:'General Mills', initials:'GM', color:'#CC0000', am:'Jordan Mills',
    totalSpend:'$220K', avgCpum:'$2.93',
    chart: {
      labels: ['Mar 22','Mar 29','Apr 5','Apr 12','Apr 19','Apr 26','May 3'],
      campaigns: [
        { name:'Cereal Trial Drive', color:'#EF4444', cpum:[3.92,3.88,3.80,null,null,null,null] },
        { name:'Nature Valley Snacking', color:'#22C55E', cpum:[null,null,2.18,2.05,null,null,null] }
      ],
      kpis: [{ label:'Avg CPUM', value:'$2.93', color:'var(--red)' }, { label:'Avg CPID', value:'$0.61', color:'var(--amber)' }, { label:'Incr. Lift', value:'+12%', color:'var(--amber)' }]
    },
    campaigns:[
      { id:'IPN-4815', name:'Cereal Trial Drive', status:'live', health:'Urgent', healthClass:'urgent',
        startDate:'Mar 22', endDate:'May 1, 2026', daysLeft:'20 days left',
        budget:'$320K', spent:'$131K', pacing:41, cpum:'$3.80', lift:'+8%' },
      { id:'IPN-4831', name:'Nature Valley Snacking Push', status:'live', health:'Healthy', healthClass:'healthy',
        startDate:'Apr 1', endDate:'May 15, 2026', daysLeft:'34 days left',
        budget:'$180K', spent:'$89K', pacing:49, cpum:'$2.05', lift:'+16%' },
      { id:'IPN-4680', name:'Pillsbury Holiday Bake', status:'ended', health:'Ended', healthClass:'setup',
        startDate:'Nov 1', endDate:'Dec 20, 2025', daysLeft:null,
        budget:'$540K', spent:'$540K', pacing:100, cpum:'$1.76', lift:'+21%' }
    ]
  },
  'liquid-death': {
    name:'Liquid Death', initials:'LD', color:'#1C1F24', am:'Jordan Mills',
    totalSpend:'$161K', avgCpum:'$1.76',
    opportunities: [
      {
        type:'opportunity',
        brand:'LiveLift Q2 Pilot · IPN-4841',
        time:'Updated 2h ago',
        text:'Walmart CPUM ($1.52) is 31% more efficient than Kroger ($2.20). Shifting $20K of LiveLift Q2 budget from Kroger to Walmart projected to improve blended CPUM.',
        impact:'−$0.18 CPUM · +2,400 units',
        actions:[{label:'Shift Budget',primary:true},{label:'View Retailers',primary:false}]
      },
      {
        type:'opportunity',
        brand:'Mountain Series Launch · IPN-4836',
        time:'Updated 4h ago',
        text:'Mountain Series ends Apr 30. Summer hydration peaks May–June — renewing now locks in current inventory and publisher commitments before Q2 rate card increases.',
        impact:'Peak season coverage · $120K renewal',
        actions:[{label:'Initiate Renewal',primary:true},{label:'View Comps',primary:false}]
      },
      {
        type:'opportunity',
        brand:'LiveLift Q2 Pilot · IPN-4841',
        time:'Updated 6h ago',
        text:'New-to-brand rate is 34% — 8pts above category average. High NTB campaigns benefit most from budget expansion. Increasing to $220K projected to add 3,200 new buyers.',
        impact:'+3,200 new buyers · +$40K budget',
        actions:[{label:'Increase Budget',primary:true},{label:'Dismiss',primary:false}]
      }
    ],
    chart: {
      colors: { 'Portfolio Total': '#40D1F5' },
      ranges: {
        today: {
          labels:['8am','10am','12pm','2pm','4pm','6pm','8pm'],
          kpis: {
            lift:  { 'Portfolio Total':[16,17,18,19,19,19,19] },
            cpum:  { 'Portfolio Total':[1.78,1.77,1.77,1.76,1.76,1.76,1.76] },
            units: { 'Portfolio Total':[3000,3900,4050,4150,4200,4000,4168] },
            spend: { 'Portfolio Total':[3300,3650,3850,4000,4150,3900,4084] },
            ntb:   { 'Portfolio Total':[33,33,34,34,34,35,34] }
          }
        },
        '7d': {
          labels:['Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11\n(Today)'],
          kpis: {
            lift:  { 'Portfolio Total':[7,11,11,14,16,19,19] },
            cpum:  { 'Portfolio Total':[2.11,2.01,2.00,1.89,1.81,1.78,1.76] },
            units: { 'Portfolio Total':[12300,17600,17400,20500,21900,23500,24618] },
            spend: { 'Portfolio Total':[20000,22800,21900,23800,24900,26300,27084] },
            ntb:   { 'Portfolio Total':[28,30,31,32,33,33,34] }
          }
        },
        optimization: {
          labels:['Apr 8','Apr 9','Apr 10','Apr 11\n(Today)'],
          kpis: {
            lift:  { 'Portfolio Total':[14,16,19,19] },
            cpum:  { 'Portfolio Total':[1.89,1.81,1.78,1.76] },
            units: { 'Portfolio Total':[20500,21900,23500,24618] },
            spend: { 'Portfolio Total':[23800,24900,26300,27084] },
            ntb:   { 'Portfolio Total':[32,33,33,34] }
          }
        },
        full: {
          labels:['Apr 1','Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11\n(Today)','Apr 12','Apr 13','Apr 14'],
          kpis: {
            lift:  { 'Portfolio Total':[10,7,11,11,14,16,19,19,null,null,null] },
            cpum:  { 'Portfolio Total':[1.92,2.11,2.01,2.00,1.89,1.81,1.78,1.76,null,null,null] },
            units: { 'Portfolio Total':[3800,12300,17600,17400,20500,21900,23500,24618,null,null,null] },
            spend: { 'Portfolio Total':[6200,20000,22800,21900,23800,24900,26300,27084,null,null,null] },
            ntb:   { 'Portfolio Total':[26,28,30,31,32,33,33,34,null,null,null] }
          }
        }
      },
      kpiMeta: {
        lift: {
          title:'Incremental Lift % · Liquid Death Portfolio',
          sub:'Matched Audiences methodology · Portfolio Total across active campaigns · Updated daily',
          yLabel: v => '+'+v+'%', yMin:0, yMax:30,
          tooltipFn: (ds,v) => v!==null ? ` ${ds}: +${v}%` : null,
          statLabels: ['Portfolio Avg Lift','Peak Period','vs. Category Avg'],
          stats: {
            today:        {avg:'+19%',  peak:'4pm · +23%',       total:'+5pts above avg'},
            '7d':         {avg:'+16%',  peak:'Apr 11 · +22%',    total:'+5pts above avg'},
            optimization: {avg:'+17%',  peak:'Apr 11 · +22%',    total:'+7pts since Apr 8'},
            full:         {avg:'+15%',  peak:'Apr 11 · +22%',    total:'+5pts above avg'}
          }
        },
        cpum: {
          title:'CPUM by Day · Blended Cost Per Unit Moved',
          sub:'Weighted average across active campaigns · Lower is better · Category avg $2.31',
          yLabel: v => '$'+v.toFixed(2), yMin:1.2, yMax:2.8,
          tooltipFn: (ds,v) => v!==null ? ` ${ds}: $${v.toFixed(2)}` : null,
          statLabels: ['Blended CPUM','Best Retailer','Improvement Trend'],
          stats: {
            today:        {avg:'$1.76', peak:'Walmart · $1.52',   total:'−$0.35 since launch'},
            '7d':         {avg:'$1.88', peak:'Walmart · $1.52',   total:'−$0.35 since launch'},
            optimization: {avg:'$1.81', peak:'Walmart · $1.52',   total:'−$0.27 since Apr 8'},
            full:         {avg:'$1.91', peak:'Walmart · $1.52',   total:'−$0.35 vs. open'}
          }
        },
        units: {
          title:'Daily Units Moved · Liquid Death Portfolio',
          sub:'Incremental units across active campaigns · Excludes baseline sales',
          yLabel: v => v>=1000?(v/1000).toFixed(0)+'K':v, yMin:0, yMax:30000,
          tooltipFn: (ds,v) => v!==null ? ` ${ds}: ${v>=1000?(v/1000).toFixed(1)+'K':v} units` : null,
          statLabels: ['Daily Run Rate','Peak Period','Total Units'],
          stats: {
            today:        {avg:'4.2K / hr',    peak:'4pm · 4.2K',       total:'~24K today'},
            '7d':         {avg:'19.4K / day',  peak:'Apr 11 · 24.6K',   total:'136K this week'},
            optimization: {avg:'22.6K / day',  peak:'Apr 11 · 24.6K',   total:'91K since Apr 8'},
            full:         {avg:'17.8K / day',  peak:'Apr 11 · 24.6K',   total:'196K total'}
          }
        },
        spend: {
          title:'Daily Spend · Combined Budget Burn',
          sub:'Combined spend across active campaigns · $300K total budget',
          yLabel: v => '$'+(v/1000).toFixed(0)+'K', yMin:0, yMax:35000,
          tooltipFn: (ds,v) => v!==null ? ` ${ds}: $${(v/1000).toFixed(1)}K` : null,
          statLabels: ['Daily Avg Spend','Budget Status','Total Spent'],
          stats: {
            today:        {avg:'$4.1K / hr',   peak:'On Pace ✓',        total:'$161K / $300K'},
            '7d':         {avg:'$23.8K / day', peak:'On Pace ✓',        total:'$161K / $300K'},
            optimization: {avg:'$25.5K / day', peak:'On Pace ✓',        total:'$102K since Apr 8'},
            full:         {avg:'$20.3K / day', peak:'39 Days Left',      total:'$161K / $300K'}
          }
        },
        ntb: {
          title:'New-to-Brand Rate · Liquid Death Portfolio',
          sub:'Share of buyers not previously purchasing Liquid Death · Matched Audiences verified',
          yLabel: v => v+'%', yMin:20, yMax:45,
          tooltipFn: (ds,v) => v!==null ? ` ${ds}: ${v}% NTB` : null,
          statLabels: ['NTB Rate','vs. Category Avg','Est. New Buyers'],
          stats: {
            today:        {avg:'34%',  peak:'+8pts',              total:'~820 today'},
            '7d':         {avg:'32%',  peak:'+6pts',              total:'~3.2K this week'},
            optimization: {avg:'33%',  peak:'+2pts since Apr 8',  total:'~1.4K since Apr 8'},
            full:         {avg:'31%',  peak:'+5pts',              total:'~6.8K total'}
          }
        }
      }
    },
    campaigns:[
      { id:'IPN-4841', name:'LiveLift Q2 Pilot', status:'live', health:'Outperforming', healthClass:'healthy',
        startDate:'Apr 5', endDate:'May 20, 2026', daysLeft:'39 days left',
        budget:'$180K', spent:'$94K', pacing:52, cpum:'$1.84', lift:'+19%' },
      { id:'IPN-4836', name:'Mountain Series Launch', status:'live', health:'Healthy', healthClass:'healthy',
        startDate:'Apr 1', endDate:'Apr 30, 2026', daysLeft:'19 days left',
        budget:'$120K', spent:'$67K', pacing:56, cpum:'$1.67', lift:'+16%' },
      { id:'IPN-4962', name:'Summer Hydration Push', status:'draft', health:'Draft', healthClass:'setup',
        startDate:'Jun 1', endDate:'Jul 15, 2026', daysLeft:null,
        budget:'$220K', spent:'—', pacing:0, cpum:'—', lift:'—' },
      { id:'IPN-4771', name:'Sparkling Water Regional Test', status:'ended', health:'Ended', healthClass:'setup',
        startDate:'Jan 20', endDate:'Feb 28, 2026', daysLeft:null,
        budget:'$95K', spent:'$95K', pacing:100, cpum:'$1.62', lift:'+14%' },
      { id:'IPN-4688', name:'Holiday Pack Q4 2025', status:'ended', health:'Ended', healthClass:'setup',
        startDate:'Nov 15', endDate:'Dec 31, 2025', daysLeft:null,
        budget:'$310K', spent:'$310K', pacing:100, cpum:'$1.94', lift:'+22%' }
    ]
  },
  'kimberly-clark': {
    name:'Kimberly-Clark', initials:'KC', color:'#CC0052', am:'Jordan Mills',
    totalSpend:'$510K', avgCpum:'$2.31',
    chart: {
      labels: ['Feb 28','Mar 7','Mar 14','Mar 21','Mar 28','Apr 4','Apr 11'],
      campaigns: [
        { name:'Kleenex Allergy Season', color:'#CC0052', cpum:[2.64,2.52,2.44,2.38,2.34,2.31,2.31] }
      ],
      kpis: [{ label:'Avg CPUM', value:'$2.31', color:'var(--amber)' }, { label:'Avg CPID', value:'$0.47', color:'var(--amber)' }, { label:'Incr. Lift', value:'+15%', color:'var(--green)' }]
    },
    campaigns:[
      { id:'IPN-4773', name:'Kleenex Allergy Season', status:'live', health:'Ending Soon', healthClass:'attention',
        startDate:'Feb 28', endDate:'Apr 15, 2026', daysLeft:'4 days left',
        budget:'$560K', spent:'$510K', pacing:91, cpum:'$2.31', lift:'+15%' },
      { id:'IPN-4698', name:'Cottonelle Spring Clean', status:'ended', health:'Ended', healthClass:'setup',
        startDate:'Jan 10', endDate:'Feb 27, 2026', daysLeft:null,
        budget:'$195K', spent:'$195K', pacing:100, cpum:'$2.44', lift:'+12%' }
    ]
  },
  'hain-celestial': {
    name:'Hain Celestial', initials:'HC', color:'#5B8E3E', am:'Jordan Mills',
    totalSpend:'$0', avgCpum:'—',
    chart: null,
    campaigns:[
      { id:'IPN-4881', name:'Natural Foods Discovery', status:'setup', health:'In Setup', healthClass:'setup',
        startDate:'Apr 21', endDate:'Jun 14, 2026', daysLeft:'Launches in 10 days',
        budget:'$240K', spent:'$0', pacing:0, cpum:'—', lift:'—' },
      { id:'IPN-4940', name:'Terra Chips Summer Push', status:'draft', health:'Draft', healthClass:'setup',
        startDate:'Jul 1', endDate:'Aug 31, 2026', daysLeft:null,
        budget:'$160K', spent:'—', pacing:0, cpum:'—', lift:'—' }
    ]
  }
};

let currentBrandKey = null;
let brandChart = null;
let brandChartKPI = 'lift';
let brandChartRange = '7d';

// ── Brand KPI strip ─────────────────────────────────────
function buildBrandKpiStrip(brand) {
  // Rich data available (liquid-death style with chart data)
  if (brand.chart && brand.chart.kpiMeta) {
    const r7d = brand.chart.ranges['7d'];
    const kpis7d = r7d.kpis;
    const lift7d   = kpis7d.lift['Portfolio Total'];
    const cpum7d   = kpis7d.cpum['Portfolio Total'];
    const units7d  = kpis7d.units['Portfolio Total'];
    const spend7d  = kpis7d.spend['Portfolio Total'];

    const avgLift  = (lift7d.reduce((s,v)=>s+(v||0),0)/lift7d.filter(v=>v!==null).length).toFixed(0);
    const avgCpum  = (cpum7d.reduce((s,v)=>s+(v||0),0)/cpum7d.filter(v=>v!==null).length).toFixed(2);
    const totalUnits = units7d.reduce((s,v)=>s+(v||0),0);
    const totalSpend = spend7d.reduce((s,v)=>s+(v||0),0);

    // Budget pacing: combined live campaigns
    const liveCampaigns = brand.campaigns.filter(c => c.status === 'live');
    const totalBudget = liveCampaigns.reduce((s,c) => s + parseFloat((c.budget||'').replace(/[$K]/g,''))*(c.budget.includes('K')?1000:1), 0);
    const totalSpentRaw = liveCampaigns.reduce((s,c) => {
      const v = parseFloat((c.spent||'').replace(/[$K]/g,''))*(c.spent&&c.spent.includes('K')?1000:1);
      return s + (isNaN(v)?0:v);
    }, 0);
    const pacingPct = totalBudget > 0 ? Math.round(totalSpentRaw/totalBudget*100) : 0;

    // Days elapsed vs. total flight (Mountain Series started Apr 1, ends Apr 30 = 30 days; today Apr 12 = day 12 = 40% elapsed)
    const expectedPct = 40; // hardcoded for prototype
    const pacingStatus = Math.abs(pacingPct - expectedPct) <= 8 ? 'On Pace' : pacingPct > expectedPct + 8 ? 'Ahead' : 'Behind';
    const pacingColor  = pacingStatus === 'On Pace' ? 'var(--green)' : pacingStatus === 'Ahead' ? 'var(--amber)' : 'var(--red)';

    // NTB from opportunity data (Liquid Death = 34%)
    const ntbRate = '34%';
    const ntbDelta = '+8pts vs. category';

    const unitsDisplay = totalUnits >= 1000 ? (totalUnits/1000).toFixed(0)+'K' : totalUnits;

    return `
      <div class="kpi-strip" style="grid-template-columns:repeat(5,1fr);margin-bottom:20px;">
        <div class="kpi-card">
          <div class="kpi-label">Incr. Lift (7D Avg)</div>
          <div class="kpi-value green">+${avgLift}%</div>
          <div class="kpi-delta pos">↑ above category avg</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Blended CPUM</div>
          <div class="kpi-value green">$${avgCpum}</div>
          <div class="kpi-delta pos">↓ −$0.35 since launch</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Budget Pacing</div>
          <div class="kpi-value" style="color:${pacingColor};">${pacingPct}%</div>
          <div class="kpi-delta" style="color:${pacingColor};">${pacingStatus} · ${pacingPct}% of ${Math.round(totalBudget/1000)}K used</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Units Moved (7D)</div>
          <div class="kpi-value green">${unitsDisplay}</div>
          <div class="kpi-delta pos">↑ +24.6K today</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">New-to-Brand Rate</div>
          <div class="kpi-value green">${ntbRate}</div>
          <div class="kpi-delta pos">${ntbDelta}</div>
        </div>
      </div>`;
  }

  // Fallback: simpler strip from campaign data
  const liveC = brand.campaigns.filter(c => c.status === 'live');
  if (!liveC.length) {
    return `
      <div class="kpi-strip" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px;">
        <div class="kpi-card"><div class="kpi-label">Status</div><div class="kpi-value" style="font-size:16px;color:#9CA3AF;">No Live Campaigns</div></div>
        <div class="kpi-card"><div class="kpi-label">Total Campaigns</div><div class="kpi-value">${brand.campaigns.length}</div></div>
        <div class="kpi-card"><div class="kpi-label">Blended CPUM</div><div class="kpi-value" style="color:#9CA3AF;">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Incr. Lift</div><div class="kpi-value" style="color:#9CA3AF;">—</div></div>
      </div>`;
  }
  const cpumColor = brand.avgCpum !== '—' ? 'var(--green)' : '#9CA3AF';
  const avgLiftRaw = liveC.map(c => parseFloat(c.lift)||0).filter(v=>v>0);
  const avgLift = avgLiftRaw.length ? '+' + Math.round(avgLiftRaw.reduce((s,v)=>s+v,0)/avgLiftRaw.length) + '%' : '—';
  const totalBudget = liveC.reduce((s,c)=>s+parseFloat((c.budget||'').replace(/[$K]/g,''))*(c.budget.includes('K')?1000:1),0);
  const totalSpent = liveC.reduce((s,c)=>{const v=parseFloat((c.spent||'').replace(/[$K]/g,''))*(c.spent&&c.spent.includes('K')?1000:1);return s+(isNaN(v)?0:v);},0);
  const pacing = totalBudget > 0 ? Math.round(totalSpent/totalBudget*100) : 0;
  return `
    <div class="kpi-strip" style="grid-template-columns:repeat(5,1fr);margin-bottom:20px;">
      <div class="kpi-card"><div class="kpi-label">Incr. Lift (Avg)</div><div class="kpi-value green">${avgLift}</div><div class="kpi-delta neu">${liveC.length} live campaign${liveC.length!==1?'s':''}</div></div>
      <div class="kpi-card"><div class="kpi-label">Blended CPUM</div><div class="kpi-value" style="color:${cpumColor};">${brand.avgCpum}</div><div class="kpi-delta neu">across live campaigns</div></div>
      <div class="kpi-card"><div class="kpi-label">Budget Pacing</div><div class="kpi-value">${pacing}%</div><div class="kpi-delta neu">of $${Math.round(totalBudget/1000)}K used</div></div>
      <div class="kpi-card"><div class="kpi-label">Units Moved</div><div class="kpi-value" style="color:#9CA3AF;">—</div><div class="kpi-delta neu">data not available</div></div>
      <div class="kpi-card"><div class="kpi-label">New-to-Brand</div><div class="kpi-value" style="color:#9CA3AF;">—</div><div class="kpi-delta neu">data not available</div></div>
    </div>`;
}

// ── Brand Detail: full page render ──────────────────────
function showBrand(key) {
  const brand = brandData[key];
  if (!brand) return;
  currentBrandKey = key;
  brandChartKPI = 'cpum';
  brandChartRange = '7d';

  // Breadcrumb
  document.getElementById('bd-name').textContent = brand.name;

  // ── Hero bar: identity + meta + CTAs ───────────────────
  const liveCount   = brand.campaigns.filter(c => c.status === 'live').length;
  const draftCount  = brand.campaigns.filter(c => c.status === 'draft').length;
  const hasLive     = liveCount > 0;
  const statusDot   = hasLive ? 'var(--green)' : 'var(--gray-border)';
  const statusLabel = hasLive ? `${liveCount} live` : 'No active campaigns';

  document.getElementById('bd-hero').innerHTML = `
    <div class="campaign-hero" style="margin-bottom:16px;">
      <div class="campaign-hero-left">
        <div style="width:48px;height:48px;border-radius:12px;background:${brand.color};color:white;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${brand.initials}</div>
        <div>
          <div style="font-size:12px;color:#9CA3AF;font-weight:500;margin-bottom:2px;">CPG Brand · IPN Portfolio</div>
          <div style="font-size:20px;font-weight:700;color:var(--black);margin-bottom:6px;">${brand.name}</div>
          <div class="hero-meta">
            <div class="hero-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              AM: ${brand.am}
            </div>
            <div class="hero-pill" style="display:flex;align-items:center;gap:5px;">
              <span style="width:7px;height:7px;border-radius:50%;background:${statusDot};flex-shrink:0;${hasLive?'animation:pulse 2s infinite;':''}"></span>
              ${statusLabel}${draftCount ? ` · ${draftCount} draft` : ''}
            </div>
            <div class="hero-pill">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${brand.campaigns.length} total campaigns
            </div>
          </div>
        </div>
      </div>
      <div class="hero-right" style="gap:8px;flex-wrap:wrap;justify-content:flex-end;">
        <button class="btn btn-secondary" style="font-size:12px;padding:8px 14px;display:flex;align-items:center;gap:6px;" onclick="brandToast('CSV export queued — ${brand.name} campaign data will download shortly.')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export CSV
        </button>
        <button class="btn btn-secondary" style="font-size:12px;padding:8px 14px;display:flex;align-items:center;gap:6px;" onclick="brandToast('Generating client recap for ${brand.name} — AI draft will be ready in a few seconds.')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Generate Recap
        </button>
        <button class="btn btn-primary" style="font-size:12px;padding:8px 14px;display:flex;align-items:center;gap:6px;" onclick="newCampaignToast('${brand.name}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Campaign
        </button>
      </div>
    </div>
    ${buildBrandKpiStrip(brand)}`;

  // Reuse brandToast alias
  window.brandToast = (msg) => {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  };

  // Chart section
  document.getElementById('bd-chart-section').innerHTML = '';
  document.getElementById('bd-opportunities').innerHTML = '';

  // Campaign list header
  document.getElementById('bd-list-header').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div style="font-size:15px;font-weight:600;color:var(--black);">${brand.campaigns.length} Campaign${brand.campaigns.length !== 1 ? 's' : ''}</div>
      <div class="filter-tabs" id="bdFilterTabs">
        <div class="filter-tab active" onclick="filterBrandCampaigns('all',this)">All</div>
        <div class="filter-tab" onclick="filterBrandCampaigns('live',this)">Active</div>
        <div class="filter-tab" onclick="filterBrandCampaigns('draft',this)">Draft</div>
        <div class="filter-tab" onclick="filterBrandCampaigns('ended',this)">Ended</div>
      </div>
    </div>`;

  renderBrandCampaigns(brand.campaigns);
  showScreen('brand-detail');

  // Render chart and opportunities after DOM is live
  setTimeout(() => {
    renderBrandChart(brand);
    renderBrandOpportunities(brand);
  }, 50);
}

function newCampaignToast(brandName) {
  const toast = document.createElement('div');
  toast.textContent = `New campaign builder opened for ${brandName} · Step 1: Offer Setup`;
  toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Brand Performance Chart ──────────────────────────────
function renderBrandChart(brand) {
  const el = document.getElementById('bd-chart-section');
  if (!el || !brand.chart) { if (el) el.innerHTML = ''; return; }

  const cd = brand.chart;
  const kpiMeta = cd.kpiMeta[brandChartKPI];
  const rangeData = cd.ranges[brandChartRange];

  // KPI selector pills (5 matching campaign page)
  const kpis = [
    { key:'lift',  label:'Incremental Lift %' },
    { key:'cpum',  label:'CPUM by Day' },
    { key:'units', label:'Daily Units Moved' },
    { key:'spend', label:'Daily Spend' },
    { key:'ntb',   label:'New-to-Brand %' },
  ];
  const kpiPillsHTML = kpis.map(k =>
    `<div class="kpi-pill${k.key === brandChartKPI ? ' active' : ''}" onclick="setBrandKPI('${k.key}',this)"><div class="kpi-pill-dot"></div>${k.label}</div>`
  ).join('');

  // Date range pills (matching campaign page)
  const ranges = [
    {key:'today',        label:'Today',                     special:false},
    {key:'7d',           label:'Last 7 Days',               special:false},
    {key:'optimization', label:'✦ Since Last Optimization',  special:true},
    {key:'full',         label:'Full Flight',               special:false},
  ];
  const rangePillsHTML = ranges.map(r =>
    `<div class="date-pill${r.special?' special':''}${r.key === brandChartRange ? ' active' : ''}" onclick="setBrandRange('${r.key}',this)">${r.label}</div>`
  ).join('');

  // Stats — fall back to 7d if custom range selected
  const effectiveRange = (brandChartRange === 'custom' || !cd.ranges[brandChartRange]) ? '7d' : brandChartRange;
  const stats = kpiMeta.stats[effectiveRange];

  el.innerHTML = `
    <div style="background:white;border:1px solid var(--gray-border);border-radius:12px;padding:20px;margin-bottom:20px;">
      <div class="chart-header-top">
        <div>
          <div id="bdChartTitle" style="font-size:14px;font-weight:600;color:var(--black);">${kpiMeta.title}</div>
          <div id="bdChartSub" style="font-size:12px;color:#9CA3AF;margin-top:2px;">${kpiMeta.sub}</div>
        </div>
      </div>
      <div class="date-range-row">
        <div class="date-range-label">Range</div>
        <div class="date-range-pills" id="bdRangePills">${rangePillsHTML}</div>
        <div class="custom-range-wrap">
          <input type="date" id="bdDateFrom" value="2026-04-05" onchange="setBrandCustomRange()">
          <span class="custom-range-sep">→</span>
          <input type="date" id="bdDateTo" value="2026-04-11" onchange="setBrandCustomRange()">
        </div>
      </div>
      <div class="kpi-selector-row">
        <div class="kpi-selector-label">Metric</div>
        <div class="kpi-pills" id="bdKpiPills">${kpiPillsHTML}</div>
      </div>
      <div style="position:relative;height:200px;margin-bottom:16px;"><canvas id="brandPerfChart"></canvas></div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding-top:14px;border-top:1px solid var(--gray-border);">
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;" id="bdStat0Label">${kpiMeta.statLabels[0]}</div>
          <div style="font-size:20px;font-weight:700;color:var(--green);margin-top:4px;" id="bdStat0">${stats.avg}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;" id="bdStat1Label">${kpiMeta.statLabels[1]}</div>
          <div style="font-size:20px;font-weight:700;color:var(--black);margin-top:4px;" id="bdStat1">${stats.peak}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;" id="bdStat2Label">${kpiMeta.statLabels[2]}</div>
          <div style="font-size:20px;font-weight:700;color:var(--black);margin-top:4px;" id="bdStat2">${stats.total}</div>
        </div>
      </div>
    </div>`;

  if (brandChart) { brandChart.destroy(); brandChart = null; }
  buildBrandChart(brand);
}

function buildBrandChart(brand) {
  const ctx = document.getElementById('brandPerfChart');
  if (!ctx) return;
  const cd = brand.chart;
  const kpiMeta = cd.kpiMeta[brandChartKPI];
  const effectiveRange = (brandChartRange === 'custom' || !cd.ranges[brandChartRange]) ? '7d' : brandChartRange;
  const rangeData = cd.ranges[effectiveRange];
  const kpiData = rangeData.kpis[brandChartKPI];

  const kpiColors = { lift:'#40D1F5', cpum:'#ED2564', units:'#22C55E', spend:'#F59E0B', ntb:'#8B5CF6' };
  const lineColor = kpiColors[brandChartKPI] || '#40D1F5';

  const datasets = [{
    label: 'Portfolio Total',
    data: kpiData['Portfolio Total'] || [],
    borderColor: lineColor,
    backgroundColor: 'transparent',
    borderWidth: 2.5,
    borderDash: [],
    pointRadius: 4,
    pointBackgroundColor: lineColor,
    pointBorderColor: '#fff',
    pointBorderWidth: 1.5,
    tension: 0.4,
    spanGaps: false,
  }];

  brandChart = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: { labels: rangeData.labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1C1F24',
          titleColor: '#9CA3AF',
          bodyColor: '#FFFFFF',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: ctx => kpiMeta.tooltipFn(ctx.dataset.label, ctx.raw)
          }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 11, family: 'Inter' }, color: '#9CA3AF' } },
        y: {
          min: kpiMeta.yMin, max: kpiMeta.yMax,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { font: { size: 11, family: 'Inter' }, color: '#9CA3AF', callback: kpiMeta.yLabel }
        }
      }
    }
  });
}

function setBrandKPI(kpi, pill) {
  brandChartKPI = kpi;
  document.querySelectorAll('#bdKpiPills .kpi-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  applyBrandChartState();
}

function setBrandRange(range, pill) {
  brandChartRange = range;
  document.querySelectorAll('#bdRangePills .date-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  applyBrandChartState();
}

function setBrandCustomRange() {
  brandChartRange = 'custom';
  document.querySelectorAll('#bdRangePills .date-pill').forEach(p => p.classList.remove('active'));
  applyBrandChartState();
}

function applyBrandChartState() {
  const brand = brandData[currentBrandKey];
  if (!brand || !brand.chart) return;
  const cd = brand.chart;
  const kpiMeta = cd.kpiMeta[brandChartKPI];
  const effectiveRange = (brandChartRange === 'custom' || !cd.ranges[brandChartRange]) ? '7d' : brandChartRange;
  const rangeData = cd.ranges[effectiveRange];
  const kpiData = rangeData.kpis[brandChartKPI];
  const stats = kpiMeta.stats[effectiveRange];

  // Update title/sub
  const t = document.getElementById('bdChartTitle');
  const s = document.getElementById('bdChartSub');
  if (t) t.textContent = kpiMeta.title;
  if (s) s.textContent = kpiMeta.sub;

  // Update stats
  ['avg','peak','total'].forEach((k,i) => {
    const el = document.getElementById('bdStat'+i);
    const lbl = document.getElementById('bdStat'+i+'Label');
    if (el) el.textContent = stats[k];
    if (lbl) lbl.textContent = kpiMeta.statLabels[i];
  });

  // Update chart — single Portfolio Total dataset, color varies by KPI
  const kpiColors = { lift:'#40D1F5', cpum:'#ED2564', units:'#22C55E', spend:'#F59E0B', ntb:'#8B5CF6' };
  const lineColor = kpiColors[brandChartKPI] || '#40D1F5';
  if (brandChart) {
    brandChart.data.labels = rangeData.labels;
    if (brandChart.data.datasets[0]) {
      brandChart.data.datasets[0].data = kpiData['Portfolio Total'] || [];
      brandChart.data.datasets[0].borderColor = lineColor;
      brandChart.data.datasets[0].pointBackgroundColor = lineColor;
    }
    brandChart.options.scales.y.min = kpiMeta.yMin;
    brandChart.options.scales.y.max = kpiMeta.yMax;
    brandChart.options.scales.y.ticks.callback = kpiMeta.yLabel;
    brandChart.update('active');
  }
}

// ── Brand AI Opportunities ───────────────────────────────
function renderBrandOpportunities(brand) {
  const el = document.getElementById('bd-opportunities');
  if (!el || !brand.opportunities || !brand.opportunities.length) {
    if (el) el.innerHTML = '';
    return;
  }
  const cardsHTML = brand.opportunities.map(o => `
    <div class="opportunity-card">
      <div class="opp-header">
        <div class="opp-badge"><div class="opp-badge-dot"></div>AI Opportunity</div>
        <div class="opp-time">${o.time}</div>
      </div>
      <div class="opp-brand">${o.brand}</div>
      <div class="opp-text">${o.text}</div>
      <div class="opp-impact">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        ${o.impact}
      </div>
      <div class="opp-actions">
        ${o.actions.map(a => `<button class="btn ${a.primary?'btn-primary':'btn-secondary'}" style="font-size:11px;padding:5px 12px;" onclick="oppToast('${a.label}')">${a.label}</button>`).join('')}
      </div>
    </div>`
  ).join('');

  el.innerHTML = `
    <div style="margin-bottom:24px;">
      <div class="section-header" style="margin-bottom:14px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="section-title">AI Opportunities</div>
          <div style="background:var(--cyan);color:var(--black);font-size:10px;font-weight:700;padding:2px 8px;border-radius:100px;">${brand.opportunities.length}</div>
        </div>
        <div style="font-size:12px;color:#9CA3AF;">Powered by LiveLift · Updated every 4 hours</div>
      </div>
      <div class="opportunity-grid">${cardsHTML}</div>
    </div>`;
}

function oppToast(label) {
  const msgs = {
    'Shift Budget': 'Budget reallocation submitted · Walmart allocation increasing by $20K',
    'Initiate Renewal': 'Renewal flow opened for Mountain Series Launch · Step 1: Budget & Dates',
    'Increase Budget': 'Budget increase request submitted · Awaiting ops approval',
    'View Retailers': 'Opening retailer breakdown for LiveLift Q2 Pilot...',
    'View Comps': 'Opening comparable campaigns from prior summer flights...',
    'Dismiss': 'Opportunity dismissed · Won\'t resurface for 7 days'
  };
  const toast = document.createElement('div');
  toast.textContent = msgs[label] || label;
  toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Brand Campaign Cards ─────────────────────────────────
function renderBrandCampaigns(campaigns) {
  const listEl = document.getElementById('bd-list');
  if (!campaigns.length) {
    listEl.innerHTML = '<div style="text-align:center;padding:48px;color:#9CA3AF;font-size:13px;">No campaigns match this filter.</div>';
    return;
  }
  const statusMeta = {
    healthy:   { border:'var(--green)' },
    attention: { border:'var(--amber)' },
    urgent:    { border:'var(--red)'   },
    setup:     { border:'var(--gray-border)' }
  };
  const badgeMeta = {
    healthy:   { bg:'#DCFCE7', color:'#15803D', dot:'var(--green)'       },
    attention: { bg:'#FEF9C3', color:'#A16207', dot:'var(--amber)'       },
    urgent:    { bg:'#FEE2E2', color:'#B91C1C', dot:'var(--red)'         },
    setup:     { bg:'var(--gray-light)', color:'#6B7280', dot:'var(--gray-border)' }
  };

  // Render as a 3-column card grid for active/draft, list for ended
  const liveDraft = campaigns.filter(c => c.status === 'live' || c.status === 'draft' || c.status === 'setup');
  const ended = campaigns.filter(c => c.status === 'ended');

  const cardHTML = c => {
    const sm = statusMeta[c.healthClass] || statusMeta.setup;
    const bm = badgeMeta[c.healthClass] || badgeMeta.setup;
    const isLive = c.status === 'live';
    const barPct = c.pacing;
    const barColor = barPct > 85 ? 'var(--amber)' : barPct > 0 ? 'var(--cyan)' : 'var(--gray-border)';
    const cpumColor = c.cpum && c.cpum !== '—' ? (parseFloat(c.cpum.replace('$','')) < 2.5 ? 'var(--green)' : 'var(--amber)') : '#9CA3AF';
    const liftColor = c.lift && c.lift !== '—' ? 'var(--green)' : '#9CA3AF';

    const ctaBtn = isLive
      ? `<button class="btn btn-primary" style="font-size:11px;padding:5px 12px;" onclick="event.stopPropagation();showScreen('campaign-detail')">View Campaign</button>`
      : c.status === 'setup'
      ? `<button class="btn btn-secondary" style="font-size:11px;padding:5px 12px;">Review Setup</button>`
      : `<button class="btn btn-secondary" style="font-size:11px;padding:5px 12px;">Edit Draft</button>`;

    const liveTag = isLive
      ? `<div class="livelift-badge" style="font-size:10px;padding:4px 10px;"><div class="ll-dot"></div>LiveLift™</div>`
      : '';

    return `
      <div class="campaign-card ${c.healthClass}" data-status="${c.status}"
           style="border-left-color:${sm.border};"
           ${isLive ? `onclick="showScreen('campaign-detail')"` : ''}>
        <div class="card-top">
          <div class="card-header">
            <div>
              <div style="font-size:13px;font-weight:700;color:var(--black);margin-bottom:3px;">${c.name}</div>
              <div style="font-size:11px;color:#9CA3AF;">${c.id} &nbsp;·&nbsp; ${c.startDate}–${c.endDate}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0;">
              <span style="background:${bm.bg};color:${bm.color};font-size:10px;font-weight:600;padding:3px 8px;border-radius:100px;display:flex;align-items:center;gap:4px;white-space:nowrap;">
                <span style="width:5px;height:5px;border-radius:50%;background:${bm.dot};flex-shrink:0;"></span>${c.health}
              </span>
              ${isLive ? liveTag : ''}
            </div>
          </div>
          <div class="metrics-row" style="grid-template-columns:repeat(3,1fr);margin-top:10px;">
            <div class="metric-item">
              <div class="metric-label">CPUM</div>
              <div class="metric-value" style="font-size:14px;color:${cpumColor};">${c.cpum}</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Incr. Lift</div>
              <div class="metric-value" style="font-size:14px;color:${liftColor};">${c.lift}</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Budget Used</div>
              <div class="metric-value" style="font-size:14px;color:var(--black);">${c.pacing > 0 ? c.pacing+'%' : '—'}</div>
            </div>
          </div>
          ${isLive || c.status === 'setup' ? `
          <div class="budget-bar-wrap">
            <div class="budget-bar-header">
              <span>${c.spent !== '—' ? c.spent : '$0'} of ${c.budget}</span>
              <span>${c.daysLeft || ''}</span>
            </div>
            <div class="budget-bar-track"><div class="budget-bar-fill" style="width:${barPct}%;background:${barColor};"></div></div>
          </div>` : ''}
        </div>
        <div class="card-footer">
          <div class="flight-info">${c.startDate} – ${c.endDate}</div>
          <div class="card-actions">${ctaBtn}</div>
        </div>
      </div>`;
  };

  const endedRowHTML = c => {
    const bm = badgeMeta[c.healthClass] || badgeMeta.setup;
    return `
      <div class="bd-campaign-row" data-status="${c.status}"
           style="display:flex;align-items:center;background:white;border:1px solid var(--gray-border);border-radius:10px;padding:12px 16px;gap:16px;margin-bottom:8px;opacity:0.8;">
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:600;color:var(--black);">${c.name}</div>
          <div style="font-size:11px;color:#9CA3AF;margin-top:2px;">${c.id} &nbsp;·&nbsp; ${c.startDate} – ${c.endDate}</div>
        </div>
        <div style="display:flex;gap:24px;flex-shrink:0;">
          <div><div style="font-size:10px;color:#9CA3AF;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Final CPUM</div><div style="font-size:13px;font-weight:700;color:var(--black);margin-top:2px;">${c.cpum}</div></div>
          <div><div style="font-size:10px;color:#9CA3AF;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Lift</div><div style="font-size:13px;font-weight:700;color:var(--green);margin-top:2px;">${c.lift}</div></div>
          <div><div style="font-size:10px;color:#9CA3AF;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Spend</div><div style="font-size:13px;font-weight:700;color:var(--black);margin-top:2px;">${c.spent}</div></div>
        </div>
        <button class="btn btn-secondary" style="font-size:11px;padding:5px 12px;flex-shrink:0;">View Report</button>
      </div>`;
  };

  let html = '';
  if (liveDraft.length) {
    html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:${ended.length ? '28px' : '0'};">`;
    html += liveDraft.map(cardHTML).join('');
    html += '</div>';
  }
  if (ended.length) {
    html += `<div style="margin-bottom:8px;font-size:13px;font-weight:600;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;padding-top:${liveDraft.length?'0':'0'};">Past Campaigns</div>`;
    html += ended.map(endedRowHTML).join('');
  }
  listEl.innerHTML = html;
}

function filterBrandCampaigns(status, tab) {
  document.querySelectorAll('#bdFilterTabs .filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const brand = brandData[currentBrandKey];
  if (!brand) return;
  const filtered = status === 'all' ? brand.campaigns : brand.campaigns.filter(c => {
    if (status === 'live') return c.status === 'live' || c.status === 'setup';
    return c.status === status;
  });
  renderBrandCampaigns(filtered);
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');

  // Update nav active state — match by data-screen attribute
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.screen === name);
  });
}

// ── Campaign operations ─────────────────────────────────
let campaignPaused = false;

function pauseCampaign(btn) {
  campaignPaused = !campaignPaused;
  const badge = document.querySelector('#screen-campaign-detail .status-badge');
  const liveliftBadge = document.querySelector('.livelift-badge');
  if (campaignPaused) {
    // Switch to paused state
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Resume Campaign`;
    btn.style.color = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    if (badge) { badge.className = 'status-badge setup'; badge.innerHTML = '<div class="dot"></div>Paused'; }
    if (liveliftBadge) { liveliftBadge.style.opacity = '0.4'; liveliftBadge.querySelector('.ll-dot').style.animationPlayState = 'paused'; }
  } else {
    // Restore to live state
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
      Pause Campaign`;
    btn.style.color = '';
    btn.style.borderColor = '';
    if (badge) { badge.className = 'status-badge healthy'; badge.innerHTML = '<div class="dot"></div>Outperforming'; }
    if (liveliftBadge) { liveliftBadge.style.opacity = ''; liveliftBadge.querySelector('.ll-dot').style.animationPlayState = ''; }
  }
}

function copyCampaign() {
  const toast = document.createElement('div');
  toast.textContent = 'New campaign created: "LiveLift Q2 Pilot — Copy" · Opens in draft mode';
  toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function editDailyCap() {
  const current = '20000';
  const val = window.prompt('Set daily spend cap for this campaign:\n\nCurrent cap: $20,000/day\nLeave blank to remove cap.', current);
  if (val === null) return; // cancelled
  const num = parseFloat(val.replace(/[$,]/g, ''));
  if (!isNaN(num) && num > 0) {
    const toast = document.createElement('div');
    toast.textContent = `Daily cap updated to $${num.toLocaleString()}/day · Takes effect immediately`;
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  } else if (val.trim() === '') {
    const toast = document.createElement('div');
    toast.textContent = 'Daily cap removed · Campaign will spend to total budget without restriction';
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
}

function deleteCampaign() {
  const confirmed = window.confirm('Delete "LiveLift Q2 Pilot"?\n\nThis will remove the campaign and all associated configuration. Performance data and reports are retained. This action cannot be undone.');
  if (confirmed) {
    const toast = document.createElement('div');
    toast.textContent = '"LiveLift Q2 Pilot" deleted · Performance reports retained';
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:var(--red);color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);white-space:nowrap;';
    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); showScreen('am-portfolio'); }, 2500);
  }
}

// Queue filter tabs
function filterQueue(priority, tab) {
  document.querySelectorAll('.queue-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const items = document.querySelectorAll('.queue-item');
  items.forEach(item => {
    if (priority === 'all') {
      item.style.display = 'flex';
    } else {
      item.style.display = item.dataset.priority === priority ? 'flex' : 'none';
    }
  });
}

// Portfolio filter tabs
function filterPortfolio(status, clickedTab) {
  // Update active tab
  document.querySelectorAll('#portfolioFilterTabs .filter-tab').forEach(t => t.classList.remove('active'));
  clickedTab.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('#portfolioGrid .campaign-card').forEach(card => {
    const cardStatus = card.dataset.status;
    let show = false;
    if (status === 'all') {
      show = true;
    } else if (status === 'healthy') {
      show = cardStatus === 'healthy';
    } else if (status === 'attention') {
      show = cardStatus === 'attention' || cardStatus === 'urgent';
    } else if (status === 'ending-soon') {
      show = cardStatus === 'ending-soon';
    }
    card.style.display = show ? '' : 'none';
  });
}

// ── LiveLift Chart (Screen 3) ────────────────────────────
let liftChart = null;

function initLiveChart() {
  if (liftChart) return; // already initialized
  const ctx = document.getElementById('liveliftChart').getContext('2d');

  const labels = ['Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11\n(Today)','Apr 12','Apr 13','Apr 14','Apr 15'];
  const exposed = [104, 109, 108, 113, 118, 122, 124, null, null, null, null];
  const control = [100, 100, 100, 101, 100, 101, 100, 100, 100, 100, 100];
  const projected = [null, null, null, null, null, null, 124, 125, 126, 127, 126];

  // Shaded fill between exposed and control
  liftChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Exposed Group',
          data: exposed,
          borderColor: '#40D1F5',
          backgroundColor: 'rgba(64,209,245,0.12)',
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#40D1F5',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          tension: 0.4,
          fill: 1,
          spanGaps: false,
        },
        {
          label: 'Control Group',
          data: control,
          borderColor: '#D1D5DB',
          borderDash: [5, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0.4,
          fill: false,
          backgroundColor: 'transparent',
        },
        {
          label: 'Projected',
          data: projected,
          borderColor: '#40D1F5',
          borderDash: [4, 3],
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0.4,
          fill: false,
          backgroundColor: 'transparent',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1C1F24',
          titleColor: '#9CA3AF',
          bodyColor: '#FFFFFF',
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(ctx) {
              if (ctx.dataset.label === 'Control Group') return ' Control: ' + ctx.raw + ' (index)';
              if (ctx.dataset.label === 'Projected') return ctx.raw ? ' Projected: ' + ctx.raw + ' (index)' : null;
              if (ctx.raw === null) return null;
              const lift = ctx.raw - 100;
              return ' Exposed: ' + ctx.raw + ' → +' + lift + '% lift';
            }
          }
        },
        annotation: {
          annotations: {
            todayLine: {
              type: 'line',
              xMin: 6,
              xMax: 6,
              borderColor: 'rgba(237,37,100,0.4)',
              borderWidth: 1.5,
              borderDash: [3, 3],
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: { font: { size: 11, family: 'Inter' }, color: '#9CA3AF' }
        },
        y: {
          min: 95,
          max: 135,
          grid: { color: 'rgba(0,0,0,0.04)' },
          ticks: {
            font: { size: 11, family: 'Inter' }, color: '#9CA3AF',
            callback: val => val === 100 ? 'Baseline' : '+' + (val - 100) + '%'
          }
        }
      }
    }
  });
}

// ── Date Range Filter ────────────────────────────────────
const rangeData = {
  today: {
    labels: ['8am','10am','12pm','2pm','4pm','6pm','8pm'],
    exposed: [120, 121, 123, 124, 125, 123, 124],
    control: [100, 100, 101, 100, 100, 101, 100],
    projected: [null,null,null,null,null,null,null],
    todayIdx: null,
    stats: { avg:'+23.1%', peak:'4pm · +25%', proj:'N/A', range:'Today · Apr 11' }
  },
  '7d': {
    labels: ['Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11\n(Today)'],
    exposed: [104, 109, 108, 113, 118, 122, 124],
    control: [100, 100, 100, 101, 100, 101, 100],
    projected: [null,null,null,null,null,null,null],
    todayIdx: 6,
    stats: { avg:'+19.4%', peak:'Apr 10 · +25%', proj:'+21% ± 2pts', range:'Last 7 Days · Apr 5–11' }
  },
  optimization: {
    labels: ['Apr 9\n(Reallocation)', 'Apr 10', 'Apr 11\n(Today)'],
    exposed: [118, 122, 124],
    control: [100, 101, 100],
    projected: [null, null, null],
    todayIdx: 2,
    stats: { avg:'+21.3%', peak:'Apr 11 · +24%', proj:'+22% ± 2pts', range:'Since Optimization · Apr 9–11' }
  },
  full: {
    labels: ['Apr 5','Apr 6','Apr 7','Apr 8','Apr 9','Apr 10','Apr 11\n(Today)','Apr 12','Apr 13','Apr 14','Apr 15'],
    exposed: [104, 109, 108, 113, 118, 122, 124, null, null, null, null],
    control: [100, 100, 100, 101, 100, 101, 100, 100, 100, 100, 100],
    projected: [null,null,null,null,null,null,124,125,126,127,126],
    todayIdx: 6,
    stats: { avg:'+19.4%', peak:'Apr 10 · +25%', proj:'+21% ± 2pts', range:'Full Flight · Apr 5–11' }
  }
};

// ── KPI Selector ─────────────────────────────────────────
let currentKPI = 'lift';

const kpiConfig = {
  lift: {
    title: 'Incremental Sales Lift · In-Flight',
    sub: 'Matched Audiences methodology · Exposed vs. Control · Updated every 4 hours',
    yLabel: val => val === 100 ? 'Baseline' : '+' + (val-100) + '%',
    yMin: 95, yMax: 135,
    showControl: true,
    showProjected: true,
    color: '#40D1F5',
    fill: true,
    datasets: {
      full:         { exposed:[104,109,108,113,118,122,124,null,null,null,null], control:[100,100,100,101,100,101,100,100,100,100,100], projected:[null,null,null,null,null,null,124,125,126,127,126] },
      '7d':         { exposed:[104,109,108,113,118,122,124], control:[100,100,100,101,100,101,100], projected:[null,null,null,null,null,null,null] },
      today:        { exposed:[120,121,123,124,125,123,124], control:[100,100,101,100,100,101,100], projected:[null,null,null,null,null,null,null] },
      optimization: { exposed:[118,122,124], control:[100,101,100], projected:[null,null,null] }
    },
    stats: {
      full:{ avg:'+19.4%', peak:'Apr 10 · +25%', proj:'+21% ± 2pts' },
      '7d':{ avg:'+19.4%', peak:'Apr 10 · +25%', proj:'+21% ± 2pts' },
      today:{ avg:'+23.1%', peak:'4pm · +25%', proj:'N/A' },
      optimization:{ avg:'+21.3%', peak:'Apr 11 · +24%', proj:'+22% ± 2pts' }
    },
    statLabels: ['Avg Daily Lift', 'Peak', 'Projected End Lift']
  },
  cpum: {
    title: 'CPUM by Day · Cost Per Unit Moved',
    sub: 'Blended across all active publishers · Lower is better',
    yLabel: val => '$' + val.toFixed(2),
    yMin: 1.0, yMax: 3.5,
    showControl: false,
    showProjected: true,
    color: '#ED2564',
    fill: false,
    datasets: {
      full:         { exposed:[2.40,2.28,2.31,2.10,1.95,1.87,1.84,null,null,null,null], control:[], projected:[null,null,null,null,null,null,1.84,1.81,1.79,1.78,1.77] },
      '7d':         { exposed:[2.40,2.28,2.31,2.10,1.95,1.87,1.84], control:[], projected:[] },
      today:        { exposed:[1.91,1.88,1.86,1.84,1.83,1.85,1.84], control:[], projected:[] },
      optimization: { exposed:[1.95,1.87,1.84], control:[], projected:[] }
    },
    stats: {
      full:{ avg:'$1.84', peak:'Apr 5 · $2.40', proj:'$1.77 projected' },
      '7d':{ avg:'$2.08', peak:'Apr 5 · $2.40', proj:'—' },
      today:{ avg:'$1.86', peak:'8am · $1.91', proj:'—' },
      optimization:{ avg:'$1.89', peak:'Apr 9 · $1.95', proj:'$1.77 projected' }
    },
    statLabels: ['Avg CPUM', 'Highest Day', 'Projected End CPUM']
  },
  units: {
    title: 'Daily Incremental Units Moved',
    sub: 'Incremental units attributed to campaign · Excludes baseline purchases',
    yLabel: val => val >= 1000 ? (val/1000).toFixed(0)+'K' : val,
    yMin: 0, yMax: 20000,
    showControl: false,
    showProjected: true,
    color: '#22C55E',
    fill: true,
    datasets: {
      full:         { exposed:[8200,12400,11800,14600,16200,17400,18634,null,null,null,null], control:[], projected:[null,null,null,null,null,null,18634,18900,19100,19300,19200] },
      '7d':         { exposed:[8200,12400,11800,14600,16200,17400,18634], control:[], projected:[] },
      today:        { exposed:[2100,2800,2900,2950,3100,2800,2984], control:[], projected:[] },
      optimization: { exposed:[16200,17400,18634], control:[], projected:[] }
    },
    stats: {
      full:{ avg:'12.7K / day', peak:'Apr 11 · 18.6K', proj:'~19.2K / day' },
      '7d':{ avg:'12.7K / day', peak:'Apr 11 · 18.6K', proj:'—' },
      today:{ avg:'2.8K / hr', peak:'4pm · 3.1K', proj:'~19K today' },
      optimization:{ avg:'17.4K / day', peak:'Apr 11 · 18.6K', proj:'~19.2K / day' }
    },
    statLabels: ['Avg Daily Units', 'Peak Day', 'Projected Run Rate']
  },
  spend: {
    title: 'Daily Spend vs. Pacing Target',
    sub: 'Actual daily spend (bars) vs. ideal pacing trajectory · Budget: $180K total',
    yLabel: val => '$' + (val/1000).toFixed(0)+'K',
    yMin: 0, yMax: 25000,
    showControl: false,
    showProjected: true,
    color: '#F59E0B',
    fill: false,
    datasets: {
      full:         { exposed:[13200,15400,14800,16200,17100,18200,19100,null,null,null,null], control:[], projected:[null,null,null,null,null,null,19100,18000,18000,18000,18000] },
      '7d':         { exposed:[13200,15400,14800,16200,17100,18200,19100], control:[], projected:[] },
      today:        { exposed:[2400,2600,2800,2900,3100,2800,3000], control:[], projected:[] },
      optimization: { exposed:[17100,18200,19100], control:[], projected:[] }
    },
    stats: {
      full:{ avg:'$15.6K / day', peak:'Apr 11 · $19.1K', proj:'On pace ✓' },
      '7d':{ avg:'$16.3K / day', peak:'Apr 11 · $19.1K', proj:'On pace ✓' },
      today:{ avg:'$2.8K / hr', peak:'4pm · $3.1K', proj:'On pace ✓' },
      optimization:{ avg:'$18.1K / day', peak:'Apr 11 · $19.1K', proj:'On pace ✓' }
    },
    statLabels: ['Avg Daily Spend', 'Peak Day', 'Budget Status']
  },
  ntb: {
    title: 'New-to-Brand Rate · Daily',
    sub: 'Share of buyers who had not purchased Liquid Death in prior 6 months',
    yLabel: val => val + '%',
    yMin: 0, yMax: 60,
    showControl: false,
    showProjected: false,
    color: '#7C3AED',
    fill: true,
    datasets: {
      full:         { exposed:[28,31,29,33,35,36,34,null,null,null,null], control:[], projected:[] },
      '7d':         { exposed:[28,31,29,33,35,36,34], control:[], projected:[] },
      today:        { exposed:[32,33,34,34,35,33,34], control:[], projected:[] },
      optimization: { exposed:[35,36,34], control:[], projected:[] }
    },
    stats: {
      full:{ avg:'32.3%', peak:'Apr 10 · 36%', proj:'+8pts vs cat. avg' },
      '7d':{ avg:'32.3%', peak:'Apr 10 · 36%', proj:'+8pts vs cat. avg' },
      today:{ avg:'33.6%', peak:'4pm · 35%', proj:'+8pts vs cat. avg' },
      optimization:{ avg:'35%', peak:'Apr 10 · 36%', proj:'+8pts vs cat. avg' }
    },
    statLabels: ['Avg NTB Rate', 'Peak Day', 'vs. Category']
  }
};

let currentRange = 'full';

// ── Chart KPI selector ──────────────────────────────────
function setKPI(kpi, clickedPill) {
  currentKPI = kpi;
  // Scope to chart pill row only
  document.querySelectorAll('#chartKpiPills .kpi-pill')
    .forEach(p => p.classList.remove('active'));
  clickedPill.classList.add('active');
  applyChartState(currentRange);
}

// ── Table sorting ───────────────────────────────────────
const tableColMeta = {
  cpum:   { colIdx: 1, defaultAsc: true  },
  cpid:   { colIdx: 2, defaultAsc: true  },
  lift:   { colIdx: 3, defaultAsc: false },
  units:  { colIdx: 4, defaultAsc: false },
  budget: { colIdx: 5, defaultAsc: false }
};
// Tracks current sort state
let tableSortCol = 'cpum';
let tableSortAsc = true;

// Core sort function — called by both pill clicks and header clicks
function applyTableSort(col, asc) {
  tableSortCol = col;
  tableSortAsc = asc;
  const meta = tableColMeta[col];
  if (!meta) return;

  // Update header arrows and sorted class
  document.querySelectorAll('#retailerTable th[data-col]').forEach(th => {
    th.classList.remove('sorted');
    const base = th.dataset.col;
    const labels = { cpum:'CPUM', cpid:'CPID', lift:'Lift %', units:'Units Moved', budget:'Budget Used' };
    th.textContent = labels[base] || th.textContent;
  });
  const sortedTh = document.getElementById('th-' + col);
  if (sortedTh) {
    sortedTh.classList.add('sorted');
    sortedTh.textContent += asc ? ' ↑' : ' ↓';
  }

  // Sort rows (total row stays pinned at bottom)
  const tbody = document.querySelector('#retailerTable tbody');
  const totalRow = tbody.querySelector('.total-row');
  const rows = [...tbody.querySelectorAll('tr:not(.total-row)')];
  rows.sort((a, b) => {
    const av = parseFloat(a.dataset[col]);
    const bv = parseFloat(b.dataset[col]);
    return asc ? av - bv : bv - av;
  });
  rows.forEach(r => tbody.insertBefore(r, totalRow));

  // Subtitle
  const dirLabel = asc ? '↑ ascending' : '↓ descending';
  const colNames = { cpum:'CPUM', cpid:'CPID', lift:'Lift %', units:'Units Moved', budget:'Budget Used' };
  const subEl = document.getElementById('tableKpiSub');
  if (subEl) subEl.textContent = `Sorted by ${colNames[col]} · ${dirLabel} · Click column headers to re-sort`;

  // Column highlight
  document.querySelectorAll('#retailerTable tbody tr:not(.total-row)').forEach(row => {
    row.querySelectorAll('td').forEach((td, i) => {
      td.style.background = (i === meta.colIdx) ? 'rgba(237,37,100,0.04)' : '';
    });
  });
}

// Called by the pill row — switches column, resets to default direction
function setTableKPI(col, clickedPill) {
  document.querySelectorAll('#tableKpiPills .kpi-pill').forEach(p => p.classList.remove('active'));
  clickedPill.classList.add('active');
  const asc = tableColMeta[col] ? tableColMeta[col].defaultAsc : true;
  applyTableSort(col, asc);
}

// Called by header clicks — same column toggles direction, new column uses default
function sortTableByCol(col) {
  const asc = (col === tableSortCol) ? !tableSortAsc : tableColMeta[col].defaultAsc;
  // Sync the pill selection
  document.querySelectorAll('#tableKpiPills .kpi-pill').forEach(p => {
    const pillCol = p.getAttribute('onclick').match(/'(\w+)'/)?.[1];
    p.classList.toggle('active', pillCol === col);
  });
  applyTableSort(col, asc);
}

function setDateRange(range, clickedPill) {
  currentRange = range;
  // Update date pill active states
  if (clickedPill) {
    document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
    clickedPill.classList.add('active');
  }
  // Show/hide optimization note
  document.getElementById('optimizationNote').style.display = range === 'optimization' ? 'flex' : 'none';
  applyChartState(range);
}

function applyChartState(range) {
  const kpi = kpiConfig[currentKPI];
  const labels = rangeData[range] ? rangeData[range].labels : rangeData['full'].labels;
  const kpiDataset = kpi.datasets[range] || kpi.datasets['full'];
  const stats = kpi.stats[range] || kpi.stats['full'];
  const rangeLabel = rangeData[range] ? rangeData[range].stats.range : 'Full Flight';

  if (liftChart) {
    liftChart.data.labels = labels;
    // Dataset 0 — main metric line
    liftChart.data.datasets[0].data = kpiDataset.exposed;
    liftChart.data.datasets[0].borderColor = kpi.color;
    liftChart.data.datasets[0].backgroundColor = kpi.fill ? hexToRgba(kpi.color, 0.12) : 'transparent';
    liftChart.data.datasets[0].fill = kpi.fill ? 1 : false;
    // Dataset 1 — control group (hide if not applicable)
    liftChart.data.datasets[1].data = kpi.showControl ? (kpiDataset.control || []) : [];
    liftChart.data.datasets[1].borderColor = kpi.showControl ? '#D1D5DB' : 'transparent';
    // Dataset 2 — projected
    liftChart.data.datasets[2].data = kpi.showProjected ? (kpiDataset.projected || []) : [];
    liftChart.data.datasets[2].borderColor = kpi.showProjected ? kpi.color : 'transparent';
    // Y axis
    liftChart.options.scales.y.min = kpi.yMin;
    liftChart.options.scales.y.max = kpi.yMax;
    liftChart.options.scales.y.ticks.callback = kpi.yLabel;
    liftChart.update('active');
  }

  // Update chart title + subtitle
  const titleEl = document.querySelector('#screen-campaign-detail .chart-card-title');
  const subEl = document.querySelector('#screen-campaign-detail .chart-card-sub');
  if (titleEl) titleEl.textContent = kpi.title;
  if (subEl) subEl.textContent = kpi.sub;

  // Update summary stats
  document.getElementById('statAvgLift').textContent = stats.avg;
  document.getElementById('statPeak').textContent = stats.peak;
  document.getElementById('statProjected').textContent = stats.proj;
  document.getElementById('statProjected').style.color =
    (stats.proj === 'N/A' || stats.proj === '—') ? '#9CA3AF' : 'var(--green)';
  document.getElementById('statRange').textContent = rangeLabel;

  // Update stat labels
  const statLabels = document.querySelectorAll('#screen-campaign-detail .chart-card .chart-wrap ~ div > div > div:first-child');
  if (statLabels.length >= 3 && kpi.statLabels) {
    statLabels[0].textContent = kpi.statLabels[0];
    statLabels[1].textContent = kpi.statLabels[1];
    statLabels[2].textContent = kpi.statLabels[2];
  }

  // Update retailer table subtitle
  const tableSub = document.querySelector('#screen-campaign-detail .chart-card:last-of-type .chart-card-sub');
  if (tableSub) tableSub.textContent = 'CPUM sorted ascending · ' + rangeLabel;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function buildCustomRange() {
  const from = document.getElementById('dateFrom').value;
  const to = document.getElementById('dateTo').value;
  // Clear pill active states for custom
  document.querySelectorAll('.date-pill').forEach(p => p.classList.remove('active'));
  // Return a simplified view — same shape as 7d but labelled custom
  const d = JSON.parse(JSON.stringify(rangeData['7d']));
  d.stats.range = 'Custom · ' + formatDate(from) + ' – ' + formatDate(to);
  return d;
}

function formatDate(iso) {
  const [,m,day] = iso.split('-');
  const months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[parseInt(m)] + ' ' + parseInt(day);
}

// Initialize chart when Screen 3 becomes visible
const origShowScreen = showScreen;
window.showScreen = function(name) {
  origShowScreen(name);
  if (name === 'campaign-detail') {
    setTimeout(initLiveChart, 50);
  }
};
