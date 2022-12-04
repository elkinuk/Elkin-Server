import React, { Component } from 'react';

import { SectionWrapper } from '../../atoms/shared';
import ParalaxBlock from '../../molecules/Paralax';

import { getData } from '../../../assets/utils.js';

class BlogGrid extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const posts = await getData('/api/posts', 'defaultPost');
    this.setState({ posts });
  }

  render() {
    return (
      <SectionWrapper title="Frontend blog">
        <ParalaxBlock data={this.state.posts} />
      </SectionWrapper>
    );
  }
}

export default BlogGrid;
