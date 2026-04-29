import type { ReactNode } from "react";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ChevronRightIcon } from "@/components/figma-screens/chevron-right-icon";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import styles from "./profile-subscription-info-view.module.css";

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className={styles.bulletRow}>
      <span className={styles.dot} aria-hidden />
      <p className={styles.bulletText}>{children}</p>
    </div>
  );
}

function DocRow({ label }: { label: string }) {
  return (
    <div className={styles.docRow}>
      <p className={styles.docLabel}>{label}</p>
      <ChevronRightIcon />
    </div>
  );
}

/** Figma 93:28551 — Subscription information. */
export function ProfileSubscriptionInfoView() {
  return (
    <div className={styles.root} data-node-id="93:28551">
      <ProfileFigmaStatusBar variant="ios125" className={styles.status} />

      <header className={styles.head}>
        <IconArrowBack href="/profile/my-purchases/subscription" label="Назад" />
        <h1 className={styles.headTitle} data-node-id="93:28555">
          Информация о подписке
        </h1>
        <div className={styles.headGhost} aria-hidden />
      </header>

      <section className={`${styles.section} ${styles.s1}`} data-node-id="93:28576">
        <h2 className={styles.sectionTitle} data-node-id="93:28577">
          Что входит в подписку
        </h2>
        <div className={styles.card} data-node-id="93:28578">
          <Bullet>Доступ к закрытому клубу участниц</Bullet>
          <Bullet>Дневник здоровья: цикл, симптомы, анализы</Bullet>
          <Bullet>Эксклюзивные материалы: вебинары, гайды, шаблоны</Bullet>
          <Bullet>Приоритетная запись на онлайн-консультации</Bullet>
        </div>
      </section>

      <section className={`${styles.section} ${styles.s2}`} data-node-id="93:28729">
        <h2 className={styles.sectionTitle} data-node-id="93:28730">
          Стоимость и периоды
        </h2>
        <div className={styles.card} data-node-id="93:28731">
          <Bullet>Ежемесячно: 2 990 ₽/мес — списание каждые 30 дней</Bullet>
          <Bullet>Ежеквартально: 7 490 ₽/квартал — экономия ~16%</Bullet>
          <Bullet>Ежегодно: 24 900 ₽/год — экономия ~30%</Bullet>
          <Bullet>Пробный период: 7 дней бесплатно при первой подписке</Bullet>
        </div>
      </section>

      <section className={`${styles.section} ${styles.s3}`} data-node-id="93:28831">
        <h2 className={styles.sectionTitle} data-node-id="93:28832">
          Отмена и возврат
        </h2>
        <div className={styles.card} data-node-id="93:28833">
          <Bullet>Отмену можно оформить в любой момент через раздел Профиль → Подписка</Bullet>
          <Bullet>После отмены доступ сохраняется до конца оплаченного периода</Bullet>
          <Bullet>Частичный возврат за неиспользованные дни не предусмотрен</Bullet>
          <Bullet>
            Полный возврат возможен в течение 14 дней с момента первой оплаты при условии, что материалы не были
            просмотрены
          </Bullet>
        </div>
      </section>

      <section className={`${styles.section} ${styles.s4}`} data-node-id="93:28857">
        <h2 className={styles.sectionTitle} data-node-id="93:28858">
          Восстановление покупки
        </h2>
        <div className={styles.card} data-node-id="93:28859">
          <Bullet>Если подписка не отображается — нажмите «Восстановить покупку» на экране подписки</Bullet>
          <Bullet>Убедитесь, что вы авторизованы в том же аккаунте, с которого была совершена покупка</Bullet>
          <Bullet>При возникновении проблем обратитесь в поддержку: support@gynehealth.ru</Bullet>
        </div>
      </section>

      <section className={`${styles.section} ${styles.s5}`} data-node-id="93:28883">
        <h2 className={styles.sectionTitle} data-node-id="93:28884">
          Документы
        </h2>
        <div className={styles.card} data-node-id="93:28885">
          <DocRow label="Пользовательское соглашение" />
          <DocRow label="Политика конфиденциальности" />
          <DocRow label="Оферта на оказание услуг" />
          <DocRow label="Политика возврата средств" />
        </div>
      </section>
    </div>
  );
}
