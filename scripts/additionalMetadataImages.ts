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
      return "Aftrekkende Man";
    case "auto-ogen-enlijnen":
      return "Auto met Ogen en Lijnen";
    case "auto-ogen":
      return "Auto met Ogen";
    case "badkamer":
      return "Badkamer";
    case "boos":
      return "Boze Gezicht";
    case "cheers":
      return "Proost";
    case "drankjesdoen":
      return "Drankjes Doen";
    case "engbos-fiets":
      return "Eng Bos met Fiets";
    case "geest-van-de-harrasor":
      return "Geest van de Harrasor";
    case "handen-enthuis":
      return "Handen en Thuis";
    case "handen-huilen":
      return "Handen bij Huilen";
    case "handenoplichaam":
      return "Handen op Lichaam";
    case "hoofd4bij5":
      return "Hoofd 4 bij 5";
    case "img-2942":
      return "Afbeelding 2942";
    case "img-2943":
      return "Afbeelding 2943";
    case "indetram":
      return "In de Tram";
    case "ingebroken":
      return "Ingebroken";
    case "ingebroken2":
      return "Ingebroken 2";
    case "kruis1":
      return "Kruis 1";
    case "man-auto-lijnen":
      return "Man, Auto en Lijnen";
    case "man":
      return "Man";
    case "manogen":
      return "Man met Ogen";
    case "ogenman":
      return "Ogenman";
    case "onemore":
      return "Nog Eentje";
    case "rits":
      return "Rits";
    case "rodeman":
      return "Rode Man";
    case "tekst":
      return "Tekst";
    case "untitled-artwork-94":
      return "Naamloos Kunstwerk 94";
    case "vieze-man":
      return "Vieze Man";
    case "viezevrouw":
      return "Vieze Vrouw";
    case "vrouviezpsd":
      return "Vieze Vrouw (PSD)";
    case "womendoorgaan":
      return "Vrouwen Gaan Door";
    case "youlikethis":
      return "Jij Vindt Dit Leuk";
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
