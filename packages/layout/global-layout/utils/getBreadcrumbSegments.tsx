type Opts = {
  basePath: string;
  pathname: string;
};

type SegmentInfo = {
  text: string;
  path: string;
};

export default function getBreadcrumbSegments(opts: Opts): SegmentInfo[] {
  const { basePath } = opts;
  const unprefixedBasePath = basePath.replace(/^[/]/, '');
  const textSegments = unprefixedBasePath.split('/').filter((item) => item !== '');
  let pathSegments = [];

  // Construct `pathSegments`
  let prefix = '';
  textSegments.forEach((textSegment) => {
    prefix = prefix + '/' + textSegment;
    pathSegments.push(prefix);
  });

  // Combine `textSegments` and `pathSegments`
  const segmentInfoList = [];
  for (const i in textSegments) {
    segmentInfoList.push({
      text: textSegments[i],
      path: pathSegments[i],
    });
  }

  return segmentInfoList;
}
