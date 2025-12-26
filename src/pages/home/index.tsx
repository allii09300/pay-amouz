import styles from "./styles.module.scss";
import { useState } from "react";
import BooksImg from "@/assets/images/Books.png";
import ParentImg from "@/assets/images/parent.png";
import MobilePaymentImg from "@/assets/images/mobilePayment.png";
import CalculatorIcon from "@/assets/icons/calculator.svg?react";
import { ChevronDown } from "lucide-react";
import { steps, plans, metrics, assurances, faqs } from "./data";
import { calculateInstallment } from "@/utils/installmentcaculator";
import { formatNumberToPersian } from "@/utils/formatNumber";
import Button from "@/components/Button";
import AudienceCard from "@/components/AudienceCard";
import IndexBadge from "@/components/IndexBadge";
import ChevronWrapper from "@/components/ChevronWrapper";
import PlanCard from "@/components/PlanCard";
import MetricCard from "@/components/MetricCard";
import CheckBadge from "@/components/CheckBadge";
import Input from "@/components/Input";
import CommentSlider from "@/components/CommentSlider";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

export default function HomePage() {
  const [tuition, setTuition] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [result, setResult] = useState<{
    totalAmount: number;
    perInstallment: number;
  }>({ totalAmount: 0, perInstallment: 0 });

  const handleTuitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTuition(value);

    if (months && value) {
      setResult(calculateInstallment(Number(value), Number(months)));
    } else {
      setResult({ totalAmount: 0, perInstallment: 0 });
    }
  };

  const handleMonthsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setMonths(value);

    if (tuition && value) {
      setResult(calculateInstallment(Number(tuition), Number(value)));
    } else {
      setResult({ totalAmount: 0, perInstallment: 0 });
    }
  };

  return (
    <div className={styles.Home}>
      <div className={styles.HeroSection}>
        <div className={styles.IntroBlock}>
          <div className={styles.Branding}>
            <p className={styles.AppName}>پی آموز</p>
            <p className={styles.Slogan}>
              سامانه هوشمند اقساط شهریه مدارس با تسویه امن بانکی
            </p>
            <p className={styles.DescriptionText}>
              پی‌آموز به مدارس کمک می‌کند شهریه را زودتر و مطمئن‌تر دریافت کنند،
              و به خانواده‌ها این امکان را می‌دهد که شهریه را در چند قسط منطقی و
              بدون دردسر پرداخت کنند.
            </p>
          </div>
          <div className={styles.ActionGroup}>
            <Button>
              <p className={styles.Label}>شروع همکاری مدارس</p>
              <ChevronWrapper />
            </Button>
            <Button variant="secondary">
              <p className={styles.Label}>درخواست دمو</p>
              <ChevronWrapper />
            </Button>
          </div>
        </div>
        <img className={styles.HeroImage} src={BooksImg} alt="Books image" />
      </div>
      <div className={styles.BenefitSection}>
        <p className={styles.Title}>
          چرا پی آموز برای مدرسه و والدین مفید است؟
        </p>
        <p className={styles.SubTitle}>چرا پی آموز برای من خوب است؟</p>
      </div>
      <div className={styles.AudienceShowcase}>
        <AudienceCard
          title="برای مدارس"
          summary="درامد قابل پیشبینی و بدون تنش"
          benefits={[
            {
              text: "دریافت بخشی از شهریه در ابتدای سال، بدون نگرانی از تاخیر",
              first: true,
            },
            { text: "کاهش شدید پیگیری تلفنی و حضوری شهریه" },
            { text: "حذف چک های پر ریسک و مدیریت سنتی اقساط" },
            { text: "داشبورد یکپارچه برای مشاهده وضعیت پرداخت ها" },
          ]}
        />

        <AudienceCard
          title="برای والدین"
          summary="پرداخت آسان و مرحله ای شهریه"
          benefits={[
            { text: "امکان پرداخت شهریه در چند قسط قابل مدیریت" },
            { text: "فرایند انلاین و بدون نیاز به مراجعه حضوری" },
            { text: "شفافیت در مجموع مبلغ، تعداد اقساط و سررسید ها" },
            { text: "یادآوری خودکار اقساط و جلوگیری از فراموشی" },
          ]}
        />
      </div>
      <div className={styles.ProcessSection}>
        <div className={styles.IntroColumn}>
          <div className={styles.TitleBlock}>
            <p className={styles.MainHeading}>پی آموز چگونه کار میکند؟</p>
            <p className={styles.SummaryText}>
              دو مسیر ساده برای مدارس و خانواده ها؛ همه چیز از طریق یک سامانه
              واحد
            </p>
          </div>
          <div className={styles.UserFlowSelector}>
            <Button size="large">
              <p className={styles.Label}>مسیر والدین</p>
            </Button>
            <Button size="large" variant="soft">
              <p className={styles.Label}>مسیر مدارس</p>
            </Button>
          </div>
        </div>
        <div className={styles.FlowLane}>
          <div className={styles.SequencePanel}>
            <p className={styles.LaneHeading}>مسیر والدین</p>

            <div className={styles.StepList}>
              {steps.map((step, index) => (
                <div className={styles.ActionItem} key={index}>
                  <IndexBadge>{index + 1}</IndexBadge>
                  <div className={styles.Description}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          <img
            className={styles.IllustrationImage}
            src={ParentImg}
            alt="Parent"
          />
        </div>
      </div>
      <div className={styles.CollaborationSection}>
        <p className={styles.SectionHeading}>مدل‌های همکاری با مدارس</p>
        <div className={styles.PlanGallery}>
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              variant={plan.variant}
              icon={plan.icon}
              title={plan.title}
              features={plan.features}
              badgeLabel={plan.badgeLabel}
            />
          ))}
        </div>
      </div>
      <div className={styles.MetricShowcase}>
        {metrics.map((item, index) => (
          <MetricCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
      <div className={styles.TrustSection}>
        <div className={styles.ContentColumn}>
          <p className={styles.Heading}>امنیت و حریم خصوصی در پی‌آموز</p>
          <div className={styles.AssuranceList}>
            {assurances.map((text, index) => (
              <div key={index} className={styles.Item}>
                <CheckBadge />
                <p className={styles.Text}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          className={styles.IllustrationAsset}
          src={MobilePaymentImg}
          alt="mobile payment"
        />
      </div>
      <div className={styles.InstallmentCalculator}>
        <div className={styles.IntroSection}>
          <CalculatorIcon className={styles.PromoIcon} />
          <p className={styles.MainHeading}>ماشین حساب اقساط</p>
          <p className={styles.SubHeading}>
            مبلغ شهریه و تعداد اقساط را وارد کنید تا ببینید هر قسط تقریبا چقدر
            طول می‌کشد.
          </p>
        </div>

        <div className={styles.InputSection}>
          <Input
            label="مبلغ شهریه"
            type="number"
            value={tuition}
            onChange={handleTuitionChange}
          />

          <label className={styles.InstallmentLabel}>
            تعداد اقساط
            <div className={styles.SelectBox}>
              <select
                className={styles.DropdownField}
                onChange={handleMonthsChange}
              >
                <option value="" disabled selected hidden></option>
                <option value="3">۳</option>
                <option value="6">۶</option>
                <option value="9">۹</option>
                <option value="12">۱۲</option>
              </select>
              <ChevronDown
                className={styles.DropdownIcon}
                size={28}
                strokeWidth={1}
              />
            </div>
          </label>
        </div>

        <div className={styles.ResultSection}>
          <div className={styles.InstallmentSummary}>
            <p className={styles.Label}>مبلغ تقریبی هر قسط</p>
            <p className={styles.Value}>
              {formatNumberToPersian(result.perInstallment)}
            </p>
          </div>

          <div className={styles.PaymentSummary}>
            <p className={styles.Label}>مجموع پرداخت</p>
            <p className={styles.Value}>
              {formatNumberToPersian(result.totalAmount)}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.TestimonialSection}>
        <p className={styles.Heading}>نظرات عزیزانی که به ما اعتماد کردند</p>
        <CommentSlider />
      </div>
      <div className={styles.FAQSection}>
        <p className={styles.SectionHeading}>سوالات پرتکرار</p>

        <div className={styles.QuestionPanel}>
          <div className={styles.ParentsGroup}>
            <p className={styles.Title}>برای والدین</p>
            <Accordion className={styles.AccordionWrapper}>
              {faqs.parents.map((question, index) => (
                <AccordionItem key={index} className={styles.Item}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={styles.InquiryTrigger}>
                      <p className={styles.EntryLabel}>{question}</p>
                      <ChevronDown
                        className={styles.EntryIcon}
                        size={30}
                        strokeWidth={1}
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className={styles.SchoolsGroup}>
            <p className={styles.Title}>برای مدارس</p>
            <Accordion className={styles.AccordionWrapper}>
              {faqs.schools.map((question, index) => (
                <AccordionItem key={index} className={styles.Item}>
                  <AccordionItemHeading>
                    <AccordionItemButton className={styles.EntryButton}>
                      <p className={styles.Label}>{question}</p>
                      <ChevronDown
                        className={styles.Icon}
                        size={30}
                        strokeWidth={1}
                      />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
