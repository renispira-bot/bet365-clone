export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__gambling">
          <p className="footer__warning">
            Please gamble responsibly. This is a demo site with no real betting functionality.
          </p>
          <p className="footer__age">18+ | Gambling can be addictive. Play responsibly.</p>
        </div>
        <div className="footer__links">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Responsible Gambling</span>
          <span>Contact Us</span>
        </div>
        <div className="footer__copy">
          &copy; 2026 bet365 Clone - Demo Only. Not affiliated with bet365.
        </div>
      </div>
    </footer>
  );
}
