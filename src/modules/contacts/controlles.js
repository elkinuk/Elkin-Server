import Controller from './../../common/controller.js';
import Facade from './facade.js';

class ProjectsController extends Controller{
  constructor(facade){
    super(facade);
  }
}

module.exports = new ProjectsController(Facade);