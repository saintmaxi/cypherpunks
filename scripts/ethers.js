const contractAddress = "0x1C96E737e576de9d44DABE5751aFC86a91A25903";
const contractAbi = () => {
    const _abi = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldOwner_", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Received", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "Plasma", "outputs": [ { "internalType": "contract iPlasma", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "SSAddressToMints", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSMintsPerAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSTokenAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSTokenReceiver", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSTokensAvailable", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSTokensMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SSTokensPerMint", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMint", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_publicMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_satelliteMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_whitelistMintTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToEmergencyUnlocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToWLMinted", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyWithdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "isWhitelisted", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxMintsPerWL", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "mintPrice", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "tos_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "ownerMintMany", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceAddresses", "outputs": [ { "internalType": "address payable[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "payableGovernanceShares", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "plasmaAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "publicMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reouncePayableGovernancePermissions", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "resetPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "satelliteMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "satelliteMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "satelliteStationAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "uri_", "type": "string" } ], "name": "setBaseTokenURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "ext_", "type": "string" } ], "name": "setBaseTokenURI_EXT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes32", "name": "merkleRoot_", "type": "bytes32" } ], "name": "setMerkleRoot", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "mintPrice_", "type": "uint256" } ], "name": "setMintPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable[]", "name": "addresses_", "type": "address[]" }, { "internalType": "uint256[]", "name": "shares_", "type": "uint256[]" } ], "name": "setPayableGovernanceShareholders", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setPlasma", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setPublicMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setSatelliteMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "bool_", "type": "bool" }, { "internalType": "uint256", "name": "time_", "type": "uint256" } ], "name": "setWhitelisMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner_", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unlockEmergencyFunctionsAsShareholder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewWithdrawAmounts", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount_", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof_", "type": "bytes32[]" } ], "name": "whitelistMint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "whitelistMintStatus", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdrawEther", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]';    return _abi;
};

function multiply(x, y) {
  var prod = [];
  var i;
  for (i=0; i < x.length; i++) {
    prod[i] = x[i] * y[i];
  }
  return prod;
}


