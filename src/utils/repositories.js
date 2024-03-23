const repositoriesData = [
  {
    title: 'Fully Dynamic Table Creation process with Dbt', 
    description: "\
    <b>TLDR:</b>  It reads database structure in compilation time, and adjusts the SQL querie to the structure, avoiding missing datasets/tables/values errors. <br><br> \
      This approach addresses errors arising from missing tables, misnaming sources,\
      or neglecting to add new tables, all while dynamically aggregating tables during the repository building process.<br><br>\
      This DBT script showcases an advanced use case of dynamically building SQL queries based on the availability of certain datasets and columns.\
      By using Jinja templating within DBT, the script handles variability in\
      data availability across different Datasets, ensuring that the final\
      dataset is as complete and error-free as possible.  This approach is particularly useful in scenarios where data\
      schema may vary significantly across different entities within the same data warehouse environment.",
    technologies: ['googlecloud', 'dbt','jinja'],
    images:['shopify.jpg'],  
    git_link: 'https://github.com/Robertoarce/dbt-dynamic-sourcing/',
    ongoing: false,
    in_startpage: true,
    notebook_url:'',
  },
  {
    title: 'Fast-Learning Challenge: Learn Docker in 5 days.', 
    description: "\
    <b>TLDR:</b>  I had to learn and apply Docker for a technical test in less than 5 days. <br><br> \
      Your mission is to provide insights on sales.\
      The challenge consists in creating a docker image so that the users will be able to quick use.<br>\
      <br><h1> <b>Guidelines: </b></h3>\
      There are four datasets :<br>\
      <ul> \
        <b>* Products:</b> a list of available products.<br>\
        <b>* Items:</b> a list of items.<br>\
        <b>* Orders:</b> a list of customer orders on the website.<br>\
        <b>* Customers:</b> a list of customers.<br>\
        </ul><br>\
        <h2><b>TO DO:</b></h2>\
        <ul> \
        <li> - Create and insert data in PostgreSQL.</li> \
        <li> - Each day we want to compute summary statistics by customers (spending, orders etc.)</li> \
        <li> - Create a script to compute for a given day these summary statistics.</li>\
        <li> - Query directly the dbt</li> \
        <li> - Have premaid queries</li> \
        <li> - Run that script over the necessary period to inject historic data. </li>\
        <li> - Then, identify the top customers</li>\
        <li> - How many customers are repeaters ?</li>\
        <li> - Package your script in Docker container so that it can be run each day. </li>\
        </ul>\
        <br>A docker-compose.yml and a CLI is expected to get stats for a specific day.\
            ",
    technologies: ['docker', 'postgresql', 'pandas'],
    images:['docker.png'],  
    git_link: 'https://github.com/Robertoarce/free2move-Test-technique',
    ongoing: false,
    in_startpage: true, 
  }, 

];

export default function fetchRepositoriesData() {
  return new Promise((resolve) => {
    // Simulate delay for dynamic loading
    setTimeout(() => {
      resolve(repositoriesData);
    }, 1000);
  });
}