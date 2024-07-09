import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.Text;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentName extends Schema.Component {
  collectionName: 'components_component_names';
  info: {
    displayName: 'name';
  };
  attributes: {
    description: Attribute.String;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    icon: 'clock';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Component<'component.link'>;
  };
}

export interface LayoutSubHero extends Schema.Component {
  collectionName: 'components_layout_sub_heroes';
  info: {
    displayName: 'sub hero';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.link': ComponentLink;
      'component.name': ComponentName;
      'layout.hero-section': LayoutHeroSection;
      'layout.sub-hero': LayoutSubHero;
    }
  }
}