const getTxs = async function () {
  var address = await getAddress()
  var ethusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
  .then(response => {return response.json()})
  .catch(err => {
    console.log('(╯°□°)╯︵ ┻━┻', err);
  })
  ethusd = ethusd.ethereum.usd;
  console.log('ETHUSD: $' + ethusd);
  
  let key = "T9RV3FGW573WX9YX45F1Z89MEMEUNQXUC7"
  var u = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
  var response = await fetch(u)
  if (response.ok) { // if HTTP-status is 200-299
    var json = await response.json();
  } else {
    console.error("HTTP-Error: " + response.status);
  }
  var txs = json['result']
  var n = txs.length
  var from, txs2
  while (n===10000) {
    from = txs[txs.length - 1].blockNumber
    u = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${from}&endblock=99999999&sort=asc&apikey=${key}`
    response = await fetch(u)
    if (response.ok) { // if HTTP-status is 200-299
      json = await response.json();
    } else {
      console.log('¯\_(ツ)_/¯ : ' + response.status);
      break
    }
    txs2 = json['result']
    n = txs2.length
    txs.push.apply(txs, txs2)
  }
  let txsOut = $.grep(txs, function(v) {
    return v.from === address.toLowerCase();
  });
  txsOut = txsOut.map(({ confirmations, ...item }) => item);
  txsOut = new Set(txsOut.map(JSON.stringify));
  txsOut = Array.from(txsOut).map(JSON.parse);
  // remove duplicates
  //localStorage.setItem('txsOut', JSON.stringify(txsOut));
  console.log('All outgoing txs:', txsOut)
  
  var nOut = txsOut.length;
  var txsOutFail = $.grep(txsOut, function(v) {
    return v.isError === '1';
  });
  var nOutFail = txsOutFail.length;
  
  if (nOut > 0) {
    var gasUsed = txsOut.map(value => parseInt(value.gasUsed));
    var gasUsedTotal = gasUsed.reduce((partial_sum, a) => partial_sum + a,0); 
    var gasPrice = txsOut.map(value => parseInt(value.gasPrice));
    var gasPriceMin = Math.min(...gasPrice);
    var gasPriceMax = Math.max(...gasPrice);
    var gasFee = multiply(gasPrice, gasUsed)
    var gasFeeTotal = gasFee.reduce((partial_sum, a) => partial_sum + a,0); 
    var gasPriceTotal = gasPrice.reduce((partial_sum, a) => partial_sum + a,0);
    var gasUsedFail = txsOutFail.map(value => parseInt(value.gasUsed));
    var gasPriceFail = txsOutFail.map(value => parseInt(value.gasPrice));
    var gasFeeFail = multiply(gasPriceFail, gasUsedFail)
    var gasFeeTotalFail = gasFeeFail.reduce((partial_sum, a) => partial_sum + a,0); 
    return gasUsedTotal;
    
  } 
  return 0;
}


const merkleProofSourceUrl = "https://api.nonfungiblecdn.com/spaceyetis/merkleproofs";

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractAbi(), signer);
const connect = async () => {
    await provider.send("eth_requestAccounts", [])
};
const getAddress = async () => {
    return await signer.getAddress()
};
const formatEther = (balance_) => {
    return ethers.utils.formatEther(balance_)
};
const parseEther = (eth_) => {
    return ethers.utils.parseEther(eth_)
};
const getChainId = async () => {
    return await signer.getChainId()
};
const updateInfo = async () => {
    $("#account").text(`${(await getAddress()).substr(0,9)}..`);
    getMintAmount();
};

const getMerkleProof = async() => {
    const _senderAddress = await getAddress();
    const _proof = await fetch(`${merkleProofSourceUrl}/${_senderAddress}`).then(res => res.text());
    const _proofArray = _proof ? JSON.parse(_proof) : [];
    return _proofArray;
};

const isWhitelistOnly = async() => {
    return await contract.whitelistMintStatus();
}

const checkWhitelistStatus = async() => {
    const _merkleProof = await getMerkleProof();
    const addr = await getAddress();
    const _isWhitelisted = await contract.isWhitelisted(addr, _merkleProof).catch(err => console.log(err));
    console.log(_isWhitelisted);
    isWhitelistedVar = _isWhitelisted;
    $(".mint-button-containers").prop("hidden", _isWhitelisted ? false : true);
    $("#whitelisted").text(_isWhitelisted ? "Congratulations, you made the whitelist!" : "Sorry, You are not Whitelisted. Please wait for our public sale"); // this is jQuery code
    return _isWhitelisted;
    
};

const mintWhitelist = async() => {
    const whitelisted = checkWhitelistStatus();
    if(!whitelisted){
        window.alert("You are not whitelisted")
    }
    const _mintAmount = parseInt($("#mint-amount").val());
    const _merkleProof = await getMerkleProof();
    const _totalMintPrice = ethers.BigNumber.from("80000000000000000").mul(_mintAmount);
    const _gasLimit = await contract.estimateGas.whitelistMint(_mintAmount, _merkleProof, {value: _totalMintPrice})
    .catch( async(err_) => window.alert(err_));
    const _oldGasLimit = _gasLimit.toString();
    const _newGasLimit = parseInt((_gasLimit * 1.2)).toString();
        console.log({_oldGasLimit, _newGasLimit});
    
    await contract.whitelistMint(_mintAmount, _merkleProof, {value: _totalMintPrice, gasLimit: _newGasLimit})
    .then( async(tx_) => await waitForTransaction(tx_))
    .catch( async(err_) => window.alert(err_));
};

const mint = async () => {
    await mintWhitelist();
};
const C_ownerOf = async (Contract_, tokenId_) => {
    return new Promise(async (resolve, reject) => {
        const _ownerOf = await Contract_.ownerOf(tokenId_).catch((err) => {
            resolve(false);
        });
        resolve(_ownerOf);
    })
};

const getMintAmount = async () => {
    const _amountMinted = await contract.totalSupply();
    const _amountMintedString = _amountMinted.toLocaleString();
    $("#amount-minted").text(`${_amountMintedString}/4,444 Minted`);
}

const waitForTransaction = async (tx_) => {
    provider.once(tx_.hash, async (transaction_) => {
        await updateInfo();
    });
};

setInterval(async () => {
    await updateInfo();
}, 5000)
ethereum.on("accountsChanged", async (accounts_) => {
    console.log("accountsChanged");
    await updateInfo()
});

window.onload = async () => {
    await checkWhitelistStatus()
    fees = await getTxs();
    console.log(fees);
    var $select = $("#mint-amount");
    for (i=1;i<=3;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
    await updateInfo();
};