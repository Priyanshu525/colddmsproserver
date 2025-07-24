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

// Realistic /api/v1/campaign response
const campaignResponse = {
  "name": "HD_Media",
  "isSubscribed": true,
  "campaigns": [
    {
      "description": "tefs",
      "variants": [
        { "message": "hello 1" },
        { "message": "hello 2" },
        { "message": "hello 3" },
        { "message": "hello 4" },
        { "message": "hello 5" }
      ],
      "platform": "instagram",
      "autoLikeNewestPost": true,
      "followUser": true,
      "totalLeads": 87,
      "autoLikeStory": true,
      "name": "testa",
      "tag": "testa",
      "workingHours": { "start": 0, "end": 24 },
      "createdAt": 1753368108706,
      "allLeads": "jsmrdck\nthe.shavin\nrandyjrichards\nsardarmosin\nnicolas_the_kitty\nharsus7\nmidhu140\ncheryl.bell.792\nsutton.remi\njay.sukumaran\nnobodycaresdee\namritjena_\nlicaonz\nmenamanmishra\nallanjhone.com.br\nlumina_by_victoria\nmr_jonasemily\niamkatiebryan\nluca.piccinotti\nmadankandula\nryanjeffreycruz\nmonshor\nagyassine_\neasierwitharda\njacobweiss\ndannyliewkc\ndamien_charbit\nnaomi.rila\njamesngww\ndrlieselholler\nitsritiqs\ngrietjiedupreez0\njoemaloshthatguy\nveghda317\nsafeeera_ashraf\natelierkatsb\nliset0109\nfadykhalife\nsheikh.khawar.qayyum\ndadaba_shadyvic0931\nhis_june\nv_vaek_7\nalbakras_music\nmadhan_thesteelbird\nlleex.xii\nnextgenwealthandinsurance\ndori.lmt\nann.borchers\nnathannunesy\nmatiascov.s\nmisscharmaine01\nely_gold\ndeano12341\n1.apha\ndorseybyers\nkipsons\nthe_copy_alchemist\nbharwani.rohit\n_productsandservices\nashokrsaini\nlake.wendy\nivy091909\nmusalesakshi9\nhaidarsalman15\nasifthekkc\nyousafzai__777\nwhoisshahalam\nthe_spiritual_soul_7\nmariamaher_official\n_vivek_saikia\nmoonstream.io\nheymuhammadali\ntoptonmedia\nsamuelmurphy_\n_g.o.b.e\nbenlopezarch\nbrooklyngfit_sg\npizzleainteasy\nbabssexton\nbetotamez\nadamantiumm\nabbas_michael_traore\nlejohndary1\nsoymarcelgarcia\nchetan_mishra_0095\nscorpio23_1969\ntejalforia\n\n",
      "messageLimits": { "min": 35, "max": 43 },
      "lastUpdated": { "_seconds": 1753368909, "_nanoseconds": 23000000 },
      "status": "active",
      "unassignedLeadsCount": -86,
      "id": "4xDCDZoV82xsDze6RC5s",
      "leads": [],
      "leadsCount": 50
    },
    {
      "description": "trading",
      "allLeads": "nagpalgalaxy\nfrank_w4\nliawyeefai77\nthom.nb.sparks\njsmrdck\nthe.shavin\nrandyjrichards\nsardarmosin\nnicolas_the_kitty\nharsus7\nmidhu140\ncheryl.bell.792\nsutton.remi\njay.sukumaran\nnobodycaresdee\namritjena_\nlicaonz\nmenamanmishra\nallanjhone.com.br\nlumina_by_victoria\nmr_jonasemily\niamkatiebryan\nluca.piccinotti\nmadankandula\nryanjeffreycruz\nmonshor\nagyassine_\neasierwitharda\njacobweiss\ndannyliewkc\ndamien_charbit\nnaomi.rila\njamesngww\ndrlieselholler\nitsritiqs\ngrietjiedupreez0\njoemaloshthatguy\nveghda317\nsafeeera_ashraf\natelierkatsb\nliset0109\nfadykhalife\nsheikh.khawar.qayyum\ndadaba_shadyvic0931\nhis_june\nv_vaek_7\nalbakras_music\nmadhan_thesteelbird\nlleex.xii\nnextgenwealthandinsurance\ndori.lmt\nann.borchers\nnathannunesy\nmatiascov.s\nmisscharmaine01\nely_gold\ndeano12341\n1.apha\ndorseybyers\nkipsons\nthe_copy_alchemist\nbharwani.rohit\n_productsandservices\nashokrsaini\nlake.wendy\nivy091909\nmusalesakshi9\nhaidarsalman15\nasifthekkc\nyousafzai__777",
      "variants": [
        { "message": "Hey {firstname}, How are you?" },
        { "message": "Hey {firstname}, How are you2?" },
        { "message": "Hey {firstname}, How are you3?" },
        { "message": "Hey {firstname}, How are you4?" },
        { "message": "Hey {firstname}, How are you5?" }
      ],
      "platform": "instagram",
      "autoLikeNewestPost": true,
      "createdAt": 1753352131837,
      "followUser": true,
      "totalLeads": 70,
      "autoLikeStory": true,
      "name": "testing",
      "tag": "traders",
      "workingHours": { "start": 6, "end": 21 },
      "messageLimits": { "min": 16, "max": 29 },
      "lastUpdated": { "_seconds": 1753368766, "_nanoseconds": 845000000 },
      "status": "paused",
      "unassignedLeadsCount": 0,
      "id": "NHDdzb5U2gafgQfqJ7pV",
      "leads": [],
      "leadsCount": 70
    },
    {
      "description": "gsknfd",
      "allLeads": "wesjadams\nukhernandez13\ntraderaziel\nMussnerEmma\nSnookbitQ\nScottyDont05\ndanjpatterson\nDurdenMaster\nAminuUdubo\nnassorsf\nQoocee5108\nHazimMusa2",
      "variants": [
        { "message": "Hey {firstName}, How you doing?" },
        { "message": "Yo {firstName}, Are you working on trading right now?" },
        { "message": "How are you broo?" },
        { "message": "Kaise ho bhai ?" },
        { "message": "Sbh  bhadiya?" }
      ],
      "platform": "twitter",
      "autoLikeNewestPost": false,
      "createdAt": 1752853481884,
      "followUser": true,
      "totalLeads": 12,
      "autoLikeStory": false,
      "name": "Golumolu",
      "tag": "agency",
      "workingHours": { "start": 8, "end": 18 },
      "messageLimits": { "min": 405, "max": 450 },
      "status": "active",
      "lastUpdated": { "_seconds": 1753203920, "_nanoseconds": 227000000 },
      "id": "ppMyUzBUmQqBn6u9ELAA",
      "leads": [],
      "leadsCount": 12
    }
  ]
};

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

// /api/v1/campaign endpoint
app.get('/api/v1/campaign', (req, res) => {
  res.json(campaignResponse);
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
