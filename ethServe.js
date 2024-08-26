import Web3 from "web3";
import express from "express";
import { ethers } from "ethers";
const app = express();
app.use(express.json());
const port = 8543;

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

class HttpResponse {
  constructor(status = 200, data = null, message = "") {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}

app.get("/balance/:address", async (req, res) => {
  const response = new HttpResponse();
  try {
    const balance = await web3.eth.getBalance(req.params.address);
    response.data = {
      balance: web3.utils.fromWei(balance, "ether"),
      address: req.params.address,
      network: web3.eth.net.getId(),
    };
    response.message = "查询成功";
    res.send(response);
  } catch (e) {
    response.status = 500;
    response.message = e.message;
    response.data = null;
    res.send(response);
  }
});

app.post("/balance/transfer/accounts", async (req, res) => {
  const keystore = req.body.keystore;
  const toAddress = req.body.toAddress;
  const value = req.body.value;
  const gas = req.body.gas;
  const password = req.body.password;
  const fromAddress = req.body.fromAddress;
  const response = new HttpResponse();
  try {
    const nonce = await web3.eth.getTransactionCount(fromAddress);
    const tx = {
      from: fromAddress,
      to: toAddress,
      value: web3.utils.toWei(value, "ether"),
      gas: gas,
      nonce,
      gasPrice: web3.utils.toWei('50', 'gwei'), //
    };

    const wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
    const privateKey = wallet.privateKey;
    const signed = await web3.eth.accounts.signTransaction(tx, privateKey);
    web3.eth
      .sendSignedTransaction(signed.rawTransaction)
      .on("receipt", console.log);
    response.status = 200;
    response.message = "交易发送成功";
    res.send(response);
  } catch (e) {
    console.log(e, "999");
    response.status = 500;
    response.message = "交易失败";
    res.send(response);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
