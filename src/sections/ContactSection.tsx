import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Loader2 } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './ContactSection.css';

// Import images correctly for Vite
import logoImg from '../assets/logo.png';

export function ContactSection() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const BOT_TOKEN = '8776169414:AAFomn2evDDu7APK_-CrMwm8-O4zrZfriIM';
    const CHAT_ID = '7199898267'; // Auto-detected from bot's getUpdates

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        // MOCK: Save to local storage for Admin Dashboard
        const existingContacts = JSON.parse(localStorage.getItem('tozago_contacts') || '[]');
        existingContacts.unshift({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            date: new Date().toISOString()
        });
        localStorage.setItem('tozago_contacts', JSON.stringify(existingContacts));

        const text = `
🌟 *New TozaGo Request* 🌟
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message}
    `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', message: '' });
            } else {
                const errBody = await response.json();
                console.error("Telegram API Error:", errBody);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container contact-grid">
                <AnimatedContainer animation="fade-up" className="contact-info">
                    <h2>
                        {language === 'ru' ? 'Свяжитесь с нами' : (language === 'en' ? 'Contact Us' : "Biz bilan bog'lanish")}
                    </h2>
                    <p className="contact-desc">
                        {language === 'ru' ? 'Оставьте свои данные, и мы свяжемся с вами в течение 15 минут для оформления подписки и ответа на вопросы.' : (language === 'en' ? 'Leave your details and we will contact you within 15 minutes to process your subscription and answer questions.' : "Ma'lumotlaringizni qoldiring va biz obunani rasmiylashtirish yoki savollaringizga javob berish uchun 15 daqiqa ichida siz bilan bog'lanamiz.")}
                    </p>

                    {/* Logo integrated nicely into contact info to show branding */}
                    <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '1.5rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src={logoImg} alt="TozaGo" style={{ height: '48px' }} />
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>TozaGo Support</div>
                            <div style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Tashkent, Uzbekistan</div>
                        </div>
                    </div>
                </AnimatedContainer>

                <AnimatedContainer animation="scale-up" delay={0.2}>
                    <div className="contact-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">{language === 'ru' ? 'Ваше имя' : (language === 'en' ? 'Your Name' : 'Ismingiz')}</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    required
                                    placeholder="Ivan Ivanov"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">{language === 'ru' ? 'Телефон' : (language === 'en' ? 'Phone Number' : 'Telefon raqam')}</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    required
                                    placeholder="+998 90 123 45 67"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">{language === 'ru' ? 'Сообщение (необязательно)' : (language === 'en' ? 'Message (Optional)' : 'Xabar (ixtiyoriy)')}</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder={language === 'ru' ? 'Есть вопросы по тарифам?' : 'Any questions?'}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                                {loading ? <Loader2 className="spinner" /> : (
                                    <>
                                        {language === 'ru' ? 'Отправить заявку' : (language === 'en' ? 'Send Request' : 'Ariza yuborish')}
                                        <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="form-status success">
                                    {language === 'ru' ? 'Заявка успешно отправлена!' : 'Request sent successfully!'}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="form-status error">
                                    {language === 'ru' ? 'Произошла ошибка. Попробуйте позже.' : 'An error occurred. Try again.'}
                                </div>
                            )}
                        </form>
                    </div>
                </AnimatedContainer>
            </div>
        </section>
    );
}
