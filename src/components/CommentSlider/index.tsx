import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Comment from "../CommentCard";

export default function CommentSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const comments = [
    {
      name: "اسم و فامیل",
      role: "سمت/ولی",
      text: "قبل از پی‌آموز، هر ماه چندین ساعت وقت واحد مالی صرف پیگیری شهریه می‌شد. الان بیشتر شهریه‌ها طبق برنامه پرداخت می‌شود و تنش با والدین تقریباً از بین رفته است.",
    },
    {
      name: "اسم و فامیل",
      role: "سمت/ولی",
      text: "قبل از پی‌آموز، هر ماه چندین ساعت وقت واحد مالی صرف پیگیری شهریه می‌شد. الان بیشتر شهریه‌ها طبق برنامه پرداخت می‌شود و تنش با والدین تقریباً از بین رفته است.",
    },
    {
      name: "اسم و فامیل",
      role: "سمت/ولی",
      text: "قبل از پی‌آموز، هر ماه چندین ساعت وقت واحد مالی صرف پیگیری شهریه می‌شد. الان بیشتر شهریه‌ها طبق برنامه پرداخت می‌شود و تنش با والدین تقریباً از بین رفته است.",
    },
    {
      name: "اسم و فامیل",
      role: "سمت/ولی",
      text: "قبل از پی‌آموز، هر ماه چندین ساعت وقت واحد مالی صرف پیگیری شهریه می‌شد. الان بیشتر شهریه‌ها طبق برنامه پرداخت می‌شود و تنش با والدین تقریباً از بین رفته است.",
    },
    {
      name: "اسم و فامیل",
      role: "سمت/ولی",
      text: "قبل از پی‌آموز، هر ماه چندین ساعت وقت واحد مالی صرف پیگیری شهریه می‌شد. الان بیشتر شهریه‌ها طبق برنامه پرداخت می‌شود و تنش با والدین تقریباً از بین رفته است.",
    },
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: -40,
          origin: "center"
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: -35,
          origin: "center",
        },
      },
    },

    slideChanged: (s) => {
      setActiveIndex(s.track.details.rel);
    },
  });

  return (
    <div className={styles.CommentSlider}>
      <div ref={sliderRef} className="keen-slider">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={clsx(
              "keen-slider__slide",
              styles.CarouselSlide,
              index === activeIndex ? styles.AciveSlide : ""
            )}
          >
            <Comment
              name={comment.name}
              role={comment.role}
              text={comment.text}
              variant={index === activeIndex ? "active" : "side"}
            />
          </div>
        ))}
      </div>
      <ChevronRight
        className={styles.RightControl}
        size={35}
        onClick={() => slider.current?.next()}
        strokeWidth={1}
      />
      <ChevronLeft
        className={styles.LeftControl}
        size={35}
        onClick={() => slider.current?.prev()}
        strokeWidth={1}
      />
    </div>
  );
}
