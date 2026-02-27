// ==========================================
// 1. INFORMAÇÕES DO REINO
// ==========================================
export const kingdomData = {
  id: 290,
  title: "COUNCIL HALL",
  subtitle: "OF KINGDOM 290",
  desc: "Every royal directive, calculator, and archive for our kingdom gathered on a single page.",
};

// ==========================================
// 2. RULES OF ENGAGEMENT (ROE) - Completo
// ==========================================
export const rulesData = [
  { id: "1", text: "Jurisdiction" },
  {
    id: "1.1",
    text: "This ROE provides protection to all players who are members of LEGAL CLANS within the kingdom, and the clanless players below 100k might who follow ROE. LEGAL CLANS are defined in section 7.1",
  },
  {
    id: "1.2",
    text: "Attacks against protected players and clans within K290 are prohibited at all times and must follow the rules defined in section 3",
  },
  {
    id: "1.3",
    text: "Attacks against players and clans outside of K290 are permitted at all times",
  },
  {
    id: "1.4",
    text: "OUTLAW players, and players in an OUTLAW clan, are unprotected unless otherwise decreed by the Council of Clans",
  },
  {
    id: "1.5",
    text: "Players in a NON-COMPLYING clan, are unprotected unless otherwise decreed by the Council of Clans",
  },

  { id: "2", text: "Code of Conduct" },
  {
    id: "2.1",
    text: "We expect respectful and objective communication within the Kingdom. Deliberate misinformation, spam, and any form of deliberately disruptive or offensive communication towards players, clans, or groups are not permitted",
  },

  { id: "3", text: "Attacks" },
  {
    id: "3.1",
    text: "The Kingdom is at peace at all times except during COT. During COT special rules and exceptions apply as defined in section 4",
  },
  { id: "3.2", text: "Scouting is considered to be an attack" },
  {
    id: "3.3",
    text: "Players of OUTLAW clans may be attacked without restriction",
  },
  {
    id: "3.4",
    text: "Clan buildings of all clans may not be attacked at any time.",
  },
  {
    id: "3.4.1",
    text: "A successful attacks on a clan building will result in immediate OUTLAW status until conflagration ends (40 hours) and compensation is paid",
  },
  {
    id: "3.4.2",
    text: "Any one member of Court, Council or Palace can post an outlaw notice on K290-OUTLAW with the Battle report showing a successful attack.",
  },
  {
    id: "3.4.3",
    text: "Council is to review and vote to confirm or remove the outlaw status within 20 hours of the OUTLAWing",
  },
  { id: "3.5", text: "No attacks are permitted except:" },
  {
    id: "3.5.1",
    text: "Attacks during COT that comply with the rules defined in section 4",
  },
  { id: "3.5.2", text: "Removal of poachers as described in section 5" },
  { id: "3.5.3", text: "Attacks to collect ingots as described in section 8" },
  {
    id: "3.5.4",
    text: "Attacks against OUTLAW players and clans. The ROE does not protect players in OUTLAW clans",
  },
  {
    id: "3.5.5",
    text: "Attacks against clanless players over 100k might, Players under 100k might are protected",
  },
  {
    id: "3.5.6",
    text: "Consensual attacks against players or clans. Consensual attacks may be authorized by:",
  },
  { id: "3.5.6.1", text: "A player against themselves" },
  {
    id: "3.5.6.2",
    text: "A clan leader or superior against one of their clan members",
  },
  { id: "3.5.6.3", text: "A clan leader against one of their clan buildings" },
  { id: "3.6", text: "Right of Reprisal" },
  {
    id: "3.6.1",
    text: "Players are granted the right to attack any player that attacks them regardless of their might. This can be directly attacking their city or a hostile portal if attacked via a portal.",
  },
  {
    id: "3.6.2",
    text: "If you use the right to retaliate, you cannot claim any compensation. You may only make one retaliatory attack per attack received. Clan marches are permitted.",
  },
  { id: "3.6.3", text: "This right may be transferred to another player" },
  {
    id: "3.6.4",
    text: "Players using transferred rights of reprisal will message the target of the reprisal with the battle report of the original attack and indicate that the right of reprisal was transferred",
  },

  { id: "4", text: "Clash of the Throne (COT) Rules and exceptions" },
  {
    id: "4.1",
    text: "Attacks against player of might higher than your own are allowed",
  },
  {
    id: "4.2",
    text: "You can only attack weaker players if they have at least 50% of your might",
  },
  {
    id: "4.2.1",
    text: "Players ranked in the top 100 of Might for the Kingdom form an 'open category'",
  },
  {
    id: "4.2.2",
    text: "The players in the 'open category' are allowed to attack anyone else in the 'open category'. They may also attack below the top 100 if it complies with ROE 4.2 (50% rule)",
  },
  {
    id: "4.2.3",
    text: "If you are attacked and believe the 50% rule was broken contemporaneous evidence should be taken. A screenshot of your might, their might and the BR is needed for evidence should it be later brought to court",
  },
  {
    id: "4.3",
    text: "You are limited to a maximum of two attacks on a player within 6 hours, COT is for CP not RSS collection",
  },
  { id: "4.4", text: "Portals during COT" },
  {
    id: "4.4.1",
    text: "Hostile portals (7.5) can be attacked regardless of might or who the attacker was",
  },
  {
    id: "4.4.2",
    text: "Portals that are not hostile and located inside a clan territory, or at a event monster/memorial can NOT be attacked",
  },
  {
    id: "4.4.3",
    text: "Portals that are otherwise in open areas may be attacked if it meets the 50% rule",
  },
  {
    id: "4.5",
    text: "Clan Marches marches are not allowed for non-consensual attacks.",
  },
  {
    id: "4.6",
    text: "The use of the FARON hero is prohibited by any player in the top 100 of the COT ranking table during the THREE days of COT",
  },
  {
    id: "4.7",
    text: "A player with FARON hero is prohibited to cast a vote for the king during COT voting, and is subject to punishment by the Council of Clans for both using the FARON hero and/or voting with FARON. The punishment is at their discretion taking into account all relevant factors.",
  },

  { id: "5", text: "Resources" },
  {
    id: "5.1",
    text: "All game-generated resources (dragon mounds, tar wellsprings, silver, iron, wood, stone) located within a clan’s territory are the clan’s property. Monsters, Arenas, Citadels and Crypts are not restricted and available for all players to access.",
  },
  {
    id: "5.2",
    text: "All player-generated resources are the property of the player that generated the resources. This includes gold, silver, iron, wood, stone mines, and special event objects such as Mimic Chests, Yogwai, Snowmen etc.",
  },
  {
    id: "5.2.1",
    text: "Rare crypts are the property of the person who unlocked the crypt.",
  },
  {
    id: "5.3",
    text: "Resource tiles may not be attacked at any time except to remove a poacher, as described in 5.6.2",
  },
  {
    id: "5.4",
    text: "All game-generated dragon mounds and tar wellsprings located outside of clan territory are subject to the following regulations:",
  },
  {
    id: "5.4.1",
    text: "Tar Wellsprings must be (mandatory) registered in the K290-WS chatroom by listing the ‘y’ coordinate only. Any listing that identifies the X coordinate of the Wellspring is invalid.",
  },
  {
    id: "5.4.2",
    text: "Dragon Mounds must be (mandatory) registered in the K290-DM chatroom by listing the ‘y’ coordinate only. Any listing that identifies the X coordinate of the Dragon Mound is invalid.",
  },
  {
    id: "5.4.3",
    text: "The Dragon Mound or Well Spring collection must begin within 10 minutes",
  },
  {
    id: "5.4.4",
    text: "Only one WS or DM can be registered per 24 hours per player",
  },
  { id: "5.5", text: "Collisions" },
  {
    id: "5.5.1",
    text: "A collision is when two or more players begin a march to collect a game-generated resource tile that is not addressed by 5.1 or 5.4 while no player is on the resource tile. A collision results in an attack where no player initiates an attack.",
  },
  {
    id: "5.5.2",
    text: "An attack will be assessed to be a collision when less than 10% of the tile’s resources are collected when the attack occurs.",
  },
  {
    id: "5.5.3",
    text: "A general amnesty is offered to all players involved in a collision within limitations. Players found to be abusing this amnesty may be stripped of this amnesty through a vote by the Council of Clans.",
  },
  { id: "5.6", text: "Poaching" },
  {
    id: "5.6.1",
    text: "Poaching is when a resource tile covered by 5.1, 5.2, or 5.4 is collected by a player who is not authorized to collect that tile.",
  },
  {
    id: "5.6.2",
    text: "Clans or Players who have a tile occupied by a poacher have the following remedies available to them. Only one remedy may be used for each case:",
  },
  {
    id: "5.6.2.1",
    text: "Send the poacher a 3 minute warning, then attack the poacher on the RSS tile.",
  },
  {
    id: "5.6.2.2",
    text: "Allow the poacher to collect the RSS, but receive twice the value of the RSS collected by the poacher as compensation from the poacher.",
  },
  {
    id: "5.6.2.2.1",
    text: "This option is unavailable for dragon mounds and tar wellsprings where the registration has expired under 5.4.3 and the poacher is the prior registrant.",
  },
  {
    id: "5.6.2.2.2",
    text: "A scouting report satisfies to document the presence of a poacher for the purpose of pursuing a claim under 5.6.2",
  },

  { id: "6", text: "Violations" },
  { id: "6.1", text: "Violation Resolution Procedure" },
  {
    id: "6.1.1",
    text: "Contact the player violating the ROE directly and come to an agreed resolution",
  },
  {
    id: "6.1.2",
    text: "If no resolution is found, have your clan diplomat contact the player and the attacking clan’s diplomat",
  },
  {
    id: "6.1.3",
    text: "If no resolution has been achieved within 24 hours of the attack, a clan diplomat may request assistance from the court by posting in K290-COURT. Clanless players can self represent.",
  },
  {
    id: "6.1.4",
    text: "Players under 100k Might may not know the rules and customs of our kingdom yet, for the first offence we offer them amnesty, education and guidance to join a clan to learn the rules. Subsequent breaches will be dealt with as per normal.",
  },
  {
    id: "6.2",
    text: "Attacks must be reported to the court by a clan leader or diplomat no later than 7 days after the attack. Reports received older than 7 days will not be adjudicated.",
  },
  {
    id: "6.3",
    text: "Attack reports may be adjudicated by any single judge on the court to evaluate the ROE violation and assess compensation.",
  },
  {
    id: "6.4",
    text: "Use the K290 Compensation Calculator to calculate owed compensation from attacks.",
  },
  { id: "6.5", text: "The court ordered Compensation for Attacks may be:" },
  {
    id: "6.5.1",
    text: "Silver and RSS are based on the K290 compensation calculator",
  },
  { id: "6.5.2", text: "CP is in the form of retaliatory strikes" },
  {
    id: "6.5.3",
    text: "Compensation is limited to the offenders Hero level x 1M SP",
  },
  { id: "6.6", text: "Compensation is owed by the offending player" },
  {
    id: "6.7",
    text: "Without prejudice, Clans may elect to pay the players compensation on their behalf",
  },
  {
    id: "6.8",
    text: "Unless otherwise stated in a ruling, compensation must be settled within 24 hours of the ruling",
  },
  {
    id: "6.9",
    text: "Where a compensation is not completed within 24 hours to the satisfaction of the aggrieved or the court, a request for determination of OUTLAW status can be passed by the Council of Clans, this requires a majority vote by the Council of Clans to be enacted",
  },
  { id: "6.10", text: "Negative titles may be given for OUTLAW status" },
  {
    id: "6.11",
    text: "OUTLAW status may be removed by the Council of Clans when:",
  },
  {
    id: "6.11.1",
    text: "Compensation has been delivered in accordance with a prior court adjudication.",
  },
  {
    id: "6.11.2",
    text: "A pardon decree of the King and the Council of Clans (by way of vote) is made",
  },
  { id: "6.11.3", text: "The player leaves the kingdom" },
  { id: "6.11.4", text: "Automatically after 60 days" },
  {
    id: "6.12",
    text: "A player declared OUTLAW must be removed from their clan within 24 hours unless the debt is settled prior",
  },
  {
    id: "6.13",
    text: "Clans that retain an OUTLAW for longer than 24 hours may be declared OUTLAW themselves until the player is removed (see 7.2) or the debt is settled (see 6.11.1)",
  },
  {
    id: "6.14",
    text: "OUTLAWs will be announced by decree of the Council. Any changes to the name, location, or might of the OUTLAW will be announced in the K290-OUTLAWS channel",
  },

  { id: "7", text: "Definitions" },
  {
    id: "7.1",
    text: "LEGAL CLANS are any clan not deemed OUTLAW and that meet the following definition:",
  },
  { id: "7.1.1", text: "Formed by a Player" },
  { id: "7.1.2", text: "Have an active Leader and/or Superiors" },
  {
    id: "7.1.3",
    text: "Identify a Leader or Superior as their Diplomat on the clan information page",
  },
  {
    id: "7.1.4",
    text: "The clan indicates that they follow the K290 ROE on their clan info page",
  },
  {
    id: "7.2",
    text: "OUTLAW CLANS are clans that meet one of the following definitions:",
  },
  { id: "7.2.1", text: "The Leader of the clan is an OUTLAW." },
  {
    id: "7.2.2",
    text: "The clan fails to remove an existing member who is decreed to be an OUTLAW within 24 hours of the OUTLAW decree (see 6.13)",
  },
  {
    id: "7.2.3",
    text: "The clan has accepted a current OUTLAW into the clan after they have been OUTLAWED and the clan has been given 24 hours notice to remove the OUTLAW.",
  },
  { id: "7.3", text: "Consensual attacks are:" },
  { id: "7.3.1", text: "Arranged 1v1 attacks between two players." },
  {
    id: "7.3.2",
    text: "Arranged conquest point runs where a clan march occurs against one player at a time.",
  },
  {
    id: "7.3.3",
    text: "Arranged attacks on clan buildings to transfer clan RSS.",
  },
  {
    id: "7.4",
    text: "NON-COMPLYING CLANS are any clan that is not LEGAL or OUTLAW",
  },
  {
    id: "7.5",
    text: "A Hostile portal is where a BR shows an attack originating from a portal",
  },

  { id: "8", text: "Taxes" },
  {
    id: "8.1",
    text: "Taxes provide the ingots necessary to run kingdom bonuses and provide military sponsorship.",
  },
  {
    id: "8.2",
    text: "Portals and unbubbled cities above the ingot limits in section 8.3 are subject to tax collection by royal guard",
  },
  { id: "8.3", text: "Ingot Limits (City capital level)" },
  { id: "8.3.1", text: "Level 1-19 = 1,600 ingots" },
  { id: "8.3.2", text: "Level 20-30 = 25,000 ingots" },
  { id: "8.3.3", text: "Level 31-40 = 35,000 ingots" },
  { id: "8.3.4", text: "Level 40-45 = 45,000 ingots" },
  {
    id: "8.4",
    text: "Resource and silver taken in an attack to collect ingots are to be returned to the player.",
  },
  {
    id: "8.5",
    text: "The transfer of gold bars to another kingdom is not allowed at all times",
  },

  { id: "9", text: "Governance Structure" },
  { id: "9.1", text: "Palace" },
  { id: "9.1.1", text: "The King is voted in by the Senate" },
  {
    id: "9.1.2",
    text: "The King appoints Queen and Hand of the King at their discretion",
  },
  {
    id: "9.1.3",
    text: "Palace members, other than Queen and Hand of the King, are appointed to progress Kingdom issues, and to work with the council to implement their decisions. The Palace members shall be from a diverse range of Clans, a limit of one member per clan outside of King, Queen and Hand",
  },
  {
    id: "9.1.4",
    text: "The King facilitates the establishment of the Royal Guard",
  },
  {
    id: "9.1.5",
    text: "The King facilitates the establishment of the Council of Clans",
  },
  {
    id: "9.1.6",
    text: "The Palace can bring proposals to the Council of Clans for them to discuss, improve and vote upon",
  },
  {
    id: "9.1.7",
    text: "The Palace implements the Council of Clans decisions and determinations",
  },
  {
    id: "9.1.8",
    text: "In the event the King resigns the Queen will take over their duties",
  },
  { id: "9.2", text: "Council of Clans" },
  { id: "9.2.1", text: "The council consists of 13 clans of Kingdom 290" },
  {
    id: "9.2.2",
    text: "The Council is responsible for OUTLAW determinations, approving ROE changes, and Kingdom wide decisions",
  },
  {
    id: "9.2.3",
    text: "The council members will be 2 clan members from each of the top 10 legal clans (see section 7.1) ranked by might, at the end of each COT election. Where a main clan has an academy clan, sister clan or similar, only the largest clan will qualify for a seat on the council.",
  },
  {
    id: "9.2.3a",
    text: "Each clan has only one vote, the two members are to cover off timezone issues and speed of voting process.",
  },
  {
    id: "9.2.4",
    text: "The remaining 3 council seats will be selected by the initial council members from legal clans that are active, up and coming or show leadership. They are admitted by majority vote of the council.",
  },
  {
    id: "9.2.5",
    text: "Membership in the council continues until a member is removed or resigns. A clan may change their designated player on the council within reason",
  },
  {
    id: "9.2.6",
    text: "The council is dissolved at the time when COT ends and a new council is formed according to 9.2.3",
  },
  {
    id: "9.2.7",
    text: "OUTLAW status is to be voted on in council, majority vote passes, A player needs to be recommended to the council by Judiciary or King before a vote",
  },
  {
    id: "9.2.8",
    text: "The Judiciary or King can recommend a person be found an OUTLAW to Council",
  },
  { id: "9.3", text: "Judiciary" },
  {
    id: "9.3.1",
    text: "The King, Queen and Hand of King recommend a head judge to the Council of Clans, Council is to confirm or reject the appointment by majority vote",
  },
  {
    id: "9.3.2",
    text: "The Head judge leads the Judiciary, appoints Judges and manages the swift and fair justice for the Kingdom",
  },
  {
    id: "9.3.3",
    text: "The Head Judge can be removed by majority vote of the Council of Clans and then approval of the King",
  },
  {
    id: "9.3.4",
    text: "If the Head Judge resigns they are replaced as per section 9.3.1",
  },
  {
    id: "9.3.5",
    text: "Judges are empowered to adjudicate cases brought before the court, to apply the rules of ROE and confirm the correct compensation",
  },
  {
    id: "9.3.6",
    text: "The Head Judge can recommend to the Council of Clans a player be declared OUTLAW, the Council then votes on this recommendation",
  },
  { id: "9.4", text: "Royal Guard" },
  {
    id: "9.4.1",
    text: "Clan leaders nominate two players from their clan to the King for consideration to join the Royal Guard",
  },
  {
    id: "9.4.2",
    text: "The Palace is to appoint players from the nomination to the Royal Guard at its discretion",
  },
  { id: "9.4.3", text: "Royal Guard is responsible for:" },
  { id: "9.4.3.1", text: "Tax collection (see section 8)" },
  {
    id: "9.4.3.2",
    text: "Collection of compensation where there is a valid judgement from the court and directed to collect by the King",
  },
  { id: "9.4.4", text: "Royal guards will add 'RG' to the end of their name." },
  {
    id: "9.4.5",
    text: "Players who are not Royal Guards can not use 'RG' at the end of their name. The player can be recommended by RG (via the King) to the Court for a determination of OUTLAW status by the CoC",
  },
  {
    id: "9.4.6",
    text: "The King can dismiss a Royal Guard at their discretion",
  },
  {
    id: "9.4.7",
    text: "A Player in the RG can not also be a member of the Judiciary, Council, or be King, Queen or Hand of the King",
  },
  { id: "9.5", text: "General Provisions" },
  {
    id: "9.5.1",
    text: "A player can only be in one of either the Palace, Council of Clans, or Judiciary at any one time",
  },
  {
    id: "9.5.2",
    text: "Each group will adopt a bylaw that is to to describe their Policies, Procedures and Processes for how they are to operate. This should be published and available for all in K290 to read",
  },
  {
    id: "9.5.3",
    text: "ROE amendments can be initiated by any one of Palace, Judiciary, or Council of Clans. The Council of Clans will discuss and vote upon any changes to ROE. A super majority of 10 votes is needed to change the ROE",
  },
];

