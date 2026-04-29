/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import shared from "./profile-my-purchases-shared.module.css";

const WAVE1 = "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg";
const WAVE2 = "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg";

/** Figma 192:4414 — My purchases / Subscription has ended. */
export function ProfileMyPurchasesEndedView() {
  return (
    <div className={shared.root812} data-node-id="192:4414">
      <ProfileFigmaStatusBar variant="ios125" className={shared.status} />

      <header className={shared.head}>
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={`${typography.heading3} ${shared.headTitle}`} data-node-id="192:4418">
          Мои покупки
        </h1>
        <div className={shared.headGhost} aria-hidden />
      </header>

      <nav className={shared.tabs} aria-label="Раздел покупок" data-node-id="192:4438">
        <div className={shared.tabCell}>
          <span className={shared.tabActiveBg} aria-hidden />
          <span className={`${shared.tabBtn} ${shared.tabLabelActive}`} data-node-id="I192:4438;96:29623">
            Подписка
          </span>
        </div>
        <div className={shared.tabCell}>
          <Link href="/profile/my-purchases/history" className={`${shared.tabBtn} ${shared.tabLabelInactive}`} data-node-id="I192:4438;96:29626">
            История
          </Link>
        </div>
      </nav>

      <div className={`${shared.banner} ${shared.banner150}`} data-node-id="192:4420">
        <div className={shared.wave1} data-node-id="192:4421">
          <img alt="" src={WAVE1} />
        </div>
        <div className={shared.wave2} data-node-id="192:4422">
          <img alt="" src={WAVE2} />
        </div>
        <div className={shared.bannerInner} data-node-id="192:4429">
          <p className={shared.bannerTitle} data-node-id="192:4430">
            Клуб Женского Здоровья
          </p>
          <div className={shared.row12}>
            <span className={shared.row12a} data-node-id="192:4432">
              Действовала до
            </span>
            <span className={shared.row12b} data-node-id="192:4433">
              12.09.2026
            </span>
          </div>
          <div className={shared.row12}>
            <span className={shared.row12a} data-node-id="192:4435">
              Стоимость
            </span>
            <span className={shared.row12b} data-node-id="192:4436">
              2 990 ₽ / мес
            </span>
          </div>
          <p className={shared.captionMuted} data-node-id="192:4437">
            Подписка завершена · Автопродление отключено
          </p>
        </div>
      </div>

      <div className={shared.actions} data-node-id="192:4439">
        <Link href="/profile/subscription/restore/1" className={shared.btnPrimary} data-node-id="192:4441">
          <p className={shared.btnPrimaryText} data-node-id="I192:4441;695:4435">
            Восстановить покупку
          </p>
        </Link>
        <Link href="/profile/my-purchases/subscription/info" className={shared.btnOutline} data-node-id="192:4440">
          <p className={shared.btnOutlineText} data-node-id="I192:4440;698:4601">
            Информация о подписке
          </p>
        </Link>
      </div>
    </div>
  );
}
