import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App.jsx';
import HostedBy from '../components/HostedBy.jsx';
import Communications from '../components/Communications.jsx';
import TheNeighborhood from '../components/TheNeighborhood.jsx';
import Policies from '../components/Policies.jsx';
import Cancelations from '../components/Cancelations.jsx';
import RelatedHomes from '../components/RelatedHomes.jsx';
import ThingsToDo from '../components/ThingsToDo.jsx';
import Explore from '../components/Explore.jsx';

import Listing from '../components/Listing.jsx';
import Event from '../components/Event.jsx';


describe('render main app component to the DOM', () => {
    test("should pass if component renders", () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists()).toBe(true);
    });
  });

describe('render all imported components within main App component', () => {
    test("should pass if HostedBy component renders", () => {
      const wrapper = shallow(<HostedBy/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Communications component renders", () => {
      const wrapper = shallow(<Communications/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if TheNeighborhood component renders", () => {
      const wrapper = shallow(<TheNeighborhood/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Policies component renders", () => {
      const wrapper = shallow(<Policies/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Cancelations component renders", () => {
      const wrapper = shallow(<Cancelations/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if RelatedHomes component renders", () => {
      const wrapper = shallow(<RelatedHomes listings={[]}/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if ThingsToDo component renders", () => {
      const wrapper = shallow(<ThingsToDo thingsToDo={[]}/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Explore component renders", () => {
      const wrapper = shallow(<Explore/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Listing component renders", () => {
      const wrapper = shallow(<Listing listingImg={''} roomArrangement={''} listingTitle={''} nightlyPrice={0} reviewAvg={0} numOfReviews={0}/>);
      expect(wrapper.exists()).toBe(true);
    });
    test("should pass if Event component renders", () => {
      const wrapper = shallow(<Event eventImg={''} eventCategory={''} eventName={''} price={0} ratingAvg={0} numOfRatings={0}/>);
      expect(wrapper.exists()).toBe(true);
    });
});