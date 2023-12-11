import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcrypt";
sqlite3.verbose();

//TODO ----------Need to add a column for a timestamp of when user was created so i can have a history

export default class User {
  constructor(db) {
    this.db = db;
  }

  async openDB() {
    return open({
      filename: `${this.db}`,
      driver: sqlite3.Database,
    });
  }

  async addNewUser(firstName, lastName, email, password, residence) {
    const db = await this.openDB();
    const hashedPassword = bcrypt.hashSync(password, 5);
    const result = await db.run(`
      INSERT INTO users (first_name, last_name, email, password, residence)
      VALUES ('${firstName}', '${lastName}', '${email}', '${hashedPassword}', '${residence}');
      `);
    await db.close();
    return result;
  }

  async getUser(user_id) {
    let db = await this.openDB();
    const result = await db.get(`
      SELECT *
      FROM users
      WHERE user_id = '${user_id}'
    `);
    await db.close();
    return result;
  }

  async login(email, password) {
    let db = await this.openDB();
    const result = await db.get(`
      SELECT *
      FROM users
      WHERE email = '${email}'
    `);
    console.log(result.user_id);
    let authenticated = bcrypt.compareSync(password, result.password);
    if (authenticated) {
      let timeIn = new Date();
      let expiration = new Date(
        timeIn.getFullYear(),
        timeIn.getMonth(),
        timeIn.getDate() + 1,
        timeIn.getHours(),
        timeIn.getMinutes(),
        timeIn.getSeconds()
      );
      const loggedIn = await db.run(`
      INSERT INTO loggedInUsers (user_id, timeIn, expiration)
      VALUES ('${result.user_id}', '${timeIn}', '${expiration}');
      `);
    }
    await db.close();
    if (authenticated) return authenticated;
  }

  async updateUser(user_id, column, newData) {
    let db = await this.openDB();
    const result = await db.run(`
      UPDATE users
      SET ${column} = '${newData}
      WHERE user_id = '${user_id};
    `);
    await db.close();
    return result;
  }

  async deleteUser(user_id) {
    let db = await this.openDB();
    await db.run(`
      DELETE FROM users WHERE user_id = '${user_id}';
    `);
    await db.close();
  }
}
