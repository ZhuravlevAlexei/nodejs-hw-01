import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  let data = [];
  let idToDelete = [];

  try {
    data = JSON.parse(await fs.readFile(PATH_DB));
  } catch (err) {
    console.log(err);
  }

  idToDelete = data.map((el, idx) => {
    return Math.random() < 0.5 ? idx : null;
  });

  data = data.filter((el, idx) => !idToDelete.includes(idx));

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(err);
  }
};

await thanos();
