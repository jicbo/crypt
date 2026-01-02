import { CaesarCipher } from "@/components/ciphers/caesar";
import MorseCode from "@/components/ciphers/morse";
import AtbashCipher from "@/components/ciphers/atbash";
import VigenereCipher from "@/components/ciphers/vigenere";
import A1Z26Cipher from "@/components/ciphers/a1z26";
import Rot13Cipher from "@/components/ciphers/rot13";
import RailFenceCipher from "@/components/ciphers/railfence";
import AffineCipher from "@/components/ciphers/affine";
import BeaufortCipher from "@/components/ciphers/beaufort";
import BaconianCipher from "@/components/ciphers/baconian";
import BinaryCipher from "@/components/ciphers/binary";
import Base64Cipher from "@/components/ciphers/base64";
import HexCipher from "@/components/ciphers/hex";
import DecimalCipher from "@/components/ciphers/decimal";
import ColumnarCipher from "@/components/ciphers/columnar";
import PolybiusCipher from "@/components/ciphers/polybius";
import SubstitutionCipher from "@/components/ciphers/substitution";
import XORCipher from "@/components/ciphers/xor";
import URLCipher from "@/components/ciphers/url";
import ReverseCipher from "@/components/ciphers/reverse";
import LeetCipher from "@/components/ciphers/leetspeak";
import ROT47Cipher from "@/components/ciphers/rot47";
import PlayfairCipher from "@/components/ciphers/playfair";
import GronsfeldCipher from "@/components/ciphers/gronsfeld";
import BifidCipher from "@/components/ciphers/bifid";
import AutokeyCipher from "@/components/ciphers/autokey";
import ScytaleCipher from "@/components/ciphers/scytale";
import PortaCipher from "@/components/ciphers/porta";
import FourSquareCipher from "@/components/ciphers/foursquare";
import NihilistCipher from "@/components/ciphers/nihilist";
import TrifidCipher from "@/components/ciphers/trifid";
import TapCodeCipher from "@/components/ciphers/tapcode";
import HillCipher from "@/components/ciphers/hill";
import RunningKeyCipher from "@/components/ciphers/runningkey";
import ROT5Cipher from "@/components/ciphers/rot5";
import ROT18Cipher from "@/components/ciphers/rot18";
import ADFGVXCipher from "@/components/ciphers/adfgvx";
import KeywordCipher from "@/components/ciphers/keyword";
import Base32Cipher from "@/components/ciphers/base32";
import OTPCipher from "@/components/ciphers/otp";
import StraddlingCipher from "@/components/ciphers/straddling";
import ROT1Cipher from "@/components/ciphers/rot1";
import ReverseWords from "@/components/ciphers/reverse_words";
import BaudotCipher from "@/components/ciphers/baudot";
import SeededCaesar from "@/components/ciphers/seeded_caesar";
import NATOCipher from "@/components/ciphers/nato";
import PigLatinCipher from "@/components/ciphers/piglatin";
import React from "react";

