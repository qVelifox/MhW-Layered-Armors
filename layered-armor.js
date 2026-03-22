const armors = [
  {id:1,name:"Leather"},{id:2,name:"Hunter"},{id:3,name:"Anja"},{id:4,name:"Jagras"},{id:5,name:"Bone"},
  {id:6,name:"Alloy"},{id:7,name:"Kestodon"},{id:8,name:"Gajau"},{id:9,name:"Vespoid"},{id:10,name:"Kulu"},
  {id:11,name:"Pukei"},{id:12,name:"Jyura"},{id:13,name:"Barroth"},{id:14,name:"Kadachi"},{id:15,name:"Chainmail"},
  {id:17,name:"Hornetaur"},{id:19,name:"(Male) King Beetle"},{id:20,name:"Rathian"},{id:21,name:"Girros"},
  {id:22,name:"Tzitzi"},{id:23,name:"Lumu"},{id:24,name:"High Metal"},{id:25,name:"Death Stench"},
  {id:26,name:"Legiana"},{id:27,name:"Baan"},{id:28,name:"Odogaron"},{id:30,name:"Ingot"},{id:32,name:"Rathalos"},
  {id:33,name:"Diablos"},{id:34,name:"Kirin"},{id:35,name:"Brigade"},{id:36,name:"Pulverizing Feather"},
  {id:37,name:"Leather α"},{id:38,name:"Leather β"},{id:39,name:"Chainmail α"},{id:40,name:"Chainmail β"},
  {id:41,name:"Hunter α"},{id:42,name:"Hunter β"},{id:43,name:"Bone α"},{id:44,name:"Bone β"},
  {id:45,name:"Alloy α"},{id:46,name:"Alloy β"},{id:47,name:"Gajau α"},{id:48,name:"Gajau β"},
  {id:49,name:"Kestodon α"},{id:50,name:"Kestodon β"},{id:51,name:"Vespoid α"},{id:52,name:"Vespoid β"},
  {id:53,name:"Gastodon α"},{id:54,name:"Gastodon β"},{id:55,name:"Barnos α"},{id:56,name:"Barnos β"},
  {id:57,name:"Hornetaur α"},{id:58,name:"Hornetaur β"},{id:61,name:"Jagras α"},{id:62,name:"Jagras β"},
  {id:63,name:"Kulu α"},{id:64,name:"Kulu β"},{id:65,name:"Pukei α"},{id:66,name:"Pukei β"},
  {id:67,name:"Jyura α"},{id:68,name:"Jyura β"},{id:69,name:"Barroth α"},{id:70,name:"Barroth β"},
  {id:71,name:"Kadachi α"},{id:72,name:"Kadachi β"},{id:73,name:"Rathian α"},{id:74,name:"Rathian β"},
  {id:75,name:"Girros α"},{id:76,name:"Girros β"},{id:77,name:"Tzitzi α"},{id:78,name:"Tzitzi β"},
  {id:79,name:"Lumu α"},{id:80,name:"Lumu β"},{id:81,name:"Odogaron α"},{id:82,name:"Odogaron β"},
  {id:83,name:"Dodogama α"},{id:84,name:"Dodogama β"},{id:85,name:"Lavasioth α"},{id:86,name:"Lavasioth β"},
  {id:87,name:"Rath Heart α"},{id:88,name:"Rath Heart β"},{id:89,name:"High Metal α"},{id:90,name:"High Metal β"},
  {id:91,name:"Ingot α"},{id:92,name:"Ingot β"},{id:93,name:"Anja α"},{id:94,name:"Anja β"},
  {id:95,name:"Legiana α"},{id:96,name:"Legiana β"},{id:97,name:"Baan α"},{id:98,name:"Baan β"},
  {id:99,name:"Vaal Hazak α"},{id:100,name:"Vaal Hazak β"},{id:101,name:"Rathalos α"},{id:102,name:"Rathalos β"},
  {id:103,name:"Diablos α"},{id:104,name:"Diablos β"},{id:105,name:"Kirin α"},{id:106,name:"Kirin β"},
  {id:107,name:"Nergigante α"},{id:108,name:"Nergigante β"},{id:109,name:"Uragaan α"},{id:110,name:"Uragaan β"},
  {id:111,name:"Rath Soul α"},{id:112,name:"Rath Soul β"},{id:113,name:"Diablos Nero α"},{id:114,name:"Diablos Nero β"},
  {id:115,name:"Bazel α"},{id:116,name:"Bazel β"},{id:117,name:"(Male) King Beetle α"},{id:118,name:"(Male) King Beetle β"},
  {id:119,name:"Brigade α"},{id:120,name:"Brigade β"},{id:121,name:"Damascus α"},{id:122,name:"Damascus β"},
  {id:123,name:"Dober α"},{id:124,name:"Dober β"},{id:125,name:"Xeno'jiiva α"},{id:126,name:"Xeno'jiiva β"},
  {id:127,name:"Kaiser α"},{id:128,name:"Kaiser β"},{id:129,name:"Kushala α"},{id:130,name:"Kushala β"},
  {id:131,name:"Skull Mask α"},{id:133,name:"Death Stench α"},{id:134,name:"Death Stench β"},
  {id:135,name:"Guild Cross α"},{id:136,name:"Guild Cross β"},{id:139,name:"Zorah α"},{id:140,name:"Zorah β"},
  {id:141,name:"Commission α"},{id:142,name:"Commission β"},{id:145,name:"Brigade [Layered]"},
  {id:146,name:"Guild Cross [Layered]"},{id:147,name:"Blossom [Layered]"},{id:148,name:"Diver [Layered]"},
  {id:149,name:"Harvest [Layered]"},{id:150,name:"Orion [Layered]"},{id:151,name:"Faux Felyne α"},
  {id:152,name:"Mosswine Mask α"},{id:153,name:"Gala Suit [Layered]"},{id:155,name:"Ryu [Layered]"},
  {id:156,name:"Sakura [Layered]"},{id:159,name:"Bayek [Layered]"},{id:161,name:"Shamos"},
  {id:162,name:"Shamos α"},{id:163,name:"Shamos β"},{id:164,name:"(Female) Butterfly"},
  {id:165,name:"(Female) Butterfly α"},{id:166,name:"(Female) Butterfly β"},{id:169,name:"Origin"},
  {id:174,name:"Dragonseal Earrings α"},{id:176,name:"Strategist Spectacles α"},
  {id:178,name:"Dragonking Eyepatch α"},{id:183,name:"Kulve Taroth α"},{id:184,name:"Kulve Taroth β"},
  {id:185,name:"Blossom"},{id:186,name:"Diver"},{id:187,name:"Harvest"},{id:188,name:"Orion"},
  {id:189,name:"Gala Suit"},{id:190,name:"Samurai [Layered]"},{id:191,name:"Vangis α"},
  {id:192,name:"Vangis β"},{id:194,name:'Bushi "Sabi" [Layered]'},{id:195,name:'Bushi "Homare" [Layered]'},
  {id:196,name:"Drachen α"},{id:197,name:"Blossom α"},{id:198,name:"Diver α"},{id:199,name:"Harvest α"},
  {id:200,name:"Orion α"},{id:201,name:"Gala Suit α"},{id:202,name:"(Male) Butterfly"},
  {id:203,name:"(Male) Butterfly α"},{id:204,name:"(Male) Butterfly β"},{id:205,name:"(Female) Queen Beetle"},
  {id:206,name:"(Female) Queen Beetle α"},{id:207,name:"(Female) Queen Beetle β"},
  {id:208,name:"Vaal Hazak γ"},{id:209,name:"Kirin γ"},{id:210,name:"Kaiser γ"},
  {id:211,name:"Kushala γ"},{id:212,name:"Nergigante γ"},{id:213,name:"Zorah γ"},
  {id:214,name:"Xeno'jiiva γ"},{id:219,name:"Azure Starlord α"},{id:220,name:"Dante α"},
  {id:221,name:"Empress α"},{id:222,name:"Empress β"},{id:223,name:"Sealed Eyepatch α"},
  {id:224,name:"Shadow Shades α"},{id:225,name:"Kulu-Ya-Ku Head α"},{id:226,name:"Wiggler Head α"},
  {id:227,name:"Butterfly [Layered]"},{id:228,name:"Death Stench [Layered]"},
  {id:229,name:"Shadow Shades [Layered]"},{id:230,name:"Dante [Layered]"},
  {id:231,name:"Drachen [Layered]"},{id:232,name:"Mosswine Mask [Layered]"},
  {id:233,name:"Faux Felyne [Layered]"},{id:234,name:"Commission [Layered]"},
  {id:235,name:"Sealed Eyepatch [Layered]"},{id:236,name:"Wiggler Head [Layered]"},
  {id:237,name:"Origin [Layered]"},{id:238,name:"Beetle [Layered]"},{id:240,name:"Skull Mask [Layered]"},
  {id:241,name:"Kulu-Ya-Ku [Layered]"},{id:243,name:"Empress γ"},{id:244,name:"Geralt α"},
  {id:245,name:"Ciri α"},{id:246,name:"Geralt [Layered]"},{id:247,name:"Ciri [Layered]"},
  {id:248,name:"Kulve Taroth γ"},{id:249,name:"Defender α"},{id:250,name:"Direwolf [Layered]"},
  {id:252,name:"Bone α +"},{id:253,name:"Bone β +"},{id:254,name:"Alloy α +"},{id:255,name:"Alloy β +"},
  {id:256,name:"Vespoid α +"},{id:257,name:"Vespoid β +"},{id:258,name:"Hornetaur α +"},{id:259,name:"Hornetaur β +"},
  {id:260,name:"Kestodon α +"},{id:261,name:"Kestodon β +"},{id:262,name:"Gajau α +"},{id:263,name:"Gajau β +"},
  {id:264,name:"Shamos α +"},{id:265,name:"Shamos β +"},{id:266,name:"Gastodon α +"},{id:267,name:"Gastodon β +"},
  {id:268,name:"Barnos α +"},{id:269,name:"Barnos β +"},{id:270,name:"Wulg α +"},{id:271,name:"Wulg β +"},
  {id:272,name:"Cortos α +"},{id:273,name:"Cortos β +"},{id:274,name:"Jagras α +"},{id:275,name:"Jagras β +"},
  {id:276,name:"Tzitzi α +"},{id:277,name:"Tzitzi β +"},{id:278,name:"Girros α +"},{id:279,name:"Girros β +"},
  {id:280,name:"Dodogama α +"},{id:281,name:"Dodogama β +"},{id:282,name:"Kulu α +"},{id:283,name:"Kulu β +"},
  {id:284,name:"Pukei α +"},{id:285,name:"Pukei β +"},{id:286,name:"Barroth α +"},{id:287,name:"Barroth β +"},
  {id:288,name:"Jyura α +"},{id:289,name:"Jyura β +"},{id:290,name:"Beo α +"},{id:291,name:"Beo β +"},
  {id:292,name:"Kadachi α +"},{id:293,name:"Kadachi β +"},{id:294,name:"High Metal α +"},{id:295,name:"High Metal β +"},
  {id:296,name:"Banbaro α +"},{id:297,name:"Banbaro β +"},{id:298,name:"Anja α +"},{id:299,name:"Anja β +"},
  {id:300,name:"Rathian α +"},{id:301,name:"Rathian β +"},{id:302,name:"Rath Heart α +"},{id:303,name:"Rath Heart β +"},
  {id:304,name:"Lumu α +"},{id:305,name:"Lumu β +"},{id:306,name:"Lumu Phantasm α +"},{id:307,name:"Lumu Phantasm β +"},
  {id:308,name:"Pukei Lagoon α +"},{id:309,name:"Pukei Lagoon β +"},{id:310,name:"Viper Kadachi α +"},{id:311,name:"Viper Kadachi β +"},
  {id:312,name:"Baan α +"},{id:313,name:"Baan β +"},{id:314,name:"Leather [Layered]"},{id:315,name:"Chain [Layered]"},
  {id:316,name:"Hunter α [Layered]"},{id:317,name:"Hunter β [Layered]"},{id:318,name:"Bone [Layered]"},
  {id:319,name:"Alloy [Layered]"},{id:320,name:"Vespoid [Layered]"},{id:321,name:"Hornetaur [Layered]"},
  {id:322,name:"Kestodon [Layered]"},{id:323,name:"Gajau [Layered]"},{id:324,name:"Acrobat Earrings α +"},
  {id:325,name:"Goldspring [Layered] Head"},{id:326,name:"Shamos [Layered]"},{id:327,name:"Faux Kelbi [Layered] Head"},
  {id:328,name:"Ingot α +"},{id:329,name:"Ingot β +"},{id:330,name:"Barioth α +"},{id:331,name:"Barioth β +"},
  {id:332,name:"Rathalos α +"},{id:333,name:"Rathalos β +"},{id:334,name:"Diablos α +"},{id:335,name:"Diablos β +"},
  {id:336,name:"Legiana α +"},{id:337,name:"Legiana β +"},{id:338,name:"Odogaron α +"},{id:339,name:"Odogaron β +"},
  {id:340,name:"Lavasioth α +"},{id:341,name:"Lavasioth β +"},{id:342,name:"Uragaan α +"},{id:343,name:"Uragaan β +"},
  {id:344,name:"Nargacuga α +"},{id:345,name:"Nargacuga β +"},{id:346,name:"Glavenus α +"},{id:347,name:"Glavenus β +"},
  {id:348,name:"Brachydios α +"},{id:349,name:"Brachydios β +"},{id:350,name:"Tigrex α +"},{id:351,name:"Tigrex β +"},
  {id:352,name:"Fulgur α +"},{id:353,name:"Fulgur β +"},{id:354,name:"Jagras [Layered]"},{id:355,name:"Kulu [Layered]"},
  {id:356,name:"Black Belt α +"},{id:357,name:"Black Belt β +"},{id:358,name:"Dragonking Eyepatch [Layered]"},
  {id:359,name:"Strategist Spectacles [Layered]"},{id:360,name:"Pulverizing Feather [Layered]"},
  {id:361,name:"Tzitzi [Layered]"},{id:362,name:"Girros [Layered]"},{id:363,name:"Hoarcry α +"},{id:364,name:"Hoarcry β +"},
  {id:365,name:"Rath Soul α +"},{id:366,name:"Rath Soul β +"},{id:367,name:"Diablos Nero α +"},{id:368,name:"Diablos Nero β +"},
  {id:369,name:"Death Garon α +"},{id:370,name:"Death Garon β +"},{id:371,name:"Acidic Glavenus α +"},{id:372,name:"Acidic Glavenus β +"},
  {id:373,name:"Artian α"},{id:374,name:"Artian β"},{id:375,name:"Skull Scarf [Layered]"},
  {id:376,name:"Pukei α [Layered]"},{id:377,name:"Pukei β [Layered]"},{id:378,name:"Dober α +"},{id:379,name:"Dober β +"},
  {id:380,name:"Damascus α +"},{id:381,name:"Damascus β +"},{id:382,name:"Rimeguard α +"},{id:383,name:"Rimeguard β +"},
  {id:384,name:"Pride α +"},{id:385,name:"Pride β +"},{id:386,name:"Fellshroud α +"},{id:387,name:"Fellshroud β +"},
  {id:388,name:"Kaiser α +"},{id:389,name:"Kaiser β +"},{id:390,name:"Kushala α +"},{id:391,name:"Kushala β +"},
  {id:392,name:"Kirin α +"},{id:393,name:"Kirin β +"},{id:394,name:"Tentacle α +"},{id:395,name:"Tentacle β +"},
  {id:396,name:"Clockwork α + [Layered]"},{id:397,name:"Barroth [Layered]"},{id:398,name:"Guild Palace α +"},{id:399,name:"Guild Palace β +"},
  {id:400,name:"Clockwork α +"},{id:401,name:"Clockwork β +"},{id:402,name:"Crystal Earring [Layered]"},
  {id:403,name:"Ruinous α +"},{id:404,name:"Ruinous β +"},{id:405,name:"Shara Ishvalda α +"},{id:406,name:"Shara Ishvalda β +"},
  {id:407,name:"Esurient α +"},{id:408,name:"Esurient β +"},{id:409,name:"Anja α [Layered]"},{id:410,name:"Anja β [Layered]"},
  {id:411,name:"Guildwork α +"},{id:412,name:"Guildwork β +"},{id:413,name:"Showman Earrings α +"},
  {id:414,name:"Golden Lune α +"},{id:415,name:"Golden Lune β +"},{id:416,name:"Silver Sol α +"},{id:417,name:"Silver Sol β +"},
  {id:418,name:"Jyura [Layered]"},{id:419,name:"Kadachi [Layered]"},{id:420,name:"Zinogre α +"},{id:421,name:"Zinogre β +"},
  {id:422,name:"Stygian α +"},{id:423,name:"Stygian β +"},{id:424,name:"Garuga α +"},{id:425,name:"Garuga β +"},
  {id:426,name:"Zorah α +"},{id:427,name:"Zorah β +"},{id:428,name:"Golden α +"},{id:429,name:"Golden β +"},
  {id:430,name:"Grand God's Peer α +"},{id:431,name:"Grand God's Peer β +"},{id:432,name:"Brachydium α +"},{id:433,name:"Brachydium β +"},
  {id:434,name:"Safi α +"},{id:435,name:"Safi β +"},{id:436,name:"Escadora α +"},{id:437,name:"Escadora β +"},
  {id:438,name:"Sealed Dragon Cloth α +"},{id:439,name:"Wyverian Ears α +"},{id:440,name:"Faux Aptonoth [Layered]"},
  {id:441,name:"Duffle Penguin α +"},{id:442,name:"Empress α +"},{id:443,name:"Empress β +"},
  {id:444,name:"Kulve Taroth α +"},{id:445,name:"Kulve Taroth β +"},{id:446,name:"Rose α +"},{id:447,name:"Lumu [Layered]"},
  {id:448,name:"Passionate α +"},{id:449,name:"Rathian α [Layered]"},{id:450,name:"Demonlord α +"},
  {id:451,name:"Rathian β [Layered]"},{id:452,name:"Oolong α +"},{id:453,name:"Radobaan α [Layered]"},
  {id:454,name:"Astral α +"},{id:455,name:"Radobaan β [Layered]"},{id:456,name:"Layered Rose"},
  {id:457,name:"Passionate [Layered]"},{id:458,name:"Demonlord [Layered]"},{id:459,name:"Oolong [Layered]"},
  {id:460,name:"Astral [Layered]"},{id:461,name:"High Metal [Layered]"},{id:462,name:"Thermae [Layered]"},
  {id:463,name:"Hare Band [Layered]"},{id:464,name:"Downy Crake [Layered]"},{id:465,name:"Pearlspring α +"},
  {id:466,name:"Kadachi [Layered] Scarf"},{id:467,name:"Buff α +"},{id:468,name:"Rex Roar α +"},{id:469,name:"Rex Roar β +"},
  {id:470,name:"Guardian α +"},{id:471,name:"Yukumo [Layered]"},{id:472,name:"Silver Knight [Layered]"},
  {id:474,name:"Tentacle γ +"},{id:475,name:"Azure Starlord [Layered]"},{id:476,name:"Azure Age α +"},
  {id:477,name:"Rimeguard γ +"},{id:478,name:"Frostfang α +"},{id:479,name:"Frostfang β +"},
  {id:480,name:"Dragon α +"},{id:481,name:"Dragon β +"},{id:484,name:"Leon α"},{id:485,name:"Clair α"},
  {id:486,name:"Leon+ [Layered]"},{id:487,name:"Clair+ [Layered]"},{id:488,name:"Gastodon [Layered]"},
  {id:489,name:"Barnos [Layered]"},{id:490,name:"Dodogama [Layered]"},{id:491,name:"Ingot [Layered]"},
  {id:492,name:"Rath Heart α [Layered]"},{id:493,name:"Rath Heart β [Layered]"},
  {id:494,name:"Lavasioth α [Layered]"},{id:495,name:"Lavasioth β [Layered]"},
  {id:496,name:"Legiana α [Layered]"},{id:497,name:"Legiana β [Layered]"},
  {id:498,name:"Odogaron α [Layered]"},{id:499,name:"Odogaron β [Layered]"},
  {id:500,name:"Rathalos α [Layered]"},{id:501,name:"Rathalos β [Layered]"},
  {id:502,name:"Rath Soul α [Layered]"},{id:503,name:"Rath Soul β [Layered]"},
  {id:504,name:"Diablos α [Layered]"},{id:505,name:"Diablos β [Layered]"},
  {id:506,name:"Diablos Nero α [Layered]"},{id:507,name:"Diablos Nero β [Layered]"},
  {id:508,name:"Uragaan α [Layered]"},{id:509,name:"Uragaan β [Layered]"},
  {id:510,name:"Bazel α [Layered]"},{id:511,name:"Bazel β [Layered]"},
  {id:512,name:"Deviljho α [Layered]"},{id:513,name:"Deviljho β [Layered]"},
  {id:514,name:"Dober α [Layered]"},{id:515,name:"Dober β [Layered]"},
  {id:516,name:"Damascus α [Layered]"},{id:517,name:"Damascus β [Layered]"},
  {id:518,name:"Zorah α [Layered]"},{id:519,name:"Zorah β [Layered]"},{id:520,name:"Zorah γ [Layered]"},
  {id:521,name:"Nergigante α [Layered]"},{id:522,name:"Nergigante β [Layered]"},{id:523,name:"Nergigante γ [Layered]"},
  {id:524,name:"Teostra α [Layered]"},{id:525,name:"Teostra β [Layered]"},{id:526,name:"Teostra γ [Layered]"},
  {id:527,name:"Kushala α [Layered]"},{id:528,name:"Kushala β [Layered]"},{id:529,name:"Kushala γ [Layered]"},
  {id:530,name:"Vaal α [Layered]"},{id:531,name:"Vaal β [Layered]"},{id:532,name:"Vaal γ [Layered]"},
  {id:533,name:"Kirin α [Layered]"},{id:534,name:"Kirin β [Layered]"},{id:535,name:"Kirin γ [Layered]"},
  {id:536,name:"Xeno α [Layered]"},{id:537,name:"Xeno β [Layered]"},{id:538,name:"Xeno γ [Layered]"},
  {id:539,name:"Lunastra α [Layered]"},{id:540,name:"Lunastra β [Layered]"},{id:541,name:"Lunastra γ [Layered]"},
  {id:542,name:"Kulve α [Layered]"},{id:543,name:"Kulve β [Layered]"},{id:544,name:"Kulve γ [Layered]"},
  {id:545,name:"Guardian [Layered]"},{id:546,name:"Vespoid+ [Layered]"},{id:547,name:"Hornetaur+ [Layered]"},
  {id:548,name:"Wulg+ [Layered]"},{id:549,name:"Cortos+ [Layered]"},{id:550,name:"Jagras+ [Layered]"},
  {id:551,name:"Tzitzi+ [Layered]"},{id:552,name:"Girros+ [Layered]"},{id:553,name:"Dodogama+ [Layered]"},
  {id:554,name:"Kulu+ [Layered]"},{id:555,name:"Pukei+ [Layered]"},{id:556,name:"Coral Pukei+ [Layered]"},
  {id:557,name:"Barroth+ [Layered]"},{id:558,name:"Jyura+ [Layered]"},{id:559,name:"Beo+ [Layered]"},
  {id:560,name:"Kadachi+ [Layered]"},{id:561,name:"Viper Kadachi+ [Layered]"},
  {id:562,name:"Banbaro α + [Layered]"},{id:563,name:"Banbaro β + [Layered]"},
  {id:564,name:"Anja α + [Layered]"},{id:565,name:"Anja β + [Layered]"},
  {id:566,name:"Fulgur α + [Layered]"},{id:567,name:"Fulgur β + [Layered]"},
  {id:568,name:"Rathian α + [Layered]"},{id:569,name:"Rathian β + [Layered]"},
  {id:570,name:"Rath Heart α + [Layered]"},{id:571,name:"Rath Heart β + [Layered]"},
  {id:572,name:"Lumu+ [Layered]"},{id:573,name:"Lumu Phantasm+ [Layered]"},{id:574,name:"Radobaan+ [Layered]"},
  {id:575,name:"Artian [Layered]"},{id:576,name:"Barioth α + [Layered]"},{id:577,name:"Barioth β + [Layered]"},
  {id:578,name:"Rathalos α + [Layered]"},{id:579,name:"Rathalos β + [Layered]"},
  {id:580,name:"Rath Soul α + [Layered]"},{id:581,name:"Rath Soul β + [Layered]"},
  {id:582,name:"Diablos α + [Layered]"},{id:583,name:"Diablos β + [Layered]"},
  {id:584,name:"Diablos Nero α + [Layered]"},{id:585,name:"Diablos Nero β + [Layered]"},
  {id:586,name:"Legiana α + [Layered]"},{id:587,name:"Legiana β + [Layered]"},
  {id:588,name:"Shrieking Legiana α + [Layered]"},{id:589,name:"Shrieking Legiana β + [Layered]"},
  {id:590,name:"Odogaron α + [Layered]"},{id:591,name:"Odogaron β + [Layered]"},
  {id:592,name:"Death Garon α + [Layered]"},{id:593,name:"Death Garon β + [Layered]"},
  {id:594,name:"Lavasioth+ [Layered]"},{id:595,name:"Uragaan+ [Layered]"},
  {id:596,name:"Nargacuga α + [Layered]"},{id:597,name:"Nargacuga β + [Layered]"},
  {id:598,name:"Glavenus α + [Layered]"},{id:599,name:"Glavenus β + [Layered]"},
  {id:600,name:"Acidic Glavenus α + [Layered]"},{id:601,name:"Acidic Glavenus β + [Layered]"},
  {id:602,name:"Brachydios α + [Layered]"},{id:603,name:"Brachydios β + [Layered]"},
  {id:604,name:"Tigrex α + [Layered]"},{id:605,name:"Tigrex β + [Layered]"},
  {id:606,name:"Rex Roar α + [Layered]"},{id:607,name:"Rex Roar β + [Layered]"},
  {id:608,name:"Black Belt [Layered]"},{id:609,name:"Pride α + [Layered]"},{id:610,name:"Pride β + [Layered]"},
  {id:611,name:"Esurient α + [Layered]"},{id:612,name:"Esurient β + [Layered]"},
  {id:613,name:"Velkhana α + [Layered]"},{id:614,name:"Velkhana β + [Layered]"},
  {id:615,name:"Blackveil Hazak α + [Layered]"},{id:616,name:"Blackveil Hazak β + [Layered]"},
  {id:617,name:"Teostra α + [Layered]"},{id:618,name:"Teostra β + [Layered]"},
  {id:619,name:"Kushala α + [Layered]"},{id:620,name:"Kushala β + [Layered]"},
  {id:621,name:"Kirin α + [Layered]"},{id:622,name:"Kirin β + [Layered]"},
  {id:623,name:"Namielle α + [Layered]"},{id:624,name:"Namielle β + [Layered]"},
  {id:625,name:"Guild Palace+ [Layered]"},{id:626,name:"Acrobat [Layered] Earrings"},
  {id:627,name:"Showman [Layered] Earrings"},{id:628,name:"Shara Ishvalda α+ [Layered]"},{id:629,name:"Shara Ishvalda β+ [Layered]"},
  {id:630,name:"Yian Garuga α+ [Layered]"},{id:631,name:"YianGaruga β+ [Layered]"},
  {id:632,name:"Zinogre α+ [Layered]"},{id:633,name:"Zinogre β+ [Layered]"},
  {id:634,name:"Golden Lune α+ [Layered]"},{id:635,name:"Golden Lune β+ [Layered]"},
  {id:636,name:"Silver Sol α+ [Layered]"},{id:637,name:"Silver Sol β+ [Layered]"},
  {id:638,name:"Lunastra α+ [Layered]"},{id:639,name:"Lunastra β+ [Layered]"},
  {id:640,name:"Ruiner Nergi α+ [Layered]"},{id:641,name:"Ruiner Nergi β+ [Layered]"},
  {id:642,name:"Guildwork+ [Layered]"},{id:643,name:"Rajang α+ [Layered]"},{id:644,name:"Rajang β+ [Layered]"},
  {id:645,name:"Stygian Zin α+ [Layered]"},{id:646,name:"Stygian Zin β+ [Layered]"},
  {id:647,name:"Safi'jiiva α+ [Layered]"},{id:648,name:"Safi'jiiva β+ [Layered]"},
  {id:649,name:"Furious Rajang α+ [Layered]"},{id:650,name:"Furious Rajang β+ [Layered]"},
  {id:651,name:"Brachydium α+ [Layered]"},{id:652,name:"Brachydium β+ [Layered]"},
  {id:653,name:"Frostfang α+ [Layered]"},{id:654,name:"Frostfang β+ [Layered]"},
  {id:655,name:"Escadora α+ [Layered]"},{id:656,name:"Escadora β+ [Layered]"},
  {id:657,name:"Dragon α+ [Layered]"},{id:658,name:"Dragon β+ [Layered]"},
  {id:659,name:"Kulve α+ [Layered]"},{id:660,name:"Kulve β+ [Layered]"},
  {id:661,name:"Sealed Dragon Cloth [Layered]"},{id:662,name:"Wyverian Ears [Layered]"},
  {id:663,name:"Duffle Penguin [Layered]"},{id:664,name:"Pearlspring [Layered]"},
  {id:665,name:"Buff Body α+ [Layered]"},{id:666,name:"Azure Age [Layered]"},
  {id:669,name:"Rimeguard γ+ [Layered]"},{id:670,name:"Tentacle γ+ [Layered]"},
  {id:672,name:"Buff Body γ+ [Layered]"},{id:673,name:"Innerwear α [Layered]"},
  {id:674,name:"Clockwork β+ [Layered]"},{id:675,name:"Innerwear β [Layered]"},
  {id:676,name:"Artemis α"},{id:677,name:"Layered Artemis"},{id:678,name:"Artemis's α"}
];

