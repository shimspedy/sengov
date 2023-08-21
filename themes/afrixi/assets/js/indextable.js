const AL = "AL";
const NY = "AL";
const BOS = "AL";
const HAR = "AL";
const ATL = "ATl";
const DFW = "DFW";
const CT = "CT";
const VB = "VB";
const CHI = "CHI";
const DV = "DV";
const SL = "SL";
const CIN = "CIN";
const MSP = "MSP";
const PHL = "PHL";
const PIT = "PIT";
const OM = "OM";
const DCB = "DCB";
const KC = "KC";
const LV = "LV";
const SAC = "SAC";
const POR = "POR";

const table = {
  NY: [
    {
      title: "Albany-Schenectady, NY-MA",
      xml: AL,
    },
    {
      title: "Buffalo-Cheektowaga, NY",
      xml: "BU",
    },
    {
      title: "New York-Newark, NY-NJ-CT-PA",
      xml: NY,
    },
  ],
  MA: [
    {
      title: "Albany-Schenectady, NY-MA",
      xml: AL,
    },
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
    {
      title: "Hartford-West Hartford, CT-MA",
      xml: HAR,
    },
  ],
  NM: [
    {
      title: "Albuquerque-Santa Fe-Las Vegas, NM",
      xml: "AQ",
    },
  ],
  GA: [
    {
      title: "Atlanta--Athens-Clarke County--Sandy Springs, GA-AL",
      xml: ATL,
    },
  ],
  AL: [
    {
      title: "Atlanta--Athens-Clarke County--Sandy Springs, GA-AL",
      xml: ATL,
    },
    {
      title: "Birmingham-Hoover-Talladega, AL",
      xml: "BH",
    },
    {
      title: "Huntsville-Decatur-Albertville, AL",
      xml: "HNT",
    },
  ],
  TX: [
    {
      title: "Austin-Round Rock, TX",
      xml: "AU",
    },
    {
      title: "Corpus Christi-Kingsville-Alice, TX",
      xml: "CC",
    },
    {
      title: "Dallas-Fort Worth, TX-OK",
      xml: DFW,
    },
    {
      title: "Houston-The Woodlands, TX",
      xml: "HOU",
    },
    {
      title: "Laredo, TX",
      xml: "LR",
    },
    {
      title: "San Antonio-New Braunfels-Pearsall, TX",
      xml: "SO",
    },
  ],
  RI: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
  ],
  NH: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
  ],
  ME: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
  ],
  VT: [
    {
      title: "Burlington-South Burlington, VT",
      xml: "BN",
    },
  ],
  NC: [
    {
      title: "Charlotte-Concord, NC-SC",
      xml: CT,
    },
    {
      title: "Raleigh-Durham-Chapel Hill, NC",
      xml: "RA",
    },
    {
      title: "Virginia Beach-Norfolk, VA-NC",
      xml: VB,
    },
  ],
  SC: [
    {
      title: "Charlotte-Concord, NC-SC",
      xml: CT,
    },
  ],
  IL: [
    {
      title: "Chicago-Naperville, IL-IN-WI",
      xml: CHI,
    },
    {
      title: "Davenport-Moline, IA-IL",
      xml: DV,
    },
    {
      title: "St. Louis-St. Charles-Farmington, MO-IL",
      xml: SL,
    },
  ],
  IN: [
    {
      title: "Chicago-Naperville, IL-IN-WI",
      xml: CHI,
    },
    {
      title: "Cincinnati-Wilmington-Maysville, OH-KY-IN",
      xml: CIN,
    },
    {
      title: "Indianapolis-Carmel-Muncie, IN",
      xml: "IND",
    },
  ],
  WI: [
    {
      title: "Chicago-Naperville, IL-IN-WI",
      xml: CHI,
    },
    {
      title: "Milwaukee-Racine-Waukesha, WI",
      xml: "MIL",
    },
    {
      title: "Minneapolis-St. Paul, MN-WI",
      xml: MSP,
    },
  ],
  OH: [
    {
      title: "Cincinnati-Wilmington-Maysville, OH-KY-IN",
      xml: CIN,
    },
    {
      title: "Cleveland-Akron-Canton, OH",
      xml: "CLE",
    },
    {
      title: "Columbus-Marion-Zanesville, OH",
      xml: "COL",
    },
    {
      title: "Dayton-Springfield-Sidney, OH",
      xml: "DAY",
    },
    {
      title: "Pittsburgh-New Castle-Weirton, PA-OH-WV",
      xml: PIT,
    },
  ],
  KY: [
    {
      title: "Cincinnati-Wilmington-Maysville, OH-KY-IN",
      xml: CIN,
    },
  ],
  CO: [
    {
      title: "Colorado Springs, CO",
      xml: "CS",
    },
    {
      title: "Denver-Aurora, CO",
      xml: "DEN",
    },
  ],
  OK: [
    {
      title: "Dallas-Fort Worth, TX-OK",
      xml: DFW,
    },
  ],
  IA: [
    {
      title: "Davenport-Moline, IA-IL",
      xml: DV,
    },
    {
      title: "Des Moines-Ames-West Des Moines, IA",
      xml: "DM",
    },
    {
      title: "Omaha-Council Bluffs-Fremont, NE-IA",
      xml: OM,
    },
  ],
  MI: [
    {
      title: "Detroit-Warren-Ann Arbor, MI",
      xml: "DET",
    },
  ],
  PA: [
    {
      title: "Harrisburg-Lebanon, PA",
      xml: "HB",
    },
    {
      title: "New York-Newark, NY-NJ-CT-PA",
      xml: NY,
    },
    {
      title: "Philadelphia-Reading-Camden, PA-NJ-DE-MD",
      xml: PHL,
    },
    {
      title: "Pittsburgh-New Castle-Weirton, PA-OH-WV",
      xml: PIT,
    },
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
  ],
  CT: [
    {
      title: "Hartford-West Hartford, CT-MA",
      xml: HAR,
    },
    {
      title: "New York-Newark, NY-NJ-CT-PA",
      xml: NY,
    },
  ],
  MO: [
    {
      title: "Kansas City-Overland Park-Kansas City, MO-KS",
      xml: KC,
    },
    {
      title: "St. Louis-St. Charles-Farmington, MO-IL",
      xml: SL,
    },
  ],
  KS: [
    {
      title: "Kansas City-Overland Park-Kansas City, MO-KS",
      xml: KC,
    },
  ],
  NV: [
    {
      title: "Las Vegas-Henderson, NV-AZ",
      xml: LV,
    },
    {
      title: "Sacramento-Roseville, CA-NV",
      xml: SAC,
    },
  ],
  AZ: [
    {
      title: "Las Vegas-Henderson, NV-AZ",
      xml: LV,
    },
    {
      title: "Phoenix-Mesa-Scottsdale, AZ",
      xml: "PX",
    },
    {
      title: "Tucson-Nogales, AZ",
      xml: "TU",
    },
  ],
  CA: [
    {
      title: "Los Angeles-Long Beach, CA",
      xml: "LA",
    },
    {
      title: "Sacramento-Roseville, CA-NV",
      xml: SAC,
    },
    {
      title: "San Diego-Carlsbad, CA",
      xml: "SD",
    },
    {
      title: "San Jose-San Francisco-Oakland, CA",
      xml: "SF",
    },
  ],
  FL: [
    {
      title: "Miami-Fort Lauderdale-Port St. Lucie, FL",
      xml: "MFL",
    },
    {
      title: "Palm Bay-Melbourne-Titusville, FL",
      xml: "PB",
    },
  ],
  MN: [
    {
      title: "Minneapolis-St. Paul, MN-WI",
      xml: MSP,
    },
  ],
  NJ: [
    {
      title: "New York-Newark, NY-NJ-CT-PA",
      xml: NY,
    },
    {
      title: "Philadelphia-Reading-Camden, PA-NJ-DE-MD",
      xml: PHL,
    },
  ],
  NE: [
    {
      title: "Omaha-Council Bluffs-Fremont, NE-IA",
      xml: OM,
    },
  ],
  DE: [
    {
      title: "Philadelphia-Reading-Camden, PA-NJ-DE-MD",
      xml: PHL,
    },
  ],
  MD: [
    {
      title: "Philadelphia-Reading-Camden, PA-NJ-DE-MD",
      xml: PHL,
    },
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
  ],
  WV: [
    {
      title: "Pittsburgh-New Castle-Weirton, PA-OH-WV",
      xml: PIT,
    },
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
  ],
  OR: [
    {
      title: "Portland-Vancouver-Salem, OR-WA",
      xml: POR,
    },
  ],
  WA: [
    {
      title: "Portland-Vancouver-Salem, OR-WA",
      xml: POR,
    },
    {
      title: "Seattle-Tacoma, WA",
      xml: "SEA",
    },
  ],
  VA: [
    {
      title: "Richmond, VA",
      xml: "RCH",
    },
    {
      title: "Virginia Beach-Norfolk, VA-NC",
      xml: VB,
    },
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
  ],
  DC: [
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
  ],
  AK: [
    {
      title: "State of Alaska - AK",
      xml: "AK",
    },
  ],
  HI: [
    {
      title: "State of Hawaii - HI",
      xml: "HI",
    },
  ],
};
