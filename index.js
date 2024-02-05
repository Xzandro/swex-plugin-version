import fs from 'fs';
import { createHash } from 'crypto';
import { stringify } from 'yaml';

const pluginFilePath = './swex-testplugin.asar';

const stats = fs.statSync(pluginFilePath);
const file = fs.readFileSync(pluginFilePath);

const versionData = {
  version: '1.2.0',
  file: 'swex-testplugin.asar',
  url: 'https://xzandro.fra1.cdn.digitaloceanspaces.com/swex/swex-testplugin.asar',
  sha512: createHash('sha512').update(file).digest('hex'),
  size: stats.size,
  releaseDate: new Date().toISOString(),
};

fs.writeFileSync('./swex-testplugin.yml', stringify(versionData));
