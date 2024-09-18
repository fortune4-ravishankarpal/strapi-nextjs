import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonGroup extends Schema.Component {
  collectionName: 'components_common_groups';
  info: {
    displayName: 'group';
  };
  attributes: {
    groupName: Attribute.String;
    links: Attribute.Relation<'common.group', 'oneToMany', 'api::link.link'>;
  };
}

export interface CommonGrp extends Schema.Component {
  collectionName: 'components_common_grps';
  info: {
    displayName: 'grp';
  };
  attributes: {
    link: Attribute.Component<'common.link', true>;
  };
}

export interface CommonHeaderCategoryGroup extends Schema.Component {
  collectionName: 'components_common_header_category_groups';
  info: {
    displayName: 'HeaderCategoryGroup';
    description: '';
  };
  attributes: {
    group: Attribute.Component<'common.group', true>;
    tabName: Attribute.String;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface CommonSingleHeader extends Schema.Component {
  collectionName: 'components_common_single_headers';
  info: {
    displayName: 'singleHeader';
  };
  attributes: {
    Name: Attribute.String;
    linkTo: Attribute.String;
  };
}

export interface ComponentAddress extends Schema.Component {
  collectionName: 'components_component_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    landMark: Attribute.String;
    pincode: Attribute.String;
    state: Attribute.String;
    city: Attribute.String;
    mobile: Attribute.String;
  };
}

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
      'common.group': CommonGroup;
      'common.grp': CommonGrp;
      'common.header-category-group': CommonHeaderCategoryGroup;
      'common.link': CommonLink;
      'common.single-header': CommonSingleHeader;
      'component.address': ComponentAddress;
      'component.hero-image': ComponentHeroImage;
      'component.sub-link': ComponentSubLink;
      'layout.carousel': LayoutCarousel;
      'layout.hero-section': LayoutHeroSection;
      'layout.sub-hero': LayoutSubHero;
    }
  }
}