const imageUrlOverrides = {
  "samurai": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/samurai-armor-mhw-wiki-guide.png",
  "bushi homare": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bushi-homare-layered-armor-mhw-wiki-guide.png",
  "bushi sabi": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bushi-sabi-layered-armor-mhw-wiki-guide.png",
  "brigade": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/brigade_alpha_armor_set_mhw_small.png",
  "blossom": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/blossom_alpha_armor_set_mhw_small.png",
  "death stench": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/death_stench_armor_set_mhw_small.png",
  "butterfly": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/butterfly_armor_set_mhw_small_2.png",
  "diver": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/divers_alpha_armor_set_mhw_small.png",
  "shadow shades": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shadow-shades-layered-armor-mhw-wiki-guide.png",
  "mosswine mask": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mosswine_mask_alpha_armor_set_mhw_small.png",
  "faux felyne": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/faux_felyne_alpha_armor_set_mhw_small.png",
  "harvest": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/harvest-armor-mhw-wiki-guide2.png",
  "origin": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/origin-layered-armor-mhw-wiki-guide.png",
  "bayek": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bayek-armor-mhw-wiki-guide2.png",
  "dante": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dante_alpha_armor_set_mhw_small.png",
  "drachen": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/drachen-armor-mhw-wiki-guide.png",
  "sealed eyepatch": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/sealed_eyepatch_alpha_female.png",
  "wiggler": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/wiggler_head_alpha.png",
  "guild cross": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/guild-cross-layered-armor-mhw-wiki-guide.png",
  "sakura": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/sakura-armor-mhw-wiki-guide.png",
  "gala": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gala-layered-armor-mhw-wiki-guide.png",
  "commission": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/commission-layered-armor-mhw-wiki-guide.png",
  "ciri": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ciri-armor-mhw-wiki-guide2.png",
  "geralt": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/geralt-armor-mhw-wiki-guide2.png",
  "orion": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/orion-layered-armor-mhw-wiki-guide.png",
  "beetle": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/beetle-armor-mhw-wiki-guide.png",
  "aloy": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/aloy_alpha_armor_set_mhw_small.png",
  "skull mask": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/skull_mask_alpha_male.png",
  "kulu ya ku": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulu-ya-ku_head_alpha_male.png",
  "ryu": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ryu_armor_set_mhw_small.png",
  "yukumo": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/yukumo-layered-armor-mhw-wiki-guide.png",
  "silver knight": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/silver-knight-layered-armor-mhw-wiki-guide.png",
  "aloy frozen wilds": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/aloy-frozen-wilds-layered-armor-mhw-wiki-guide.png",
  "pulverising feather": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/pulverising-feather-layered-armor-mhw-wiki-guide.png",
  "dodogama": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dodogama_alpha_armor_set_mhw_small.png",
  "leather": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/leather_armor_set_mhw_small.png",
  "chain": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/chainmail_armor_set_mhw_small.png",
  "hunter alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hunters_alpha_armor_set_mhw_small.png",
  "hunter beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hunters_beta_armor_set_mhw_small.png",
  "bone": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bone_armor_set_mhw_small.png",
  "alloy": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/alloy_armor_set_mhw_small.png",
  "vespoid": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vespoid_armor_set_mhw_small.png",
  "hornetaur": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hornetaur_armor_set_mhw_small.png",
  "kestodon": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kestodon_armor_set_mhw_small.png",
  "gajau": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gajau_alpha_armor_set_mhw_small.png",
  "shamos": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shamos_alpha_armor_set_mhw_small.png",
  "jagras": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/jagras_armor_set_mhw_small.png",
  "kulu": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulu_armor_set_mhw_small.png",
  "tzitzi": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/tzitzi_armor_set_mhw_small.png",
  "gastodon": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gastodon-horn-alpha-plus-male-mhw-wiki-guide.png",
  "barnos": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/barnos-jacket-alpha-plus-male-mhw-wiki-guide.png",
  "pukei alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/pukei_alpha_armor_set_mhw_small.png",
  "pukei beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/pukei_beta_armor_set_mhw_small.png",
  "radobaan alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/baan_alpha_armor_set_mhw_small.png",
  "radobaan beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/baan_beta_armor_set_mhw_small.png",
  "high metal": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/high_metal_armor_set_mhw_small.png",
  "crystal earring": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/crystal-earring-layered-armor-mhw-wiki-guide.png",
  "dragonking eyepatch": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dragonking-eyepatch-layered-armor-mhw-wiki-guide.png",
  "strategist spectacles": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/strategist-spectacles-layered-armor-mhw-wiki-guide.png",
  "ingot": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ingot_armor_set_mhw_small.png",
  "direwolf plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/direwolf+armor-mhw-wiki-guide.png",
  "rathian alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_heart_alpha_armor_set_mhw_small.png",
  "rathian beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_heart_beta_armor_set_mhw_small.png",
  "great girros": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/girros_armor_set_mhw_small.png",
  "anjanath alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/anja_alpha_armor_set_mhw_small.png",
  "anjanath beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/anja_beta_armor_set_mhw_small.png",
  "jyuratodus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/jyura_armor_set_mhw_small.png",
  "tobi kadachi": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kadachi_armor_set_mhw_small.png",
  "paolumu": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lumu_armor_set_mhw_small.png",
  "rath heart alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_heart_alpha_armor_set_mhw_small.png",
  "rath heart beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_heart_beta_armor_set_mhw_small.png",
  "lavasioth alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lavasioth_alpha_armor_set_mhw_small.png",
  "lavasioth beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lavasioth_beta_armor_set_mhw_small.png",
  "legiana alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/legiana_alpha_armor_set_mhw_small.png",
  "legiana beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/legiana_beta_armor_set_mhw_small.png",
  "odogaron alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/odogaron_alpha_armor_set_mhw_small.png",
  "odogaron beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/odogaron_beta_armor_set_mhw_small.png",
  "rathalos alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_alpha_armor_set_mhw_small.png",
  "rathalos beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_beta_armor_set_mhw_small.png",
  "diablos alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_alpha_armor_set_mhw_small.png",
  "diablos beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_beta_armor_set_mhw_small.png",
  "uragaan alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/uragaan_alpha_armor_set_mhw_small.png",
  "uragaan beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/uragaan_beta_armor_set_mhw_small.png",
  "zorah alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/zorah_alpha_armor_set_mhw_small.png",
  "zorah beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/zorah_beta_armor_set_mhw_small.png",
  "zorah gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/zorah_beta_armor_set_mhw_small.png",
  "nergigante alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/nergigante_alpha_armor_set_mhw_small.png",
  "nergigante beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/nergigante_beta_armor_set_mhw_small.png",
  "nergigante gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/nergigante_beta_armor_set_mhw_small.png",
  "teostra alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/teostra_alpha_armor_set_mhw_small.png",
  "teostra beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/teostra_beta_armor_set_mhw_small.png",
  "teostra gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/teostra_alpha_armor_set_mhw_small.png",
  "kushala alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kushala_armor_set_mhw_small.png",
  "kushala beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kushala_beta_armor_set_mhw_small.png",
  "oolong": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/oolong-alpha+-set-mhw-wiki-guide.png",
  "astral": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/astral-alpha-set-mhw-wiki-guide2.png",
  "kulve alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulve_taroth_alpha_armor_set_mhw_small.png",
  "kulve beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulve_taroth_beta_armor_set_mhw_small.png",
  "kulve gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulve_taroth_alpha_armor_set_mhw_small.png",
  "lunastra alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lunastra-a-armor-set-mhw-wiki-guide.png",
  "lunastra beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lunastra-b-armor-set-mhw-wiki-guide.png",
  "lunastra gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lunastra-gamma-armor-set-mhw-wiki-guide1.png",
  "xeno alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/xenojiiva_alpha_armor_set_mhw_small.png",
  "xeno beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/xenojiiva_beta_armor_set_mhw_small.png",
  "xeno gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/xenojiiva_alpha_armor_set_mhw_small.png",
  "kirin alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kirin_alpha_armor_set_mhw_small.png",
  "kirin beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kirin_beta_armor_set_mhw_small.png",
  "kirin gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kirin-gamma-armor-set-mhw-wiki-guide.png",
  "vaal hazak alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal_hazak_alpha_armor_set_mhw_small.png",
  "vaal hazak beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal_hazak_beta_armor_set_mhw_small.png",
  "vaal hazak gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vaal-hazak-gamma-armor-set-mhw-wiki-guide1.png",
  "kushala gamma": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kushala_armor_set_mhw_small.png",
  "damascus alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/damascus_alpha_armor_set_mhw_small.png",
  "damascus beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/damascus_beta_armor_set_mhw_small.png",
  "dober alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dober_alpha_armor_set_mhw_small.png",
  "dober beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dober_beta_armor_set_mhw_small.png",
  "deviljho alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/deviljho_alpha_armor_set_mhw_small.png",
  "deviljho beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/deviljho_beta_armor_set_mhw_small.png",
  "bazelgeuse alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bazel_alpha_armor_set_mhw_small.png",
  "bazelgeuse beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/bazel_beta_armor_set_mhw_small.png",
  "diablos nero alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_nero_alpha_armor_set_mhw_small.png",
  "diablos nero beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_nero_beta_armor_set_mhw_small.png",
  "rath soul alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_soul_alpha_armor_set_mhw_small.png",
  "rath soul beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_soul_beta_armor_set_mhw_small.png",
  "rose": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rose-alpha-set-mhw-wiki-guide1.png",
  "vespoid plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/vespoid-alpha+-armor-mhw-wiki-guide.png",
  "hornetaur plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hornetaur-alpha+-armor-mhw-wiki-guide.png",
  "wulg plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/wulg-scarf-alpha-plus-male-mhw-wiki-guide.png",
  "cortos plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/cortos-cape-alpha-plus-male-mhw-wiki-guide.png",
  "jagras plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/jagras-alpha+-armor-mhw-wiki-guide.png",
  "tzitzi ya ku alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/tzitzi-alpha+-armor-mhw-wiki-guide.png",
  "great girros plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/girros-alpha+-armor-mhw-wiki-guide.png",
  "dodogama plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dodogama-alpha+-armor-mhw-wiki-guide.png",
  "kulu ya ku plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulu-alpha+-armor-mhw-wiki-guide.png",
  "pukei pukei plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/pukei-alpha+-armor-mhw-wiki-guide.png",
  "coral pukei plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/coral-pukei-alpha+-armor-mhw-wiki-guide.png",
  "barroth plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/barroth-alpha+-armor-mhw-wiki-guide.png",
  "jyuratodus plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/jyura-alpha+-armor-mhw-wiki-guide.png",
  "beotodus plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/beo-alpha+-armor-mhw-wiki-guide.png",
  "tobi kadachi plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kadachi-alpha+-armor-mhw-wiki-guide.png",
  "viper kadachi plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/viper-kadachi-alpha+-armor-mhw-wiki-guide.png",
  "banbaro alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/banbaro-alpha+-armor-mhw-wiki-guide.png",
  "banbaro beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/banbaro-beta+-armor-mhw-wiki-guide.png",
  "anjanath alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/anja-alpha+-armor-mhw-wiki-guide.png",
  "anjanath beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/anja-beta+-armor-mhw-wiki-guide.png",
  "fulgur anja alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/fulgur_anja_alpha_plus_armor_set-mhw-wiki-guide.png",
  "fulgur anja beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/fulgur_anja_beta_plus_armor_set-mhw-wiki-guide.png",
  "rathian alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathian-alpha+-armor-mhw-wiki-guide.png",
  "rathian beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathian-beta+-armor-mhw-wiki-guide.png",
  "rath heart alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath-heart-alpha+-armor-mhw-wiki-guide.png",
  "rath heart beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath-heart-beta+-armor-mhw-wiki-guide.png",
  "paolomu plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lumu-alpha+-armor-mhw-wiki-guide.png",
  "lumu phantasm plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lumu-phantsm-alpha+-armor-mhw-wiki-guide.png",
  "radobaan alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/baan-alpha+-armor-mhw-wiki-guide.png",
  "uragaan alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/uragaan_alpha_plus_armor_set-mhw-wiki-guide.png",
  "barioth alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/barioth-alpha-plus-set-mhw-wiki-guide1.png",
  "barioth beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/barioth-beta-plus-set-mhw-wiki-guide1.png",
  "rathalos alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_alpha_plus_armor_set-mhw-wiki-guide.png",
  "rathalos beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rathalos_beta_plus_armor_set-mhw-wiki-guide.png",
  "rath soul alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_soul_alpha_armor_set-mhw-wiki-guide1.png",
  "rath soul beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rath_soul_beta_armor_set-mhw-wiki-guide1.png",
  "diablos alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_alpha_plus_armor_set-mhw-wiki-guide1.png",
  "diablos beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_beta_plus_armor_set-mhw-wiki-guide1.png",
  "diablos nero alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_nero_alpha_plus_armor_set-mhw-wiki-guide.png",
  "diablos nero beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/diablos_nero_beta_plus_armor_set-mhw-wiki-guide.png",
  "legiana alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/legiana_alpha_plus_armor_set-mhw-wiki-guide.png",
  "legiana beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/legiana_beta_plus_armor_set-mhw-wiki-guide.png",
  "odogaron alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/odogaron-alpha-plus-set1.png",
  "odogaron beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/odogaron-beta-plus-set1.png",
  "nargacuga alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/nargacuga_alpha_plus_set-mhw-wiki-guide1.png",
  "nargacuga beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/nargacuga_beta_plus_set-mhw-wiki-guide1.png",
  "glavenus alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/glavenus_alpha_plus_armor_set-mhw-wiki-guide.png",
  "glavenus beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/glavenus_beta_plus_armor_set-mhw-wiki-guide.png",
  "brachydios alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/brachydios_alpha_plus_armor_set-mhw-wiki-guide1.png",
  "brachydios beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/brachydios_beta_plus_armor_set-mhw-wiki-guide1.png",
  "tigrex alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/tigrex_alpha_plus_armor_set-mhw-wiki-guide1.png",
  "tigrex beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/tigrex_beta_plus_armor_set-mhw-wiki-guide1.png",
  "brute tigrex alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/brute-tigrex-alpha-plus-mhw-wiki-guide2.png",
  "brute tigrex beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/brute-tigrex-beta-plus-mhw-wiki-guide2.png",
  "seething bazel alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/seething_bazel_alpha_plus_armor_set-mhw-wiki-guide.png",
  "seething bazel beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/seething_bazel_beta_plus_armor_set-mhw-wiki-guide.png",
  "savage jho alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/savage-jho-alpha-plus-set-mhw-wiki-guide.png",
  "savage jho beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/savage-jho-beta-plus-set-mhw-wiki-guide.png",
  "velkhana alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/velkhana_alpha_plus_armor_set-mhw-wiki-guide.png",
  "velkhana beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/velkhana_beta_plus_armor_set-mhw-wiki-guide.png",
  "blackveil hazak alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/blackveil-hazak-alpha-plus-mhw-wiki-guide.png",
  "blackveil hazak beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/blackveil-hazak-beta-plus-mhw-wiki-guide.png",
  "teostra alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/teostra-alpha-plus-set-mhw-wiki-guide.png",
  "teostra beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/teostra-beta-plus-set-mhw-wiki-guide.png",
  "kushala alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kushala-alpha-plus-armor-set-mhw-wiki-guide.png",
  "kushala beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kushala-beta-plus-armor-set-mhw-wiki-guide.png",
  "kirin alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kirin-alpha-plus-set-mhw-wiki-guide.png",
  "kirin beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kirin-beta-plus-set-mhw-wiki-guide.png",
  "yian garuga alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/yian-garuga-alpha-set-plus-mhw-wiki-guide2.png",
  "yian garuga beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/yian-garuga-beta-set-plus-mhw-wiki-guide3.png",
  "zinogre alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/zinogre-alpha-set-plus-mhw-wiki-guide2.png",
  "zinogre beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/zinogre-beta-set-plus-mhw-wiki-guide2.png",
  "golden lune alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/golden-lune-alpha-plus-set-mhw-wiki-guide2.png",
  "golden lune beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/golden-lune-beta-plus-set-mhw-wiki-guide1.png",
  "silver sol alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/silver-sol-alpha-plus-set-mhw-wiki-guide1.png",
  "silver sol beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/silver-sol-beta-plus-set-mhw-wiki-guide2.png",
  "lunastra alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lunastra-alpha-set-plus-mhw-wiki-guide2.png",
  "lunastra beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lunastra-beta-set-plus-mhw-wiki-guide2.png",
  "ruiner nergi alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ruiner-nergi-alpha-plus-set-mhw-wiki-guide1.png",
  "ruiner nergi beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ruiner-nergi-beta-plus-set-mhw-wiki-guide1.png",
  "rajang beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/rajang-beta-plus-set-mhw-wiki-guide1.png",
  "furious rajang alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/furious-rajang-alpha-mhw-wiki-guide1.png",
  "furious rajang beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/furious-rajang-beta-mhw-wiki-guide1.png",
  "stygian zin alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/stygian-zin-alpha+set-mhw-wiki-guide2.png",
  "stygian zin beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/stygian-zin-beta+set-mhw-wiki-guide2.png",
  "safijiiva alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/safi'jiiva-alpha+set-mhw-wiki-guide2.png",
  "safijiiva beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/safi'jiiva-beta+set-mhw-wiki-guide2.png",
  "raging brachy alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/raging-brachy-alpha-mhw-wiki-guide1.png",
  "raging brachy beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/raging-brachy-beta-mhw-wiki-guide1.png",
  "frostfang barioth alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/frostfang-barioth-set-mhw-wiki-guide.png",
  "frostfang barioth beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/frostfang_barioth-beta-set-mhw-wiki-guide1.png",
  "alatreon alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/alatreon-set-mhw-wiki-guide.png",
  "alatreon beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/alatreon-beta-set-mhw-wiki-guide1.png",
  "fatalis alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/dragon-set-mhw-wiki-guide2.png",
  "fatalis beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/fatalis_beta+armor-set-mhw-wiki-guide.png",
  "kulve taroth alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulve-taroth-a-set-mhw-wiki-guide1.png",
  "kulve taroth beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kulve-taroth-b-set-mhw-wiki-guide1.png",
  "namielle gamma plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/namielle-gamma-set-mhw-wiki-guide1.png",
  "downy crake plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/downy_crake+layered_armor-mhw-wiki-guide.png",
  "artian": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/artian_alpha_plus_armor_set_mhw-wiki-guide1.png",
  "guardian": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/guardian-armor_iceborne-mhw-wiki-guide.png",
  "black belt": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/black_belt_alpha_plus_set-mhw-wiki-guide1.png",
  "azure starlord": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/azure_starlord_armor_set_mhw_small.png",
  "acrobat": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/showman-earrings-alpha+mhw-wiki-guide1.png",
  "showman": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/showman-earrings-alpha+mhw-wiki-guide1.png",
  "passion": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/passionate_alpha+armor_set-mhw-wiki-guide1.png",
  "faux kelbi": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/faux_kelbi_layered_armor-mhw-wiki-guide.png",
  "faux aptonoth": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/faux_aptonoth_layered_armor-mhw-wiki-guide.png",
  "hare band": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/hare_band_layered_armor-mhw-wiki-guide.png",
  "goldspring macaque": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/goldspring_macaque_layered_armor-mhw-wiki-guide.png",
  "innerwear alpha": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/innerwear_alpha_layered_armor-mhw-wiki-guide.png",
  "innerwear beta": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/innerwear_beta_layered_armor-mhw-wiki-guide.png",
  "namielle alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/namielle-alpha-plus-set-mhw-wiki-guide.png",
  "namielle beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/namielle-beta-plus-set-mhw-wiki-guide.png",
  "guild palace plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/guild-palace-alpha+-set-mhw-wiki-guide2.png",
  "shara ishvalda alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shara-ishvalda-alpha-plus-mhw-wiki-guide.png",
  "shara ishvalda beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shara-ishvalda-beta-plus-mhw-wiki-guide.png",
  "shrieking legia alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shrieking_legia_alpha_plus_armor_set-mhw-wiki-guide.png",
  "shrieking legia beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/shrieking_legia_beta_plus_armor_set-mhw-wiki-guide.png",
  "acidic glavenus alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/acidic_glavenus_alpha_plus_armor_set-mhw-wiki-guide.png",
  "acidic glavenus beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/acidic_glavenus_beta_plus_armor_set-mhw-wiki-guide.png",
  "buff body alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/buff-body-alpha+-set-mhw-wiki-guide2.png",
  "sealed dragon cloth alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/sealed-dragon-cloth-alpha+.png",
  "death garon alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/death_garon_alpha_plus_armor_set-mhw-wiki-guide.png",
  "death garon beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/death_garon_beta_plus_armor_set-mhw-wiki-guide.png",
  "lavasioth plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/lavasioth_alpha_plus_armor_set-mhw-wiki-guide.png",
  "azure age": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/azure_age_alpha-mhw-wiki-guide-updated.png",
  "clockwork alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/clockwork_alpha_armor_set-mhw-wiki-guide.png",
  "clockwork beta plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/clockwork_beta_armor_set-mhw-wiki-guide.png",
  "leon plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/leon-alpha+armor-set-mhw-wiki-guide.png",
  "claire plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/claire-alpha+armor-set-mhw-wiki-guide.png",
  "duffel penguin": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/duffel-penguin-mask-alpha.png",
  "wyverian ears": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/wyverian-ears-mhw-wiki-guide.png",
  "pearlspring": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/pearlspring-alpha-plus-set-mhw-wiki-guide1.png",
  "velkhana gamma plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/velkhana_gamma-mhw-wiki-guide-updated.png",
  "buff body gamma plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/buff_body_gamma_layered_armor-mhw-wiki-guide-corrected.png",
  "kadachi scarf": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/kadachi_scarf_layered_armor-mhw-wiki-guide-updated.png",
  "skull scarf": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/skull_scarf_layered_armor-mhw-wiki-guide-updated.png",
  "demon lord alpha plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/demon_lord-set-mhw-wiki-guide1.png",
  "guildwork plus": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/guildwork-alpha-plus-set-mhw-wiki-guide2.png",
  "thermae nbsp": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/thermae_armor_set-mhw-wiki-guide-updated.png",
  "artemis": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/atermis-α+armor-mhw-wiki-guide.png"
};

