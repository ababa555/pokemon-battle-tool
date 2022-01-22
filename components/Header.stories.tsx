import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import { SearchProvider } from '../context/SearchContext'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Home1: ComponentStory<typeof Header> = () => {
  return (
    <SearchProvider>
      <Header title="title A" />
    </SearchProvider>
  );
};

export const Home2: ComponentStory<typeof Header> = () => {
  return (
    <SearchProvider>
      <Header title="title B" />
    </SearchProvider>
  );
};

Home2.story = {
  parameters: {
    nextRouter: {
      pathname: "/a",
    },
  },
};

export const Home3: ComponentStory<typeof Header> = (args1) => {
  return (
    <SearchProvider>
      <Header {...args1} />
    </SearchProvider>
  );
};

Home3.args = {
  title: "title C"
};