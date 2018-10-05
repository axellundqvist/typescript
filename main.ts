declare function require(name:string); // Make it possible to use require in TypeScript
var fs = require('fs');

class FilePublisher {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    } 

    showFile(): void {
        fs.readFile(this.filename, 'utf8', function(err, data) { // Read all of the file content 
            if (err) throw err;
            //console.log(data); // Print all data to the console

            
            let textmassa = data;
            let cleanreg: string[];
            
            let reg:RegExp = /\s+/; // Strip of new lines, blanks and dashes
            // /\s+/ funkar bättre än /\n| |-/
            cleanreg = textmassa.split(reg);    
            
            // console.log(cleanreg);


            

            let clean = cleanreg;

            let count = {};
            
            for(let i of clean){  // For every element in array clean
                   count[i] = (count[i]||0) + 1;
            //    count[i] = count[i] != undefined ? count[i] + 1 : 1; // If object undefined => define and set counter to 1 otherwise increase the counter
            
                if(count[i] != undefined){
                    count[i] = count[i]+1;
                } else {
                    count[i] = 1;
                }
            
                //console.log(i+": "+count[i]); // The element name is "i" and count is "count[i]"
            }
            
            //console.log(count);


            let unsorted = count;
            let sorted = [];
            for (let key in unsorted) sorted.push([key, unsorted[key]]); // Copy the objects to an associative array
            //console.log(sorted); // Display the unsorted array
            sorted.sort(function (a, b) { // Sort the array, (Chrome V8)less than 10 elements => insertion sort otherwise quicksort
                //console.log(a+"-"+b); // Show values sent for sorting
                return a[1] - b[1]; // Make the sort based on the count  
            });

            sorted.reverse(); // Reverse the sorted array to descending order

            console.log(sorted.slice(0,10)); // Show the 10 highest values
        });  
    
    }
}

let obj = new FilePublisher("hitch.txt");
obj.showFile();