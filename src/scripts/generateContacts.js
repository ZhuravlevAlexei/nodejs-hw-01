import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  let data = [];
  try {
    data = JSON.parse(await fs.readFile(PATH_DB));
  } catch (err) {
    console.log(err);
    return;
  }
  for (let i = 0; i < number; i += 1) {
    data.push(createFakeContact());
  }
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(err);
  }
};

await generateContacts(5);
