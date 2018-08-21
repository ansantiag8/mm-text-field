import 'mm-animations';
import './styles/mm-text-field.css';

// // Events for input text field
// import eventBlur from './events/blur';
// import eventChange from './events/change';
// import eventFocus from './events/focus';
// import eventKeyUp from './events/keyUp';

const mmTextField = () => {
  const self = {};
  const prototype = Object.getPrototypeOf(self);

  // prototype.events = (input) => {
  //   self.eventBlur(input);
  //   self.eventChange(input);
  //   self.eventFocus(input);
  //   self.eventKeyUp(input);
  // };

  prototype.constructor = () => {
    const components = document.querySelectorAll('.mm-text-field');
    self.inputs = [];

    // prototype.eventBlur = eventBlur;
    // prototype.eventChange = eventChange;
    // prototype.eventFocus = eventFocus;
    // prototype.eventKeyUp = eventKeyUp;

    components.forEach((comp, i) => {
      self.inputs.push(comp);

      // self.events(self.inputs[i].children[0]);
    });
  };

  self.constructor();

  return self;
};

export default mmTextField;
