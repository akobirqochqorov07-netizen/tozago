import { useState } from 'react';
import './Admin.css';

export function Admin() {
    const [isAuth, setIsAuth] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login === 'admin' && password === 'admin 123') {
            setIsAuth(true);
        } else {
            alert('Invalid credentials');
        }
    };

    // Fetch mock data from localStorage
    const transactions = JSON.parse(localStorage.getItem('tozago_transactions') || '[]');
    const contacts = JSON.parse(localStorage.getItem('tozago_contacts') || '[]');

    if (!isAuth) {
        return (
            <div className="admin-login-container">
                <form className="admin-login-card" onSubmit={handleLogin}>
                    <h2>Вход в панель управления</h2>

                    <div className="form-group">
                        <label className="form-label">Логин</label>
                        <input
                            className="form-input"
                            type="text"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Пароль</label>
                        <input
                            className="form-input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                        Войти
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-dashboard container">
            <h1 className="admin-title">Панель Администратора TozaGo</h1>

            <div className="admin-grid">
                <div className="admin-section">
                    <h2>Транзакции (Подписки)</h2>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Дата</th>
                                    <th>ID Пользователя / Имя</th>
                                    <th>Тариф</th>
                                    <th>Сумма</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.length === 0 ? (
                                    <tr><td colSpan={5} style={{ textAlign: 'center', padding: '1rem' }}>Нет транзакций</td></tr>
                                ) : (
                                    transactions.map((t: any, idx: number) => (
                                        <tr key={idx}>
                                            <td>{new Date(t.date).toLocaleString()}</td>
                                            <td>{t.name || 'Аноним'} {t.phone ? `(${t.phone})` : ''}</td>
                                            <td>{t.plan}</td>
                                            <td style={{ fontWeight: 'bold' }}>{t.amount} UZS</td>
                                            <td style={{ color: 'var(--brand-primary)' }}>Оплачено</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="admin-section">
                    <h2>Заявки с Формы Контактов</h2>
                    <div className="table-responsive">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Время</th>
                                    <th>Имя</th>
                                    <th>Телефон</th>
                                    <th>Сообщение</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length === 0 ? (
                                    <tr><td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>Нет новых заявок</td></tr>
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
