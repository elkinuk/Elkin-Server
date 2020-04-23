import Controller from './../../common/controller.js';
import Facade from './facade.js';

class PostsController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new PostsController(Facade);