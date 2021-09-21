import hexToHsl from 'hex-to-hsl';
import hslToHex from 'hsl-to-hex';

// ================================================================================
// TYPES/CONST
// ================================================================================

type HSL = {
  h: number;
  s: number;
  l: number;
};

// ================================================================================
// EXPORTS
// ================================================================================

export function convertHexToHSL(hex: string): HSL {
  const [h, s, l] = hexToHsl(hex);
  return { h, s, l };
}

export function convertHSLToHex(hsl: HSL): string {
  const { h, s, l } = hsl;
  return hslToHex(h, s, l);
}
