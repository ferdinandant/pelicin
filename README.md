# pelicin

Ferdinand's study notes and cheatsheets.

Docusaurus-like documentation website builder, built using Next.js.

## Running the application

Ensure `yarn` is installed on your system, then run the following to install all dependencies:

```bash
yarn
```

Run the web app on your localhost with the following command:

```bash
yarn dev
```

You should then be able to access the web app on localhost:3000.

## Writing workflow

### 1. Creating a new group

A "group" is a collection of topics. For organization, these topics may be grouped into "sections".

To create a new group, create a new file `packages/config/groups/<groupSlug>.tsx`

```tsx
import React from 'react';
import { TopicGroup } from '@pelicin/config';

const group: TopicGroup = {
  groupTitle: '<Title of the group>',
  groupHash: '<URL anchor for the group on the homepage>',
  sections: [],
};

export default group;
```

### 2. Adding a topic to an existing group

To add a new topic, you have to add them to a "section" of an existing group.

Open `packages/groups/<groupSlug>.tsx`. If there are no sections there, you can add a new one:

```tsx
const group: TopicGroup = {
  sections: [
    {
      sectionTitle: '<Optional section title>',
      topics: [],
    },
  ],
};
```

Then, add the topic to the `topics` array:

```tsx
{
  title: '<Topic title>',
  path: '<Path to topic main page>',
  description: <>Optional description (normally the main source)</>,
},
```

Afterwards, create the topic config inside `packages/config/constants/pathPrefixToTopicConfig.tsx`:

```tsx
'<Topic page common prefix>': {
  topicKey: '<groupSlug>/<topicSlug>',
  topicTitle: '<Topic title>',
  mainColor: '<A color>',
  accentColor: '<A color>',
},
```

### 3. Editing the topic chapters

Create the chapter config file `packages/config/chapters/<groupSlug>/<topicSlug>.tsx`:

```tsx
const chapters: TopicChapters = [
  {
    chapter: '<Optional chapter header>',
    children: [
      {
        title: 'Introduction',
        path: '/web/css',
      },
      {
        title: '<Page title>',
        path: '/web/css/path/to/page',
      },
    ],
  },
  {...},
  {...},
];
```

### 4. Creating a new page

Simply create a new file: `pages/<groupSlug>/<topicSlug>/path/to/page.mdx`.
