const remix = require("@remix-run/express");
const express = require("express");

const app = express();

app.all(
  "*",
  remix.createRequestHandler({
    build: require("./build/server"),
  })
);export function createRequestHandler({ build }) {
  // creates a Fetch API request handler from the server build
  const handleRequest = createRemixRequestHandler(build);

  // returns an express.js specific handler for the express server
  return async (req, res) => {
    // adapts the express.req to a Fetch API request
    const request = createRemixRequest(req);

    // calls the app handler and receives a Fetch API response
    const response = await handleRequest(request);

    // adapts the Fetch API response to the express.res
    sendRemixResponse(res, response);
  };
}const remix = require("@remix-run/express");
const express = require("express");

const app = express();

app.all(
  "*",
  remix.createRequestHandler({
    build: require("./build/server"),
  })
);express.jsexpress.reqexport default function Projects() {
  const projects = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const { state } = useNavigation();
  const busy = state === "submitting";
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (actionData.errors) {
      inputRef.current.focus();
    }
  }, [actionData]);

  return (
    <div>
      {projects.map((project) => (
        <Link key={project.slug} to={project.slug}>
          {project.title}
        </Link>
      ))}

      <Form method="post">
        <input ref={inputRef} name="title" />
        <button type="submit" disabled={busy}>
          {busy ? "Creating..." : "Create New Project"}
        </button>
      </Form>

      {actionData?.errors ? (
        <FadeIn>
          <ErrorMessages errors={actionData.errors} />
        </FadeIn>
      ) : null}
      // Loaders only run on the server and provide data
// to your component on GET requests
export async function loader() {
  return json(await db.projects.findAll());
}

// The default export is the component that will be
// rendered when a route matches the URL. This runs
// both on the server and the client
export default function Projects() {
  const projects = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <div>
      {projects.map((project) => (
        <Link key={project.slug} to={project.slug}>
          {project.title}
        </Link>
      ))}

      <Form method="post">
        <input name="title" />
        <button type="submit">Create New Project</button>
      </Form>
      {actionData?.errors ? (
        <ErrorMessages errors={actionData.errors} />
      ) : null}

      {/* outlets render the nested child routes
          that match the URL deeper than this route,
          allowing each layout to co-locate the UI and
          controller code in the same file */}
      <Outlet />
    </div>
  );
}

