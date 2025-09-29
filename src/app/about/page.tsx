import AnimatedSection from '@/components/AnimatedSection'
import AnimatedTechnologies from '@/components/AnimatedTechnologies'

export const revalidate = 60

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <AnimatedSection>
        <h1 className="text-5xl font-extrabold text-text mb-2">О проекте</h1>
        <p className="text-lg text-muted">
          MiniBlog — демонстрационный блог на <strong>Next.js 15</strong> с TailwindCSS, framer-motion и поддержкой темной темы.
        </p>
        <p className="text-lg text-muted mt-2">
          Этот проект демонстрирует работу с разными видами рендеринга и современными фронтенд-технологиями:
        </p>
        <ul className="list-disc list-inside text-muted mt-2 space-y-1">
          <li>
            <strong>Static Site Generation (SSG)</strong> — страницы, создаваемые один раз на этапе сборки.
          </li>
          <li>
            <strong>Incremental Static Regeneration (ISR)</strong> — обновление уже сгенерированных страниц через <code>revalidate</code> без полной пересборки.
          </li>
          <li>
            <strong>Server Side Rendering (SSR)</strong> — генерация страниц на сервере при каждом запросе. Например, динамические посты с <code>cache: &apos;no-store&apos;</code>.
          </li>
          <li>
            <strong>Client Side Rendering (CSR)</strong> — интерактивные компоненты, модалки и анимации через React и framer-motion, такие как форма добавления поста с тостами и карточки профиля.
          </li>
        </ul>
        <p className="text-lg text-muted mt-4">
          Дополнительно проект показывает:
        </p>
        <ul className="list-disc list-inside text-muted mt-2 space-y-1">
          <li>Взаимодействие с внешним API (JSONPlaceholder).</li>
          <li>Отправку POST-запросов с фейковой отправкой и уведомлениями (тостами).</li>
          <li>Плавную анимацию элементов интерфейса с framer-motion.</li>
          <li>Переключение тем и стилизацию под светлую/темную тему с помощью TailwindCSS и CSS-переменных.</li>
          <li>Плавное отображение навыков пользователя и карточки профиля.</li>
        </ul>
      </AnimatedSection>
      <AnimatedTechnologies />
    </div>
  )
}
