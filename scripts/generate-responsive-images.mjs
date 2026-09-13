import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/img');
const WIDTHS = [640, 960, 1280];
const SKIP = new Set(['casa-horizonte-alt.webp']);

const run = async () => {
  const files = (await readdir(DIR)).filter(
    (f) => f.endsWith('.webp') && !/-\d+\.webp$/.test(f) && !SKIP.has(f),
  );

  for (const file of files) {
    const base = file.replace(/\.webp$/, '');
    const input = path.join(DIR, file);
    const meta = await sharp(input).metadata();

    for (const width of WIDTHS) {
      if (!meta.width || width >= meta.width) continue;
      const output = path.join(DIR, `${base}-${width}.webp`);
      await sharp(input).resize({ width }).webp({ quality: 78 }).toFile(output);
      console.log(`generated ${base}-${width}.webp`);
    }
  }
};

run();
