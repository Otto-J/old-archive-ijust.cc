import type { CollectionEntry } from "astro:content";

type UnionType = "post" | "podcast";

/**
 * 简单对数据进行排序
 * @param posts
 * @returns
 */
export function sortMDByDate(posts: Array<CollectionEntry<UnionType>>) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}

export function getAllTags(posts: Array<CollectionEntry<UnionType>>) {
  return posts.flatMap((post) => [...post.data.tags]);
}

export function getUniqueTags(posts: Array<CollectionEntry<UnionType>>) {
  return [...new Set(getAllTags(posts))];
}

export function getUniqueTagsWithCount(
  posts: Array<CollectionEntry<UnionType>>,
): Array<[string, number]> {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ].sort((a, b) => b[1] - a[1]);
}
