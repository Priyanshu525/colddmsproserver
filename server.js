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
