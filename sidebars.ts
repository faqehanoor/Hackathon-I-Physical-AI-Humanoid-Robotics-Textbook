import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial Basics',
      link: {
        type: 'generated-index',
        title: 'Tutorial Basics',
        description: 'Learn the foundational concepts of Physical AI and Humanoid Robotics.',
        slug: '/category/tutorial-basics',
      },
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/03-urdf-robot-description',
        'tutorial-basics/Tutorial 4 Gazebo Simulation',
        'tutorial-basics/05-isaac-sim-basics',
        'tutorial-basics/07-conversational-robotics',
        'tutorial-basics/08-capstone-humanoid',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      link: {
        type: 'generated-index',
        title: 'Advanced Topics',
        description: 'Dive deeper into advanced concepts and techniques.',
        slug: '/category/advanced-topics',
      },
      items: [
        'tutorial-extras/09-advanced-ros2',
        'tutorial-extras/10-gazebo-advanced-physics',
        'tutorial-extras/11-reinforcement-learning-humanoids',
        'tutorial-extras/12-advanced-isaac-sim-usd',
        'tutorial-extras/13-advanced-sensor-fusion',
        'tutorial-extras/14-whole-body-control',
      ],
    },
  ],
};

export default sidebars;