const imageNameAliases = {
  "anja": "anjanath",
  "jyura": "jyuratodus",
  "kadachi": "tobi kadachi",
  "chainmail": "chain",
  "girros": "great girros",
  "lumu": "paolumu",
  "baan": "radobaan",
  "bazel": "bazelgeuse",
  "xeno jiiva": "xeno",
  "xenojiiva": "xeno",
  "kaiser": "teostra",
  "gala suit": "gala",
  "vangis": "deviljho",
  "female butterfly": "butterfly",
  "male butterfly": "butterfly",
  "female queen beetle": "beetle",
  "male king beetle": "beetle",
  "empress": "lunastra",
  "defender": "guardian",
  "beo": "beotodus",
  "pukei lagoon": "coral pukei",
  "fulgur": "fulgur anja",
  "goldspring": "pearlspring",
  "stygian": "stygian zin",
  "garuga": "yian garuga",
  "golden": "golden lune",
  "safi": "safijiiva",
  "buff": "buff body",
  "fellshroud": "blackveil hazak",
  "ruinous": "ruiner nergi",
  "esurient": "deviljho",
  "rimeguard": "velkhana",
  "tentacle": "namielle",
  "passionate": "rose",
  "demonlord": "rajang",
  "rex roar": "tigrex",
  "pride": "brute tigrex",
  "grand gods peer": "shara ishvalda",
  "pulverizing feather": "pulverising feather",
  "vaal": "vaal hazak",
  "duffle penguin": "duffel penguin",
  "acrobat earrings": "acrobat",
  "showman earrings": "showman",
  "yiangaruga": "yian garuga",
  "brachydium": "brachydios",
  "escadora": "alatreon",
  "frostfang": "frostfang barioth",
  "dragon": "fatalis",
  "clair": "artemis",
  "artemiss": "artemis",
  "hoarcry": "shrieking legia",
  "shrieking legiana": "shrieking legia",
  "thermae": "innerwear"
};

