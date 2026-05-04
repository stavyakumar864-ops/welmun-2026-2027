import unscImg from "@/assets/committees/unsc.jpg";
import disecImg from "@/assets/committees/disec.jpg";
import unodcImg from "@/assets/committees/unodc.jpg";
import viceroysImg from "@/assets/committees/viceroys-cabinet.jpg";
import loksabhaImg from "@/assets/committees/loksabha.jpg";
import ipcImg from "@/assets/committees/ipc.jpg";
import unhcrImg from "@/assets/committees/unhcr.jpg";
import dirGenPhoto from "@/assets/dir-gen.png";
import underSecPhoto from "@/assets/under-sec.png";
import tanveerPhoto from "@/assets/tanveer-madan.png";
import shashwatPhoto from "@/assets/shashwat-singh.png";
import aaryanPhoto from "@/assets/aaryan-khanna.png";
import angadKhuranaPhoto from "@/assets/angad-khurana.png";
import ahanPhoto from "@/assets/ahan-sparsh.png";
import ipcNeiylPhoto from "@/assets/eb/ipc-neiyl.png";
import ipcJaiPhoto from "@/assets/eb/ipc-jai.png";
import ipcVaibbhavPhoto from "@/assets/eb/ipc-vaibbhav.png";
import ipcRushilPhoto from "@/assets/eb/ipc-rushil.png";
import ipcSiddharthPhoto from "@/assets/eb/ipc-siddharth.png";
import eshaanTiwariPhoto from "@/assets/eb/eshaan-tiwari.jpg";
import architShekharPhoto from "@/assets/eb/archit-shekhar.jpg";
import tauhidPhoto from "@/assets/eb/tauhid-ali-hasan.jpg";
import priyanshPhoto from "@/assets/eb/priyansh-baluni.jpg";
import vaibhavSharmaPhoto from "@/assets/eb/vaibhav-kumar-sharma.jpg";
import yuvrajGuptaPhoto from "@/assets/eb/yuvraj-gupta.jpg";
import chetanChopraPhoto from "@/assets/eb/chetan-chopra.jpg";
import agastyaGuptaPhoto from "@/assets/eb/agastya-gupta.jpg";
import viratGaganPhoto from "@/assets/eb/virat-gagan.jpg";
import shivanshThapliyalPhoto from "@/assets/eb/shivansh-thapliyal.jpg";
import koustabhGuptaPhoto from "@/assets/eb/koustabh-gupta.jpg";
import harshitSachanPhoto from "@/assets/eb/harshit-sachan.png";
import muazManzoorPhoto from "@/assets/eb/muaz-manzoor.png";
import prayaanShobitVaishPhoto from "@/assets/eb/prayaan-shobit-vaish.png";
import prahethVishalAggarwalPhoto from "@/assets/eb/praheth-vishal-aggarwal.png";
import aaryanUnodcPhoto from "@/assets/eb/aaryan-khanna-unodc.png";
import kushagraGuptaPhoto from "@/assets/eb/kushagra-gupta.jpg";
import angadSinghPhoto from "@/assets/eb/angad-singh.jpg";
import adarshRajPhoto from "@/assets/eb/adarsh-raj.jpg";
import ayanChoudharyPhoto from "@/assets/eb/ayan-choudhary.jpg";
import ealvisTallangPhoto from "@/assets/eb/ealvis-tallang.png";
import gitanshPawarPhoto from "@/assets/eb/gitansh-pawar.jpg";
import pingalakshGoyalPhoto from "@/assets/eb/pingalaksh-goyal.jpg";
import atharvaAggarwalPhoto from "@/assets/eb/atharva-aggarwal.jpg";
import dhruvAggarwalPhoto from "@/assets/eb/dhruv-aggarwal.jpg";
import vyomNathaniPhoto from "@/assets/eb/vyom-nathani.jpg";
import bhaveshSinghalPhoto from "@/assets/eb/bhavesh-singhal.jpg";
import aaravAgarwalPhoto from "@/assets/eb/aarav-agarwal.jpg";
import siddharthaShrivastavaPhoto from "@/assets/eb/siddhartha-shrivastava.jpg";
import keshavPoddarPhoto from "@/assets/eb/keshav-poddar.jpg";
import nirvaanAgrawalPhoto from "@/assets/eb/nirvaan-agrawal.jpg";

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
      { name: "Ahan Sparsh", role: "Chairperson", image: ahanPhoto },
      { name: "Atharva Agrawal", role: "Vice Chairperson", image: atharvaAggarwalPhoto },
      { name: "Bhavesh Singhal", role: "Director", image: bhaveshSinghalPhoto },
      { name: "Nirvaan Agrawal", role: "Director", image: nirvaanAgrawalPhoto },
      { name: "Dhruv Aggarwal", role: "Rapporteur", image: dhruvAggarwalPhoto },
      { name: "Vyom Nathani", role: "Rapporteur", image: vyomNathaniPhoto },
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
      { name: "Koustabh Gupta", role: "Chairperson", image: koustabhGuptaPhoto },
      { name: "Agastya Gupta", role: "Vice Chairperson", image: agastyaGuptaPhoto },
      { name: "Chetan Chopra", role: "Director", image: chetanChopraPhoto },
      { name: "Yuvraj Gupta", role: "Director", image: yuvrajGuptaPhoto },
      { name: "Virat Gagan", role: "Rapporteur", image: viratGaganPhoto },
      { name: "Shivansh Thapliyal", role: "Rapporteur", image: shivanshThapliyalPhoto },
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
      "\"The drug problem is a global problem. It is a principle of shared responsibility; it is not a problem of one country or a group of countries. It is a global problem that requires a global solution.\" — Kofi Annan, 7th Secretary-General of the United Nations",
      "A hidden economy operates outside the law. It runs on exploitation. In this economy, human suffering is not an accident. It is a product. Addiction is not just a health crisis. It is a tool for control.",
      "The United Nations Office on Drugs and Crime meets this year to face a difficult reality. Synthetic drug trafficking and human exploitation are merging. Transnational organized crime groups drive this change. The threat is not distant. It is here. It is a system that links drug dependence, human trafficking, and the sale of human bodies.",
      "I am honored to serve as Chairperson of UNODC for the 12th edition of the Welham Model United Nations Conference. My Executive Board includes Harshit Sachan as Vice Chairperson, Muaz Manzoor and Prayaan Shobit Vaish as Directors, and Praheth Vishal Agarwal as Rapporteur. Together, we are committed to ensuring a committee that is not only intellectually stimulating but also deeply engaging.",
      "The agenda requires deep understanding. You must see how modern organized crime works. Drug networks enable exploitation through coercion, debt bondage, and trafficking. Do not rely on simple solutions.",
      "As the Executive Board, we expect you to research carefully, think strategically, and participate actively. This committee will test your ability to analyze global issues and respond with clear diplomacy.",
      "I look forward to a session defined by focus, insight, and meaningful action.",
      "Let deliberation guide you, and let action define you.",
    ],
    chairName: "Aaryan Khanna",
    chairRole: "Chairperson",
    chairEmail: "chair.unodc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_ef8d0e73bf5541cc8c56c877d65bb714.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_0cb03ee32e8f4f3d88af1b2f9e6762e1.pdf",
    eb: [
      { name: "Aaryan Khanna", role: "Chairperson", image: aaryanUnodcPhoto },
      { name: "Harshit Sachan", role: "Vice Chairperson", image: harshitSachanPhoto },
      { name: "Muaz Manzoor", role: "Director", image: muazManzoorPhoto },
      { name: "Prayaan Shobit Vaish", role: "Director", image: prayaanShobitVaishPhoto },
      { name: "Praheth Vishal Aggarwal", role: "Rapporteur", image: prahethVishalAggarwalPhoto },
    ],
  },
  {
    id: "viceroys-cabinet",
    name: "Council of Hindustan",
    shortName: "Council of Hindustan",
    cardImage: viceroysImg,
    logo: "https://static.wixstatic.com/media/9bbbe8_7895e5b978fa4c238ab6c4962af9e9fc~mv2.png/v1/fill/w_293,h_239,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/UNSC%20Logo_edited_edited.png",
    agenda: "The Revolt of 1857",
    freezeDate: "15 June, 1857",
    note: "This is a bilingual and a constant crisis committee. This committee does not follow the traditional timeline and is based on a series of fictional events.",
    chairLetter: [
      "\"A flame does not ask permission to burn.\"",
      "Dear Delegates,",
      "It gives me immense pleasure to welcome you all to the 12th edition of the Welham Model United Nations Conference. It is a great honor for me to serve as the Chairperson of the Council of Hindustan this year.",
      "A little about myself before I start. My name is Tanveer Singh Madan and I serve as the School Captain of Welham Boys' School and the MUN president. Outside my student life, I like to listen to music and write and I plan on pursuing a career in Law and Politics in the future. Alongside me, Eshaan Tiwari will be serving as the Vice-Chairperson, Vaibbhav Kumar Sharma and Tauhid Ali Hassan will be serving as the directors and Priyansh Baluni and Archit Shekhar will be presuming the role of the rapporteurs.",
      "The year is 1857 – the Indian Subcontinent is at the precipice of a conflict that might shape how we look at history in the future. The committee explores an alternative timeline that will make you all question the validity of history but most importantly, it will ignite the question: 'What would have happened if Indians were not united?'",
      "This committee is not a regular crisis simulation – this is not a question of power, control and liberty but a question of who claims what. It is a question of alliances and betrayals more than it is about independence of Hindustan.",
      "At the onset of the uprising against the British, this committee convenes on 15 June, 1857 at the palace of Bahadur Shah Zafar in Delhi. This committee must answer questions on what is moral and what is colonial anarchy. Whether an independent state is even feasible or a partition even necessary but most importantly, it must answer the question – what is the validity of an independence that is forged when your own men are shaking hands with the enemy.",
      "May the revolt that shook an empire remind this committee that history does not forgive silence.",
      "Anticipating voices as fearless as the rebels of 1857,",
    ],
    chairName: "Tanveer Singh Madan",
    chairRole: "Chairperson",
    chairEmail: "chair.councilofhindustan@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_54e7cb89272c413093a16b96bf674386.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_e212e0737dab4fa9b851a97fe79b5485.pdf",
    eb: [
      { name: "Tanveer S. Madan", role: "Chairperson", image: tanveerPhoto },
      { name: "Eshaan Tiwari", role: "Vice Chairperson", image: eshaanTiwariPhoto },
      { name: "Tauhid Ali Hasan", role: "Director", image: tauhidPhoto },
      { name: "Vaibhav Kumar Sharma", role: "Director", image: vaibhavSharmaPhoto },
      { name: "Archit Shekhar", role: "Rapporteur", image: architShekharPhoto },
      { name: "Priyansh Baluni", role: "Rapporteur", image: priyanshPhoto },
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
    bgLink: "#",
    matrixLink: "#",
    eb: [
      { name: "Kushagra Gupta", role: "Chairperson", image: kushagraGuptaPhoto },
      { name: "Adarsh Raj", role: "Vice Chairperson", image: adarshRajPhoto },
      { name: "Angad Singh", role: "Director", image: angadSinghPhoto },
      { name: "Ayan Choudhary", role: "Director", image: ayanChoudharyPhoto },
      { name: "Gitansh Pawar", role: "Director", image: gitanshPawarPhoto },
      { name: "Pingalaksh Goyal", role: "Rapporteur", image: pingalakshGoyalPhoto },
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
      "\"The rights of every man are diminished when the rights of one man are threatened.\" — John F. Kennedy",
      "Dear Delegates,",
      "It is my honor to welcome you to the United Nations Human Rights Council. The Human Rights Council remains one of the most consequential bodies within the international system, entrusted with the solemn responsibility of upholding human dignity across all member states. Established in 2006 as a successor to the UN Commission on Human Rights, the Council reflects the international community's collective commitment to ensuring that fundamental rights are not merely aspirational ideals, but enforceable realities.",
      "Before that, I would like to share a bit about myself. I am Shashwat, a Commerce student currently in 12th grade and the Cricket Captain of Welham Boys' School. My interests outside academics include public speaking, photography, and cinematography. Alongside me, we have Angad Khurana serving as Vice Chair, Keshav Poddar and Aarav Agarwal as Directors of the committee, and Siddhartha Shrivastava in the capacity of Rapporteur.",
      "The agenda before this committee, \"Examining and Safeguarding the Human and Legal Rights of Asylum Seekers, Migrant Workers, and Detained Individuals,\" sits at the intersection of law, policy, and human dignity. Asylum seekers fleeing conflict and persecution are often met with closed borders and legal systems ill-equipped to process their claims fairly. Migrant workers, who form the backbone of economies across the world, frequently operate in conditions of exploitation with little to no legal recourse. Detained individuals, regardless of the grounds of their detention, remain among the most invisible and vulnerable, removed from public scrutiny and, too often, from justice itself. These are not isolated incidents but deep, structural failures that demand not just acknowledgement, but serious action. It falls upon this committee to move beyond the language of concern and towards the architecture of change.",
      "As the Executive Board, we expect you to research carefully, engage in meaningful dialogue, and participate in fruitful debate. For some of you, this will be your first Model United Nations conference, while for others, it may be your last. We encourage everyone to participate and to not hesitate to ask questions. As delegates, you can expect us to be fair in our judgement, and all decisions we make will be in the best interest of every delegate and the committee at large.",
      "If you have any questions or need further clarification, do not hesitate to reach out via email. We look forward to seeing you all at WELMUN and to a fruitful, engaging debate.",
    ],
    chairName: "Shashwat Singh",
    chairRole: "Chairperson",
    chairEmail: "chair.unhrc@welhamboys.org",
    bgLink: "#",
    matrixLink: "#",
    eb: [
      { name: "Shashwat Singh", role: "Chairperson", image: shashwatPhoto },
      { name: "Angad Khurana", role: "Vice Chairperson", image: angadKhuranaPhoto },
      { name: "Keshav Poddar", role: "Director", image: keshavPoddarPhoto },
      { name: "Aarav Agarwal", role: "Director", image: aaravAgarwalPhoto },
      { name: "Siddhartha Shrivastava", role: "Rapporteur", image: siddharthaShrivastavaPhoto },
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
      "*\"You run to things that other people are afraid of.\"*",
      "Chaos makes people terrified, however journalists? They have discovered a gateway to a greater world, a world through which they feed the people, a world which revolves around them just to document the truth the universe would otherwise never see.",
      "It is with great honour that I, Neiyl Vasishta, in the capacity of the Editor-In-Chief, welcome you to the 12th edition of the International Press Corps at Welham Boys' School Model United Nations.",
      "*\"Where the community collides, is where the journalists coincide.\"*",
      "Stories aren't meant to be reported, but to be stepped in. I've observed how narratives are built, broken and bent to fit power. Somewhere between impossible deadlines and missed sleep, there's one thing that's stuck: truth isn't handed to you, you obtain it. Which is the reason we all strive to be present here.",
      "This is what this committee, IPC stands for.",
      "My journey with IPC didn't begin with certainty. I remember stepping into my very first committee, unsure of what I had to offer, encircled with people who were far better than me. Though journalism has a way of shaping you, that uncertainty turned into curiosity, and that curiosity into a voice I learned to trust. I will be assisted by Jai Gagaliya and Vaibbhav Yadav as the Senior Editors, Siddharth Jindal and Ealvis Tallang as the Creative Editors, along with Rushil Singhal as the Rapporteur.",
      "As the press, your job is to cut through the noise that surrounds you and get a hold of what's real. Push further, question harder, and report stories the way it actually is, not the way they're supposed to appear as. This committee is your canvas, you hold the responsibility of shaping this conference, shaping what the conclusion comes out to be. Make your voice count.",
      "Use the resources at your disposal, and make it a worthwhile experience. Establish and sway public opinion, be alert, and keep up with the spirit of journalism. Feel free to email us at chair.ipc@welhamboys.org for further queries.",
    ],
    chairName: "Neiyl Vasishta",
    chairRole: "Editor-In-Chief",
    chairEmail: "chair.ipc@welhamboys.org",
    bgLink: "https://www.welhammun.org/_files/ugd/9bbbe8_8a7d0b09ed6d42e2ba11fce6192fff57.pdf",
    matrixLink: "https://www.welhammun.org/_files/ugd/9bbbe8_82efced08b144a4f803d1e2d099f92fd.pdf",
    eb: [
      { name: "Neiyl Vasishta", role: "Editor-In-Chief", image: ipcNeiylPhoto },
      { name: "Jai Gagaliya", role: "Senior Editor", image: ipcJaiPhoto },
      { name: "Vaibbhav Yadav", role: "Senior Editor", image: ipcVaibbhavPhoto },
      { name: "Siddharth Jindal", role: "Creative Editor", image: ipcSiddharthPhoto },
      { name: "Ealvis Tallang", role: "Creative Editor", image: ealvisTallangPhoto },
      { name: "Rushil Singhal", role: "Rapporteur", image: ipcRushilPhoto },
    ],
  },
];

export const committeeOrder = ["unsc", "disec", "specpol", "unhrc", "unodc", "ipc", "viceroys-cabinet"] as const;

export const orderedCommittees = committeeOrder
  .map((id) => committees.find((committee) => committee.id === id))
  .filter(Boolean) as CommitteeData[];
