import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-red-100
`

function App() {
  return (
    <Container>
        <div>Use the Container as any other React Component</div>
    </Container>
  );
}

export default App;
