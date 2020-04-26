import Facade from './../../common/facade.js';
import model from './repository.js';

class ProjectsFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new ProjectsFacade();