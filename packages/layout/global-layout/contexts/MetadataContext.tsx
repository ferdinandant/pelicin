import Head from 'next/head';
import React, { ReactNode, useContext, useEffect, useState } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type MetadataContextValue = {
  title: string;
  setTitle: (title: string) => void;
};

type MetadataContextProviderProps = {
  children: ReactNode;
};

type MetadataConfigurerProps = {
  title: MetadataContextValue['title'];
  dateCreated?: string;
};

const MetadataContext = React.createContext<MetadataContextValue>(null);

// ================================================================================
// MAIN
// ================================================================================

export function MetadataContextProvider(props: MetadataContextProviderProps) {
  const { children } = props;
  const [title, setTitle] = useState('');

  const providerValue = {
    title,
    setTitle,
  };
  return (
    <MetadataContext.Provider value={providerValue}>
      <Head>
        <title>{title ? `${title} - Pelicin!` : 'Pelicin!'}</title>
      </Head>
      {children}
    </MetadataContext.Provider>
  );
}

/**
 * So we can customize them inside mdx files
 */
export function MetadataConfigurer(props: MetadataConfigurerProps) {
  const { title } = props;
  const { setTitle } = useContext(MetadataContext);

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return null;
}
