var fs = require('fs');
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name;
    }
    FilePublisher.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err)
                throw err;
            //console.log(data); // Print all data to the console
            var textmassa = data;
            var cleanreg;
            var reg = /\s+/; // Strip of new lines, blanks and dashes
            // /\s+/ funkar bättre än /\n| |-/
            cleanreg = textmassa.split(reg);
            // console.log(cleanreg);
            var clean = cleanreg;
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) { // For every element in array clean
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
                //    count[i] = count[i] != undefined ? count[i] + 1 : 1; // If object undefined => define and set counter to 1 otherwise increase the counter
                if (count[i] != undefined) {
                    count[i] = count[i] + 1;
                }
                else {
                    count[i] = 1;
                }
                //console.log(i+": "+count[i]); // The element name is "i" and count is "count[i]"
            }
            //console.log(count);
            var unsorted = count;
            var sorted = [];
            for (var key in unsorted)
                sorted.push([key, unsorted[key]]); // Copy the objects to an associative array
            //console.log(sorted); // Display the unsorted array
            sorted.sort(function (a, b) {
                //console.log(a+"-"+b); // Show values sent for sorting
                return a[1] - b[1]; // Make the sort based on the count  
            });
            sorted.reverse(); // Reverse the sorted array to descending order
            console.log(sorted.slice(0, 10)); // Show the 10 highest values
        });
    };
    return FilePublisher;
}());
var obj = new FilePublisher("hitch.txt");
obj.showFile();
