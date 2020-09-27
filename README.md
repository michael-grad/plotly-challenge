# Belly Button Biodiversity

In this assignment, an interactive dashboard is explored using data from the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Plotly

1. A D3 library is used to read in `samples.json`.

* A drop down menu is used to select an individual (sample id).  Upon selecting a sample id, all charts and tables are updated.

2. A horizontal bar chart displays the top 10 OTUs found in the selected individual.

3. A bubble chart displays each the number of samples vs. OTU ID.

4. Metadata, for the selected individual (e.g. ethnicity, gender, age) is also displayed upon selecting an individual.

5. Update all of the plots any time that a new sample is selected.

Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown below:

## Instructions

* Clone the repo

* Navigate to the cloned directory and open a local server in bash (python -m http.server).  Then open localhost:8000 in the web browser.


### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2019 Trilogy Education Services
