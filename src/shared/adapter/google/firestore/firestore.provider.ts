import { Injectable } from '@nestjs/common';
import { CollectionReference, Firestore } from '@google-cloud/firestore';

@Injectable()
export class FirestoreProvider {
  private firestore: Firestore = new Firestore({
    credentials: {},
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
