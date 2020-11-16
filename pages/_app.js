import App, { Container } from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hi im on every page!</p>
        <Component />
      </Container>
    )
  }
}