window.layeredArmorData = {
  armors,
  imageUrlOverrides,
  imageNameAliases
};

function normalizeArmorName(name, { stripVariants = false } = {}) {
  let normalized = (name || "")
    .toLowerCase()
    .replace(/α|α|α/g, " alpha ")
    .replace(/β|β|β/g, " beta ")
    .replace(/γ|γ|γ/g, " gamma ")
    .replace(/\+/g, " plus ")
    .replace(/\[layered\]/gi, " ")
    .replace(/layered/gi, " ")
    .replace(/head armor/gi, " ")
    .replace(/head/gi, " ")
    .replace(/armor/gi, " ")
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

  if (stripVariants) {
    normalized = normalized
      .replace(/\b(alpha|beta|gamma|plus)\b/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  return normalized;
}

const imageBaseOverrides = Object.entries(imageUrlOverrides).reduce((map, [key, url]) => {
  const baseKey = normalizeArmorName(key, { stripVariants: true });
  if (!map[baseKey]) map[baseKey] = url;
  return map;
}, {});

function getImageUrlOverride(name) {
  const exactKey = normalizeArmorName(name);
  if (imageUrlOverrides[exactKey]) return imageUrlOverrides[exactKey];

  const baseKey = normalizeArmorName(name, { stripVariants: true });
  if (imageBaseOverrides[baseKey]) return imageBaseOverrides[baseKey];

  const exactAliasKey = imageNameAliases[exactKey];
  if (exactAliasKey && imageUrlOverrides[exactAliasKey]) return imageUrlOverrides[exactAliasKey];

  const baseAliasKey = imageNameAliases[baseKey];
  if (baseAliasKey && imageBaseOverrides[baseAliasKey]) return imageBaseOverrides[baseAliasKey];

  return null;
}

function buildImageUrl(name) {
  const override = getImageUrlOverride(name);
  if (override) return override;

  const slug = (name || "")
    .toLowerCase()
    .replace(/\(male\)\s*/gi, "")
    .replace(/\(female\)\s*/gi, "")
    .replace(/α|α|α/g, "alpha")
    .replace(/β|β|β/g, "beta")
    .replace(/γ|γ|γ/g, "gamma")
    .replace(/\+/g, "")
    .replace(/\[layered\]/gi, "")
    .replace(/layered/gi, "")
    .replace(/["']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .trim()
    .replace(/\s+/g, "_");

  return `https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/${slug}_armor_set_mhw_small.png`;
}

function getVariant(name) {
  const isLayered = /\[layered\]|layered/i.test(name);
  const isPlus = /\+/.test(name);
  const isGamma = /γ|γ|γ/.test(name);
  const isAlpha = /α|α|α/.test(name) && !isLayered;
  const isBeta = /β|β|β/.test(name) && !isLayered;
  return { isLayered, isPlus, isGamma, isAlpha, isBeta };
}

function renderBadge(name) {
  const { isLayered, isPlus, isGamma, isAlpha, isBeta } = getVariant(name);
  const badges = [];

  if (isLayered) badges.push('<span class="badge badge-layered">Layered</span>');
  if (isPlus) badges.push('<span class="badge badge-plus">+</span>');
  if (isAlpha) badges.push('<span class="badge badge-alpha">α</span>');
  if (isBeta) badges.push('<span class="badge badge-beta">β</span>');
  if (isGamma) badges.push('<span class="badge badge-gamma">γ</span>');

  if (badges.length === 0) return "";
  return `<div class="badge-row">${badges.join("")}</div>`;
}

let currentFilter = "all";
const grid = document.getElementById("grid");
const noResults = document.getElementById("no-results");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");
const backToTopEl = document.getElementById("back-to-top");

function updateBackToTopVisibility() {
  if (!backToTopEl) return;
  backToTopEl.classList.toggle("is-visible", window.scrollY > 280);
}

function matchesFilter(armor) {
  if (currentFilter === "all") return true;
  const { isLayered, isPlus, isAlpha, isBeta, isGamma } = getVariant(armor.name);
  if (currentFilter === "layered") return isLayered;
  if (currentFilter === "plus") return isPlus;
  if (currentFilter === "alpha") return isAlpha;
  if (currentFilter === "beta") return isBeta;
  if (currentFilter === "gamma") return isGamma;
  return true;
}

function createCard(armor) {
  const imgUrl = buildImageUrl(armor.name);
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <span class="card-id">#${armor.id}</span>
    <div class="card-img-wrap">
      <img src="${imgUrl}" alt="${armor.name}" loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=\\'img-placeholder\\'>IMG</div>'">
    </div>
    <div class="card-name">${armor.name}</div>
    ${renderBadge(armor.name)}
  `;
  return card;
}

function render() {
  const query = searchEl.value.toLowerCase().trim();
  const filtered = armors.filter((armor) => {
    return matchesFilter(armor) && (
      armor.name.toLowerCase().includes(query) ||
      String(armor.id).includes(query)
    );
  });

  Array.from(grid.querySelectorAll(".card")).forEach((card) => card.remove());

  if (filtered.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
    filtered.forEach((armor) => {
      grid.insertBefore(createCard(armor), noResults);
    });
  }

  statsEl.innerHTML = `<span>${filtered.length}</span> armure${filtered.length !== 1 ? "s" : ""} affichee${filtered.length !== 1 ? "s" : ""} sur <span>${armors.length}</span>`;
}

searchEl.addEventListener("input", render);

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    render();
  });
});

if (backToTopEl) {
  backToTopEl.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

render();
updateBackToTopVisibility();


