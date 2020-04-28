import Controller from './../../common/controller.js';
import Facade from './facade.js';

class ContactsController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new ContactsController(Facade);