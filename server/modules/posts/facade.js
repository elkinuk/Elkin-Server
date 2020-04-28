import Facade from './../../common/facade.js';
import model from './repository.js';

class PostsFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new PostsFacade();