import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle from '../../components/Title/Title';
import Footer from '../../components/FooterComponent/FooterComponent';
import AddAvatarComponent from '../../components/AddAvatarComponent/AddAvatarComponent';
import { FormContainer } from '../FormContainer/FormContainer.component';

export const CreateTeamPage = () => (
  <div id="root">
    <section className="home bodycontainer">
      <HeaderTitle title="Create Team Page" />
      <div className="bodywrapper">
        <p className="smallwhitedetail">
          Make sure to fill out your name or the name of the team and avatar you
          are playing on before we start.
        </p>
        <Link to="/pick-avatar-page">
          <AddAvatarComponent />
        </Link>
        <FormContainer
          inputLabel="Team name"
          value="Enter name"
          ButtonTitle="Create Team"
        />
      </div>
      <Footer />
    </section>
  </div>
);
