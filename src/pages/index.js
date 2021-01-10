import React from 'react';

import FormPage from '../components/FormPage';

import "../styles/style.css";
import "../styles/full.css";

const IndexPage = () => {
  return (
	<div className="body-container">
		<h1 className="body-head">Persona Time!</h1>
		<FormPage />
	</div>
  );
};

export default IndexPage;