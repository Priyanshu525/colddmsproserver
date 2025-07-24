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

// Campaign, account, and lead data (initialized from log.txt)
const campaignId = 'lhSmGHk3lU8IURMDzuY4';
const accountId = 'gola_d7828f9e';
const displayName = 'gola';
const campaignName = 'gogi';
const campaignDescription = 'gogi';
const campaignVariants = [
  { message: 'Hello ji 1' },
  { message: 'Hello ji 2' },
  { message: 'Hello ji 3' },
  { message: 'Hello ji 4' },
  { message: 'Hello ji 5' }
];
const campaignPlatform = 'instagram';
const campaignCreatedAt = 1753384425694;
const campaignTag = 'gogi';
const campaignWorkingHours = { start: 0, end: 24 };
const campaignMessageLimits = { min: 35, max: 41 };
const campaignStatus = 'ready';
const campaignLeadsCount = 315;
const campaignAutoLikeStory = true;
const campaignAutoLikeNewestPost = true;
const campaignFollowUser = true;
const campaignTotalLeads = 315;
const campaignAllLeads = `leo.copywriter
giuliosicoli
vivienne.benitz
tommymcdermottcomedy
matt.rogers.7140497
wikimami.ro
ryan.bahra
themooneyanomaly
faith_with_joaquin
chris_watson15
itzmediatv
playlearnhire
marketingwithsohaibgull
freddyp_adventure_alive
christianb.23
dimitrismagki
ayoosh5554
thasinvest
godshealinglove1
matthewjohns0n
vabene46
gramofjmdk4
st.sreekanth
jacober4
carzandplaces
akmal.akmal0v
dutchvulcano
afzal7156
shuilanmay
vippuljaju
lydiaahannna
ankit_valmiki_5128
clepagamnduki
bshilly
ross.adina97
iamabbarry
_bhagyashree_2035
jairoczamora
mwasuka_general_eletrical
sisko917
chuecop
marc.verderol
jordantaylorparsons
waselabeautycenter
neil.mcmillan
student_umang91
angeltothestars
barbaranoland
georgeapgar
jlliilly
munozi1
sumit_d_08
cindywho22
schlendrjan
klausbaer
_lucero.delarosa
lachmc
rozena_bryan
urbanpraan
hafeez.najma
malikbasem7
collin_cottrell
xasiyevv020
chandlerjerrico
tyty221
vividly.lauren
snfizan
essien5642
thejoshschmidt
varrano
baomagic
moises_gurdian
uda.sayuri
caiofbn
nathannewberryofficial
sergi_b_dahl
ben1749
vikeccbrah17
aw.highley
carolemcmath
vishwalpatel
kamiryann
ergun.nuri
ntengo_b.mhlambi_iii
lushwindowsdoors
raghu_ns_
kathleensanders1342
josuelugo27
charlottebenzing
vjmeena0103
leahbantigue
edmundronald
dr_v_ravishankar
official_kunalarora
bugragrbz
thephiliphill
ahmed_faisal743
barteltsue
billnziku
donomarrrrrr
adriannaelenna
heatheraaronmarketing
iamlix001
gabi.asher.7
inoutconceptsme
elite_therapy_and_bodyworks
shane_sinko
niinovates
wanli2051
ghamamr
stanzinxo
ravagethegame
docdiamonds
lizabensimon
sheikhkhalidsaifullah1
justin_del_monte
sibasankarbehera____
ndr_drg
ashman_12ashid
3retts
mychimunoe
roo_bee__rubi
nicholettev3
raja_bitspilani
iris.sshhh
opulentemporium8
etshamhug
sarakalangi
milena.lsa
hadi_sirika_news
avtandil_sanikidze
kim31white
avivabojko
elizabeth.singh
maar_maade
biancagonzzz
pianobypreet
wealthmalawi
sexyblack10
mark__alen
alekhshahofficial
maggiehollis
shettimahaliru_
nadaa_2496
geezghot
wheel_man_dex
dermot.ogrady1
decioprata
julietcira
guylemmer
afterallproductions
doc.pai
iamajalatunde
michaelogunmola
erenysisi
jovana_giovi
cosmobrownb
nngoniwe
officialnickh
kennethkgeorge
avodha_job_oriented_programmes
murattoons
vinayyadav7847
khalid_ali211
cayserasera
tagzal
ya__dwi
kherven_codes
angelitahernandezarias
soy_moeh.jp
hammaad077
sagelanbalasiri.realtor
fitlabnutrition_nc
mariapeko10
browcrush.studio
iprathikpoojary
sasilogan
ronyy_moraless
sirhsuah
alicia_lende
vivoligbo
shadower71
kyng_aries
kingghenora
perryhan
mongitshabalala
lucia_scholtz
arguelloats
dali_lassioued
prinsel_purpleworld
glenda6239
thabi_makeup_styles
marty.moloney1
faran_izhar
prashantprs
ilyes.kourdes
reitererit
_.soma._b_
oceanbig23
castro_jr.ng
mcfatboycfr
dabuce
douaa_lemjid
abdoo_121_
ayatbadreldein
jkkxbbp
haresh_sree
nombuso_empress_zuma
fit_pak
rubenzfrederic
braisavo
dkgerk
jodeearndt
his_vessel._
skdesign_z
markbstanding
katz6o18gg3
_dr.uppalapati_
mariina.btt
blissfulbeautybyangie
novabloominnovate
morrisnduwayo
grigoreiuliancristea
dahh_reall
firozpaul77
katy.king45
m_k2002_
royal_movement.07
kplus05
pankaj_kasvala
maria_dl_hernandez
alivanumer
julieth.alzateg
mariaabdo0
joelson_pj
theblackjonnydepp
fayemartinezlopez
rosimeireoliveira452
mrs_amy_investment.trader
444_ju.lia
mehtakandarp01
williamslytina
mohanperichetla
phoebesaad
dion_dapping
surya._.reddy1
ashcabb
maitriu
marketersam
breezzy007
dondigital215
thenameiskamran
ahsanperformancemarketer
natty_m_silassie
chef_onig_ladiv
ahmede23306
gopivigneshm
a.a_nike
okiterajoseph
dominikspirit
civilengasmaa
gabriela.n.k
jaydennoahlouis
urs.truly_ankit
evolve.corporation
psygency
madamelaurieg
sonof003
ithriveee
danielnrs__
amberbuckley96
mohammedfahmi_
jonny_stam
tinaarena7
abu_warith.aw
ibra_aldaoud
zmx700e
rakan.sleem
brains.ai
fida.raoufy
smruti1504
chuksemmaii
mari1ena_mo
eusoujoaopaulosilva
lisadipietrosmith
dellinger.jeannie
cmarks731
ranchwriterjenny
divine_grace_2158
dr_malili
ssamuel2213
miracsvemirac
nificreed_art
ayesha_tariq_922
sierramarie1979
thematthommel
onlyverseinc
rajians15
will.hellings
noah_wasylyshyn
kolak.walter
sinan.ah
artificialintelligence2040
salty_beauty_
delanc.aye
prolific_gp
harshal.dhabarde
zaiddkitt
ocaioseixas
cayde963
sarav_nan
thehealingeffect.dana
juliette.brushstrokes
_ammar_.khan
enkornu`;

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
    name: 'Sangita',
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
    messageLimitsMax: 41,
    remainingMessages: 41 - messagesSentToday,
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
