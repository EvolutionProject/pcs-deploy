WALLET=0xC209E1cb090D0895d66291f2617E382673d17ae2

.PHONY: deploy

all: prep merge truffle

dirs: 
	mkdir -p artifacts/

prep:
	cd submodules/core && yarn install && yarn compile
	cd submodules/periphery && yarn install && yarn add @uniswap/v2-core@"file:../core" && yarn compile

merge: prep
	npx sol-merger submodules/core/contracts/PancakeFactory.sol ./truffle/PancakeFactory/contracts
#	npx sol-merger submodules/core/contracts/PancakePair.sol ./contracts/
	npx sol-merger submodules/periphery/contracts/PancakeRouter01.sol ./truffle/PancakeRouter/contracts
	npx sol-merger submodules/periphery/contracts/PancakeRouter.sol ./truffle/PancakeRouter/contracts

truffle: dirs truffle-WBNB truffle-PancakeFactory truffle-PancakeRouter

truffle-WBNB:
	cd truffle/WBNB/ && truffle deploy --network=development

truffle-PancakeFactory:
	cd truffle/PancakeFactory/ && truffle deploy --network=development

truffle-PancakeRouter:
	cd truffle/PancakeRouter/ &&\
	  sed -i "s#hex'[^']*' // init code hash#hex'$(shell jq -r ".init_hash" artifacts/factory.json)' // init code hash#" contracts/* &&\
	  truffle deploy --network=development 
