import React from "react";
import PropTypes from "prop-types";

import { Section, Layout, AllActus, Hero } from "../src/composants";
import news from "../src/data/news";

// https://github.com/facebook/react/issues/377
const News = ({ title, url, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
    >
      <div className="panel__header" id={date}>
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      {url && <a href={url}>En savoir plus : {title}</a>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string,
  url: PropTypes.string
};

const Actus = () => (
  <Layout>
    <Hero
      title="Toutes les actualités"
      tagline=""
      style={{ backgroundImage: `url(/static/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Brèves" subTitle="">
      {news.map(n => (
        <News {...n} key={n.title} />
      ))}
    </Section>
    <Section
      className="section-color cards"
      title="Articles de fond"
      subTitle=""
    >
      <AllActus.all />
    </Section>
  </Layout>
);

export default Actus;
