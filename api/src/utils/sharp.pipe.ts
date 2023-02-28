import { Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';
import { multerConfig } from './fileOptions';
import * as fs from 'fs';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File>>
{
  async transform(image: Express.Multer.File): Promise<Express.Multer.File> {
    const filename = image.filename.split('.')[0] + '.webp';

    await sharp(image.path)
      .webp()
      .toFile(path.join(`${multerConfig.dest}`, filename));
    await sharp(image.path)
      .resize(200)
      .webp({ effort: 3 })
      .toFile(path.join(`${multerConfig.dest}/thumbnails`, filename));

    await sharp(image.path)
      .resize(600)
      .webp({ effort: 3 })
      .toFile(path.join(`${multerConfig.dest}/mediums`, filename));
    // await fs.unlink(image.path, () => console.log(`${image.path} unlinked`));
    return image;
  }
}
