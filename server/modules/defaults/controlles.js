import Controller from './../../common/controller.js';
import Facade from './facade.js';

class DefaultsController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new DefaultsController(Facade);