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
          <h2>Regjistrohu Tani</h2>
          <button className="modal__close" onClick={closeModal}>&times;</button>
        </div>
        <form className="modal__form" onSubmit={e => e.preventDefault()}>
          <div className="modal__field">
            <label htmlFor="reg-user">Emri i përdoruesit</label>
            <input id="reg-user" type="text" placeholder="Zgjidh një emër përdoruesi" autoComplete="username" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-email">Email</label>
            <input id="reg-email" type="email" placeholder="Shkruaj email-in tënd" autoComplete="email" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-pass">Fjalëkalimi</label>
            <input id="reg-pass" type="password" placeholder="Krijo një fjalëkalim" autoComplete="new-password" />
          </div>
          <div className="modal__field">
            <label htmlFor="reg-confirm">Konfirmo Fjalëkalimin</label>
            <input id="reg-confirm" type="password" placeholder="Konfirmo fjalëkalimin" autoComplete="new-password" />
          </div>
          <button type="submit" className="modal__submit modal__submit--join">Regjistrohu Tani</button>
          <div className="modal__footer">
            <span>Ke tashmë një llogari? </span>
            <button type="button" className="modal__link" onClick={() => { closeModal(); openLogin(); }}>
              Hyr
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
