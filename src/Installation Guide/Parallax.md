step 1 =>
npm i react-scroll-parallax

step 2 =>
wrap using provider

const AppContainer = () => (
  <ParallaxProvider>
    <Router>
      <App />
    </Router>
  </ParallaxProvider>
)


step 3 =>
use hook or component

Create effects with a hook:

function Component() {
  const parallax = useParallax({
    speed: -10,
  });
  return <div ref={parallax.ref} />;
}


or with a component:

function Component() {
  return (
    <Parallax speed={-10}>
      <div />
    </Parallax>
  );
}