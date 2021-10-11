import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Contact() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <main style={{ marginBottom: "2rem" }}>
        <div className="container">
          <h1 className="hero__title">Contact</h1>
          <p>
            Email us at{" "}
            <a href="mailto:simonekaystainedglass@gmail.com">
              simonekaystainedglass@gmail.com
            </a>{" "}
            or phone us on 020 8287 7743
          </p>

          <p>2 Fairfield Corner, Hawks Road Kingston-Upon-Thames, KT1 3BX</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.733771907955!2d-0.296446784233693!3d51.40794627961883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760bc2c3d7d2b1%3A0xa8a5831acb7dde56!2sSimone%20Kay%20Stained%20Glass!5e0!3m2!1sen!2suk!4v1633973544582!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
