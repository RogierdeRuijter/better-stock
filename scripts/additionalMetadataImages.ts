interface ImageMetadata {
  displayName: string;
  // serieNumber: number;
}

export const getImageMetadata = (name: string): ImageMetadata => {
  return {
    displayName: addDisplayName(name)
  }
}

const addDisplayName = (name: string): string => {
    switch (name) {
    case "aftrekkendeman":
      return "Masturbating Man";
    case "auto-ogen-enlijnen":
      return "Car with Eyes and Lines";
    case "auto-ogen":
      return "Car with Eyes";
    case "badkamer":
      return "Bathroom";
    case "boos":
      return "Angry Face";
    case "cheers":
      return "Cheers";
    case "drankjesdoen":
      return "Having Drinks";
    case "engbos-fiets":
      return "Scary Forest with Bicycle";
    case "geest-van-de-harrasor":
      return "Ghost of the Harrasor";
    case "handen-enthuis":
      return "Hands and Home";
    case "handen-huilen":
      return "Hands with Crying";
    case "handenoplichaam":
      return "Hands on Body";
    case "hoofd4bij5":
      return "Head 4 by 5";
    case "img-2942":
      return "Image 2942";
    case "img-2943":
      return "Image 2943";
    case "indetram":
      return "In the Tram";
    case "ingebroken":
      return "Broken Into";
    case "ingebroken2":
      return "Broken Into 2";
    case "kruis1":
      return "Cross 1";
    case "man-auto-lijnen":
      return "Man, Car and Lines";
    case "man":
      return "Man";
    case "manogen":
      return "Man with Eyes";
    case "ogenman":
      return "Eyeman";
    case "onemore":
      return "One More";
    case "rits":
      return "Zipper";
    case "rodeman":
      return "Red Man";
    case "tekst":
      return "Text";
    case "untitled-artwork-94":
      return "Untitled Artwork 94";
    case "vieze-man":
      return "Dirty Man";
    case "viezevrouw":
      return "Dirty Woman";
    case "vrouviezpsd":
      return "Dirty Woman (PSD)";
    case "womendoorgaan":
      return "Women Move On";
    case "youlikethis":
      return "You Like This";
    default:
      throw new Error(`Unknown image name: ${name}`);
  }
}

const addSerieNumber = (name: string): number => {
  const serieOne = ["viezevrouw", "womendoorgaan"];
  const serieTwo = ["aftrekkendeman", "auto-ogen-enlijnen"];

  if (serieOne.includes(name)) {
    return 1;
  } else if (serieTwo.includes(name)) {
    return 2;
  } else {
    throw new Error(`Unknown image name: ${name}`);
  }
}
