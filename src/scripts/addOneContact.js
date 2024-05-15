import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  // await fs.appendFile(PATH_DB, JSON.stringify(createFakeContact(), null, 2));  //додавання до файлу, не підходить, записує після дужки масиву

  let data = [];
  try {
    data = JSON.parse(await fs.readFile(PATH_DB));
  } catch (err) {
    console.log(err);
    return;
  }
  data.push(createFakeContact());
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (err) {
    console.log(err);
  }
};

await addOneContact();
