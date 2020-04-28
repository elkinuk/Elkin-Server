import Controller from './../../common/controller.js';
import Facade from './facade.js';

class FiddlesController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new FiddlesController(Facade);