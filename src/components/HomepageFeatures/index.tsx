import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc?: string; // Add imgSrc for regular images
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>; // Keep Svg for SVG components
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Physical AI Ready',
    imgSrc: '/img/physical.png', // Using the robot_ai image
    description: (
      <>
         Build real-world intelligent systems with a textbook deeply integrated
        into robotics simulation, humanoid control, and embodied AI principles.
      </>
    ),
  },
  {
    title: 'Simulation First Learning',
    imgSrc: '/img/simulation.png', // Reusing our custom logo SVG
    description: (
      <>
         Learn humanoid robotics through hands-on labs using ROS 2, Gazebo,
        and NVIDIA Isaac Sim—designed for real-world training and digital twins.
      </>
    ),
  },
  {
    title: 'AI-Native Textbook',
    imgSrc: '/img/ai.png', // Using another relevant image
    description: (
      <>
        Your book includes RAG chatbot support, Urdu translation, personalization,
        subagents, and interactive MDX components powered by React & AI.
      </>
    ),
  },
];

function Feature({title, imgSrc, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imgSrc && <img className={styles.featureImage} src={imgSrc} alt={title} />}
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
