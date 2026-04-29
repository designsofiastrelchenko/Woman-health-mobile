/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import typography from "@/design-system/typography.module.css";
import { IconArrowBack } from "@/components/figma-screens/icon-arrow-back";
import { ProfileFigmaStatusBar } from "@/components/figma-screens/profile-figma-status-bar";
import shared from "./profile-my-purchases-shared.module.css";

const WAVE1 = "/icons/figma/d0db789a5ca293048e53140bcaf4407a42fae4d1.svg";
const WAVE2 = "/icons/figma/9fe5f4d4c510794a6a3d0ab7f5f82dc277c80fd9.svg";

/** Figma 97:29966 — My purchases / Subscription. */
export function ProfileMyPurchasesSubscriptionView() {
  return (
    <div className={shared.root812} data-node-id="97:29966">
      <ProfileFigmaStatusBar variant="ios125" className={shared.status} />

      <header className={shared.head}>
        <IconArrowBack href="/profile" label="Назад" />
        <h1 className={`${typography.heading3} ${shared.headTitle}`} data-node-id="97:29970">
          Мои покупки
        </h1>
        <div className={shared.headGhost} aria-hidden />
      </header>

      <nav className={shared.tabs} aria-label="Раздел покупок" data-node-id="192:4367">
        <div className={shared.tabCell}>
          <span className={shared.tabActiveBg} aria-hidden />
          <span className={`${shared.tabBtn} ${shared.tabLabelActive}`} data-node-id="I192:4367;96:29623">
            Подписка
          </span>
        </div>
        <div className={shared.tabCell}>
          <Link href="/profile/my-purchases/history" className={`${shared.tabBtn} ${shared.tabLabelInactive}`} data-node-id="I192:4367;96:29626">
            История
          </Link>
        </div>
      </nav>

      <div className={`${shared.banner} ${shared.banner140}`} data-node-id="97:30694">
        <div className={shared.wave1} data-node-id="97:30695">
          <img alt="" src={WAVE1} />
        </div>
        <div className={shared.wave2} data-node-id="97:30696">
          <img alt="" src={WAVE2} />
        </div>
        <div className={shared.bannerInner} data-node-id="97:30703">
          <p className={shared.bannerTitle} data-node-id="97:30704">
            Клуб Женского Здоровья
          </p>
          <div className={shared.row12}>
            <span className={shared.row12a} data-node-id="97:30711">
              Следующее списание
            </span>
            <span className={shared.row12b} data-node-id="97:30713">
              12.09.2026
            </span>
          </div>
          <div className={shared.row12}>
            <span className={shared.row12a} data-node-id="97:30717">
              Стоимость
            </span>
            <span className={shared.row12b} data-node-id="97:30718">
              2 990 ₽ / мес
            </span>
          </div>
          <p className={shared.captionMuted} data-node-id="97:30705">
            Активная подписка · Автопродление
          </p>
        </div>
      </div>

      <div className={shared.actions} data-node-id="192:4404">
        <div className={shared.btnPrimary} data-node-id="192:4406" role="presentation">
          <p className={shared.btnPrimaryText} data-node-id="I192:4406;695:4435">
            Отменить подписку
          </p>
        </div>
        <Link href="/profile/my-purchases/subscription/info" className={shared.btnOutline} data-node-id="192:4405">
          <p className={shared.btnOutlineText} data-node-id="I192:4405;698:4601">
            Информация о подписке
          </p>
        </Link>
      </div>
    </div>
  );
}
