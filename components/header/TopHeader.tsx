"use client";

import styles from "./topHeader.module.css";
import Link from "next/link";
import { infoList, phoneContact, socialLinks } from "@/utils/data";

const TopHeader = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.container}>
        {/* Left side: address and email */}
        <div className={styles.left}>
          <ul className={styles.infoList}>
            {infoList.map((item) => (
              <li key={item.id}>
                <item.icon className={styles.icon} /> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: phone and social icons */}
        <div className={styles.right}>
          <a href="#" className={styles.phone}>
            <phoneContact.icon className={styles.icon} /> {phoneContact.text}
          </a>
         <ul className={styles.socialList}>
            {socialLinks.map((social) => (
              <li key={social.id}>
                <Link href={social.url}>
                  <social.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
