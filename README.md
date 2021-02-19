# Lamboswap Interface

An open source interface for Lamboswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [lambodefi.network](https://www.lambodefi.network/)
- Interface: [swap.lambodefi.network](https://swap.lambodefi.network/)
- Twitter: [@lambodefi](https://twitter.com/lambodefi)
- Email: [infos@lambodefi.network](mailto:infos@lambodefi.network)

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 




