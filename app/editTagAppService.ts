import RootTagRepoImpl from "../infra/rootTagRepoImpl"
import RootTag from "../domain/rootTag"

export class EditTagAppService {
  private readonly tagRepo: RootTagRepoImpl // 本当はinterfaceにするべき

  constructor(tagRepo: RootTagRepoImpl) {
    this.tagRepo = tagRepo
  }
  public async do(previousContent: string, newContent: string) {
    const existingTag = this.tagRepo.findTagByContent(previousContent)
    const updatedTag = new RootTag(newContent, existingTag.postIds)
    await this.tagRepo.save(updatedTag)
  }
}