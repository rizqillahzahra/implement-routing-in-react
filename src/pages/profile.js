import React from 'react';
import capture from '../Capture.PNG';

const Profile = () => {
  return (
    <div className="Profilku">
      <DetailKerja />
      <DetailPendidikan />
      <DetailSkills />
      <DetailAchievement />
      <DetailInterest />
    </div>
  );
};

function DetailKerja() {
  const details = [
    {
      id: 1,
      posisi: 'Front End Developer',
      instansi: 'Digital Talent Incubator at Telkom',
      periode: 'September 2020 - Present',
    },
    {
      id: 2,
      posisi: 'Assistant Lecturer',
      instansi: 'Telkom University',
      periode: 'August 2020 - Present',
    },
    {
      id: 3,
      posisi: 'Paper Checker and Host',
      instansi:
        // eslint-disable-next-line max-len
        'The 8th International Conference on Information and Communication Technology (ICoICT) organized by Telkom University',
      periode: 'April 2020 - June 2020',
    },
  ];
  const listKerja = details.map((itemKerja) => {
    return (
      <div className="Item">
        <h3>{itemKerja.posisi}</h3>
        <ul>
          <li>
            <h4>{itemKerja.instansi}</h4>
          </li>
          <li>
            <h4>{itemKerja.periode}</h4>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="ParentBox">
      <h2>Experience</h2>
      <div className="Item">{listKerja}</div>
    </div>
  );
}

function DetailPendidikan() {
  const details = [
    {
      id: 1,
      posisi: 'Informatics Engineering',
      instansi: 'Telkom University',
      periode: '2014-2019',
      ipk: 3.5,
    },
  ];
  const listPendidikan = details.map((itemPendidikan) => {
    return (
      <div className="Item">
        <h3>{itemPendidikan.posisi}</h3>
        <ul>
          <li>
            <h4>{itemPendidikan.instansi}</h4>
          </li>
          <li>
            <h4>{itemPendidikan.periode}</h4>
          </li>
          <li>
            <h4>IPK: {itemPendidikan.ipk}</h4>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="ParentBox">
      <h2>Formal Education</h2>
      <div className="Item">{listPendidikan}</div>
    </div>
  );
}

function DetailSkills() {
  const skills = [
    {
      id: 1,
      skillnya: 'Microsoft Office',
    },
    {
      id: 2,
      skillnya: 'Java',
    },
    {
      id: 3,
      skillnya: 'C++',
    },
    {
      id: 4,
      skillnya: 'PHP',
    },
    {
      id: 5,
      skillnya: 'JavaScript',
    },
  ];
  const listSkill = skills.map((itemSkill) => {
    return (
      <div className="Item">
        <ul>
          <li>
            <h4>{itemSkill.skillnya}</h4>
          </li>
        </ul>
      </div>
    );
  });
  return (
    <div className="ParentBox">
      <h2>Skill</h2>
      <div className="Item">{listSkill}</div>
    </div>
  );
}

function DetailAchievement() {
  return (
    <div className="ParentBox">
      <h2>Detail Achievement</h2>
      <div className="Capture">
        <img src={capture} />
      </div>
      <h3>Blood Detection in Infusion Hose Using Fuzzy System</h3>
      <h4>Publisher: IEEE.</h4>
      <h4>
        Published in: 2020 8th International Conference on Information and
        Communication Technology (ICoICT).
      </h4>
      <h4>
        <a href="https://doi.org/10.1109/ICoICT49345.2020.9166256">
          DOI: 10.1109/ICoICT49345.2020.9166256
        </a>
      </h4>
    </div>
  );
}

function DetailInterest() {
  const interest = [
    {
      id: 1,
      minat: 'Front End Web Developer',
    },
    {
      id: 2,
      minat: 'Academic Publishing',
    },
    {
      id: 3,
      minat: 'Internet of Things',
    },
    {
      id: 4,
      minat: 'Data Analyst',
    },
    {
      id: 5,
      minat: 'Data Visualization',
    },
  ];
  const listInterest = interest.map((itemInterest) => {
    return (
      <div className="ItemInterest">
        <h4>{itemInterest.minat}</h4>
      </div>
    );
  });
  return (
    <div className="ParentBox">
      <h2>Interest</h2>
      <div className="ItemInterest">{listInterest}</div>
    </div>
  );
}

export default Profile;
