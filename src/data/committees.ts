import unscImg from "@/assets/committees/unsc.jpg";
import disecImg from "@/assets/committees/disec.jpg";
import unodcImg from "@/assets/committees/unodc.jpg";
import viceroysImg from "@/assets/committees/viceroys-cabinet.jpg";
import loksabhaImg from "@/assets/committees/loksabha.jpg";
import ipcImg from "@/assets/committees/ipc.jpg";
import unhcrImg from "@/assets/committees/unhcr.jpg";

export interface EBMember {
  name: string;
  role: string;
  image: string;
}

export interface CommitteeData {
  id: string;
  name: string;
  shortName: string;
  cardImage: string;
  logo: string;
  agenda: string;
  freezeDate?: string;
  note?: string;
  chairLetter: string[];
  chairName: string;
  chairRole: string;
  chairEmail: string;
  eb: EBMember[];
  bgLink?: string;
  matrixLink?: string;
  ropLink?: string;
}

export const committees: CommitteeData[] = [
  {
    id: "unsc",
    name: "United Nations Security Council",
    shortName: "UNSC",
    cardImage: unscImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_346,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "Strengthening Regional Security Frameworks: Countering destabilization in the Panama Nexus and terror insurgencies across Latin-America.",
    freezeDate: "February 04, 2031",
    chairLetter: [
      "It gives me immense pleasure to welcome you all to the 11th edition of the Welham Model United Nations Conference. It is a great honor for me to serve as the Chairperson of the United Nations Security Council this year.",
      "This year, the United Nations Security Council convenes against the backdrop of an intensifying crisis in the Latin American region, marked by neo-colonial ambitions, resource monopolization, and insurgency-led resistance.",
      "You are tasked not only with addressing the immediate crisis at hand but also preventing the conflagrations of tomorrow. Will the Council succumb to the anarchial measures of the greatest country in the world, or will it reclaim its mandate to uphold global stability and justice?",
      "\"The decisions you make today will shape the world of tomorrow. History does not remember those who stood idle at its most critical junctures.\"",
    ],
    chairName: "Divij Gupta",
    chairRole: "Chairperson",
    chairEmail: "chair.unsc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_b826bb68105845d9b1794b6a9f30ce7f.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_1a6c914129cb4ef78d39032161badd0f.pdf",
    eb: [
      { name: "Divij Gupta", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_31db70ea7e3b4189b1afade49653c118~mv2.jpg/v1/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5548_edited_edited.jpg" },
      { name: "Ahan Sparsh", role: "Vice Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_3593fea72fc54c79954d792b7808238e~mv2.jpg/v1/crop/x_0,y_0,w_3648,h_4800/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5542_JPG.jpg" },
      { name: "Anagh Bajaj", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_d3dd9ee9557745328710aad26e00eb08~mv2.jpg/v1/crop/x_0,y_187,w_3648,h_4800/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5538_JPG.jpg" },
      { name: "Shubh Sachet Prakash", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_d3dbdf1141d0436c848cbc73b6315544~mv2.jpg/v1/crop/x_0,y_261,w_3648,h_4800/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5544_JPG.jpg" },
      { name: "Kushagra Gupta", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_dca912a8075b4a5a8a72983d08e78d56~mv2.jpg/v1/crop/x_293,y_0,w_3355,h_4422/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5536_JPG.jpg" },
      { name: "Angad Singh", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_3b04f66283824ca69a4b95861821fa7e~mv2.jpg/v1/crop/x_293,y_0,w_3355,h_4422/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5533_JPG.jpg" },
    ],
  },
  {
    id: "disec",
    name: "United Nations General Assembly (DISEC)",
    shortName: "DISEC",
    cardImage: disecImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_346,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "Combating the Illicit Trade of Small Arms and Light Weapons to Enhance Global Security.",
    chairLetter: [
      "In the last few years, the world has undergone a lot of changes, most of which have been detrimental to humanity. Be it the innumerable conflicts and battles that rage on in different corners of the world, or the devastating effects of nature's wrath that we have incurred, the problems are miles away from ceasing.",
      "The illicit trade of small arms and light weapons, facilitated by growing technology, has only risen, proportional to the number of conflicts around the world. From small regional gang turf wars in South America to wars between countries in the Middle East and North Asia, these arms seem to have found their way everywhere.",
      "As the United Nations' disarmament body, it is your utmost prerogative and responsibility to treat the issue as important and discuss practical solutions through mutual respect and understanding.",
    ],
    chairName: "Samarth Agrawal",
    chairRole: "Chairperson",
    chairEmail: "chair.disec@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_ef0870397fba4a2c84c7171164e8a001.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_3ffae51adf4942b1a1758b8c40dbf3f3.pdf",
    eb: [
      { name: "Samarth Agrawal", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_a5e195227bc342498b4ca75dec8e445b~mv2.jpg/v1/crop/x_0,y_262,w_1573,h_1591/fill/w_275,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC07608_edited.jpg" },
      { name: "Krishna Poddar", role: "Vice Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_64dc49b7fd164b52b52b3ddd05762807~mv2.jpg/v1/crop/x_0,y_114,w_1740,h_2328/fill/w_190,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5477_edited.jpg" },
      { name: "Aaryan Khanna", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_6cc88ce16eb24e9d863d96cf105cf006~mv2.jpg/v1/crop/x_409,y_548,w_2837,h_3797/fill/w_190,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5552_JPG.jpg" },
      { name: "Yash Jalan", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_73b771d631c54462b2b2c91efcb2b349~mv2.jpg/v1/crop/x_243,y_0,w_3231,h_4328/fill/w_189,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5485_JPG.jpg" },
      { name: "Aarav Bhimsaria", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_96b469b620f440019448f179c2f90fcd~mv2.jpg/v1/crop/x_537,y_222,w_3040,h_4068/fill/w_190,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5491_JPG.jpg" },
      { name: "Eshaan Tiwari", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_ccd59c71a93b4181bcdc2928895da001~mv2.jpg/v1/crop/x_288,y_130,w_3274,h_4381/fill/w_190,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5554_JPG.jpg" },
    ],
  },
  {
    id: "unodc",
    name: "United Nations Office on Drugs and Crime",
    shortName: "UNODC",
    cardImage: unodcImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_01011cccbd1c434893d58de2d9b22db0~mv2.png/v1/crop/x_38,y_15,w_620,h_617/fill/w_264,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unhcr-logo-png-transparent.png",
    agenda: "The European Refugee crises and the transpiring migration trends due to conflict zones with special emphasis on external actors and role of EU policies.",
    chairLetter: [
      "\"The true measure of any society is how it treats its most vulnerable.\" — Mahatma Gandhi",
      "In the narrative of our shared history, there are chapters not inked with pen, but stained with the red. The red of agony, the red of pain, and the red of displacement. The refugee crisis is not a distant issue—it is the ongoing erosion of civil order that follows every wind of war our world has weathered.",
      "The agenda picks up an extremely important global issue to discuss the refugee crisis in Europe and each stakeholder in great detail. With well researched speeches, effective communication and deliberation, we can all make a small effort for a better future.",
    ],
    chairName: "Vedant Singh",
    chairRole: "Chairperson",
    chairEmail: "chair.unhcr@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_ef8d0e73bf5541cc8c56c877d65bb714.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_0cb03ee32e8f4f3d88af1b2f9e6762e1.pdf",
    eb: [
      { name: "Vedant Singh", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_1714d9f72f55481488201a938e17d1d4~mv2.jpg/v1/crop/x_261,y_0,w_3319,h_3319/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5508_JPG.jpg" },
      { name: "Tejasva Dhandhania", role: "Vice Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_a2ec307cd05447fbab9d1fb9d68c5f4b~mv2.png/v1/crop/x_0,y_128,w_1367,h_1794/fill/w_205,h_275,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5515_edited_edited.png" },
      { name: "Keshav Bhatia", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_5fc7ee5b049149a391194f7bcbe39b72~mv2.jpg/v1/crop/x_729,y_163,w_2631,h_3449/fill/w_205,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5498_JPG.jpg" },
      { name: "Angad Khurana", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_2fd82d461383447aa417cc5cf01ee284~mv2.jpg/v1/crop/x_557,y_484,w_2860,h_3745/fill/w_205,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5493_JPG.jpg" },
      { name: "Shrey Gupta", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_36d36a02fdf94cd992a3b554662ce6a3~mv2.jpg/v1/crop/x_262,y_29,w_3270,h_4282/fill/w_205,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5510_JPG.jpg" },
    ],
  },
  {
    id: "viceroys-cabinet",
    name: "Viceroy's Cabinet",
    shortName: "Viceroy's Cabinet",
    cardImage: viceroysImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_293,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "Deliberating upon the Global Economic Turmoil of the 2008 Great Economic Recession with Special Emphasis on Housing Stabilisation and the Overall Degradation of the Worldwide GDP.",
    freezeDate: "March 8, 2009",
    chairLetter: [
      "\"It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.\" — Mark Twain",
      "ECOSOC is a cornerstone of the United Nations system, tasked with addressing global socio-economic issues. In this session, we will delve into one of the most defining economic crises of the 21st century: the Global Financial Crisis of 2008.",
      "As delegates in the Economic and Social Council, you will explore the aftermath of this crisis and the international responses that followed. Your task is not only to understand the causes and impacts but also to engage in diplomatic dialogue aimed at finding multilateral solutions.",
    ],
    chairName: "Vishrut Khanna",
    chairRole: "Chairperson",
    chairEmail: "chair.ecosoc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_54e7cb89272c413093a16b96bf674386.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_e212e0737dab4fa9b851a97fe79b5485.pdf",
    eb: [
      { name: "Vishrut Khanna", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_68941ff2987d48b2b737def29beb039b~mv2.jpg/v1/crop/x_337,y_0,w_3175,h_3175/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5521_JPG.jpg" },
      { name: "Koustabh Gupta", role: "Vice Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_33873253a044439aad312f3ee02d7fa5~mv2.jpg/v1/crop/x_207,y_318,w_3393,h_4467/fill/w_193,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5527_JPG.jpg" },
      { name: "Rakshit Bajaj", role: "Director", image: "https://static.wixstatic.com/media/9bbbe8_00b8ffe151de4a948dce9a1c83c4e013~mv2.jpg/v1/crop/x_498,y_457,w_2867,h_3765/fill/w_193,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5525_JPG.jpg" },
      { name: "Aarav Agarwal", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_d07822137f5f40e485ffc684316bcea0~mv2.jpg/v1/crop/x_179,y_308,w_3469,h_4560/fill/w_193,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5526_JPG.jpg" },
      { name: "Atharva Agrawal", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_9c88e9c2bfe84869ab7b2fa3201030fc~mv2.jpg/v1/crop/x_254,y_239,w_3394,h_4441/fill/w_194,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5517_JPG.jpg" },
    ],
  },
  {
    id: "specpol",
    name: "Special Political and Decolonization Committee",
    shortName: "SPECPOL",
    cardImage: loksabhaImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_346,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "To be announced.",
    chairLetter: [
      "The Special Political and Decolonization Committee (SPECPOL) is the Fourth Committee of the United Nations General Assembly. It deals with a variety of subjects which include those related to decolonization, Palestinian refugees, human rights, peacekeeping, mine action, outer space, public information, atomic radiation, and the University for Peace.",
      "Details for this committee will be updated soon. Stay tuned for more information about the agenda, executive board, and background guides.",
    ],
    chairName: "TBA",
    chairRole: "Chairperson",
    chairEmail: "chair.specpol@welhamboys.org",
    eb: [],
  },
  {
    id: "unhrc",
    name: "United Nations Human Rights Council",
    shortName: "UNHRC",
    cardImage: unhcrImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_01011cccbd1c434893d58de2d9b22db0~mv2.png/v1/crop/x_38,y_15,w_620,h_617/fill/w_264,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unhcr-logo-png-transparent.png",
    agenda: "To be announced.",
    chairLetter: [
      "Details for the United Nations Human Rights Council will be updated soon. Stay tuned for more information about the agenda, executive board, and background guides.",
    ],
    chairName: "TBA",
    chairRole: "Chairperson",
    chairEmail: "chair.unhrc@welhamboys.org",
    eb: [],
  },
  {
    id: "ipc",
    name: "International Press Corps",
    shortName: "IPC",
    cardImage: ipcImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_c513eeb9c61e4606a15653078fb56cbb~mv2.png/v1/crop/x_0,y_1,w_500,h_498/fill/w_282,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/iplogo2.png",
    agenda: "",
    chairLetter: [
      "\"Journalism is not a profession or a trade. It is a crusade for truth.\" — Robert C. Maynard",
      "As the press, you're at the forefront of all events. Use the medium that you hold in your hands and your minds and paint the canvas of freedom and truth to support the people and report to the world what needs to be reported.",
      "The IPC is often underestimated, but let this serve as a reminder that your role is just as vital as that of any other delegate—if not more so. At WELMUN, we give you the liberty to present your thoughts in any form that you want.",
    ],
    chairName: "Athrv Ahuja",
    chairRole: "Editor-In-Chief",
    chairEmail: "chair.ipc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_8a7d0b09ed6d42e2ba11fce6192fff57.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_82efced08b144a4f803d1e2d099f92fd.pdf",
    eb: [
      { name: "Athrv Ahuja", role: "Editor-In-Chief", image: "https://static.wixstatic.com/media/9bbbe8_938bb5e7c1bd475098b8901130035d4f~mv2.jpg/v1/crop/x_0,y_63,w_1525,h_1527/fill/w_278,h_278,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC07582_edited.jpg" },
      { name: "Arnav Aaditya", role: "Senior Editor", image: "https://static.wixstatic.com/media/9bbbe8_8d88f72192ea444fb3218cba8a3d97a5~mv2.jpg/v1/crop/x_286,y_153,w_3181,h_4261/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5563_JPG.jpg" },
      { name: "Chiraag Bhargava", role: "Senior Editor", image: "https://static.wixstatic.com/media/9bbbe8_68b69e33577849af908ed6334b0c1f5a~mv2.jpeg/v1/crop/x_282,y_167,w_1530,h_2050/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC06217.jpeg" },
      { name: "Minarth Jalan", role: "Creative Editor", image: "https://static.wixstatic.com/media/9bbbe8_c43531dbec5a4afe94b88dd9a3419eda~mv2.jpg/v1/crop/x_172,y_212,w_3327,h_4451/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5569_JPG.jpg" },
      { name: "Harshil Bhatia", role: "Creative Editor", image: "https://static.wixstatic.com/media/9bbbe8_c6b9144eebc9443c826aa946de3b3904~mv2.jpg/v1/crop/x_0,y_293,w_3648,h_4886/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5565_JPG.jpg" },
      { name: "Jai Gagaliya", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_1b7c097133604154b7ff56cb1e9b5a7a~mv2.jpg/v1/crop/x_249,y_171,w_3399,h_4552/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5560_JPG.jpg" },
      { name: "Neiyl Vasishta", role: "Rapporteur", image: "https://static.wixstatic.com/media/9bbbe8_5190f093472c406d91d44f3c23fef01f~mv2.jpg/v1/crop/x_271,y_260,w_3259,h_4366/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5559_JPG.jpg" },
    ],
  },
];
