const address = "0x09Ea60Fd4D1feAe3Eb0E070F2e6a221cE9bA1202";
const keystore = `{"address":"09ea60fd4d1feae3eb0e070f2e6a221ce9ba1202","crypto":{"cipher":"aes-128-ctr","ciphertext":"b3a2f7a38bcbf434f7133c6deff16c2181ce944d4016a63b26d873f9fc6ae0c4","cipherparams":{"iv":"75d6faa411546657f7141f5a1952ea76"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"b8e503e5d0a1fdb766bf540dd4bedde5230d6624c73cb1b3ffcfc0e358e3e29a"},"mac":"04f50e07e8a21973ff732903338f678c5d92b307b96882b6a68e5171d5e7a323"},"id":"3fb95f05-ad69-40bc-9d06-dbe6bf7c1b34","version":3}`;


const address1 = `0x0A549402005e01C7292fEdc768514b3c67509344`;
const keystore1 = `{"address":"0a549402005e01c7292fedc768514b3c67509344","crypto":{"cipher":"aes-128-ctr","ciphertext":"f6eb322167c0ecbd7c7a262b6907cc31e34252847f339a7dd2318149d60ba66c","cipherparams":{"iv":"cef60710e4d6527417370f84f670d083"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"0ad1bfcafb3b879cca9b9c142368757c142dd260c482fd946838444c17f486f8"},"mac":"2ba0d1c4b0bb26b50431919516d20cf65577280dd6ccb6dae48bd8e06f84d80f"},"id":"7c249f76-57a3-41a6-8bcf-6521a19e1952","version":3}`



//// 启动本地ETH 区块链的节点服务 
//命令： geth --dev --http --http.api "web3,eth,net,personal,miner" --networkid 1234 console
