// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  horizon: [
    {
      type: 'category',
      label: 'Horizon',
      items: [
        {
          type: "autogenerated",
          dirName: "horizon",
        },
      ],
      collapsible: false,
    },
  ],
  hubble: [
    {
      type: 'category',
      label: 'Hubble',
      items: [
        {
          type: "autogenerated",
          dirName: "hubble",
        },
      ],
      collapsible: false,
    },
  ],
data_indexers: [
  {
    type: 'category',
    label: 'Data Indexers',
    items: [
      {
        type: "autogenerated",
        dirName: "data-indexers",
      },
    ],
    collapsible: false,
  },
],
  anchor_platform: [
    {
      type: 'category',
      label: 'Anchor Platform',
      items: [
        {
          type: "autogenerated",
          dirName: "anchor-platform",
        },
      ],
    },
  ],
  stellar_disbursement_platform: [
    {
      type: "category",
      label: "Stellar Disbursement Platform",
      items: [
        {
          type: "autogenerated",
          dirName: "stellar-disbursement-platform",
        },
      ],
    },
  ],
  soroban_rpc: [
    {
      type: "category",
      label: "Soroban RPC",
      items: [
        {
          type: 'autogenerated',
          dirName: 'soroban-rpc',
        },
      ],
    },
  ],
  core_node: [
    {
      type: 'category',
      label: 'Core Node',
      items: [
        {
          type: 'autogenerated',
          dirName: 'core-node',
        },
      ],
    },
  ],
}

module.exports = sidebars;
