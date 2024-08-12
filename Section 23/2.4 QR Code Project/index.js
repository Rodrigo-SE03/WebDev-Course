/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import fs from 'fs';
import { generate } from 'lean-qr';
import { toPngBuffer } from 'lean-qr/extras/node_export';

const answer = await input({message: 'Enter a URL to turn into a QR code:', name: 'url'});
const code = generate(answer);

const pngBuffer = toPngBuffer(code, {   
    on: [0, 0, 0, 255],
    off: [255, 255, 255, 255],
    padX: 4,
    padY: 4,
    scale: 1,
  });

fs.writeFile('qr.png', pngBuffer, (err) => { if (err) throw err; console.log('The file has been saved!'); });
fs.writeFile('url.txt',answer, (err) => { if (err) throw err; console.log('The file has been saved!'); });