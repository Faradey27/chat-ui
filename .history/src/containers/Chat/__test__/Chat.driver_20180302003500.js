import Chat from './../index';
import { mount } from 'enzyme';

class ChatDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<Chat />);
      return this;
    }
  }
}
