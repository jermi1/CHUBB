import { StringMaxLenghtPipe } from './string-max-lenght.pipe';

describe('StringMaxLenghtPipe', () => {
  it('create an instance', () => {
    const pipe = new StringMaxLenghtPipe();
    expect(pipe).toBeTruthy();
  });
});
