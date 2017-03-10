import Model from './Model';

export default class ArticleModel extends Model {

  getTitle() {
    return this.get('title');
  }

  getPath() {
    return this.get('path');
  }

  getImage() {
    return this.get('image');
  }

  getText() {
    return this.get('text');
  }

  getVideo() {
    return this.get('video');
  }

  getAuthorImg() {
    return this.get('authorImg');
  }

  getAuthor() {
    return this.get('author');
  }
}
