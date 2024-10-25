import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>About Us</h1>
        <p style={styles.heroText}>
          We are a team of passionate professionals committed to delivering exceptional service and innovative solutions. Our expertise spans across various industries, empowering us to bring a unique perspective to every project.
        </p>
      </section>

      <section style={styles.missionSection}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.sectionText}>
          Our mission is to foster growth and development by providing impactful solutions tailored to meet our clients' needs. We believe in integrity, quality, and a commitment to excellence in all that we do.
        </p>
      </section>

      <section style={styles.valuesSection}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <ul style={styles.valuesList}>
          <li style={styles.valueItem}>
            <strong>Integrity:</strong> We uphold honesty and transparency in our work.
          </li>
          <li style={styles.valueItem}>
            <strong>Innovation:</strong> Continuously pushing the boundaries to find new solutions.
          </li>
          <li style={styles.valueItem}>
            <strong>Customer-Centric:</strong> Placing our clients' needs at the forefront.
          </li>
          <li style={styles.valueItem}>
            <strong>Excellence:</strong> Aiming for the highest standards in every project.
          </li>
        </ul>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamMember}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.jlnR76Uv0lH4YeD4XrbnmAHaEK&pid=Api&P=0&h=180" alt="Team Member" style={styles.memberImage} />
            <h3 style={styles.memberName}>John Doe</h3>
            <p style={styles.memberRole}>CEO & Founder</p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    color: '#333',
    lineHeight: '1.6',
  },
  heroSection: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f7f7f7',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  heroText: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  missionSection: {
    padding: '30px 20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '1.1rem',
  },
  valuesSection: {
    padding: '30px 20px',
    backgroundColor: '#f7f7f7',
  },
  valuesList: {
    listStyleType: 'none',
    padding: 0,
    lineHeight: '1.8',
  },
  valueItem: {
    marginBottom: '10px',
  },
  teamSection: {
    padding: '30px 20px',
  },
  teamGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  teamMember: {
    textAlign: 'center',
    width: '200px',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  memberImage: {
    borderRadius: '50%',
    width: '140px',
    height: '100px',
    marginBottom: '10px',
  },
  memberName: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: '0.9rem',
    color: '#777',
  },
};

export default About;
