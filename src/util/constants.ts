const GOOGLE_FUNCTIONS = [
  {
    googleFunction: "imageScan",
    color: "var(--var-google-lens-image-scan)",
    background: "var(--var-google-lens-image-scan-background)",
  },
  {
    googleFunction: "translate",
    color: "var(--var-google-lens-translate)",
    background: "var(--var-google-lens-translate-backgorund)",
  },
  {
    googleFunction: "homework",
    color: "var(--var-google-lens-homework)",
    background: "var(--var-google-lens-homework-backgorund)",
  },
  {
    googleFunction: "music",
    color: "var(--var-google-lens-music)",
    background: "var(--var-google-lens-music-background)",
  },
];

const NEWS = [
  {
    source: {
      id: null,
      name: "Barron's",
    },
    author:
      "Callum Keown, Rupert Steiner, James Glynn, Dow Jones Newswires, Joe Light, Reshma Kapadia",
    title:
      "Trump's Tariffs Take Effect Today. Pharmaceutical Levies Announced 'Very Shortly,' and China Calls for Dialogue - Barron's",
    description:
      "President Donald Trump's reciprocal tariffs on more than 100 countries go live. Follow the latest news and analysis here.",
    url: "https://www.barrons.com/livecoverage/trump-tariffs-us-china-news",
    urlToImage: "https://images.barrons.com/im-52467919/social",
    publishedAt: "2025-04-09T09:31:00Z",
    content:
      "President Donald Trumps sweeping tariffs on countries around the world, including a 104% levy on Chinese imports, took effect early Wednesday, dramatically altering the global trade landscape.\r\nTrump… [+980 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: null,
    title: "Trump's tariffs: China urges unity against ‘trade tyranny’ - BBC",
    description:
      "Manufacturers and exporters are scrambling after 104% levy on China-made goods comes into effect.",
    url: "https://www.bbc.com/news/articles/c7vnn6y6g82o",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/9df6/live/46b704d0-1503-11f0-a0c4-0d08556af5ee.jpg",
    publishedAt: "2025-04-09T09:14:01Z",
    content:
      "Kelly Ng\r\nTrump's tariffs on Chinese imports are crippling for major Chinese exporters like the fast-fashion giant Shein \r\nChina has called for the world to unite against Trump's tariffs as the count… [+5598 chars]",
  },
  {
    source: {
      id: "politico",
      name: "Politico",
    },
    author: "Nicholas Wu, Holly Otterbein",
    title:
      "Democrats find Trump’s haphazard tariffs are uniting them on trade - Politico",
    description:
      "The party has disagreed over tariff policy in the past, but have found common ground lately",
    url: "https://www.politico.com/news/2025/04/09/democrats-trump-tariffs-united-trade-032478",
    urlToImage:
      "https://static.politico.com/0d/3a/162de5514b23801cb1e4cfb6a499/house-progressives-press-conference-on-debt-ceiling-80597.jpg",
    publishedAt: "2025-04-09T08:45:00Z",
    content:
      "The problem is not tariffs, generally. Its the way that Trump is doing them, said Rep. Hillary Scholten (D-Mich.), from a swing state that relies heavily on car manufacturing. Trump tariffs are bad, … [+5788 chars]",
  },
  {
    source: {
      id: "axios",
      name: "Axios",
    },
    author: "Marc Caputo, Alex Isenstadt",
    title:
      '"We like it": Why Trump\'s team shrugs at Navarro-Musk feud - Axios',
    description:
      "Public feuding by Musk's team of rivals reflects the smash-mouth, unapologetic style that's part of its policymaking process in private.",
    url: "https://www.axios.com/2025/04/09/navarro-musk-feud-tariffs-trump-white-house",
    urlToImage:
      "https://images.axios.com/xkLwMsYFN_5OapWJ_6Eo6kAqMCQ=/0x0:1920x1080/1366x768/2025/04/08/1744150965064.jpg",
    publishedAt: "2025-04-09T08:32:19Z",
    content:
      "Backstabbing was rampant in President Trump's first White House. In Trump 2.0, it's front-stabbing:\r\n<ul><li>Trump's trade adviser, Peter Navarro, slights Elon Musk's car company on TV. Musk, a senio… [+4247 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Elisabeth Buchwald",
    title: "Trump’s massive ‘reciprocal’ tariffs upend global trade - CNN",
    description:
      "Despite rattled financial markets, threats of retaliation and some of President Donald Trump’s biggest supporters encouraging him to back off his signature economic policy, he didn’t give in. His administration piled on heaps of new “reciprocal” tariffs Wedne…",
    url: "https://www.cnn.com/2025/04/09/business/recession-effects-trump-reciprocal-tariffs-hnk-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/c-2025-04-02t204647z-21420377-rc2wpdatum9v-rtrmadp-3-usa-trump-tariffs.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-04-09T08:16:00Z",
    content:
      "Despite rattled financial markets, threats of retaliation and some of President Donald Trumps biggest supporters encouraging him to back off his signature economic policy, he didnt give in. His admin… [+6920 chars]",
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "2025 NFL seven-round mock draft: Three trades in Round 1 before Browns and Giants select QBs on Day 2 - CBS Sports",
    description: "Let's predict all 257 picks!",
    url: "https://www.cbssports.com/nfl/draft/news/2025-nfl-seven-round-mock-draft-three-trades-in-round-1-before-browns-and-giants-select-qbs-on-day-2/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2025/04/08/14fe2fcc-26aa-4cac-9260-66c705b194a8/thumbnail/1200x675/e4593fb3ad9da249698e1d8a3d7c4412/jalen-milroe.jpg",
    publishedAt: "2025-04-09T05:43:00Z",
    content:
      "The time has come. The glorious time for a full seven-round mock draft, predicting all 257 picks in the 2025 NFL Draft. One of those overly ambitious mocks that also includes trades from Round 1 thro… [+13399 chars]",
  },
  {
    source: {
      id: null,
      name: "Hollywood Reporter",
    },
    author: "Jackie Strause",
    title:
      "‘The Handmaid’s Tale’ Bosses Unpack All Those Reunions in the First Three Episodes - The Hollywood Reporter",
    description:
      "Co-showrunners Eric Tuchman and Yahlin Chang speak to The Hollywood Reporter about everything that happens when June (Elisabeth Moss) and Serena (Yvonne Strahovski) get off that train.",
    url: "http://www.hollywoodreporter.com/tv/tv-features/the-handmaids-tale-season-6-premiere-reunions-explained-1236185613/",
    urlToImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2025/04/174226_0321RT.jpg?w=1440&h=810&crop=1",
    publishedAt: "2025-04-09T03:23:04Z",
    content:
      "[This story contains spoilers from the three-episode season six premiere of The Handmaid’s Tale, “Train,” “Exile” and “Devotion.”]\r\nThe biggest question for The Handmaid’s Taleviewers heading into th… [+14117 chars]",
  },
  {
    source: {
      id: null,
      name: "Heat.com",
    },
    author: null,
    title:
      "Pool Report on the Technical Fouls called during Tonight’s Lakers at Thunder Game - Official NBA",
    description:
      "The Pool Report interview was conducted by Cliff Brunt, Associated Press with Crew Chief Tony Brothers following today’s Lakers at Thunder game.   April 8, 2025   QUESTION: Why was Luka Dončić assessed his first technical foul by J.T. Orr? BROTHERS:  He direc…",
    url: "https://official.nba.com/pool-report-on-the-technical-fouls-called-during-tonights-lakers-at-thunder-game/",
    urlToImage: null,
    publishedAt: "2025-04-09T03:13:18Z",
    content:
      "The Pool Report interview was conducted by Cliff Brunt, Associated Press with Crew Chief Tony Brothers following todays Lakers at Thunder game. \r\nApril 8, 2025\r\nQUESTION: Why was Luka Doni assessed h… [+497 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Michael M. Phillips",
    title:
      "Al Qaeda Punctures Kenya’s Dreams for an Indian Ocean Trade Hub - WSJ",
    description:
      "Militants based next door in Somalia have stalled the $25 billion plan; ‘This is a white elephant’",
    url: "https://www.wsj.com/world/africa/al-qaeda-kenya-indian-ocean-trade-hub-plan-35d7f11b",
    urlToImage: "https://images.wsj.net/im-98646705/social",
    publishedAt: "2025-04-09T03:00:00Z",
    content:
      "LAMU, KenyaAl Qaeda militants are disrupting one of Africas most ambitious infrastructure projects, forestalling Kenyas plans for establishing a new regional trade hub on the Indian Ocean.\r\nFor decad… [+328 chars]",
  },
  {
    source: {
      id: null,
      name: "SFGate",
    },
    author: "Gabe Fernandez",
    title:
      "Warriors coach Steve Kerr blames 'billionaires' for shock NBA firings - SFGATE",
    description:
      'Warriors head coach Steve Kerr blames shock NBA firings on billionaire owners who can afford to pay someone "to go away."',
    url: "https://www.sfgate.com/warriors/article/warriors-steve-kerr-blames-billionaires-nba-firing-20266042.php",
    urlToImage:
      "https://s.hdnux.com/photos/01/47/76/23/27256058/3/rawImage.jpg",
    publishedAt: "2025-04-09T02:32:39Z",
    content:
      "Head coach Steve Kerr of the Golden State Warriors talks to an official against the Houston Rockets in the third quarter at Chase Center on April 6, 2025 in San Francisco.\r\nEakin Howard/Getty Images\r… [+2524 chars]",
  },
  {
    source: {
      id: null,
      name: "Variety",
    },
    author: "Thania Garcia",
    title:
      "Nightclub Roof Collapses in Dominican Republic and Kills Over 60, Including Singer Rubby Pérez and Former MLB Player - Variety",
    description:
      "The roof of a nightclub in the Dominican Republic collapsed on Tuesday, leaving singer Rubby Pérez and at least 60 others dead.",
    url: "https://variety.com/2025/music/news/dominican-republic-nightclub-roof-collapses-rubby-perez-mets-player-dead-1236364004/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2025/04/GettyImages-2208606356_899643.jpg?w=1000&h=563&crop=1",
    publishedAt: "2025-04-09T01:56:00Z",
    content:
      "The roof of a nightclub in the Dominican Republic collapsed and killed at least 60 people on Tuesday, including merengue singer Rubby Pérez and Nelsy Milagros Cruz Martinez, the governor of Monte Cri… [+1366 chars]",
  },
  {
    source: {
      id: null,
      name: "Salt Lake Tribune",
    },
    author: null,
    title:
      "17 University of Utah international students see visas revoked by Trump admin - The Salt Lake Tribune",
    description:
      "At least 17 international students and recent graduates at the University of Utah have had their visas revoked — receiving letters from President Donald Trump’s administration instructing them to immediately “self-deport.”",
    url: "https://www.sltrib.com/news/education/2025/04/08/trump-admin-revokes-visas-17/",
    urlToImage:
      "https://www.sltrib.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fsltrib%2FFXBPD2APNNDFRE2S6PJPEVODYI.JPG?auth=a4add9928a4cfe87d3bb0193cfb67cb48c58418e33356fb1b91a1efaf9fd9f7c&width=1200",
    publishedAt: "2025-04-09T01:35:14Z",
    content:
      "At least 17 international students and recent graduates at the University of Utah have had their visas revoked receiving letters from President Donald Trumps administration instructing them to immedi… [+7700 chars]",
  },
  {
    source: {
      id: "entertainment-weekly",
      name: "Entertainment Weekly",
    },
    author: "https://www.facebook.com/entertainmentweekly",
    title:
      "Robert Pattinson looking to spice up 'Dune 3' with villainous role - Entertainment Weekly",
    description:
      "'The Batman' star Robert Pattinson is looking to spice up 'Dune 3,' with an eye on a villainous role in Denis Villeneuve's sci-fi sequel.",
    url: "https://ew.com/robert-pattinson-dune-3-villain-role-11711682",
    urlToImage:
      "https://ew.com/thmb/DHzC09E2X52BgWUhi9GXQe2tY7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/robert-pattinson-National-Board-Review-Annual-Awards-Gala-2025-040825-f8f8c8753a8c4dd196b2cfc23adc2656.jpg",
    publishedAt: "2025-04-09T00:01:16Z",
    content:
      "Robert Pattinson may be heading from Gotham City to Arrakis.\r\nThe star of The Batman is being eyed for a key role in the third Dune movie from director Denis Villeneuve, Entertainment Weekly has lear… [+2765 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Megan Graham",
    title:
      "When Coffee Mate Made a ‘White Lotus’ Piña Colada Creamer, It Had No Idea How the Season Would End - WSJ",
    description:
      "The Nestlé-owned brand had one response to the show’s season finale: ‘Well this is awkward’",
    url: "https://www.wsj.com/articles/when-coffee-mate-made-a-white-lotus-pina-colada-creamer-it-had-no-idea-how-the-season-would-end-47deb2b6",
    urlToImage: "https://images.wsj.net/im-04199253/social",
    publishedAt: "2025-04-08T23:49:00Z",
    content: null,
  },
];

export { GOOGLE_FUNCTIONS, NEWS };
