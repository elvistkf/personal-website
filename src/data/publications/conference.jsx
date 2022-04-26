import React from "react";
import AuthorHighlight from "../../components/AuthorHighlight";

const conference = [{
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight> and Karl Henrik Johansson</span>),
        title: "Distributed Event-Triggered Learning-Based Control for Nonlinear Multi-Agent Systems",
        publication: "IEEE Conference on Decision and Control",
        pages: "3399-3405",
        location: "Austin, TX, USA",
        year: "Dec 2021",
        url: "https://ieeexplore.ieee.org/abstract/document/9683215/",
        tags: ["Multi-Agent Systems", "Nonlinear Systems", "Consensus Control", "Event-Triggered Systems", "Machine Learning"],
        status: "Published",
        citation: 0
    },
    {
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Junfeng Wu and Ling Shi</span>),
        title: "Distributed Optimisation with Stochastic Event-Triggered Multi-Agent Control Algorithm",
        publication: "IEEE Conference on Decision and Control",
        pages: "6222-6227",
        location: "Jeju, Korea",
        year: "Dec 2020",
        url: "https://ieeexplore.ieee.org/abstract/document/9303799/",
        tags: ["Multi-Agent Systems", "Distributed Optimisation", "Event-Triggered Systems", "Stochastic Algorithms"],
        status: "Published",
        citation: 0
    },
    {
        authors: (<span>Yik Ben Wong, Yawen Chen, <AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Winnie Suk Wai Leung and Ling Shi</span>),
        title: "Upper Extremity Load Reduction for Lower Limb Exoskeleton Trajectory Generation Using Ankle Torque Minimization",
        publication: "International Conference on Control, Automation, Robotics and Vision",
        location: "Shenzhen, China",
        year: "Nov 2020",
        url: "https://ieeexplore.ieee.org/abstract/document/9305430/",
        tags: ["Robotics", "Exoskeleton", "Optimisation"],
        status: "Published",
        citation: 2
    },
    {
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Junfeng Wu and Ling Shi</span>),
        title: "Zeno-Free Stochastic Distributed Event-Triggered Consensus Control for Multi-Agent Systems",
        publication: "American Control Conference",
        location: "Philadelphia, PA, USA",
        year: "July 2019",
        url: "https://ieeexplore.ieee.org/abstract/document/8815278/",
        tags: ["Multi-Agent Systems", "Consensus Control", "Event-Triggered Systems", "Stochastic Algorithms"],
        status: "Published",
        citation: 3
    },
    {
        authors: (<span>Cheuk Fung Raphael Wong, <AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Ling Shi</span>),
        title: "An LQG Motivated Leader-Follower Consensus with Uncertainty",
        publication: "Asian Control Conference",
        location: "Kitakyushu, Japan",
        year: "June 2019",
        url: "https://ieeexplore.ieee.org/abstract/document/8765025/",
        tags: ["Multi-Agent Systems", "Consensus Control"],
        status: "Published",
        citation: 1
    },
    {
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Yuqing Ni, Cheuk Fung Raphael Wong, Ling Shi</span>),
        title: "A Novel Warehouse Multi-Robot Automation System with Semi-Complete and Computationally Efficient Path Planning and Adaptive Genetic Task Allocation Algorithms",
        publication: "International Conference on Control, Automation, Robotics and Vision",
        location: "Singapore",
        year: "Nov 2018",
        url: "https://ieeexplore.ieee.org/abstract/document/8581092",
        tags: ["Multi-Agent Systems", "Robotics", "Path Finding", "Artificial Intelligence"],
        status: "Published",
        citation: 8
    }
];

export default conference;