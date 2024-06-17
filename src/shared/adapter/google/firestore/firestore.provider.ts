import { Injectable } from '@nestjs/common';
import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { CONFIG } from '../../../config/config';

@Injectable()
export class FirestoreProvider {
  private firestore: Firestore = new Firestore({
    projectId: CONFIG.GOOGLE.PROJECT_ID,
    databaseId: CONFIG.GOOGLE.FIRESTORE.DATABASE_ID,
    credentials: {
      private_key: CONFIG.GOOGLE.FIRESTORE.PRIVATE_KEY,
      client_email: CONFIG.GOOGLE.FIRESTORE.CLIENT_EMAIL,
    },
  });

  private collection: CollectionReference =
    this.firestore.collection('chatbot');

  async get(key: string) {
    return await this.collection.doc(key).get();
  }

  async set(key: string, value: string) {
    return await this.collection.doc(key).set({ value: value });
  }
}