import { caesarConvert } from "@/lib/ciphers/caesar";
import { encodeMorse, decodeMorse } from "@/lib/ciphers/morse";
import { atbashConvert } from "@/lib/ciphers/atbash";
import { vigenereConvert } from "@/lib/ciphers/vigenere";
import { a1z26Encode, a1z26Decode } from "@/lib/ciphers/a1z26";
import { rot13Convert } from "@/lib/ciphers/rot13";
import { railFenceEncode, railFenceDecode } from "@/lib/ciphers/railfence";
import { affineConvert } from "@/lib/ciphers/affine";
import { beaufortConvert } from "@/lib/ciphers/beaufort";
import { baconianEncode, baconianDecode } from "@/lib/ciphers/baconian";
import { binaryEncode, binaryDecode } from "@/lib/ciphers/binary";
import { base64Encode, base64Decode } from "@/lib/ciphers/base64";
import { hexEncode, hexDecode } from "@/lib/ciphers/hex";
import { decimalEncode, decimalDecode } from "@/lib/ciphers/decimal";
import { columnarEncode, columnarDecode } from "@/lib/ciphers/columnar";
import { polybiusEncode, polybiusDecode } from "@/lib/ciphers/polybius";
import { substitutionConvert, generateKeyedAlphabet } from "@/lib/ciphers/substitution";
import { xorConvert } from "@/lib/ciphers/xor";
import { urlEncode, urlDecode } from "@/lib/ciphers/url";
import { reverseText } from "@/lib/ciphers/reverse";
import { leetEncode, leetDecode } from "@/lib/ciphers/leetspeak";
import { rot47Convert } from "@/lib/ciphers/rot47";
import { playfairEncode, playfairDecode } from "@/lib/ciphers/playfair";
import { gronsfeldConvert } from "@/lib/ciphers/gronsfeld";
import { bifidEncode, bifidDecode } from "@/lib/ciphers/bifid";
import { autokeyConvert } from "@/lib/ciphers/autokey";
import { scytaleConvert } from "@/lib/ciphers/scytale";
import { portaConvert } from "@/lib/ciphers/porta";
import { fourSquareEncode, fourSquareDecode } from "@/lib/ciphers/foursquare";
import { nihilistEncode, nihilistDecode } from "@/lib/ciphers/nihilist";
import { trifidEncode, trifidDecode } from "@/lib/ciphers/trifid";
import { tapCodeEncode, tapCodeDecode } from "@/lib/ciphers/tapcode";
import { hill2x2Encode, hill2x2Decode } from "@/lib/ciphers/hill";
import { runningKeyConvert } from "@/lib/ciphers/runningkey";
import { rot5Convert, rot18Convert } from "@/lib/ciphers/rot_variants";
import { adfgvxEncode, adfgvxDecode } from "@/lib/ciphers/adfgvx";
import { keywordEncode, keywordDecode } from "@/lib/ciphers/keyword";
import { base32Encode, base32Decode } from "@/lib/ciphers/base32";
import { otpConvert } from "@/lib/ciphers/otp";
import { straddlingCheckerboardEncode, straddlingCheckerboardDecode } from "@/lib/ciphers/straddling";
import { rot1Convert, reverseWords, caesarRandom } from "@/lib/ciphers/utils";
import { baudotEncode, baudotDecode } from "@/lib/ciphers/baudot";
import { natoEncode, natoDecode, pigLatinEncode, pigLatinDecode } from "@/lib/ciphers/phonetic";

export interface CipherParam {
  name: string;
  label: string;
  type: 'number' | 'text';
  defaultValue: any;
}

export interface CipherTool {
  slug: string;
  title: string;
  description: string;
  component: React.ComponentType<any>;
  logic: {
    encode: (text: string, params: any) => string;
    decode: (text: string, params: any) => string;
  };
  params?: CipherParam[];
}

