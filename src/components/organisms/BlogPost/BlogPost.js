import React, { Component } from 'react';
import { withRouter } from 'next/router';

import { SectionWrapper } from '../../atoms/shared';
import ArticleWithPic from '../../molecules/ArticleWithPic';

import { getData } from '../../../assets/utils.js';

import style from './style.module.scss';

class BlogPost extends Component {
  state = { post: {} };

  async componentDidMount() {
    const post = await getData(`/api/posts/${this.props.router.query.id}`, 'defaultPost');
    this.setState({ post });
  }

  render() {
    const { post } = this.state;
    return (
      <SectionWrapper title={post.title} className={style.section}>
        <ArticleWithPic text={post.text} pic={post.pic} />
      </SectionWrapper>
    );
  }
}

export default withRouter(BlogPost);
