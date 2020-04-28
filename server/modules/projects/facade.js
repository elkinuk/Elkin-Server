import Facade from './../../common/facade.js';
import model from './repository.js';

class ContactsFacade extends Facade {
    constructor() {
      super(model);
    }
  }
  
module.exports = new ContactsFacade();