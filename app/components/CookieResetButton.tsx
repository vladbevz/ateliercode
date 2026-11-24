'use client';

export default function CookieResetButton() {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem('cookie_consent');
        window.location.reload();
      }}
      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
    >
      Gérer les cookies
    </button>
  );
}
