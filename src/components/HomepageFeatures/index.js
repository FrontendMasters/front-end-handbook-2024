import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div
            style={{
              maxWidth: "768px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              This guide is open source, please go ⭐️ it on GitHub and make
              suggestions/edits there!{" "}
              <a href="https://github.com/FrontendMasters/front-end-handbook-2024">
                https://github.com/FrontendMasters/front-end-handbook-2024
              </a>
            </p>
            <p class="image">
              <img
                loading="lazy"
                alt="The Frontend Developer/Engineer Handbook 2024 Cover"
                src="https://frontendmasters.com/guides/front-end-handbook/2024/images/FEM2024_1000w.jpeg"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
