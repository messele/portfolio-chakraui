export class ExprienceItem {
  start: string;
  end: string;
  jobTitle: string;
  company: string;
  description: string;
  responsibilities: string[];
  skills: string[];

  constructor(
    start: string,
    end: string,
    jobTitle: string,
    company: string,
    description: string,
    responsiblities: string[],
    skills: string[]
  ) {
    this.start = start;
    this.end = end;
    this.jobTitle = jobTitle;
    this.company = company;
    this.description = description;
    this.responsibilities = responsiblities;
    this.skills = skills;
  }
}

export const experience = [
  new ExprienceItem(
    "10/2019",
    "current",
    "Solutions Architect / Application Developer",
    "CMCI, NortrupGrumman, Leidos",
    `As a senior Engineer, I was responsible for
     modernization and migration of various applications
     from on prem Weblogic deployment to AWS EKS.`,
    [
      "FrontEnd ReactJS Application to Modernized Legacy System",
      "AWS EKS Migration",
      "Created Tools for monitoring",
      "Spearheading new intiatives and Mentoring junior developers",
    ],
    [
      "javascript",
      "react",
      "java",
      "spring mvc",
      "spring-boot",
      "typescript",
      "AWS EKS",
      "Redis",
      "PostgreSQL",
      'Oracle',
      "Jenkins",
      "Kubernetes",
    ]
  ),
  new ExprienceItem(
    "02/2019",
    "10/2019",
    "Lead AWS Architect",
    "Capital One",
    "I joined as the sole AWS Architect to design and implement a daily, quarterly and weekly ETL Data pipeline on AWS to run risk analysis and loan aquistion models.",
    [
      "Created AWS ETL Data Pipeline to run Risk Models",
      "Optimizing Data Extraction/Sanitization scripts with Spark/hadoop on AWS EMR",
      'Created Cloudwatch Dashboards for monitoring and reporting'
    ],
    [
      "javascript",
      "typescript",
      "angular",
      "python",
      'spark',
      'hadoop',
      "AWS Batch",
      "AWS Step Functions",
      "AWS Lambda",
      "AWS EMR",
      "AWS Glue",
      "AWS Event Bridge"
    ]
  ),
  new ExprienceItem(
    "10/2018", '02/2019',
    "Sr AWS Java Developer/Architect",
    "Fannie Mae",
    `I joined Fannie mae on a short term contract to move their workloads database, 
      models for finacial analysis.
    `,
    [
      'Implemented FrontEnd application for monitoring and Reporting',
      'Created CI/CD Pipelines to build and deploy scripts to AWS'
    ],
    [
      'Angular',
      'Java Script',
      'AWS Lambda',
      'AWS CloudWatch',
      'AWS S3',
      'AWS CloudFormation',
      'Step functions',
      'AWS Step functions', 
      'Jenkins']
  ),
  new ExprienceItem(
    "10/2016",
    "10/2018",
    "Sr Full Stack AWS Software Development Engineer",
    "Telos",
    `I was hired as part of a team to redesign their flagship product on AWS. 
      I had several roles on this project; as a devops engineer to create the CI/CD pipelines, full stack developer to prototype and technology evangelist using AWS native services.`,
    [
      "Frontend Development with Angular TypeScript",
      "Converted Legacy Java Backend Service to Spring Boot",
      "Wrote Devops scripts for Containerization and deployment to kubernetes Cluster",
    ],
    [
      "javascript",
      "typescript",
      "angular",
      "java",
      "spring-boot",
      "docker",
      "AWS Lambda",
    ]
  ),
];
