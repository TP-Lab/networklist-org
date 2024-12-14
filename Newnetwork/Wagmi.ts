  const bbtestnet = {
        id: 21548,
        name: "curly-sandman-10c6e11a",
        network: "bbtestnet",
        nativeCurrency: {
          decimals: 18,
          name: "Native Token",
          symbol: "Native Token",
        },
        rpcUrls: {
          public: { http: ["https://rpc.buildbear.io/curly-sandman-10c6e11a"] },
          default: { http: ["https://rpc.buildbear.io/curly-sandman-10c6e11a"] },
        },
        blockExplorers: {
          etherscan: {
            name: "BBExplorer",
            url: "https://explorer.buildbear.io/curly-sandman-10c6e11a",
            "https://curly-sandman-10c6e11a.blockscout.buildbear.io",
          default: {
            name: "BBExplorer",
            url: "https://explorer.buildbear.io/curly-sandman-10c6e11a",
          },
        },
      } as const satisfies Chain;
      
  const { chains, publicClient, webSocketPublicClient } = configureChains(
        [bbtestnet],
        [
          jsonRpcProvider({
            rpc: (chain) => ({
              http: "https://rpc.buildbear.io/curly-sandman-10c6e11a",
            }),
          }),
        ]
      );
