import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderTitle from '../Title/Title';
import Footer from '../FooterComponent/FooterComponent';
import AddAvatarComponent from '../AddAvatarComponent/AddAvatarComponent';
import SingleInputFormComponent from '../SingleInputFormComponent/SingleInputFormComponent';

export const CreateTeamPageLayout = ({ createTeamFormProps }) => {
  const { value, onChange, onSubmit } = createTeamFormProps;

  return (
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
        <SingleInputFormComponent
          inputLabel="Team name"
          placeholder="Enter name"
          value={value}
          buttonTitle="Create team"
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
      <Footer />
    </section>
  );
};

CreateTeamPageLayout.propTypes = {
  createTeamFormProps: PropTypes.shape({
    inputLabel: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }).isRequired,
};
