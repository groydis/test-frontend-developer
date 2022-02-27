# Technical Questions

## How can you guarantee 100% uptime for your application?

Answer: It's impossible to guarantee 100% uptime. However, for the most successful continual and fast delivery of service, A CDN could be used to distrubte the application to a group of servers and provide load blanacing and redundancy.

## What would you do to scale up this application to handle 10,000 requests a second?

Answer: A CDN would load balance the network traffice evenly across several servers. Further to this, the front end could be designed with a microservice style pattern to the applications UI, breaking the front end into serveral business logic subdomains that are user focused, eg User Profiles, Task Managment. ect

## How would you record stats about user activity? (eg. Logins, to-do items created and completed.)

Answer: I would likely use a third party service to capture user interactions: Services such as Hotjar, Smartlook, Google Tags (with GA integration) ect, 

## How can this task be split apart to be done as efficiently as possible by a team of developers?

Answer: This task is quite small and might very well be handled by single a full stack developer. However,  tasks could be seperated by technology, with frontend and backend development split / as well as tasks allocated to dev ops. 

## What technology stack do you choose for your proposed solution, and why?

Answer: The requirements asked for the solution to be built using React, I elected to use typescript for proper typing to find and detect typing errors quickly in an attempt to expedite development. 

## How will you deploy your solution?

Answer: This particular solution, just needs to be built, and deployed to static site hosting such a AWS S3. I would use a service like cloudfront/cloudfare in front. This deployment steps could be easily automated using CI/CD functionality with github actions/circle ci/jenkins ect.

## How will you ensure that user data is secure?

Answer: Ensuring all data is transferred over HTTPS, making a concious effort to keep as little user data on the front end as possible. Token based authentication to a back end API to retrieve data. Further to this, the site could use a Content Security Policy, to white list trusted content to be excuted on the front end.

## What potential risks can you see during the development and deployment of this system?

Answer: There is no upper limit to the number of tasks, there is some iteration logic used for display with an o^n notation that could result in an unresponsive site based on the number of tasks present. This could be mitigated by using pagination, or by placing a limit on tasks. 

## Is there anything you think the requirements have overlooked?

Answer: There are no requirements for persistance, testing or API consumption, all three are are frequently used in conjunction with front end development. 