// Actions only run on the server and handle POST
// PUT, PATCH, and DELETE. They can also provide data
// to the component
export async function action({
  request,
}: ActionFunctionArgs) {
  const form = await request.formData();
  const errors = validate(form);
  if (errors) {
    return json({ errors });
  }
  await createProject({ title: form.get("title") });
  return json({ ok: true });
}---export default function Projects() {
  const projects = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const { state } = useNavigation();
  const busy = state === "submitting";
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (actionData.errors) {
      inputRef.current.focus();
    }
  }, [actionData]);

  return (
    <div>
      {projects.map((project) => (
        <Link key={project.slug} to={project.slug}>
          {project.title}
        </Link>
      ))}

      <Form method="post">
        <input ref={inputRef} name="title" />
        <button type="submit" disabled={busy}>
          {busy ? "Creating..." : "Create New Project"}
        </button>
      </Form>

      {actionData?.errors ? (
        <FadeIn>
          <ErrorMessages errors={actionData.errors} />
        </FadeIn>
      ) : null}
      
title: Quick Guide - BNB Smart Chain (BSC)
---

If you are a developer looking to build applications on the BNB Smart Chain (BSC), this document provides all the essential information you need.

## Getting Started

BNB Smart Chain (BSC) is a high-performance blockchain network.

Since BSC is EVM-compatible, your existing Ethereum smart contract skills will seamlessly transfer to BSC.

## Connecting

Here are some resources to help you get connected to the BSC network:

- [Network Information and RPC Providers](json_rpc/json-rpc-endpoint.md)
- [Wallet Configuration](./wallet-configuration.md)

## Get Tokens

BNB is the native utility token of BNB Smart Chain and is used to pay transaction fees. For the testnet, you can use the faucet to obtain test tokens on BSC.

- [BSC Testnet Faucet](./faucet.md)

For the mainnet, you can withdraw tokens directly from a centralized exchange (CEX) which supports BSC network(e.g. Binance).

## JSON-RPC API

Interacting with BSC requires sending requests to specific JSON-RPC API methods. BSC's APIs are compatible with Geth.
- [JSON-RPC API](json_rpc/json-rpc-endpoint.md)

## Developer Tools
- Explorer
    - [NodeReal BSC Scan](https://bsctrace.com/)
    - [BSCScan](https://bscscan.com/)
- SDK. If you are only using the SDK for Ethereum-compatible functions, then all Ethereum SDKs should work with BSC.
    - [ethers.js](https://docs.ethers.io)
    - [web3.js](https://web3js.readthedocs.io)
- Tools
    - [Remix](https://remix.ethereum.org)
    - [Hardhat](https://hardhat.org)
    - [Foundry](https://book.getfoundry.sh/)
- Wallets
    - [Binance Web3 Wallet](https://www.binance.com/en/web3wallet)
    - [Metamask](https://metamask.io/)
    - [TrustWallet](https://trustwallet.com/)
    - [Particle Network](https://wallet.particle.network/)
    - [Gem Wallet](https://gemwallet.com/)
    - [OKX Wallet](https://www.okx.com/nl/web3)
    - [MathWallet](https://mathwallet.org/en-us/)
    - [Sequence.build](https://sequence.build/landing)
    - [Avatar](https://avatarwallet.io/)
- Oracle
    - [Binance Oracle](https://oracle.binance.com/docs/)
- Account Abstraction
    - [Particle Network](https://wallet.particle.network/)
    - [Biconomy](https://docs.biconomy.io/supportedchains/)
    - [CyberConnect](https://cyberconnect.me/)
- Storage
  ---
title: Quick Guide - BNB Smart Chain (BSC)
---

If you are a developer looking to build applications on the BNB Smart Chain (BSC), this document provides all the essential information you need.

## Getting Started

BNB Smart Chain (BSC) is a high-performance blockchain network.

Since BSC is EVM-compatible, your existing Ethereum smart contract skills will seamlessly transfer to BSC.

## Connecting

Here are some resources to help you get connected to the BSC network:

- [Network Information and RPC Providers](json_rpc/json-rpc-endpoint.md)
- [Wallet Configuration](./wallet-configuration.md)

## Get Tokens

BNB is the native utility token of BNB Smart Chain and is used to pay transaction fees. For the testnet, you can use the faucet to obtain test tokens on BSC.

- [BSC Testnet Faucet](./faucet.md)

For the mainnet, you can withdraw tokens directly from a centralized exchange (CEX) which supports BSC network(e.g. Binance).

## JSON-RPC API

Interacting with BSC requires sending requests to specific JSON-RPC API methods. BSC's APIs are compatible with Geth.
- [JSON-RPC API](json_rpc/json-rpc-endpoint.md)

## Developer Tools
- Explorer
    - [NodeReal BSC Scan](https://bsctrace.com/)
    - [BSCScan](https://bscscan.com/)
- SDK. If you are only using the SDK for Ethereum-compatible functions, then all Ethereum SDKs should work with BSC.
    - [ethers.js](https://docs.ethers.io)
    - [web3.js](https://web3js.readthedocs.io)
- Tools
    - [Remix](https://remix.ethereum.org)
    - [Hardhat](https://hardhat.org)
    - [Foundry](https://book.getfoundry.sh/)
- Wallets
    - [Binance Web3 Wallet](https://www.binance.com/en/web3wallet)
    - [Metamask](https://metamask.io/)
    - [TrustWallet](https://trustwallet.com/)
    - [Particle Network](https://wallet.particle.network/)
    - [Gem Wallet](https://gemwallet.com/)
    - [OKX Wallet](https://www.okx.com/nl/web3)
    - [MathWallet](https://mathwallet.org/en-us/)
    - [Sequence.build](https://sequence.build/landing)
    - [Avatar](https://avatarwallet.io/)
- Oracle
    - [Binance Oracle](https://oracle.binance.com/docs/)
- Account Abstraction
    - [Particle Network](https://wallet.particle.network/)
    - [Biconomy](https://docs.biconomy.io/supportedchains/)
    - [CyberConnect](https://cyberconnect.me/)
- Storage
    - [BNB Greenfield](https://greenfield.bnbchain.org/en)
- Data Analytics
    - [DefiLlama](https://defillama.com/chain/BSC)
    - [CoinGecko](https://www.coingecko.com/en/chains/binance-smart-chain)
    - [DappBay](https://dappbay.bnbchain.org/ranking/chain/bnb-smart-chain)

For more tools and details, you can refer to [BSC Dev Tools](https://www.bnbchain.org/en/dev-tools).  - [BNB Greenfield](https://greenfield.bnbchain.org/en)
- Data Analytics
    - [DefiLlama](https://defillama.com/chain/BSC)
    - [CoinGecko](https://www.coingecko.com/en/chains/binance-smart-chain)
    - [DappBay](https://dappbay.bnbchain.org/ranking/chain/bnb-smart-chain)

For more tools and details, you can refer to [BSC Dev Tools](https://www.bnbchain.org/en/dev-tools).
