import groq from "groq";

const POST_FIELDS = groq`
  _id,
  title,
  excerpt,
  slug,
  publishedAt,
  readTime,
  image,
  author->{
    name
  },
  category[]->{
    name,
    description
  }
`;

export const POSTS_QUERY = groq`
  *[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    ${POST_FIELDS}
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[
    _type == "post"
    && defined(slug.current)
    && $categoryId in category[]._ref
  ]|order(publishedAt desc){
    ${POST_FIELDS}
  }
`;

export const POST_QUERY = groq`
  *[
    _type == "post"
    && slug.current == $slug
  ][0]{
    ${POST_FIELDS},
    content
  }
`;

export const COMPACT_POST_QUERY = groq`
  *[
    _type == "compactPost"] {
      posts[]->{
        ${POST_FIELDS}
      }
    }`;

export const RECOMMEND_POST_QUERY = groq`
  *[
    _type == "recommendPost"] {
      posts[]->{
        ${POST_FIELDS}
      }
    }`;

export const CAROUSEL_QUERY = groq` 
    *[
    _type == "carousel"]{
        posts[]->{
            ${POST_FIELDS}
        }
    }
`;
