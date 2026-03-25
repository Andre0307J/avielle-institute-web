import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faStar,
  faQuoteLeft,
  faArrowUp,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { twMerge } from "tailwind-merge";
import HeroImage from "/assets/hero-image.png";
import AboutImage from "/assets/about-image.jpg";
import SATImage from "/assets/sat-image.jpg";
import TOEFLImage from "/assets/toefl-image.jpg";
import IELTSImage from "/assets/ielts-image.jpg";
import STEPImage from "/assets/step-image.jpg";
import ACTImage from "/assets/act-image.jpg";
import CAELImage from "/assets/cael-image.jpg";
import User2 from "/assets/user-2.png";
import User1 from "/assets/user-1.png";
import User3 from "/assets/user-3.png";
import User5 from "/assets/user-5.png";
import User4 from "/assets/user-4.png";
import InstructorImage from "/assets/instructor-image.png";

const lessonCounts = {
  lessons: 50,
  students: 210,
};

const courses = [
  {
    img: SATImage,
    title: "SAT",
    description:
      "Prepare For SAT With Our Comprehensive Course Materials, Live Sessions And Practice Tests.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
  {
    img: TOEFLImage,
    title: "TOEFL",
    description:
      "Prepare For TOEFL With Key Strategies And Tips To Succeed In Your Exams.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
  {
    img: IELTSImage,
    title: "IELTS",
    description:
      "Prepare For IELTS With Proven Tips And Techniques to Achieve Your Best Score.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
  {
    img: ACTImage,
    title: "ACT",
    description:
      "Prepare For ACT With Key Strategies And Practices To Maximize Your College Success.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
  {
    img: CAELImage,
    title: "CAEL",
    description:
      "Prepare For CAEL With Essential Insights And Personalized Approaches To Succeed In Your Exams.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
  {
    img: STEPImage,
    title: "STEP",
    description:
      "Prepare For STEP With Critical Skills and Practice to Succeed in Your Subject Exams.",
    rating: 4.5,
    reviews: 120,
    students: 15,
  },
];

const testimonials = [
  { userImg: User2, name: "Sandra Blake", role: "IELTS Student", rating: 5.0, review: "This course helped me improve my IELTS score significantly. The instructors are knowledgeable and supportive." },
  { userImg: User1, name: "Henry Quinn", role: "CAEL Student", rating: 5.0, review: "The CAEL course provide me with the skills and confidence i needed to succeed in my exam. The practical materials were especially helpful." },
  { userImg: User3, name: "Zhang Kim Li", role: "TOEFL Student", rating: 5.0, review: "I highly recommend this TOEFL course to anyone looking to imporove their English skills. The instructors are engaging and the course materials are comprehensive." },
  { userImg: User5, name: "Da'Shaun Miller", role: "STEP Student", rating: 5.0, review: "The STEP course was instrumental in helping me prepare for my exams. The instructors provided clear explanations and the practice materials were very effective." },
  { userImg: User4, name: "Antoinette Mariene", role: "ACT Student", rating: 5.0, review: "I can't say enough good things about this ACT course. The instructors are passionate and the course materials are top-notch. It really helped me achieve my target score." },
];

const Home = () => {
  // Lesson and Students Counters
  const [counts, setCounts] = useState({
    lessons: 0,
    students: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        lessons: Math.min(prev.lessons + 2, lessonCounts.lessons),
        students: Math.min(prev.students + 5, lessonCounts.students),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Sliders
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const moveToSlide = (index) => {
  setCurrentSlide(index);
  const isMobile = window.innerWidth < 768;
  const slideWidth = isMobile
    ? sliderRef.current.offsetWidth
    : sliderRef.current.offsetWidth / 2;
  sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
};

  // Auto-play slider
useEffect(() => {
  const totalSlides = testimonials.length;
  const interval = setInterval(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % totalSlides;
      const isMobile = window.innerWidth < 768;
      const slideWidth = isMobile
        ? sliderRef.current.offsetWidth
        : sliderRef.current.offsetWidth / 2;
      sliderRef.current.style.transform = `translateX(-${next * slideWidth}px)`;
      return next;
    });
  }, 5000);
  return () => clearInterval(interval);
}, []);

  // Handling scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // footer Nav links
  const footerNavLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Become An Instructor", href: "#instructors" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="flex justify-between items-center py-[50px] px-5 max-w-[1200px] mx-auto flex-wrap scroll-mt-24"
        id="home"
      >
        {/* Hero Text */}
        <div
          className="max-w-[600px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {/* Hero headding classname here */}
          <h1
            className={twMerge(
              "text-[40px] font-black text-black mb-5",
              "text-[3.8rem]",
            )}
          >
            Investing in <br /> Knowledge and <br />
            <span className="text-[#ff7b00]">Your Future</span>
          </h1>
          <p className="my-5 text-[#7c7878]">
            Our e-learning program have been developed to be a vehicle of
            delivering multimedia learning solutions.
          </p>
          {/* Stats */}
          <div className="flex gap-10 mt-5">
            <Button
              variant="default"
              size="sm"
              className="cursor-pointer bg-[linear-gradient(349deg,#715cee,#b1a5f8)] text-white font-[600] w-32 h-12 rounded-[23px] transition ease-in-out duration-400 text-[16px] filter drop-shadow-[2px 5px 8px #b1a5f8] hover:bg-[linear-gradient(349deg,#9383f5,#b1a5f8)] hover:text-white flex items-center gap-2"
              onClick={() => (window.location.href = "#")}
            >
              Get Started
            </Button>
            <div>
              <span id="lessons" className="text-[1.8rem] font-900 font-bold">
                {counts.lessons}+
              </span>
              <br />
              {/* counterText class to added to the span tag */}
              <span className="text-[1rem] text-[#7c7878] font-bold">
                {" "}
                Lessons
              </span>
            </div>
            <div>
              <span id="students" className="text-[1.8rem] font-900 font-bold">
                {counts.students}+
              </span>
              <br />
              {/* counterText class to the span tag */}
              <span className="text-[1rem] text-[#7c7878] font-bold">
                {" "}
                Students
              </span>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div
          className="max-w-100 relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={HeroImage}
            alt="Hero Image"
            className="z-[99] relative w-full -translate-y-10"
          />
          {/* Circle container for the image */}
          <div className="absolute top-[150px] left-[20px] w-[450px] h-[450px]">
            {/* Circle 1 */}
            <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,#907fea_30%,#b2a8f8_100%)] opacity-60 animate-breathe" />

            {/* Circle 2 */}
            <div className="absolute top-[-15px] left-[-15px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,#907fea_30%,#b2a8f8_100%)] opacity-60 animate-breathe [animation-delay:0.5s]" />

            {/* Circle 3 */}
            <div className="absolute top-[-30px] left-[-30px] w-[410px] h-[410px] rounded-full bg-[radial-gradient(circle,#907fea_30%,#b2a8f8_100%)] opacity-60 animate-breathe [animation-delay:1s]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="flex justify-around gap-[100px] flex-wrap max-w-[1200px] mx-auto my-[100px] scroll-mt-24 px-5"
        id="about"
      >
        {/* Image */}
        <div className="flex-[1_1_500px] relative" data-aos="zoom-in">
          <div className="w-[100px] h-[100px] bg-gradient-to-r from-[#715CDE] to-[#B1A5FE] absolute top-[-20px] right-[-20px] z-[-1] rounded-[10px]"></div>
          <img
            src={AboutImage}
            alt=""
            loading="lazy"
            className="w-full rounded-[10px] block"
          />
        </div>
        <div className="flex-[1_1_500px]" data-aos="fade-right">
          <small className="text-[#7b5fff] font-bold tracking-[1px] text-[17px]">
            ABOUT US
          </small>
          <h1
            className={twMerge(
              "text-[25px] font-black text-black mb-5",
              "text-[1.5rem]",
            )}
          >
            We Provide Quality Online Courses For You
            <span className="text-[#ff7b00]"> To Learn And Grow.</span>
          </h1>
          <span className="highlight text-[18px] text-[#7c7878] mb-[15px] leading-[1.6] font-bold">
            Creative, Digital & Professional Skills Training.
          </span>
          <p className="text-[16px] text-[#7c7878] mb-[15px] leading-[1.6]">
            We are a dedicated team of professionals committed to providing
            high-quality online courses that empower individuals to learn and
            grow in their careers. Our mission is to make education accessible
            and engaging for everyone, regardless of their background or
            location.
          </p>
          <p className="text-[16px] text-[#7c7878] mb-[15px] leading-[1.6]">
            Our platform is designed to empower learners, delivering a wide
            range of tailored courses that cater to diverse interests and skill
            levels. We are passionate about fostering a supportive and inclusive
            learning environment where individuals can thrive and achieve their
            goals.
          </p>
          <Button
            variant="default"
            size="sm"
            className="cursor-pointer bg-[linear-gradient(349deg,#715cee,#b1a5f8)] text-white font-[600] w-30 h-12 rounded-[23px] transition ease-in-out duration-400 text-[16px] filter drop-shadow-[2px 5px 8px #b1a5f8] hover:bg-[linear-gradient(349deg,#9383f5,#b1a5f8)] hover:text-white flex items-center gap-2"
            onClick={() => (window.location.href = "#")}
          >
            Read more
          </Button>
        </div>
      </section>
      {/* Services Section */}
      <section
        className="py-[50px] px-5 max-w-[1200px] mx-auto text-center scroll-mt-24"
        id="services"
      >
        <h1
          className={twMerge(
            "text-[25px] font-black text-black mb-5",
            "text-[1.7rem]",
          )}
          data-aos="zoom-in"
        >
          Learn Anything, Anytime, Anywhere With Our E-Learning Platform. <br />
          Explore <span className="text-[#ff7b00]">What We Offer.</span>
        </h1>
        <p
          className="text-[18px] text-[#6b7280] my-[10px] mb-[30px]"
          data-aos="zoom-in"
        >
          Discover the wide range of courses and resources we have to offer.
        </p>
        <div
          className="flex justify-center gap-5 flex-wrap"
          data-aos="fade-right"
        >
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-[10px] mt-5 shadow-[0_0_10px_rgba(0,0,0,0.05)] w-[350px] p-[15px] text-left flex flex-col transition-all duration-[400ms] ease-in-out hover:scale-105">
              <img src={course.img} alt={`${course.title} Course`} className="w-full" loading="lazy" />
              <h2 className="text-[12px] text-[#ff7b00] mt-2.5 mb-[5px] font-bold">{course.title}</h2>
              <p className="text-[16px] mt-[5px] mb-2.5">{course.description}</p>
              <div className="text-[14px] text-amber-400 my-[5px] font-bold">
                <span>{course.rating.toFixed(1)} </span>
                {[...Array(Math.floor(course.rating))].map((_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} />
                ))}
                <span> ({course.reviews} reviews)</span>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="students">
                  <FontAwesomeIcon icon={faUsers} /> {course.students} students.
                </div>
                <Button
                  variant="default"
                  size="sm"
                  className="cursor-pointer bg-[linear-gradient(349deg,#715cee,#b1a5f8)] text-white font-semibold w-34 h-10 rounded-[23px] transition ease-in-out duration-400 text-[16px] filter drop-shadow-[2px 5px 8px #b1a5f8] hover:bg-[linear-gradient(349deg,#9383f5,#b1a5f8)] hover:text-white flex items-center gap-2"
                  onClick={() => (window.location.href = "#")}
                >
                  Enroll Now <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section
        style={{ background: "url('/assets/images/pattern.jpg'), #7b5fff" }}
        className="text-white rounded-[20px] py-[40px] px-5 md:px-[50px] max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-5"
      >
        <div className="flex-[1_1_300px]" data-aos="fade-right">
          <h2 className="text-[2rem] font-bold text-white mb-2.5">
            Ready To Get Started?
          </h2>
          <p className="text-base text-[#e0e0e0] leading-[1.6]">
            Join us today and unlock your full potential.
          </p>
        </div>
        <Button
          className="bg-white text-[#7b5fff] py-[15px] px-[30px] border-none rounded-[25px] font-bold text-base cursor-pointer transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
          data-aos="fade-left"
        >
          UPGRADE
        </Button>
      </section>
      {/* Testimonal Section */}
      <section className="text-center p-[50px]">
        <small
          data-aos="zoom-in"
          className="text-[18px] font-semibold text-[#7b5fff]"
        >
          Client Testimonial
        </small>
        <h2
          className={twMerge(
            "text-[25px] font-black text-black mb-5",
            "text-[1.7rem]",
          )}
          data-aos="zoom-in"
        >
          What Our <span className="text-[#ff7b00]">Students Are Saying</span>
        </h2>
        <div
          className="max-w-[1000px] mx-auto relative overflow-hidden"
          data-aos="fade-right"
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-[600ms] ease-in-out"
            id="testimonialWrapper"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] p-5 m-2.5 flex-[0_0_calc(100%-20px)] md:flex-[0_0_calc(50%-20px)] flex flex-col justify-between">
                {/* Top: user info + quote icon */}
                <div className="flex items-center mb-[15px] relative">
                  <div className="shrink-0">
                    <img
                      src={testimonial.userImg}
                      alt={testimonial.name}
                      className="w-[60px] h-[60px] rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-[15px] text-left grow">
                    <h3 className="text-[16px] font-semibold">{testimonial.name}</h3>
                    <p className="text-[14px] text-[#7bf500]">{testimonial.role}</p>
                    <div className="text-[#7bf500] text-[16px]">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <FontAwesomeIcon icon={faStar} key={i} />
                      ))}
                      <span className="text-[#333] ml-1">{testimonial.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  {/* Quote icon in top-right of this flex row */}
                  <div className="text-[4rem] text-[#7bf500]">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                </div>
                {/* Bottom: review text — OUTSIDE the flex div above */}
                <p className="text-[14px] leading-[1.5] text-left">{testimonial.review}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            {[...Array(testimonials.length)].map((_, i) => (
              <span
                key={i}
                onClick={() => moveToSlide(i)}
                className={`inline-block w-[10px] h-[10px] mx-[5px] rounded-full cursor-pointer ${
                  currentSlide === i ? "bg-[#7bf500]" : "bg-[#ddd]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section
        className="py-[60px] px-5 flex justify-center items-center scroll-mt-24"
        id="instructors"
      >
        <div className="max-w-[1200px] w-full flex justify-center items-center gap-[50px] flex-wrap">
          <div className="w-full max-w-[500px] mx-auto" data-aos="fade-right">
            <img src={InstructorImage} alt="Instructor" loading="lazy" />
          </div>
          <div className="max-w-[600px]" data-aos="fade-left">
            <h1
              className={twMerge(
                "text-[25px] font-black text-black mb-5",
                "text-[1.7rem]",
              )}
            >
              Become An <span className="text-[#ff7b00]">Instructor</span>
            </h1>
            <p className="text-base text-[#555] mb-[30px] leading-[1.6]">
              Join our formidable team of instructors to help students achieve
              their goals.
            </p>
            <a
              href="#"
              className="bg-white text-[#7b5fff] py-[15px] px-[30px] border-none rounded-[25px] font-bold text-base cursor-pointer transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              Start Teaching Today
            </a>
          </div>
        </div>
      </section>

      <Button
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-[30px] right-[30px] z-[999] bg-[#7b5fff] text-white border-[3px] border-[#7b5fff] !py-[12px] !px-[15px] text-base rounded-[50px] cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#7b5fff] ${showScrollTop ? "block" : "hidden"}`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>

      {/* Footer Section */}

      <footer
        id="contact"
        style={{
          background:
            "linear-gradient(rgba(81,59,232,0.85), rgba(81,59,232,0.85)), url('/assets/pattern.jpg')",
        }}
        className="py-[60px] px-5 pb-[30px] text-center text-white scroll-mt-24"
      >
        <div className="max-w-[800px] mx-auto mb-[40px]">
          <h2 className="text-[22px] mb-2.5 text-white">
            Subscribe To Our Newsletter
          </h2>
          <br />
          <div className="flex justify-center flex-wrap gap-[10px]">
            <input
              type="email"
              placeholder="Email Address..."
              className="py-[15px] px-5 rounded-[40px] border-none outline-none w-full max-w-[500px] text-base bg-white text-primary"
            />
            <button className="bg-white text-[#7b5fff] py-[15px] px-[30px] border-none rounded-[25px] font-bold text-base cursor-pointer transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-t-[rgba(255,255,255,0.1)] pt-[30px] flex flex-wrap justify-between items-center max-w-[1100px] mx-auto">
          {/* Footer Logo */}
          <div className="flex items-center gap-2.5 text-[22px] font-bold text-white">
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
            <span className="text-1xl font-bold">
              {" "}
              <a
                href="#"
                className="text-white no-underline hover:text-[#ff7b00] transition-colors duration-300"
              >
                Avielle Institute.
              </a>
            </span>
          </div>
          {/* Footer Links */}
          <div className="flex gap-[25px] flex-wrap justify-center my-5">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white no-underline transition-colors duration-300 hover:text-[#ff7b00] text-[16px] font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* End of Footer Links */}
          {/* Social icons */}
          <div className="flex gap-[15px]">
            <a
              href="#"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#7b5fff] no-underline bg-white text-base transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#7b5fff] no-underline bg-white text-base transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#7b5fff] no-underline bg-white text-base transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#7b5fff] no-underline bg-white text-base transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-[#7b5fff] no-underline bg-white text-base transition-colors duration-300 hover:bg-[#ff7b00] hover:text-white"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          {/* End of Social icons */}
        </div>
        <div className="mt-[20px] text-[14px] text-[#bbb] flex justify-center items-center flex-wrap gap-2.5 font-bold">
          <p>
            &copy; 2026
            <a href="#" className="text-[#ff7b00] no-underline">
              Avielle Institute.
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
