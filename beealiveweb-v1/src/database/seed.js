import { resolve } from 'path';
import { readFileSync} from 'fs';
import Meliponario from 'Meliponaroio.js';

async function up() {
  const file = resolve(process.cwd(), "src", "database", "seeders.json");

  const content = JSON.parse(readFileSync(file));

  for (const meliponario of content.meliponarios) {
    await Meliponario.create(meliponario);
  }
}

export default { up };