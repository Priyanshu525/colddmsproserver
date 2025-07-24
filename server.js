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

// --- CAMPAIGN, ACCOUNT, AND LEAD DATA ---

const campaigns = [
  {
    description: "tefs",
    variants: [
      { message: "hello 1" },
      { message: "hello 2" },
      { message: "hello 3" },
      { message: "hello 4" },
      { message: "hello 5" }
    ],
    platform: "instagram",
    autoLikeNewestPost: true,
    followUser: true,
    totalLeads: 87,
    autoLikeStory: true,
    name: "testa",
    tag: "testa",
    workingHours: { start: 0, end: 24 },
    createdAt: 1753368108706,
    allLeads: `jsmrdck\nthe.shavin\nrandyjrichards\nsardarmosin\nnicolas_the_kitty\nharsus7\nmidhu140\ncheryl.bell.792\nsutton.remi\njay.sukumaran\nnobodycaresdee\namritjena_\nlicaonz\nmenamanmishra\nallanjhone.com.br\nlumina_by_victoria\nmr_jonasemily\niamkatiebryan\nluca.piccinotti\nmadankandula\nryanjeffreycruz\nmonshor\nagyassine_\neasierwitharda\njacobweiss\ndannyliewkc\ndamien_charbit\nnaomi.rila\njamesngww\ndrlieselholler\nitsritiqs\ngrietjiedupreez0\njoemaloshthatguy\nveghda317\nsafeeera_ashraf\natelierkatsb\nliset0109\nfadykhalife\nsheikh.khawar.qayyum\ndadaba_shadyvic0931\nhis_june\nv_vaek_7\nalbakras_music\nmadhan_thesteelbird\nlleex.xii\nnextgenwealthandinsurance\ndori.lmt\nann.borchers\nnathannunesy\nmatiascov.s\nmisscharmaine01\nely_gold\ndeano12341\n1.apha\ndorseybyers\nkipsons\nthe_copy_alchemist\nbharwani.rohit\n_productsandservices\nashokrsaini\nlake.wendy\nivy091909\nmusalesakshi9\nhaidarsalman15\nasifthekkc\nyousafzai__777\nwhoisshahalam\nthe_spiritual_soul_7\nmariamaher_official\n_vivek_saikia\nmoonstream.io\nheymuhammadali\ntoptonmedia\nsamuelmurphy_\n_g.o.b.e\nbenlopezarch\nbrooklyngfit_sg\npizzleainteasy\nbabssexton\nbetotamez\nadamantiumm\nabbas_michael_traore\nlejohndary1\nsoymarcelgarcia\nchetan_mishra_0095\nscorpio23_1969\ntejalforia\n`,
    messageLimits: { min: 35, max: 43 },
    lastUpdated: { _seconds: 1753368909, _nanoseconds: 23000000 },
    status: "active",
    unassignedLeadsCount: -86,
    id: "4xDCDZoV82xsDze6RC5s",
    leads: [],
    leadsCount: 50
  }
];

// In-memory account (simplified for demo)
const account = {
  accountId: 'golumolu_c36f7c19',
  displayName: 'Golumolu',
  createdAt: Date.now(),
  lastUpdated: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 935000000 },
  campaignId: campaigns[0].id,
  status: 'active',
  pendingLeadsCount: 67
};

// In-memory leads (parsed from allLeads)
let leads = campaigns[0].allLeads
  .split('\n')
  .filter(Boolean)
  .map((username, i) => ({
    id: `lead${i + 1}`,
    username,
    sent: false,
    baseDate: Date.now() - (100000 * (i + 1)),
    lastReassignedAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    assignedAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    assignedAccount: account.accountId,
    status: 'ready',
    followUps: [],
    type: 'initial',
    baseDateTimestamp: Date.now() - (100000 * (i + 1))
  }));

// --- ENDPOINTS ---

// /api/v1/campaign
app.get('/api/v1/campaign', (req, res) => {
  res.json({
    name: "HD_Media",
    isSubscribed: true,
    campaigns
  });
});

// /api/v1/campaign/account-status
app.get('/api/v1/campaign/account-status', (req, res) => {
  res.json({ success: true, account });
});

// /api/v1/campaign/start
app.post('/api/v1/campaign/start', (req, res) => {
  res.json({
    success: true,
    message: 'Campaign started, account created/reused. Lead assignment will proceed in the background.',
    accountId: account.accountId
  });
});

// /api/v1/campaign/campaign-status
app.get('/api/v1/campaign/campaign-status', (req, res) => {
  res.json({ success: true, campaign: campaigns[0] });
});

// /api/v1/campaign/fetch-leads
app.get('/api/v1/campaign/fetch-leads', (req, res) => {
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

// /api/v1/campaign/fetch-lead
app.get('/api/v1/campaign/fetch-lead', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (!lead) return res.json({ success: false, message: 'Lead not found' });
  res.json({ success: true, lead });
});

// /api/v1/campaign/set-lead-status
app.put('/api/v1/campaign/set-lead-status', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (lead) {
    lead.status = 'sent';
    lead.sent = true;
  }
  res.json({ success: true });
});

// /api/v1/campaign/analytics
app.post('/api/v1/campaign/analytics', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock colddmspro API server running on port ${PORT}`);
}); 
