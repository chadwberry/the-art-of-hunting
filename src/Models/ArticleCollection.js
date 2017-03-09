import Collection from './Collection';
import ArticleModel from './ArticleModel';

export default class ArticleCollection extends Collection {

  static ModelType = ArticleModel

  findByPathName(path) {
    return this.find(item => item.getPath() === path);
  }
}
