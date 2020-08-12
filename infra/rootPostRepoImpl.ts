import { RootPost } from "../domain/rootPost";

// DB上のテーブル
type PostDataModel = {}

type Connection = {
  save: (input: PostDataModel) => {}
}

export default class RootPostRepoImpl {
  private readonly conn: Connection
  constructor(conn: Connection) {
    this.conn = conn
  }

  public async save(rootPost: RootPost) {
    // DB書き込み
    await this.conn.save(rootPost.post)
    return 'saved!'
  }
};
