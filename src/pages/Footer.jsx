import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.location}>
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className={styles.aroundTheWeb}>
        <h3>AROUND THE WEB</h3>
        <div className={styles.socialIcons}>
        <a href="https://facebook.com" className={styles.icon}>
            <i className="fa-brands fa-facebook"></i>
        </a>
          <a href="https://twitter.com" className={styles.icon}>
          <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className={styles.icon}>
           <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" className={styles.icon}>
             <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className={styles.aboutFreelancer}>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, MIT licensed </p>
        <p>Bootstrap theme created by Start Bootstrap</p>
      </div>
    </footer>
  );
};

export default Footer;