// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: /chrome-extension:\/\/.*/, // Allow Chrome extensions
  credentials: true
}));

// Sample campaign and account data (from your logs)
const campaign = {
  id: '4xDCDZoV82xsDze6RC5s',
  platform: 'instagram',
  status: 'active',
  followUser: true,
  name: 'testa',
  description: 'tefs',
  variants: [
    { message: 'hello 1' },
    { message: 'hello 2' },
    { message: 'hello 3' },
    { message: 'hello 4' },
    { message: 'hello 5' }
  ],
  withinWorkingHours: true,
  autoLikeStory: true,
  autoLikeNewestPost: true
};

const account = {
  accountId: 'golumolu_c36f7c19',
  displayName: 'Golumolu',
  createdAt: Date.now(),
  lastUpdated: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 935000000 },
  campaignId: campaign.id,
  status: 'active',
  pendingLeadsCount: 67
};

// Provided usernames as leads
const usernames = [
  'nagpalgalaxy','frank_w4','liawyeefai77','thom.nb.sparks','jsmrdck','the.shavin','randyjrichards','sardarmosin','nicolas_the_kitty','harsus7','midhu140','cheryl.bell.792','sutton.remi','jay.sukumaran','nobodycaresdee','amritjena_','licaonz','menamanmishra','allanjhone.com.br','lumina_by_victoria','mr_jonasemily','iamkatiebryan','luca.piccinotti','madankandula','ryanjeffreycruz','monshor','agyassine_','easierwitharda','jacobweiss','dannyliewkc','damien_charbit','naomi.rila','jamesngww','drlieselholler','itsritiqs','grietjiedupreez0','joemaloshthatguy','veghda317','safeeera_ashraf','atelierkatsb','liset0109','fadykhalife','sheikh.khawar.qayyum','dadaba_shadyvic0931','his_june','v_vaek_7','albakras_music','madhan_thesteelbird','lleex.xii','nextgenwealthandinsurance','dori.lmt','ann.borchers','nathannunesy','matiascov.s','misscharmaine01','ely_gold','deano12341','1.apha','dorseybyers','kipsons','the_copy_alchemist','bharwani.rohit','_productsandservices','ashokrsaini','lake.wendy','ivy091909','musalesakshi9','haidarsalman15','asifthekkc','yousafzai__777','whoisshahalam','the_spiritual_soul_7','mariamaher_official','_vivek_saikia','moonstream.io','heymuhammadali','toptonmedia','samuelmurphy_','_g.o.b.e','benlopezarch','brooklyngfit_sg','pizzleainteasy','babssexton','betotamez','adamantiumm','abbas_michael_traore','lejohndary1','soymarcelgarcia','chetan_mishra_0095'
];

// Helper to generate a fake Firestore timestamp
function nowTS() {
  const now = Date.now();
  return {
    _seconds: Math.floor(now / 1000),
    _nanoseconds: Math.floor((now % 1000) * 1e6)
  };
}

// Generate leads with realistic data
let leads = usernames.map((username, i) => {
  const baseDate = Date.now() - (usernames.length - i) * 100000;
  return {
    id: Math.random().toString(36).substr(2, 20),
    username,
    sent: false,
    baseDate,
    lastReassignedAt: nowTS(),
    assignedAt: nowTS(),
    assignedAccount: account.accountId,
    status: 'ready',
    followUps: [],
    type: 'initial',
    baseDateTimestamp: baseDate
  };
});

// GET /api/v1/campaign/
app.get('/api/v1/campaign/', (req, res) => {
  res.json({ success: true, campaigns: [campaign] });
});

// GET /api/v1/campaign/account-status
app.get('/api/v1/campaign/account-status', (req, res) => {
  res.json({ success: true, account });
});

// POST /api/v1/campaign/start
app.post('/api/v1/campaign/start', (req, res) => {
  res.json({ success: true, message: 'Campaign started, account created/reused. Lead assignment will proceed in the background.', accountId: account.accountId });
});

// GET /api/v1/campaign/campaign-status
app.get('/api/v1/campaign/campaign-status', (req, res) => {
  res.json({ success: true, campaign });
});

// GET /api/v1/campaign/fetch-leads
app.get('/api/v1/campaign/fetch-leads', (req, res) => {
  // Only return leads that are not sent
  const batchLeads = leads.filter(l => !l.sent).slice(0, 8);
  res.json({
    success: true,
    leads: batchLeads,
    batchSize: batchLeads.length,
    messagesSentToday: 0,
    messagesAllowedByNow: 26,
    messageLimitsMax: 43,
    remainingMessages: 43,
    progressThroughWorkDay: '46%',
    currentTimeET: '11:00',
    dateFormatted: '24-07-2025'
  });
});

// GET /api/v1/campaign/fetch-lead
app.get('/api/v1/campaign/fetch-lead', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (!lead) return res.json({ success: false, message: 'Lead not found' });
  res.json({ success: true, lead });
});

// PUT /api/v1/campaign/set-lead-status
app.put('/api/v1/campaign/set-lead-status', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (lead) {
    lead.status = 'sent';
    lead.sent = true;
  }
  res.json({ success: true });
});

// POST /api/v1/campaign/analytics
app.post('/api/v1/campaign/analytics', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock colddmspro API server running on port ${PORT}`);
}); 
