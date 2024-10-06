'use client';

import classNames from 'classnames';

import { Flex } from '@/once-ui/components';
import { style } from '@/app/resources';

import { Inter } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';
import { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Theme({
  children,
}: RootLayoutProps) {
  const [theme, setTheme] = useLocalStorage(
    'drawing',
    'dark'
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Flex
        as='html'
        lang='en'
        background='page'
        data-neutral={style.neutral}
        data-brand={style.brand}
        data-accent={style.accent}
        data-solid={style.solid}
        data-solid-style={style.solidStyle}
        data-theme={theme}
        data-border={style.border}
        data-surface={style.surface}
        data-transition={style.transition}
        className={classNames(
          primary.variable,
          secondary ? secondary.variable : '',
          tertiary ? tertiary.variable : '',
          code.variable
        )}
      >
        {children}
      </Flex>
    </ThemeContext.Provider>
  );
}

export const ThemeContext = createContext<any>(null);
