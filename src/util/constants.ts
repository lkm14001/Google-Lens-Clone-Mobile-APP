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

const SEARCH_SEGMENTS = [
  {
    id: 1,
    name: "All",
    API_ENDPOINT: "",
  },
  {
    id: 2,
    name: "News",
    API_ENDPOINT: "",
  },
  {
    id: 3,
    name: "Videos",
    API_ENDPOINT: "",
  },
  {
    id: 4,
    name: "Images",
    API_ENDPOINT: "",
  },
];

const SEARCH_RESULTS = [
  {
    position: 1,
    url: "https://www.hello-products.com/?srsltid=AfmBOoqotc81P6tF_Ad8hW3C9Z0kHgpy7P4qpByA9WsHLicxp-Px4dHE",
    title: "Hello Products",
    description:
      "A fresh take on oral care that's all about the good vibes. We're the ones, mixing up delightful ingredients that'll have you doing a happy dance.",
  },
  {
    position: 2,
    url: "https://en.wikipedia.org/wiki/Hello_(Adele_song)",
    title: "Hello (Adele song) - Wikipedia",
    description:
      '"Hello" is a song recorded by British singer-songwriter Adele, released on 23 October 2015 by XL Recordings as the lead single from her third studio album, ...',
  },
  {
    position: 3,
    url: "https://www.youtube.com/watch?v=mHONNcZbwDY",
    title: "Lionel Richie - Hello (Official Music Video) - YouTube",
    description:
      "Lionel Richie - Hello (Official Music Video) · Comments32K. filipoffs. Anyone here in 2025? 1:22:26 · Go to channel. Lionel Richie, Phil Collins ...",
  },
  {
    position: 4,
    url: "https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld",
    title: "Hello - song and lyrics by Adele - Spotify",
    description: "Listen to Hello on Spotify. Song · Adele · 2015.",
  },
  {
    position: 5,
    url: "https://www.hellofresh.com/",
    title:
      "HelloFresh® Meal Kits | Get Free Ready Made Meals For Life + 50 ...",
    description:
      "Every HelloFresh delivery brings you a curated selection of meal kits designed to make dinnertime easy, exciting, and stress-free.",
  },
  {
    position: 6,
    url: "https://supersimple.com/song/hello/",
    title: "Hello! - Super Simple Songs",
    description:
      "Start off your lesson with “Hello!”, a fun and energetic song to talk about how you feel as you greet each other. Gestures & Activities. How To ...",
  },
  {
    position: 7,
    url: "https://shop.highlights.com/hello-magazines-subscription",
    title: "Hello Magazine - Highlights for Children",
    description:
      "Highlights Hello Magazine is a special baby and toddler magazine filled with fun stories and baby activities. Subscribe today and share the joy of reading.",
  },
  {
    position: 8,
    url: "https://en.wiktionary.org/wiki/hello",
    title: "hello - Wiktionary, the free dictionary",
    description:
      "1.4.1 Usage notes 1.4.2 Quotations 1.4.3 Synonyms 1.4.4 Antonyms 1.4.5 Derived terms 1.4.6 Descendants 1.4.7 Translations 1.4.8",
  },
  {
    position: 9,
    url: "https://hello.com/",
    title: "hello network",
    description:
      "We are pausing hello while we get ready to launch something even better. We have loved having you a part of this community, and we want to thank you for all you ...",
  },
  {
    position: 10,
    url: "https://en.wikipedia.org/wiki/Hello",
    title: "Hello - Wikipedia",
    description:
      "Hello ... For other uses, see Hello (disambiguation). Hello is a salutation or greeting in the English language. It is first attested in writing from 1826.",
  },
  {
    position: 11,
    url: "https://hellogames.org/",
    title: "Hello Games: Homepage",
    description:
      "We are a small studio who like to harness technology to make creative, innovative, ambitious and artistic games. Join us on our journey to create the types ...",
  },
  {
    position: 12,
    url: "https://commonpractice.com/products/hello-game",
    title: "Hello Game (Home Edition) - Common Practice",
    description:
      "Hello is a conversation game. It's the easy, non-threatening way to start a conversation with your family and friends about what matters most to you. · Hello ...",
  },
  {
    position: 13,
    url: "https://elementor.com/products/hello-theme/",
    title: "The Best & Fastest WordPress Theme: Hello by Elementor",
    description:
      "The Hello Theme is forever free and a great starting point to control and customize every part of any website you build with Elementor.",
  },
  {
    position: 14,
    url: "https://www.youtube.com/watch?v=k5t0RrijpHg",
    title: "Aqyila - Hello (Official Audio) - YouTube",
    description:
      "Aqyila - Hello (Official Audio) · Comments3.9K. EIDA BANKS. Taking this song into 2025.. who's with me? 2:57. Go to channel · Aqyila ...",
  },
  {
    position: 15,
    url: "https://www.youtube.com/watch?v=yjo_aXygRDI",
    title: "Hello - YouTube",
    description:
      "Provided to YouTube by Beggars Group Digital Ltd. Hello · Adele 25 ℗ 2015 XL Recordings Ltd Released on: 2015-11-20 Engineer: Liam Nolan ...",
  },
  {
    position: 16,
    url: "https://www.youtube.com/watch?v=DfG6VKnjrVw",
    title: "Adele - Hello (Live at the NRJ Awards) - YouTube",
    description:
      "Adele - Hello (Live at the NRJ Awards) · Comments. 45K. anyone in 2025? 6:07. Go to channel · Adele - Hello (Official Music Video).",
  },
  {
    position: 17,
    url: "https://open.spotify.com/track/3sl4dcqSwxHVnLfqwF2jly",
    title:
      "Hello (feat. Dragonette) - song and lyrics by Martin Solveig ... - Spotify",
    description:
      "Listen to Hello (feat. Dragonette) on Spotify. Song · Martin Solveig, Dragonette · 2010.",
  },
  {
    position: 18,
    url: "https://www.hello-products.com/collections/all-toothpastes?srsltid=AfmBOoppRf56jbSheeBBij6jmGfT4YFPmXzwhU3q72rWhIaGSJPe3i7-",
    title: "hello toothpaste - vegan, cruelty free & without sls or gluten",
    description:
      "Discover hello products' range of vegan, natural whitening, and fluoride-free toothpaste designed to give you a cleaner, brighter smile. Our cruelty-free, SLS- ...",
  },
  {
    position: 19,
    url: "https://www.helloheart.com/",
    title:
      "Hello Heart: Cardiovascular Digital Health Program for Employers ...",
    description:
      "We're the first app that helps you track your heart health and get real-time tips. It's a simple yet powerful tool anyone can use to manage their heart health.",
  },
  {
    position: 20,
    url: "https://www.hellogroup.com/",
    title: "Hello Group Inc (NASDAQ:MOMO) - Revolutionizing Digital ...",
    description:
      "Redefining Digital Connections. We're here to revolutionize digital connections by seamlessly blending technology with human experiences. We strive to create ...",
  },
  {
    position: 21,
    url: "https://helloalice.com/",
    title: "Hello Alice: Power your path to profits",
    description:
      "Get financially fit for free. Create a personalized small business growth plan that positions your company for success.",
  },
  {
    position: 22,
    url: "https://nohello.net/en",
    title: "no hello",
    description:
      "no hi| · Imagine calling someone on the phone, going hello! then putting them on hold... ‍♀️ · ❌ Don't do this · ✓ Instead try this.",
  },
  {
    position: 23,
    url: "https://www.hellolucky.com/?srsltid=AfmBOooVv4WoJfPo4ryomGwALIjHjau_n6T5IugvXX0FGlF3q5JBrKMW",
    title: "Welcome to Hello!Lucky",
    description:
      "WE'RE SO GLAD YOU'RE HERE! Hello!Lucky was founded by sisters Eunice Moyle and Sabrina Moyle in 2003 in the San Francisco Bay Area. We're a women-owned and ...",
  },
  {
    position: 24,
    url: "https://www.hlp.city/",
    title: "Hello Lamp Post",
    description:
      "Our AI-powered chats create intelligent virtual agents for the real world, helping you to supercharge your audience engagement.",
  },
  {
    position: 25,
    url: "https://www.amazon.com/hello-Toothpaste-Fluoride-Artificial-Sweetneners/dp/B09PQ61NXF",
    title: "hello Unicorn Sparkle Kids Fluoride Toothpaste, Natural Bubble ...",
    description:
      "Natural bubble gum flavor, ADA approved, ages 2+, no artificial sweeteners, no SLS, gluten free, vegan, pack of 3, 4.2 oz tubes.",
  },
  {
    position: 26,
    url: "https://tysegall.bandcamp.com/album/hello-hi",
    title: "Hello, Hi - Ty Segall - Bandcamp",
    description:
      '"Hello, Hi" by Ty Segall, 10 tracks, 34 minutes, View purchase options, Share Wishlist In Wishlist, Good Morning 00:00 01:56 lyrics, Cement 00:00 02:25 lyrics.',
  },
  {
    position: 27,
    url: "https://www.thehellointherefoundation.org/",
    title: "The Hello In There Foundation",
    description:
      "The Hello in There Foundation is an initiative established by the family of John Prine, to honor his memory and continue the love, kindness and generosity he ...",
  },
  {
    position: 28,
    url: "https://www.hellomonday.com/",
    title: "Hello Monday",
    description:
      "Hello Monday is a creative studio in New York, Copenhagen, and Aarhus that handcrafts digital (and magical) products, brands, and experiences.",
  },
  {
    position: 29,
    url: "https://www.facebook.com/hello/",
    title: "HELLO! - Facebook",
    description:
      "Faith Hill and Tim McGraw's oldest daughter left 'truly at a loss' following latest development https://bit. ly/3FYDbdU · May be an image ...",
  },
  {
    position: 30,
    url: "https://www.facebook.com/brianhullsvoice/videos/hello-by-cartoon-characters-/8725738650809995/",
    title: "Disney and Pixar Sings Adele's Hello | By Brian Hull - Facebook",
    description: "Disney and Pixar Sings Adele's Hello.",
  },
  {
    position: 31,
    url: "https://www.instagram.com/hellomag/?hl=en",
    title: "HELLO! Magazine (@hellomag) • Instagram photos and videos",
    description:
      "Magazine on April 09, 2025. May be an image of. Our special Pet Issue is out this week so we thought we'd take a look back at the late Queen Elizabeth's special ...",
  },
  {
    position: 32,
    url: "https://hellotractor.com/",
    title: "Hello Tractor | Growing Together",
    description:
      "Technology for smarter, better maintained and more profitable tractors. Book Tractor Service Become a Service Provider",
  },
  {
    position: 33,
    url: "https://www.helloboutique.com/?srsltid=AfmBOopUA7_yXFBAGk2yNwLzdEcsRp5U1aRVfpEIjhG0nlpM4VgyjRc2",
    title: "Hello Boutique",
    description:
      "Cut Loose clothing is sewn and dyed in San Francisco using many natural fabrics and non-toxic dyes. Bryn Walker offers comfortable, sophisticated styles.",
  },
  {
    position: 34,
    url: "https://wordpress.org/themes/hello-elementor/",
    title: "Hello Elementor | WordPress Theme",
    description:
      "Commercial theme. This theme is free but offers additional paid commercial upgrades or support. ... Hello Elementor is a lightweight and ...",
  },
  {
    position: 35,
    url: "https://hello-tomorrow.org/",
    title: "Hello Tomorrow: Homepage",
    description:
      "We accelerate radical solutions to improve human and planetary health, leveraging the power of deep tech ventures.",
  },
  {
    position: 36,
    url: "https://www.sandyhookpromise.org/our-programs/start-with-hello/",
    title: "Start With Hello: Creating Kinder Schools - Sandy Hook Promise",
    description:
      "Start With Hello is one of Sandy Hook Promise's no-cost Know the Signs programs and teaches students to be more socially inclusive and connected to each other.",
  },
  {
    position: 37,
    url: "https://thisishello.com/us/",
    title: "Home - Hello US",
    description:
      "© 2024 Hello. All Rights Reserved. This Is Hello Inc, This Is Hello Inc,. 250 Hudson St 2nd Floor, New York, NY, 10013, USA 250 Hudson St 2nd Floor, New ...",
  },
  {
    position: 38,
    url: "https://www.helloruby.com/",
    title: "Hello Ruby: Home",
    description:
      "HeLlo! Hello Ruby is the world's most whimsical way to learn about computers, technology and programming. The story started with a book, and now Ruby continues ...",
  },
  {
    position: 39,
    url: "https://www.youtube.com/c/HelloFutureMe",
    title: "Hello Future Me - YouTube",
    description: "Share your videos with friends, family, and the world.",
  },
  {
    position: 40,
    url: "https://www.gnu.org/software/hello/",
    title: "Hello - GNU Project - Free Software Foundation",
    description:
      "The GNU Hello program produces a familiar, friendly greeting. Yes, this is another implementation of the classic program that prints “Hello, world!” when you ...",
  },
  {
    position: 41,
    url: "https://www.helloproducts.ca/en-ca",
    title: "Hello Products: Healthy Toothpaste & Mouthwash",
    description:
      "Hello toothpastes are free of dyes, artificial sweeteners/flavours, parabens, and gluten. Our toothpastes are also vegan and cruelty-free.",
  },
  {
    position: 42,
    url: "https://helloperiod.com/?srsltid=AfmBOopNK2Wus_CMSIeIWsrxUTUkeWIEngnrMIWhOl7fWbYBzgLPukQj",
    title: "Hello Period | Sustainable and Comfortable Period Care",
    description:
      "We are here to make your periods easier, more comfortable, cheaper and better for the environment. Oh, and cute, we're all about cuteness.",
  },
  {
    position: 43,
    url: "https://apps.apple.com/us/app/learn-english-ef-hello-speak/id1324622665",
    title: "Learn English: EF Hello Speak - App Store",
    description:
      "Master English with casual 5-minute sessions and learn step-by-step, at your own pace. Practice conversations with an AI partner in lifelike scenarios.",
  },
  {
    position: 44,
    url: "https://www.hellosailornc.com/",
    title: "Hello, Sailor",
    description:
      "A bright and sunny waterfront restaurant and bar, open all day. Best restaurant in Lake Norman, best view of the water. 704-997-5365.",
  },
  {
    position: 45,
    url: "https://www.hellopizza.com/",
    title: "Home | Hello Pizza in Edina, MN",
    description:
      "Hello Pizza Home 3904 Sunnyside Road, Edina, MN 55424 952.303.4514 Toggle Navigation icon Previous Slide Next Slide",
  },
  {
    position: 46,
    url: "https://hellobio.com/",
    title:
      "Hello Bio: Antibodies, Biochemicals, Labels and Reagents for Life ...",
    description:
      "Novel cutting-edge biochemicals, antibodies & reagents for neuroscience, cell biology & cancer research, only from Hello Bio",
  },
  {
    position: 47,
    url: "https://helloemerson.com/",
    title: "Hello Emerson",
    description:
      "I am the songwriter for the band Hello Emerson — and I also work at my local library. I love both deeply. I created The Weeksheet to help balance my creative ...",
  },
  {
    position: 48,
    url: "https://www.reddit.com/r/Music/comments/1gmt8ch/adeles_hello_not_her_original/",
    title: 'Adele\'s "Hello" - not her original? : r/Music - Reddit',
    description:
      'Adele\'s "Hello" was actually a cover, or it took heavy samples from some song called "The other side" by....what seems to a metal band?',
  },
  {
    position: 49,
    url: "https://music.apple.com/us/music-video/hello/1544490140",
    title: "Hello - Music Video by Adele",
    description:
      "More By Adele · Easy On Me · Rolling in the Deep · Oh My God · I Drink Wine · Set Fire to the Rain (Live at The Royal Albert Hall) · Someone Like You.",
  },
  {
    position: 50,
    url: "https://www.sanrio.com/?srsltid=AfmBOop-ulR-YAh9QTtsYXsVFqi6skjofMf0RID0AsXKOawLfunSdXb7",
    title: "The Official Home of Hello Kitty & Friends",
    description:
      "Befriend beloved characters as you restore a mysterious island, solve ancient puzzles, cook delicious dishes, customize your avatar and your cabins, and so ...",
  },
  {
    position: 51,
    url: "https://commonpractice.com/",
    title: "Common Practice",
    description:
      "Hello is a conversation game. It's the safe, easy, and fun way to talk about living and dying and what matters most.",
  },
  {
    position: 52,
    url: "https://hello-sunshine.com/",
    title: "Hello Sunshine: Home",
    description:
      "Hello Sunshine aims to broaden perspective and empower women by giving them authorship, inspiring agency, and creating a platform to help them shape culture and ...",
  },
  {
    position: 53,
    url: "https://www.hellobello.com/?srsltid=AfmBOor0L_-l7z_osXqnkgPCUHpaSlqi8H0na9SxTkakUh9uhIJpGp1Q",
    title: "Hello Bello: Premium, Affordable Baby Products",
    description:
      "Hello Bello brings eco-conscious, hypoallergenic diapers right to your door—at a fraction of the price as other similar brands ...",
  },
  {
    position: 54,
    url: "https://www.helloadorn.com/?srsltid=AfmBOooFTiM6S6UKwSb3R2yB4o9u7PTzNcWRL3CDNZMY4Ybr0RtMJdzV",
    title:
      "Hello Adorn: Handmade Waterproof Jewelry | Gold Fill Sterling Silver",
    description:
      "We prioritized happiness and built Hello Adorn. With a team of 20+ of the coolest people around, we now work side-by-side, making jewelry and creating lives we ...",
  },
  {
    position: 55,
    url: "https://hello.naeyc.org/",
    title: "Home - HELLO",
    description:
      "Copyright National Association for the Education of Young Children. All rights reserved. Powered by Higher Logic.",
  },
  {
    position: 56,
    url: "https://hello.ef.com/",
    title: "EF Hello",
    description:
      "World's most trusted way to learn a language. Become fluent with your personal AI tutor, Addi. Start for Free.",
  },
  {
    position: 57,
    url: "https://www.hello-nature.com/us/",
    title: "Innovative Leader in Biostimulants and Organic Fertilizers",
    description:
      "HELLO NATURE is revolutionizing soil regeneration. We've just launched the largest manufacturing plant on the planet, using an unparalleled production process.",
  },
  {
    position: 58,
    url: "https://www.tiktok.com/@ayrastarr/video/7209435955936283909?lang=en",
    title: "Hello - TikTok",
    description:
      "Hello. Tomato I Just Wanted to Say Hi · It Started with A Hello · Ayra Starr Husband · I Just Came to Say Hello Bingbong · Ayra Starr Parents.",
  },
  {
    position: 59,
    url: "https://www.cisa.gov/sites/default/files/2022-11/The%20Power%20of%20Hello%20Guide%20for%20Houses%20of%20Worship_508.pdf",
    title: "The Power of Hello Guide for Houses of Worship - CISA",
    description:
      "Simply saying “Hello” can prompt a casual conversation with a new person, providing an opportunity to observe and establish a connection. The OHNO approach– ...",
  },
  {
    position: 60,
    url: "https://hello-robot.com/",
    title: "Hello Robot : Open Source Mobile Manipulator for AI & Robotics",
    description:
      "The world's only lightweight, capable, developer-friendly mobile manipulator. Greater dexterity. Enhanced support for Embodied AI. Ready for researchers, ...",
  },
  {
    position: 61,
    url: "https://about.fb.com/news/2015/04/introducing-hello/",
    title: "Introducing Hello | Meta - Facebook",
    description:
      "Hello connects with Facebook so you can see who's calling, block unwanted calls and search for people and places.",
  },
  {
    position: 62,
    url: "https://www.hellolovelybox.com/?srsltid=AfmBOorprPottWP6S8psB92k1PkajYxcd2-GMyHw7JmxVJjfUhIIeKID",
    title: "Hello Lovely Box",
    description:
      "Shop The Vault · Free Mystery Book - Add on with 3 books · Finding You by Lena Hendrix · Block Shot by Kennedy Ryan · Salt Kiss by Sierra Simone · Hold Me While ...",
  },
  {
    position: 63,
    url: "https://www.hello-dmc.com/",
    title: "Home - Hello!",
    description:
      "We're a healthy mix of detail-oriented and deadline-driven creative thinkers with decades of experience designing, planning, and executing engaging live events.",
  },
  {
    position: 64,
    url: "https://hellosundaymorning.org/",
    title: "Hello Sunday Morning | Change Your Relationship with Alcohol",
    description:
      "Hello Sunday Morning offers valuable tips and strategies to help you improve your relationship with alcohol.",
  },
  {
    position: 65,
    url: "https://www.helloautogroup.com/",
    title:
      "Hello Auto Group | Mazda - Subaru - Kia | Valencia | Temecula | San ...",
    description:
      "Driven By Community. We have pillars that we stand by and support company-wide. These pillars are what makes Hello Gives Back a reality for our business.",
  },
  {
    position: 66,
    url: "https://playperidot.com/en/experiences/hello-dot",
    title: "Hello, Dot - Peridot",
    description:
      "Say Hello, Dot! A mixed reality Peridot experience. Hello, Dot. Download Now. Learn More · Download on Apple Vision Pro Download on the Meta Horizons Store ...",
  },
  {
    position: 67,
    url: "https://helloaudio.fm/",
    title: "Hello Audio: Home",
    description:
      "Quickly turn your content into private podcasts your audience can listen to on-the-go. Try It Free for 7 Days (no credit card required)",
  },
  {
    position: 68,
    url: "https://hellohealth.com/",
    title: "Hello Health",
    description:
      "The new HelloHealth app solves multiple problems across the entire healthcare ecosystem. It eases the burden on physicians while giving consumers exactly what ...",
  },
  {
    position: 69,
    url: "https://www.instagram.com/helloproducts/?hl=en",
    title: "hello products (@helloproducts) • Instagram photos and videos",
    description:
      "making the world a friendlier place ❤️ your fav personal + oral care products friendly ingredients vegan & cruelty-free. www.hello- ...",
  },
  {
    position: 70,
    url: "https://www.dictionary.com/browse/hello",
    title: "HELLO Definition & Meaning - Dictionary.com",
    description:
      "interjection (used derisively to question the comprehension, intelligence, or common sense of the person being addressed): You're gonna go out with him?",
  },
  {
    position: 71,
    url: "https://helloinsight.org/",
    title:
      "Hello Insight - Automated Evaluation for Youth Development Programs",
    description:
      "Hello Insight unites a diverse community of young people and programs, using our smart online platform for continuous improvement.",
  },
  {
    position: 72,
    url: "https://support.microsoft.com/en-us/windows/configure-windows-hello-dae28983-8242-bb2a-d3d1-87c9d265a5f0",
    title: "Configure Windows Hello - Microsoft Support",
    description:
      "You can use the Settings app to configure and manage Windows Hello. In the Settings app on your Windows device, select Accounts > Sign-in options.",
  },
  {
    position: 73,
    url: "https://www.thehellohi.com/",
    title: "The Hello Hi",
    description:
      "While our atmosphere may veer mysteriously off course from your standard tiki joint, the spirit of tiki is alive and well at The Hello Hi. This spinning world ...",
  },
  {
    position: 74,
    url: "https://www.stereogum.com/2275540/the-number-ones-adeles-hello/columns/the-number-ones/",
    title: "The Number Ones: Adele's “Hello” - Stereogum",
    description:
      "Working on “Hello” with Greg Kurstin, Adele was clear that she didn't just want to write a pop song. Kurstin later said that the two of them ...",
  },
  {
    position: 75,
    url: "https://dictionary.cambridge.org/dictionary/english/hello",
    title: "HELLO | English meaning - Cambridge Dictionary",
    description:
      "used when meeting or greeting someone: Hello, Paul. I haven't seen you for ages. I know her vaguely - we've exchanged hellos a few times.",
  },
  {
    position: 76,
    url: "https://helloretail.com/",
    title: "Welcome to Personalization by Hello Retail - Hello Retail",
    description:
      "Learn about core solutions. We deliver exactly what your online shoppers want, when they want it, where they want it, and possibly… before they even know they ...",
  },
  {
    position: 77,
    url: "https://podcasts.apple.com/us/podcast/hello-monday-with-jessi-hempel/id1453893304",
    title: "Hello Monday with Jessi Hempel - Apple Podcasts",
    description:
      "Meet LinkedIn's Hello Monday with Jessi Hempel! Each week, Jessi explores the changing nature of work and how that work is changing us.",
  },
  {
    position: 78,
    url: "https://www.thesaurus.com/browse/hello",
    title: "84 Synonyms & Antonyms for HELLO | Thesaurus.com",
    description:
      "hello · bonjour · buenas noches · buenos dias · good day · good morning · hey · hi-ya · how are you, how goes it, howdy-do, shalom, what's happening ...",
  },
  {
    position: 79,
    url: "https://www.hellofromthehallowoods.com/",
    title: "Hello From The Hallowoods | Horror Podcast",
    description:
      "In this award-winning queer fiction podcast, an eldritch narrator follows the increasingly connected residents of the forest at the end of the world.",
  },
  {
    position: 80,
    url: "https://x.com/hellogames?lang=en",
    title: "Hello Games (@hellogames) / X",
    description:
      "We're dedicated to the craft of creating games that will make you cry joyful rainbow tears. Currently working on @NoMansSky!",
  },
  {
    position: 81,
    url: "https://hellowordl.net/",
    title: "hello wordl",
    description: "A word-guessing game.",
  },
  {
    position: 82,
    url: "https://www.linkedin.com/company/hello-tomorrow-challenge/",
    title: "Hello Tomorrow | LinkedIn",
    description:
      "Building a collaborative ecosystem that leverages the power of deep technologies to tackle world challenges.",
  },
  {
    position: 83,
    url: "https://hellomello.com/?srsltid=AfmBOoqFyyV_7HXQTLguXq4621RL1lvb9dKMTLfnPdVJyAeEg3zxMFXv",
    title: "Hello Mello: Women's Loungewear | Loungewear For Women",
    description:
      "Hello Mello was founded to make life comfier! We create cozy, lightweight loungewear for women designed with super soft fabrics and trendy prints. You won't ...",
  },
  {
    position: 84,
    url: "https://www.omniglot.com/language/phrases/hello.htm",
    title: "Translations of Hello and general greetings in many languages",
    description:
      "This page shows equivalents of 'hello' or similar general greetings in many languages. Note: some languages have different ways of saying hello on the ...",
  },
  {
    position: 85,
    url: "https://www.musicforkiddos.com/blog/say-hello-a-movement-based-hello-song-for-kids",
    title:
      "Say Hello: A Movement-Based Hello Song For Kids! - Music for Kiddos",
    description:
      "A movement-based hello song. Speaking of movement, I have a movement-based hello song that your students will LOVE. Say Hello (from your head to ...",
  },
  {
    position: 86,
    url: "https://play.google.com/store/apps/details?id=com.hellotalk&hl=en_US",
    title: "HelloTalk - Learn Languages - Apps on Google Play",
    description:
      "Practice languages with native speakers on HelloTalk! We recently introduced HelloTalk Live and Voiceroom - interactive language and culture events to help ...",
  },
  {
    position: 87,
    url: "https://www.hellomaryband.com/",
    title: "Hello Mary: Home",
    description:
      "seth@baileyblues.com · lschiffman@tbaagency.com · lisag@grandstandhq.com · hellomaryband@gmail.com · Contact · Emita Ox. Out Now. Tour. Tour Tour Tour. May ...",
  },
  {
    position: 88,
    url: "https://helloalfred.com/",
    title: "Hello Alfred: Home",
    description:
      "Welcome to the future of living. For Residents For Properties Adela at Mimo Bay • Miami, FL Argyle House • Hollywood, CA Laureat • Fort Lauderdale, FL",
  },
  {
    position: 89,
    url: "https://developers.google.com/codelabs/tensorflow-1-helloworld",
    title: 'Say hello to the "Hello, World" of machine learning',
    description:
      'In this codelab, you\'ll learn the basic "Hello, World" of ML, where instead of programming explicit rules in a language, such as Java or C++, ...',
  },
  {
    position: 90,
    url: "https://www.netflix.com/title/81323200",
    title: "Watch Hello, Me! | Netflix Official Site",
    description:
      "Hello, Me! ... Miserable and unsuccessful, a woman thinks she's lost all her spark — until one day, her spunky younger self appears in front of her demanding ...",
  },
  {
    position: 91,
    url: "https://www.helloartists.com/",
    title: "Hello Artists",
    description:
      "Hello Artists is an independent creative agency for artists, run by artists, representing Photographers, Directors, Set Designers, Prop Stylists, Food Stylists ...",
  },
  {
    position: 92,
    url: "http://www.hellovino.com/",
    title: "Hello Vino: Wine Assistant App",
    description:
      "The Hello Vino app uses artificial intelligence to learn about your wine preferences. As you tap through the choices, scan wine labels and rate your favorites, ...",
  },
  {
    position: 93,
    url: "https://www.hello.one/",
    title: "HELLO Labs: Home",
    description:
      "HELLO Club Vip Access sign up. Register your interest and be part of the first exclusive club premium token drop. ... Tech entrepreneurs from all over the world ...",
  },
  {
    position: 94,
    url: "https://adele.fandom.com/wiki/Hello_(music_video)",
    title: "Hello (music video) | Adele Wiki - Fandom",
    description:
      "The music video shows an emotional Adele, thinking about her previous boyfriend (played by Tristan Wilds), blaming herself for the break-up.",
  },
  {
    position: 95,
    url: "https://www.youtube.com/watch?v=M5azNpTwVk8&pp=0gcJCdgAo7VqN5tD",
    title: "Hello (from the Inside) An Adele Parody by Chris Mann - YouTube",
    description:
      "Hello (from the Inside) An Adele Parody by Chris Mann · Comments15K. kitkatmac100. Little did I know when I first watched this and laughed so ...",
  },
  {
    position: 96,
    url: "https://www.reddit.com/r/popheads/comments/1ew1864/the_number_ones_adeles_hello/",
    title: "The Number Ones: Adele's “Hello” : r/popheads - Reddit",
    description:
      "The [FRESH] thread for “Hello” became our biggest post of all time at one point. It had only about 200 upvotes. Ah, humble beginnings.",
  },
  {
    position: 97,
    url: "https://www.helloinnovation.com/",
    title: "Hello Innovation / Home",
    description:
      "Hello Innovation · Director of IT (Information Technology) · Full Stack Developer - React / Node.js Detroit, MI · blog 8 Life Hacks To Make This Year The ...",
  },
  {
    position: 98,
    url: "https://www.hellotalk.com/",
    title: "HelloTalk - Language Exchange - Learn Languages for Free",
    description:
      "The largest language exchange app. Learn languages with native speakers, explore culture, and have fun practicing languages!",
  },
];
export { GOOGLE_FUNCTIONS, NEWS, SEARCH_RESULTS, SEARCH_SEGMENTS };
