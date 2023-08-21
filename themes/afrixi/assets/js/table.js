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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  NM: [
    {
      title: "Albuquerque-Santa Fe-Las Vegas, NM",
      xml: "AQ",
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  GA: [
    {
      title: "Atlanta--Athens-Clarke County--Sandy Springs, GA-AL",
      xml: ATL,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  RI: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  NH: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  ME: [
    {
      title: "Boston-Worcester-Providence, MA-RI-NH-ME",
      xml: BOS,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  VT: [
    {
      title: "Burlington-South Burlington, VT",
      xml: "BN",
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  SC: [
    {
      title: "Charlotte-Concord, NC-SC",
      xml: CT,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  KY: [
    {
      title: "Cincinnati-Wilmington-Maysville, OH-KY-IN",
      xml: CIN,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  OK: [
    {
      title: "Dallas-Fort Worth, TX-OK",
      xml: DFW,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  MI: [
    {
      title: "Detroit-Warren-Ann Arbor, MI",
      xml: "DET",
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  KS: [
    {
      title: "Kansas City-Overland Park-Kansas City, MO-KS",
      xml: KC,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  MN: [
    {
      title: "Minneapolis-St. Paul, MN-WI",
      xml: MSP,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  NE: [
    {
      title: "Omaha-Council Bluffs-Fremont, NE-IA",
      xml: OM,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  DE: [
    {
      title: "Philadelphia-Reading-Camden, PA-NJ-DE-MD",
      xml: PHL,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  OR: [
    {
      title: "Portland-Vancouver-Salem, OR-WA",
      xml: POR,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
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
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  DC: [
    {
      title: "Washington-Baltimore-Arlington, DC-MD-VA-WV-PA",
      xml: DCB,
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  AK: [
    {
      title: "State of Alaska - AK",
      xml: "AK",
    },
    {
        title: "Rest of U.S.",
        xml: "RUS",
      },
  ],
  AR: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  AS: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  ID: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  LA: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  MS: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  WY: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  VI: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  UT: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  TN: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  SD: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  PR: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  MP: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  ND: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  MT: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  GU: [
    {
      title: "Rest of U.S.",
      xml: "RUS",
    },
  ],
  HI: [
    {
      title: "State of Hawaii - HI",
      xml: "HI",
    },
  ],
};
