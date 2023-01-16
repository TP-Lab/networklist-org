No# Description
This is the repo for TokenPocket to add public chains according to the community requirements. Once the PR is merged, the chain will be included on TokenPocket's Easy Add feature. Please read the following tutorials.

## Listing and donation standard
https://help.tokenpocket.pro/developer-en/network/add-chain

A donation is needed for your PR to be merged. If your PR is not compatible with the Review Rules, it will be merged and the donation will be refunded. Please be cautious.


# 
TokenPocket

## 
https://help.tokenpocket.pro/developer-cn/public-chain/add-chain


## How to add a new chain

Fork this repo and add your evm chain info into `chains.json` 

Example:

```javascript
{
    "name": "xDAI Chain",
    "chainId": 100,
    "shortName": "xdai",
    "chain": "XDAI",
    "network": "mainnet",
    "networkId": 100,
    "nativeCurrency": {
        "name": "xDAI",
        "symbol": "xDAI",
        "decimals": 18
    },
    "rpc": [
        "https://rpc.xdaichain.com",
        "https://xdai.poanetwork.dev",
        "wss://rpc.xdaichain.com/wss",
        "wss://xdai.poanetwork.dev/wss",
        "http://xdai.poanetwork.dev",
        "https://dai.poa.network",
        "ws://xdai.poanetwork.dev:8546"
    ],
    "faucets": [],
    "infoURL": "https://forum.poa.network/c/xdai-chain",
    "app_resource": {
        "ic_chain_select": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/1.png",
        "ic_chain_unselect": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/0.png",
        "color_chain_bg": "0x58B2AF"
    }
}
```

##
`chains.json`


```javascript
{
    "name": "xDAI Chain",
    "chainId": 100,
    "shortName": "xdai",
    "chain": "XDAI",
    "network": "mainnet",
    "networkId": 100,
    "nativeCurrency": {
        "name": "xDAI",
        "symbol": "xDAI",
        "decimals": 18
    },
    "rpc": [
        "https://rpc.xdaichain.com",
        "https://xdai.poanetwork.dev",
        "wss://rpc.xdaichain.com/wss",
        "wss://xdai.poanetwork.dev/wss",
        "http://xdai.poanetwork.dev",
        "https://dai.poa.network",
        "ws://xdai.poanetwork.dev:8546"
    ],
    "faucets": [],
    "infoURL": "https://forum.poa.network/c/xdai-chain",
    "app_resource": {
        "ic_chain_select": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/1.png",
        "ic_chain_unselect": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/0.png",
        "color_chain_bg": "0x58B2AF"
    }
}
```



`app_resource` is optional, which is only affect the appearance in TokenPocket Wallet. You can follow the standard below:


![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-11.png)
![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-12.png)
![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-13.png)
![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-14.png)
![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-15.png)

