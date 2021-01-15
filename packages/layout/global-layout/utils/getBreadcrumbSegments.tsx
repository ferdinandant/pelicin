// ================================================================================
// TYPES/CONST
// ================================================================================

type Opts = {
  basePath: string;
  topicTitle: string;
};

type SegmentInfo = {
  text: string;
  path: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function getBreadcrumbSegments(opts: Opts): SegmentInfo[] {
  const { basePath, topicTitle } = opts;
  const unprefixedBasePath = basePath.replace(/^[/]/, '');
  const textSegments = unprefixedBasePath.split('/').filter((item) => item !== '');
  const segmentInfoList: SegmentInfo[] = [];

  // Construct `pathSegments`
  textSegments.forEach((textSegment, index) => {
    const isLastSegment = index === textSegments.length - 1;
    segmentInfoList.push({
      text: isLastSegment ? topicTitle : textSegment,
      path: `/#${textSegment}`,
    });
  });

  return segmentInfoList;
}
