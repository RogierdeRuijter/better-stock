import { ImageName } from "./imageNames.ts";

interface ImageMetadata {
  displayName: string;
  serieNumber: number | undefined;
}

export const getImageMetadata = (name: string): ImageMetadata => {
  return {
    displayName: addDisplayName(name),
    serieNumber: addSerieNumber(name),
  };
};

const addDisplayName = (name: string): string => {
  switch (name) {
    case ImageName.Aftrekkendeman:
      return "Masturbating Man";
    case ImageName.AutoOgenEnlijnen:
      return "Car with Eyes and Lines";
    case ImageName.AutoOgen:
      return "Car with Eyes";
    case ImageName.Badkamer:
      return "Bathroom";
    case ImageName.Boos:
      return "Angry Face";
    case ImageName.Cheers:
      return "Cheers";
    case ImageName.Drankjesdoen:
      return "Having Drinks";
    case ImageName.EngbosFiets:
      return "Scary Forest with Bicycle";
    case ImageName.GeestVanDeHarrasor:
      return "Ghost of the Harrasor";
    case ImageName.HandenEnthuis:
      return "Hands and Home";
    case ImageName.HandenHuilen:
      return "Hands with Crying";
    case ImageName.Handenoplichaam:
      return "Hands on Body";
    case ImageName.Hoofd4bij5:
      return "Disassociation";
    case ImageName.Img2942:
      return "Meat on Subway";
    case ImageName.Img2943:
      return "Worms in Stumach";
    case ImageName.Indetram:
      return "In the Tram";
    case ImageName.Ingebroken:
      return "Broken Into Women";
    case ImageName.Ingebroken2:
      return "Broken Into Person";
    case ImageName.Kruis1:
      return "Zipper";
    case ImageName.ManAutoLijnen:
      return "Man, Car and Lines";
    case ImageName.Man:
      return "Man";
    case ImageName.Manogen:
      return "Man with Eyes";
    case ImageName.Ogenman:
      return "Eyeman";
    case ImageName.Onemore:
      return "One More";
    case ImageName.Rits:
      return "Zipper";
    case ImageName.Rodeman:
      return "Red Man";
    case ImageName.Tekst:
      return "Text";
    case ImageName.UntitledArtwork94:
      return "Agressor";
    case ImageName.ViezeMan:
      return "Dirty Man";
    case ImageName.Viezevrouw:
      return "Dirty Woman";
    case ImageName.Vrouviezpsd:
      return "Dirty Woman (PSD)";
    case ImageName.Womendoorgaan:
      return "Women Move On";
    case ImageName.Youlikethis:
      return "You Like This";
    default:
      throw new Error(`Unknown image name: ${name}`);
  }
};

// Disassociation
// POV asault
// He touched my leg
const addSerieNumber = (name: string): number | undefined => {
  const feelingFollowingYou: string[] = [
    ImageName.Drankjesdoen,
    ImageName.HandenEnthuis,
    ImageName.Indetram,
  ];

  const firstDate: string[] = [
    ImageName.Cheers,
    ImageName.Onemore,
    ImageName.Tekst,
    ImageName.Youlikethis,
  ];

  const metroIncident: string[] = [
    ImageName.Aftrekkendeman,
    // ImageName.Bijstanders,        // ⚠️ Not in your original enum — see note below
    // ImageName.Boek,               // ⚠️ Not in your original enum — see note below
    ImageName.Kruis1,
    ImageName.Man,
    ImageName.Manogen,
    // "ogen" — ⚠️ Not present in the enum, maybe you meant "ogenman"?
    ImageName.Ogenman,
    ImageName.Rits
  ];

  if (feelingFollowingYou.includes(name)) {
    return 1;
  } else if (firstDate.includes(name)) {
    return 2;
  } else if (metroIncident.includes(name)) {
    return 3;
  }
};
