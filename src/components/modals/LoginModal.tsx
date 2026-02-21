import { useModal } from '../../contexts/ModalContext';

export default function LoginModal() {
  const { activeModal, closeModal, openRegister } = useModal();
  if (activeModal !== 'login') return null;

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdrop}>
      <div className="modal">
        <div className="modal__header">
          <h2>Hyr</h2>
          <button className="modal__close" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal__form" onSubmit={e => e.preventDefault()}>
          <div className="modal__field">
            <label htmlFor="login-user">Emri i përdoruesit</label>
            <input id="login-user" type="text" placeholder="Shkruaj emrin e përdoruesit" autoComplete="username" />
          </div>
          <div className="modal__field">
            <label htmlFor="login-pass">Fjalëkalimi</label>
            <input id="login-pass" type="password" placeholder="Shkruaj fjalëkalimin" autoComplete="current-password" />
          </div>
          <button type="submit" className="modal__submit">Hyr</button>
          <div className="modal__footer">
            <span>Nuk ke llogari? </span>
            <button type="button" className="modal__link" onClick={() => { closeModal(); openRegister(); }}>
              Regjistrohu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
