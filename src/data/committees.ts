import unscImg from "@/assets/committees/unsc.jpg";
import disecImg from "@/assets/committees/disec.jpg";
import unodcImg from "@/assets/committees/unodc.jpg";
import viceroysImg from "@/assets/committees/viceroys-cabinet.jpg";
import loksabhaImg from "@/assets/committees/loksabha.jpg";
import ipcImg from "@/assets/committees/ipc.jpg";
import unhcrImg from "@/assets/committees/unhcr.jpg";
import dirGenPhoto from "@/assets/dir-gen.png";
import underSecPhoto from "@/assets/under-sec.png";

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
    agenda: "De-escalating the Conflagration of the Israel–Iran Military Conflict.",
    freezeDate: "February 04, 2031",
    chairLetter: [
      "It gives me immense pleasure to welcome you all to the 11th edition of the Welham Model United Nations Conference. It is a great honor for me to serve as the Chairperson of the United Nations Security Council this year.",
      "This year, the United Nations Security Council convenes against the backdrop of an intensifying crisis in the Latin American region, marked by neo-colonial ambitions, resource monopolization, and insurgency-led resistance.",
      "You are tasked not only with addressing the immediate crisis at hand but also preventing the conflagrations of tomorrow. Will the Council succumb to the anarchial measures of the greatest country in the world, or will it reclaim its mandate to uphold global stability and justice?",
      "\"The decisions you make today will shape the world of tomorrow. History does not remember those who stood idle at its most critical junctures.\"",
    ],
    chairName: "Ahan Sparsh",
    chairRole: "Chairperson",
    chairEmail: "chair.unsc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_b826bb68105845d9b1794b6a9f30ce7f.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_1a6c914129cb4ef78d39032161badd0f.pdf",
    eb: [
      { name: "Ahan Sparsh", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_3593fea72fc54c79954d792b7808238e~mv2.jpg/v1/crop/x_0,y_0,w_3648,h_4800/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5542_JPG.jpg" },
      { name: "TBA", role: "Vice Chairperson", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
  },
  {
    id: "disec",
    name: "United Nations General Assembly (DISEC)",
    shortName: "DISEC",
    cardImage: disecImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_346,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "Reassessing Global Security Architectures Governing Strategically Contested Territories amid intensifying Great Power Rivalry.",
    chairLetter: [
      "In the last few years, the world has undergone a lot of changes, most of which have been detrimental to humanity. Be it the innumerable conflicts and battles that rage on in different corners of the world, or the devastating effects of nature's wrath that we have incurred, the problems are miles away from ceasing.",
      "The illicit trade of small arms and light weapons, facilitated by growing technology, has only risen, proportional to the number of conflicts around the world. From small regional gang turf wars in South America to wars between countries in the Middle East and North Asia, these arms seem to have found their way everywhere.",
      "As the United Nations' disarmament body, it is your utmost prerogative and responsibility to treat the issue as important and discuss practical solutions through mutual respect and understanding.",
    ],
    chairName: "Koustabh Gupta",
    chairRole: "Chairperson",
    chairEmail: "chair.disec@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_ef0870397fba4a2c84c7171164e8a001.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_3ffae51adf4942b1a1758b8c40dbf3f3.pdf",
    eb: [
      { name: "Koustabh Gupta", role: "Chairperson", image: underSecPhoto },
      { name: "TBA", role: "Vice Chairperson", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
  },
  {
    id: "unodc",
    name: "United Nations Office on Drugs and Crime",
    shortName: "UNODC",
    cardImage: unodcImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_01011cccbd1c434893d58de2d9b22db0~mv2.png/v1/crop/x_38,y_15,w_620,h_617/fill/w_264,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unhcr-logo-png-transparent.png",
    agenda: "Disrupting the Nexus Between Synthetic Narcotics Trafficking and Human Exploitation by Transnational Organised Crime Syndicates.",
    chairLetter: [
      "\"The true measure of any society is how it treats its most vulnerable.\" — Mahatma Gandhi",
      "In the narrative of our shared history, there are chapters not inked with pen, but stained with the red. The red of agony, the red of pain, and the red of displacement. The refugee crisis is not a distant issue—it is the ongoing erosion of civil order that follows every wind of war our world has weathered.",
      "The agenda picks up an extremely important global issue to discuss the refugee crisis in Europe and each stakeholder in great detail. With well researched speeches, effective communication and deliberation, we can all make a small effort for a better future.",
    ],
    chairName: "Aaryan Khanna",
    chairRole: "Chairperson",
    chairEmail: "chair.unhcr@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_ef8d0e73bf5541cc8c56c877d65bb714.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_0cb03ee32e8f4f3d88af1b2f9e6762e1.pdf",
    eb: [
      { name: "Aaryan Khanna", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_6cc88ce16eb24e9d863d96cf105cf006~mv2.jpg/v1/crop/x_409,y_548,w_2837,h_3797/fill/w_190,h_261,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5552_JPG.jpg" },
      { name: "TBA", role: "Vice Chairperson", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
  },
  {
    id: "viceroys-cabinet",
    name: "Council of Hindustan",
    shortName: "Council of Hindustan",
    cardImage: viceroysImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_293,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "The Revolt of 1857.",
    freezeDate: "March 8, 2009",
    chairLetter: [
      "\"It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.\" — Mark Twain",
      "ECOSOC is a cornerstone of the United Nations system, tasked with addressing global socio-economic issues. In this session, we will delve into one of the most defining economic crises of the 21st century: the Global Financial Crisis of 2008.",
      "As delegates in the Economic and Social Council, you will explore the aftermath of this crisis and the international responses that followed. Your task is not only to understand the causes and impacts but also to engage in diplomatic dialogue aimed at finding multilateral solutions.",
    ],
    chairName: "Tanveer S. Madan",
    chairRole: "Chairperson",
    chairEmail: "chair.ecosoc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_54e7cb89272c413093a16b96bf674386.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_e212e0737dab4fa9b851a97fe79b5485.pdf",
    eb: [
      { name: "Tanveer S. Madan", role: "Chairperson", image: dirGenPhoto },
      { name: "TBA", role: "Vice Chairperson", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
  },
  {
    id: "specpol",
    name: "Special Political and Decolonization Committee",
    shortName: "SPECPOL",
    cardImage: loksabhaImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_346,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "Revisiting the Montevideo Convention and International Guidelines for the recognition of Secessionist Entities while limiting discretion of Parent States.",
    chairLetter: [
      "The Special Political and Decolonization Committee (SPECPOL) is the Fourth Committee of the United Nations General Assembly. It deals with a variety of subjects which include those related to decolonization, Palestinian refugees, human rights, peacekeeping, mine action, outer space, public information, atomic radiation, and the University for Peace.",
      "Details for this committee will be updated soon. Stay tuned for more information about the agenda, executive board, and background guides.",
    ],
    chairName: "Kushagra Gupta",
    chairRole: "Chairperson",
    chairEmail: "chair.specpol@welhamboys.org",
    eb: [
      { name: "Kushagra Gupta", role: "Chairperson", image: "https://static.wixstatic.com/media/9bbbe8_dca912a8075b4a5a8a72983d08e78d56~mv2.jpg/v1/crop/x_293,y_0,w_3355,h_4422/fill/w_175,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5536_JPG.jpg" },
      { name: "Adarsh Raj", role: "Vice Chairperson", image: "" },
      { name: "Angad Singh", role: "Director", image: "" },
      { name: "Ayan Choudhary", role: "Director", image: "" },
      { name: "Garvit Agarwal", role: "Rapporteur", image: "" },
    ],
  },
  {
    id: "unhrc",
    name: "United Nations Human Rights Council",
    shortName: "UNHRC",
    cardImage: unhcrImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_01011cccbd1c434893d58de2d9b22db0~mv2.png/v1/crop/x_38,y_15,w_620,h_617/fill/w_264,h_262,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unhcr-logo-png-transparent.png",
    agenda: "Examining and Safeguarding the Human and Legal Rights of Asylum Seekers, Migrant Workers and Detained Individuals across the world.",
    chairLetter: [
      "Details for the United Nations Human Rights Council will be updated soon. Stay tuned for more information about the agenda, executive board, and background guides.",
    ],
    chairName: "TBA",
    chairRole: "Chairperson",
    chairEmail: "chair.unhrc@welhamboys.org",
    eb: [
      { name: "TBA", role: "Chairperson", image: "" },
      { name: "TBA", role: "Vice Chairperson", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Director", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
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
    chairName: "Neiyl Vasishta",
    chairRole: "Editor-In-Chief",
    chairEmail: "chair.ipc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_8a7d0b09ed6d42e2ba11fce6192fff57.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_82efced08b144a4f803d1e2d099f92fd.pdf",
    eb: [
      { name: "Neiyl Vasishta", role: "Editor-In-Chief", image: "https://static.wixstatic.com/media/9bbbe8_5190f093472c406d91d44f3c23fef01f~mv2.jpg/v1/crop/x_271,y_260,w_3259,h_4366/fill/w_198,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5559_JPG.jpg" },
      { name: "TBA", role: "Senior Editor", image: "" },
      { name: "TBA", role: "Creative Editor", image: "" },
      { name: "TBA", role: "Creative Editor", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
      { name: "TBA", role: "Rapporteur", image: "" },
    ],
  },
];
