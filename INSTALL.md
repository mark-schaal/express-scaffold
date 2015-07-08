# Installation Guidelines
This guide contains information for getting started with a local version of the repository, deploying from a Docker image, and hosting on Amazon's ElasticBeanstalk environment.

### Localhost Installation with Git/Grunt
	$ git clone [express-default repository path]
	$ cd express-default;
	$ npm install;

	Optionally, you may need to install the grunt-cli globally
	$ npm install grunt-cli -g

	Start the application server with Grunt
	$ grunt;

### Localhost Installation with Docker/Boot2Docker
	$ docker pull [express-default docker image repository]

### Remote Hosting with AWS ElasticBeanstalk
	Configure the AWS CLI / EB CLI

	Initialize the Application

	$ eb init --profile [AWS Profile Name] express-default
	$ Select a default region - 1) us-east-1 : US East (N. Virginia)
	$ It appears you are using Node.js. Is this correct? (y/n): y
	$ Do you want to set up SSH for your instances? (y/n): n

	Create the Environment(s)
	$ eb create env-dev

	Configure Application Settings
	From the ElasticBeanstalk dashboard: Configuration > Software Configuration > Node Command: npm start
	
	Continuously Deploy Changes
	$ eb deploy

	Verify
	$ eb open