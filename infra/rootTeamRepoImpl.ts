import RootTeam from "../domain/rootTeam";

// DB上のテーブル
type TeamDataModel = {};

type Connection = {
  save: (input: TeamDataModel) => {};
  findByPost: (input: any) => {};
};

export default class RootTeamRepoImpl {
  private readonly conn: Connection;
  constructor(conn: Connection) {
    this.conn = conn;
  }

  public async save(rootTeam: RootTeam) {
    // DB書き込み
    await this.conn.save(rootTeam.team);
    return "saved!";
  }
}
