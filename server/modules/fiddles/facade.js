import Facade from './../../common/facade.js';
import model from './repository.js';

class FiddlesFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new FiddlesFacade();