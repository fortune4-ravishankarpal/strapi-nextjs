import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentHeroImage extends Schema.Component {
  collectionName: 'components_component_hero_images';
  info: {
    displayName: 'HeroImage';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Link: Attribute.Text;
  };
}

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

export interface ComponentSubLink extends Schema.Component {
  collectionName: 'components_component_sub_links';
  info: {
    displayName: 'subLink';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Text;
    isExternal: Attribute.Boolean;
  };
}

export interface LayoutCarousel extends Schema.Component {
  collectionName: 'components_layout_carousels';
  info: {
    displayName: 'carousel';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    HeroImage: Attribute.Component<'component.hero-image', true>;
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
    displayName: 'subHero';
  };
  attributes: {
    title: Attribute.String;
    Links: Attribute.Component<'component.sub-link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.hero-image': ComponentHeroImage;
      'component.link': ComponentLink;
      'component.sub-link': ComponentSubLink;
      'layout.carousel': LayoutCarousel;
      'layout.hero-section': LayoutHeroSection;
      'layout.sub-hero': LayoutSubHero;
    }
  }
}
