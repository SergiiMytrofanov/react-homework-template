
import AppCounter from "./Counter/Counter";
import Painting from "./Paintings/Paitings";
import CounterSecond from "./CounterSecond/CounterSecond";
import paintings from "./databaseJSON/paitings.json";
import AppInput from "./Input/Input";

export const App = () => {
  return(
    <>

    <AppInput/>

    {paintings.map(paintings => (
        <Painting
          key={paintings.id}
          imageUrl={paintings.url}
          title={paintings.title}
          author={paintings.author.tag}
          profileUrl={paintings.author.tag}
          price={paintings.price}
          quantity={paintings.quantity}
        />
      ))}

    <AppCounter />

    <CounterSecond />
    </>

  )
}
