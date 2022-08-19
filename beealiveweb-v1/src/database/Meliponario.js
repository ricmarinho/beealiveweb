import { resolve } from 'path';

function loadSeed() {
  const file = resolve(process.cwd(), 'src', 'database', 'seeders.json');

  const content = JSON.parse(readFileSync(file));

  for (const meliponario of content.meliponarios) {
    create(meliponario);
  }
}

function readAll() {
  return meliponarios;
}

function create(meliponario) {
  const id = new Date().getTime();

  const newMeliponario = {...meliponario, id};

  meliponarios.push(newMeliponario);

  return newMeliponario;
}

function update(meliponario, id) {
  const index = meliponarios.findIndex((meliponario) => meliponario.id === id);

  if (index >= 0) {
    const newMeliponario = { id, ...meliponario };

    meliponarios[index] = newMeliponario;

    return newMeliponario;
  } else {
    return false;
  }
}

function destroy(id) {
  const index = meliponarios.findIndex((meliponario) => meliponario.id === id);

  if (index >= 0) {
    meliponarios.splice(index, 1);

    return true;
  } else {
    return false;
  }
}

export default { loadSeed, readAll, create, update, destroy };