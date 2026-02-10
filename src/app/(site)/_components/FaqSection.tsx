"use client";
import { useEffect } from "react";

export default function FaqSection() {
  useEffect(() => {
    const questions = document.querySelectorAll(".faq-q-icon-container");
    const answers = document.querySelectorAll(".faq-ans");

    const handlers: any[] = [];

    questions.forEach((question) => {
      const handler = () => {
        answers.forEach((ans: any) => (ans.style.display = "none"));
        questions.forEach((q) => q.classList.remove("open"));

        questions.forEach((q) => {
          const icon: any = q.querySelector(".icon-14");
          if (icon) {
            icon.style.transform = "rotate(0deg)";
            icon.style.transition = "all 0.4s ease";
          }
        });

        if (!question.classList.contains("open")) {
          question.classList.add("open");

          const next: any = question.nextElementSibling;
          if (next && next.classList.contains("faq-ans")) {
            next.style.display = "block";
          }

          const icon: any = question.querySelector(".icon-14");
          if (icon) {
            icon.style.transform = "rotate(180deg)";
            icon.style.transition = "all 0.4s ease";
          }
        }
      };

      question.addEventListener("click", handler);
      handlers.push({ question, handler });
    });

    return () => {
      handlers.forEach(({ question, handler }) => {
        question.removeEventListener("click", handler);
      });
    };
  }, []);
  return (
    <>
      <div id="faqs" data-sectionid="sections" className="faq-section">
        <div className="faq-main-container">
          <h2 className="faq-main-heading">Frequently Asked Questions</h2>
          <div className="faqs-all-tabs-main-container">
            <div
              data-duration-in="300"
              data-duration-out="100"
              data-current="Tab 3"
              data-easing="ease"
              className="tabs-13 w-tabs"
            >
              <div className="faqs-all-tabs w-tab-menu">
                <a
                  data-w-tab="Tab 3"
                  id="training-details-tab-faqs"
                  className="faq-tab-link track-button w-inline-block w-tab-link w--current"
                >
                  <div>Training Details</div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  id="eligibility-tab-faqs"
                  className="faq-tab-link track-button w-inline-block w-tab-link"
                >
                  <div>Eligibility</div>
                </a>
                <a
                  data-w-tab="Tab 4"
                  id="placement-support-tab-faqs"
                  className="faq-tab-link track-button w-inline-block w-tab-link"
                >
                  <div>Placement Support</div>
                </a>
                <a
                  data-w-tab="Tab 7"
                  id="irc-tab-faqs"
                  className="faq-tab-link track-button w-inline-block w-tab-link"
                >
                  <div>IRC</div>
                </a>
                <a
                  data-w-tab="Tab 6"
                  id="fee-tab-faqs"
                  className="faq-tab-link track-button w-inline-block w-tab-link"
                >
                  <div>Fee</div>
                </a>
              </div>
              <div className="faqs-tab-content-2 w-tab-content">
                <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                  <div className="question-answers-container">
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="what-is-the-duration-of-the-program-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          What is the duration of the program?
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            The Fundamentals phase usually takes 2 months,
                            followed by a 6-month job track, either MERN Full
                            Stack or Java Full Stack. While learning, you’ll
                            work on multiple real-world projects to build a
                            portfolio that you can showcase to recruiters, and
                            you’ll also receive continuous placement support
                            until you secure a job, including resume guidance,
                            mock interviews, and interview preparation. The
                            program is self-paced, so you can learn at your own
                            convenience.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="what-is-the-nxtwave-intensive-curriculum-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          What is the NxtWave Intensive curriculum? Why is it so
                          successful in getting tech jobs?
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            The NxtWave Intensive curriculum is a
                            reverse-engineered, industry-aligned program created
                            by gathering insights from 3,000+ hiring companies
                            to understand the exact skills they look for. It
                            takes you from zero coding knowledge to building
                            real-world projects, starting with Fundamentals and
                            then moving to a job track, either MERN Full Stack
                            or Java Full Stack, based on your fundamentals exam.
                            You’ll build projects like a mini-Zomato app, a
                            social feed app, and a portfolio website, while
                            coding practice, assessments, and mock tests prepare
                            you for interviews.{" "}
                          </p>
                          <p className="faq-ans-p">
                            This is why 100+ companies come to hire from NxtWave
                            every month, and 1000s of students have already
                            landed tech jobs
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="why-is-everyone-saying-nxtwave-online-sessions-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Why is NxtWave’s Intensive program so effective?
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            NxtWave is not just about classes. It’s a complete
                            learning ecosystem designed to make you job-ready,
                            not just course completed.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            Here&#x27;s how it works:
                            <br />
                            <strong>Learn → Practice → Apply: </strong>
                            <br />
                            Every concept is followed by hands-on coding
                            practice in 24x7 labs in our advanced learning
                            portal.
                          </p>
                          <p className="faq-ans-p">
                            <strong>Live doubt support (11 AM – 8 PM):</strong>
                            <br />
                            You don’t stay stuck. Domain experts clear your
                            doubts fast.
                          </p>
                          <p className="faq-ans-p">
                            <strong>Dedicated Success Coach: </strong>
                            <br />
                            You get personal guidance to stay on track and
                            maintain consistency.
                          </p>
                          <p className="faq-ans-p">
                            <strong>Vernacular learning: </strong>
                            <br />
                            Concepts are explained in your mother tongue, making
                            even complex topics easy to understand.
                          </p>
                          <p className="faq-ans-p">
                            <strong>Cheat sheets &amp; summary notes:</strong>
                            <br />
                            No need to prepare notes manually; key concepts are
                            already organised for you.
                          </p>
                          <p className="faq-ans-p">
                            With this support, 1000s of students have already
                            secured tech jobs.
                          </p>
                          <p className="faq-ans-p">
                            Read more success stories here:{" "}
                            <a
                              id="reviews-everyone-saying-nxtwave-training-details-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="how-flexible-are-the-timings-of-nxtWave-intensive-program-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How flexible are the timings of NxtWave Intensive
                          program?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            You have the flexibility to learn at your convenient
                            time and pace. However, we suggest you stick to a
                            consistent time every day. Only when online live
                            webinars happen, you need to attend them at a
                            particular time. Mostly such webinars happen during
                            weekends or in the evenings of working days. All the
                            learning modules are very interactive.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="what-if-i-get-doubts-while-learning-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How can I clarify my doubts while learning?
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            It’s natural to have doubts while learning. At
                            NxtWave, you can get help through live doubt
                            sessions and the discussion forum, with domain
                            experts available from 11 AM to 8 PM. You can post
                            questions anytime and also refer to other learners’
                            discussions to understand concepts quickly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="why-isit-recommended-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Why is it recommended that you learn right from
                          fundamentals at NxtWave Intensive?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            In any skill, when you&#x27;re strong with the
                            fundamentals, you learn quickly and master it
                            faster. And software development is no exception. If
                            you build solid foundations, you can learn advanced
                            concepts, languages and frameworks easily.
                          </p>
                          <p className="faq-ans-p">
                            So we recommend that you learn right from
                            fundamentals at NxtWave Intensive even though you
                            have undergone training at another learning program.
                            It is because you learn programming in a
                            non-conventional way here that helps you develop the
                            thinking patterns of a world-class developer.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer last-child">
                      <div
                        id="how-can-i-learn-along-with-my-college-training-details-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How can I learn along with my college or office?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Learning in NxtWave Intensive is self-paced. You can
                            join the program and learn after your working
                            hours/regular college hours and on weekends.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                  <div className="question-answers-container">
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="why-anyone-looking-for-a-tech-job-eligibility-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Why anyone looking for a tech job can join the program
                          without worrying about their background?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            NxtWave Intensive program is designed to get anyone
                            ready for a tech job within a short time. Your
                            degree, branch, marks, or backlogs — nothing is a
                            barrier to join the program and get a tech job. You
                            need not have any previous coding knowledge. You’ll
                            learn everything from scratch.
                          </p>
                          <p className="faq-ans-p">
                            You may be afraid of coding due to your previous
                            experiences. But our passionate trainers will
                            simplify every concept and teach by integrating
                            science-backed methods. So you&#x27;ll understand
                            concepts easily, and they stick in your mind
                            instantly. It’s one of the reasons why many of your
                            friends are recommending that you join NxtWave
                          </p>
                          <p className="faq-ans-p">
                            Within 2-3 weeks at NxtWave, you’ll become amazingly
                            confident about skills and fall in love with
                            software development. By the time you complete the
                            program, you’ll reach a stage where companies
                            compete for you.
                          </p>
                          <p className="faq-ans-p">
                            It’s because you’ll build industry-aligned real-time
                            projects during the program and develop a strong
                            personal portfolio. Due to this, your background
                            (degree, marks, backlogs etc.) becomes insignificant
                            before your skills.
                          </p>
                          <p className="faq-ans-p">
                            Hundreds of NxtWave learners have proved that
                            nothing matters to get a tech job except your
                            willingness to learn. Read their inspiring success
                            stories here:{" "}
                            <a
                              id="reviews-why-anyone-looking-for-a-tech-job-eligibility-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                          </p>
                          <p className="faq-ans-p">
                            The program is most suitable for final year
                            students, job seekers, and those looking to switch
                            to a tech career.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="how-are-many-graduates-with-ba-bcom-bsc-mba-degrees-eligibility-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How are many graduates with B.A, B.Com, BSc, MBA
                          degrees getting tech jobs?{" "}
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Your degree is not a barrier to get a tech job. It’s
                            because companies look for candidates with practical
                            skills. As you’ll build many real-world projects
                            during the program, your resume will become very
                            powerful. And many NxtWave learners have proved it
                            by getting placed on par with those who hold a
                            Computer Science degree.
                          </p>
                          <p className="faq-ans-p">
                            For example, Sonali, a NxtWave Intensive learner who
                            has a specialization in Chemistry got a tech job
                            with ₹7 Lakhs annual salary at ADF, a US-based tech
                            company.
                          </p>
                          <p className="faq-ans-p">
                            Similarly, there are many such successful career
                            transformation stories. You can read them here:{" "}
                            <a
                              id="reviews-how-are-many-graduates-eligibility-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="even-with-career-gap-how-many-graduates-getting-tech-job-eligibility-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Even with a career gap, how are many graduates getting
                          a tech job?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Your career gap is not a barrier to getting a tech
                            job. It’s because companies need candidates with
                            practical skills. As you’ll build many real-world
                            projects during the program, you’ll develop skills
                            that companies look for. Similarly, there are many
                            such successful career transformation stories of
                            graduates with gaps in their resumes. You can read
                            their reviews and success stories here:{" "}
                            <a
                              id="reviews-even-with-career-gap-eligibility-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            So, you’ll have a good possibility to get hired by
                            companies that are not concerned with your career
                            gap. Though opportunities for candidates with career
                            gaps are relatively lesser than recent graduates,
                            there are many opportunities even then.
                          </p>
                          <p className="faq-ans-p">
                            For example, <strong>Sindhu Nangunuri</strong>, a
                            NxtWave learner graduated in 2014. She resigned from
                            her job in 2016 to prepare for government exams.
                            Later, she got married and couldn&#x27;t pursue a
                            career as she took care of her family.{" "}
                            <strong>
                              She lost nearly 6 years before joining NxtWave in
                              2022
                            </strong>
                            . Later Sindhu got
                            <strong>
                              placed as Associate Engineer at Lloyds Technology
                              Centre in 2023
                            </strong>
                            .
                          </p>
                          <p className="faq-ans-p">
                            You can read her journey here:{" "}
                            <a
                              id="linkedin-even-with-career-gap-eligibility-tab-faqs"
                              href="https://www.linkedin.com/posts/sindhu-nangunuri_success-professionalwomen-transformation-activity-7176138890053849088-Duxw/?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              target="_blank"
                              rel="nofollow"
                              className="link-89 track-button"
                            >
                              https://www.linkedin.com/posts/sindhu-nangunuri_success-professionalwomen-transformation-activity-7176138890053849088-Duxw/
                            </a>
                          </p>
                          <p className="faq-ans-p">
                            Similarly, there are many such successful career
                            transformation stories of graduates with gaps in
                            their resumes. You can read their reviews and
                            success stories here:{" "}
                            <a
                              id="reviews-2-even-with-career-gap-eligibility-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="how-many-non-cs-branch-graduates-getting-tech-jobs-eligibility-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How are many Non-CS branch (Mech, Civil, ECE, EEE,
                          Chemical) graduates getting tech jobs?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Your branch is not a barrier to get a tech job. It’s
                            because companies look for candidates with practical
                            skills. As you’ll build many real-world projects
                            during the program, your resume will become so
                            powerful that your branch will become insignificant
                            before your skills. And many NxtWave learners have
                            proved it by getting placed on par with Computer
                            Science students.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            For example, Sushanth is a civil engineering
                            graduate. After building programming skills from
                            scratch at NxtWave, he cleared his first-ever tech
                            interview in the first attempt itself. Now, he got
                            placed as a Full Stack Developer at needl.ai with
                            ₹11 lakhs per annum salary.
                          </p>
                          <p className="faq-ans-p">
                            Similarly, hundreds of non-CS graduates got tech
                            jobs with NxtWave Intensive. You can read their
                            reviews and success stories here:{" "}
                            <a
                              id="reviews-how-many-non-cs-branch-graduates-eligibility-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89"
                            >
                              https://www.ccbp.in/reviews
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer last-child">
                      <div
                        id="do-i-need-a-laptop-to-attend-nxtwave-intensive-program-eligibility-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Do I need a laptop to attend NxtWave Intensive
                          program?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Yes, you need a laptop to learn effectively. While
                            you can attend sessions, participate in quizzes on
                            your mobile, you will need a laptop to work on
                            coding assignments and projects.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            <strong>
                              Recommended Specifications:
                              <br />‍
                            </strong>
                            Windows 10/Ubuntu/macOS
                            <br /> 8GB RAM
                            <br />
                            SSD
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 4" className="w-tab-pane">
                  <div className="question-answers-container">
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="how-long-will-i-receive-the-placement-support-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          How long will I receive the placement support?
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            After finishing your chosen job track, you’ll get
                            continuous support to land a tech job. This includes
                            aptitude and communication training, resume help,
                            and mock interviews. You can attend as many
                            interviews as needed, and NxtWave will keep
                            arranging opportunities until you get placed.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            Even though the standard support is 16 months, if
                            you haven’t landed a job by then, we’ll check your
                            progress and guide you further. So far, we have
                            helped 1000s of students from different backgrounds
                            successfully get tech jobs in 2000+ companies.{" "}
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            Read their stories here:{" "}
                            <a
                              id="reviews-the-placement-support-tab-faqs"
                              href="https://www.ccbp.in/reviews?utm_source=seo&amp;utm_medium=website_faq&amp;utm_campaign=seo_leadgen_intensive_fsd-course-pages_faq-section"
                              className="link-89 track-button"
                            >
                              {" "}
                              https://www.ccbp.in/reviews
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer last-child">
                      <div
                        id="do-i-have-to-take-the-first-job-i-m-offered-placement-support-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Do I have to take the first job I&#x27;m offered?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Yes. Once the placement process begins, we will
                            recommend you to MNCs and startups in our network.
                            You need to accept the job offer if you clear the
                            selection process.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 7" className="w-tab-pane">
                  <div className="question-answers-container">
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="what-is-irc-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h3 className="faq-q-h">
                          What is IRC?{" "}
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h3>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            IRC stands for Industry Ready Certification. Unlike
                            any other study certificate, IRC represents your
                            readiness for a job and approves that you have
                            skills that companies look for.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            NxtWave is one of the very few EdTech companies that
                            is an Official Partner for{" "}
                            <em>
                              NSDC, under the Ministry of Skill Development
                              &amp; Entrepreneurship, Govt. of India.
                            </em>
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            Your skills will be jointly certified by NxtWave and
                            NSDC. It means you‘ll become more in demand for
                            companies that hire NxtWave learners.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer last-child">
                      <div
                        id="why-is-irc-more-powerful-than-regular-study-certificates-irc-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Why is IRC more powerful than regular study
                          certificates?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            It’s because an individual gets an IRC only after
                            completing industry-aligned projects, assignments
                            and tests designed by world-class developers in the
                            NxtWave curriculum.
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            NxtWave is one of the very few EdTech companies that
                            is an Official Partner for{" "}
                            <strong>
                              <em>
                                NSDC, under the Ministry of Skill Development
                                &amp; Entrepreneurship, Govt. of India.
                              </em>
                            </strong>
                            <br />
                          </p>
                          <p className="faq-ans-p">
                            Governments/Govt. Organizations recognize only those
                            training programs that are proven to bring results
                            after an extensive evaluation process. So if you
                            hold a certificate recognized by NSDC, companies
                            have greater trust in your skills. It gives you an
                            edge during interviews.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 6" className="w-tab-pane">
                  <div className="question-answers-container">
                    <div className="faq-qaa-main-conatainer">
                      <div
                        id="is-there-an-emi-option-to-pay-the-fee-for-nxtwave-intensive-fee-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          Is there an EMI option to pay the fee for NxtWave
                          Intensive?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Yes, EMI support is available for credit cards.
                            Please select the EMI option while making payment
                            for more information.
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-qaa-main-conatainer last-child">
                      <div
                        id="what-are-the-terms-of-the-refund-fee-tab-faqs"
                        className="faq-q-icon-container track-button"
                      >
                        <h4 className="faq-q-h">
                          What are the terms of the refund?
                          <strong className="bold-text-132">
                            <br />
                          </strong>
                        </h4>
                        <div className="icon-14">
                          <div className="faq-dropdown-arrow"></div>
                        </div>
                      </div>
                      <div className="faq-ans">
                        <div className="faq-anws-container">
                          <p className="faq-ans-p">
                            Please check the refund policy here:{" "}
                            <a
                              id="terms-and-conditions-the-refund-fee-tab-faqs"
                              href="https://www.ccbp.in/terms-and-conditions#payments"
                              target="_blank"
                              className="link-88 track-button"
                            >
                              https://www.ccbp.in/terms-and-conditions#payments
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
