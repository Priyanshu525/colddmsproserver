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

// In-memory data stores
let campaigns = [
  {
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
  }
];
let accounts = [
  {
    accountId: 'golumolu_c36f7c19',
    displayName: 'Golumolu',
    createdAt: Date.now(),
    lastUpdated: { _seconds: Math.floor(Date.now()/1000), _nanoseconds: 0 },
    campaignId: '4xDCDZoV82xsDze6RC5s',
    status: 'active',
    pendingLeadsCount: 67
  }
];
let leads = [
  // Example leads, can be expanded
  {
    id: 'CVDINxFu4qriNWZoDMKw',
    username: 'madankandula',
    sent: false,
    baseDate: Date.now(),
    lastReassignedAt: { _seconds: Math.floor(Date.now()/1000), _nanoseconds: 0 },
    assignedAt: { _seconds: Math.floor(Date.now()/1000), _nanoseconds: 0 },
    assignedAccount: 'golumolu_c36f7c19',
    status: 'ready',
    followUps: [],
    type: 'initial',
    baseDateTimestamp: Date.now()
  }
];

// Middleware: check for jwt_token cookie
app.use((req, res, next) => {
  if (!req.cookies.jwt_token) {
    return res.status(401).json({ success: false, message: 'Missing jwt_token' });
  }
  next();
});

// GET /api/v1/campaign/
app.get('/api/v1/campaign/', (req, res) => {
  res.json({ success: true, campaigns });
});

// GET /api/v1/campaign/account-status
app.get('/api/v1/campaign/account-status', (req, res) => {
  const { widgetID } = req.query;
  const account = accounts.find(a => a.accountId === widgetID);
  if (!account) {
    return res.json({ success: false, message: 'Account not found' });
  }
  res.json({ success: true, account });
});

// POST /api/v1/campaign/start
app.post('/api/v1/campaign/start', (req, res) => {
  const { campaignID } = req.query;
  const { displayName, widgetId } = req.body;
  let account = accounts.find(a => a.accountId === widgetId);
  if (!account) {
    account = {
      accountId: widgetId,
      displayName,
      createdAt: Date.now(),
      lastUpdated: { _seconds: Math.floor(Date.now()/1000), _nanoseconds: 0 },
      campaignId: campaignID,
      status: 'active',
      pendingLeadsCount: 67
    };
    accounts.push(account);
  } else {
    account.status = 'active';
    account.campaignId = campaignID;
    account.displayName = displayName;
    account.lastUpdated = { _seconds: Math.floor(Date.now()/1000), _nanoseconds: 0 };
  }
  res.json({ success: true, message: 'Campaign started, account created/reused. Lead assignment will proceed in the background.', accountId: widgetId });
});

// GET /api/v1/campaign/campaign-status
app.get('/api/v1/campaign/campaign-status', (req, res) => {
  const { campaignID } = req.query;
  const campaign = campaigns.find(c => c.id === campaignID);
  if (!campaign) {
    return res.json({ success: false, message: 'Campaign not found' });
  }
  res.json({ success: true, campaign });
});

// GET /api/v1/campaign/fetch-leads
app.get('/api/v1/campaign/fetch-leads', (req, res) => {
  const { campaignID, accountId } = req.query;
  const batchLeads = leads.filter(l => l.assignedAccount === accountId);
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
  const { campaignID, leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (!lead) {
    return res.json({ success: false, message: 'Lead not found' });
  }
  res.json({ success: true, lead });
});

// PUT /api/v1/campaign/set-lead-status
app.put('/api/v1/campaign/set-lead-status', (req, res) => {
  const { campaignID, leadID } = req.query;
  const lead = leads.find(l => l.id === leadID);
  if (lead) {
    lead.status = 'sent';
  }
  res.json({ success: true });
});

// POST /api/v1/campaign/analytics
app.post('/api/v1/campaign/analytics', (req, res) => {
  // Accepts analytics data, just return success
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock colddmspro API server running on port ${PORT}`);
}); 