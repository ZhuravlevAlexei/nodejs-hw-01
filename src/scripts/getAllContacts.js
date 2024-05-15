import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  let data = [];
  try {
    data = JSON.parse(await fs.readFile(PATH_DB));
  } catch (err) {
    console.log(err);
  }
  return data;
};

console.log(await getAllContacts());
