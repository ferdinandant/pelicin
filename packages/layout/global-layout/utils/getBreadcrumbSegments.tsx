import { pathPrefixToURL } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Opts = {
  basePath: string;
  pathname: string;
};

type SegmentInfo = {
  text: string;
  path: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function getBreadcrumbSegments(opts: Opts): SegmentInfo[] {
  const { basePath } = opts;
  const unprefixedBasePath = basePath.replace(/^[/]/, '');
  const textSegments = unprefixedBasePath.split('/').filter((item) => item !== '');
  const segmentInfoList: SegmentInfo[] = [];

  // Construct `pathSegments`
  let prefix = '';
  textSegments.forEach((textSegment) => {
    prefix = prefix + '/' + textSegment;
    segmentInfoList.push({
      text: textSegment,
      path: pathPrefixToURL[prefix],
    });
  });

  return segmentInfoList;
}
