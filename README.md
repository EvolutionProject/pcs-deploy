# pcs-deploy

This repository contains artifacts necessary for deployment of PancakeSwap smart contracts to your local development ethereum instance.

It is based on this post: https://nhancv.com/host-your-own-pancakeswap-testnet/, but it does not deploy Frontend

It can be useful to test more complext tokens incorporating taxes, auto LP creation and more.

```
git clone https://github.com/turbotronproject/pcs-deploy.git
cd pcs-deploy
git submodule init
git submodule update --recursive
make
```

The Truffle configs in `truffle/COMPONENT` subdirs assume your network runs on `localhost:7778` with chain ID `4321`. You might need to change your local environment config or the network config in the `truffle-config.js` files.

`Makefile` also uses `sol-merger` and `jq`

You can find the addresses of deployed contracts in JSON files in directory `artifacts/`
