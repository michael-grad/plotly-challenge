// *************
// TO DO STILL
// *************

// 1. prepopulate using selection = 940
// 2. jay's link to bonus visualization
// 3. bonus section
// 4. Update metadata table to clear out whenever a new event handler is run.
// 5. Bar chart:  move text popup to right of mouse

// ****************
// Read JSON file
// ****************
// Read JSON and assign to a variable
// DEBUG!! - File not found
// DEBUG!! - Unexpected token ":"
d3.json("samples.json").then((importedData) => {
  console.log(importedData)
  var data = importedData;

  // **************************
  // Assign dropDownList values
  // **************************
  // assign variable dropDownList list of dropdown values
  dropDownList = data.names
  // print dropDownList
  console.log(dropDownList)
  // QUESTION:  HOW TO DO THIS???
  // update html with dropDownList

  dropDownList.forEach(function (id) {
    // console.log(id);
    var row = d3.select("#selDataset").append("option");
    row.text(id);
    // // Object.entries(names).forEach(function([key, value]) {
    //   console.log(key, value);
    //   // Append a cell to the row for each value
    //   // in the weather report object
    // });
  });


});
// ACTION:  comment out print json



// optionChanged(940);

// ********************
// Create Event Handler already done in html
// ********************

function optionChanged(selection) {
  // *****************************
  // Step 2 - Horizontal Bar Chart
  // *****************************

  // Modeled after 15.3.7
  // Data Structure
  // samples
  // id
  // otu_ids
  // sample_values

  // Import data again
  d3.json("samples.json").then((importedData) => {
    var samples = importedData.samples;
    var metadata = importedData.metadata;
    
    console.log(samples)
    var data = samples.filter((sampleData) => sampleData.id == selection)[0]
    var metadataData = metadata.filter(iterable => iterable.id == selection)[0]

    console.log(data)
    // Sort the data array using the greekSearchResults value
    // // data.sort(function (a, b) {
    // //   return parseFloat(b.sample_values) - parseFloat(b.sample_values);
    // // });
    // // // Slice the first 10 objects for plotting
    // data = data.slice(0, 10);
    // console.log(data)
    // // Reverse the array due to Plotly's defaults
    // data = data.reverse();

    // // Trace1 for the OTU Data
    var trace1 = {
      x: data.sample_values.slice(0,10).reverse(),
      y: data.otu_ids.map(element => `otu_ids: ${element}.`).slice(0,10).reverse(),
      text: data.otu_labels.slice(0,10).reverse(),
      name: "OTU Id Bar Chart",
      type: "bar",
      orientation: "h"
    };

    // data
    var chartData = [trace1];

    // Apply the group bar mode to the layout
    var layout = {
      margin: {
        l: 120,
        r: 100,
        t: 100,
        b: 100
      },      
      title: "OTU ID vs. Sample Values",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" }

    };

    Plotly.newPlot("bar", chartData, layout);


  // *********************
  // Step 3 - Bubble Chart
  // *********************
  // Type sourced from https://www.chartjs.org/docs/latest/charts/bubble.html
  // Marker size & color sourced from https://plotly.com/javascript/bubble-charts/
  // DEBUG!! - line chart instead of bubble
  // DEBUG!! - what to include for format?
  var trace1 = {
    x: data.otu_ids,
    y: data.sample_values,
    name: "Bubble Chart",
    mode: "markers",
    marker: {
      size: data.sample_values,
      color: data.otu_ids,    // },
    
      text_value: data.otu_labels

    },

  };
  var layout2 = {
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    },      
    title: "OTU ID vs. Sample Values",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Sample Values" }

  };
  // data
  var chartData = [trace1];

  // comment out layout
  Plotly.newPlot("bubble", chartData, layout2);


  // ***********************
  // Step 4 - metadata table
  // ***********************
  // Modeled after 14.2.9 for filtering
  // Modeled after 14.3.4 for appending table
  console.log(data)

  // Do I need to import Json data again?  where do parentheses go?
  
  // data.filter(metadata => metadata.id = selection);
  // console.log(data.filter(metadata => metadata.id = selection));

  // metadataData.forEach(function (metadata) {
  //   console.log(metadata);
  
    var metadataTag = d3.selectAll("#sample-metadata");
    var table = metadataTag.append("table");
    Object.entries(metadataData).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var row = table.append("tr");
      var element = row.append("td");
      element.text(`${key}: ${value}`);
    });
  // });

  });
// last homework clear out the data.  need line that clears out the data
// .html("")

  

  // Step 5 - Key-Value pair?? What am i doing here

  // Bonus - Gauge Chart
  // Sourced from https://plotly.com/javascript/gauge-charts/
  // QUESTION:  How to get the number of scrubs / wk?
  // QUESTION: How to get colors
  // QUESTION: how to get needle indicator
  // var gaugeData = [
  //   {
  //     type: "indicator",
  //     mode: "gauge+number+delta",
  //     value: 420,
  //     title: { text: "Speed", font: { size: 24 } },
  //     delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
  //     gauge: {
  //       axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
  //       bar: { color: "darkblue" },
  //       bgcolor: "white",
  //       borderwidth: 2,
  //       bordercolor: "gray",
  //       steps: [
  //         { range: [0, 1], color: "yellow" },
  //         { range: [1, 2], color: "yellow" },
  //         { range: [2, 3], color: "yellow" },
  //         { range: [3, 4], color: "yellow-green" },
  //         { range: [4, 5], color: "yellow-green" },
  //         { range: [5, 6], color: "yellow-green" },
  //         { range: [6, 7], color: "green" },
  //         { range: [7, 8], color: "green" },
  //         { range: [8, 9], color: "green" },
  //       ],
  //       threshold: {
  //         line: { color: "red", width: 4 },
  //         thickness: 0.75,
  //         value: 3
  //       }
  //     }
  //   }
  // ];

  // var layout = {
  //   width: 500,
  //   height: 400,
  //   margin: { t: 25, r: 25, l: 25, b: 25 },
  //   paper_bgcolor: "lavender",
  //   font: { color: "darkblue", family: "Arial" }
  // };

  // Plotly.newPlot('myDiv', gaugeData, layout);


  // closing squiggly backet for function optionChanged
};