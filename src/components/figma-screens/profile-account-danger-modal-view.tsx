import Link from "next/link";
import { ProfileFigmaView } from "@/components/figma-screens/profile-figma-view";
import { NavigationBar } from "@/components/ui/navigation-bar";
import styles from "./profile-account-danger-modal-view.module.css";

export type ProfileAccountDangerModalVariant = "delete" | "logout";

interface ProfileAccountDangerModalViewProps {
  variant: ProfileAccountDangerModalVariant;
}

/**
 * Figma 92:24979 — Profile + delete account dialog.
 * Figma 92:25269 — Profile + log out dialog.
 */
export function ProfileAccountDangerModalView({ variant }: ProfileAccountDangerModalViewProps) {
  const rootNode = variant === "delete" ? "92:24979" : "92:25269";

  return (
    <div className={styles.viewport} data-node-id={rootNode}>
      <div className={styles.scroll}>
        <div className={styles.scrollInner}>
          <ProfileFigmaView layout="deleteModalChrome" />
        </div>
      </div>

      <div className={styles.navSlot} data-name="Navigation Bar">
        <NavigationBar active="profile" />
      </div>

      <div className={styles.overlay} data-node-id={variant === "delete" ? "192:4673" : "92:25558"} aria-hidden />

      {variant === "delete" ? (
        <div className={styles.dialogDelete} data-node-id="92:25254" role="dialog" aria-modal="true" aria-labelledby="del-title">
          <div className={styles.deleteTextBlock} data-node-id="92:25255">
            <div className={styles.deleteTitles} data-node-id="92:25256">
              <p className={styles.deleteTitle} id="del-title" data-node-id="92:25257">
                Вы уверены, что хотите удалить этот аккаунт?
              </p>
              <p className={styles.deleteHint} data-node-id="92:25258">
                Пожалуйста, введите «НАВСЕГДА»{"\n"}в поле ниже
              </p>
            </div>
            <div className={styles.deleteInput} data-node-id="192:4668">
              <p className={styles.deleteInputText} data-node-id="192:4670">
                НАВСЕГДА
              </p>
            </div>
          </div>
          <button type="button" className={styles.btnDeleteSubmit} data-node-id="192:4660">
            <span className={styles.btnDeleteSubmitText} data-node-id="192:4662">
              Удалить
            </span>
          </button>
        </div>
      ) : (
        <div className={styles.dialogLogout} data-node-id="92:25559" role="dialog" aria-modal="true" aria-labelledby="logout-title">
          <div className={styles.logoutTitleBlock} data-node-id="92:25560">
            <p className={styles.logoutTitle} id="logout-title" data-node-id="92:25562">
              Вы уверены, что хотите выйти из системы?
            </p>
            <p className={styles.logoutSub} data-node-id="92:25563">
              Не позволяйте себе перегружаться
            </p>
          </div>
          <div className={styles.logoutActions} data-node-id="92:25564">
            <Link href="/profile" className={styles.btnLogoutOutline} data-node-id="92:25566">
              <span className={styles.btnLogoutOutlineText} data-node-id="I92:25566;698:4637">
                Отменить
              </span>
            </Link>
            <Link href="/login" className={styles.btnLogoutPrimary} data-node-id="92:25565">
              <span className={styles.btnLogoutPrimaryText} data-node-id="I92:25565;695:4506">
                Выйти
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
