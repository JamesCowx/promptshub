const promptData = [
  {
    id: "web-01",
    category: "web-development",
    icon: "&#x1F310;",
    title: "Responsive Landing Page",
    description: "Generate a complete, responsive landing page with hero section, features, pricing, and footer.",
    prompt: `Create a modern, responsive landing page for a [product/service]. Include:
- A hero section with a compelling headline, subtext, and CTA button
- A features section with 3-4 key benefits, each with an icon and description
- A pricing section with 3 tiers (Basic, Pro, Enterprise)
- A testimonials carousel with 3 customer quotes
- A footer with navigation links, social icons, and a newsletter signup form
- Use semantic HTML5, CSS Grid/Flexbox, and vanilla JavaScript
- Make it fully responsive (mobile-first) with smooth scroll behavior`,
    tags: ["html", "css", "javascript", "responsive"]
  },
  {
    id: "web-02",
    category: "web-development",
    icon: "&#x1F4BC;",
    title: "Portfolio Website",
    description: "Build a personal portfolio site to showcase projects, skills, and experience.",
    prompt: `Design a personal portfolio website with the following sections:
- Hero section with name, tagline, and a subtle particle or gradient background
- About section with a professional photo placeholder and bio
- Skills section displayed as a visual grid with proficiency indicators
- Projects section with filterable cards (Web, Mobile, Design)
- Experience timeline showing work history chronologically
- Contact section with a working form (using Formspree or similar)
- Dark/light mode toggle with smooth transition
- Use Tailwind CSS or vanilla CSS with CSS custom properties`,
    tags: ["html", "css", "portfolio", "tailwind"]
  },
  {
    id: "web-03",
    category: "web-development",
    icon: "&#x1F6CD;",
    title: "E-Commerce Product Page",
    description: "Create a detailed product page with gallery, variants, reviews, and add-to-cart flow.",
    prompt: `Build a complete e-commerce product page including:
- Product image gallery with thumbnails and zoom on hover
- Product title, price (with sale price option), and rating stars
- Variant selector (size, color) with stock status indicators
- Quantity selector and "Add to Cart" button with animation
- Product description with tabs (Description, Details, Shipping)
- Customer reviews section with star distribution chart
- Related products carousel at the bottom
- Sticky "Add to Cart" bar on mobile scroll
- Breadcrumb navigation and SEO meta tags`,
    tags: ["html", "css", "javascript", "ecommerce"]
  },
  {
    id: "web-04",
    category: "web-development",
    icon: "&#x1F4DD;",
    title: "Blog with CMS",
    description: "Create a full blog layout with article cards, categories, search, and pagination.",
    prompt: `Build a blog website with these features:
- Homepage with featured post hero and article card grid
- Category sidebar with post count badges
- Search functionality with live results dropdown
- Individual blog post template with:
  - Reading time estimate
  - Author bio card with avatar
  - Table of contents (auto-generated from headings)
  - Social share buttons (Twitter, LinkedIn, copy link)
  - Related posts at the bottom
- Pagination or infinite scroll
- RSS feed link
- SEO-optimized with Open Graph and Twitter Card meta tags`,
    tags: ["html", "css", "javascript", "blog", "seo"]
  },
  {
    id: "web-05",
    category: "web-development",
    icon: "&#x1F4CA;",
    title: "Dashboard Interface",
    description: "Design an admin dashboard with charts, tables, sidebar navigation, and KPI widgets.",
    prompt: `Create an admin dashboard UI with:
- Collapsible sidebar navigation with icons and sub-menus
- Top bar with search, notifications dropdown, and user avatar menu
- KPI stat cards (Revenue, Users, Orders, Conversion Rate) with trend indicators
- Interactive line/bar chart (use Chart.js or a CSS-only approach)
- Recent orders data table with sorting, filtering, and pagination
- Activity feed widget showing recent user actions
- Dark mode support with a toggle switch
- Breadcrumb navigation
- Use CSS Grid for the overall layout`,
    tags: ["html", "css", "javascript", "dashboard", "charts"]
  },
  {
    id: "web-06",
    category: "web-development",
    icon: "&#x1F4E6;",
    title: "SaaS Landing Page",
    description: "Design a high-converting SaaS landing page with product demo, pricing, and trust signals.",
    prompt: `Create a SaaS landing page optimized for conversion:
- Hero section with animated product screenshot/mockup
- Trusted-by logos bar (grayscale, color on hover)
- "How It Works" section with 3-step visual guide
- Feature grid with illustrations and benefit-focused copy
- Interactive product demo or animated code snippet showcase
- Pricing comparison table with annual/monthly toggle
- FAQ accordion section
- Exit-intent popup with discount offer
- Floating CTA button on mobile
- Social proof (customer logos, case study stats, testimonial video embed)`,
    tags: ["html", "css", "javascript", "saas", "landing-page"]
  },
  {
    id: "email-01",
    category: "professional-communication",
    icon: "&#x2709;",
    title: "Professional Email Footer",
    description: "Generate a complete, polished email signature with contact details, social links, and branding.",
    prompt: `Create a professional HTML email signature/footer with:
- Full name and job title with company name
- Phone number, email address, and website (with clickable links)
- Company logo (placeholder) aligned to the left or centered
- Social media icons (LinkedIn, Twitter/X, GitHub) styled consistently
- A subtle divider line separating signature from email body
- Optional: Professional headshot thumbnail
- Optional: "Book a meeting" Calendly link button
- Ensure it's table-based HTML for maximum email client compatibility
- Keep it clean, minimal, and mobile-responsive
- Include a legal disclaimer option for corporate use`,
    tags: ["email", "html", "signature", "professional"]
  },
  {
    id: "email-02",
    category: "professional-communication",
    icon: "&#x1F4E8;",
    title: "Cold Outreach Email",
    description: "Craft a compelling cold email template for sales, networking, or partnership outreach.",
    prompt: `Write a cold outreach email template following best practices:
- Personalize with [Recipient Name] and [Company Name]
- Hook in the first sentence that shows you did research
- Clear value proposition stating what problem you solve
- Social proof (mention a similar company you've helped, or a stat)
- Low-friction CTA (asking for a 15-minute call, not a demo)
- Keep it under 120 words total
- Include a P.S. line with additional social proof or a soft ask
- Subject line options: 3 variations (curiosity-based, direct, and benefit-driven)
- Follow-up email template for 3 days later (even shorter, just a bump)`,
    tags: ["email", "outreach", "sales", "template"]
  },
  {
    id: "email-03",
    category: "professional-communication",
    icon: "&#x1F4AC;",
    title: "Client Follow-Up Email",
    description: "Write a professional follow-up email after a meeting, proposal, or project milestone.",
    prompt: `Write a client follow-up email with these elements:
- Thank the client for their time [in the meeting / on the call]
- Recap key discussion points and decisions made (bullet format)
- List clear action items with owners and deadlines
- Attach or link any referenced documents
- Propose next meeting date/time with a calendar link
- Keep tone professional but warm
- Subject line: "[Meeting Name] – Recap & Next Steps"
- Include a brief summary paragraph before the bullet points
- Add your full signature block at the bottom`,
    tags: ["email", "client", "follow-up", "template"]
  },
  {
    id: "email-04",
    category: "professional-communication",
    icon: "&#x1F4C5;",
    title: "Meeting Request Email",
    description: "Write a professional meeting request that gets responses.",
    prompt: `Write a meeting request email that maximizes acceptance:
- Clear, specific subject line with purpose and benefit
- Brief introduction stating who you are (if unknown) or context (if known)
- Purpose of the meeting in one sentence
- Proposed 2-3 time slots across different days
- Estimated duration
- What the recipient will gain from attending
- Optional: Pre-read materials or agenda preview
- Calendar invite attachment instructions or Calendly link
- Polite and low-pressure closing
- Keep total length under 100 words`,
    tags: ["email", "meeting", "scheduling", "template"]
  },
  {
    id: "email-05",
    category: "professional-communication",
    icon: "&#x1F91D;",
    title: "LinkedIn Outreach Message",
    description: "Create a personalized LinkedIn connection request and follow-up message.",
    prompt: `Write a LinkedIn outreach sequence:
Connection Request (300 character limit):
- Mention something specific from their profile (recent post, shared connection, work history)
- State who you are in 3-5 words
- Add a soft, non-salesy reason for connecting

Follow-up Message (once accepted):
- Thank them for connecting
- Reference the thing you mentioned in your request
- Share a piece of value (article, insight, or resource related to their work)
- Soft ask: "Would you be open to a brief chat about [topic]?"
- Keep it conversational, never pitch in the first message

Second Follow-up (1 week later if no response):
- Gentle nudge referencing the shared resource
- No hard ask, just checking in`,
    tags: ["linkedin", "outreach", "networking", "template"]
  },
  {
    id: "resume-01",
    category: "career-resume",
    icon: "&#x1F4C4;",
    title: "ATS-Friendly Resume",
    description: "Generate a professional resume optimized for Applicant Tracking Systems with proper formatting.",
    prompt: `Create a professional, ATS-friendly resume with the following:
Professional Summary:
- 3-4 lines highlighting years of experience, key skills, and career achievements

Work Experience (3-4 roles, reverse chronological):
- Company name, location, dates, job title
- 4-5 bullet points per role using strong action verbs
- Quantify achievements with numbers and percentages
- Use industry keywords naturally

Skills section:
- Technical skills grouped by category (Languages, Frameworks, Tools, Cloud)
- Soft skills (Leadership, Communication, etc.)

Education:
- Degree, university, graduation year
- Relevant coursework or honors

Optional sections:
- Certifications with dates
- Side projects with live links and GitHub repos
- Languages (proficiency levels)
- Volunteer experience

Format as clean, single-column plain text first, then optionally provide LaTeX or HTML/CSS version.`,
    tags: ["resume", "ats", "career", "job-search"]
  },
  {
    id: "resume-02",
    category: "career-resume",
    icon: "&#x1F4DD;",
    title: "Cover Letter for Tech Roles",
    description: "Write a compelling cover letter tailored for software engineering or tech positions.",
    prompt: `Write a cover letter for a [Job Title] position at [Company Name]:

Opening paragraph:
- Express genuine enthusiasm for the company's mission or product
- Mention the specific role you're applying for
- Hook: Reference a recent company achievement, launch, or news

Body paragraph 1 - Your impact:
- Describe a specific project where you delivered measurable results
- Connect your experience directly to the role's requirements
- Use the STAR method implicitly (Situation, Task, Action, Result)

Body paragraph 2 - Why this company:
- Show you've researched the company deeply
- Connect your values or career goals with their mission
- Mention a specific technology or approach they use that excites you

Closing:
- Reiterate interest and fit
- Call to action (looking forward to discussing further)
- Professional sign-off with full contact details

Keep the entire letter to 250-350 words.`,
    tags: ["cover-letter", "career", "job-application"]
  },
  {
    id: "resume-03",
    category: "career-resume",
    icon: "&#x1F4C8;",
    title: "LinkedIn Profile Optimization",
    description: "Optimize every section of a LinkedIn profile to attract recruiters and opportunities.",
    prompt: `Optimize a LinkedIn profile with these elements:

Headline:
- Use all 220 characters
- Include job title, key skills, and value proposition
- Use keywords recruiters search for

About Section:
- Hook in first 3 lines (what shows before "see more")
- Tell your career story in first person
- Include measurable achievements and impact
- End with what you're looking for or open to

Featured Section:
- Pin 2-3 key pieces of content (portfolio, article, project demo)

Experience entries:
- Write compelling descriptions with bullet points
- Add rich media (images, videos, presentations) to each role
- Tag skills for each position

Skills section:
- List top 50 relevant skills
- Pin top 3 skills for endorsements

Recommendations:
- Strategy for requesting meaningful recommendations

Activity:
- Posting strategy (what to share and how often)`,
    tags: ["linkedin", "profile", "personal-branding"]
  },
  {
    id: "resume-04",
    category: "career-resume",
    icon: "&#x1F3A4;",
    title: "Elevator Pitch & Bio",
    description: "Create short, medium, and long versions of a professional bio for different contexts.",
    prompt: `Write three versions of a professional bio:

One-liner (15-20 words):
- Name, role, what you do, and who you help
- Perfect for Twitter/X bio, conference name badges

Short bio (50-75 words):
- Current role and company
- Key expertise areas (2-3)
- Notable achievement or credential
- Personal touch or unique angle
- Use for guest posts, podcast intros

Long bio (150-200 words):
- Career journey narrative (where you started vs. now)
- Major accomplishments and projects
- Education and certifications
- Publications, talks, or open source contributions
- Personal interests or side projects
- Use for "About" pages, speaker profiles, book covers

Make all versions sound natural, not robotic. Write in first person.`,
    tags: ["bio", "personal-branding", "networking"]
  },
  {
    id: "resume-05",
    category: "career-resume",
    icon: "&#x1F4BC;",
    title: "Interview Preparation Guide",
    description: "Generate a comprehensive interview preparation plan with behavioral questions and answers.",
    prompt: `Create an interview preparation plan for a [Job Title] role:

Research phase:
- Company research checklist (products, funding, leadership, news, competitors)
- Role-specific research (tech stack, team structure from LinkedIn)
- Prepare 5 thoughtful questions to ask the interviewer

Behavioral questions with STAR-format answer outlines:
1. "Tell me about yourself" - 60-second professional narrative
2. "Describe a challenging project" - technical depth + collaboration
3. "Tell me about a time you failed" - growth mindset + learnings
4. "How do you handle disagreements?" - conflict resolution example
5. "Describe your ideal work environment" - culture fit
6. "Where do you see yourself in 5 years?" - ambition + realism
7. "Why do you want to work here?" - company-specific passion
8. "Tell me about leading a team/initiative" - leadership example

Technical preparation:
- Core concepts to review based on the role
- System design talking points
- Portfolio project walkthrough outline

Closing strategy:
- How to ask about next steps
- Thank-you email template to send within 2 hours`,
    tags: ["interview", "career", "preparation"]
  },
  {
    id: "db-01",
    category: "database-backend",
    icon: "&#x1F5C4;",
    title: "Database Schema Design",
    description: "Design a complete database schema with tables, relationships, indexes, and constraints.",
    prompt: `Design a database schema for a [type of application, e.g., e-commerce, social media, SaaS]:

Requirements:
- List all entities/tables with their purposes
- Define columns for each table with data types, constraints (NOT NULL, UNIQUE, DEFAULT)
- Establish relationships (one-to-one, one-to-many, many-to-many) with foreign keys
- Add appropriate indexes for query performance (B-tree, GIN, etc.)
- Include created_at and updated_at timestamp columns on all tables
- Use UUIDs for primary keys where appropriate
- Add soft delete support (deleted_at column) for critical tables
- Document enum types and check constraints
- Consider partitioning strategy for large tables

Output:
- Entity Relationship Diagram (in text/Mermaid format)
- SQL DDL statements for creating all tables
- Seed data scripts with realistic sample data (10-20 rows per table)
- Common query examples (JOINs, aggregations, window functions)
- Index justification: explain why each index was chosen`,
    tags: ["database", "sql", "schema", "postgresql", "mysql"]
  },
  {
    id: "db-02",
    category: "database-backend",
    icon: "&#x1F517;",
    title: "RESTful API Design",
    description: "Design a complete REST API with endpoints, request/response schemas, and error handling.",
    prompt: `Design a RESTful API for a [resource type, e.g., task management, user profiles, inventory]:

API Specification:
- Base URL and versioning strategy (e.g., /api/v1/)
- Authentication method (JWT, OAuth2, API Key) with header format
- Rate limiting policy

Endpoints:
For each resource, define:
- Method, Path, Description
- Request headers (Auth, Content-Type)
- Request body schema (JSON) with all fields, types, and validation rules
- Query parameters for filtering, sorting, pagination
- Success response schema (200, 201)
- Error responses with consistent format:
  {
    "error": { "code": "VALIDATION_ERROR", "message": "...", "details": [...] }
  }

Include these endpoint categories:
- CRUD operations (Create, Read, Update, Delete)
- List with pagination, sorting, and filtering
- Bulk operations (create/update multiple)
- Search endpoint with fuzzy matching
- Relationship endpoints (nested resources)

Provide OpenAPI/Swagger 3.0 YAML specification.`,
    tags: ["api", "rest", "backend", "openapi"]
  },
  {
    id: "db-03",
    category: "database-backend",
    icon: "&#x2699;",
    title: "GraphQL API Design",
    description: "Design a GraphQL schema with types, queries, mutations, and subscriptions.",
    prompt: `Design a GraphQL API for a [domain, e.g., social network, project management]:

Schema Definition:
- Define all Object types with fields and relationships
- Input types for mutations
- Enum types for fixed value sets
- Union and Interface types where appropriate

Queries:
- Single entity fetch by ID
- List query with pagination (cursor-based using Relay spec)
- Filtering and sorting arguments
- Search query with relevance scoring
- Aggregation queries (counts, sums, groups)

Mutations:
- Create, Update, Delete for each entity
- Input validation rules in schema comments
- Return the mutated object(s) in the response
- Bulk mutation operations

Subscriptions:
- Real-time events to subscribe to (create, update, delete)
- Filtering subscriptions by criteria

Include:
- DataLoader pattern for avoiding N+1 queries
- Field-level authorization directives
- Full SDL (Schema Definition Language) output
- Resolver function skeletons in your language of choice`,
    tags: ["graphql", "api", "backend", "schema"]
  },
  {
    id: "db-04",
    category: "database-backend",
    icon: "&#x1F4E5;",
    title: "Database Migration Strategy",
    description: "Create a safe database migration plan with rollback procedures and zero-downtime strategies.",
    prompt: `Design a database migration plan for adding/modifying [schema changes]:

Pre-migration:
- Backup strategy and verification steps
- Dry-run plan on staging environment
- Performance impact assessment (lock duration, index build time)

Migration steps (zero-downtime approach):
1. Add new columns as nullable (no default values that would lock table)
2. Deploy application code that writes to both old and new columns
3. Backfill existing data with a batch script (process in chunks with delays)
4. Set NOT NULL constraint and defaults after backfill completes
5. Deploy application code that reads from new columns only
6. Drop old columns after verification period (1 week)

Provide:
- SQL migration scripts (up and down) for each step
- Rollback procedure for each step if issues arise
- Monitoring queries to verify migration progress
- Estimated time for each step based on row count
- Feature flag strategy for gradual rollout`,
    tags: ["database", "migration", "postgresql", "devops"]
  },
  {
    id: "db-05",
    category: "database-backend",
    icon: "&#x1F527;",
    title: "Backend Service Architecture",
    description: "Design a complete backend service with folder structure, middleware, and error handling patterns.",
    prompt: `Architect a backend service for a [type of app]:

Project structure:
- Folder/file organization following clean architecture or MVC pattern
- Configuration management (environment variables, secrets)
- Dependency injection setup

Core components:
- Router/Controller layer (request validation, response formatting)
- Service/Business logic layer (all business rules)
- Repository/Data access layer (database queries)
- Middleware pipeline (auth, logging, rate limiting, CORS, compression)

Error handling:
- Custom error classes (NotFoundError, ValidationError, AuthError, etc.)
- Global error handler middleware
- Consistent error response format
- Proper HTTP status code usage

Logging:
- Structured logging (JSON format)
- Log levels (debug, info, warn, error)
- Request ID propagation
- Redaction of sensitive fields (passwords, tokens, PII)

Security:
- Input sanitization and validation
- SQL injection prevention (parameterized queries)
- CORS policy configuration
- Helmet or similar security headers
- Rate limiting by IP and user

Provide code skeleton in Node.js/Express, Python/FastAPI, or Go/Gin.`,
    tags: ["backend", "architecture", "api", "server"]
  },
  {
    id: "cloud-01",
    category: "cloud-devops",
    icon: "&#x2601;",
    title: "AWS Architecture Design",
    description: "Design a scalable, secure AWS cloud architecture for a web application.",
    prompt: `Design an AWS architecture for a [type of application] with these requirements:

Compute:
- Choose between EC2, ECS Fargate, or Lambda based on workload
- Auto-scaling configuration with min/max instances and scaling policies
- Load balancer (ALB/NLB) configuration

Storage:
- Database choice (RDS, DynamoDB, Aurora) with justification
- Multi-AZ deployment for high availability
- Read replicas configuration
- Backup and retention policy

Networking:
- VPC with public and private subnets across 2+ AZs
- NAT Gateway for outbound traffic from private subnets
- Security groups with least-privilege rules
- WAF rules for common vulnerabilities

CDN & DNS:
- CloudFront distribution with custom domain and SSL
- Route 53 DNS configuration
- S3 for static assets with CloudFront origin

Security:
- IAM roles with least privilege (service roles, not user keys)
- Secrets Manager for credentials
- KMS for encryption at rest
- GuardDuty and CloudTrail enabled

Monitoring:
- CloudWatch dashboards and alarms
- Centralized logging with CloudWatch Logs

Output as a clear architecture diagram description and CloudFormation/Terraform skeleton.`,
    tags: ["aws", "cloud", "architecture", "infrastructure"]
  },
  {
    id: "cloud-02",
    category: "cloud-devops",
    icon: "&#x1F504;",
    title: "CI/CD Pipeline",
    description: "Set up a complete CI/CD pipeline with build, test, and deployment stages.",
    prompt: `Design a CI/CD pipeline for a [tech stack] application:

Pipeline stages:
1. Trigger:
   - On push to main/develop branches
   - On pull request creation
   - Manual trigger option for deployments

2. Build:
   - Install dependencies with caching
   - Compile/transpile code
   - Build Docker image with multi-stage build
   - Tag image with git SHA and branch name

3. Test:
   - Linting and code formatting checks
   - Unit tests with coverage threshold (80%+)
   - Integration tests against service containers
   - Security vulnerability scan (dependencies + container)
   - Static analysis / SAST

4. Staging Deploy:
   - Deploy to staging environment
   - Run smoke tests and E2E tests
   - Automated accessibility and performance testing

5. Production Deploy:
   - Approval gate (manual approval required)
   - Blue-green or canary deployment strategy
   - Database migrations run automatically
   - Health check with automatic rollback on failure
   - Post-deploy monitoring window

6. Notifications:
   - Slack/Discord notifications for build status
   - Tag the committer on failure

Provide sample config for GitHub Actions, GitLab CI, or CircleCI.`,
    tags: ["cicd", "devops", "github-actions", "docker"]
  },
  {
    id: "cloud-03",
    category: "cloud-devops",
    icon: "&#x1F433;",
    title: "Docker Compose Setup",
    description: "Create a Docker Compose configuration for a full-stack development environment.",
    prompt: `Create a Docker Compose configuration for a local development environment:

Services:
1. Application server (Node.js/Python/Go):
   - Hot reload enabled via volume mounts
   - Debug port exposed
   - Environment variables from .env file

2. Database (PostgreSQL/MySQL):
   - Persistent volume for data
   - Initialization scripts mounted for seeding
   - Health check configured

3. Redis:
   - For caching and session storage
   - Persistent volume

4. Optional services based on stack:
   - Elasticsearch for search
   - RabbitMQ or Kafka for message queue
   - MinIO for S3-compatible storage
   - MailHog for email testing

Configuration:
- Custom network with static IPs
- Health check dependencies (depends_on with condition)
- Resource limits (CPU, memory)
- Restart policies
- Logging driver configuration

Also include:
- .env.example file
- Makefile or npm scripts for common commands (up, down, logs, reset)
- VSCode devcontainer configuration`,
    tags: ["docker", "docker-compose", "development", "devops"]
  },
  {
    id: "cloud-04",
    category: "cloud-devops",
    icon: "&#x2630;",
    title: "Kubernetes Deployment",
    description: "Create Kubernetes manifests for deploying a production application with best practices.",
    prompt: `Create Kubernetes manifests for deploying a [application type]:

Resources to define:
1. Deployment:
   - Replicas with pod anti-affinity for HA
   - Resource requests and limits
   - Liveness and readiness probes
   - Startup probe for slow-starting apps
   - Rolling update strategy (maxSurge: 1, maxUnavailable: 0)
   - Pod security context (non-root user, read-only filesystem)

2. Service:
   - ClusterIP type for internal services
   - Named ports with protocol
   - Session affinity if needed

3. Ingress:
   - TLS termination with cert-manager annotation
   - Path-based routing to services
   - CORS and security headers via annotations

4. ConfigMap and Secret:
   - Non-sensitive config in ConfigMap
   - Secrets referenced via environment variables
   - Use external secrets operator for cloud provider integration

5. HorizontalPodAutoscaler:
   - CPU and memory targets
   - Min/max replicas

6. PodDisruptionBudget:
   - minAvailable or maxUnavailable

7. NetworkPolicy:
   - Deny all by default, allow specific ingress/egress

8. ServiceMonitor (Prometheus):
   - Metrics scraping configuration

Also provide a Helm chart structure or Kustomize overlay for staging/production variants.`,
    tags: ["kubernetes", "k8s", "deployment", "devops"]
  },
  {
    id: "cloud-05",
    category: "cloud-devops",
    icon: "&#x1F30D;",
    title: "Infrastructure as Code",
    description: "Write Terraform/Pulumi code for provisioning complete cloud infrastructure.",
    prompt: `Provision cloud infrastructure using Infrastructure as Code for a [provider: AWS/GCP/Azure]:

Required resources:
- VPC/Network with subnets, route tables, and NAT/Internet gateway
- Compute (EC2, Cloud Run, App Service, or Kubernetes cluster)
- Managed database with automated backups
- Object storage (S3/GCS/Blob) with lifecycle policies
- CDN with custom domain and SSL certificate
- DNS records
- Secret storage (Secrets Manager, Secret Manager, Key Vault)
- Monitoring and alerting

Best practices:
- Use modules or components for reusability
- Remote state storage with locking (S3 + DynamoDB, GCS, etc.)
- Variables for environment-specific values (dev, staging, prod)
- Outputs for connection strings, endpoints, etc.
- Tag all resources with environment, owner, and cost-center
- Use data sources to reference existing resources
- Implement least-privilege IAM/service accounts

Provide:
- Main configuration file(s)
- Variables file with descriptions and defaults
- Terraform workspaces or Pulumi stack configuration
- README with setup instructions
- Estimated monthly cost breakdown`,
    tags: ["terraform", "iac", "cloud", "aws", "devops"]
  },
  {
    id: "app-01",
    category: "app-development",
    icon: "&#x1F4F1;",
    title: "Full-Stack Web App",
    description: "Generate a complete full-stack application with frontend, backend, and database.",
    prompt: `Build a full-stack [type of app, e.g., task manager, habit tracker, chat app]:

Tech stack requirements:
- Frontend: React/Vue/Svelte with TypeScript
- Backend: Node.js/Python/Go with REST or GraphQL API
- Database: PostgreSQL with an ORM/query builder
- Authentication: JWT-based with refresh tokens

Features to implement:
1. User authentication (signup, login, logout, password reset)
2. CRUD operations for the main resource
3. List view with pagination, sorting, and filtering
4. Detail view with related data
5. Form with client-side and server-side validation
6. File upload with image resizing
7. Search functionality
8. Email notifications (welcome, reset password)
9. Role-based access control (admin, user)
10. Activity/audit log

Project structure:
- Monorepo with shared types package
- Environment configuration (.env.example)
- Database migrations and seeders
- API documentation (Swagger or Postman collection)
- E2E test for the happy path
- Docker Compose for local development
- README with setup instructions

Provide the complete directory structure and key file implementations.`,
    tags: ["full-stack", "react", "node", "typescript", "app"]
  },
  {
    id: "app-02",
    category: "app-development",
    icon: "&#x1F4F2;",
    title: "Mobile App (React Native)",
    description: "Build a cross-platform mobile app with navigation, state management, and native features.",
    prompt: `Create a React Native app for [purpose]:

Setup and configuration:
- Initialize with Expo or React Native CLI (specify which)
- TypeScript configuration
- Navigation setup (React Navigation with stack and tab navigators)
- State management (Zustand, Redux Toolkit, or Context API)
- API client setup with interceptors for auth tokens

Screens (5-7 screens):
- Onboarding flow (3 screens with swipe navigation)
- Authentication (Login, Signup, Forgot Password)
- Home/Dashboard screen with data summary
- List screen with pull-to-refresh and infinite scroll
- Detail screen with animations
- Profile/Settings screen
- Search screen with debounced input

Features:
- Push notifications setup (Firebase Cloud Messaging)
- Biometric authentication (Face ID / Fingerprint)
- Camera/Gallery image picker
- Offline support with local storage and sync queue
- Deep linking configuration
- Dark mode support
- Haptic feedback on interactions
- Skeleton loading states

Provide the complete App.tsx, navigation structure, and 2-3 screen implementations.`,
    tags: ["react-native", "mobile", "typescript", "app"]
  },
  {
    id: "app-03",
    category: "app-development",
    icon: "&#x1F5A5;",
    title: "Desktop App (Electron)",
    description: "Build a cross-platform desktop application with Electron and modern web technologies.",
    prompt: `Create an Electron desktop app for [purpose]:

Architecture:
- Main process: window management, system tray, native menus, IPC handlers
- Renderer process: React/Vue UI with all display logic
- Preload script: secure bridge between main and renderer

Features:
- Custom application menu with keyboard shortcuts
- System tray with context menu and notifications
- Auto-updater (electron-updater) with release channels
- File system access (open, save dialogs, recent files list)
- Window state persistence (position, size, maximized state)
- Multiple windows support (main + settings/modal)
- Secure IPC communication (contextBridge, no nodeIntegration)
- Crash reporting and error logging
- Installer configuration (electron-builder for Windows NSIS, macOS DMG, Linux AppImage)

Security:
- Content Security Policy headers
- No remote content in production
- Input validation on all IPC channels

Provide:
- Complete main process code
- Preload script
- Package.json with all electron scripts
- electron-builder configuration
- Basic UI shell with navigation`,
    tags: ["electron", "desktop", "javascript", "app"]
  },
  {
    id: "app-04",
    category: "app-development",
    icon: "&#x1F310;",
    title: "Chrome Browser Extension",
    description: "Build a feature-rich Chrome extension with popup, content scripts, and background workers.",
    prompt: `Build a Chrome browser extension that [purpose, e.g., productivity tool, tab manager, scraper]:

Extension structure:
- manifest.json (Manifest V3) with all permissions
- Popup UI (React or vanilla HTML/CSS/JS)
- Content script(s) injected into matching pages
- Background service worker (non-persistent)
- Options page for user configuration

Features:
- Popup with clean UI showing extension state
- Content script that interacts with page DOM
- Message passing between popup, content script, and background
- Storage API for persisting user settings (chrome.storage.sync and .local)
- Context menu integration (right-click actions)
- Keyboard shortcut (chrome.commands)
- Badge text on extension icon for status
- Notifications API for alerts
- OAuth2 authentication flow if needed

Permissions (request only what's needed):
- activeTab vs broad host permissions
- storage, notifications, contextMenus, alarms
- Optional permissions for advanced features

Publishing:
- Store listing description (132 character summary + detailed)
- Screenshot guidelines (1280x800 or 640x400)
- Privacy policy template if handling user data
- Version numbering and release notes format

Provide the complete manifest.json and key JavaScript files.`,
    tags: ["chrome-extension", "browser", "javascript", "extension"]
  },
  {
    id: "app-05",
    category: "app-development",
    icon: "&#x1F4F3;",
    title: "Progressive Web App (PWA)",
    description: "Build a PWA with offline support, install prompts, push notifications, and native-like UX.",
    prompt: `Create a Progressive Web App (PWA) for [purpose]:

Core PWA requirements:
- Web App Manifest with icons (192px and 512px), theme color, display: standalone
- Service Worker for offline caching (Workbox or custom)
- Responsive design that works on all screen sizes
- HTTPS enforcement

Features:
- Offline-first architecture:
  - Cache shell (HTML, CSS, JS) on install
  - Cache API responses with network-first strategy
  - Offline fallback page
  - Background sync for queued actions
- Install prompt:
  - Custom "Add to Home Screen" button
  - BeforeInstallPromptEvent handling
  - Post-install analytics
- Push notifications:
  - Permission request flow (soft ask first, then browser prompt)
  - Service worker push event handling
  - Notification click behavior (open specific page)
- App-like UX:
  - Smooth page transitions (View Transitions API or custom)
  - Pull-to-refresh
  - Bottom navigation bar (mobile)
  - Splash screen matching theme color
  - iOS Safari specific meta tags (apple-touch-icon, status bar style)

Performance:
- Lighthouse PWA score target: 95+
- Core Web Vitals optimization (LCP, FID, CLS)
- Code splitting and lazy loading

Provide the complete service worker, manifest.json, and registration code.`,
    tags: ["pwa", "offline", "mobile", "service-worker"]
  },
  {
    id: "content-01",
    category: "content-creation",
    icon: "&#x270D;",
    title: "SEO Blog Post",
    description: "Write a comprehensive, SEO-optimized blog post that ranks and engages readers.",
    prompt: `Write an SEO-optimized blog post on "[topic]" targeting the keyword "[primary keyword]":

Structure:
- H1 title: Include primary keyword, be compelling (50-60 characters)
- Meta description: 150-160 characters with primary keyword and CTA
- URL slug: Short, keyword-rich, hyphenated

Introduction (first 100 words):
- Hook the reader with a relatable problem or surprising stat
- Include the primary keyword in the first paragraph
- Preview what the article will cover

Body:
- Use H2s for main sections, H3s for subsections
- Each section addresses one aspect of the topic
- Include:
  - 2-3 practical examples or case studies
  - Step-by-step instructions where applicable
  - Data/statistics from reputable sources (reference them)
  - A comparison table if comparing options
- Naturally include LSI keywords and related terms
- Keep paragraphs short (2-4 sentences)
- Use bullet points and numbered lists for scannability

Conclusion:
- Summarize key takeaways (3-5 bullet points)
- Include a clear call-to-action (comment, share, try the tool, etc.)
- End with an engaging question to encourage comments

On-page SEO:
- Internal link suggestions to related content
- External links to 2-3 authoritative sources
- Image alt text suggestions
- FAQ schema markup (3-5 questions) at the end

Target length: 1,500-2,500 words`,
    tags: ["blog", "seo", "content", "writing"]
  },
  {
    id: "content-02",
    category: "content-creation",
    icon: "&#x1F4E3;",
    title: "Product Launch Announcement",
    description: "Create a multi-channel product launch content package including press release, social posts, and email.",
    prompt: `Create a product launch content package for "[Product Name]":

Press Release (400-500 words):
- Headline: Newsworthy angle, include company and product name
- Dateline: City, Date
- Lead paragraph: 5 W's in 2-3 sentences
- Quote from CEO/Founder about the vision
- Quote from early customer/beta user (if available)
- Product features and benefits (3-5 key points)
- Pricing and availability
- About the company boilerplate (2 sentences)
- Media contact information
- ### at the end

Email Announcement:
- Subject line: 3 options (curiosity-driven, benefit-driven, urgency-driven)
- Preview text: 40-50 characters
- Body:
  - Headline celebrating the launch
  - 2-3 sentences on the problem it solves
  - 3 key features with benefit-focused copy
  - Social proof (beta users, waitlist numbers)
  - Clear CTA button
  - P.S. with early adopter discount

Social Media (one for each platform):
- LinkedIn: Professional tone, 150-200 words, 3 hashtags
- Twitter/X: Punchy, 280 characters, 2 hashtags, image/video description
- Instagram: Visual-focused caption, emoji-rich, 5 hashtags
- Product Hunt: Tagline, description, first comment template

Launch checklist:
- Pre-launch tasks (7 days before)
- Launch day timeline (hour by hour)
- Post-launch follow-up (48 hours after)`,
    tags: ["marketing", "launch", "content", "social-media"]
  },
  {
    id: "content-03",
    category: "content-creation",
    icon: "&#x1F4D6;",
    title: "Technical Documentation",
    description: "Write clear, developer-friendly technical documentation for an API, library, or SDK.",
    prompt: `Write technical documentation for [product/library/api]:

Structure:
1. Overview (50-100 words)
   - What it does, who it's for, key benefits
   - Badges (npm version, build status, license)

2. Quick Start / Getting Started
   - Prerequisites (versions, accounts needed)
   - Installation (with package manager commands)
   - Minimal working example (copy-paste ready, 10-20 lines)
   - Expected output/screenshot

3. Core Concepts
   - Architecture overview (diagram in text)
   - Key terminology (glossary-style, 5-10 terms)
   - Mental model for how the system works

4. API Reference
   For each method/function:
   - Signature with TypeScript types
   - Description of what it does
   - Parameters table (name, type, required, default, description)
   - Return value (type and description)
   - Example code (realistic, not just foo/bar)
   - Error scenarios and how to handle them

5. Guides (3-5 common use cases):
   - "How to [accomplish specific task]"
   - Step-by-step with code snippets at each step
   - Common pitfalls and how to avoid them

6. Migration Guide (if applicable)
   - Breaking changes from previous version
   - Step-by-step upgrade instructions

7. FAQ
   - 5-8 common questions with concise answers

Style: Active voice, second person ("you"), present tense, imperative mood for instructions.`,
    tags: ["documentation", "technical-writing", "api", "developer"]
  },
  {
    id: "content-04",
    category: "content-creation",
    icon: "&#x1F4C5;",
    title: "Social Media Content Calendar",
    description: "Plan a month of social media content with post ideas, captions, and visual concepts.",
    prompt: `Create a 30-day social media content calendar for [brand/company]:

Platform: [LinkedIn, Twitter/X, Instagram, TikTok — pick primary and secondary]

Content pillars (3-4):
- Educational/How-to: Teach something valuable related to your niche
- Behind-the-scenes: Humanize the brand
- Social proof: Case studies, testimonials, results
- Engagement: Polls, questions, community spotlight

Calendar format (spreadsheet-style):
For each day, define:
- Day/Date
- Content pillar
- Post type (image, carousel, video, text-only, poll)
- Topic/Hook (one compelling line)
- Caption (full draft for key posts, outline for others)
- Visual concept (describe the image/video)
- Hashtags (5-10 relevant, mix of popular and niche)
- Best posting time
- Call-to-action

Special days to plan for:
- 4 educational posts (1 per week — deep dives)
- 2 behind-the-scenes posts
- 2 customer story/testimonial posts
- 4 engagement posts (polls, "hot take" questions)
- 2 curated content shares (with added commentary)
- 2 promotional posts (product feature, offer)
- Fill remaining days with mix of the above

Engagement strategy:
- Reply templates for common comment types
- Outreach plan (engage with 10 accounts per day in niche)`,
    tags: ["social-media", "content", "marketing", "calendar"]
  },
  {
    id: "content-05",
    category: "content-creation",
    icon: "&#x1F4EC;",
    title: "Email Newsletter Template",
    description: "Design a high-converting email newsletter with proven structure and engagement tactics.",
    prompt: `Create an email newsletter template for [topic/industry]:

Subject line strategy (provide 3 for each type):
- Curiosity gap: Leaves reader wanting more
- How-to/Listicle: Promise of practical value
- Personal story: Emotional hook

Newsletter structure:
1. Header:
   - Logo or publication name
   - Consistent sender name and email

2. Personal note (2-3 sentences):
   - Brief, personal opener from the author
   - Set context for the edition

3. Main content (choose one format per edition):
   - Deep dive essay (800-1200 words)
   - Curated links with commentary (5-7 links, 30-50 words each)
   - Interview/Q&A spotlight
   - Case study breakdown

4. Visual elements:
   - 1-2 relevant images or screenshots
   - Pull quote or stat highlight box
   - Simple diagrams for complex concepts

5. Resource roundup (3 items):
   - Tool recommendation with use case
   - Article/book worth reading
   - Interesting finding or data point

6. Call-to-action (pick one per edition):
   - Reply to this email with your thoughts
   - Share this with a colleague
   - Check out our [product/resource]
   - Take this week's poll

7. Footer:
   - Unsubscribe link (required)
   - Social media links
   - "You're receiving this because..." reminder
   - Physical mailing address

Writing voice: Conversational, like writing to one friend. Avoid corporate jargon.`,
    tags: ["email", "newsletter", "content", "marketing"]
  },
  {
    id: "design-01",
    category: "design-ux",
    icon: "&#x1F3A8;",
    title: "UI Color Palette Generator",
    description: "Generate a complete, harmonious color system for a web or mobile application.",
    prompt: `Create a comprehensive UI color system for a [type of app/brand]:

Brand colors (choose based on brand personality):
- Primary: Main brand color (hex, RGB, HSL)
- Secondary: Complementary accent color
- Success: Green tone for positive actions
- Warning: Amber/Yellow tone for caution
- Error/Danger: Red tone for destructive actions
- Info: Blue tone for informational elements

Neutral palette (8-10 shades):
- 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- Use for text, backgrounds, borders, and surfaces

Semantic color tokens:
- --color-text-primary
- --color-text-secondary
- --color-text-disabled
- --color-surface-primary
- --color-surface-secondary
- --color-surface-elevated
- --color-border-default
- --color-border-focus
- --color-border-error

Light and dark mode variants for each token.

Accessibility considerations:
- Contrast ratios for all text/background combinations (WCAG AA minimum 4.5:1)
- Don't rely on color alone to convey information
- Focus ring styling (visible, consistent, offset)

Usage guidelines:
- 60-30-10 rule for color distribution
- When to use each semantic token
- Gradient combinations that work with the palette

Output as CSS custom properties on :root, with .dark class overrides.`,
    tags: ["design", "color", "css", "accessibility"]
  },
  {
    id: "design-02",
    category: "design-ux",
    icon: "&#x1F4D0;",
    title: "Design System Components",
    description: "Build a foundational design system with reusable UI components and documentation.",
    prompt: `Create a design system foundation with these components:

Tokens:
- Spacing scale (4px base): 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- Border radius: none (0), sm (4px), md (8px), lg (12px), xl (16px), full (9999px)
- Font sizes: xs (12px), sm (14px), base (16px), lg (18px), xl (20px), 2xl (24px), 3xl (30px), 4xl (36px)
- Font weights: regular (400), medium (500), semibold (600), bold (700)
- Shadows: sm, md, lg, xl (with box-shadow values)
- Z-index scale: dropdown (100), sticky (200), modal (300), toast (400), tooltip (500)
- Transitions: fast (150ms), normal (250ms), slow (350ms)

Components (each with all states: default, hover, focus, active, disabled, loading):
1. Button: variants (primary, secondary, outline, ghost), sizes (sm, md, lg), with icon support
2. Input: text, email, password, textarea, with label, helper text, error state
3. Select: native-style with custom styling
4. Checkbox & Radio: custom styled with keyboard support
5. Toggle/Switch: with on/off labels
6. Badge/Tag: with color variants and dismissible option
7. Card: with header, body, footer slots and hover elevation
8. Modal/Dialog: with overlay, close button, focus trap, ESC to close
9. Toast/Notification: success, error, warning, info variants with auto-dismiss
10. Tabs: horizontal with active indicator animation
11. Tooltip: top, bottom, left, right positioning
12. Skeleton loader: text, circle, rectangle shapes with shimmer animation

Output as framework-agnostic HTML/CSS first, with React component examples.`,
    tags: ["design-system", "components", "css", "react"]
  },
  {
    id: "design-03",
    category: "design-ux",
    icon: "&#x1F3AF;",
    title: "User Flow Diagram",
    description: "Map out a complete user flow for a feature or application, from entry to completion.",
    prompt: `Create a detailed user flow for [feature/application]:

Entry points (where users start):
- Direct URL / bookmarks
- Email link
- App notification
- Search engine result
- Social media referral

Flow steps in Mermaid diagram format:
- Each step shows: Screen/Page name, User action, System response
- Include decision points (Yes/No branches)
- Show error states and recovery paths
- Indicate where data is saved (auto-save points)
- Mark steps that trigger emails or notifications

Edge cases to document:
- New user (first time, no data)
- Returning user with incomplete data
- User on slow connection (loading states)
- User on mobile vs. desktop
- User with accessibility needs (screen reader)
- User who abandons mid-flow (resume behavior)
- Maximum data limits reached
- Concurrency (another user editing same data)

States for each screen:
- Loading (skeleton/spinner)
- Empty (no data yet — show helpful empty state)
- Has data (normal state)
- Error (fetch failed — show retry option)
- Edge case (unusual but possible state)

User emotions at each step:
- Map the emotional journey (frustrated, confused, satisfied, delighted)
- Identify drop-off risks and propose mitigations

Output the complete flow as a Mermaid flowchart and a text description.`,
    tags: ["ux", "user-flow", "design", "mermaid"]
  },
  {
    id: "design-04",
    category: "design-ux",
    icon: "&#x267F;",
    title: "Accessibility Audit Checklist",
    description: "Generate a comprehensive accessibility checklist and implementation guide for WCAG compliance.",
    prompt: `Create an accessibility implementation checklist targeting WCAG 2.1 AA standards:

Perceivable:
- [ ] All images have meaningful alt text (decorative images have alt="")
- [ ] Color is not the only means of conveying information
- [ ] Text has a minimum contrast ratio of 4.5:1 (3:1 for large text)
- [ ] Content is readable when zoomed to 200%
- [ ] Text can be resized up to 200% without loss of functionality
- [ ] No images of text used where text can achieve the same effect

Operable:
- [ ] All functionality is available from a keyboard (Tab, Enter, Escape, Arrow keys)
- [ ] Focus order is logical and visible (focus ring on all interactive elements)
- [ ] No keyboard traps (focus can move away from any component)
- [ ] Skip navigation link is provided
- [ ] Pages have descriptive titles
- [ ] Link text is meaningful out of context (no "click here")
- [ ] No content flashes more than 3 times per second

Understandable:
- [ ] Page language is set (<html lang="en">)
- [ ] Form inputs have associated labels
- [ ] Error messages are clear and suggest corrections
- [ ] Consistent navigation across pages
- [ ] Consistent identification of components with same functionality

Robust:
- [ ] Valid HTML (passes W3C validator)
- [ ] ARIA roles, states, and properties are used correctly
- [ ] Name, role, value are communicated for all UI components
- [ ] Status messages are announced to screen readers (aria-live)

Implementation code snippets for:
- Skip navigation link
- Focus trap for modals
- aria-live region for dynamic content
- Form error announcement
- Custom accessible dropdown/select
- Accessible drag and drop`,
    tags: ["accessibility", "wcag", "a11y", "design"]
  },
  {
    id: "design-05",
    category: "design-ux",
    icon: "&#x1F4F1;",
    title: "Website Redesign Strategy",
    description: "Plan a complete website redesign with research, strategy, wireframes, and rollout plan.",
    prompt: `Create a website redesign strategy for [website URL / company]:

Phase 1 — Research & Audit (Week 1-2):
- Current site analytics review (top pages, bounce rates, conversion rates)
- Heatmap and user session recording analysis
- Competitor analysis (3-5 direct competitors)
- User survey questions (10-15 questions to send to existing users)
- Stakeholder interview questions (goals, constraints, must-haves)
- Content inventory and audit template
- Technical audit (page speed, mobile-friendliness, accessibility score)

Phase 2 — Strategy & Planning (Week 3-4):
- Information architecture (proposed sitemap)
- User persona updates (2-3 personas)
- Key user journeys mapped (3-5 critical flows)
- Content strategy (what stays, what goes, what's new)
- SEO migration plan (301 redirects, preserve rankings)
- Success metrics definition (KPIs for the redesign)
- Project timeline with milestones

Phase 3 — Design (Week 5-8):
- Mood board direction (3 distinct visual directions)
- Wireframes for 5-7 key page templates (low fidelity)
- Design system / style guide
- High-fidelity mockups for key pages
- Mobile responsive designs
- Interactive prototype for user testing

Phase 4 — Development & Launch (Week 9-12):
- Tech stack recommendation
- Development sprint plan
- QA testing checklist
- User acceptance testing plan
- Staging environment setup
- Launch plan (phased rollout vs. hard cut)
- Post-launch monitoring plan (48 hours, 1 week, 1 month)`,
    tags: ["redesign", "strategy", "ux", "web-design"]
  },
  {
    id: "data-01",
    category: "data-analytics",
    icon: "&#x1F4CA;",
    title: "SQL Query Optimization",
    description: "Analyze and optimize slow-performing SQL queries with indexing strategies and query rewrites.",
    prompt: `Analyze and optimize this SQL query for performance:

[Paste your SQL query here]

Optimization steps:
1. EXPLAIN ANALYZE interpretation:
   - Identify the bottleneck (sequential scan, nested loop, sort, etc.)
   - Read the execution plan from innermost to outermost

2. Indexing strategy:
   - Recommend specific indexes with column order justification
   - Covering indexes vs. partial indexes
   - When to use composite indexes vs. single-column indexes
   - Index types (B-tree, Hash, GIN, GiST, BRIN) and when to use each
   - Trade-offs: write performance vs. read performance

3. Query rewrite suggestions:
   - Replace correlated subqueries with JOINs or LATERAL joins
   - Use CTEs (WITH clauses) vs. subqueries trade-offs
   - Replace OR conditions with UNION ALL where beneficial
   - Use EXISTS instead of IN for subqueries with large result sets
   - Window functions vs. self-joins for running totals
   - Avoid functions on indexed columns in WHERE clauses
   - Use COALESCE instead of complex CASE statements

4. Database configuration:
   - work_mem adjustment for sorts/hashes
   - effective_cache_size tuning
   - random_page_cost for SSD vs. HDD
   - Parallel query configuration

5. Provide the optimized query with comments explaining each change.
6. Include a verification query to compare results (old vs. new must match).`,
    tags: ["sql", "database", "performance", "optimization"]
  },
  {
    id: "data-02",
    category: "data-analytics",
    icon: "&#x1F4C8;",
    title: "Data Visualization Dashboard",
    description: "Design a data dashboard with charts, KPIs, and interactive filters that tell a clear story.",
    prompt: `Design a data visualization dashboard for [business domain, e.g., sales, user analytics, finance]:

Dashboard layout (CSS Grid / Flexbox):
- Top row: 4-6 KPI summary cards (with sparklines and % change)
- Middle left: Primary chart (larger, 2/3 width)
- Middle right: Secondary visualization or breakdown (1/3 width)
- Bottom: Data table with sorting and export
- Sidebar or top: Global filters (date range, category, region)

Chart types and when to use:
- KPI cards: Big number + trend line (sparkline) + % change vs. previous period
- Line chart: Time series data showing trends over time
- Bar chart: Comparisons across categories (horizontal for many categories)
- Stacked bar: Part-to-whole relationships over time
- Pie/Donut charts: Composition (limit to 5 slices max)
- Heatmap: Patterns by two dimensions (e.g., hour x day)
- Funnel chart: Conversion rates through stages
- Scatter plot: Correlation between two variables
- Table: Detailed data with sorting and conditional formatting

Interactivity:
- Global date range picker (preset: 7d, 30d, 90d, YTD, custom)
- Dropdown filters that cascade (selecting region filters cities)
- Hover tooltips with contextual data
- Click to drill down (from category → subcategory → individual item)
- Chart legends that toggle series on/off

Color usage:
- Consistent color assignment (same category = same color across all charts)
- Accessible palette (colorblind-friendly: blue-orange instead of red-green)
- Use gray for "other" or previous period comparisons

Output the complete HTML/CSS/JS implementation using Chart.js or D3.js.`,
    tags: ["data", "dashboard", "charts", "visualization"]
  },
  {
    id: "data-03",
    category: "data-analytics",
    icon: "&#x1F9EA;",
    title: "Data Cleaning Pipeline",
    description: "Build a robust data cleaning and preprocessing pipeline for messy real-world datasets.",
    prompt: `Create a data cleaning pipeline for a dataset with these common issues:

Pipeline steps:
1. Initial data assessment:
   - DataFrame info (shape, dtypes, memory usage)
   - Missing value report (% missing per column, visualize pattern)
   - Duplicate detection (exact duplicates, near-duplicates)
   - Basic statistics (describe, value_counts for categorical)

2. Handling missing values:
   - Numerical: median imputation (with flag column for "was missing")
   - Categorical: mode imputation or "Unknown" category
   - Time series: forward fill or interpolation
   - High-missing columns (>50%): log warning, consider dropping
   - Advanced: KNN imputation, MICE for critical features

3. Outlier detection and treatment:
   - IQR method for boxplot outliers
   - Z-score method for normal distributions
   - Isolation Forest for multivariate outliers
   - Business rule validation (e.g., age can't be negative or >120)
   - Document why each outlier was kept, capped, or removed

4. Data type corrections:
   - Parse dates with mixed formats
   - Convert numeric strings to float (handle currency symbols, commas)
   - Convert inconsistent categorical values (e.g., "NY", "New York", "ny")
   - One-hot encoding vs. label encoding vs. target encoding guide

5. Feature engineering:
   - Date features: day_of_week, is_weekend, quarter, days_since_event
   - Text features: word count, contains_keyword flags
   - Interaction features: ratios, products, differences between columns
   - Binning continuous variables into meaningful groups

6. Validation:
   - Assert no nulls remain (except by design)
   - Assert all values within expected ranges
   - Compare row counts before/after
   - Save cleaning report (what was changed, how many rows affected)

Provide Python code using pandas, numpy, and scikit-learn. Include a reusable class structure.`,
    tags: ["python", "data", "cleaning", "pandas"]
  },
  {
    id: "data-04",
    category: "data-analytics",
    icon: "&#x1F3B2;",
    title: "A/B Test Analysis",
    description: "Design and analyze an A/B test with proper statistical methods and actionable conclusions.",
    prompt: `Design and analyze an A/B test for [product change, metric to improve]:

Test design:
- Hypothesis statement (null and alternative)
- Primary metric (the one metric you're trying to move)
- Secondary metrics (guardrail metrics to ensure no harm)
- Minimum detectable effect (MDE — the smallest improvement worth shipping)
- Significance level (alpha, typically 0.05)
- Statistical power (typically 0.80)
- Required sample size calculation (with formula/code)
- Test duration (accounting for day-of-week effects, seasonality)
- Randomization unit (user, session, page view — with justification)
- Allocation ratio (50/50 or other)

Analysis plan:
- Pre-analysis checks:
  - Sample ratio mismatch (SRM) test
  - Check randomization worked (baseline metrics similar between groups)
  - Data quality: bot filtering, outlier handling

- Statistical methods:
  - T-test (two-sided) for continuous metrics
  - Chi-squared / Z-test for proportions (conversion rates)
  - Mann-Whitney U for non-normal distributions
  - Bootstrap confidence intervals
  - Regression adjustment (CUPED) for variance reduction

- Results interpretation:
  - Point estimate and confidence interval for the lift
  - Practical significance vs. statistical significance
  - Segment analysis (check if effect varies by user type, device, etc.)
  - Sequential testing considerations (peeking problem)

- Recommendation template:
  - Ship / Iterate / Discard decision with rationale
  - Estimated annualized impact
  - Risks and limitations
  - Next experiment ideas

Provide Python code using scipy.stats and a results visualization.`,
    tags: ["ab-testing", "statistics", "python", "experimentation"]
  },
  {
    id: "data-05",
    category: "data-analytics",
    icon: "&#x1F916;",
    title: "Machine Learning Pipeline",
    description: "Build an end-to-end ML pipeline from data loading to model deployment and monitoring.",
    prompt: `Create an end-to-end machine learning pipeline for a [classification/regression/forecasting] problem:

1. Data ingestion:
   - Load data from CSV, database, or API
   - Train/validation/test split (time-based for forecasting, stratified for classification)
   - Feature and target variable separation

2. Exploratory Data Analysis:
   - Target variable distribution
   - Feature distributions (histograms, box plots)
   - Correlation matrix and feature relationships
   - Identify data leakage risks

3. Preprocessing pipeline (scikit-learn Pipeline):
   - Numerical features: StandardScaler or RobustScaler
   - Categorical features: OneHotEncoder with handle_unknown='ignore'
   - Text features: CountVectorizer or TF-IDF
   - Date features: extract components programmatically
   - Custom transformers for domain-specific logic

4. Model selection:
   - Train 4-5 candidate models (baseline, linear, tree-based, ensemble, gradient boosting)
   - Cross-validation with appropriate scoring metric
   - Compare metrics: accuracy, precision, recall, F1, ROC-AUC (classification) or RMSE, MAE, R² (regression)
   - Learning curves to check bias/variance trade-off

5. Hyperparameter tuning:
   - RandomizedSearchCV for initial search space
   - GridSearchCV for fine-tuning around best params
   - Optuna or Bayesian optimization for complex search spaces

6. Model evaluation:
   - Confusion matrix with labels
   - Feature importance plot (SHAP values for interpretability)
   - Residual analysis (for regression)
   - Error analysis (where does the model fail?)
   - Fairness check across key segments

7. Model serialization and inference:
   - Save model with joblib or pickle
   - Create a prediction function with input validation
   - Add explainability (SHAP/LIME) to predictions

8. Monitoring plan:
   - Data drift detection (PSI, KS test on feature distributions)
   - Model performance monitoring (accuracy/F1 over time)
   - Retraining triggers and schedule

Provide complete Python code with scikit-learn, shap, and mlflow or similar.`,
    tags: ["machine-learning", "python", "pipeline", "scikit-learn"]
  },
  {
    id: "productivity-01",
    category: "productivity-automation",
    icon: "&#x1F4C2;",
    title: "File Organization Script",
    description: "Create an automation script that organizes, renames, and manages files based on rules.",
    prompt: `Create a file organization script with these capabilities:

Core functionality:
- Scan a directory recursively and categorize files by extension
- Move files into organized folder structure:
  Documents/ (pdf, docx, txt, md, xlsx, pptx)
  Images/ (jpg, png, gif, svg, webp, heic)
  Videos/ (mp4, mov, avi, mkv)
  Audio/ (mp3, wav, flac, aac)
  Archives/ (zip, rar, 7z, tar, gz)
  Code/ (py, js, ts, html, css, json, yaml, go, rs)
  Other/ (everything else)

Advanced features:
- Deduplicate files by content hash (SHA-256)
- Rename files with a consistent pattern: [YYYY-MM-DD]_[original_name]
- Extract date from file metadata (EXIF for photos, creation date) for renaming
- Generate a summary report: total files, size saved by deduplication, breakdown by type
- Dry run mode that shows what would happen without making changes
- Undo functionality (logs all moves to revert)
- Watch mode: monitor directory for new files and auto-organize
- Config file for custom rules (YAML/JSON)
- Progress bar for large directories

Cross-platform considerations:
- Handle long file paths on Windows (\\?\ prefix or longpath enabled)
- Preserve file permissions on Linux/macOS
- Handle case-insensitive vs. case-sensitive filesystems

Provide the script in Python with CLI using argparse or click.`,
    tags: ["python", "automation", "files", "script"]
  },
  {
    id: "productivity-02",
    category: "productivity-automation",
    icon: "&#x2699;",
    title: "Browser Automation Script",
    description: "Write a browser automation script using Playwright or Puppeteer for web scraping or testing.",
    prompt: `Create a browser automation script for [task, e.g., scraping, form filling, testing]:

Setup:
- Headless and headed mode options
- Browser type selection (Chromium, Firefox, WebKit)
- Viewport configuration (desktop and mobile)
- Custom user agent and locale
- Stealth mode for scraping (evade detection)
- Proxy support with authentication

Automation features:
- Navigate to URL with wait strategies (networkidle, domcontentloaded, custom selector)
- Handle cookie consent banners (auto-detect and dismiss)
- Handle popups and new tabs/windows
- Form filling with human-like typing (random delays between keystrokes)
- Screenshot at each step (full page and element-level)
- PDF generation of pages
- Extract text, attributes, and HTML from elements
- Wait for specific conditions (selector visible, text appears, network idle)
- Handle infinite scroll pages
- Handle pagination (click next, collect all pages)
- Session management (save/load cookies and localStorage)

Error handling:
- Retry on network failure (exponential backoff, max 3 retries)
- Timeout handling with fallback behavior
- Log all errors with context (URL, step, selector attempted)
- Graceful shutdown (close browser even on script failure)

Output:
- Collected data saved as JSON, CSV, or database insert
- Screenshots saved with timestamped filenames
- Execution log with timing for each step

Provide implementation in Playwright (Python or Node.js).`,
    tags: ["playwright", "puppeteer", "automation", "scraping"]
  },
  {
    id: "productivity-03",
    category: "productivity-automation",
    icon: "&#x1F4E7;",
    title: "Email Automation Workflow",
    description: "Create an automated email processing system with filtering, labeling, and auto-responses.",
    prompt: `Design an email automation workflow using Gmail API or equivalent:

Incoming email processing:
1. Fetch new unread emails (poll every 5 minutes or use webhook)
2. Classify emails into categories:
   - Client emails (from domain list)
   - Support requests (keywords: help, issue, bug, not working)
   - Invoice/billing (from accounting, keywords: invoice, payment)
   - Newsletter/marketing (bulk senders, unsubscribe link present)
   - Spam/junk (known patterns, low reputation)
   - Everything else (Inbox for manual review)

3. Actions per category:
   - Client: Star + Label "Client" + Slack notification (if urgent)
   - Support: Forward to support system + Auto-reply with ticket #
   - Invoice: Forward to accounting + Label "Finance"
   - Newsletter: Archive + Label "Newsletters" (skip inbox)
   - Spam: Move to trash

4. Auto-response templates per category:
   - Client (after hours): "I'll respond first thing tomorrow"
   - Support: "Thanks for reaching out! Your ticket is #[ID]. We typically respond within [time]."
   - General out-of-office: Custom message with return date

5. Daily digest:
   - At 5 PM, send a summary: emails processed, by category, any flagged for review
   - Include stats: response time averages, unread count

6. Dashboard (optional):
   - Web interface showing email processing stats
   - Manual override for misclassified emails (retrain rules)

Implementation:
- Python script using Gmail API
- Configuration file for rules and templates
- Cron/scheduled task setup instructions
- Logging with rotation`,
    tags: ["email", "automation", "python", "gmail"]
  },
  {
    id: "productivity-04",
    category: "productivity-automation",
    icon: "&#x1F6E0;",
    title: "GitHub Actions Workflow",
    description: "Build a comprehensive GitHub Actions workflow for CI, releases, and automation tasks.",
    prompt: `Create GitHub Actions workflows for a [type of project]:

Workflow 1 — CI (on push/PR to main):
- Matrix testing across Node.js versions (18, 20, 22) or Python (3.10, 3.11, 3.12)
- Install dependencies with lockfile verification
- Lint (ESLint/Ruff) and format check (Prettier/Black)
- Type checking (TypeScript/mypy)
- Unit tests with coverage report (upload to Codecov)
- Build step (compile, bundle, or package)
- Security audit (npm audit, pip-audit, or Snyk)
- Cache dependencies between runs
- Status check that all matrix jobs pass before merge

Workflow 2 — Release (on tag push v*):
- Generate changelog from conventional commits
- Build artifacts for distribution
- Create GitHub Release with release notes
- Publish to package registry (npm, PyPI, Docker Hub)
- Notify on Slack/Discord on success

Workflow 3 — Scheduled Tasks (cron):
- Nightly dependency update check (Dependabot or Renovate)
- Weekly security vulnerability scan
- Broken link checker for documentation
- Stale issue/PR closer with warning label

Workflow 4 — Deployment:
- Deploy to staging on push to develop
- Deploy to production on release
- Database migration job with approval gate
- Smoke tests after deployment
- Automatic rollback on health check failure

Provide complete .github/workflows/*.yml files with comments.`,
    tags: ["github", "ci-cd", "automation", "workflows"]
  },
  {
    id: "productivity-05",
    category: "productivity-automation",
    icon: "&#x1F4CB;",
    title: "CLI Tool Generator",
    description: "Build a polished command-line interface tool with subcommands, flags, and colored output.",
    prompt: `Build a CLI tool for [purpose] with these features:

Framework: Use [clap (Rust) / click/typer (Python) / commander (Node.js) / cobra (Go)]

CLI design:
- Main command with description and version
- 5-7 subcommands organized by function
- Global flags: --verbose, --quiet, --config, --output (json/text/table)
- Subcommand-specific flags and arguments
- Short and long flag forms (-v / --verbose)
- Required vs. optional arguments clearly indicated
- Default values documented in help text
- Environment variable fallback for sensitive config (--api-key or $API_KEY)
- Configuration file support (--config flag, also auto-detect .myapprc, myapp.toml)

Output formatting:
- Colored output (success=green, warning=yellow, error=red, info=cyan)
- Progress bars for long-running operations
- Spinners for indeterminate wait states
- Tables for tabular data with aligned columns
- Syntax highlighting for code output
- JSON output mode for pipe-friendly scripting (--output json)

Error handling:
- Human-readable error messages (not stack traces by default)
- Suggest similar commands on typos ("Did you mean 'deploy'?")
- Validate all inputs before starting work (fail fast)
- Exit codes: 0=success, 1=general error, 2=misuse, 126=permission

Interactive features:
- Confirmation prompts for destructive actions (--yes/--force to skip)
- Select from list (arrow keys to navigate, Enter to select)
- Multi-select checkboxes for bulk operations
- Input masking for passwords/secrets

Documentation:
- Man-page style help for each subcommand
- Examples section with 3-5 realistic use cases
- Shell completion generation (bash, zsh, fish, powershell)`,
    tags: ["cli", "python", "node", "tooling"]
  },
  {
    id: "ai-01",
    category: "ai-prompt-engineering",
    icon: "&#x1F9E0;",
    title: "Chain-of-Thought Prompt",
    description: "Craft a prompt that guides the AI through step-by-step reasoning for complex problem-solving.",
    prompt: `Create a Chain-of-Thought prompt for solving [complex problem type, e.g., debugging, system design, strategy]:

Prompt structure:
1. Role assignment:
   "You are a senior [role, e.g., software architect, data scientist, business strategist] with 15+ years of experience."

2. Task definition with clear constraints:
   Specify exactly what needs to be solved, with any limitations or requirements.

3. Step-by-step reasoning instructions:
   "Before providing your final answer, work through this problem step by step:"
   - Step 1: Analyze and restate the problem in your own words
   - Step 2: Identify the key constraints and requirements
   - Step 3: List 3-5 possible approaches or solutions
   - Step 4: Evaluate each approach against the constraints (pros/cons)
   - Step 5: Select the best approach and justify your choice
   - Step 6: Implement/provide the solution with detailed explanation
   - Step 7: Identify potential edge cases and how to handle them
   - Step 8: Summarize the solution and key decisions made

4. Output format specification:
   - Mark each step clearly with headers
   - Use code blocks for any code or configuration
   - Use tables for comparisons
   - End with a concise summary

5. Quality check instructions:
   "After providing your answer, verify:"
   - Does it meet all constraints?
   - Are there any security or performance concerns?
   - Is the solution scalable and maintainable?`,
    tags: ["prompt-engineering", "chain-of-thought", "reasoning"]
  },
  {
    id: "ai-02",
    category: "ai-prompt-engineering",
    icon: "&#x1F3AD;",
    title: "Role & Persona Prompt",
    description: "Design a detailed AI persona prompt for consistent, expert-level responses in a specific domain.",
    prompt: `Create a detailed AI persona prompt for [domain/role]:

Persona Definition:
- Name and identity
- Professional background (education, years of experience, companies worked at)
- Areas of expertise (ranked by depth)
- Communication style (formal vs. casual, verbose vs. concise, data-driven vs. intuitive)
- Known strengths and acknowledged limitations
- Values and principles they adhere to

Voice and tone:
- Vocabulary level (technical, accessible, academic)
- Sentence structure preference (short and punchy vs. elaborate)
- Use of examples (real-world case studies vs. hypotheticals)
- Humor level (dry/witty, none, playful)
- How they handle uncertainty ("I'm not certain, but...", "Here are three possibilities...")
- How they disagree or correct misconceptions

Knowledge boundaries:
- Topics they're an authority on (provide definitive answers)
- Topics they're knowledgeable about (provide informed opinions)
- Topics they should defer on ("I'd recommend consulting a specialist in...")

Response templates for common scenarios:
- When asked something outside expertise
- When asked for a prediction or forecast
- When given incomplete information
- When asked to compare options
- When asked for step-by-step guidance
- When the user seems frustrated or confused

Example Q&A pairs (3-5):
- Show the persona in action with realistic questions and the tone/style of answers

Output the complete persona prompt ready to be used as a system message.`,
    tags: ["prompt-engineering", "persona", "role-prompting"]
  },
  {
    id: "ai-03",
    category: "ai-prompt-engineering",
    icon: "&#x1F4E6;",
    title: "Few-Shot Prompting Template",
    description: "Create a few-shot prompt template with carefully crafted examples for consistent output quality.",
    prompt: `Create a few-shot prompt for [task, e.g., text classification, data extraction, code refactoring]:

Prompt structure:
1. Task description (2-3 sentences):
   - What to do, what format to output, any special rules

2. Examples (3-5 pairs):
   Provide input → output demonstrations that:
   - Show the full range of expected behavior (simple, complex, edge cases)
   - Demonstrate handling of ambiguity
   - Show error/edge case handling
   - Are clearly labeled (Example 1, Example 2, etc.)
   - Use realistic, diverse data

3. Rules summary:
   - Key rules extracted from the examples
   - Format requirements (JSON, markdown table, etc.)
   - What NOT to do (common mistakes to avoid)

4. The actual input:
   - Clearly separated from the examples
   - "Now process this: [input]"

Example selection guidelines:
- Example 1: Simple, straightforward case (establishes basic pattern)
- Example 2: More complex, with nuance or multiple elements
- Example 3: Edge case or tricky scenario
- Example 4: Shows what NOT to do and why (optional, for complex tasks)
- Example 5: Variation in format or style (if applicable)

Design the examples for a specific task. Make them detailed and realistic.`,
    tags: ["prompt-engineering", "few-shot", "examples"]
  },
  {
    id: "ai-04",
    category: "ai-prompt-engineering",
    icon: "&#x1F3AF;",
    title: "Structured Output Prompt",
    description: "Design a prompt that reliably produces structured, parseable output (JSON, YAML, XML, or CSV).",
    prompt: `Create a prompt that produces reliable structured output for [specific data extraction or generation task]:

1. Clear format declaration:
   "You must respond ONLY with valid [JSON/XML/YAML/CSV]. Do not include any text outside the [format]."

2. Schema definition:
   Provide the exact expected structure with:
   - Field names and types
   - Which fields are required vs. optional
   - Allowed values for enum fields
   - Min/max for numeric fields
   - String patterns/regex for formatted fields
   - Array item specifications
   - Nested object structures

3. Field descriptions:
   For each field, explain:
   - What it represents
   - How to determine the value
   - Default value if information is missing
   - Example values

4. Validation rules in plain language:
   - "If the source doesn't mention X, use null, don't guess"
   - "Dates must be in YYYY-MM-DD format"
   - "Phone numbers must include country code"

5. Annotated example:
   Show a complete example with comments explaining why each value was chosen

6. Error handling instruction:
   "If the input doesn't contain enough information to fill required fields, output: {\"error\": \"Insufficient data\", \"missing_fields\": [...]}"

7. Output wrapper:
   ```json
   { ... }
   ```

This prompt should produce output that can be reliably parsed by JSON.parse() or equivalent without any cleanup.`,
    tags: ["prompt-engineering", "structured-output", "json"]
  },
  {
    id: "ai-05",
    category: "ai-prompt-engineering",
    icon: "&#x1F504;",
    title: "Iterative Refinement Prompt",
    description: "Create a prompt template for iterative refinement where each round improves on the previous output.",
    prompt: `Create an iterative refinement prompt system for [creative or technical task]:

Round 1 — Initial Draft:
"Create an initial draft of [deliverable]. Focus on completeness and structure rather than perfection. Include all required sections, even if some are placeholder-quality. Mark areas where you have low confidence with [NEEDS WORK]."

Round 2 — Content Enhancement:
"Now refine this draft by:
- Expanding sections marked [NEEDS WORK] with detailed content
- Adding specific examples, data points, or code snippets where generic statements exist
- Improving transitions between sections
- Ensuring consistent tone and terminology throughout
- Adding [X, Y, Z] elements that were missing
Preserve all existing content that's working well."

Round 3 — Polish and Optimization:
"Final pass:
- Tighten prose: remove redundancies, split long sentences, vary sentence structure
- Check for jargon — replace or explain all technical terms
- Verify all claims are supported (mark any unsupported assertions)
- Ensure output is scannable (add headers, bullet points, emphasis)
- Check [specific constraint, e.g., word count, format compliance, accessibility]"

Round 4 — Self-Critique:
"Review your own output as a critical editor. Point out:
- The 3 weakest parts and suggest improvements
- Any logical gaps or missing information
- Places where a reader might get confused
Then implement the fixes you identified."

Each round should build on the output from the previous round. The final prompt should include instructions for the user on how to run each round sequentially.`,
    tags: ["prompt-engineering", "iteration", "refinement"]
  },
  {
    id: "security-01",
    category: "security-compliance",
    icon: "&#x1F6E1;",
    title: "Security Code Review",
    description: "Conduct a thorough security review of code, identifying vulnerabilities and providing fixes.",
    prompt: `Perform a comprehensive security review of this code:

[Paste code here]

Review checklist (OWASP Top 10 focused):

1. Injection Flaws:
   - SQL/LDAP/OS command injection vectors
   - Unsanitized user input in queries or commands
   - Parameterized queries usage

2. Broken Authentication:
   - Password policies and hashing (bcrypt/argon2)
   - Session management (secure, httpOnly, sameSite cookies)
   - JWT handling (algorithm confusion, expiry, secret strength)
   - Rate limiting on login endpoints

3. Sensitive Data Exposure:
   - Hardcoded secrets, API keys, or credentials
   - Logging of sensitive data (passwords, tokens, PII)
   - Encryption at rest and in transit (TLS 1.2+)
   - PII redaction in logs and error messages

4. Broken Access Control:
   - Missing authorization checks on endpoints
   - IDOR (Insecure Direct Object Reference) risks
   - CORS misconfiguration
   - Role/permission bypass vectors

5. Security Misconfiguration:
   - Debug mode in production
   - Unnecessary HTTP methods enabled
   - Default credentials or configurations
   - Missing security headers (CSP, HSTS, X-Frame-Options)
   - Verbose error messages in production

6. Additionally check for:
   - Prototype pollution (JavaScript)
   - Mass assignment vulnerabilities
   - Open redirect
   - SSRF (Server-Side Request Forgery)
   - File upload restrictions and validation
   - Dependency vulnerabilities

For each finding provide:
- Severity: Critical / High / Medium / Low
- Location: File and line number
- Description: What the vulnerability is
- Exploit scenario: How an attacker could exploit it
- Fix: Specific code change to remediate
- Prevention: How to prevent this class of bug in the future`,
    tags: ["security", "code-review", "owasp", "vulnerability"]
  },
  {
    id: "security-02",
    category: "security-compliance",
    icon: "&#x1F512;",
    title: "GDPR Compliance Checklist",
    description: "Create a GDPR compliance implementation plan with cookie consent, data handling, and privacy policies.",
    prompt: `Create a GDPR compliance implementation plan for a [type of website/app]:

1. Cookie Consent:
   - Banner design requirements (no pre-ticked boxes, reject all option, equal prominence)
   - Cookie categorization (Necessary, Functional, Analytics, Marketing)
   - Script blocking until consent is given
   - Consent logging (timestamp, consent given, version of consent text)
   - Consent renewal mechanism (re-prompt every 12 months or on policy change)
   - Implementation code (JavaScript) for cookie management

2. Privacy Policy:
   Required sections:
   - Data controller identity and contact details
   - What data is collected and for what purpose
   - Legal basis for processing (consent, legitimate interest, etc.)
   - Data retention periods per category
   - Third-party data sharing (list all processors)
   - International data transfers and safeguards
   - User rights: access, rectification, erasure, portability, objection, automated decision-making
   - How to exercise rights (email, form, postal address)
   - Cookie policy (what cookies are used and why)
   - Policy update notification process

3. Data Subject Rights (DSAR) Process:
   - Verification procedure (confirm identity before releasing data)
   - Response template for each right (access, erasure, portability)
   - 30-day response deadline tracker
   - Data export format (JSON, CSV)
   - Deletion cascade (remove from all systems, backups noted)

4. Technical Measures:
   - Data encryption at rest (AES-256) and in transit (TLS 1.2+)
   - Access control and audit logging
   - Data minimization in analytics (anonymize IPs, no PII in URLs)
   - Breach notification procedure (72-hour deadline to authorities)
   - Data backup and recovery testing

5. Data Processing Agreement (DPA) template:
   - For all third-party services that handle your user data

6. Records of Processing Activities (ROPA):
   - Template spreadsheet for documenting all data processing`,
    tags: ["gdpr", "compliance", "privacy", "legal"]
  },
  {
    id: "security-03",
    category: "security-compliance",
    icon: "&#x1F510;",
    title: "Authentication System Design",
    description: "Design a complete, secure authentication system with MFA, social login, and session management.",
    prompt: `Design a complete authentication system with these features:

1. Registration:
   - Email + password with real-time strength meter (zxcvbn)
   - Email verification flow (send token, verify within 24 hours)
   - Rate limiting on registration endpoint (5 per IP per hour)
   - CAPTCHA after 3 failed attempts (or invisible reCAPTCHA)

2. Login:
   - Email/password authentication
   - Social login: Google, GitHub, Apple (OAuth 2.0 + OIDC)
   - "Remember me" with secure persistent tokens (separate from session)
   - Account lockout after 5 failed attempts (30 min cooldown)
   - Login notification email for new device/location

3. Multi-Factor Authentication (MFA):
   - TOTP (Authenticator app) setup flow with QR code
   - Recovery codes (10 one-time use codes)
   - SMS backup option (with warning about SIM swap risks)
   - Passkey/WebAuthn support (biometric + security keys)
   - "Trust this device for 30 days" option

4. Session Management:
   - JWT access tokens (15 min expiry)
   - Refresh token rotation (single use, auto-revoke on reuse detection)
   - Session listing (view all active sessions, revoke individually or all)
   - Concurrent session limits per user

5. Password Reset:
   - Time-limited reset token (1 hour, single use)
   - Token sent to verified email only (no user enumeration)
   - Same response whether account exists or not

6. Security:
   - Password hashing: bcrypt/argon2 with appropriate cost factor
   - All tokens cryptographically random (crypto.randomBytes)
   - CSRF protection (double submit cookie pattern)
   - Rate limiting on all auth endpoints
   - Audit log for all auth events (login, logout, password change, MFA change)

Provide API endpoint specifications, database schema, and Node.js/Python implementation skeleton.`,
    tags: ["authentication", "security", "oauth", "auth"]
  },
  {
    id: "misc-01",
    category: "miscellaneous",
    icon: "&#x1F3A4;",
    title: "Presentation Slide Deck",
    description: "Create a compelling presentation outline with speaker notes for any topic.",
    prompt: `Create a presentation outline for "[Topic / Pitch]":

Slide 1 — Title Slide:
- Headline (bold, memorable, 5-8 words)
- Subtitle with your name and role
- Visual concept description

Slide 2 — The Hook:
- Start with a surprising stat, provocative question, or bold claim
- Make the audience lean in
- Speaker notes: how to deliver this with impact

Slide 3 — The Problem:
- Describe the pain point in vivid terms
- Who experiences this problem and how much it costs them
- Quote or anecdote to humanize it

Slide 4 — The Solution:
- Your product/idea as the answer
- One sentence value proposition
- Visual: before/after comparison

Slide 5-7 — Key Points (3 main points):
- Each slide makes one clear point
- Supporting evidence (data, example, analogy)
- One point per slide maximum

Slide 8 — Proof / Traction:
- Social proof: testimonials, logos, numbers, case study
- "Don't just take my word for it"

Slide 9 — The Ask:
- What do you need from the audience?
- Be specific: funding amount, partnership, approval, signup

Slide 10 — Closing:
- Memorable closing line
- Contact information
- Q&A transition

Design principles for each slide:
- Max 20 words per slide (except title slides)
- One visual per slide (image, chart, diagram)
- Consistent color scheme and typography
- High contrast for readability in well-lit rooms

Speaker notes for every slide:
- What to say (not just what's on the slide)
- When to advance
- Segues between slides`,
    tags: ["presentation", "speaking", "pitch", "slides"]
  },
  {
    id: "misc-02",
    category: "miscellaneous",
    icon: "&#x1F4DD;",
    title: "Project README Template",
    description: "Generate a comprehensive, well-structured README for any open source or private project.",
    prompt: `Create a professional README.md for [Project Name]:

<!-- Header -->
- Project name and one-line description
- Badges row (npm version, build status, license, downloads, etc.)
- Logo or hero image placeholder

<!-- Quick Links -->
- Demo link, Documentation link, npm/PyPI/Cargo link

<!-- Table of Contents -->
Auto-generated from headings

<!-- Overview -->
- What problem does it solve? (2-3 sentences)
- Key features (bullet list with emoji icons)
- Screenshot or GIF demo (placeholder)
- Who is this for? (target audience)

<!-- Quick Start -->
- Prerequisites (with version requirements)
- Installation command (copy-paste ready)
- Minimal usage example (5-15 lines of code)
- Expected output

<!-- Installation -->
- Detailed installation steps
- Platform-specific notes (Windows, macOS, Linux)
- Configuration options

<!-- Usage -->
- Common use cases with code examples (3-5 scenarios)
- API reference (if applicable)
- Configuration file example

<!-- Contributing -->
- How to set up development environment
- Code style guide link
- Pull request process
- Issue templates reference
- Commit convention (Conventional Commits)

<!-- Documentation -->
- Link to full documentation site
- How to build docs locally

<!-- Roadmap -->
- Completed features (checkmarked)
- Planned features (with version targets)

<!-- FAQ -->
- 5-8 common questions and answers

<!-- License -->
- License type and link to full text

<!-- Acknowledgments -->
- Contributors, inspirations, libraries used

Style: Markdown with proper heading hierarchy. All code blocks include language annotation.`,
    tags: ["readme", "documentation", "github", "open-source"]
  },
  {
    id: "misc-03",
    category: "miscellaneous",
    icon: "&#x1F4CB;",
    title: "Product Requirements Document",
    description: "Write a comprehensive PRD that aligns engineering, design, and business stakeholders.",
    prompt: `Create a Product Requirements Document (PRD) for [feature/product]:

1. Executive Summary:
   - What are we building? (2-3 sentences)
   - Why now? (market opportunity, user demand, strategic priority)
   - Success criteria (what does done look like?)

2. Problem Statement:
   - Current state and pain points
   - User feedback/quotes that motivated this
   - Data: how many users are affected, what's the impact?

3. Goals & Success Metrics:
   - Business goals (OKRs this maps to)
   - Key metrics to measure success (with current baseline)
   - Counter-metrics: what should NOT degrade

4. User Stories:
   - Primary persona(s) this serves
   - 5-10 user stories in "As a [persona], I want [goal] so that [reason]" format
   - Prioritized: P0 (must have), P1 (should have), P2 (nice to have)

5. Functional Requirements:
   - Detailed feature list with acceptance criteria
   - Input validation rules
   - Error states and edge cases for each feature
   - Permission/role requirements
   - Localization requirements (if any)

6. Non-Functional Requirements:
   - Performance: page load times, API response times
   - Reliability: uptime, error rate targets
   - Security: data handling, authentication requirements
   - Accessibility: WCAG level target
   - Browser/device support matrix
   - Scale: expected users/transactions per day

7. Design & UX Requirements:
   - Link to mockups/prototypes
   - Key interaction patterns
   - Design system components needed
   - Content/copy requirements

8. Technical Considerations:
   - Dependencies on other teams/systems
   - API contracts (if new endpoints needed)
   - Database changes required
   - Third-party integrations

9. Release Plan:
   - Phased rollout strategy (internal, beta, GA)
   - Feature flags for gradual exposure
   - Rollback plan
   - Communication plan (release notes, blog post, in-app announcement)

10. Open Questions:
    - Decisions pending and who owns them
    - Risks and assumptions`,
    tags: ["prd", "product", "planning", "requirements"]
  }
];
