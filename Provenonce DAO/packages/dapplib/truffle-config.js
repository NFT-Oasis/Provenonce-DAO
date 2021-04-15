require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy dash remain clump harvest define army general'; 
let testAccounts = [
"0x17ad29bd51a0768426830425cf8291163e68732be1b8c1d14faeaf7e0827574d",
"0xfdeda022d4fcd6123e5ddfb2a7f168d4cdc49d78b81519eb3512073c70a8a446",
"0x1c1088d57fc83dfa1b1c40b496e74832e2a2030bc262986fd4c261a04025f274",
"0xe45955ac8f39d7f6933e6fbcb97e32b9780455318986f60da0c356e4762d8fdc",
"0xd375b492a8eb970bf2c71d1b74b390598a97bd08467ccf0f0007bfc68a770249",
"0x4f8b668835b159983c356d80034b6a1be859a17236d90fe73e68cc5a47bd2aee",
"0x1683754094e2d4769501e564c580bd1b5d9f7cd9558e259c7a4d97f77fbb1825",
"0x8c420f924b993ceb74367cc2d9f0560864af37b0645a93506d0328546ae9ee05",
"0x5884f250b0a8ccc1ab6fdaeb09adb2f2a8e33a93d6b2af17bed696d6437ddaff",
"0xc01116c849ad076bed931a7ee76eccb02a8d3c35d2c154681f7ad89415949731"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
