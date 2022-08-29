import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "https://home.babyswap.$$/",
  },
  {
    label: "Trade",
    icon: "Bottles",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.$$/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "IloIcon",
    href: "/lottery",
    timeStamp: "1628683209",
    fixedTime: {
      timeStamp: "0", // 秒
      text: "24:00:00",
    },
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: 'The Crypto You',
    icon: 'HandleIcon',
    items: [
      {
        label: "Home",
        href: "https://thecryptoyou.io/home",
      },
      {
        label: "Buy $BABY",
        href: "https://exchange.babyswap.finance/#/swap?outputCurrency=0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657",
      },
      {
        label: "Buy $MILK",
        href: "https://exchange.babyswap.finance/#/swap?outputCurrency=0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657",
        disabled: true,
      },
      {
        label: "Mint Baby",
        href: "https://thecryptoyou.io/game",
      },
      {
        label: "Marketplace",
        href: "https://thecryptoyou.io/market",
        disabled: true,
      },
    ],
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "Autit",
    icon: "AutitIcon",
    href: "https://www.certik.org/projects/babyswap",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.pancakeswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/baby_swap",
    // items: [],
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/baby_swap",
    //   },
    //   {
    //     label: "Bahasa Indonesia",
    //     href: "https://t.me/PancakeSwapIndonesia",
    //   },
    //   {
    //     label: "中文",
    //     href: "https://t.me/baby_swap",
    //   },
    //   {
    //     label: "Tiếng Việt",
    //     href: "https://t.me/PancakeSwapVN",
    //   },
    //   {
    //     label: "Italiano",
    //     href: "https://t.me/pancakeswap_ita",
    //   },
    //   {
    //     label: "русский",
    //     href: "https://t.me/pancakeswap_ru",
    //   },
    //   {
    //     label: "Türkiye",
    //     href: "https://t.me/pancakeswapturkiye",
    //   },
    //   {
    //     label: "Português",
    //     href: "https://t.me/PancakeSwapPortuguese",
    //   },
    //   {
    //     label: "Español",
    //     href: "https://t.me/PancakeswapEs",
    //   },
    //   {
    //     label: "日本語",
    //     href: "https://t.me/baby_swap",
    //   },
    //   {
    //     label: "Français",
    //     href: "https://t.me/pancakeswapfr",
    //   },
    //   {
    //     label: "Announcements",
    //     href: "https://t.me/PancakeSwapAnn",
    //   },
    //   {
    //     label: "Whale Alert",
    //     href: "https://t.me/PancakeSwapWhales",
    //   },
    // ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/babyswap_bsc",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.gg/ac5vnADHbc",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 70;
export const TOP_BANNER_HEIGHT_MOBILE = 84;
