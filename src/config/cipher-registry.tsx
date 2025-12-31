import { CeasarCipher } from "@/components/ciphers/ceasar";
import MorseCode from "@/components/ciphers/morse";
import AtbashCipher from "@/components/ciphers/atbash";
import VigenereCipher from "@/components/ciphers/vigenere";
import A1Z26Cipher from "@/components/ciphers/a1z26";
import Rot13Cipher from "@/components/ciphers/rot13";
import React from "react";

import { caesarConvert } from "@/lib/ciphers/caesar";
import { encodeMorse, decodeMorse } from "@/lib/ciphers/morse";
import { atbashConvert } from "@/lib/ciphers/atbash";
import { vigenereConvert } from "@/lib/ciphers/vigenere";
import { a1z26Encode, a1z26Decode } from "@/lib/ciphers/a1z26";
import { rot13Convert } from "@/lib/ciphers/rot13";

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
  caesar: {
    slug: "caesar",
    title: "Caesar Cipher",
    description: "Shift alphabets by a set amount to encode messages.",
    component: CeasarCipher,
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
};

export const getAllCiphers = () => Object.values(CIPHER_REGISTRY);

export const getCipherBySlug = (slug: string) => CIPHER_REGISTRY[slug];
