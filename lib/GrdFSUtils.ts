import { connectToMongo } from './mongo';

export class GridFSUtils {
  static async fileExists(filename: string): Promise<boolean> {
    const { client } = await connectToMongo();
    const count = await client
      .db()
      .collection('images.files')
      .countDocuments({ filename });

    return !!count;
  }
}
