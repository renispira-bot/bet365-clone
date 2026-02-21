import { useModal } from '../../contexts/ModalContext';

export default function RegisterModal() {
  const { activeModal, closeModal, openLogin } = useModal();
  if (activeModal !== 'register') return null;

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdrop}>
      <div className="modal">
        <div className="modal__header">
          <h2>Join Now</h2>
          <button className="modal__close" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal__form" onSubmit={e => e.preventDefault()}>
          <div className="modal__field">
            <label htmlFor="reg-user">Username</label>
            <input id="reg-user" type="text" placeholder="Choose a username" autoComplete="username" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-email">Email</label>
            <input id="reg-email" type="email" placeholder="Enter your email" autoComplete="email" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-pass">Password</label>
            <input id="reg-pass" type="password" placeholder="Create a password" autoComplete="new-password" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-confirm">Confirm Password</label>
            <input id="reg-confirm" type="password" placeholder="Confirm password" autoComplete="new-password" />
          </div>
          <button type="submit" className="modal__submit modal__submit--join">Join Now</button>
          <div className="modal__footer">
            <span>Already have an account? </span>
            <button type="button" className="modal__link" onClick={() => { closeModal(); openLogin(); }}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
