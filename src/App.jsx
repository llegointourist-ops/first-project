import { FaReact, FaPhone, FaEnvelope, FaCode, FaRocket } from 'react-icons/fa'

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-badge">React Розробник</div>
        <h1>Олег Початок</h1>
        <p>Я створюю сучасні та швидкі веб-додатки на React. Крутий дизайн, якісний код та впевнене рішення задач.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Зв'язатися</a>
          <a href="#projects" className="btn btn-secondary">Мої проєкти</a>
        </div>
      </header>

      <section className="features">
        <article>
          <FaReact className="icon" />
          <h2>React</h2>
          <p>Створюю інтерфейси з сучасними компонентами, hooks та реактивною логікою.</p>
        </article>
        <article>
          <FaCode className="icon" />
          <h2>JavaScript</h2>
          <p>Пишу чистий та підтримуваний код для масштабних SPA та інструментів.</p>
        </article>
        <article>
          <FaRocket className="icon" />
          <h2>Продуктивність</h2>
          <p>Оптимізую завантаження та UX, щоб ваш проект працював швидко на всіх пристроях.</p>
        </article>
      </section>

      <section className="about" id="projects">
        <div>
          <h2>Про мене</h2>
          <p>Я — Олег, React розробник, який знає, як зробити ваш сайт привабливим та швидким. Маю досвід у створенні портфоліо, лендингів та корпоративних веб-сайтів.</p>
        </div>
        <div className="about-cards">
          <div>
            <h3>Frontend</h3>
            <p>React, JSX, CSS, Tailwind, Vite</p>
          </div>
          <div>
            <h3>Розробка</h3>
            <p>Продуктивність, адаптивний дизайн, чистий код.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Контакти</h2>
        <p>Готовий взятися за новий проєкт. Напишіть мені для обговорення деталей.</p>
        <div className="contact-grid">
          <div>
            <FaPhone className="icon-small" />
            <strong>Телефон</strong>
            <span>+380 67 123 45 67</span>
          </div>
          <div>
            <FaEnvelope className="icon-small" />
            <strong>Email</strong>
            <span>oleg@example.com</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Олег Крутий — React Розробник</p>
      </footer>
    </div>
  )
}

export default App
