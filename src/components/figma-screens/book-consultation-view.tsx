"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconArrowBack } from "./icon-arrow-back";
import { IconClock } from "./icon-clock";
import styles from "./book-consultation-view.module.css";

function IconArrowDownSmall() {
  return (
    <span className={styles.arrowDownWrap}>
      <span className={styles.arrowDown}>
        <Image
          src="/icons/figma/dc4508dc1ca821633c49c816fbd159e45cff5484.svg"
          alt=""
          width={18}
          height={18}
          unoptimized
        />
      </span>
    </span>
  );
}

interface DateCellProps {
  day: string;
  date: string;
  selected?: boolean;
  showDot?: boolean;
}

function DateCell({ day, date, selected, showDot }: DateCellProps) {
  return (
    <div
      className={`${styles.dateCell} ${selected ? styles.dateCellSelected : ""}`}
    >
      <p className={styles.dayLabel}>{day}</p>
      <p className={styles.dateNum}>{date}</p>
      {showDot ? (
        <span className={styles.dot}>
          <Image
            src="/icons/figma/1b721019f46e1cd05bd82691da7760a13fa2f50b.svg"
            alt=""
            width={8}
            height={8}
            unoptimized
          />
        </span>
      ) : null}
    </div>
  );
}

export interface BookConsultationViewProps {
  variant: "active" | "disable" | "success";
}

export function BookConsultationView({ variant }: BookConsultationViewProps) {
  const router = useRouter();
  const isSuccess = variant === "success";
  const isDisable = variant === "disable";

  if (isSuccess) {
    return (
      <div className={styles.root}>
        <div className={styles.successHeroWrap}>
          <div className={styles.successHeroInner}>
            <Image
              src="/images/figma/book-consultation-success.png"
              alt=""
              fill
              className={styles.successHeroImg}
              sizes="352px"
              unoptimized
            />
          </div>
        </div>
        <div className={styles.successCopy}>
          <p className={styles.successTitle}>Запись принята</p>
          <p className={styles.successSub}>
            Ожидайте звонок или сообщение{"\n"}для подтверждения консультации
          </p>
        </div>
        <Link href="/home" className={`${styles.cta} ${styles.ctaPrimary}`}>
          На главную
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <IconArrowBack href="/home" />
        <h1 className={styles.headerTitle}>Запись на консультацию</h1>
        <div className={styles.headerSpacer} aria-hidden />
      </header>

      <div className={styles.doctorCard}>
        <div className={styles.doctorRow}>
          <div className={styles.avatar}>
            <Image
              src="/icons/figma/b7b55c2f52420afb6b0c8cdc9adf6d0a731175c2.png"
              alt=""
              fill
              className={styles.avatarImg}
              sizes="48px"
              unoptimized
            />
          </div>
          <div className={styles.doctorText}>
            <p className={styles.doctorName}>Мария Иванова</p>
            <div className={styles.doctorMeta}>
              <p className={styles.doctorRole}>Врач-гинеколог</p>
              <div className={styles.timeRow}>
                <IconClock size={18} />
                <p className={styles.timeText}>60 мин</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.calendarBlock}>
        <div className={styles.monthFilter}>
          <p className={styles.monthLabel}>Апрель</p>
          <IconArrowDownSmall />
        </div>
        <div className={styles.dateRow}>
          <DateCell day="Пн" date="2" showDot />
          <DateCell day="Вт" date="3" />
          <DateCell day="Ср" date="4" selected={!isDisable} showDot />
          <DateCell day="Чт" date="5" />
          <DateCell day="ПТ" date="6" showDot />
          <DateCell day="Sat" date="7" />
        </div>
      </div>

      {!isDisable ? (
        <div className={styles.slotsSection}>
          <p className={styles.slotsLabel}>Доступное время · 8 мая</p>
          <div className={styles.slotsRow}>
            <button type="button" className={styles.slotBtn}>
              11:00
            </button>
            <button type="button" className={`${styles.slotBtn} ${styles.slotBtnFilled}`}>
              14:00
            </button>
            <button type="button" className={styles.slotBtn}>
              16:00
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        className={`${styles.cta} ${isDisable ? styles.ctaMid : styles.ctaPrimary}`}
        onClick={() => {
          if (isDisable) router.push("/book-consultation");
          else router.push("/book-consultation/success");
        }}
      >
        Продолжить
      </button>
    </div>
  );
}