// ==========================================
// 3. CANAIS OFICIAIS
// ==========================================
export const channelsData = [
  {
    name: "K290-ROE",
    desc: "Official publication of the Rules of Engagement and updates. READ ONLY CHAT.",
  },
  {
    name: "K290-HELPDESK",
    desc: "Channel for asking and answering general game questions.",
  },
  {
    name: "K290-WS",
    desc: "Mandatory registration for Wellsprings in neutral lands. Use the Y coordinate.",
  },
  {
    name: "K290-DM",
    desc: "Mandatory registration for Dragon Mounds in neutral lands. Use the Y coordinate.",
  },
  {
    name: "K290-DISPUTES",
    desc: "Channel dedicated to resolving minor ROE violations.",
  },
  {
    name: "K290-COURT",
    desc: "Adjudication of ROE violations by Judges and Diplomats.",
  },
  { name: "K290-COURTDECISIONS", desc: "Official Court Case Rulings." },
  {
    name: "K290-OUTLAWS",
    desc: "Public list of current Outlaws who have lost ROE protection.",
  },
  {
    name: "K290-CPEXCHANGE",
    desc: "Channel for finding other players for CP Exchanges.",
  },
  {
    name: "K290-LEADERS",
    desc: "Chat room for Leaders and Superiors of each clan.",
  },
  { name: "ROE-REVISION", desc: "Put your suggestions for ROE changes." },
];

// ==========================================
// 4. CÓDIGOS E PRESENTES
// ==========================================
export const giftsData = [
  { id: 1, reward: "1500 Tar", code: "tar1500" },
  { id: 2, reward: "25p Speedups", code: "0024500" },
  { id: 3, reward: "500 Gold", code: "abeedunsts" },
  { id: 4, reward: "Dragon Roulette Coins", code: "luckyroulette100" },
  { id: 5, reward: "Ramses Roulette Coins", code: "Ramsesroulette100" },
  { id: 6, reward: "Bonus Gift 1-3K Gold", code: "65849016820654116771" },
  { id: 7, reward: "Total Battle Support-Gifts", code: "CattyDayhem" },
  { id: 8, reward: "Seasonal Bonus", code: "Merrychristmas2025" },
];
