import renderer from 'react-test-renderer';
import App from './App';

describe('App Component', () => {
  test('renders react app', () => {
    const app = renderer.create(<App />);
    expect(app).not.toBe(null);
  });
});
