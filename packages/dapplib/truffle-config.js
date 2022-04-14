require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rate pizza erosion hope kangaroo army genuine'; 
let testAccounts = [
"0x95282359711520e39e5d2aed8e77a340ad82314e1d8253303e35b6ce5f203874",
"0x90ade79e399fd4a32926cb8d0f6e5eb382f2ce25c887aba01818ed439f511117",
"0x98bb9eb234b774b19d6dcd3423e404f41d7abe94763ff2ea5f8a6898d0167f44",
"0xe6d6003cc213d95af7706121890325287ba8d92294183e3fea1f0675352fb096",
"0x22817dd28dbf23203be09e942849ce657503366300c0dac72d54a718d4c29b73",
"0xad62851fc66cdefbf2cc3507ce13dfe9529cd1c489cc0c414466a56cf56e6f5f",
"0xd71ace634f00d6f6279db8e4ab23043ae5e4e25a050bf249caad9a0d41057696",
"0x1fc28722a833b3a5263120d8505e1e42edc667463a7dbf94806b09eda1567a05",
"0x505dae4b8eaef270a3679524568cfcdb3e7cce250dd63d9599504169f35cec37",
"0xfde429171d02a26d19fb0297cc766f79a48d117a01591195a0271b9ccc24dbc0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


