import { Component , ReactElement } from "react";

type Count = { count: number };

export default class State extends Component<unknown, Count> {
  constructor(props: unknown) {
    super(props);
    this.state = {count: 0};
  }

  reset(): void {
    this.setState({count: 0});
  }

  increment(): void {
    this.setState((state) => ({count: state.count + 1}));
  }

  render(): ReactElement {
    const { count } = this.state;

    return (
      <>
        <h1>State Sample</h1>
        <h2> { count } </h2>
        <button onClick={() => this.reset()}>
        Reset
      </button>
        <button onClick={() => this.increment()}>
        Increment
      </button>
      </>
    )
  }
}
