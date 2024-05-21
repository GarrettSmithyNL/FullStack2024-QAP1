const fs = require("fs");

// Create a file
// This will create a file called log.txt with the content "Hello USER!"
// If the file already exists, it will overwrite the file
// The callback function will be called when the file is created
fs.writeFile("log.txt", "Hello USER!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Creating log.txt");
  console.log("File created successfully!");
  console.log(
    "Check the project file for file that is created. You have 30 seconds to do so."
  );
  setTimeout(() => {
    console.log("Time is up!");

    // Read a file
    // This will read the file called log.txt
    // The callback function will be called when the file is read
    // The data parameter will contain the contents of the file
    fs.readFile("log.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Reading log.txt");
      console.log(data); // Output: Hello USER!

      // Append to a file
      // This will append the text "This is a new addition" to the file called log.txt
      // If the file does not exist, it will be created
      // The callback function will be called when the text is appended
      fs.appendFile("log.txt", " This is a new addition", (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Appending to log.txt");
        console.log("Text appended successfully!");
        console.log("Reading example.txt again");

        // Read the file again to see the changes
        fs.readFile("log.txt", "utf8", (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(data); // Output: Hello USER! This is a new addition

          // Rename a file
          // This will rename the file log.txt to newlog.txt
          // The callback function will be called when the file is renamed
          console.log("Renaming log.txt to newlog.txt");
          fs.rename("log.txt", "newlog.txt", (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("File renamed successfully!");
            console.log(
              "Check the project file for file renamed. You have 30 seconds to do so."
            );
            setTimeout(() => {
              console.log("Time is up!");

              // Delete a file
              // This will delete the file newlog.txt
              // The callback function will be called when the file is deleted
              console.log("Deleting newlog.txt");
              fs.unlink("newlog.txt", (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log("File deleted successfully!");
              });
            }, 30000);
          });
        });
      });
    });
  }, 30000);
});
