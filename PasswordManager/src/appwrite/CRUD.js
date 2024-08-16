import config from "../conf/config";
import { Client, Databases, ID } from "appwrite";

class CRUD {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async create(url, username, password) {
    try {
      const result = await this.databases.createDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        ID.unique(), // documentId
        { url, username, password } //
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPasswords() {
    try {
      const result = await this.databases.listDocuments(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        [] // queries (optional)
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async update($id, { Url: url, Password: password, Username: username }) {
    try {
      const result = await this.databases.updateDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        $id, // documentId
        {
          url,
          username,
          password,
        } // data (optional)
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async removeDocument(id) {
    try {
      const result = await this.databases.deleteDocument(
        config.appwriteDatabaseId, // databaseId
        config.appwriteCollectionId, // collectionId
        id // documentId
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const obj = new CRUD();

export default obj;
