import 'mm-animations';
import './style/text-field.css';

// TODO: pendiente al cargar el componente, validar que este diligenciada informacion

function textField() {
  const eventChange = (nodeHtml) => {
    const input = nodeHtml.children[0];

    input.addEventListener('change', (event) => {
      const { target: { value: valueComp } } = event;

      if (valueComp && valueComp !== '') {
        input.classList.add('mm-input-not-empty');
      }
    });
  };

  const constructor = () => {
    const components = document.querySelectorAll('.mm-text-field');

    components.forEach((comp) => {
      eventChange(comp);
    });
  };

  constructor();
}

textField();

module.export = { textField };
