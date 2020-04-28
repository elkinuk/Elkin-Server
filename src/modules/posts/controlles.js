import Controller from './../../common/controller.js';
import Facade from './facade.js';

class PostsController extends Controller{
  constructor(facade){
    super(facade);
  }

  _changePost(req, res, operations) {
    this.facade
      .findOne({id: req.params.id})
      .exec((err, post) => {
        if (err) this._errorHandling(res, err);
        this.facade
        .updateOne({id: req.params.id}, {
          '$set': operations(post)
        }).exec((err) => {
          if (err) this._errorHandling(res, err);
          this.facade
            .findOne({id: req.params.id})
            .exec((...args) => { this._callback(...args, res) });
          });
      });
  }

  addUpvote(req, res) {
    this._changePost(req, res, post =>
      ({
        upvotes: post.upvotes ? +post.upvotes + 1 : 1
      })
    );
  }

  addComment(req, res) {
    this._changePost(req, res, post => {
        const {text, username} = req.body;
        const comments = post.comments ? [...post.comments, {text, username}] : [{text, username}];
        return { comments };
      }
    );
  }
}

module.exports = new PostsController(Facade);