<template>
  <div class="relative  v-full h-full   object-fill bg-opacity-30 p-0 m-0  overflow-hidden no-scrollbar ">


    <div
      class="p-4 pb-4 m-4 no-scrollbar
      md:p-10 md:pb-10 md:m-10
      bg-emerald-900 bg-opacity-40 overflow-y-auto max-h-[calc(100vh-10rem)]  shadow-md rounded-lg ">
      <div
        class="space-y-8 relative before:absolute 
        before:inset-0 before:ml-5
         before:-translate-x-px md:before:mx-auto md:before:translate-x-0
          before:h-full before:w-0.5
           before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <!-- Loop starts here -->
        <div v-for="(work, index) in works" :key="index"
          class="relative flex   items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

          <!-- Icon -->
          <div :class="[
            'flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2',
            index === 0 ? 'bg-blue-500 text-white' : index === works.length - 1 ? 'bg-violet-500 text-white' : 'bg-slate-400 text-slate-900'
          ]">

            <svg v-if="work.study" class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
            </svg>

            <svg v-if="!work.study" class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fill-rule="nonzero" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
            </svg>
          </div>

          <!-- Card -->
          <div
            :class="['w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 mb-4 rounded-3xl  shadow-xl \
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 hover:border-2 hover:mb-1  hover:shadow-none'

              , work.study == true ? 'border-amber-400 hover:bg-amber-100 hover:bg-opacity-45  ' : 'border-sky-400 hover:bg-sky-100   hover:bg-opacity-95']">

            <div class="flex items-center justify-between space-x-2 mb-1">
              <!-- title -->
              <div class="container pt-3 font-bold  sm:text-3xl text-sm     text-slate-900">{{ work.title }}</div>


              <div class="flex flex-col   ">
                <!-- date -->
                <time class="pt-3  font-caveat font-medium  sm:text-xl text-xs text-indigo-500">{{ work.date }}</time>
                <!-- duration -->
                <p class="pt-0  font-caveat font-medium  sm:text-l text-xs text-gray-500">({{ work.duration }})</p>
              </div>
            </div>
            <!-- company -->
            <div class="pt-1  font-bold sm:text-2xl  text-m text-red-700 font-mono">{{ work.company }} </div>

            <!-- city -->
            <a class=" font-semibold  text-blue-600 sm:text-lg  text-sm ">{{ work.city }} </a> -
            <!-- country -->
            <a class="font-bold text-slate-600 sm:text-lg  text-sm">{{ work.country }} </a>
            <!-- description -->
            <div class="pt-3  text-slate-900 sm:text-lg  text-xs" v-html="formatText(work.description)"> </div>

            <!-- skills -->
            <div v-if="!work.study" class=" font-bold text-slate-900 pt-2 sm:text-lg  text-xs ">Skills: </div>
            <div v-if="work.study" class=" font-semibold text-slate-900 pt-2 sm:text-lg  text-xs ">Favorite Topics: </div>

            <div class="flex flex-wrap ">
              <a v-for="(skill, skill_index) in work.utils" :key="skill_index"
                class=" p-2 px-4 mt-2 mr-5 sm:text-lg  text-xs rounded-xl shadow-xl bg-gray-100 hover:bg-cyan-400 hover:text-white    ">{{
                  skill }}</a>
            </div>

          </div>
        </div>
        <!-- Loop ends here -->
      </div>

    </div>
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      works: [
        {
          title: 'Data Scientist',
          company: "Sanofi",
          date: ' Jan 2023 - Present',
          duration: 'On going',
          city: 'Paris',
          country: 'France',
          description: " \
          <b>  Main Project:</b><br><br>  \
          <b><i>Marketing Mix Model</i></b><br>Optimised marketing budget allocation across diverse channels (media, television, web, etc.)\
          through the use of a Marketing Mix Model, specifically applying <b> Bayesian </b> regression techniques.  \
            <li> Integrated MLFlow into the pipeline.</li>\
            <li>  Co-developed and enhanced the model. </li><li>  Implemented new features and capabilities within the model. </li><li>  Refactored code. </li><li>  Provided in-depth analysis to business peers\
            <li> Researched and benchmarked competing technologies to enhance real-time performance.</li>\
            </li><li>  Upgraded the pipeline:</li> \
          <ul>\
             <li> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  - Input stream : Developed unit and quality tests for inputs </li>\
            <li></b>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; - Model output stream:  Established connections between AWS S3 buckets, Databricks and Tableaux.\
           \
        </li></ul>\
        <br><b> Side Projects:</b> <br>  <br> \
        <ul>\
             <li> <b><i>Slack Chat Bot</i></b> : Developed an LLM chatbot with AWS Bedrock model, Pine VectorDB and Slack.</li>\
                     </li></ul>\
                     <br>",

          utils: ['Amazon Web Services', 'Bayesian Inference', 'Stan-modeling', 'Databricks', 'Python', 'Pandas', 'Jupyter', 'Git', 'Jira'],
          study: false
        },
        {
          title: 'Co-Founder',
          company: "Stealth Startup ",
          date: ' Jun 2022 - Dec 2022',
          duration: '7 months',
          city: 'Full Remote',
          country: 'World Wide',
          description: "\
          Our company's foremost goal is to streamline access to Amazon's publicly available data for our clients.\
           By implementing cutting-edge web scraping methodologies, developing resilient data pipelines, and \
           performing rigorous testing on information sourced from Amazon's platforms and third-party sellers,\
            we deliver indispensable insights to sellers, private equity firms, and talent scouts.\
          Our diverse, global team thrives in a completely remote work setting, guaranteeing efficient communication and productivity throughout all time zones.",
          utils: ['Web Scraping', 'Data Engineering', 'Jupyter', 'developer - JavaScript '],
          study: false
        },
        {
          title: 'Data Analyst/Scientist',
          company: "Branded",
          date: ' May 2021 - May 2022',
          duration: '1 Year ',
          city: 'Paris',
          country: 'France',
          description: "\
          Working as the main data contact for the Marketing pillar.\
          • Design, ingest and monitor data pipes from each new seller API ensuring requirements are met.\
          • Performed data modeling with DBT for the creation of a comprehensive data lake that serves as\
          foundation for all data related matters on DTC.\
          • Established and maintained evolving data requirements with business.\
          • Co-established/challenged key performance metrics for operational efficiency.\
          • Creation of automated data accuracy tests/analysis/reports/alerts.\
          • Built, developed and maintained dashboards for DTC.\
          • Created ad hoc analysis on historical data.",
          utils: ['SQL', 'Google Cloud Platform', 'Jupyter', 'DBT', 'Airflow', 'Gsheets', 'Tableaux', 'G-studio', 'Python', 'Fivetran', 'Gitlab', 'Click-Up', 'Trello', 'bash'],
          study: false
        },
        {
          title: 'Developer [Student]',
          company: " School 42",
          date: ' Jan 2020 - Aug 2020',
          duration: '8 months',
          city: 'Paris',
          country: 'France',
          description: "\
           42 is a private and nonprofit computer programming school.\
           It adopts a rigorous project-based, student-driven pedagogy without traditional teachers or courses, \
           emphasizing peer-to-peer learning and fostering a unique educational experience.",
          utils: ['C', 'git', 'bash'],
          study: true
        },
        {
          title: 'Data Analyst',
          company: "BlaBlaCar",
          date: ' Mar 2019 - Nov 2019',
          duration: '9 months',
          city: 'Paris',
          country: 'France',
          description: "\
          • Working as a full stack Data Analyst within the Financial, Strategy and Product team.\n \
          • Working with product managers (developing analysis framework), developers (requesting probes) and Data engineers  \
          (creating tracking contracts) to ensure that the data arrives on time and that the analysis is ready to perform, at the launch of new features.\n \
          <<Other Topics:>> Monetization, Product redesign, Search performance, Pricing strategy, Data merge with Ouibus.",
          utils: ['Tableaux', 'Google Cloud Platform', 'Jupyter', 'Python', 'SQL', 'Pandas'],
          study: false
        },
        {
          title: 'Data Analyst',
          company: "Deezer",
          date: ' Jan 2017 - Mar 2019',
          duration: '2 year 3 months',
          city: 'Paris',
          country: 'France',
          description: "\
          The Job can be summarized in 4:\n \
            <<1) Insight researcher:>>\n \ With the objective to gain deep knowledge of the customer-app interaction.\n \
              \n➢ Improved general knowledge of the customers journey and insights by providing in-depth research on App usage and Customer journey.\n \
            \n<<2)  Country Adviser:>>\n The objective is to measure and inform each country's actions performance, by providing feedback based on deep forensic insights, as well as proposing possible action plans.\n \
            \n➢ Worked with internal global teams and global partnerships (B2B): analyzing their performances on: offers usage, price rates and promotions; detection and correction of technical issues impacting\n \ our partnership customers base and thus the billing figure.\n \
            \n<<3) Data Developer and Controller:>>\n The objective is to create, update and sustain all databases and codes- scripts that support our current metrics.\n \
            \n➢ Supported, created and updated databases and code - scripts for the regular follow up of the KPIs’ and tableau visualizations workbooks.\n \
            \n<<4)  Budget analyst/ follower:>>\n The objective is to co - create the budget with the aid of the historic knowledge and to challenge the assumptions in the financial model presented by the financial team.\n \
            \n➢ Provided relevant consolidated metrics for the planning and follow up of the marketing campaigns.\n \
            ➢ Weekly, monthly and after campaign performance follow up.\n \
            \n<<Cross team topics: → >> Churn, conversion, lifetime cycle, customer value (B2B and B2C) and Business Budget.",
          utils: ['Google Cloud Platform', 'Hadoop Hive', 'Git', 'Jupyter', 'Tableaux', 'Python', 'SQL', 'Pandas', 'scikit-learn', 'numpy', 'matplotlib', 'fb - prophet'],
          study: false
        },
        {
          title: 'Digital Business Analyst / Financial Controller',
          company: "L'Oréal",
          date: ' Jul 2016 - Dec 2016',
          duration: '6 months',
          city: 'Paris',
          country: 'France',
          description: "\
          <<Digital Project manager assistant>> at <<MaBeautéLuxe.fr>> \n \
          Start-up with +200 K€ of turnover, 10 Luxury Brands and +600 products.\n \
          • Followed site KPI and content analysis to optimize media and CRM strategy.\n \
          • Monitoring the products performance, sources of traffic and email campaigns.\n \
          <<Financial Controller:>>\n \
          • Budget and forecast consolidation inside L'Oréal Digital (21 brands worldwide) with SAP magnitude tool, SAP BO and Compass.\n \
          • Monitoring the gap analysis, margin rates and budgetary control.",
          utils: ['Automation', 'VBA - Excel', 'Python', 'SQL'],
          study: false
        },

        {
          title: 'MSc in Finance [Student]',
          company: 'Grenoble Ecole de Management - Grand Ecole',
          date: ' Sept 2015 - Dec 2016',
          duration: '1 yr 4 months',
          city: 'Grenoble',
          country: 'France',
          description: "\
          The Master of Science (MSc) in Finance provides advanced financial knowledge within the finance sector,\
           specifically in banking, financial services, or corporate finance with global companies.\n \
            The curriculum covers fundamental finance principles and delves into advanced topics in corporate finance,\
             financial management, and financial markets.\n \
              The program also seeks to instill strong technical and analytical \
              skills in students, enabling them to understand the strategic impacts of financial decisions. ",
          utils: ['Quantitative methods', 'Financial management', 'Market Finance', 'Corporate Finance'],
          study: true
        },
        {
          title: 'Freelance Consultant',
          company: 'Upwork.com',
          date: ' Sep 2014 - Sep 2015',
          duration: '1 yr 1 month',
          city: 'Remote',
          country: 'France',
          description: "\
              Working on different porjects, mainly on Excel VBA and Python.\n \
              • Performing under a competitive environment with global competition. \n \
              > Last Project: (Excel VBA /Python) Data Base consolidation of an Italian Start-up (AM Sport).",
          utils: ['Automation', 'VBA - Excel', 'Python', 'SQL'],
          study: false
        },
        {
          title: 'Supply Chain Analyst',
          company: 'Shopshopdeco.com',
          date: ' Jun 2014 - Sep 2014',
          duration: '4 months',
          city: 'Lyon',
          country: 'France',
          description: "\
              Start-up furniture ecommerce company of 12 people, based on france, operations in DE, DK,ES, FR & UK. \n \
              • Procurement\n \
              • Client service (FR/ES/EN) \n \
              • Provider contact, orders expediting and follow up \n \
              • Logistics: expedition, exchange, warehousing follow up \n \
              • Process improvement.",
          utils: ['Customer Service', 'Automation', 'Forecasting', 'Demand Planning'],
          study: false
        },
        {
          title: 'Supply Chain Project Manager',
          company: 'Groupe SEB',
          date: ' Dec 2013 - Apr 2014',
          duration: '5 months',
          city: 'Lyon',
          country: 'France',
          description: "\
              • Ensured integration and consistency of demand inputs within SAP/GPS systems \n \
              • Validated demand alignment with outlined plan in the Commercial Industrial Plan, following the Standard Operating Procedures (SOP). \n \
              • Enage production capacity with global suppliers over 5 months scope. \n \
              • Consolidated requests pertaining to New Products/End of Life Products, streamlining the product transition process. \n \
              • Follow the product lifecycle by country, in consultation with the Heads of Global Markets Business Unit.",
          utils: ['Forecasting', 'SAP', 'VBA - Excel', 'Demand Planning'],
          study: false
        },
        {
          title: 'Supply Chain Project Manager',
          company: 'Groupe SEB',
          date: ' Jun 2013 - Dec 2013',
          duration: '7 months',
          city: 'Lyon',
          country: 'France',
          description: "\
          << Mission 1 - Supply Chain KPI follow-up>>  \n \
          • Propose new and review current KPI within the Corporate Logistics, based on the IT tool that is \n \
          shared throughout the whole company. \n \
          << Mission 2 - Product offering >> \n \
          • Analyze the level of communality of portfolios between markets and address recommendations.\n \
          << Mission 3 - Item creation process>> \n \
            • Reduce time to market lead-time for new item creation.\n \
            • Diagnosing the current situation with other Departments in order to reduce it.",
          utils: ['Forecasting', 'VBA - Excel', 'Internal Consulting'],
          study: false
        },
        {
          title: 'MSc in Supply Chain [Student]',
          company: 'Politecnico di Milano',
          date: ' Sept 2012 - Dec 2013',
          duration: '1 yr 4 months',
          city: 'Milano',
          country: 'Italy',
          description: "\
          The program aims to train professionals who can blend various technical and managerial skills necessary for operations \
          in this domain. \n The education in Supply Chain and Purchasing Management at POLIMI is updated to align with the needs of both Italian and international multinationals,\
           fostering a strong partnership between the university and these corporations. \
           It seeks to equip students with a blend of technical and managerial skills, \
           thus preparing them for the evolving demands in the fields of supply chain and procurement management.",
          utils: ['Forecasting', 'Demand Planning', 'SCM Strategy'],
          study: true
        },
        {
          title: 'Production optimisation Analyst',
          company: 'MADEPA S.A. GRUPO LA PAPELERA',
          date: 'Sep 2010 - Jun 2011',
          duration: '10 months',
          city: 'Santa Cruz',
          country: 'Bolivia',
          description: "• Supported operations according to procedures and instructions\n \
                • Maintained all safety rules in accordance with the company rules and policies\n \
                • Maintained appropriate files for tracking batch and lot records\n \
                • Coordinated and expedited work in the establishment, supporting over 120 operators\n \
                • Assisted in day-to-day department operations\n \
                • Assisted in the creation of the production master schedule\n \
                • Gave orders to workers, established priorities according to work order specifications and availability\n \
                • Ensured that the production is cost-effective\n \
                 Co-Created and established product specifications, Bill of Materials (BOM) and Costs, procedures and standards\n \
                 Improved overall communication, reducing machine idling and timeouts.",
          utils: ['Performance Optimization', 'safety management', 'cost efficiency', 'Scheduling', 'demand planning'],
          study: false
        },
        {
          title: 'Sales Executive',
          company: 'Synergy',
          date: 'Feb 2009 - Jul 2009',
          duration: '6 months',
          city: 'Santa Cruz',
          country: 'Bolivia',
          description: "• Introduced a new product to the market \n \
                        • Cold calling customers \n \
                        • Conducts telephone inquiries.\n \
                        • Follows up on all projects with operations \n \
                        • Assist customers with the right product for their needs",
          utils: ['Cold calling', 'product customization'],
          study: false
        },
        {
          title: 'Attraction Operator / Crowd Controller',
          company: 'Walt Disney World',
          date: 'Aug 2007 - Jan 2008',
          duration: '6 months',
          city: 'Orlando Florida',
          country: 'USA',

          description: "• Worked in an international environment \n \
                        • Gave service to more than 35 000 guests on a weekly basis\n \
                        • Followed the Disney Basics while attending Disney University\n \
                        > Coordinated task in a multicultural team to meet Disney standards",
          utils: ['Customer Service', 'Roller Coaster Engineering'],
          study: false
        },
        {
          title: 'Bachelor Industrial Optimisation [Student]',
          company: 'UPSA',
          date: 'Aug 2005 - Jan 2010',
          duration: '5 years',
          city: 'Santa Cruz',
          country: 'Bolivia',

          description: "The bachelor program emphasizes on \
          developing professionals capable of optimizing and improving production processes with a focus\
           on quality, safety, and environmental respect. \n \nThe main courses span basic sciences, mechanics, \
           manufacturing, industrial management, industrial processes, and systems analysis and optimization. \
           Some specific courses include Calculus, Technical Drawing, Statistics, Thermodynamics, and courses on \
           Production and Operations Management among others. \n \n Additionally, elective courses are offered in areas\
            like Business Management, Automation and Robotics, Systems Engineering, and Petroleum and Gas Engineering, \
            providing a broader perspective and specialization options",
          utils: ['Operations Research', 'Applied Mechanics', 'Advanced Algorithms in C++'],
          study: true
        },
      ]
    }
  },

  methods: {
    formatText(text) {
      // Replace \b with HTML bold tags
      let formattedText = text.replace(/<</g, '<b>');
      formattedText = formattedText.replace(/>>/g, '</b>');
      // Replace \n with HTML line break tags
      formattedText = formattedText.replace(/\n/g, '<br>');
      return formattedText;
    },

  }
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
