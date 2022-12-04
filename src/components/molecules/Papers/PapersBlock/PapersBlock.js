import React, { Component } from 'react';

import PaperItem from '../PaperItem/PaperItem';

class PapersBlock extends Component {
  state = { openPaper: '' };

  handleTogglePaper(itemPosition) {
    this.setState({ openPaper: this.state.openPaper === itemPosition ? '' : itemPosition });
  }

  render() {
    return (
      <div className="papers">
        <PaperItem
          type="left"
          openPaper={this.state.openPaper}
          handleTogglePaper={(itemPosition) => this.handleTogglePaper(itemPosition)}
        >
          { this.props.left }
        </PaperItem>
        <PaperItem
          type="right"
          openPaper={this.state.openPaper}
          handleTogglePaper={(itemPosition) => this.handleTogglePaper(itemPosition)}
        >
          { this.props.right }
        </PaperItem>
        <PaperItem
          type="top"
          openPaper={this.state.openPaper}
          handleTogglePaper={(itemPosition) => this.handleTogglePaper(itemPosition)}
        >
          { this.props.top }
        </PaperItem>
        <PaperItem
          type="bottom"
          openPaper={this.state.openPaper}
          handleTogglePaper={(itemPosition) => this.handleTogglePaper(itemPosition)}
        >
          { this.props.bottom }
        </PaperItem>
      </div>
    );
  }
}

export default PapersBlock;
