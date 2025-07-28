// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: /chrome-extension:\/\/.*/,
  credentials: true
}));

// --- In-memory stateful data based on log.txt ---

const campaignId = 'lhSmGHk3lU8IURMDzuY4';
const accountId = 'gola_d7828f9e';
const displayName = 'gola';
const campaignCreatedAt = 1753384425694;

const campaignAllLeads = `leo.copywriter
giuliosicoli
vivienne.benitz
tommymcdermottcomedy
matt.rogers.7140497
wikimami.ro
...`; // (truncate for brevity or keep full)

function generateLeads(allLeadsStr) {
  return allLeadsStr.trim().split('\n').map((username, idx) => ({
    id: Math.random().toString(36).substr(2, 20),
    username,
    sent: false,
    baseDate: campaignCreatedAt + idx * 1000,
    assignedAt: {
      _seconds: Math.floor((campaignCreatedAt + idx * 1000) / 1000),
      _nanoseconds: 335000000
    },
    assignedAccount: accountId,
    status: 'ready',
    followUps: [],
    type: 'initial',
    baseDateTimestamp: campaignCreatedAt + idx * 1000
  }));
}

let leads = generateLeads(campaignAllLeads);
let messagesSentToday = 0;
let pendingLeadsCount = leads.length;

// --- Endpoints ---

// ✅ Custom first-request response here
app.get('/api/v1/campaign', (req, res) => {
  res.json({
    name: 'HD_Media',
    isSubscribed: true,
    campaigns: [
      {
        description: 'gsknfd',
        allLeads: 'wesjadams\nukhernandez13\ntraderaziel\nMussnerEmma\nSnookbitQ\nScottyDont05\ndanjpatterson\nDurdenMaster\nAminuUdubo\nnassorsf\nQoocee5108\nHazimMusa2',
        variants: [
          { message: 'Hey {firstName}, How you doing?' },
          { message: 'Yo {firstName}, Are you working on trading right now?' },
          { message: 'How are you broo?' },
          { message: 'Kaise ho bhai ?' },
          { message: 'Sbh  bhadiya?' }
        ],
        platform: 'twitter',
        autoLikeNewestPost: false,
        createdAt: 1752853481884,
        followUser: true,
        totalLeads: 12,
        autoLikeStory: false,
        name: 'Golumolu',
        tag: 'agency',
        workingHours: { start: 8, end: 18 },
        messageLimits: { min: 405, max: 450 },
        status: 'ready',
        id: 'ppMyUzBUmQqBn6u9ELAA',
        leads: [],
        leadsCount: 12
      }
    ]
  });
});

app.post('/api/v1/campaign/start', (req, res) => {
  res.json({
    success: true,
    message: 'Campaign started, account created/reused. Lead assignment will proceed in the background.',
    accountId: accountId
  });
});

app.get('/api/v1/campaign/account-status', (req, res) => {
  res.json({
    success: true,
    account: {
      accountId: accountId,
      displayName: displayName,
      status: 'active',
      createdAt: 1753384631746,
      campaignId: campaignId,
      lastUpdated: { _seconds: 1753384631, _nanoseconds: 774000000 },
      pendingLeadsCount
    }
  });
});

app.get('/api/v1/campaign/campaign-status', (req, res) => {
  res.json({
    success: true,
    campaign: {
      platform: 'instagram',
      status: 'active',
      followUser: true,
      name: 'gogi',
      description: 'gogi',
      variants: [
        { message: 'Hello ji 1' },
        { message: 'Hello ji 2' },
        { message: 'Hello ji 3' },
        { message: 'Hello ji 4' },
        { message: 'Hello ji 5' }
      ],
      id: campaignId,
      withinWorkingHours: true,
      autoLikeStory: true,
      autoLikeNewestPost: true
    }
  });
});

app.get('/api/v1/campaign/fetch-leads', (req, res) => {
  const batch = leads.filter(l => !l.sent).slice(0, 8);
  console.log('Returning batch of leads:', batch.map(l => l.username));
  res.json({
    success: true,
    leads: batch,
    batchSize: 8,
    messagesSentToday,
    messagesAllowedByNow: 31,
    messageLimitsMax: 41,
    remainingMessages: 41 - messagesSentToday,
    progressThroughWorkDay: '64%',
    currentTimeET: '15:22',
    dateFormatted: '24-07-2025'
  });
});

app.get('/api/v1/campaign/fetch-lead', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
  res.json({ success: true, lead });
});

app.put('/api/v1/campaign/set-lead-status', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (lead && !lead.sent) {
    lead.sent = true;
    lead.status = 'sent';
    messagesSentToday++;
    pendingLeadsCount--;
    console.log(`Lead marked as sent: ${lead.username} (${lead.id})`);
  }
  res.json({ success: true });
});

app.post('/api/v1/campaign/analytics', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock colddmspro API server running on port ${PORT}`);
});
