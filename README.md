# remoteExtension

## Overview
This an extension that can be used to access terminal of your linux machine/server.


### Files and Directories
- **background.js**: May be needed in future revisions.
- **CONST_example.js**: remove '_example' from it and put your server's static IP.
- **images/**: Directory containing image assets.
- **libs/**: Directory containing library files.
  - **xterm.css**
  - **xterm.min.js**
- **manifest.json**: Describes what extension metadata.
- **popup.html**: The file that is rendered when extension is open.
- **popup.js**: Runs only when popup.html is open, also handles the connection.

## Installation
To install the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/West-Tiwan/remoteExtension.git
    ```
2. Put server.js file on your server and run it (MAKE SURE THAT PORT 8080 IS OPEN).

3. Remove server.js from the cloned folder.

4. Rename CONST_example.js to CONST.js and put your server's static IP address.

5. Go to chrome://extensions/ and enable developer mode.

6. Load the cloned folder as extension.

7. Now when you open the extension you should see "Welcome to the remoteExtension!" if the connection is successfull.  

## Contributing
If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
MIT

## Contact
If you have any questions or suggestions, please contact xyzmohit.singh@gmail.com