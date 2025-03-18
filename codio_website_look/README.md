# Interactive Particle Network inspired from codio website

An interactive animated particle network inspired by the Codio website UI. This effect creates a dynamic visualization using Three.js, where particles move and connect with each other, forming an aesthetic web-like structure. The particles react to mouse movement, creating a smooth and engaging visual experience.

## Features

- **Dynamic particle movement**: Particles move randomly with a natural flow.
- **Mouse interaction**: Particles repel when the mouse moves close to them.
- **Connection lines**: Nearby particles connect with semi-transparent lines.
- **Smooth animation**: Optimized rendering with Three.js for fluid motion.
- **Responsive design**: Adapts to different screen sizes.

## Demo

To see the effect in action, open the `index.html` file in a browser.

## Installation & Setup

To use this project, follow these steps:

### 1. Clone the repository

```sh
git clone https://github.com/Jofin-joji/interactive-particle-network.git
```

### 2. Navigate to the project directory

```sh
cd interactive-particle-network
```

### 3. Open the file in a browser

Simply open the `main.html` file in your preferred web browser.

Alternatively, you can use a local server:

```sh
npx serve
```

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Basic styling for background and full-screen view.
- **JavaScript**: Handles animation logic and interactivity.
- **Three.js**: Used for rendering and managing 3D particles.

## File Structure

```
interactive-particle-network/
│-- index.html  # Main file containing Three.js animation
│-- README.md   # Documentation
```

## Customization

### Modify Particle Count

You can change the number of particles by modifying the `starCount` variable in the script:

```js
const starCount = 600; // Adjust this number to increase or decrease particles
```

### Adjust Mouse Interaction

Modify the `mouseRepelStrength` variable to control how much particles react to the cursor:

```js
const mouseRepelStrength = 0.01; // Increase or decrease for stronger/weaker repulsion
```

### Change Connection Distance

Adjust the connection distance in `drawConnections()`:

```js
if (dist < 150) { // Change this value to increase/decrease connection range
```

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is open-source and available under the MIT License.

## Author

Created by [jofin joji](https://github.com/Jofin-joji). Feel free to connect!
