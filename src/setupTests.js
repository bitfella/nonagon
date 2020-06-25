import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';
import 'jest-canvas-mock';
import 'jest-localstorage-mock';

window.location.assign = jest.fn();
window.location.reload = jest.fn();
window.location.replace = jest.fn();

configure({ adapter: new Adapter() });
fetch.enableMocks();
