require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stove cruise noise concert harvest indoor equal giant'; 
let testAccounts = [
"0xb824f81b8a49cb30e7c370528b90275d6d69c0840271283c87a4fabe72ac7055",
"0xba00574904bf723a1afbd96463ba33e4494be238a20ce33bcb20d389923f5ac2",
"0x421d480fcdfbdea366fb224b3a09cbf5174efc1882e17518bb2eb31b61c8bb17",
"0xaad0cf28c9a837b90d0cd07e64492c2346785b470049479f3b9087d501197aa4",
"0x6574a12065bd352abf2451d5bc499f44ce0d04d006191c0c03391d9944f4d2fc",
"0x5944f31fb345dd0486d1d811fa42e560a76229d6dc6c492cafc51bac64cc5450",
"0x9148c213e01bcf404469bf89bf19504ad11f3ec17096cb12299099191780b19e",
"0xefcf1a900a2adb1a9ba0fdb68c461eda507b74d43e357ebfd77e3b75ae496bac",
"0x883b1016db8912c06967ea8601792e3a7ff6d001bc0dad8222a8ac12646e2dd3",
"0x82127d32c6aaf7a8815c56c05ba88f0159ee5ca520e38d1a04928a3d3fcef583"
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
            version: '^0.8.0'
        }
    }
};

