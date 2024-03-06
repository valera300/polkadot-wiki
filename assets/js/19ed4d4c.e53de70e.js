"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={id:"learn-comparisons-cosmos",title:"Polkadot vs. Cosmos",sidebar_label:"Cosmos",description:"Comparison between Polkadot and Cosmos.",keywords:["cosmos","polkadot","interoperability","interoperability hub"],slug:"../learn-comparisons-cosmos"},l=void 0,c={unversionedId:"learn/learn-comparisons-cosmos",id:"learn/learn-comparisons-cosmos",title:"Polkadot vs. Cosmos",description:"Comparison between Polkadot and Cosmos.",source:"@site/../docs/learn/learn-comparisons-cosmos.md",sourceDirName:"learn",slug:"/learn-comparisons-cosmos",permalink:"/docs/learn-comparisons-cosmos",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparisons-cosmos.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1709524926,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"learn-comparisons-cosmos",title:"Polkadot vs. Cosmos",sidebar_label:"Cosmos",description:"Comparison between Polkadot and Cosmos.",keywords:["cosmos","polkadot","interoperability","interoperability hub"],slug:"../learn-comparisons-cosmos"},sidebar:"docs",previous:{title:"Ethereum",permalink:"/docs/learn-comparisons-ethereum-2"},next:{title:"Avalanche",permalink:"/docs/learn-comparisons-avalanche"}},h={},d=[{value:"Model",id:"model",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Polkadot",id:"polkadot",level:3},{value:"Cosmos",id:"cosmos",level:3},{value:"Consensus",id:"consensus",level:2},{value:"Staking Mechanics",id:"staking-mechanics",level:2},{value:"Message Passing",id:"message-passing",level:2},{value:"Governance",id:"governance",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Development Framework",id:"development-framework",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},m="wrapper";function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Polkadot and Cosmos are both protocols that provide an interface for different state machines to\ncommunicate with each other. Both protocols are predicated on the thesis that the future will have\nmultiple blockchains that need to interoperate with each other rather than individual blockchains\nexisting in isolation."),(0,s.kt)("h2",{id:"model"},"Model"),(0,s.kt)("p",null,'Polkadot uses a sharded model where each shard in the protocol has an abstract state transition\nfunction (STF). Polkadot uses WebAssembly (Wasm) as a "meta-protocol". A shard\'s STF can be abstract\nas long as the validators on Polkadot can execute it within a Wasm environment.'),(0,s.kt)("p",null,'The shards of Polkadot are called "',(0,s.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),"\". Every time a parachain wants\nto make a state transition, it submits a block (batch of state transitions) along with a state proof\nthat Polkadot validators can independently verify. These blocks are finalized for the parachains\nwhen they are finalized by Polkadot's Relay Chain, the main chain of the system. As such, all\nparachains share state with the entire system, meaning that a chain re-organization of a single\nparachain would require a re-organization of all parachains and the Relay Chain."),(0,s.kt)("p",null,"Cosmos employs horizontal scalability using\n",(0,s.kt)("a",{parentName:"p",href:"https://www.alchemy.com/overviews/what-is-an-appchain"},"app-chains"),". The Cosmos Network consists of\n100+ IBC connected chains, including the Cosmos Hub, Osmosis, Celestia, dYdX v4 chain, Injective,\netc. Each chain is responsible for securing the chain with a sufficiently staked and decentralized\nvalidator set. But chains also have the option to leverage shared security from the Cosmos Hub.\nCosmos chains send cross-chain messages using the Inter-Blockchain Communication protocol. As chains\ndo not share state, a re-organization of one chain would not re-organize other chains, meaning each\nmessage is trust-bound by the recipient's trust in the security of the sender."),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("h3",{id:"polkadot"},"Polkadot"),(0,s.kt)("p",null,"Polkadot has a Relay Chain acting as the main chain of the system. All validators in Polkadot are on\nthe Relay Chain. Parachains have collators, who construct and propose parachain blocks to\nvalidators. Collators don't have any security responsibilities, and thus do not require a robust\nincentive system. Collators can submit a single parachain block for every Relay Chain block every 6\nseconds. Once a parachain submits a block, validators perform a series of availability and validity\nchecks before committing it to the final chain."),(0,s.kt)("p",null,"Parachain slots are limited, and thus parachain candidates participate in an auction to reserve a\nslot for up to two years. For chains that do not have the funding for a parachain slot or the\nnecessity to execute with a six-second block time, Polkadot also has\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathreads"),". Parathreads execute on a pay-as-you-go basis, only paying to\nexecute a block when they need to."),(0,s.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nPolkadot has ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility."),(0,s.kt)("h3",{id:"cosmos"},"Cosmos"),(0,s.kt)("p",null,"Cosmos is a network of blockchains built using ",(0,s.kt)("a",{parentName:"p",href:"https://cometbft.com/"},"CometBFT")," as the consensus\nengine, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/"},"Cosmos SDK")," as the VM, and ",(0,s.kt)("a",{parentName:"p",href:"https://ibcprotocol.dev/"},"IBC"),"\nwhich allows chains to interoperate with one another."),(0,s.kt)("p",null,"IBC leverages light clients that can keep track of the consensus of a counterparty chain. For\nexample, when chains A and B want to talk to one another, chain A uses its light client of B to\nverify messages sent from chain B, and vice versa. IBC is\n",(0,s.kt)("a",{parentName:"p",href:"https://app.trustless.zone/?from=POLKADOT&to=OSMOSIS"},"currently live")," on Polkadot and Kusama. Work\nis ongoing to implement IBC to Ethereum and it's layer 2s."),(0,s.kt)("h2",{id:"consensus"},"Consensus"),(0,s.kt)("p",null,"Polkadot uses a hybrid ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-consensus"},"consensus")," protocol with two sub-protocols: BABE and\nGRANDPA. BABE (Blind Assignment for Blockchain Extension) uses a verifiable random function (VRF) to\nassign slots to validators and a fallback round-robin pattern to guarantee that each slot has an\nauthor. GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement) votes on chains, rather\nthan individual blocks. Together, BABE can author candidate blocks to extend the finalized chain and\nGRANDPA can finalize them in batches (up to millions of blocks at a time)."),(0,s.kt)("p",null,"This isolation of tasks provides several benefits. First, it represents a reduction in transport\ncomplexity for both block production and finalization. BABE has linear complexity, making it easy to\nscale to thousands of block producers with low networking overhead. GRANDPA has quadratic\ncomplexity, but has an advantage in terms of the latency. It is capable of finalizing multiple\nblocks in one batch."),(0,s.kt)("p",null,"Second, having the capacity to extend the chain with unfinalized blocks allows for liveness of the\nnetwork and the validators to perform extensive availability and validity checks to ensure that no\ninvalid state transitions make their way into the final chain."),(0,s.kt)("p",null,"Cosmos chains use Tendermint consensus, a round-robin protocol that provides instant finality. Block\nproduction and finalization are on the same path of the algorithm, meaning it produces and finalizes\none block at a time. Because it is a PBFT-based algorithm (like GRANDPA), it has quadratic\ncomplexity, designed to finalize one block at a time."),(0,s.kt)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators using the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"sequential Phragm\xe9n algorithm"),". The validator set size is set by governance\n(1_000 validators planned) and stakers who do not want to run validator infrastructure can nominate\nup to 16 validators. Phragm\xe9n's algorithm selects the optimal allocation of stake, where optimal is\nbased on having the most evenly staked set."),(0,s.kt)("p",null,"All validators in Polkadot have the same weight in the consensus protocols. That is, to reach\ngreater than 2/3 of support for a chain, more than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators")," must commit to it, rather\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake.")," Likewise, validator rewards are tied to their activity, primarily block\nproduction and finality justifications, not their amount of stake. This creates an incentive to\nnominate validators with lower stakes, as they will earn higher returns on their staked tokens."),(0,s.kt)("p",null,"The Cosmos Hub uses Bonded Proof of Stake (a variant of Delegated PoS) to elect validators. Stakers\nmust bond funds and submit a delegate transaction for each validator they would like to delegate to\nwith the number of tokens to delegate. The Cosmos Hub plans to support up to 300 validators."),(0,s.kt)("p",null,"Consensus voting and rewards are both stake-based in Cosmos. In the case of consensus voting, more\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake")," must commit, rather than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators.")," Likewise, a validator with\n10% of the total stake will earn 10% of the rewards."),(0,s.kt)("p",null,"Finally, in Cosmos, if a staker does not vote in a governance referendum, the validators assume\ntheir voting power. Because of this, many validators in Cosmos have zero commission in order to\nacquire more control over the protocol. In Polkadot, governance and staking are completely disjoint;\nnominating a validator does not assign any governance voting rights to the validator."),(0,s.kt)("h2",{id:"message-passing"},"Message Passing"),(0,s.kt)("p",null,"Polkadot uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"Cross-Consensus Message Passing Format (XCM)")," for parachains to send\narbitrary messages to each other. Parachains open connections with each other and can send messages\nvia their established channels. ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," are full nodes of parachains and full\nnodes of the Relay Chain, so collator nodes are a key component of message passing. Messages do not\npass through the Relay Chain, only proofs of post and channel operations (open, close, etc.) go into\nthe Relay Chain. This enhances scalability by keeping data on the edges of the system."),(0,s.kt)("p",null,"In the case of a chain re-organization, messages can be rolled back to the point of the\nre-organization based on the proofs of post in the Relay Chain. The shared state amongst parachains\nmeans that messages are free from trust bounds; they all operate in the same context."),(0,s.kt)("p",null,"Polkadot has an additional protocol called ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE")," that provides shared logic for\ncross-chain messages. Messages sent with SPREE carry additional guarantees about provenance and\ninterpretation by the receiving chain."),(0,s.kt)("p",null,"Cosmos uses a light client-based cross-chain protocol called\n",(0,s.kt)("a",{parentName:"p",href:"https://www.ibcprotocol.dev/"},"Inter-Blockchain Communication (IBC)")," for arbitrary message-passing.\nIn the current design, IBC chains create 1:1\n",(0,s.kt)("a",{parentName:"p",href:"https://ibc.cosmos.network/main/ibc/overview#connections"},"Connections")," with each other, over which\n",(0,s.kt)("a",{parentName:"p",href:"https://ibc.cosmos.network/main/ibc/overview#channels"},"Channels")," can be established. IBC data\npackets are sent between application modules on different chains over these channels. In the case of\nIBC, as chains do not share state, receiving chains must trust the security of a message's origin."),(0,s.kt)("h2",{id:"governance"},"Governance"),(0,s.kt)("p",null,"Polkadot has ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"OpenGov")," framewok with several trackss to pass proposals as\npublic referenda, where the majority of tokens can always control the outcome. Referenda can contain\na variety of proposals, including fund allocation from an on-chain ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury"),".\nDecisions get enacted on-chain and are binding and autonomous."),(0,s.kt)("p",null,"Cosmos uses coin-vote signaling to pass referenda. The actual enactment of governance decisions is\ncarried out via a protocol fork, much like other blockchains. All token holders can vote, however,\nif a delegator abstains from a vote then the validator they delegate to assume their voting power.\nValidators in Polkadot do not receive any voting power based on their nominators."),(0,s.kt)("h2",{id:"upgrades"},"Upgrades"),(0,s.kt)("p",null,"Using the Wasm meta-protocol, Polkadot can enact chain upgrades and successful proposals without a\nhard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be\nupgraded without forking the chain."),(0,s.kt)("p",null,"As Cosmos is not based on a meta-protocol, it must enact upgrades and proposals via a normal forking\nmechanism."),(0,s.kt)("h2",{id:"development-framework"},"Development Framework"),(0,s.kt)("p",null,"Both Cosmos and Polkadot are designed such that each chain has its STF and both provide support for\nsmart contracts in both Wasm and the Ethereum Virtual Machine (EVM). Polkadot provides an\nahead-of-time Wasm compiler as well as an interpreter (Wasmi) for execution, while Cosmos only\nexecutes smart contracts in an interpreter."),(0,s.kt)("p",null,"Cosmos chains can be developed using the Cosmos SDK, written in Go. The Cosmos SDK contains about 10\nmodules (e.g. staking, governance, etc.) that can be included in a chain's STF. The SDK builds on\ntop of Tendermint."),(0,s.kt)("p",null,"The primary development framework for parachains is ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),", written in\nRust. Substrate comes with FRAME, a set of about 40 modules (called \"pallets\") to use in a chain's\nSTF. Beyond simply using the pallets, Substrate adds a further layer of abstraction that allows\ndevelopers to compose FRAME's pallets by adding custom modules and configuring the parameters and\ninitial storage values for the chain."),(0,s.kt)("admonition",{title:"Polkadot can support an STF written in any language",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"So long as it compiles to its meta-protocol Wasm. Likewise, it could still use the Substrate client\n(database, RPC, networking, etc.); it only needs to implement the primitives at the interface.")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Polkadot was designed on the principle that scalability and interoperability require shared\nvalidation logic to create a trust-free environment. As more blockchains are developed, their\nsecurity must be cooperative, not competitive. Therefore, Polkadot provides the shared validation\nlogic and security processes across chains so that they can interact knowing that their\ninterlocutors execute within the same security context."),(0,s.kt)("p",null,"The Cosmos network uses an Internet-like unstructured network that uses IBC to connect chains with\nindependent security guarantees, meaning that when data is sent from one chain to another, the\nreceiving chain must trust the sending chain. Thus, each blockchain in the Cosmos network has its\nindependent security mechanisms. Chains also have the option to share security with the Cosmos Hub\nand thereby leverage its economic security."))}u.isMDXComponent=!0}}]);