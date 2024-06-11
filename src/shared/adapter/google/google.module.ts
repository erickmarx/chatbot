import { Module } from '@nestjs/common';
import { FirestoreModule } from './firestore/firestore.module';

@Module({ imports: [FirestoreModule], exports: [FirestoreModule] })
export class GoogleModule {}
