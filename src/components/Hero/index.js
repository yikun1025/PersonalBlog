import React from "react";

import { useTrail, animated } from "react-spring";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import Button from "../Button";

import HeroMain from "./img/reading.svg";
import BilibiliIcon from "@site/static/icons/bilibili.svg";
import CSDNIcon from "@site/static/icons/csdn.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import useBaseUrl from "@docusaurus/useBaseUrl";

import useFollowers from "./useFollowers";

import styles from "./styles.module.css";

function Hero() {
  const {
    // 当前语言
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // Get followers
  const followers = useFollowers();

  // animation
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate description="hero greet">Personal Blog </Translate>
          <span className={styles.intro__name}>
            <Translate description="my name">Fangyikun Jian</Translate>
          </span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate
            id="homepage.hero.text"
            description="hero text"
            values={{
              bilibiliText: (
                <Link to="/docs/videos">
                  <Translate
                    id="hompage.hero.text.bilibili"
                    description="Bilibili docs link label"
                  >
                    技术视频教程、
                  </Translate>
                </Link>
              ),
              courses: (
                <Link to="/docs/course/react-chat-ui">
                  <Translate
                    id="hompage.hero.text.course"
                    description="Course link label"
                  >
                    实战课程、
                  </Translate>
                </Link>
              ),
              blogs: (
                <Link to="#homepage_blogs">
                  <Translate
                    id="hompage.hero.text.blog"
                    description="Blog link label"
                  >
                    技术博客、
                  </Translate>
                </Link>
              ),
              links: (
                <Link to="/docs/resources">
                  <Translate
                    id="hompage.hero.text.link"
                    description="Link link label"
                  >
                    前端资源导航、
                  </Translate>
                </Link>
              ),
              ideas: (
                <Link to="/lifestyle">
                  <Translate
                    id="hompage.hero.text.idea"
                    description="Idea link label"
                  >
                    想法和生活点滴
                  </Translate>
                </Link>
              ),
            }}
          >
            {`一些日常学习记录，`}
          </Translate>
        </animated.p>
        {currentLocale === "zh-CN" && (
          <animated.p style={animatedTexts[3]}>
            <Translate id="homepage.qqgroup1" description="qq group1">
              Status: Immersed in the labyrinth of knowledge, wrestling with discomfort, embraced by confusion's gentle mist
            </Translate>
            <br />
            <Translate id="homepage.qqgroup2" description="qq group2">
              Aspiration: One day, the cosmos of knowledge will unfold before me, revealing its infinite secrets
            </Translate>
          </animated.p>
        )}
      </div>

      <HeroMainImage />
      {/* <animated.div
      className="bloghome__scroll-down"
      style={animatedBackground}
    >
      <button>
        <ArrowDown />
      </button>
    </animated.div> */}
    </animated.div>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  // const { isDarkTheme } = useThemeContext();
  return (
    <animated.div className={styles.social__links} style={animatedProps}>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain />
    </div>
  );
}

export default Hero;
