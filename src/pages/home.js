import React from 'react';
import logo from '../download.png';

const Home = () => {
  return (
    <div className="ParentBox">
      <div className="Foto">
        <img src={logo} />
      </div>
      <div className="Identitas">
        <h2>Rizqillah Zahra Lestari</h2>
        <h3>Front End Developer in Digital Talent Incubator at Telkom</h3>
        <h4>Bandung, Indonesia</h4>
      </div>
    </div>
  );
};

export default Home;
