import React from 'react';
import { Row, Col } from '../../utils/styles/global';
import { News } from './News.component';

const articles = [
  {
    title: 'Key workers revealed ahead of school shutdown',
    body:
      'Friday is the last day at school for most children in England, Scotland and Wales until further notice, in response to the escalating coronavirus pandemic.'
  },
  {
    title: 'Chancellor prepares wage package rescue plan',
    body:
      'Chancellor Rishi Sunak is to announce an employment and wage subsidy package to try to protect millions of jobs. Talks went on into the night with business groups and union leaders, who urged the government to help pay wages amid the coronavirus pandemic.'
  },
  {
    title: 'It was never my plan to be the boss of a huge company',
    body:
      'When Vasant Narasimhan was told he was being considered for the top job at Swiss drugs giant Novartis, he thought there had been a mistake.'
  },
  {
    title: 'Tricks and tools for better working from home',
    body:
      "When one of Louise Halford's staff members returned from a ski trip with flu-like symptoms, she advised him to work from home rather than risk bringing the coronavirus into the office."
  },
  {
    title: 'Can computer translators ever beat speaking a foreign tongue?',
    body:
      "So if it appeared on a menu, you might pass. Alas, you would be ruling out a delicious cheese made of goat's milk that is often served as a starter in France. Such misunderstandings are why Google admits that its free tool, used by about 500 million people, is not intended to replace human translators."
  }
];

const Newsfeed = () => {
  return (
    <>
      <Row>
        <Col size={1}></Col>
        <Col size={2}>
          <h1>Trending News Stories</h1>
          {articles.map((article) => (
            <News article={article}></News>
          ))}
        </Col>
        <Col size={1}></Col>
      </Row>
    </>
  );
};

export default Newsfeed;
