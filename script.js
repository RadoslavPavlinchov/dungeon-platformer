// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;

// load the texture we need
app.loader.add('tileSet', 'pngegg.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const tileSet = new PIXI.Sprite(resources.tileSet.texture);

    // Setup the position of the bunny
    tileSet.x = app.renderer.width / 2;
    tileSet.y = app.renderer.height / 2;

    // Rotate around the center
    tileSet.anchor.x = 0.5;
    tileSet.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(tileSet);

    // Listen for frame updates
    // app.ticker.add(() => {
    //      // each frame we spin the bunny around a bit
    //      hero.rotation += 0.01;
    // });
});

app.loader.onError.add((...args) => console.error(args[0]));