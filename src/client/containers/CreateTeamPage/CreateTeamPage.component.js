import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle from '../../components/Title/Title';
import Footer from '../../components/FooterComponent/FooterComponent';
import SingleInputFormComponent from '../../components/SingleInputFormComponent/SingleInputFormComponent';

import anonAvatarImage from '../../assets/images/avatars/anonimos-avatar.png';
import addIcon from '../../assets/images/icons/plus-icon.svg';

export const CreateTeamPage = () => (
  <section className="container">
    <HeaderTitle title="This is the Create Team Page" />
    <main>
      <p>Make sure to fill out your name or the name of the team and avatar you are playing on before we start.</p>
      <img src={anonAvatarImage} alt="silhouette of a person pointing out user is not yet chosen an avatar yet"/>
      <Link to="/pick-avatar-page">
        <img src={addIcon} alt="button to pick avatar" />
      </Link>
      <SingleInputFormComponent inputLabel="Team name" value="Enter name" ButtonTitle="Create Team"/>
    </main>
    <Footer />
  </section>
);
