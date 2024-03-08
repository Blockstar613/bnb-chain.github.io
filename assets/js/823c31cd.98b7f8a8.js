"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>y,frontMatter:()=>h,metadata:()=>m,toc:()=>k});var a=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/stake-migration1-48ee89b2b90639ab593101904dd95582.png",r=n.p+"assets/images/stake-migration2-3dfe4e0341535b52fa6b79c8ec9ae582.png",s=n.p+"assets/images/stake-migration3-e1931dd8e836e4e0bf9e2a199a4b5afc.png",l=n.p+"assets/images/stake-migration4-37f6271458711030a0811058eeb85ba7.png";var d=n(85346),c=n(67012),p=n(51943),u=n(56513);const h={},g="Stake Migration",m={unversionedId:"bcfusion/users/stake-migration",id:"bcfusion/users/stake-migration",title:"Stake Migration",description:"The BNB Chain community has introduced BEP333: BNB Chain Fusion, a",source:"@site/docs/bcfusion/users/stake-migration.md",sourceDirName:"bcfusion/users",slug:"/bcfusion/users/stake-migration",permalink:"/docs/bcfusion/users/stake-migration",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/users/stake-migration.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"TimeLock Management",permalink:"/docs/bcfusion/users/timelocks"},next:{title:"Managing New Stakes with BNB Staking dApp",permalink:"/docs/bcfusion/users/new-stake"}},f={},k=[{value:"Cross Chain Redelegation",id:"cross-chain-redelegation",level:2},{value:"Steps",id:"steps",level:3},{value:"Step 1: Find your delegations",id:"step-1-find-your-delegations",level:4},{value:"Step 2:  Choose the native BSC validators to migrate to.",id:"step-2--choose-the-native-bsc-validators-to-migrate-to",level:4},{value:"Setp 3: Sign the migrate transaction.",id:"setp-3-sign-the-migrate-transaction",level:4},{value:"Undelegation, Cross Chain Transfer, New Delegation",id:"undelegation-cross-chain-transfer-new-delegation",level:2},{value:"Steps",id:"steps-1",level:3},{value:"Step 1: Find your delegations",id:"step-1-find-your-delegations-1",level:4},{value:"Step 2: Undelegate",id:"step-2-undelegate",level:4},{value:"Step 3: Cross chain transfer",id:"step-3-cross-chain-transfer",level:4},{value:"Step 4: Delegate to new validators",id:"step-4-delegate-to-new-validators",level:4}],b={toc:k},w="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(w,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stake-migration"},"Stake Migration"),(0,o.kt)("p",null,"The BNB Chain community has introduced ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/pull/333"},"BEP333: BNB Chain Fusion"),", a\nsignificant update that retires the BNB Beacon Chain from the ecosystem. This transition introduces native staking on\nthe BNB Smart Chain, following the Feynman Hardfork. Stakeholders now have the opportunity to migrate their existing\ndelegations to the new native staking system through two primary methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cross Chain Redelegation"),(0,o.kt)("li",{parentName:"ul"},"Undelegation, Cross Chain Transfer, New Delegation")),(0,o.kt)("h2",{id:"cross-chain-redelegation"},"Cross Chain Redelegation"),(0,o.kt)("p",null,"Cross chain redelegation allow users to migrate their delegations to BSC as delegations to native BSC validators,\nfacilitaling users for easier migration compared to the second option.\nTherefore this is the recommended way for stake migration."),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("h4",{id:"step-1-find-your-delegations"},"Step 1: Find your delegations"),(0,o.kt)("p",null,"Go to the staking website and connect to your web3 wallet."),(0,o.kt)("p",null,"Mainnet Staking Website: ",(0,o.kt)("a",{parentName:"p",href:"https://staking.bnbchain.org/en/staking"},"https://staking.bnbchain.org/en/staking")),(0,o.kt)("p",null,"Testnet Staking\nWebsite: ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-staking.bnbchain.org/en/staking"},"https://testnet-staking.bnbchain.org/en/staking")),(0,o.kt)("p",null,"For testnet, you\ncan ",(0,o.kt)("a",{parentName:"p",href:"https://chromewebstore.google.com/detail/bnb-chain-wallet/fhbohimaelbohpjbbldcngcnapndodjp"},"BNB Chain Wallet")," to\nconnect."),(0,o.kt)("p",null,"For mainnet, you can use BEW or ",(0,o.kt)("a",{parentName:"p",href:"https://trustwallet.com/browser-extension"},"TrustWallet")," to connect."),(0,o.kt)("img",{src:i,width:"400"}),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"My Staking")," page, Then you can find you existing delegations as the following."),(0,o.kt)("img",{src:r,width:"400"}),(0,o.kt)("h4",{id:"step-2--choose-the-native-bsc-validators-to-migrate-to"},"Step 2:  Choose the native BSC validators to migrate to."),(0,o.kt)("p",null,"Choose one delegation and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrate to BSC")," button. The following window will be poped up for choosing\nwhich BSC valiadtor you want to migrate to."),(0,o.kt)("img",{src:s,width:"400"}),(0,o.kt)("p",null,"The window mainly contains the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The validator to migrate to: if the validator operator of the old delegation already creates a new validator on BSC,\nthis field will be set to the new validator. You can also choose another validator you want to delegate to."),(0,o.kt)("li",{parentName:"ul"},"The BSC delegator address: the address will be used as the owner for you to manage staking on the BSC. Please double\nconfirm the address is correct to avoid funding lost.")),(0,o.kt)("h4",{id:"setp-3-sign-the-migrate-transaction"},"Setp 3: Sign the migrate transaction."),(0,o.kt)("p",null,"Finally, you can sign the transaction and migration will be started."),(0,o.kt)("img",{src:l,width:"400"}),(0,o.kt)("p",null,"If the migration fails, the fund will\nbe returned to your Beacon Chain, and you can check it in your web3 wallet."),(0,o.kt)("p",null,"If the migration goes well, you will find the delegation in the new staking dApp.\nFor how find your delegations, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/bcfusion/users/new-stake"},"this document")," for more information."),(0,o.kt)("h2",{id:"undelegation-cross-chain-transfer-new-delegation"},"Undelegation, Cross Chain Transfer, New Delegation"),(0,o.kt)("p",null,"The second option needs the delegator to 1) do undelegation on the Beacon Chain, wait the unboinding period, 2) cross\nchain transfer BNB to the BSC, and 3) stake in the new staking dApp. It needs more time and transaction fee, therefore\nit is not recommended."),(0,o.kt)("h3",{id:"steps-1"},"Steps"),(0,o.kt)("h4",{id:"step-1-find-your-delegations-1"},"Step 1: Find your delegations"),(0,o.kt)("p",null,"You can find your delegations as the steps in the option 1."),(0,o.kt)("h4",{id:"step-2-undelegate"},"Step 2: Undelegate"),(0,o.kt)("p",null,"Then you can undelegate your delegations by click ",(0,o.kt)("inlineCode",{parentName:"p"},"Undelegate")," button and send the transaction to the Beacon Chain."),(0,o.kt)("p",null,"After the unbonding period (7 days in mainnet), the stake be returned to your Beacon Chain account."),(0,o.kt)("h4",{id:"step-3-cross-chain-transfer"},"Step 3: Cross chain transfer"),(0,o.kt)("p",null,"You can use BNB Chain Wallet (BEW) or TrustWallet to cross chain transfer your BNB from the Beacon Chain to the BSC."),(0,o.kt)("p",null,'For BEW, you need to switch the network to "BNB Beacon Chain Network"/"BNB Beacon Chain Testnet Network":'),(0,o.kt)("img",{src:d.Z,width:"400"}),(0,o.kt)("p",null,"Then, select the asset to transfer, enter the BSC account and the token amount."),(0,o.kt)("img",{src:c.Z,width:"400"}),(0,o.kt)("p",null,"The BSC wallet will receive the token after approximately one minute."),(0,o.kt)("p",null,"For TrustWallet mobile multi-chain users, you need to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swap")," tab, and\nchoose From network as ",(0,o.kt)("inlineCode",{parentName:"p"},"BNB Beacon Chain")," and To network as ",(0,o.kt)("inlineCode",{parentName:"p"},"BNB Smart Chain")," for mainnet asset transfer."),(0,o.kt)("p",null,"Then find the asset you want to transfer and input the transfer amount."),(0,o.kt)("img",{src:p.Z,width:"400"}),(0,o.kt)("p",null,"After you click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," button, it will redirect you to the approval page as below."),(0,o.kt)("img",{src:u.Z,width:"400"}),(0,o.kt)("p",null,"Finally, the related asset will be transferred to BSC after you confirm the transaction."),(0,o.kt)("h4",{id:"step-4-delegate-to-new-validators"},"Step 4: Delegate to new validators"),(0,o.kt)("p",null,"Finnally, you can delegate to the new BSC valdiators using the new staking dApp.\nYou can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/bcfusion/users/new-stake"},"this document")," for the detailed steps."))}y.isMDXComponent=!0},51943:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tw1-75015626f4664513181f8b6c94e420e0.PNG"},56513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tw2-c72d662eb18af05d4c393d5758eeaa1b.PNG"},85346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-asset-management3-47d2b7c75150f1db089ed250bbd84cc6.png"},67012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/user-asset-management4-ccfe8d003e6542299479e6b417e080d5.png"}}]);