import CheckmarkBagIcon from "@/assets/icons/chekmarkBag.svg?react";
import TimelineIcon from "@/assets/icons/timeline.svg?react";
import CalenderIcon from "@/assets/icons/calender.svg?react";
import SchoolIcon from "@/assets/icons/school.svg?react";
import ParentIcon from "@/assets/icons/parent.svg?react";
import CashIcon from "@/assets/icons/cash.svg?react";
import ProfitIcon from "@/assets/icons/profit.svg?react";

export const steps = [
  "ورود با کد ملی ولی و شماره موبایل",
  "اتصال به مدرسه فرزند(خودکار با وارد کردن کد مدرسه)",
  "انتخاب پلن اقساط(مثلاً ۱۲ / ۹ / ۶ / ۳ قسط)",
  "پرداخت قسط اول و مشاهده برنامه اقساط",
];

export const assurances = [
  "اعتبارسنجی و عقد قرارداد از طریق بانک/نهاد مالی همکار",
  "تسویه شهریه فقط به حساب مدرسه واریز می‌شود",
  "استفاده از سرویس‌های رسمی احراز هویت و استعلام (کد ملی، شغلی و…)",
  "اطلاعات دانش‌آموزان صرفاً برای مدیریت شهریه استفاده می‌شود و در اختیار هیچ سرویس تبلیغاتی قرار نمی‌گیرد",
];

export const faqs = {
  parents: [
    {
      question: "اگر مدرسه فرزندم در پی آموز ثبت نشده باشد چه کار کنم؟",
      answer:
        "در این صورت می‌توانید از طریق بخش تماس با ما، مشخصات مدرسه را ارسال کنید تا تیم پی‌آموز در سریع‌ترین زمان ممکن با مدرسه ارتباط برقرار کند.",
    },
    {
      question: "برای استفاده از اقساط نیاز به چک و ضامن دارم؟",
      answer:
        "خیر، استفاده از خدمات اقساط پی‌آموز بدون نیاز به چک و ضامن انجام می‌شود و تنها اعتبارسنجی آنلاین صورت می‌گیرد.",
    },
    {
      question: "اگر یک قسط را دیر پرداخت کنم چه اتفاقی می افتد؟",
      answer:
        "در صورت تأخیر، جریمه دیرکرد مطابق قوانین سیستم محاسبه می‌شود و امکان استفاده از خدمات جدید تا تسویه وجود نخواهد داشت.",
    },
  ],

  schools: [
    {
      question: "برای شروع همکاری چه مدارکی لازم است؟",
      answer:
        "مدارس باید مجوز رسمی آموزش، اطلاعات حساب بانکی و مشخصات مدیر مدرسه را ارائه دهند.",
    },
    {
      question: "پی آموز با چه بانک هایی کار میکند؟",
      answer:
        "پی‌آموز با اکثر بانک‌های معتبر کشور همکاری دارد و لیست بانک‌ها در پنل مدارس قابل مشاهده است.",
    },
    {
      question:
        "مدرسه میتواند مدل های مختلف اقساط برای پایه های متفاوت تعریف کند؟",
      answer:
        "بله، مدارس می‌توانند برای هر پایه تحصیلی یا خدمات مختلف، مدل اقساط جداگانه تعریف کنند.",
    },
  ],
};

export const plans = [
  {
    variant: "normal" as const,
    icon: <CheckmarkBagIcon />,
    title: "تسویه آنی",
    features: [
      {
        text: "بخش قابل توجهی از شهریه در ابتدای سال به مدرسه پرداخت می‌شود",
      },
      {
        text: "مناسب مدارسی که به نقدینگی سریع نیاز دارند",
      },
    ],
  },
  {
    variant: "recommended" as const,
    icon: <TimelineIcon />,
    title: "تسویه چندمرحله‌ای",
    badgeLabel: "پیشنهاد پی‌آموز",
    features: [
      {
        text: "تسویه در چند مرحله از سال (مثلاً ابتدای هر ترم)",
        variant: "secondary" as const,
      },
      {
        text: "تعادل بین کارمزد، نقدینگی و ریسک",
        variant: "secondary" as const,
      },
    ],
  },
  {
    variant: "normal" as const,
    icon: <CalenderIcon />,
    title: "تسویه همزمان با اقساط",
    features: [
      {
        text: "تسویه متناسب با پرداخت اقساط والدین",
      },
      {
        text: "کارمزد پایین‌تر، مناسب مدارس با وضعیت مالی پایدارتر",
      },
    ],
  },
];

export const metrics = [
  {
    icon: <SchoolIcon />,
    value: "+۱۰۰",
    label: "تعداد مدارس فعال",
  },
  {
    icon: <ParentIcon />,
    value: "+۱۰۰",
    label: "تعداد خانواده‌های استفاده‌کننده",
  },
  {
    icon: <CashIcon />,
    value: "+۱۰۰",
    label: "مجموع شهریه مدیریت‌شده",
  },
  {
    icon: <ProfitIcon />,
    value: "٪۹۶",
    label: "نرخ وصول شهریه",
  },
];
