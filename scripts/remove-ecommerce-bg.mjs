import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_SRC = 'C:/Users/HP/.cursor/projects/c-Users-HP-Downloads-exoweb-main-1-exoweb-main/assets';
const OUT_DIR = 'src/assets/ecommerce';

const jobs = [
  {
    src: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e5c95fe63923ec7a5ca7ba98e9170bfe_images_Online_Store_Development-55e0ba01-e02e-4d9f-9577-45238041d084.png',
    out: 'ecd-launch-grow.png',
    mode: 'black',
  },
  {
    src: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e5c95fe63923ec7a5ca7ba98e9170bfe_images_Online_Store_Development2__3_-7ae8c2ae-d2fc-4cff-85cc-e519af3f31d4.png',
    out: 'ecd-payment-gateway.png',
    mode: 'white',
  },
  {
    src: 'c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_e5c95fe63923ec7a5ca7ba98e9170bfe_images_Online_Store_Development_1-e430d86c-c583-4505-becf-2fdcc375a30d.png',
    out: 'ecd-shipping-delivery.png',
    mode: 'white',
  },
];

function removeBackground(data, info, mode) {
  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    let alpha = 255;

    if (mode === 'white') {
      const brightness = (r + g + b) / 3;
      const maxChannel = Math.max(r, g, b);
      const minChannel = Math.min(r, g, b);
      const saturation = maxChannel - minChannel;

      if (brightness > 235 && saturation < 30) {
        alpha = 0;
      } else if (brightness > 210 && saturation < 40) {
        alpha = Math.round(255 * ((245 - brightness) / 35));
      } else if (brightness > 190 && saturation < 25) {
        alpha = Math.round(255 * ((225 - brightness) / 35));
      }
    } else {
      const darkness = (r + g + b) / 3;
      if (darkness < 18) {
        alpha = 0;
      } else if (darkness < 45) {
        alpha = Math.round(255 * ((darkness - 18) / 27));
      }
    }

    pixels[i + 3] = Math.min(pixels[i + 3], alpha);
  }

  return pixels;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const job of jobs) {
  const inputPath = path.join(ASSETS_SRC, job.src);
  const outputPath = path.join(OUT_DIR, job.out);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const processed = removeBackground(data, info, job.mode);

  await sharp(processed, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Created ${outputPath} (${info.width}x${info.height})`);
}
