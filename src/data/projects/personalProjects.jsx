const personalProjects = [{
    title: "Covid-19 Data Analysis",
    description: "This project aims to extract insights from public COVID-19 data.",
    img: "https://www.gu.se/sites/default/files/dynamic-image/dynamic_image_1014_570/public/2020-05/corona-drupal.jpg?media_id=5475&width=976&height=525",
    url: "https://github.com/elvistkf/data-analytics-portfolio/tree/main/1_Covid%20Data",
    tags: ['Python', 'SQL', 'Tableau'],
    subTags: {
        'Python': 'numpy, pandas, scikit, matplotlib'
    }
},
{
    title: "Toronto Housing Data Analysis",
    description: "",
    tags: ['Python', 'Tableau'],
    subTags: {
        'Python': 'scrapy'
    }
},
{
    title: "Personal Portfolio Website",
    description: "A ReactJS-based personal website to showcase past projects, publications and related skills.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    img: require('../../assets/logo192.png'),
    subTags: {
        'JavaScript': 'ReactJS'
    }
},
{
    title: "CLI Research Management System",
    description: "A command-line interface (CLI) toolkit for managing and organising research projects built with zsh and Python.",
    img: require('../../assets/rms.png'),
    url: "https://github.com/elvistkf/research-management-system",
    tags: ['Shell', 'Python']
},
];

export default personalProjects;