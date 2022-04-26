import React from "react";
import AuthorHighlight from "../../components/AuthorHighlight";

const journal = [{
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Mengyu Huang, Ling Shi and Karl Henrik Johansson</span>),
        title: "Stochastic Event-Triggered Algorithm for Distributed Convex Optimisation",
        publication: "IEEE Transaction on Control of Network Systems",
        tags: ["Distributed Optimisation", "Multi-Agent Systems", "Event-Triggered Systems", "Stochastic Algorithms"],
        status: "Submitted",
        citation: 0
    },
    {
        authors: (<span>Mengyu Huang, <AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Yuzhe Li, Li Li and Ling Shi</span>),
        title: "Strategic DoS Attack in Continuous Space for Cyber-Physical Systems over Wireless Networks",
        publication: "IEEE Transactions on Signal and Information Processing over Networks",
        tags: ["DoS Attack", "Reinforcement Learning", "Deep Learning", "Cyber-Physical Systems"],
        status: "Submitted",
        citation: 0
    },
    {
        authors: (<span><AuthorHighlight>Kam Fai Elvis Tsang</AuthorHighlight>, Mengyu Huang, Karl Henrik Johansson and Ling Shi</span>),
        title: "Sparse Linear Injection Attack on Multi-Agent Consensus Control Systems",
        publication: "IEEE Control Systems Letters",
        volume: "5",
        issue: "2",
        pages: "665-670",
        year: "2020",
        url: "https://ieeexplore.ieee.org/abstract/document/9125950/",
        tags: ["Multi-Agent Systems", "Integrity Attack", "Optimisation", "Consensus Control"],
        status: "Published",
        citation: 8,
    },
];

export default journal;