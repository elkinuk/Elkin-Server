import React from 'react';

import BlogPost from './../../components/organisms/BlogPost';

export async function getServerSideProps(context) {
  return {
    props: {
      router: {
        query: context.query
      }
    },
  }
}

export default function BlogPostPage() {
  return (
    <BlogPost />
  )
}
