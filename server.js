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

// --- In-memory stateful data based on new response structure ---

// Campaign, account, and lead data (updated to match the provided response)
const campaignId = 'ppMyUzBUmQqBn6u9ELAA';
const accountId = 'gola_d7828f9e';
const displayName = 'gola';
const campaignName = 'Golumolu';
const campaignDescription = 'gsknfd';
const campaignVariants = [
  { message: 'Hey {firstName}, How you doing?' },
  { message: 'Yo {firstName}, Are you working on trading right now?' },
  { message: 'How are you broo?' },
  { message: 'Kaise ho bhai ?' },
  { message: 'Sbh  bhadiya?' }
];
const campaignPlatform = 'twitter';
const campaignCreatedAt = 1752853481884;
const campaignTag = 'agency';
const campaignWorkingHours = { start: 8, end: 18 };
const campaignMessageLimits = { min: 405, max: 450 };
const campaignStatus = 'ready';
const campaignLeadsCount = 12;
const campaignAutoLikeStory = false;
const campaignAutoLikeNewestPost = false;
const campaignFollowUser = true;
const campaignTotalLeads = 12;
const campaignAllLeads = `wesjadams
ukhernandez13
traderaziel
MussnerEmma
SnookbitQ
ScottyDont05
danjpatterson
DurdenMaster
AminuUdubo
nassorsf
Qoocee5108
HazimMusa2`;

// Helper to generate leads array from allLeads string
function generateLeads(allLeadsStr) {
  return allLeadsStr.trim().split('\n').map((username, idx) => ({
    id: Math.random().toString(36).substr(2, 20), // random 20-char id
    username,
    sent: false,
    baseDate: campaignCreatedAt + idx * 1000,
    assignedAt: { _seconds: Math.floor((campaignCreatedAt + idx * 1000) / 1000), _nanoseconds: 335000000 },
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

// GET /api/v1/campaign
app.get('/api/v1/campaign', (req, res) => {
  res.json({
    name: "HD_Media",
    isSubscribed: true,
    campaigns: [
      {
        description: campaignDescription,
        allLeads: campaignAllLeads,
        variants: campaignVariants,
        platform: campaignPlatform,
        autoLikeNewestPost: campaignAutoLikeNewestPost,
        createdAt: campaignCreatedAt,
        followUser: campaignFollowUser,
        totalLeads: campaignTotalLeads,
        autoLikeStory: campaignAutoLikeStory,
        name: campaignName,
        tag: campaignTag,
        workingHours: campaignWorkingHours,
        messageLimits: campaignMessageLimits,
        status: campaignStatus,
        id: campaignId,
        leads: [],
        leadsCount: campaignLeadsCount
      }
    ]
  });
});

// POST /api/v1/campaign/start
app.post('/api/v1/campaign/start', (req, res) => {
  res.json({
    success: true,
    message: 'Campaign started, account created/reused. Lead assignment will proceed in the background.',
    accountId: accountId
  });
});

// GET /api/v1/campaign/account-status
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

// GET /api/v1/campaign/campaign-status
app.get('/api/v1/campaign/campaign-status', (req, res) => {
  res.json({
    success: true,
    campaign: {
      platform: campaignPlatform,
      status: 'active',
      followUser: campaignFollowUser,
      name: campaignName,
      description: campaignDescription,
      variants: campaignVariants,
      id: campaignId,
      withinWorkingHours: true,
      autoLikeStory: campaignAutoLikeStory,
      autoLikeNewestPost: campaignAutoLikeNewestPost
    }
  });
});

// GET /api/v1/campaign/fetch-leads
app.get('/api/v1/campaign/fetch-leads', (req, res) => {
  // Return the next batch of 8 unsent leads
  const batch = leads.filter(l => !l.sent).slice(0, 8);
  console.log('Returning batch of leads:', batch.map(l => l.username));
  res.json({
    success: true,
    leads: batch,
    batchSize: 8,
    messagesSentToday,
    messagesAllowedByNow: 31,
    messageLimitsMax: 450,
    remainingMessages: 450 - messagesSentToday,
    progressThroughWorkDay: '64%',
    currentTimeET: '15:22',
    dateFormatted: '24-07-2025'
  });
});

// GET /api/v1/campaign/fetch-lead
app.get('/api/v1/campaign/fetch-lead', (req, res) => {
  const { leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' });
  res.json({ success: true, lead });
});

// PUT /api/v1/campaign/set-lead-status
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

// POST /api/v1/campaign/analytics
app.post('/api/v1/campaign/analytics', (req, res) => {
  // Accepts analytics data, always returns success
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock colddmspro API server running on port ${PORT}`);
}); 
