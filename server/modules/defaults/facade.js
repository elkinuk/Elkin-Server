import Facade from './../../common/facade.js';
import model from './repository.js';

class DefaultsFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new DefaultsFacade();