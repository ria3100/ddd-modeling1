import { toHash } from "../id";

class Team {
  public readonly id: string;
  public readonly content: string;

  constructor(content: string) {
    this.id = toHash(content);
    this.content = content;

    if (this.content.length === 0)
      throw new Error("チーム名は最低1文字でお願いします！");
    if (this.content.length > 100)
      throw new Error("チーム名は100文字以内でお願いします！");
  }
}

// team集約
export default class RootTeam {
  public readonly team: Team;

  constructor(content: string) {
    this.team = new Team(content);
  }
}
