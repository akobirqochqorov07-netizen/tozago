import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Admin.css';

export function Admin() {
    const { t } = useLanguage();
    const [isAuth, setIsAuth] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login === 'admin' && password === 'admin 123') {
            setIsAuth(true);
        } else {
            alert(t('admin.invalid'));
        }
    };

    // Fetch mock data from localStorage
    const transactions = JSON.parse(localStorage.getItem('tozago_transactions') || '[]');
    const contacts = JSON.parse(localStorage.getItem('tozago_contacts') || '[]');

    if (!isAuth) {
        return (
            <div className="admin-login-container">
                <form className="admin-login-card" onSubmit={handleLogin}>
                    <h2>{t('admin.login_title')}</h2>

                    <div className="form-group">
                        <label className="form-label">{t('admin.login_label')}</label>
                        <input
                            className="form-input"
                            type="text"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">{t('admin.password_label')}</label>
                        <input
                            className="form-input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                        {t('admin.login_button')}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-dashboard container">
            <h1 className="admin-title">{t('admin.dashboard_title')}</h1>

            <div className="admin-grid">
                <div className="admin-section">
                    <h2>{t('admin.transactions_title')}</h2>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>{t('admin.date')}</th>
                                    <th>{t('admin.user_name')}</th>
                                    <th>{t('admin.plan')}</th>
                                    <th>{t('admin.amount')}</th>
                                    <th>{t('admin.status')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.length === 0 ? (
                                    <tr><td colSpan={5} style={{ textAlign: 'center', padding: '1rem' }}>{t('admin.no_transactions')}</td></tr>
                                ) : (
                                    transactions.map((t: any, idx: number) => (
                                        <tr key={idx}>
                                            <td>{new Date(t.date).toLocaleString()}</td>
                                            <td>{t.name || t('admin.anonymous')} {t.phone ? `(${t.phone})` : ''}</td>
                                            <td>{t.plan}</td>
                                            <td style={{ fontWeight: 'bold' }}>{t.amount} UZS</td>
                                            <td style={{ color: 'var(--brand-primary)' }}>{t('admin.paid')}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="admin-section">
                    <h2>{t('admin.contacts_title')}</h2>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>{t('admin.time')}</th>
                                    <th>{t('admin.name')}</th>
                                    <th>{t('admin.phone')}</th>
                                    <th>{t('admin.message')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length === 0 ? (
                                    <tr><td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>{t('admin.no_contacts')}</td></tr>
                                ) : (
                                    contacts.map((c: any, idx: number) => (
                                        <tr key={idx}>
                                            <td>{new Date(c.date).toLocaleString()}</td>
                                            <td>{c.name}</td>
                                            <td>{c.phone}</td>
                                            <td>{c.message}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
