// import { Injectable } from '@nestjs/common';
// import {
//   CollectionReference,
//   FieldValue,
//   Firestore,
// } from '@google-cloud/firestore';
// import { CONFIG } from '../../../config/config';

// @Injectable()
// export class FirestoreProvider {
//   private firestore: Firestore = new Firestore({
//     projectId: CONFIG.GOOGLE.PROJECT_ID,
//     databaseId: CONFIG.GOOGLE.FIRESTORE.DATABASE_ID,
//     credentials: {
//       private_key: CONFIG.GOOGLE.FIRESTORE.PRIVATE_KEY,
//       client_email: CONFIG.GOOGLE.FIRESTORE.CLIENT_EMAIL,
//     },
//   });

//   private collection: CollectionReference =
//     this.firestore.collection('chatbot');

//   async get(id: string) {
//     return await this.collection
//       .doc(id)
//       .get()
//       .then((doc) => doc.data());
//   }

//   async set(id: string, value: any) {
//     return await this.collection.doc(id).set(value);
//   }

//   async updateArray(id: string, key: string, value: any) {
//     return await this.collection
//       .doc(id)
//       .update({ [key]: FieldValue.arrayUnion(value) });
//   }

//   async delete(id: string) {
//     return await this.collection.doc(id).delete();
//   }
// }
