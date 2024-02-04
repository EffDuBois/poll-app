# Public Complaints App for Malleshwaram

The **Public Complaints App** is a platform that empowers residents of Malleshwaram to voice their concerns, rate issue resolutions, and access relevant information. Whether it's a pothole on the street, a broken streetlight, or any other civic issue, this app allows users to engage with local authorities and fellow citizens.

## Technologies Used
- **React Native**: A framework for building native apps using React. React Native lets us use the same codebase for both iOS and Android platforms, saving time and resources. React Native also provides a rich set of components and APIs for creating user interfaces and interacting with device features.
- **Firebase**: A platform that provides various services for developing and deploying web and mobile applications. Firebase offers features such as authentication, database, storage, hosting, analytics, and more. Firebase also supports real-time data synchronization, which enables us to update the app state across multiple devices without reloading.
- **Expo**: A toolchain that simplifies the development and testing of React Native apps. Expo allows us to run the app on a simulator or a physical device without installing any native dependencies. Expo also provides access to native modules and libraries that enhance the app functionality and performance.
- **TypeScript**: A statically typed superset of JavaScript that improves code quality, provides better tooling, and helps catch errors early during development.
- **Redux**: A predictable state management library for JavaScript applications. Redux simplifies managing the app's global state, making it easier to handle complex data flows and interactions.

## Features

### 1. **Submit Complaints**
- Users can easily submit complaints regarding public issues they encounter. Whether it's garbage collection delays, water supply disruptions, or infrastructure problems, this feature allows residents to report the issue directly through the app.
- Steps to submit a complaint:
    1. Open the app.
    2. Navigate to the "Complaints" section.
    3. Provide details about the issue (location, description, and category).
    4. Submit the complaint.

### 2. **Rate Issue Resolutions and Polls**
- After a complaint has been addressed by the authorities, users can rate the resolution process. Did it meet their expectations? Was it timely? This feedback helps improve service delivery.
- Additionally, the app may occasionally run polls related to local governance, infrastructure, or community events. Users can participate and express their opinions.

### 3. **Events**
- The app serves as an information hub for Malleshwaram residents. It provides:
    - **Emergency Contacts**: Quick access to emergency services, hospitals, police stations, and fire departments.
    - **Local News and Updates**: Stay informed about community events, road closures, festivals, and other happenings.
    - **Government Announcements**: Receive official announcements from local authorities.
    - **Community Notices**: Postings related to neighborhood meetings, cultural programs, and social initiatives.

## Installation and Usage
1. **Download the App**: Visit the [App Store](https://example-app-store-link.com) or [Google Play Store](https://example-play-store-link.com) and search for "Public Complaints Malleshwaram."
2. **Create an Account**: Sign up using your mobile number or email address.
3. **Explore Features**: Navigate through the app to explore the features mentioned above.
4. **Submit Complaints**: Use the "Submit Complaint" feature to report issues.
5. **Rate Resolutions**: After a complaint is resolved, provide feedback.
6. **Stay Informed**: Check the "Events" section for updates.

## Contributing
We welcome contributions from the community! If you're a developer, feel free to fork the repository and submit pull requests. For non-technical contributions, please reach out to our team.

## How to clone and run project on your system
1. **Install Node.js**:
    - Ensure you have Node.js installed on your system. If not, download and install it from the [official Node.js website](https://nodejs.org/).

2. **Clone the Expo Go Project**:
    - Open your terminal or command prompt.
    - Navigate to the directory where you want to clone the project.
    - Run the following command to clone the project repository:
        ```bash
        git clone https://github.com/EffDuBois/poll-app.git
        ```

3. **Install Dependencies**:
    - Change into the project directory:
        ```bash
        cd poll-app
        ```
    - Install project dependencies using either `npm` or `yarn`:
        ```bash
        npm install
        # OR
        yarn install
        ```

4. **Start the Development Server**:
    - Run the following command to start the Expo development server:
        ```bash
        npx expo start
        ```
    - Expo CLI will generate a QR code.

5. **Run the App on Your Device**:
    - Install the **Expo Go** app on your Android or iOS device:
        - Android: [Expo Go on Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
        - iOS: [Expo Go on App Store](https://apps.apple.com/us/app/expo-go/id982107779)
    - Open the Expo Go app.
    - Scan the QR code displayed in your terminal using your device's camera (on iOS) or the Expo Go app (on Android).
    - The app will load on your device.

6. **Explore and Modify the App**:
    - Make changes to your project files (e.g., `App.js`) using your preferred text editor.
    - The app will automatically reload when you save your changes.

7. **Additional Tips**:
    - If you prefer to run the app directly on your computer (without a physical device), consider setting up an Android Emulator or an iOS Simulator (macOS only).

## License
This app is released under the [MIT License](LICENSE.md).

## Team
