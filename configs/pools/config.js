/*
 *
 * Example (Litecoin + Dogecoin)
 *
 */

// Litecoin + Dogecoin Configuration File
// https://blinkhash.com/docs/foundation/configurations
// Consult the above link if you have any questions

// Main Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Litecoin-Dogecoin';
config.coins = ['Litecoin', 'Dogecoin'];

// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = 3333;
ports1.enabled = true;
ports1.type = 'solo';
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = 50000;
ports1.difficulty.minimum = 50000;
ports1.difficulty.maximum = 50000;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);

// P2P Configuration
config.p2p = {};
config.p2p.enabled = true;
config.p2p.host = '127.0.0.1';
config.p2p.port = 9333;

// Statistics Configuration
config.statistics = {};
config.statistics.hashrateInterval = 20;    // s
config.statistics.historicalInterval = 1800; // s
config.statistics.refreshInterval = 20;      // s
config.statistics.paymentsInterval = 20;     // s
config.statistics.hashrateWindow = 300;      // s
config.statistics.historicalWindow = 86400;  // s
config.statistics.paymentsWindow = 604800;   // s

// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;      // ms
config.settings.connectionTimeout = 600;          // s
config.settings.jobRebroadcastTimeout = 300;      // s
config.settings.tcpProxyProtocol = false;

// Primary Configuration
////////////////////////////////////////////////////////////////////////////////

// Miscellaneous Configuration
config.primary = {};
config.primary.address = 'LYFgHg3XLwn3vorRxTJ7RfuXhbqWry2qV1';

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Litecoin';
config.primary.coin.symbol = 'LTC';
config.primary.coin.asicboost = false;
config.primary.coin.getinfo = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.mweb = true;
config.primary.coin.staking = false;
config.primary.coin.rewards = {};
config.primary.coin.rewards.type = 'solo';
config.primary.coin.rewards.addresses = ['LYFgHg3XLwn3vorRxTJ7RfuXhbqWry2qV1'];
config.primary.coin.version = 1;

// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'scrypt';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';

// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'ltc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public  = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic       = 'fbc0b6db';
config.primary.coin.mainnet.pubKeyHash      = Buffer.from('30', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash      = Buffer.from('32', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif             = Buffer.from('b0', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin            = 'ltc';

// Testnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = 'tltc';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public  = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic       = 'fcc1b7dc';
config.primary.coin.testnet.pubKeyHash      = Buffer.from('6F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash      = Buffer.from('3A', 'hex').readUInt8(0);
config.primary.coin.testnet.wif             = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin            = 'ltc';

// Daemon Configuration
config.primary.daemons = [];
const daemons1 = {};
daemons1.host     = '127.0.0.1';
daemons1.port     = 9332;
daemons1.username = 'litecoin';
daemons1.password = 'kctwU11SFGYCBgJZc77Kc2DbyuBF5bvZ';
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled         = true;
config.primary.payments.checkInterval   = 20;   // s
config.primary.payments.paymentInterval = 7200; // s
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment       = 0.005;
config.primary.payments.transactionFee   = 0.004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host     = '127.0.0.1';
config.primary.payments.daemon.port     = 9332;
config.primary.payments.daemon.username = 'litecoin';
config.primary.payments.daemon.password = 'kctwU11SFGYCBgJZc77Kc2DbyuBF5bvZ';

// Recipients Configuration
config.primary.recipients = [];

// Auxiliary Configuration
////////////////////////////////////////////////////////////////////////////////
config.auxiliary = {};
config.auxiliary.enabled = true;

config.auxiliary.coin = {};
config.auxiliary.coin.name   = 'Dogecoin';
config.auxiliary.coin.symbol = 'DOGE';
config.auxiliary.coin.header = 'fabe6d6d';

// Daemon Configuration
config.auxiliary.daemons = [];
const auxDaemons1 = {};
auxDaemons1.host     = '127.0.0.1';
auxDaemons1.port     = 22555;
auxDaemons1.username = 'doge';
auxDaemons1.password = 'kctwU11SFGYCBgJZc77Kc2DbyuBF5bvZ';
config.auxiliary.daemons.push(auxDaemons1);

// Auxiliary Payments Configuration
config.auxiliary.payments = {};
config.auxiliary.payments.enabled         = true;
config.auxiliary.payments.checkInterval   = 20;
config.auxiliary.payments.paymentInterval = 3600;
config.auxiliary.payments.minConfirmations = 10;
config.auxiliary.payments.minPayment       = 100;
config.auxiliary.payments.transactionFee   = 0.04;
config.auxiliary.payments.daemon = {};
config.auxiliary.payments.daemon.host     = '127.0.0.1';
config.auxiliary.payments.daemon.port     = 22555;
config.auxiliary.payments.daemon.username = 'doge';
config.auxiliary.payments.daemon.password = 'kctwU11SFGYCBgJZc77Kc2DbyuBF5bvZ';

// Recipients Configuration
config.auxiliary.recipients = [];
const auxRecipient1 = {};
auxRecipient1.address = 'DQw9MhSDyXd6G6hTeFpHtMDocuRU89QkX2';
auxRecipient1.percentage = 0; // 0 to 1
config.auxiliary.recipients.push(auxRecipient1);

// Export Configuration
module.exports = config;