export const CIPHER_REGISTRY: Record<string, CipherTool> = {
  plaintext: {
    slug: "plaintext",
    title: "Plaintext",
    description: "No encryption. Just raw text.",
    component: () => null,
    logic: {
      encode: (text) => text,
      decode: (text) => text,
    }
  },
  caesar: {
    slug: "caesar",
    title: "Caesar Cipher",
    description: "Shift alphabets by a set amount to encode messages.",
    component: CaesarCipher,
    logic: {
      encode: (text, params) => caesarConvert(text, params.shift || 0),
      decode: (text, params) => caesarConvert(text, -(params.shift || 0)),
    },
    params: [
      { name: 'shift', label: 'Shift', type: 'number', defaultValue: 3 }
    ]
  },
  morse: {
    slug: "morse",
    title: "Morse Code",
    description: "Convert text to dots and dashes.",
    component: MorseCode,
    logic: {
      encode: (text) => encodeMorse(text),
      decode: (text) => decodeMorse(text),
    }
  },
  atbash: {
    slug: "atbash",
    title: "Atbash Cipher",
    description: "A substitution cipher where the alphabet is reversed.",
    component: AtbashCipher,
    logic: {
      encode: (text) => atbashConvert(text),
      decode: (text) => atbashConvert(text),
    }
  },
  vigenere: {
    slug: "vigenere",
    title: "Vigenère Cipher",
    description: "A method of encrypting alphabetic text by using a series of interwoven Caesar ciphers.",
    component: VigenereCipher,
    logic: {
      encode: (text, params) => vigenereConvert(text, params.key || "", true),
      decode: (text, params) => vigenereConvert(text, params.key || "", false),
    },
    params: [
      { name: 'key', label: 'Secret Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  a1z26: {
    slug: "a1z26",
    title: "A1Z26 Cipher",
    description: "A simple direct substitution cipher where each letter is replaced by its number in the alphabet.",
    component: A1Z26Cipher,
    logic: {
      encode: (text) => a1z26Encode(text),
      decode: (text) => a1z26Decode(text),
    }
  },
  rot13: {
    slug: "rot13",
    title: "ROT13",
    description: "A simple substitution cipher that replaces a letter with the 13th letter after it in the alphabet.",
    component: Rot13Cipher,
    logic: {
      encode: (text) => rot13Convert(text),
      decode: (text) => rot13Convert(text),
    }
  },
  railfence: {
    slug: "railfence",
    title: "Rail Fence Cipher",
    description: "A transposition cipher that writes a message in a zigzag pattern across multiple rails.",
    component: RailFenceCipher,
    logic: {
      encode: (text, params) => railFenceEncode(text, params.rails || 3),
      decode: (text, params) => railFenceDecode(text, params.rails || 3),
    },
    params: [
      { name: 'rails', label: 'Rails', type: 'number', defaultValue: 3 }
    ]
  },
  affine: {
    slug: "affine",
    title: "Affine Cipher",
    description: "A monoalphabetic substitution cipher where each letter is mapped to its numeric equivalent, encrypted using a simple mathematical function.",
    component: AffineCipher,
    logic: {
      encode: (text, params) => affineConvert(text, params.a || 5, params.b || 8, true),
      decode: (text, params) => affineConvert(text, params.a || 5, params.b || 8, false),
    },
    params: [
      { name: 'a', label: 'A (Multiplier)', type: 'number', defaultValue: 5 },
      { name: 'b', label: 'B (Shift)', type: 'number', defaultValue: 8 }
    ]
  },
  beaufort: {
    slug: "beaufort",
    title: "Beaufort Cipher",
    description: "A substitution cipher similar to Vigenère, but using a slightly different mechanism that makes it its own inverse.",
    component: BeaufortCipher,
    logic: {
      encode: (text, params) => beaufortConvert(text, params.key || "KEY"),
      decode: (text, params) => beaufortConvert(text, params.key || "KEY"),
    },
    params: [
      { name: 'key', label: 'Secret Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  baconian: {
    slug: "baconian",
    title: "Baconian Cipher",
    description: "A method of steganography where each letter is replaced by a sequence of 5 characters, usually 'a' or 'b'.",
    component: BaconianCipher,
    logic: {
      encode: (text) => baconianEncode(text),
      decode: (text) => baconianDecode(text),
    }
  },
  binary: {
    slug: "binary",
    title: "Binary",
    description: "Convert text to its 8-bit binary representation.",
    component: BinaryCipher,
    logic: {
      encode: (text) => binaryEncode(text),
      decode: (text) => binaryDecode(text),
    }
  },
  base64: {
    slug: "base64",
    title: "Base64",
    description: "Standard Base64 encoding and decoding.",
    component: Base64Cipher,
    logic: {
      encode: (text) => base64Encode(text),
      decode: (text) => base64Decode(text),
    }
  },
  hex: {
    slug: "hex",
    title: "Hexadecimal",
    description: "Convert text to its hexadecimal representation.",
    component: HexCipher,
    logic: {
      encode: (text) => hexEncode(text),
      decode: (text) => hexDecode(text),
    }
  },
  decimal: {
    slug: "decimal",
    title: "Decimal",
    description: "Convert text to its decimal (ASCII) representation.",
    component: DecimalCipher,
    logic: {
      encode: (text) => decimalEncode(text),
      decode: (text) => decimalDecode(text),
    }
  },
  columnar: {
    slug: "columnar",
    title: "Columnar Transposition",
    description: "A transposition cipher where the message is written in rows and read in columns defined by a keyword.",
    component: ColumnarCipher,
    logic: {
      encode: (text, params) => columnarEncode(text, params.key || "KEY"),
      decode: (text, params) => columnarDecode(text, params.key || "KEY"),
    },
    params: [
      { name: 'key', label: 'Keyword', type: 'text', defaultValue: 'KEY' }
    ]
  },
  polybius: {
    slug: "polybius",
    title: "Polybius Square",
    description: "A substitution cipher that represents each letter by its coordinates in a 5x5 grid.",
    component: PolybiusCipher,
    logic: {
      encode: (text) => polybiusEncode(text),
      decode: (text) => polybiusDecode(text),
    }
  },
  substitution: {
    slug: "substitution",
    title: "Simple Substitution",
    description: "A monoalphabetic substitution cipher using a keyed alphabet.",
    component: SubstitutionCipher,
    logic: {
      encode: (text, params) => substitutionConvert(text, generateKeyedAlphabet(params.key || "KEYWORD"), true),
      decode: (text, params) => substitutionConvert(text, generateKeyedAlphabet(params.key || "KEYWORD"), false),
    },
    params: [
      { name: 'key', label: 'Keyword', type: 'text', defaultValue: 'KEYWORD' }
    ]
  },
  xor: {
    slug: "xor",
    title: "XOR Cipher",
    description: "A simple bitwise XOR operation between each character and a repeating key.",
    component: XORCipher,
    logic: {
      encode: (text, params) => xorConvert(text, params.key || "KEY"),
      decode: (text, params) => xorConvert(text, params.key || "KEY"),
    },
    params: [
      { name: 'key', label: 'Secret Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  url: {
    slug: "url",
    title: "URL Encoding",
    description: "Standard percent-encoding for URI components.",
    component: URLCipher,
    logic: {
      encode: (text) => urlEncode(text),
      decode: (text) => urlDecode(text),
    }
  },
  reverse: {
    slug: "reverse",
    title: "Reverse Text",
    description: "Flips the entire message backwards.",
    component: ReverseCipher,
    logic: {
      encode: (text) => reverseText(text),
      decode: (text) => reverseText(text),
    }
  },
  leetspeak: {
    slug: "leetspeak",
    title: "Leetspeak",
    description: "Converts text to stylized 'l33tsp34k' using numbers.",
    component: LeetCipher,
    logic: {
      encode: (text) => leetEncode(text),
      decode: (text) => leetDecode(text),
    }
  },
  rot47: {
    slug: "rot47",
    title: "ROT47",
    description: "Shifts all visible ASCII characters by 47 to scramble text.",
    component: ROT47Cipher,
    logic: {
      encode: (text) => rot47Convert(text),
      decode: (text) => rot47Convert(text),
    }
  },
  playfair: {
    slug: "playfair",
    title: "Playfair Cipher",
    description: "The first literal digram substitution cipher, using a 5x5 matrix of characters.",
    component: PlayfairCipher,
    logic: {
      encode: (text, params) => playfairEncode(text, params.key || "KEYWORD"),
      decode: (text, params) => playfairDecode(text, params.key || "KEYWORD"),
    },
    params: [
      { name: 'key', label: 'Secret Key', type: 'text', defaultValue: 'KEYWORD' }
    ]
  },
  gronsfeld: {
    slug: "gronsfeld",
    title: "Gronsfeld Cipher",
    description: "A variation of the Vigenère cipher that uses digits instead of letters for the key.",
    component: GronsfeldCipher,
    logic: {
      encode: (text, params) => gronsfeldConvert(text, params.key || "1234", true),
      decode: (text, params) => gronsfeldConvert(text, params.key || "1234", false),
    },
    params: [
      { name: 'key', label: 'Numeric Key', type: 'text', defaultValue: '1234' }
    ]
  },
  bifid: {
    slug: "bifid",
    title: "Bifid Cipher",
    description: "A cipher that combines the Polybius square with transposition to achieve fractionating.",
    component: BifidCipher,
    logic: {
      encode: (text, params) => bifidEncode(text, params.period || 5),
      decode: (text, params) => bifidDecode(text, params.period || 5),
    },
    params: [
      { name: 'period', label: 'Period', type: 'number', defaultValue: 5 }
    ]
  },
  autokey: {
    slug: "autokey",
    title: "Autokey Cipher",
    description: "A Vigenère-style cipher that uses the message itself as part of the key.",
    component: AutokeyCipher,
    logic: {
      encode: (text, params) => autokeyConvert(text, params.key || "KEY", true),
      decode: (text, params) => autokeyConvert(text, params.key || "KEY", false),
    },
    params: [
      { name: 'key', label: 'Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  scytale: {
    slug: "scytale",
    title: "Scytale",
    description: "An ancient Greek transposition cipher using a rod with a fixed diameter.",
    component: ScytaleCipher,
    logic: {
      encode: (text, params) => scytaleConvert(text, params.diameter || 4, true),
      decode: (text, params) => scytaleConvert(text, params.diameter || 4, false),
    },
    params: [
      { name: 'diameter', label: 'Diameter', type: 'number', defaultValue: 4 }
    ]
  },
  porta: {
    slug: "porta",
    title: "Porta Cipher",
    description: "A polyalphabetic substitution cipher that is its own inverse.",
    component: PortaCipher,
    logic: {
      encode: (text, params) => portaConvert(text, params.key || "KEY"),
      decode: (text, params) => portaConvert(text, params.key || "KEY"),
    },
    params: [
      { name: 'key', label: 'Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  foursquare: {
    slug: "foursquare",
    title: "Four-Square Cipher",
    description: "A polyalphabetic substitution cipher that uses four 5x5 matrices to encrypt digrams.",
    component: FourSquareCipher,
    logic: {
      encode: (text, params) => fourSquareEncode(text, params.key1 || "FIRST", params.key2 || "SECOND"),
      decode: (text, params) => fourSquareDecode(text, params.key1 || "FIRST", params.key2 || "SECOND"),
    },
    params: [
      { name: 'key1', label: 'Key 1', type: 'text', defaultValue: 'FIRST' },
      { name: 'key2', label: 'Key 2', type: 'text', defaultValue: 'SECOND' }
    ]
  },
  nihilist: {
    slug: "nihilist",
    title: "Nihilist Cipher",
    description: "A more complex variation based on the Polybius square and an additive keyphrase.",
    component: NihilistCipher,
    logic: {
      encode: (text, params) => nihilistEncode(text, params.keyword || "KEYWORD", params.key || "NUMBER"),
      decode: (text, params) => nihilistDecode(text, params.keyword || "KEYWORD", params.key || "NUMBER"),
    },
    params: [
      { name: 'keyword', label: 'Matrix Keyword', type: 'text', defaultValue: 'KEYWORD' },
      { name: 'key', label: 'Keyphrase', type: 'text', defaultValue: 'NUMBER' }
    ]
  },
  trifid: {
    slug: "trifid",
    title: "Trifid Cipher",
    description: "A 3D expansion of the Bifid cipher using a 3x3x3 cube to fractionate characters.",
    component: TrifidCipher,
    logic: {
      encode: (text, params) => trifidEncode(text, params.period || 5),
      decode: (text, params) => trifidDecode(text, params.period || 5),
    },
    params: [
      { name: 'period', label: 'Period', type: 'number', defaultValue: 5 }
    ]
  },
  tapcode: {
    slug: "tapcode",
    title: "Tap Code",
    description: "Used by prisoners to communicate by tapping on bars or walls.",
    component: TapCodeCipher,
    logic: {
      encode: (text) => tapCodeEncode(text),
      decode: (text) => tapCodeDecode(text),
    }
  },
  hill: {
    slug: "hill",
    title: "Hill Cipher (2x2)",
    description: "A polyalphabetic substitution cipher based on linear algebra (2x2 matrix).",
    component: HillCipher,
    logic: {
      encode: (text, params) => hill2x2Encode(text, params.a || 3, params.b || 3, params.c || 2, params.d || 5),
      decode: (text, params) => hill2x2Decode(text, params.a || 3, params.b || 3, params.c || 2, params.d || 5),
    },
    params: [
      { name: 'a', label: 'A', type: 'number', defaultValue: 3 },
      { name: 'b', label: 'B', type: 'number', defaultValue: 3 },
      { name: 'c', label: 'C', type: 'number', defaultValue: 2 },
      { name: 'd', label: 'D', type: 'number', defaultValue: 5 }
    ]
  },
  runningkey: {
    slug: "runningkey",
    title: "Running Key Cipher",
    description: "A polyalphabetic substitution cipher that uses a long passage of text as its key.",
    component: RunningKeyCipher,
    logic: {
      encode: (text, params) => runningKeyConvert(text, params.key || "", true),
      decode: (text, params) => runningKeyConvert(text, params.key || "", false),
    },
    params: [
      { name: 'key', label: 'Running Key', type: 'text', defaultValue: 'THEQUICKBROWNFOXJUMPSOVER' }
    ]
  },
  rot5: {
    slug: "rot5",
    title: "ROT5",
    description: "A simple rotation cipher for numbers (0-9).",
    component: ROT5Cipher,
    logic: {
      encode: (text) => rot5Convert(text),
      decode: (text) => rot5Convert(text),
    }
  },
  rot18: {
    slug: "rot18",
    title: "ROT18",
    description: "Combines ROT13 for letters and ROT5 for numbers.",
    component: ROT18Cipher,
    logic: {
      encode: (text) => rot18Convert(text),
      decode: (text) => rot18Convert(text),
    }
  },
  adfgvx: {
    slug: "adfgvx",
    title: "ADFGVX Cipher",
    description: "A World War I cipher that combines a Polybius square fractionation with columnar transposition.",
    component: ADFGVXCipher,
    logic: {
      encode: (text, params) => adfgvxEncode(text, params.matrixKey || "PHRASE", params.transKey || "KEY"),
      decode: (text, params) => adfgvxDecode(text, params.matrixKey || "PHRASE", params.transKey || "KEY"),
    },
    params: [
      { name: 'matrixKey', label: 'Matrix Key', type: 'text', defaultValue: 'PHRASE' },
      { name: 'transKey', label: 'Transposition Key', type: 'text', defaultValue: 'KEY' }
    ]
  },
  keyword_sub: {
    slug: "keyword_sub",
    title: "Keyword Cipher",
    description: "A substitution cipher that uses a keyword to reorder the alphabet.",
    component: KeywordCipher,
    logic: {
      encode: (text, params) => keywordEncode(text, params.keyword || "KEYWORD"),
      decode: (text, params) => keywordDecode(text, params.keyword || "KEYWORD"),
    },
    params: [
      { name: 'keyword', label: 'Keyword', type: 'text', defaultValue: 'KEYWORD' }
    ]
  },
  base32: {
    slug: "base32",
    title: "Base32",
    description: "Standard Base32 encoding and decoding.",
    component: Base32Cipher,
    logic: {
      encode: (text) => base32Encode(text),
      decode: (text) => base32Decode(text),
    }
  },
  otp: {
    slug: "otp",
    title: "One-Time Pad",
    description: "Mathematically unbreakable cipher if the key is truly random and as long as the message.",
    component: OTPCipher,
    logic: {
      encode: (text, params) => otpConvert(text, params.key || "SECRETKEY", true),
      decode: (text, params) => otpConvert(text, params.key || "SECRETKEY", false),
    },
    params: [
      { name: 'key', label: 'Secret Key', type: 'text', defaultValue: 'SECRETKEY' }
    ]
  },
  straddling: {
    slug: "straddling",
    title: "Straddling Checkerboard",
    description: "A substitution cipher that converts characters into digits with varying lengths.",
    component: StraddlingCipher,
    logic: {
      encode: (text, params) => straddlingCheckerboardEncode(text, params.keys || "ETONIRASBCDFGHKLMPQUVWXYZ./", params.row1 || 2, params.row2 || 6),
      decode: (text, params) => straddlingCheckerboardDecode(text, params.keys || "ETONIRASBCDFGHKLMPQUVWXYZ./", params.row1 || 2, params.row2 || 6),
    },
    params: [
      { name: 'keys', label: 'Keyboard Layout', type: 'text', defaultValue: 'ETONIRASBCDFGHKLMPQUVWXYZ./' },
      { name: 'row1', label: 'Row 1', type: 'number', defaultValue: 2 },
      { name: 'row2', label: 'Row 2', type: 'number', defaultValue: 6 }
    ]
  },
  rot1: {
    slug: "rot1",
    title: "ROT1",
    description: "A simple rotation cipher that shifts letters by 1 (Caesar shift with offset 1).",
    component: ROT1Cipher,
    logic: {
      encode: (text) => rot1Convert(text),
      decode: (text) => rot1Convert(text),
    }
  },
  reverse_words: {
    slug: "reverse_words",
    title: "Reverse Words",
    description: "Flipping each word in the text while keeping word order.",
    component: ReverseWords,
    logic: {
      encode: (text) => reverseWords(text),
      decode: (text) => reverseWords(text),
    }
  },
  baudot: {
    slug: "baudot",
    title: "Baudot Code",
    description: "Historical 5-bit character code telegraph encryption.",
    component: BaudotCipher,
    logic: {
      encode: (text) => baudotEncode(text),
      decode: (text) => baudotDecode(text),
    }
  },
  seeded_caesar: {
    slug: "seeded_caesar",
    title: "Seeded Caesar",
    description: "A Caesar shift where the offset is derived from a text passkey.",
    component: SeededCaesar,
    logic: {
      encode: (text, params) => caesarRandom(text, params.seed || "SEED"),
      decode: (text, params) => caesarRandom(text, params.seed || "SEED"),
    },
    params: [
      { name: 'seed', label: 'Password', type: 'text', defaultValue: 'SEED' }
    ]
  },
  nato: {
    slug: "nato",
    title: "NATO Phonetic",
    description: "Converts text to NATO phonetic alphabet (Alpha, Bravo, etc.).",
    component: NATOCipher,
    logic: {
      encode: (text) => natoEncode(text),
      decode: (text) => natoDecode(text),
    }
  },
  piglatin: {
    slug: "piglatin",
    title: "Pig Latin",
    description: "Simple language game transformation.",
    component: PigLatinCipher,
    logic: {
      encode: (text) => pigLatinEncode(text),
      decode: (text) => pigLatinDecode(text),
    }
  },
};

export const getAllCiphers = () => Object.values(CIPHER_REGISTRY);

export const getSortedCiphers = (sortBy: 'title-asc' | 'title-desc' | 'added-oldest' | 'added-newest') => {
  const ciphers = Object.values(CIPHER_REGISTRY);

  switch (sortBy) {
    case 'title-asc':
      return [...ciphers].sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return [...ciphers].sort((a, b) => b.title.localeCompare(a.title));
    case 'added-newest':
      return [...ciphers].reverse();
    case 'added-oldest':
      return ciphers;
    default:
      return [...ciphers].sort((a, b) => a.title.localeCompare(b.title));
  }
};

export const getCipherBySlug = (slug: string) => CIPHER_REGISTRY[slug];
